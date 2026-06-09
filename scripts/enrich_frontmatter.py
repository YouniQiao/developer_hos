#!/usr/bin/env python3
"""给现有文档批量添加 upstream_id / last_sync / sync_hash 字段。

- upstream_id: 从 original_url 提取唯一路径（/docs/xxx/yyy → xxx/yyy），无 original_url 的标 _local
- last_sync: 文件最后 git 修改日期
- sync_hash: 正文内容（不含 frontmatter）的 md5

用法: python3 enrich_frontmatter.py           # dry-run
      python3 enrich_frontmatter.py --write   # 实际写入
"""

import hashlib
import re
import subprocess
import sys
from collections import defaultdict
from datetime import datetime
from pathlib import Path

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs")
REPO_DIR = DOCS_DIR.parent

def load_git_dates():
    """一次 subprocess 获取所有文件的最后 git 修改日期。返回 {relpath: 'YYYY-MM-DD'}."""
    dates = {}
    try:
        result = subprocess.run(
            ["git", "log", "--name-only", "--format=CI:%aI", "--", "docs/"],
            capture_output=True, text=True, cwd=REPO_DIR, timeout=30
        )
        current_date = None
        for line in result.stdout.splitlines():
            if line.startswith("CI:"):
                current_date = line[3:13]
            elif line and current_date and line not in dates:
                dates[line] = current_date
    except Exception:
        pass
    return dates

def parse_frontmatter(content):
    """Return (frontmatter_dict, body, raw_fm_text)."""
    if not content.startswith("---"):
        return {}, content, ""
    m = re.search(r"\n---\s*\n", content[3:])
    if not m:
        return {}, content, ""
    raw = content[3 : 3 + m.start()]
    body = content[3 + m.start() + len(m.group()):]
    fm = {}
    for line in raw.strip().split("\n"):
        if ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip()
    return fm, body, raw.strip()

def extract_upstream_id(fm):
    """从 original_url 提取唯一 upstream_id。"""
    url = fm.get("original_url", "")
    if not url:
        return "_local"
    # /docs/dev/app-dev/ai/xxx → dev/app-dev/ai/xxx
    uid = url.replace("/docs/", "", 1).strip("/")
    return uid

def process_all(dry_run=True):
    docs = sorted(DOCS_DIR.rglob("*.md")) + sorted(DOCS_DIR.rglob("*.mdx"))
    print(f"扫描文件...")
    
    git_dates = load_git_dates()
    print(f"  git 日期记录: {len(git_dates)} 个文件")

    stats = {"has_upstream": 0, "local": 0, "skip": 0, "remap": 0}
    to_write = []

    for f in docs:
        content = f.read_text(encoding="utf-8")
        fm, body, raw = parse_frontmatter(content)

        new_uid = extract_upstream_id(fm)
        has_upstream = new_uid != "_local"

        # 检查是否需要改写（没有 upstream_id，或值不同）
        old_uid = fm.get("upstream_id", "")
        if old_uid and old_uid == new_uid:
            stats["skip"] += 1
            continue
        
        if old_uid and old_uid != new_uid:
            stats["remap"] += 1
        elif has_upstream:
            stats["has_upstream"] += 1
        else:
            stats["local"] += 1

        if has_upstream:
            rel = str(f.relative_to(REPO_DIR))
            last_sync = git_dates.get(rel, datetime.fromtimestamp(f.stat().st_mtime).strftime("%Y-%m-%d"))
            sync_hash = hashlib.md5(body.encode()).hexdigest()[:8]
        else:
            last_sync = datetime.now().strftime("%Y-%m-%d")
            sync_hash = ""

        to_write.append((f, new_uid, last_sync, sync_hash, raw, body, old_uid))

    print(f"总文件数: {len(docs)}")
    print(f"  跳过（ID 已正确）:  {stats['skip']}")
    print(f"  新增上游源:          {stats['has_upstream']}")
    print(f"  修正 ID（stem→url）: {stats['remap']}")
    print(f"  原创内容（_local）:  {stats['local']}")
    print()

    if dry_run:
        if stats['remap'] > 0:
            print(f"=== ID 修正样例（stem → original_url）=== ")
            for f, uid, *_ in to_write[:10]:
                if uid != "_local" and uid.count("/") > 0:
                    rel = f.relative_to(REPO_DIR)
                    print(f"  {rel!s:70s}  →  {uid}")
        print(f"\nDRY RUN — 加 --write 实际写入")
        return

    # 实际写入
    written = 0
    for f, uid, date, h, raw, body, old_uid in to_write:
        # 重建 frontmatter，替换/添加 upstream_id
        lines = raw.split("\n")
        new_lines = []
        found_uid = False
        found_sync = False
        found_date = False
        for line in lines:
            if line.startswith("upstream_id:"):
                new_lines.append(f"upstream_id: {uid}")
                found_uid = True
            elif line.startswith("last_sync:"):
                new_lines.append(f"last_sync: {date}")
                found_date = True
            elif line.startswith("sync_hash:"):
                if h:
                    new_lines.append(f"sync_hash: {h}")
                    found_sync = True
                # 没有 hash 就跳过该行
            else:
                new_lines.append(line)

        if not found_uid:
            new_lines.append(f"upstream_id: {uid}")
        if not found_date:
            new_lines.append(f"last_sync: {date}")
        if h and not found_sync:
            new_lines.append(f"sync_hash: {h}")

        new_fm = "\n".join(new_lines)
        new_content = f"---\n{new_fm}\n---\n{body}"
        f.write_text(new_content, encoding="utf-8")
        written += 1

    print(f"实际写入: {written} 个文件")

if __name__ == "__main__":
    process_all(dry_run="--write" not in sys.argv)
