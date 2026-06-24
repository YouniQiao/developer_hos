"""HarmonyOS API Reference Syncer

从华为开发者官网拉取 API 参考文档（harmonyos-references catalog），
转 Markdown 存入独立 Git 仓库。

用法:
    python3 sync.py              # 全量同步
    python3 sync.py --sample 10  # 测试模式
"""

import hashlib
import os
import re
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime
from pathlib import Path

# 复用 sync-panel 的 API 调用和 HTML→MD 转换
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "developer_hos", "sync-panel", "backend"))
from sync_runner import fetch_catalog_tree, fetch_doc
from executor import _html_to_md
from path_util import doc_path_en

REPO_DIR = Path(__file__).resolve().parent
DOCS_DIR = REPO_DIR / "docs"
CATALOG = "harmonyos-references"
CONCURRENCY = 4  # API 请求并发数



def fetch_and_save(leaf, total_done, total_all):
    """拉取单篇 API 文档，转 MD 保存"""
    object_id, title, breadcrumb, depth = leaf
    path_stem = doc_path_en(breadcrumb, object_id)
    md_path = DOCS_DIR / f"{path_stem}.md"
    
    # 已存在就跳过
    if md_path.exists():
        return "skip", None
    
    result = fetch_doc(object_id, CATALOG)
    if not result or not result.get("html"):
        return "error", None
    
    html = result["html"]
    markdown, images = _html_to_md(html)
    
    # 构造 frontmatter
    upstream_id = f"{CATALOG}/{object_id}"
    fm = f"""---
title: "{title}"
upstream_id: "{upstream_id}"
catalog: "{CATALOG}"
synced_at: "{datetime.now().isoformat()}"
---

"""
    content = fm + markdown
    
    # 写入文件
    md_path.parent.mkdir(parents=True, exist_ok=True)
    md_path.write_text(content, encoding="utf-8")
    
    # 下载图片
    img_dir = md_path.parent / "img"
    img_dir.mkdir(parents=True, exist_ok=True)
    img_downloaded = 0
    for url, fname in images:
        img_path = img_dir / fname
        if img_path.exists():
            continue
        try:
            import urllib.request
            urllib.request.urlretrieve(url, str(img_path))
            img_downloaded += 1
        except Exception:
            pass
    
    return "new", img_downloaded


def main():
    import argparse
    parser = argparse.ArgumentParser()
    parser.add_argument("--sample", type=int, default=0, help="只拉取 N 篇（测试用）")
    args = parser.parse_args()
    
    print(f"📡 拉取 {CATALOG} 目录树...")
    leaves = fetch_catalog_tree(CATALOG)
    if not leaves:
        print("❌ 拉取目录树失败")
        return 1
    
    print(f"📊 目录树: {len(leaves)} 个叶子节点")
    
    if args.sample:
        leaves = leaves[:args.sample]
        print(f"🧪 测试模式，只处理前 {args.sample} 篇")
    
    new_count = 0
    skip_count = 0
    error_count = 0
    img_total = 0
    
    start = time.time()
    
    with ThreadPoolExecutor(max_workers=CONCURRENCY) as pool:
        futures = {pool.submit(fetch_and_save, leaf, 0, len(leaves)): leaf for leaf in leaves}
        for i, future in enumerate(as_completed(futures), 1):
            status, imgs = future.result()
            if status == "new":
                new_count += 1
                img_total += (imgs or 0)
            elif status == "skip":
                skip_count += 1
            else:
                error_count += 1
            
            if i % 50 == 0 or i == len(futures):
                elapsed = time.time() - start
                rate = i / elapsed if elapsed > 0 else 0
                print(f"  [{i}/{len(leaves)}] new={new_count} skip={skip_count} err={error_count}  {rate:.1f} pages/s")
    
    elapsed = time.time() - start
    print(f"\n✅ 完成: {new_count} 新增, {skip_count} 跳过, {error_count} 失败")
    print(f"⏱️  耗时: {elapsed/60:.1f} 分钟")
    print(f"🖼️  下载图片: {img_total} 张")
    
    # 统计
    md_files = list(DOCS_DIR.rglob("*.md"))
    total_size = sum(f.stat().st_size for f in md_files)
    print(f"📁 总计: {len(md_files)} 个 MD 文件, {total_size/1024/1024:.1f} MB")
    
    return 0


if __name__ == "__main__":
    sys.exit(main())
