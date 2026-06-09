#!/usr/bin/env python3
"""扫描 docs/ 下所有文档的 frontmatter，生成 content-map.json。

upstream_id 从 original_url 提取（/docs/xxx/yyy → xxx/yyy），唯一且稳定。

状态推导规则：
  split_from 存在  → split_child
  split_into 存在  → split_root  
  merged_from 存在 → merged
  upstream_id 含 _local → local
  status 字段      → 直接使用（rewritten, upstream_deleted）
  其他              → mirror

用法: python3 content_map.py             → 输出 content-map.json
      python3 content_map.py --pretty    → 格式化 JSON
"""

import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs")
OUTPUT = Path("/Users/hhxi/developer_hos/content-map.json")
HUAWEI_BASE = "https://developer.huawei.com/consumer/cn/doc"

def parse_frontmatter(content):
    if not content.startswith("---"):
        return {}
    m = re.search(r"\n---\s*\n", content[3:])
    if not m:
        m = re.search(r"\n---", content[3:])
        if not m:
            return {}
    raw_end = 3 + m.start()
    raw = content[3:raw_end]
    fm = {}
    for line in raw.strip().split("\n"):
        if ":" in line:
            k, v = line.split(":", 1)
            fm[k.strip()] = v.strip()
    return fm

def extract_upstream_id(fm):
    """从 original_url 提取唯一 upstream_id。无 original_url → _local。"""
    url = fm.get("original_url", "")
    if not url:
        return "_local"
    uid = url.replace("/docs/", "", 1).strip("/")
    return uid

def derive_status(fm):
    if fm.get("split_from"):
        return "split_child"
    if fm.get("split_into"):
        return "split_root"
    if fm.get("merged_from"):
        return "merged"
    if "_local" in fm.get("upstream_id", ""):
        return "local"
    if fm.get("status") in ("rewritten", "upstream_deleted"):
        return fm["status"]
    return "mirror"

def parse_list_field(fm, key):
    val = fm.get(key)
    if not val:
        return []
    m = re.match(r"\[(.*)\]", val)
    if m:
        return [v.strip().strip('"').strip("'") for v in m.group(1).split(",") if v.strip()]
    return [val.strip().strip('"').strip("'")]

def main():
    docs = sorted(DOCS_DIR.rglob("*.md")) + sorted(DOCS_DIR.rglob("*.mdx"))

    summary = {"mirror": 0, "rewritten": 0, "split_root": 0, "split_child": 0,
               "merged": 0, "upstream_deleted": 0, "local": 0}
    docs_index = {}

    for f in docs:
        fm = parse_frontmatter(f.read_text(encoding="utf-8"))
        uid = extract_upstream_id(fm)
        if not uid or uid == "_local":
            uid = f"_local:{f.relative_to(DOCS_DIR)}"

        # 处理重复 upstream_id：追加计数器后缀
        base_uid = uid
        counter = 1
        while uid in docs_index:
            uid = f"{base_uid}__dup{counter}"
            counter += 1

        status = derive_status(fm)
        summary[status] = summary.get(status, 0) + 1

        title = fm.get("title", "").strip().strip('"').strip("'").strip()

        docs_index[uid] = {
            "path": str(f.relative_to(DOCS_DIR.parent)),
            "title": title,
            "status": status,
            "upstream_url": f"{HUAWEI_BASE}/{uid}" if not uid.startswith("_local") else "",
            "last_sync": fm.get("last_sync", ""),
            "sync_hash": fm.get("sync_hash", ""),
            "has_upstream_changes": False,
            "relationships": {
                "split_from": fm.get("split_from", ""),
                "split_into": parse_list_field(fm, "split_into"),
                "merged_from": parse_list_field(fm, "merged_from"),
                "merged_into": fm.get("merged_into", ""),
            }
        }

    output = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "summary": {
            "total_docs": len(docs),
            "by_status": summary,
            "with_upstream_changes": 0,
        },
        "docs": docs_index,
        "links": {}
    }

    indent = 2 if "--pretty" in sys.argv else None
    OUTPUT.write_text(json.dumps(output, ensure_ascii=False, indent=indent), encoding="utf-8")
    
    print(f"生成 content-map.json")
    print(f"  总文档: {len(docs)}")
    for s, n in sorted(summary.items()):
        if n:
            print(f"  {s}: {n}")

if __name__ == "__main__":
    main()
