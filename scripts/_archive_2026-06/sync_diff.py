#!/usr/bin/env python3
"""检测华为上游文档变化（基于内容指纹，非日期）。5 并发。

用法:
  python3 sync_diff.py                  → 全量检测
  python3 sync_diff.py --sample 10      → 随机抽样
  python3 sync_diff.py --section ai     → 只检测某板块
"""

import hashlib
import json
import random
import re
import sys
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime
from pathlib import Path

REPO_DIR = Path("/Users/hhxi/developer_hos")
DOCS_DIR = REPO_DIR / "docs"
MAP_FILE = REPO_DIR / "content-map.json"
API = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/",
    "User-Agent": "Mozilla/5.0",
}
CONCURRENCY = 5

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


def get_catalog(path):
    for prefix, catalog in CATALOG_MAP:
        if path.startswith(prefix):
            return catalog
    for prefix, catalog in EXTRA_CATALOGS.items():
        if path.startswith(prefix):
            return catalog
    return "harmonyos-guides"


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


def update_frontmatter(filepath, upstream_hash):
    content = filepath.read_text(encoding="utf-8")
    fm = parse_frontmatter(content)
    if fm.get("upstream_hash") == upstream_hash:
        return
    old_raw = content.split("---", 2)[1] if content.startswith("---") else ""
    body = content.split("---", 2)[2] if content.startswith("---") and content.count("---") >= 2 else ""
    lines = old_raw.strip().split("\n")
    new_lines = []
    found = False
    for line in lines:
        if line.startswith("upstream_hash:"):
            new_lines.append(f"upstream_hash: {upstream_hash}")
            found = True
        else:
            new_lines.append(line)
    if not found:
        new_lines.append(f"upstream_hash: {upstream_hash}")
    new_content = "---\n" + "\n".join(new_lines) + f"\n---\n{body}"
    filepath.write_text(new_content, encoding="utf-8")


def html_signature(html):
    if not html:
        return ""
    text = re.sub(r"<[^>]+>", "", html)
    text = re.sub(r"\s+", " ", text).strip()
    return hashlib.md5(text.encode()).hexdigest()[:12]


def fetch_doc(object_id, catalog_name):
    body = json.dumps({
        "objectId": object_id, "version": "",
        "catalogName": catalog_name, "language": "cn"
    }).encode()
    req = urllib.request.Request(API, data=body, headers=HEADERS)
    try:
        resp = urllib.request.urlopen(req, timeout=15)
        data = json.loads(resp.read())
        value = data.get("value", {})
        content_info = value.get("content", {})
        return {"html": content_info.get("content", ""), "title": value.get("title", "")}
    except Exception:
        return None


def diff_one(uid_info):
    """单个文档的变化检测（线程安全，不写文件）。返回结果 dict。"""
    uid, info = uid_info
    clean_uid = uid.split("__dup")[0] if "__dup" in uid else uid
    object_id = clean_uid.rsplit("/", 1)[-1] if "/" in clean_uid else clean_uid
    catalog = get_catalog(info["path"])
    result = fetch_doc(object_id, catalog)

    if result is None or not result["html"]:
        return {
            "uid": uid, "path": info["path"], "type": "error",
            "catalog": catalog, "object_id": object_id,
        }

    new_sig = html_signature(result["html"])
    filepath = REPO_DIR / info["path"]
    old_sig = ""
    if filepath.exists():
        fm = parse_frontmatter(filepath.read_text(encoding="utf-8"))
        old_sig = fm.get("upstream_hash", "")

    if not old_sig:
        return {"uid": uid, "path": info["path"], "type": "populated", "new_sig": new_sig}
    elif old_sig != new_sig:
        return {
            "uid": uid, "path": info["path"], "type": "changed",
            "title": info.get("title", ""), "old_sig": old_sig, "new_sig": new_sig,
        }
    else:
        return {"uid": uid, "path": info["path"], "type": "unchanged"}


def main():
    with open(MAP_FILE) as f:
        cmap = json.load(f)

    sample = None
    section = None
    for i, arg in enumerate(sys.argv):
        if arg == "--sample" and i + 1 < len(sys.argv):
            sample = int(sys.argv[i + 1])
        elif arg == "--section" and i + 1 < len(sys.argv):
            section = sys.argv[i + 1]

    docs = cmap["docs"]
    targets = {}
    for uid, info in docs.items():
        if info["status"] in ("local", "split_root"):
            continue
        if section:
            sec_prefix = f"docs/dev/{section}" if section not in ("FAQ",) else f"docs/{section}"
            if sec_prefix not in info["path"] and f"docs/{section}" not in info["path"]:
                continue
        targets[uid] = info

    if sample and sample < len(targets):
        keys = random.sample(list(targets.keys()), sample)
        targets = {k: targets[k] for k in keys}

    print(f"待检测: {len(targets)} 篇  (并发: {CONCURRENCY})")
    total = len(targets)

    items = list(targets.items())
    checked = changed = populated = errors = 0
    err_list = []
    changed_list = []

    with ThreadPoolExecutor(max_workers=CONCURRENCY) as executor:
        futures = {executor.submit(diff_one, item): item for item in items}
        for future in as_completed(futures):
            r = future.result()
            checked += 1
            if checked % 100 == 0 or checked == total:
                print(f"  {checked}/{total}  变化:{changed}  新填充:{populated}  错误:{errors}", flush=True)

            if r["type"] == "error":
                errors += 1
                err_list.append(r)
            elif r["type"] == "populated":
                populated += 1
                filepath = REPO_DIR / r["path"]
                if filepath.exists():
                    update_frontmatter(filepath, r["new_sig"])
                docs[r["uid"]]["has_upstream_changes"] = False
            elif r["type"] == "changed":
                changed += 1
                filepath = REPO_DIR / r["path"]
                if filepath.exists():
                    update_frontmatter(filepath, r["new_sig"])
                docs[r["uid"]]["has_upstream_changes"] = True
                changed_list.append({
                    "upstream_id": r["uid"], "title": r["title"],
                    "path": r["path"], "old_sig": r["old_sig"], "new_sig": r["new_sig"],
                })
            elif r["type"] == "unchanged":
                docs[r["uid"]]["has_upstream_changes"] = False

    cmap["summary"]["with_upstream_changes"] = changed
    cmap["generated_at"] = datetime.now().isoformat()
    with open(MAP_FILE, "w") as f:
        json.dump(cmap, f, ensure_ascii=False)

    print(f"\n=== 检测完成 ===")
    print(f"  检测: {checked}  变化: {changed}  新填充: {populated}  错误: {errors}")

    if err_list:
        print(f"\n=== 错误详情（前 10 条）===")
        for e in err_list[:10]:
            print(f"  {e['path']}")
            print(f"    catalog={e.get('catalog','?')}  object_id={e.get('object_id','?')}")

    if changed_list:
        print(f"\n=== 内容有变化的文档 ===")
        for c in changed_list:
            print(f"  {c['title']}")
            print(f"    upstream: {c['upstream_id']}")
            print(f"    file:     {c['path']}")


if __name__ == "__main__":
    main()
