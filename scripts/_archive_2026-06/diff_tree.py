#!/usr/bin/env python3
"""目录树比对：识别华为新增/删除的文档。

用法:
  python3 diff_tree.py              → 全量比对
  python3 diff_tree.py --dry-run    → 只输出报告，不写文件
"""

import json
import re
import sys
import time
import urllib.request
from collections import defaultdict
from difflib import SequenceMatcher
from pathlib import Path

REPO_DIR = Path("/Users/hhxi/developer_hos")
MAP_FILE = REPO_DIR / "content-map.json"
NEW_DOCS_FILE = REPO_DIR / "new-upstream-docs.md"
TREE_API = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getCatalogTree"
HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/",
    "User-Agent": "Mozilla/5.0",
}

CATALOG_MAP = [
    ("docs/dev/app-dev/getting-started/quick-start",        "harmonyos-guides"),
    ("docs/dev/app-dev/getting-started/dev-fundamentals",   "harmonyos-guides"),
    ("docs/dev/app-dev/getting-started/resource-access",    "harmonyos-guides"),
    ("docs/dev/app-dev/getting-started/glossary",           "harmonyos-guides"),
    ("docs/dev/app-dev/application-framework",              "harmonyos-guides"),
    ("docs/dev/app-dev/system",                             "harmonyos-guides"),
    ("docs/dev/app-dev/media",                              "harmonyos-guides"),
    ("docs/dev/app-dev/graphics",                           "harmonyos-guides"),
    ("docs/dev/app-dev/application-services",               "harmonyos-guides"),
    ("docs/dev/app-dev/ai",                                 "harmonyos-guides"),
    ("docs/dev/ndk-dev",                                    "harmonyos-guides"),
    ("docs/dev/testing",                                    "harmonyos-guides"),
    ("docs/dev/atomic-dev/ascf",                            "atomic-ascf"),
    ("docs/dev/atomic-dev",                                 "atomic-guides"),
    ("docs/dev/game-dev",                                   "games-guides"),
    ("docs/dev/industry-solutions",                         "architecture-guides"),
    ("docs/FAQ",                                            "harmonyos-faqs"),
]

EXTRA_CATALOGS = {
    "docs/monetize/promotion":    "promotion",
    "docs/monetize/monetization": "monetize",
    "docs/monetize":              "promotion",
    "docs/distribute/app-dist/app-market": "app",
    "docs/distribute/app-dist/game-center": "app",
    "docs/distribute/content-dist": "content",
    "docs/distribute/service-dist": "service",
    "docs/distribute/xiaoyi":       "service",
    "docs/distribute/agc":          "app",
    "docs/distribute":              "harmonyos-guides",
    "docs/design/app-compatibility": "harmonyos-releases",
    "docs/design":                   "design-guides",
    "docs/tools/deveco-testing/release-notes": "harmonyos-releases",
    "docs/tools":          "harmonyos-guides",
    "docs/experience-suggestions": "harmonyos-guides",
    "docs/dev/app-dev/multi-device": "best-practices",
    "docs/quality":        "best-practices",
    "docs/security":       "best-practices",
    "docs/architecture":   "harmonyos-guides",
    "docs/guides":         "harmonyos-guides",
    "docs/resources":      "harmonyos-guides",
    "docs/atomic":         "atomic-guides",
}

RELEASE_NOTE_PATTERNS = [
    r"变更", r"发布说明", r"release.?note", r"changelog", r"版本更新",
    r"修复的问题", r"已知问题", r"新增特性",
]

def get_catalog(path):
    for prefix, catalog in CATALOG_MAP:
        if path.startswith(prefix):
            return catalog
    for prefix, catalog in EXTRA_CATALOGS.items():
        if path.startswith(prefix):
            return catalog
    return "harmonyos-guides"


def fetch_catalog_tree(catalog_name):
    """拉取整个 catalog 的目录树，返回叶子节点列表 [(objectId, title, breadcrumb, depth)]"""
    body = json.dumps({"catalogName": catalog_name, "version": "", "language": "cn"}).encode()
    req = urllib.request.Request(TREE_API, data=body, headers=HEADERS)
    try:
        t0 = time.time()
        resp = urllib.request.urlopen(req, timeout=30)
        raw = resp.read()
        data = json.loads(raw)
        elapsed = time.time() - t0
    except Exception as e:
        print(f"  ⚠️  {catalog_name}: API 失败 - {e}")
        return []

    value = data.get("value", {})
    nodes = value.get("catalogTreeList", [])
    if not isinstance(nodes, list):
        nodes = [nodes] if nodes else []

    leaves = []

    def walk(nodes, breadcrumb, depth):
        for n in nodes:
            if isinstance(n, str):
                continue
            title = n.get("nodeName", "")
            oid = n.get("relateDocument", "")
            is_leaf = n.get("isLeaf", False)
            children = n.get("children", [])
            bc = breadcrumb + [title]

            if is_leaf and oid:
                leaves.append((oid, title, bc, depth))
            walk(children, bc, depth + 1)

    walk(nodes, [], 0)
    return leaves


def should_exclude(title, breadcrumb):
    """自动排除：导航节点（非叶子已在 walk 跳过）、Release Notes"""
    full = title + " ".join(breadcrumb)
    for pat in RELEASE_NOTE_PATTERNS:
        if re.search(pat, full, re.IGNORECASE):
            return True
    return False


def title_similarity(a, b):
    """标题相似度 0-1。先做快速过滤，避免 O(n²) 暴毙。"""
    if a == b:
        return 1.0
    a = re.sub(r"[【】「」\s]", "", a)
    b = re.sub(r"[【】「」\s]", "", b)
    if a == b:
        return 1.0
    if not a or not b:
        return 0.0
    # 快速过滤：quick_ratio 是 O(len(a)+len(b))，极快
    sm = SequenceMatcher(None, a, b)
    if sm.quick_ratio() < 0.6:
        return 0.0
    return sm.ratio()


def update_frontmatter_status(filepath, status):
    """在 frontmatter 中添加/更新 upstream_status 字段"""
    content = filepath.read_text(encoding="utf-8")
    if not content.startswith("---"):
        return

    parts = content.split("---", 2)
    if len(parts) < 3:
        return
    old_fm = parts[1]
    body = parts[2]

    lines = old_fm.strip().split("\n")
    new_lines = []
    found = False
    for line in lines:
        if line.startswith("upstream_status:"):
            new_lines.append(f"upstream_status: {status}")
            found = True
        elif line.startswith("upstream_deleted:"):
            # 兼容旧字段名
            new_lines.append(f"upstream_status: {status}")
            found = True
        else:
            new_lines.append(line)
    if not found:
        new_lines.append(f"upstream_status: {status}")

    new_content = "---\n" + "\n".join(new_lines) + f"\n---{body}"
    filepath.write_text(new_content, encoding="utf-8")


def main():
    dry_run = "--dry-run" in sys.argv

    print("=" * 60)
    print("📂 目录树比对 —— 识别华为新增/删除文档")
    print("=" * 60)

    with open(MAP_FILE) as f:
        cmap = json.load(f)
    docs = cmap["docs"]

    # 1. 拉取所有 catalog 的目录树
    print("\n📡 拉取目录树...")
    all_catalogs = set()
    for _, cat in CATALOG_MAP:
        all_catalogs.add(cat)
    for cat in EXTRA_CATALOGS.values():
        all_catalogs.add(cat)

    tree_docs = {}  # catalog -> [(objectId, title, breadcrumb, depth)]
    total_tree_leaves = 0
    for cat in sorted(all_catalogs):
        leaves = fetch_catalog_tree(cat)
        if leaves:
            tree_docs[cat] = leaves
            total_tree_leaves += len(leaves)
            print(f"  ✅ {cat}: {len(leaves)} 篇")
        else:
            print(f"  ❌ {cat}: 0 篇")
        time.sleep(0.3)

    print(f"\n  目录树总计: {total_tree_leaves} 个叶子节点")

    # 3. 全局两层精确匹配（跨 catalog，消除假阳性）
    print("\n🔍 匹配中（全局模式）...")

    matched = set()
    new_docs = []
    deleted_pending = []
    match_stats = {"L1_exact": 0, "L2_title": 0}

    # 建立全局索引（跨所有 catalog）
    global_seg_index = defaultdict(list)
    global_title_index = defaultdict(list)
    for uid, info in docs.items():
        if info["status"] in ("local", "split_root"):
            continue
        clean = uid.split("__dup")[0]
        seg = clean.rsplit("/", 1)[-1] if "/" in clean else clean
        global_seg_index[seg].append(uid)
        # x 前缀兼容：目录树里 50101 vs 本地 x50101
        if seg.startswith("x") and seg[1:].isdigit():
            global_seg_index[seg[1:]].append(uid)
        elif seg.isdigit():
            global_seg_index["x" + seg].append(uid)
        t = info.get("title", "")
        nt = re.sub(r"[【】「】\s]", "", t)
        if nt:
            global_title_index[nt].append(uid)

    # 收集所有目录树叶子（排除不需要的 catalog）
    SKIP_CATALOGS = {"harmonyos-releases", "architecture-guides"}
    all_leaves = []
    for cat, leaves in tree_docs.items():
        if cat in SKIP_CATALOGS:
            continue
        for oid, hw_title, bc, depth in leaves:
            if should_exclude(hw_title, bc):
                continue
            all_leaves.append((cat, oid, hw_title, bc, depth))

    for cat, oid, hw_title, bc, depth in all_leaves:
        # L1: objectId 精确匹配（全局）
        if oid in global_seg_index:
            for uid in global_seg_index[oid]:
                if uid not in matched:
                    matched.add(uid)
                    match_stats["L1_exact"] += 1
            continue

        # L2: 精确标题匹配（全局）
        nht = re.sub(r"[【】「】\s]", "", hw_title)
        if nht and nht in global_title_index:
            for uid in global_title_index[nht]:
                if uid not in matched:
                    matched.add(uid)
                    match_stats["L2_title"] += 1
            continue

        # 残余 → 新增候选
        new_docs.append({
            "catalog": cat,
            "objectId": oid,
            "title": hw_title,
            "breadcrumb": " > ".join(bc),
            "depth": depth,
        })

    # 5. 排除最新增中实际已覆盖的，统计真正未匹配的
    tree_title_set = set()  # 全局 normalized titles
    for _, _, hw_title, _, _ in all_leaves:
        nt = re.sub(r"[【】「】\s]", "", hw_title)
        if nt:
            tree_title_set.add(nt)

    for uid, info in docs.items():
        if info["status"] in ("local", "split_root"):
            continue
        if uid in matched:
            continue
        local_title = info.get("title", "")
        nlt = re.sub(r"[【】「】\s]", "", local_title)
        if nlt and nlt in tree_title_set:
            continue
        cat = get_catalog(info["path"])
        deleted_pending.append({
            "upstream_id": uid,
            "title": local_title,
            "path": info["path"],
            "catalog": cat,
        })

    # 6. 输出报告
    print(f"\n📊 匹配统计:")
    print(f"  L1 objectId 精确: {match_stats['L1_exact']}")
    print(f"  L2 标题模糊:     {match_stats['L2_title']}")
    print(f"  已匹配总计:      {len(matched)}")
    print(f"  目录树独有(新增): {len(new_docs)}")
    print(f"  content-map 独有(可能已删): {len(deleted_pending)}")

    # 7. 写新增清单
    if new_docs:
        lines = [
            f"# 华为新增文档清单",
            f"",
            f"> 生成时间: {time.strftime('%Y-%m-%d %H:%M:%S')}",
            f"> 共 {len(new_docs)} 篇，需人工确认后搬迁",
            f"",
            "---",
            "",
        ]
        # 按 catalog 分组
        by_cat = defaultdict(list)
        for d in new_docs:
            by_cat[d["catalog"]].append(d)

        for cat in sorted(by_cat):
            items = by_cat[cat]
            lines.append(f"## {cat}（{len(items)} 篇）")
            lines.append("")
            lines.append("| # | 标题 | breadcrumb | objectId | 深度 |")
            lines.append("|---|------|-----------|----------|------|")
            for i, d in enumerate(items, 1):
                lines.append(f"| {i} | {d['title']} | {d['breadcrumb']} | `{d['objectId']}` | L{d['depth']} |")
            lines.append("")

        content = "\n".join(lines)
        if not dry_run:
            NEW_DOCS_FILE.write_text(content, encoding="utf-8")
            print(f"\n✅ 新增清单已写入: {NEW_DOCS_FILE}")
        else:
            print(f"\n📝 [DRY RUN] 新增清单预览（前 10 条）:")
            for d in new_docs[:10]:
                print(f"  [{d['catalog']}] {d['title']}  ({d['objectId']})")

    # 8. 标记可能已删
    if deleted_pending and not dry_run:
        print(f"\n⚠️  标记 {len(deleted_pending)} 篇为 upstream_deleted_pending...")
        for d in deleted_pending:
            filepath = REPO_DIR / d["path"]
            if filepath.exists():
                update_frontmatter_status(filepath, "upstream_deleted_pending")
        print(f"  已标记完成")

    if deleted_pending and dry_run:
        print(f"\n📝 [DRY RUN] 可能已删文档（前 20 条）:")
        for d in deleted_pending[:20]:
            print(f"  [{d['catalog']}] {d['path']}  \"{d['title'][:40]}\"")

    # 9. 更新 content-map
    if not dry_run and deleted_pending:
        for d in deleted_pending:
            uid = d["upstream_id"]
            if uid in docs:
                docs[uid]["status"] = "upstream_deleted_pending"
        cmap["summary"]["upstream_deleted_pending"] = len(deleted_pending)
        cmap["generated_at"] = time.strftime("%Y-%m-%dT%H:%M:%S")
        with open(MAP_FILE, "w") as f:
            json.dump(cmap, f, ensure_ascii=False)

    print(f"\n=== 目录树比对完成 ===")


if __name__ == "__main__":
    main()
