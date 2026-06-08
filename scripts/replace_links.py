#!/usr/bin/env python3
"""将文档中的华为原始链接替换为本地 /docs/... 路径。

匹配策略：提取 URL 末尾段（文件名），在 content-map.json 中找唯一匹配。
harmonyos-references 等 API 参考链接保留原样。

用法:
  python3 replace_links.py              → dry-run，输出报告
  python3 replace_links.py --write      → 实际替换
"""

import json
import re
import sys
from collections import defaultdict
from pathlib import Path

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs")
REPO_DIR = DOCS_DIR.parent
MAP_FILE = REPO_DIR / "content-map.json"

HUAWEI_URL = re.compile(
    r'https://developer\.huawei\.com/consumer/cn/doc/'
    r'([^\s<>"\')\]]+)'
)

EXTERNAL_PREFIXES = ("harmonyos-references/",)  # 保留原样的前缀


def extract_path_and_anchor(raw):
    """https://...doc/path?version=V1#anchor → (path, anchor)"""
    path = raw.rstrip("`'\",;:.!])")
    anchor = ""
    if "#" in path:
        path, anchor = path.split("#", 1)
    if "?" in path:
        path = path.split("?")[0]
    return path.strip("/"), anchor


def build_seg_index(docs):
    """按 upstream_id 末尾段建索引，返回 {seg_lower: [(upstream_id, local_path)]}"""
    idx = defaultdict(list)
    for uid, info in docs.items():
        if info["status"] in ("local", "split_root"):
            continue
        seg = uid.rsplit("/", 1)[-1].lower() if "/" in uid else uid.lower()
        # 本地路径: docs/xxx/yyy.md → /docs/xxx/yyy
        local = "/" + str(Path(info["path"]).with_suffix(""))
        idx[seg].append((uid, local))
    return idx


def main():
    dry_run = "--write" not in sys.argv

    print("=" * 60)
    print("🔗 华为链接 → 本地路径")
    print("=" * 60)

    with open(MAP_FILE) as f:
        cmap = json.load(f)

    seg_index = build_seg_index(cmap["docs"])
    print(f"\n📂 索引条目: {len(seg_index)} 个唯一末尾段")

    files = sorted(list(DOCS_DIR.rglob("*.md")) + list(DOCS_DIR.rglob("*.mdx")))

    total_files = 0
    total_hits = 0
    total_replaced = 0
    total_external = 0
    total_ambiguous = 0
    total_unknown = 0
    unknown_samples = defaultdict(int)

    for fp in files:
        content = fp.read_text(encoding="utf-8")
        hits_in_file = 0

        def replacer(m):
            nonlocal hits_in_file
            hits_in_file += 1
            raw = m.group(0)
            captured = m.group(1)
            path, anchor = extract_path_and_anchor(captured)
            if not path:
                return raw

            # 外部前缀（如 harmonyos-references）→ 保留原样
            for ext in EXTERNAL_PREFIXES:
                if path.startswith(ext):
                    return raw

            seg = path.rsplit("/", 1)[-1].lower()
            matches = seg_index.get(seg, [])

            if len(matches) == 1:
                _, local = matches[0]
                new_url = local
            elif len(matches) > 1:
                return raw  # 歧义，保留原样
            else:
                return raw  # 无匹配，保留

            if anchor:
                new_url += "#" + anchor
            return new_url

        new_content = HUAWEI_URL.sub(replacer, content)

        if hits_in_file > 0:
            total_files += 1
            total_hits += hits_in_file
            replaced = 0
            external = 0
            ambiguous = 0
            unknown = 0

            # 重新扫一遍统计
            for m in HUAWEI_URL.finditer(new_content):
                pass  # 剩余的是保留原样的
            # 更简单的方法：对比新旧
            old_matches = list(HUAWEI_URL.finditer(content))
            new_matches = list(HUAWEI_URL.finditer(new_content))
            replaced = len(old_matches) - len(new_matches)

            # 详细统计（对旧内容分类）
            for m in old_matches:
                captured = m.group(1)
                p, _ = extract_path_and_anchor(captured)
                if not p:
                    continue
                for ext in EXTERNAL_PREFIXES:
                    if p.startswith(ext):
                        external += 1
                        break
                else:
                    seg = p.rsplit("/", 1)[-1].lower()
                    matches = seg_index.get(seg, [])
                    if len(matches) == 0:
                        unknown += 1
                        unknown_samples[p[:80]] += 1
                    # elif len(matches) > 1: ambiguous (counted in retained)

            total_replaced += replaced
            total_external += external
            total_unknown += unknown

            if not dry_run:
                fp.write_text(new_content, encoding="utf-8")

    retained = total_hits - total_replaced

    print(f"\n📊 结果:")
    print(f"  涉及文件:     {total_files}")
    print(f"  华为链接总计: {total_hits}")
    print(f"  ─────────────────────")
    print(f"  ✅ 已替换:     {total_replaced} ({total_replaced*100/max(total_hits,1):.1f}%)")
    print(f"  ⏭️  保留(API参考): {total_external}")
    print(f"  ⚠️  保留(未知):    {total_unknown}")
    print(f"  ⚠️  保留(歧义):    {total_hits - total_replaced - total_external - total_unknown}")

    if total_unknown > 0:
        print(f"\n⚠️  未知链接（共 {total_unknown} 处，{len(unknown_samples)} 个唯一路径）")
        for path, cnt in sorted(unknown_samples.items(), key=lambda x: -x[1])[:15]:
            print(f"  [{cnt}次] {path}")

    if dry_run:
        print(f"\n📝 DRY RUN 模式。使用 --write 执行实际替换。")


if __name__ == "__main__":
    main()
