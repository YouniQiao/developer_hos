"""合入执行引擎：根据 change_type 把上游变更落地到本地文档库。

主入口：execute_change(change_id) -> dict

  added    -> 拉取华为 HTML → 转 Markdown → 写入本地 .md → 下载图片到 img/ → 更新 content-map.json
  deleted  -> 删除本地 .md（备份后）→ 记录被删路径 → 从 content-map 移除条目
  modified -> 重新拉取覆盖 → 下载新图片 → 更新 frontmatter 的 upstream_hash

执行流程：
  执行前：备份被影响的已有文件到 .sync-backup/<change_id>/，记录 git 跟踪状态
  执行中：status=executing，progress 逐步上报
  执行后：status=done/failed，execution_log 写入 JSON（steps + backup_path + 回滚所需信息）

并发：模块级 threading.Lock 保证同一时刻只有一个执行任务。
"""
import hashlib
import html as html_mod
import json
import re
import shutil
import subprocess
import threading
from datetime import datetime
from pathlib import Path

import httpx

from config import (
    REPO_DIR, DOC_API, API_HEADERS, REQUEST_TIMEOUT,
    CATALOG_MAP, EXTRA_CATALOGS, get_catalog, SIDEBAR_MAP,
)
import models
import progress
from sync_runner import (
    _html_signature, _parse_frontmatter,
)

# 同时只允许一个执行任务
_lock = threading.Lock()

# 备份根目录（在 repo 内，便于回滚定位；未 gitignore，属临时文件）
BACKUP_ROOT = REPO_DIR / ".sync-backup"


# ==================== 华为 API ====================

def _fetch_doc_full(object_id, catalog):
    """拉取单篇文档，返回 {html, title, fileName, catalogName} 或 None。

    比 sync_runner.fetch_doc 多返回 fileName（本地文件名 slug）。
    """
    body = {"objectId": object_id, "version": "",
            "catalogName": catalog, "language": "cn"}
    try:
        r = httpx.post(DOC_API, json=body, headers=API_HEADERS,
                       timeout=REQUEST_TIMEOUT)
        r.raise_for_status()
        data = r.json()
    except Exception:
        return None
    v = data.get("value", {})
    c = v.get("content", {})
    return {
        "html": c.get("content", ""),
        "title": v.get("title", ""),
        "fileName": v.get("fileName", ""),
        "catalogName": v.get("catalogName", catalog),
    }


# ==================== 路径推导 ====================

def _build_catalog_prefix_map():
    """catalog -> 最长本地路径前缀（最具体的目录），用于 added 文档落地。"""
    pairs = [(p, c) for p, c in CATALOG_MAP]
    pairs += [(p, c) for p, c in EXTRA_CATALOGS.items()]
    m = {}
    for prefix, cat in pairs:
        cur = m.get(cat)
        if cur is None or len(prefix) > len(cur):
            m[cat] = prefix
    return m


_CATALOG_PREFIX = _build_catalog_prefix_map()


def _catalog_to_path_prefix(catalog):
    """catalog -> 本地 docs 子目录前缀，未知则落到 docs/_synced/<catalog>。"""
    return _CATALOG_PREFIX.get(catalog) or f"docs/_synced/{catalog}"


def _doc_path_to_uid(doc_path):
    """docs/dev/app-dev/foo/bar.md -> dev/app-dev/foo/bar"""
    p = doc_path
    if p.startswith("docs/"):
        p = p[len("docs/"):]
    if p.endswith(".md"):
        p = p[:-3]
    return p


def _today():
    return datetime.now().strftime("%Y-%m-%d")


def _make_map_entry(uid, rel_path, title, catalog, file_name, sig):
    """构造一条 content-map docs 条目（与现有结构一致）。"""
    return {
        "path": rel_path,
        "title": title,
        "status": "mirror",
        "upstream_url": f"https://developer.huawei.com/consumer/cn/doc/{catalog}/{file_name}",
        "last_sync": _today(),
        "sync_hash": sig,
        "has_upstream_changes": False,
        "relationships": {
            "split_from": "",
            "split_into": [],
            "merged_from": [],
            "merged_into": "",
        },
    }


# ==================== HTML -> Markdown ====================

def _inline(text):
    """把一段内联 HTML 转成 Markdown 内联文本（strong/em/code/a/span）。"""
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


def _html_to_md(html):
    """简易 HTML→Markdown 转换。返回 (markdown, images)。

    images: [(url, filename), ...] 待下载的图片。
    覆盖：标题、段落、有序/无序列表、代码块、链接、图片、粗体/斜体/行内代码、引用、表格。
    不追求完美，能还原基本结构即可。
    """
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

    # 2) 图片：收集 URL + 替换为 ![](./img/name)
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

    # 3) 链接：[text](url)（在列表/标题处理前完成，避免 _inline 丢链接）
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

    # 6) 列表（重复 3 轮以处理简单嵌套）
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

    # 7) 表格（基础）
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

    # 9) 残余内联标签清理
    html = re.sub(r"<[^>]+>", "", html)

    # 10) 反转义实体
    html = html_mod.unescape(html)

    # 10.5) 清理行：折叠多余空白、去除行首尾空白（代码块已受保护，缩进不受影响）
    html = "\n".join(
        re.sub(r"[ \t]{2,}", " ", ln).strip()
        for ln in html.split("\n")
    )

    # 11) 还原代码块
    html = re.sub(
        r"\x00CODE(\d+)\x00",
        lambda m: "\n```\n" + code_blocks[int(m.group(1))] + "\n```\n",
        html,
    )

    # 12) 整理空行
    html = re.sub(r"\n{3,}", "\n\n", html).strip()
    return html + "\n", images


# ==================== 图片下载 ====================

def _download_images(images, img_dir):
    """下载图片到 img_dir，返回成功保存的 [(url, filename), ...]。"""
    img_dir.mkdir(parents=True, exist_ok=True)
    saved = []
    headers = {"User-Agent": "Mozilla/5.0",
               "Referer": "https://developer.huawei.com/"}
    for url, fname in images:
        if not fname:
            continue
        dest = img_dir / fname
        if dest.exists():
            saved.append((url, fname))
            continue
        try:
            r = httpx.get(url, headers=headers, timeout=REQUEST_TIMEOUT,
                          follow_redirects=True)
            r.raise_for_status()
            dest.write_bytes(r.content)
            saved.append((url, fname))
        except Exception:
            continue  # 单张图片失败不阻断整体执行
    return saved


# ==================== 备份 / git ====================

def _git_tracked(rel_path):
    try:
        r = subprocess.run(
            ["git", "ls-files", "--error-unmatch", rel_path],
            cwd=REPO_DIR, capture_output=True, text=True,
        )
        return r.returncode == 0
    except Exception:
        return False


def _backup_file(rel_path, change_id):
    """备份已有文件到 .sync-backup/<change_id>/<flattened>，返回相对备份路径或 None。"""
    src = REPO_DIR / rel_path
    if not src.exists():
        return None
    dest_dir = BACKUP_ROOT / str(change_id)
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / rel_path.replace("/", "__")
    shutil.copy2(src, dest)
    return str(dest.relative_to(REPO_DIR))


def _backup_root_rel(change_id):
    p = BACKUP_ROOT / str(change_id)
    return str(p.relative_to(REPO_DIR)) if p.exists() else None


# ==================== frontmatter ====================

def _build_frontmatter_added(title, uid, sig):
    return "\n".join([
        "---",
        f'title: "{title}"',
        f"original_url: /docs/{uid}",
        "format: md",
        f"upstream_id: {uid}",
        f"last_sync: {_today()}",
        f"sync_hash: {sig}",
        f"upstream_hash: {sig}",
        "---",
        "",
    ])


def _rebuild_frontmatter_with_hash(old_content, new_hash):
    """保留旧 frontmatter 全部字段，更新 upstream_hash/last_sync/sync_hash，
    返回新的 frontmatter 文本（含尾换行）。"""
    fm = _parse_frontmatter(old_content)
    fm["upstream_hash"] = new_hash
    fm["last_sync"] = _today()
    fm["sync_hash"] = new_hash
    lines = ["---"]
    for k, v in fm.items():
        lines.append(f"{k}: {v}")
    lines.append("---")
    return "\n".join(lines) + "\n"


# ==================== Sidebar 自动更新 ====================

def _update_sidebar(catalog, breadcrumb, doc_id_rel):
    """执行新增时，尝试在 sidebar 文件中插入新文档条目。

    策略（仅匹配现有 category，不新建）：
      1. 从 SIDEBAR_MAP 找到 catalog 对应的 sidebar 文件
      2. 解析所有 category label 及其 items 数组在文件中的位置
      3. 用 breadcrumb 的各级标题（从深到浅）匹配 category label
      4. 匹配到了 → 在该 category items 末尾插入 doc ID
      5. 匹配不到 → 返回 (False, reason)，不修改文件

    返回: (updated: bool, message: str)
    """
    sidebar_file = SIDEBAR_MAP.get(catalog)
    if not sidebar_file:
        return False, f"catalog {catalog} 无 sidebar 映射"

    filepath = REPO_DIR / sidebar_file
    if not filepath.exists():
        return False, f"sidebar 文件不存在: {sidebar_file}"

    if not breadcrumb:
        return False, "无 breadcrumb 信息"

    content = filepath.read_text(encoding="utf-8")

    # 解析 breadcrumb 层级
    bc_parts = [p.strip() for p in breadcrumb.split(">") if p.strip()]
    if len(bc_parts) < 2:
        return False, f"breadcrumb 层级不足: {breadcrumb}"

    # doc_id_rel: 去掉 docs/ 前缀和 .md 后缀的相对路径
    doc_id = doc_id_rel
    if doc_id.startswith("docs/"):
        doc_id = doc_id[len("docs/"):]
    if doc_id.endswith(".md"):
        doc_id = doc_id[:-3]

    # 检查是否已存在
    if f"'{doc_id}'" in content or f'"{doc_id}"' in content:
        return False, f"doc ID 已存在于 sidebar: {doc_id}"

    # 从深到浅匹配 breadcrumb 层级（去掉最后一级=文档自身标题）
    search_titles = list(reversed(bc_parts[:-1]))

    # 解析 sidebar 文件中所有 category label
    # 匹配 pattern: label: 'xxx' 或 label: "xxx"
    label_pattern = re.compile(r"label:\s*['\"](.+?)['\"]")
    labels = label_pattern.findall(content)

    matched_label = None
    for title in search_titles:
        # 精确匹配
        if title in labels:
            matched_label = title
            break
        # 去括号模糊匹配（如 "应用质量管理（APMS）" → "应用质量管理"）
        stripped = re.sub(r"[（(].*?[）)]", "", title).strip()
        if stripped and stripped != title:
            for l in labels:
                if re.sub(r"[（(].*?[）)]", "", l).strip() == stripped:
                    matched_label = l
                    break
            if matched_label:
                break

    if not matched_label:
        return False, f"未匹配到 category label，breadcrumb: {breadcrumb}"

    # 找到该 label 对应的 category 块，在 items 数组末尾插入
    # 策略：找到 label: 'xxx' 所在行，往后找 items: [ ... ] 的结束位置
    lines = content.split("\n")
    label_line_idx = None
    for i, line in enumerate(lines):
        if f"label: '{matched_label}'" in line or f'label: "{matched_label}"' in line:
            label_line_idx = i
            break

    if label_line_idx is None:
        return False, f"找到 label 但定位行失败: {matched_label}"

    # 从 label 行往后找 items: [
    items_start = None
    for i in range(label_line_idx, min(label_line_idx + 5, len(lines))):
        if "items:" in lines[i] and "[" in lines[i]:
            items_start = i
            break

    if items_start is None:
        return False, f"未找到 items 数组: {matched_label}"

    # 找 items 数组的结束 ]（考虑缩进）
    # items 可能是单行 [...] 或多行
    bracket_count = 0
    items_end = None
    for i in range(items_start, len(lines)):
        line = lines[i]
        bracket_count += line.count("[") - line.count("]")
        if bracket_count <= 0 and i > items_start:
            items_end = i
            break
        # 单行情况
        if i == items_start and "]" in line and line.count("[") == line.count("]"):
            items_end = i
            break

    if items_end is None:
        return False, f"未找到 items 结束位置: {matched_label}"

    # 确定 items 最后一行的缩进
    # 找 items 区域内最后一个有内容的行
    last_content_line = items_start
    for i in range(items_start + 1, items_end + 1):
        if lines[i].strip() and not lines[i].strip().startswith("]"):
            last_content_line = i

    indent_match = re.match(r"^(\s*)", lines[last_content_line])
    indent = indent_match.group(1) if indent_match else "      "

    # 插入新条目
    new_line = f"{indent}'{doc_id}',"

    # 如果 items_end 行是 ]，在它前面插入
    if lines[items_end].strip().startswith("]"):
        lines.insert(items_end, new_line)
    else:
        # items_end 是最后一行内容，在后面插入
        lines.insert(items_end + 1, new_line)

    filepath.write_text("\n".join(lines), encoding="utf-8")
    return True, f"已插入到 category '{matched_label}' 下: {doc_id}"


# ==================== 各类型执行 ====================

def _exec_added(change, steps):
    ct = "added"
    obj_id = change.get("upstream_object_id") or ""
    catalog = change.get("upstream_catalog") or ""
    progress.set_progress(change["id"], 2, 6, "拉取上游内容")
    doc = _fetch_doc_full(obj_id, catalog)
    if not doc or not doc["html"]:
        raise RuntimeError(f"拉取上游内容失败: objectId={obj_id} catalog={catalog}")
    steps.append({"step": 2, "message": "拉取上游内容", "status": "ok"})

    file_name = doc["fileName"] or obj_id
    sig = _html_signature(doc["html"])

    progress.set_progress(change["id"], 3, 6, "转换 Markdown 并下载图片")
    md_body, images = _html_to_md(doc["html"])
    steps.append({"step": 3, "message": f"HTML→MD 转换，发现 {len(images)} 张图片",
                  "status": "ok"})

    prefix = _catalog_to_path_prefix(catalog)
    rel_path = f"{prefix}/{file_name}.md"
    uid = _doc_path_to_uid(rel_path)
    filepath = REPO_DIR / rel_path
    img_dir = filepath.parent / "img"

    # 备份已存在的同名文件
    files_modified = []
    backup_modified = None
    if filepath.exists():
        backup_modified = _backup_file(rel_path, change["id"])
        files_modified.append(rel_path)

    # 下载图片
    saved_imgs = _download_images(images, img_dir)
    images_created = [str((img_dir / fn).relative_to(REPO_DIR))
                      for _, fn in saved_imgs]
    steps.append({"step": 3, "message": f"下载图片 {len(saved_imgs)}/{len(images)}",
                  "status": "ok"})

    # 写入 .md
    progress.set_progress(change["id"], 4, 6, "写入本地文件")
    filepath.parent.mkdir(parents=True, exist_ok=True)
    frontmatter = _build_frontmatter_added(
        doc["title"] or change.get("title") or file_name, uid, sig)
    filepath.write_text(frontmatter + md_body, encoding="utf-8")
    files_created = [rel_path]
    steps.append({"step": 4, "message": f"写入 {rel_path}", "status": "ok"})

    # 更新 sidebar（匹配现有 category，匹配不到则跳过）
    progress.set_progress(change["id"], 5, 6, "更新 sidebar")
    breadcrumb = change.get("breadcrumb") or ""
    sidebar_updated, sidebar_msg = _update_sidebar(catalog, breadcrumb, rel_path)
    sidebar_status = "ok" if sidebar_updated else "skip"
    steps.append({"step": 5, "message": f"sidebar: {sidebar_msg}", "status": sidebar_status})

    # 更新 baseline（新架构用 SQLite，不再写 content-map.json）
    progress.set_progress(change["id"], 6, 6, "更新 baseline")
    models.upsert_baseline(obj_id, catalog, sig, doc_path=rel_path,
                           title=doc["title"] or change.get("title") or file_name)
    steps.append({"step": 6, "message": "更新 baseline", "status": "ok"})

    return {
        "change_type": ct,
        "files_created": files_created,
        "files_modified": files_modified,
        "images_created": images_created,
        "sidebar_updated": sidebar_updated,
        "sidebar_message": sidebar_msg,
        "map": {"op": "added", "uid": uid},
        "backup_modified": backup_modified,
    }


def _exec_deleted(change, steps):
    ct = "deleted"
    rel_path = (change.get("doc_path") or "").strip()
    if not rel_path:
        raise RuntimeError("deleted 变更缺少 doc_path")
    uid = _doc_path_to_uid(rel_path)
    filepath = REPO_DIR / rel_path

    progress.set_progress(change["id"], 2, 3, "备份并删除本地文件")
    files_deleted = []
    backup_deleted = None
    if filepath.exists():
        backup_deleted = _backup_file(rel_path, change["id"])
        filepath.unlink()
        files_deleted.append(rel_path)
    steps.append({"step": 2,
                  "message": f"删除 {rel_path}" if files_deleted else "本地文件不存在",
                  "status": "ok"})

    # 更新 baseline：删除条目（新架构用 SQLite）
    progress.set_progress(change["id"], 3, 3, "更新 baseline")
    obj_id = change.get("upstream_object_id") or ""
    catalog = change.get("upstream_catalog") or ""
    if obj_id and catalog:
        models.delete_baseline(obj_id, catalog)
    steps.append({"step": 3, "message": "移除 baseline 条目", "status": "ok"})

    return {
        "change_type": ct,
        "files_deleted": files_deleted,
        "map": {"op": "deleted", "uid": uid},
        "backup_deleted": backup_deleted,
    }


def _exec_modified(change, steps):
    ct = "modified"
    rel_path = (change.get("doc_path") or "").strip()
    if not rel_path:
        raise RuntimeError("modified 变更缺少 doc_path")
    uid = _doc_path_to_uid(rel_path)
    obj_id = change.get("upstream_object_id") or ""
    catalog = change.get("upstream_catalog") or ""
    filepath = REPO_DIR / rel_path
    img_dir = filepath.parent / "img"

    # 备份本地文件
    progress.set_progress(change["id"], 2, 5, "备份本地文件")
    old_content = ""
    backup_modified = None
    if filepath.exists():
        old_content = filepath.read_text(encoding="utf-8")
        backup_modified = _backup_file(rel_path, change["id"])
    steps.append({"step": 2,
                  "message": "已备份" if backup_modified else "本地文件不存在",
                  "status": "ok"})

    # 拉取上游
    progress.set_progress(change["id"], 3, 5, "拉取上游内容")
    doc = _fetch_doc_full(obj_id, catalog)
    if not doc or not doc["html"]:
        raise RuntimeError(f"拉取上游内容失败: objectId={obj_id} catalog={catalog}")
    steps.append({"step": 3, "message": "拉取上游内容", "status": "ok"})

    new_hash = change.get("new_hash") or _html_signature(doc["html"])

    # 转换 + 下载图片
    progress.set_progress(change["id"], 4, 5, "转换 Markdown 并下载图片")
    md_body, images = _html_to_md(doc["html"])
    saved_imgs = _download_images(images, img_dir)
    images_created = [str((img_dir / fn).relative_to(REPO_DIR))
                      for _, fn in saved_imgs]
    steps.append({"step": 4,
                  "message": f"转换完成，下载图片 {len(saved_imgs)}/{len(images)}",
                  "status": "ok"})

    # 写入（保留旧 frontmatter，更新 upstream_hash）
    progress.set_progress(change["id"], 5, 5, "写入文件并更新 frontmatter")
    if old_content.startswith("---"):
        fm_text = _rebuild_frontmatter_with_hash(old_content, new_hash)
        new_content = fm_text + "\n" + md_body
    else:
        # 无 frontmatter，补一个
        fm_text = _build_frontmatter_added(
            doc["title"] or change.get("title") or uid, uid, new_hash)
        new_content = fm_text + md_body
    filepath.parent.mkdir(parents=True, exist_ok=True)
    filepath.write_text(new_content, encoding="utf-8")
    files_modified = [rel_path]
    steps.append({"step": 5, "message": f"写入 {rel_path}, upstream_hash={new_hash}",
                  "status": "ok"})

    # 更新 baseline（新架构用 SQLite）
    models.upsert_baseline(obj_id, catalog, new_hash, doc_path=rel_path,
                           title=doc.get("title", ""))

    return {
        "change_type": ct,
        "files_modified": files_modified,
        "images_created": images_created,
        "map": {"op": "modified", "uid": uid},
        "backup_modified": backup_modified,
    }


# ==================== 主入口 ====================

def execute_change(change_id) -> dict:
    """执行一条变更合入。返回 {ok, change_id, status, steps, ...}。

    并发：模块级锁串行化，同一时刻只有一个执行任务。
    """
    with _lock:
        change = models.get_change(change_id)
        if not change:
            return {"ok": False, "change_id": change_id,
                    "error": "变更不存在"}
        if change.get("status") == "executing":
            return {"ok": False, "change_id": change_id,
                    "error": "该变更正在执行中"}

        ct = change.get("change_type")
        if ct not in ("added", "deleted", "modified"):
            return {"ok": False, "change_id": change_id,
                    "error": f"不支持的 change_type: {ct}"}

        models.update_change(change_id, status="executing")
        progress.set_progress(change_id, 1, 5, "开始执行")
        steps = [{"step": 1, "message": f"开始执行 ({ct})", "status": "ok"}]

        try:
            if ct == "added":
                result = _exec_added(change, steps)
            elif ct == "deleted":
                result = _exec_deleted(change, steps)
            else:
                result = _exec_modified(change, steps)

            log = {
                "steps": steps,
                "backup_path": _backup_root_rel(change_id),
                "backup_root": _backup_root_rel(change_id),
                **result,
                "error": None,
            }
            models.update_change(
                change_id, status="done",
                executed_at=datetime.now().isoformat(),
                execution_log=json.dumps(log, ensure_ascii=False),
            )
            progress.set_progress(change_id, steps[-1]["step"],
                                  steps[-1]["step"], "完成", status="done")
            return {"ok": True, "change_id": change_id, "status": "done",
                    "steps": steps, "files": result}

        except Exception as e:
            log = {
                "steps": steps,
                "backup_path": _backup_root_rel(change_id),
                "backup_root": _backup_root_rel(change_id),
                "error": str(e),
            }
            models.update_change(
                change_id, status="failed",
                executed_at=datetime.now().isoformat(),
                execution_log=json.dumps(log, ensure_ascii=False),
            )
            progress.set_progress(change_id, steps[-1]["step"] if steps else 1,
                                  5, f"失败: {e}", status="failed")
            return {"ok": False, "change_id": change_id, "status": "failed",
                    "error": str(e), "steps": steps}


if __name__ == "__main__":
    # 命令行手动执行单条变更：python executor.py <change_id>
    import sys
    if len(sys.argv) < 2:
        print("用法: python executor.py <change_id>")
        sys.exit(1)
    print(json.dumps(execute_change(int(sys.argv[1])),
                     ensure_ascii=False, indent=2))
