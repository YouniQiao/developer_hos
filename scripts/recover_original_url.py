#!/usr/bin/env python3
"""从 git 历史恢复 quality/security 文档的真实华为 original_url。

933eacb12 提交把 original_url 从完整华为 URL 改成了本地短路径。
这个脚本从该提交前的版本恢复真实 URL。
"""

import re
import subprocess
import sys
from pathlib import Path

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs")
REPO_DIR = DOCS_DIR.parent

def recover_url(filepath):
    """从 git 历史恢复真实 original_url。"""
    rel = str(filepath.relative_to(REPO_DIR))
    try:
        result = subprocess.run(
            ["git", "show", f"933eacb12~1:{rel}"],
            capture_output=True, text=True, cwd=REPO_DIR, timeout=10
        )
        if result.returncode != 0:
            return None
        for line in result.stdout.split("\n"):
            for key in ("original_url:", "source_url:"):
                if line.startswith(key):
                    return line.replace(key, "").strip()
    except Exception:
        pass
    return None

def main():
    dry_run = "--write" not in sys.argv
    targets = sorted(DOCS_DIR.glob("quality/**/*.md")) + sorted(DOCS_DIR.glob("security/**/*.md"))

    recovered = 0
    skipped = 0

    for f in targets:
        content = f.read_text(encoding="utf-8")
        
        # 检查是否需要恢复
        m = re.search(r"original_url:\s*(/docs/[^\n]+)", content)
        if not m:
            skipped += 1
            continue
        
        old = m.group(1)
        real = recover_url(f)
        if not real or not real.startswith("https://"):
            skipped += 1
            continue

        if dry_run:
            print(f"  {f.relative_to(REPO_DIR)}")
            print(f"    {old}  →  {real}")
            recovered += 1
        else:
            new_content = content.replace(f"original_url: {old}", f"original_url: {real}")
            f.write_text(new_content, encoding="utf-8")
            recovered += 1

    print(f"\n恢复: {recovered}  跳过: {skipped}  总计: {len(targets)}")
    if dry_run:
        print("DRY RUN — 加 --write 实际写入")

if __name__ == "__main__":
    main()
