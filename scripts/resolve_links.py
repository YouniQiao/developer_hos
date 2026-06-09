#!/usr/bin/env python3
"""将文档中的 upstream:id 链接替换为实际 /docs/... 路径。

解析规则（只跳一层）：
  1. upstream_id 存在且没有 merged_into → 直接用 path
  2. 有 merged_into → 跳到目标文档的 path
  3. 是 split_root（有 split_into 且无自己的 path）→ 用 split_into[0] 的 path
  4. 找不到 → 尝试重建华为原 URL，重建不了就保留原样

支持带锚点: upstream:xxx#section-name → /docs/xxx#section-name

用法:
  python3 resolve_links.py              → dry-run，输出报告
  python3 resolve_links.py --write      → 实际替换
  python3 resolve_links.py --file xxx   → 只处理指定文件
"""

import json
import re
import sys
from pathlib import Path

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs")
REPO_DIR = DOCS_DIR.parent
MAP_FILE = REPO_DIR / "content-map.json"

HUAWEI_BASE = "https://developer.huawei.com/consumer/cn/doc"

def load_map():
    with open(MAP_FILE) as f:
        return json.load(f)["docs"]

def resolve(upstream_id, docs_map):
    """返回实际路径（如 docs/dev/xxx.md）或 None。"""
    entry = docs_map.get(upstream_id)
    if not entry:
        return None

    rel = entry["relationships"]

    # 1. 被合并到别的文档 → 跳转
    if rel.get("merged_into"):
        target = docs_map.get(rel["merged_into"])
        if target:
            return target["path"]

    # 2. split_root（不渲染）→ 跳到第一个子文档
    if entry["status"] == "split_root" and rel.get("split_into"):
        first_child = rel["split_into"][0]
        child = docs_map.get(first_child)
        if child:
            return child["path"]

    # 3. 正常渲染
    return entry["path"]

def md_path_to_url(md_path):
    """docs/xxx/yyy.md → /docs/xxx/yyy （去掉 .md/.mdx）"""
    p = Path(md_path)
    return "/" + str(p.with_suffix("")).replace("\\", "/")

def rebuild_huawei_url(upstream_id):
    """尝试从 upstream_id 重建华为 URL。这是尽力而为的 fallback。"""
    return f"{HUAWEI_BASE}/{upstream_id}"

def process_content(content, docs_map, file_path):
    """扫描 upstream:xxx 链接并替换。返回 (new_content, unresolved_list)。"""
    unresolved = []

    def replace_link(m):
        uid = m.group(1)
        anchor = m.group(2) or ""
        text = m.group(3)

        resolved_path = resolve(uid, docs_map)
        if resolved_path:
            url = md_path_to_url(resolved_path) + anchor
            return f"[{text}]({url})"

        # 未解析：尝试重建华为 URL
        hw_url = rebuild_huawei_url(uid) + anchor
        unresolved.append({"upstream_id": uid, "file": str(file_path), "fallback": hw_url})
        return f"[{text}]({hw_url})"

    # 匹配 [text](upstream:xxx) 或 [text](upstream:xxx#anchor)
    new_content = re.sub(
        r'\[([^\]]*)\]\(upstream:([a-zA-Z0-9_\-\.]+)(#[^\)]*)?\)',
        replace_link,
        content
    )
    return new_content, unresolved

def main():
    docs_map = load_map()
    print(f"加载 {len(docs_map)} 条文档映射")

    dry_run = "--write" not in sys.argv
    target_file = None
    for i, arg in enumerate(sys.argv):
        if arg == "--file" and i + 1 < len(sys.argv):
            target_file = sys.argv[i + 1]

    if target_file:
        files = [Path(target_file)]
    else:
        files = sorted(DOCS_DIR.rglob("*.md")) + sorted(DOCS_DIR.rglob("*.mdx"))

    total_links = 0
    total_resolved = 0
    all_unresolved = []
    files_changed = 0

    for f in files:
        content = f.read_text(encoding="utf-8")
        if "upstream:" not in content:
            continue

        new_content, unresolved = process_content(content, docs_map, f)
        link_count = len(re.findall(r'\]\(upstream:', content))
        total_links += link_count
        total_resolved += link_count - len(unresolved)
        all_unresolved.extend(unresolved)

        if new_content != content:
            files_changed += 1
            if not dry_run:
                f.write_text(new_content, encoding="utf-8")

    # 报告
    print(f"\n扫描文件: {len(files)}")
    print(f"含 upstream: 链接的文件: {files_changed}")
    print(f"链接总数: {total_links}")
    print(f"  已解析: {total_resolved}")
    print(f"  未解析: {len(all_unresolved)}")

    if all_unresolved:
        print(f"\n=== 未解析链接（{len(all_unresolved)} 处）===")
        # 去重显示
        seen = set()
        for u in all_unresolved:
            key = (u["upstream_id"], u["fallback"])
            if key in seen:
                continue
            seen.add(key)
            print(f"  upstream:{u['upstream_id']} → {u['fallback']}")

    if dry_run:
        if files_changed > 0:
            print(f"\nDRY RUN — 加 --write 实际写入 {files_changed} 个文件")
        else:
            print("\n没有需要改写的链接（还没有文件使用 upstream: 格式）")

if __name__ == "__main__":
    main()
