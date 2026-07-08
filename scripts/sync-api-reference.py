#!/usr/bin/env python3
"""HarmonyOS API Reference 增量同步脚本

从华为开发者官网 daily 同步 API 参考文档 (harmonyos-references catalog)，
支持新增、更新检测。通过 content_hash 避免重复写入。

用法:
    python3 scripts/sync-api-reference.py              # 全量查重
    python3 scripts/sync-api-reference.py --force      # 强制重新拉取所有
    python3 scripts/sync-api-reference.py --sample 10  # 测试模式

用于 GitHub Actions daily cron job，有变更时自动 commit + push。
"""

import hashlib
import html as html_mod
import os
import re
import sys
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime
from pathlib import Path

# ── 路径 ──────────────────────────────────────────────
REPO_DIR = Path(__file__).resolve().parent.parent
DOCS_DIR = REPO_DIR / "api-reference" / "docs"
CATALOG = "harmonyos-references"

# ── 华为 API ──────────────────────────────────────────
DOC_API = (
    "https://svc-drcn.developer.huawei.com/community/servlet/consumer/"
    "cn/documentPortal/getDocumentById"
)
TREE_API = (
    "https://svc-drcn.developer.huawei.com/community/servlet/consumer/"
    "cn/documentPortal/getCatalogTree"
)
API_HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/",
    "User-Agent": "Mozilla/5.0 (compatible; HarmonyOS-API-Syncer/1.0)",
}

CONCURRENCY = 4
REQUEST_TIMEOUT = 30
TREE_TIMEOUT = 60

# ── 路径映射（一级分类中文→英文）────────────────────
TOP_SECTION_MAP = {
    "api参考概述": "overview",
    "应用框架": "app-framework",
    "系统": "system",
    "媒体": "media",
    "应用服务": "app-services",
    "图形": "graphics",
    "ai": "ai",
    "公共基础能力": "common",
    "标准库": "stdlib",
}


# ==================== API 调用 ====================

def _api_post(url, body, timeout=REQUEST_TIMEOUT):
    """调用华为文档 API（用 urllib 避免 httpx 依赖）。"""
    import json
    import ssl
    data = json.dumps(body).encode("utf-8")
    ctx = ssl.create_default_context()
    req = urllib.request.Request(url, data=data, headers=API_HEADERS, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=timeout, context=ctx) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        print(f"  ⚠ API 调用失败: {e}", file=sys.stderr)
        return None


def fetch_catalog_tree(catalog_name):
    """拉取 catalog 目录树，返回叶子节点列表 [(objectId, title, breadcrumb, depth)]。"""
    body = {"catalogName": catalog_name, "version": "", "language": "cn"}
    data = _api_post(TREE_API, body, timeout=TREE_TIMEOUT)
    if not data:
        return []
    value = data.get("value", {})
    nodes = value.get("catalogTreeList", [])
    if not isinstance(nodes, list):
        nodes = [nodes] if nodes else []

    leaves = []

    def walk(ns, breadcrumb, depth):
        for n in ns:
            if isinstance(n, str):
                continue
            title = n.get("nodeName", "")
            oid = n.get("relateDocument", "")
            children = n.get("children", [])
            bc = breadcrumb + [title]
            if n.get("isLeaf") and oid:
                leaves.append((oid, title, bc, depth))
            walk(children, bc, depth + 1)

    walk(nodes, [], 0)
    return leaves


def fetch_doc(object_id, catalog_name):
    """拉取单篇文档，返回 {'html', 'title'} 或 None。"""
    body = {"objectId": object_id, "version": "",
            "catalogName": catalog_name, "language": "cn"}
    data = _api_post(DOC_API, body)
    if not data:
        return None
    value = data.get("value", {})
    content_info = value.get("content", {})
    return {
        "html": content_info.get("content", ""),
        "title": value.get("title", ""),
    }


# ==================== 路径生成 ====================

def doc_path_en(breadcrumb, object_id):
    """生成英文文档路径，格式: {section}/{subgroup}/{object_id}"""
    parts = []
    if breadcrumb:
        top = breadcrumb[0].strip().lower()
        parts.append(TOP_SECTION_MAP.get(top, top))
    # oid 清理：取最后一段，去掉尾部版本号
    oid_clean = object_id.split("/")[-1] if "/" in object_id else object_id
    oid_clean = re.sub(r"-\d{10,}$", "", oid_clean)
    # 子目录：从 object_id 提取分组前缀（≥4段才建子目录）
    segments = oid_clean.split("-")
    if len(segments) >= 4:
        subgroup = "-".join(segments[:-1])
        parts.append(subgroup)
    parts.append(oid_clean)
    return "/".join(parts)


# ==================== HTML → Markdown ====================

def _inline(text):
    """内联 HTML → Markdown（strong/em/code/a/span）。"""
    if not text:
        return ""
    text = re.sub(r"<strong[^>]*>(.*?)</strong>", r"**\1**", text, flags=re.S | re.I)
    text = re.sub(r"<b[^>]*>(.*?)</b>", r"**\1**", text, flags=re.S | re.I)
    text = re.sub(r"<em[^>]*>(.*?)</em>", r"*\1*", text, flags=re.S | re.I)
    text = re.sub(r"<i[^>]*>(.*?)</i>", r"*\1*", text, flags=re.S | re.I)
    text = re.sub(r"<code[^>]*>(.*?)</code>", r"`\1`", text, flags=re.S | re.I)
    text = re.sub(r"<a[^>]*>(.*?)</a>", r"\1", text, flags=re.S | re.I)
    text = re.sub(r"<span[^>]*>(.*?)</span>", r"\1", text, flags=re.S | re.I)
    text = re.sub(r"<[^>]+>", "", text)
    text = html_mod.unescape(text)
    text = re.sub(r"\s+", " ", text).strip()
    return text


def html_to_md(html):
    """HTML → Markdown。返回 (markdown, images_list)。"""
    if not html:
        return "", []

    images = []
    code_blocks = []

    # 1) 保护 <pre> 代码块
    def _stash_pre(m):
        inner = re.sub(r"<[^>]+>", "", m.group(1))
        inner = html_mod.unescape(inner)
        idx = len(code_blocks)
        code_blocks.append(inner)
        return f"\x00CODE{idx}\x00"
    html = re.sub(r"<pre[^>]*>(.*?)</pre>", _stash_pre, html, flags=re.S | re.I)

    # 2) 图片
    def _img(m):
        attrs = m.group(0)
        src = re.search(r'src=["\']([^"\']+)["\']', attrs, re.I)
        alt = re.search(r'alt=["\']([^"\']*)["\']', attrs, re.I)
        if not src:
            return ""
        url = html_mod.unescape(src.group(1))
        alt_t = alt.group(1) if alt else ""
        fname = url.split("?")[0].split("/")[-1]
        if not fname:
            return ""
        images.append((url, fname))
        return f"![{alt_t}](./img/{fname})"
    html = re.sub(r"<img[^>]*>", _img, html, flags=re.I)

    # 3) 链接
    def _link(m):
        url = html_mod.unescape(m.group(1))
        text = _inline(m.group(2))
        return f"[{text}]({url})" if text else ""
    html = re.sub(
        r'<a[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>',
        _link, html, flags=re.S | re.I,
    )
    html = re.sub(r"<a[^>]*>(.*?)</a>", lambda m: _inline(m.group(1)),
                  html, flags=re.S | re.I)

    # 4) 标题 h6..h1
    for lvl in range(6, 0, -1):
        html = re.sub(
            rf"<h{lvl}[^>]*>(.*?)</h{lvl}>",
            lambda m, L=lvl: "\n\n" + "#" * L + " " + _inline(m.group(1)) + "\n\n",
            html, flags=re.S | re.I,
        )

    # 5) 引用
    def _quote(m):
        body = _inline(m.group(1))
        return "\n\n" + "\n".join("> " + ln for ln in body.split("\n")) + "\n\n"
    html = re.sub(r"<blockquote[^>]*>(.*?)</blockquote>", _quote,
                  html, flags=re.S | re.I)

    # 6) 列表
    def _ol(m):
        items = re.findall(r"<li[^>]*>(.*?)</li>", m.group(1), re.S | re.I)
        out = [f"{i}. {_inline(it)}" for i, it in enumerate(items, 1)]
        return "\n\n" + "\n".join(out) + "\n\n" if out else ""

    def _ul(m):
        items = re.findall(r"<li[^>]*>(.*?)</li>", m.group(1), re.S | re.I)
        out = [f"- {_inline(it)}" for it in items]
        return "\n\n" + "\n".join(out) + "\n\n" if out else ""
    for _ in range(3):
        html = re.sub(r"<ol[^>]*>(.*?)</ol>", _ol, html, flags=re.S | re.I)
        html = re.sub(r"<ul[^>]*>(.*?)</ul>", _ul, html, flags=re.S | re.I)

    # 7) 表格
    def _table(m):
        rows = re.findall(r"<tr[^>]*>(.*?)</tr>", m.group(0), re.S | re.I)
        if not rows:
            return ""
        lines = []
        for i, row in enumerate(rows):
            cells = re.findall(r"<t[hd][^>]*>(.*?)</t[hd]>", row, re.S | re.I)
            cells = [_inline(c) for c in cells]
            if not cells:
                continue
            lines.append("| " + " | ".join(cells) + " |")
            if i == 0:
                lines.append("| " + " | ".join(["---"] * len(cells)) + " |")
        return "\n\n" + "\n".join(lines) + "\n\n" if lines else ""
    html = re.sub(r"<table[^>]*>.*?</table>", _table, html, flags=re.S | re.I)

    # 8) 段落 / div / 换行
    html = re.sub(r"<br\s*/?>", "\n", html, flags=re.I)
    html = re.sub(r"</p>", "\n\n", html, flags=re.I)
    html = re.sub(r"</div>", "\n", html, flags=re.I)
    html = re.sub(r"</li>", "", html, flags=re.I)
    html = re.sub(r"<(?:p|div|li|section|article|span)[^>]*>", "", html, flags=re.I)

    # 9) 残余标签清理
    html = re.sub(r"<[^>]+>", "", html)

    # 10) 反转义
    html = html_mod.unescape(html)

    # 11) 清理空白
    html = "\n".join(
        re.sub(r"[ \t]{2,}", " ", ln).strip()
        for ln in html.split("\n")
    )

    # 12) 还原代码块
    html = re.sub(
        r"\x00CODE(\d+)\x00",
        lambda m: "\n```\n" + code_blocks[int(m.group(1))] + "\n```\n",
        html,
    )

    # 13) 整理空行
    html = re.sub(r"\n{3,}", "\n\n", html).strip()
    return html + "\n", images


# ==================== Frontmatter ====================

def parse_frontmatter(content):
    """解析 Markdown frontmatter，返回 dict。"""
    if not content.startswith("---"):
        return {}
    end = content.find("\n---", 3)
    if end == -1:
        return {}
    raw = content[3:end]
    fm = {}
    for line in raw.strip().split("\n"):
        if ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip().strip('"').strip("'")
    return fm


def make_frontmatter(title, upstream_id, content_hash):
    """生成 frontmatter 字符串。"""
    return f"""---
title: "{title}"
upstream_id: "{upstream_id}"
catalog: "{CATALOG}"
content_hash: "{content_hash}"
synced_at: "{datetime.now().isoformat()}"
---

"""


# ==================== 内容指纹 ====================

def content_core(text, is_markdown=False):
    """归一化文本为纯内容核心，用于跨格式比较。"""
    if not text:
        return ""
    if is_markdown:
        if text.startswith("---"):
            end = text.find("\n---", 3)
            if end != -1:
                text = text[end + 4:]
        text = re.sub(r"<[^>]+>", "", text)
        text = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", text)
        text = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", text)
        text = re.sub(r"`([^`]*)`", r"\1", text)
        text = re.sub(r"\\([_*>#\[\]()])", r"\1", text)
        text = text.replace("\\", "")
        text = re.sub(r"^#+\s*", "", text, flags=re.MULTILINE)
        text = re.sub(r"\*\*([^*]*)\*\*", r"\1", text)
        text = re.sub(r"\*([^*]*)\*", r"\1", text)
        text = re.sub(r"^```.*$", "", text, flags=re.MULTILINE)
    else:
        text = re.sub(r"<h1[^>]*>.*?</h1>", "", text, flags=re.DOTALL | re.I)
        text = re.sub(r"<[^>]+>", "", text)
        text = text.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&")
        text = text.replace("&nbsp;", " ").replace("&quot;", '"')
    text = re.sub(r"[^\\u4e00-\\u9fff\\u3400-\\u4dbfa-zA-Z0-9]", "", text)
    return text


def content_sig(text, is_markdown=False):
    """内容指纹 md5[:12]。"""
    core = content_core(text, is_markdown)
    return hashlib.md5(core.encode()).hexdigest()[:12]


# ==================== 图片下载 ====================

def download_images(images, img_dir):
    """下载图片到 img_dir。"""
    img_dir.mkdir(parents=True, exist_ok=True)
    downloaded = 0
    for url, fname in images:
        dest = img_dir / fname
        if dest.exists():
            continue
        try:
            urllib.request.urlretrieve(url, str(dest))
            downloaded += 1
        except Exception:
            pass
    return downloaded


# ==================== 主流程 ====================

def scan_local_files():
    """扫描本地 api-reference/docs/ 下所有 .md 文件，返回 {upstream_id: {path, title, content_hash}}"""
    registry = {}
    for fp in DOCS_DIR.rglob("*.md"):
        if "/img/" in str(fp):
            continue
        try:
            raw = fp.read_text(encoding="utf-8")
        except Exception:
            continue
        fm = parse_frontmatter(raw)
        uid = fm.get("upstream_id", "")
        if not uid:
            continue
        rel = str(fp.relative_to(REPO_DIR))
        registry[uid] = {
            "path": rel,
            "title": fm.get("title", ""),
            "content_hash": fm.get("content_hash", ""),
        }
    return registry


def process_one(leaf, local_registry, force=False, backfill=False):
    """处理单个叶子节点：比对、下载、转换、保存。

    返回: (status, details)
      status: "skip" | "new" | "updated" | "error" | "backfill"
    """
    oid, title, breadcrumb, depth = leaf
    upstream_id = f"{CATALOG}/{oid}"
    path_stem = doc_path_en(breadcrumb, oid)
    md_path = DOCS_DIR / f"{path_stem}.md"
    rel = str(md_path.relative_to(REPO_DIR))

    # 拉取上游内容
    result = fetch_doc(oid, CATALOG)
    if not result or not result.get("html"):
        return "error", {"upstream_id": upstream_id, "title": title}

    html = result["html"]
    upstream_sig = content_sig(html, is_markdown=False)

    # 检查是否需要更新
    local = local_registry.get(upstream_id)
    if not force and local:
        stored_hash = local.get("content_hash", "")
        if stored_hash == upstream_sig:
            return "skip", {"upstream_id": upstream_id, "title": title}
        # 首次运行（无 content_hash）：比较内容
        if not stored_hash and md_path.exists():
            try:
                local_raw = md_path.read_text(encoding="utf-8")
                local_sig = content_sig(local_raw, is_markdown=True)
                if local_sig == upstream_sig:
                    # 内容一致，只补 content_hash
                    _update_frontmatter_hash(md_path, upstream_sig)
                    return "backfill", {"upstream_id": upstream_id, "title": title}
            except Exception:
                pass
        # backfill 模式：只补 hash，不改内容
        if backfill and md_path.exists():
            _update_frontmatter_hash(md_path, upstream_sig)
            return "backfill", {"upstream_id": upstream_id, "title": title}

    # 转换 HTML → MD
    markdown, images = html_to_md(html)
    title_final = result.get("title") or title

    # 构造内容（frontmatter + body）
    fm = make_frontmatter(title_final, upstream_id, upstream_sig)
    content = fm + markdown

    # 写入文件
    is_new = not md_path.exists()
    md_path.parent.mkdir(parents=True, exist_ok=True)
    md_path.write_text(content, encoding="utf-8")

    # 下载图片
    img_dir = md_path.parent / "img"
    img_count = download_images(images, img_dir)

    status = "new" if is_new else "updated"
    return status, {
        "upstream_id": upstream_id,
        "title": title_final,
        "path": rel,
        "images": img_count,
    }


def _update_frontmatter_hash(md_path, content_hash):
    """仅更新已有 .md 文件的 frontmatter content_hash 字段。"""
    try:
        raw = md_path.read_text(encoding="utf-8")
    except Exception:
        return
    if not raw.startswith("---"):
        return
    end = raw.find("\n---", 3)
    if end == -1:
        return
    fm_text = raw[3:end]
    body = raw[end + 4:]
    # 替换或新增 content_hash
    if re.search(r"^content_hash:", fm_text, re.MULTILINE):
        fm_text = re.sub(r"^content_hash:.*", f'content_hash: "{content_hash}"',
                         fm_text, flags=re.MULTILINE)
    else:
        fm_text += f'\ncontent_hash: "{content_hash}"'
    # 更新 synced_at
    if re.search(r"^synced_at:", fm_text, re.MULTILINE):
        fm_text = re.sub(r"^synced_at:.*",
                         f'synced_at: "{datetime.now().isoformat()}"',
                         fm_text, flags=re.MULTILINE)
    new_content = f"---\n{fm_text}\n---\n{body}"
    md_path.write_text(new_content, encoding="utf-8")


def main():
    import argparse
    parser = argparse.ArgumentParser(description="API Reference 增量同步")
    parser.add_argument("--sample", type=int, default=0, help="测试模式：只处理 N 篇")
    parser.add_argument("--force", action="store_true", help="强制重新拉取覆盖所有文件")
    parser.add_argument("--backfill", action="store_true",
                        help="仅回填 content_hash（不改内容，用于首次初始化）")
    args = parser.parse_args()

    # 1. 拉取目录树
    print(f"📡 拉取 {CATALOG} 目录树...")
    leaves = fetch_catalog_tree(CATALOG)
    if not leaves:
        print("❌ 拉取目录树失败")
        return 1
    print(f"📊 目录树: {len(leaves)} 个叶子节点")

    if args.sample:
        leaves = leaves[:args.sample]
        print(f"🧪 测试模式: 只处理 {args.sample} 篇")

    if args.backfill:
        print("📝 backfill 模式: 只回填 content_hash，不修改正文")

    # 2. 扫描本地文件
    print("📂 扫描本地文件...")
    local_registry = scan_local_files()
    print(f"📁 本地已有: {len(local_registry)} 个文件")

    # 3. 逐个处理
    stats = {"new": 0, "updated": 0, "skip": 0, "error": 0, "backfill": 0, "img_total": 0}
    results_new = []
    results_updated = []
    start = time.time()

    with ThreadPoolExecutor(max_workers=CONCURRENCY) as pool:
        futures = {
            pool.submit(process_one, leaf, local_registry, args.force, args.backfill): leaf
            for leaf in leaves
        }
        for i, future in enumerate(as_completed(futures), 1):
            status, details = future.result()
            stats[status] = stats.get(status, 0) + 1
            if status == "new":
                results_new.append(details)
                stats["img_total"] += details.get("images", 0)
            elif status == "updated":
                results_updated.append(details)
                stats["img_total"] += details.get("images", 0)

            if i % 100 == 0 or i == len(futures):
                elapsed = time.time() - start
                rate = i / elapsed if elapsed > 0 else 0
                print(f"  [{i}/{len(leaves)}] "
                      f"new={stats['new']} upd={stats['updated']} "
                      f"backfill={stats['backfill']} "
                      f"skip={stats['skip']} err={stats['error']} "
                      f"{rate:.1f} p/s")

    elapsed = time.time() - start
    print(f"\n{'='*50}")
    print(f"✅ 完成: {stats['new']} 新增, {stats['updated']} 更新, "
          f"{stats['backfill']} 回填, {stats['skip']} 跳过, {stats['error']} 失败")
    print(f"⏱️  耗时: {elapsed/60:.1f} 分钟")
    print(f"🖼️  下载图片: {stats['img_total']} 张")

    if results_new:
        print(f"\n🆕 新增 ({len(results_new)}):")
        for r in results_new[:20]:
            print(f"  + {r['path']} — {r['title']}")
        if len(results_new) > 20:
            print(f"  ... 还有 {len(results_new) - 20} 篇")

    if results_updated:
        print(f"\n🔄 更新 ({len(results_updated)}):")
        for r in results_updated[:20]:
            print(f"  ~ {r['path']} — {r['title']}")
        if len(results_updated) > 20:
            print(f"  ... 还有 {len(results_updated) - 20} 篇")

    # 统计
    md_files = list(DOCS_DIR.rglob("*.md"))
    total_size = sum(f.stat().st_size for f in md_files)
    print(f"\n📁 总计: {len(md_files)} 个 MD 文件, {total_size/1024/1024:.1f} MB")

    if stats["error"] > 0:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
