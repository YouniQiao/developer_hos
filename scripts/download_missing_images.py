#!/usr/bin/env python3
"""
批量下载缺失图片：扫描所有 .md 文件，通过华为 API 获取原始 HTML，
下载图片到本地 img/ 目录。
"""
import os, re, sys, json, hashlib, time, urllib.request
from pathlib import Path
from urllib.parse import urlparse
from bs4 import BeautifulSoup
from collections import defaultdict

PROJECT = Path("/Users/hhxi/developer_hos")
DOCS_DIR = PROJECT / "docs"
API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
}

# Directories to scan
SCAN_DIRS = [
    "dev/atomic-dev",
    "dev/ndk-dev",
    "dev/game-dev",
    "atomic",
]

# Global image cache: url_path -> local_rel_path (across all docs)
image_cache = {}


def download_image(img_url, doc_dir):
    """Download image to doc_dir/img/, return local relative path. Returns None on failure."""
    try:
        parsed = urlparse(img_url)
        url_path = parsed.path
        if url_path in image_cache:
            return image_cache[url_path]

        ext = os.path.splitext(url_path)[1]
        if not ext or len(ext) > 6:
            ext = '.png'
        h = hashlib.md5(url_path.encode()).hexdigest()[:8]
        local_name = f"{h}{ext}"

        img_dir = doc_dir / "img"
        img_dir.mkdir(parents=True, exist_ok=True)
        local_path = img_dir / local_name

        # Skip if already exists
        if local_path.exists() and local_path.stat().st_size > 200:
            rel = f"./img/{local_name}"
            image_cache[url_path] = rel
            return rel

        for attempt in range(3):
            try:
                req = urllib.request.Request(img_url, headers={"User-Agent": HEADERS["User-Agent"]})
                data = urllib.request.urlopen(req, timeout=15).read()
                if len(data) > 200:
                    local_path.write_bytes(data)
                    rel = f"./img/{local_name}"
                    image_cache[url_path] = rel
                    return rel
            except Exception:
                if attempt < 2:
                    time.sleep(1)
        return None
    except Exception:
        return None


def process_doc(md_path):
    """Fetch original HTML and download images for a single .md file."""
    try:
        text = md_path.read_text(encoding='utf-8')

        # Check for image references
        img_refs = re.findall(r'!\[.*?\]\(\./img/([^\s)]+)', text)
        if not img_refs:
            return 0, 0  # No images referenced

        # Check how many are missing
        doc_dir = md_path.parent
        img_dir = doc_dir / "img"
        missing = []
        for ref in img_refs:
            img_path = img_dir / ref
            if not img_path.exists() or img_path.stat().st_size < 200:
                missing.append(ref)

        if not missing:
            return 0, 0  # All images present

        # Extract original_url from frontmatter
        m = re.search(r'original_url:\s*(https?://[^\n]+)', text)
        if not m:
            return 0, len(missing)  # Can't fetch without original URL

        original_url = m.group(1).strip()
        parsed = urlparse(original_url)
        # Parse catalog and objectId from URL path
        # e.g., /consumer/cn/doc/games-guides/pga-pgo-0000002415517840
        # e.g., /consumer/cn/doc/atomic-ascf/components-text
        # e.g., /consumer/cn/doc/harmonyos-guides/xxx
        path_parts = parsed.path.strip('/').split('/')
        # Expected: consumer, cn, doc, <catalogName>, <objectId...>
        if len(path_parts) < 5 or path_parts[2] != 'doc':
            return 0, len(missing)

        catalog_name = path_parts[3]
        object_id = '/'.join(path_parts[4:])  # Some IDs have slashes

        # Fetch from API
        body = json.dumps({
            "objectId": object_id,
            "version": "",
            "catalogName": catalog_name,
            "language": "cn"
        }).encode('utf-8')

        req = urllib.request.Request(API_URL, data=body, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=30)
        data = json.loads(resp.read())

        content = data.get("value", {}).get("content", {})
        if not content or not content.get("content"):
            return 0, len(missing)

        html_content = content["content"]

        # Extract and download images
        soup = BeautifulSoup(html_content, 'html.parser')
        downloaded = 0
        for img in soup.find_all('img'):
            src = img.get('src', '')
            if isinstance(src, list):
                src = src[0] if src else ''
            if not src or str(src).startswith('data:'):
                continue
            src = str(src)
            # Make relative URLs absolute
            if src.startswith('/'):
                src = f"https://developer.huawei.com{src}"
            elif not src.startswith('http'):
                base = f"https://developer.huawei.com{parsed.path.rsplit('/', 1)[0]}/"
                src = base + src

            local = download_image(src, doc_dir)
            if local:
                downloaded += 1

        return downloaded, len(missing)

    except Exception as e:
        # Return what we have
        missing_count = len(missing) if 'missing' in locals() else 0
        return 0, missing_count


def main():
    total_downloaded = 0
    total_missing = 0
    processed = 0

    for scan_dir in SCAN_DIRS:
        full_dir = DOCS_DIR / scan_dir
        if not full_dir.exists():
            continue

        md_files = list(full_dir.rglob("*.md"))
        print(f"\n📁 {scan_dir}: {len(md_files)} .md files", flush=True)
        processed_in_dir = 0

        for md_path in sorted(md_files):
            downloaded, missing = process_doc(md_path)
            if missing > 0:
                processed += 1
                total_downloaded += downloaded
                total_missing += missing
                status = f"✅ {downloaded}/{missing}" if downloaded > 0 else f"❌ 0/{missing}"
                rel = md_path.relative_to(PROJECT)
                print(f"  {status}  {rel}", flush=True)
            processed_in_dir += 1
            if processed_in_dir % 100 == 0:
                print(f"    ... {processed_in_dir}/{len(md_files)} files scanned", flush=True)

    print(f"\n{'='*60}")
    print(f"Processed {processed} docs with missing images")
    print(f"Downloaded: {total_downloaded}")
    print(f"Still missing: {total_missing - total_downloaded}")
    print(f"Cache size: {len(image_cache)} unique images")


if __name__ == "__main__":
    main()
