#!/usr/bin/env python3
"""批量搬迁推广(鲸鸿动能广告)文档内容 — 从华为API抓取HTML，转Markdown，下载图片"""
import os, re, json, sys, asyncio, html as html_module, time
from pathlib import Path
from urllib.parse import urlparse
import hashlib

import aiohttp
from bs4 import BeautifulSoup
from markdownify import markdownify as md_convert

BASE_DIR = Path(__file__).parent.parent
DOCS_DIR = BASE_DIR / "docs" / "monetize" / "promotion"
IMG_DIR = DOCS_DIR / "img"
CATALOG_NAME = "promotion"
ROOT_OBJECT_ID = "ads-ggtfzstp-0000002285988928"
API_BASE = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal"

HEADERS = {
    "Content-Type": "application/json",
    "Referer": f"https://developer.huawei.com/consumer/cn/doc/{CATALOG_NAME}/{ROOT_OBJECT_ID}",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}

IMG_CACHE = {}
TOTAL = {"fetched": 0, "skipped": 0, "errors": 0, "images": 0}

async def fetch_json(session, endpoint, body, retries=3):
    url = f"{API_BASE}/{endpoint}"
    for attempt in range(retries):
        try:
            async with session.post(url, json=body, headers=HEADERS,
                                    timeout=aiohttp.ClientTimeout(total=60)) as resp:
                if resp.status == 200:
                    return await resp.json()
                print(f"  ⚠ HTTP {resp.status} on {body.get('objectId','')[:30]}, retry {attempt+1}")
        except (asyncio.TimeoutError, aiohttp.ClientError) as e:
            if attempt < retries - 1:
                wait = 2 ** attempt
                print(f"  ⚠ {type(e).__name__} on {body.get('objectId','')[:30]}, retry in {wait}s")
                await asyncio.sleep(wait)
            else:
                raise
    return {}

async def get_catalog_tree(session):
    data = await fetch_json(session, "getCatalogTree", {
        "language": "cn", "catalogName": CATALOG_NAME, "objectId": ROOT_OBJECT_ID
    })
    return data.get("value", {}).get("catalogTreeList", [])

def flatten_leaves(nodes):
    """Flatten catalog tree to list of leaf doc info (only those with relateDocument)."""
    leaves = []
    for node in nodes:
        rd = node.get("relateDocument", "")
        is_leaf = node.get("isLeaf", False)
        children = node.get("children", [])
        if rd and is_leaf:
            leaves.append({"objectId": rd, "nodeName": node.get("nodeName", "")})
        if children:
            leaves.extend(flatten_leaves(children))
    return leaves

async def download_image(session, url, img_dir):
    """Download a single image, return relative path."""
    if not url or not isinstance(url, str) or not url.startswith("http"):
        return url
    
    clean_url = html_module.unescape(url)
    parsed = urlparse(clean_url)
    url_key = parsed.path
    
    if url_key in IMG_CACHE:
        return IMG_CACHE[url_key]
    
    ext = os.path.splitext(parsed.path)[1].lower()
    if ext not in ('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.bmp'):
        ext = '.png'
    
    hash_part = hashlib.md5(url_key.encode()).hexdigest()[:12]
    last_seg = parsed.path.rstrip('/').split('/')[-1] if parsed.path else "img"
    if '.' in last_seg:
        last_seg = last_seg.rsplit('.', 1)[0]
    fname = f"{last_seg}_{hash_part}{ext}"
    local_path = img_dir / fname
    
    if local_path.exists():
        rel = f"./img/{fname}"
        IMG_CACHE[url_key] = rel
        return rel
    
    try:
        async with session.get(clean_url, timeout=aiohttp.ClientTimeout(total=60)) as resp:
            if resp.status == 200:
                img_dir.mkdir(parents=True, exist_ok=True)
                data = await resp.read()
                local_path.write_bytes(data)
                TOTAL["images"] += 1
                rel = f"./img/{fname}"
                IMG_CACHE[url_key] = rel
                return rel
            else:
                print(f"  ⚠ IMG {resp.status}")
                return url
    except Exception as e:
        print(f"  ⚠ IMG {type(e).__name__}")
        return url

def html_to_md(html_content):
    """Convert HTML to markdown with cleanup."""
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Remove empty anchor tags
    for a in soup.find_all('a', attrs={'name': True}):
        if not a.get_text(strip=True) and not a.get('href'):
            a.decompose()
    # Remove empty <p>
    for p in soup.find_all('p'):
        if not p.get_text(strip=True) and not p.find('img'):
            p.decompose()
    # Remove comments
    for comment in soup.find_all(string=lambda t: isinstance(t, str) and t.strip().startswith('<!--')):
        comment.extract()
    
    clean_html = str(soup)
    md = md_convert(clean_html, heading_style="ATX", bullets="-", strip=["script", "style"])
    
    # Fix heading levels
    lines = md.split('\n')
    fixed = []
    for line in lines:
        m = re.match(r'^####\s+\[h([1-6])\]\s*(.*)', line)
        if m:
            fixed.append('#' * (int(m.group(1)) + 1) + ' ' + m.group(2))
            continue
        m = re.match(r'^####\s+(.*)', line)
        if m:
            fixed.append('## ' + m.group(1))
            continue
        fixed.append(line)
    md = '\n'.join(fixed)
    
    # Collapse excessive newlines
    md = re.sub(r'\n{4,}', '\n\n', md)
    return md.strip()

def fix_mdx_issues(content):
    """Fix MDX compatibility — only body, skip frontmatter."""
    if not content.startswith('---'):
        return content
    end_fm = content.find('---', 3)
    if end_fm == -1:
        return content
    
    frontmatter = content[:end_fm + 3]
    body = content[end_fm + 3:]
    
    lines = body.split('\n')
    in_code = False
    result = []
    for line in lines:
        if line.strip().startswith('```'):
            in_code = not in_code
            result.append(line)
            continue
        result.append(line)
    
    return frontmatter + '\n'.join(result)

async def process_doc(session, sem, oid, title, img_dir):
    """Fetch and save a single document."""
    filepath = DOCS_DIR / f"{oid}.md"
    
    # Skip if file already has content (> 200 bytes)
    if filepath.exists() and filepath.stat().st_size > 200:
        TOTAL["skipped"] += 1
        return
    
    async with sem:
        try:
            data = await fetch_json(session, "getDocumentById", {
                "objectId": oid, "version": "", "catalogName": CATALOG_NAME, "language": "cn"
            })
        except Exception as e:
            print(f"  ✗ {oid}: {type(e).__name__}")
            TOTAL["errors"] += 1
            return
        
        value = data.get("value", {})
        html_content = value.get("content", {}).get("content", "")
        doc_title = value.get("title", title)
        
        if not html_content:
            TOTAL["skipped"] += 1
            return
        
        # Download images
        soup = BeautifulSoup(html_content, 'html.parser')
        for img in soup.find_all('img'):
            src = img.get('src', '')
            if isinstance(src, str) and src.startswith('http'):
                img['src'] = await download_image(session, src, img_dir)
        
        html_local = str(soup)
        md_body = html_to_md(html_local)
        
        frontmatter = [
            '---',
            f'title: "{doc_title}"',
            'displayed_sidebar: promotionSidebar',
            f'original_url: https://developer.huawei.com/consumer/cn/doc/promotion/{oid}',
            '---',
            ''
        ]
        full = '\n'.join(frontmatter) + md_body + '\n'
        full = fix_mdx_issues(full)
        
        filepath.write_text(full, encoding='utf-8')
        TOTAL["fetched"] += 1
        print(f"  ✓ {oid}: {doc_title[:35]}")

async def main():
    img_dir = IMG_DIR
    img_dir.mkdir(parents=True, exist_ok=True)
    
    start_time = time.time()
    sem = asyncio.Semaphore(10)
    
    print("📡 Fetching catalog tree...")
    async with aiohttp.ClientSession() as session:
        tree = await get_catalog_tree(session)
        leaves = flatten_leaves(tree)
        print(f"📊 {len(leaves)} leaf documents")
        
        # Sort: process in sidebar order (stable by catalog tree position)
        existing = [f.stem for f in DOCS_DIR.glob("*.md") if not f.name.startswith('_')]
        doc_ids_set = set(d["objectId"] for d in leaves)
        
        # Only process docs that have stub files
        to_process = [d for d in leaves if d["objectId"] in existing]
        print(f"📥 Fetching {len(to_process)} documents ({len(leaves) - len(to_process)} not in stubs)...")
        
        batch_size = 30
        for i in range(0, len(to_process), batch_size):
            batch = to_process[i:i+batch_size]
            tasks = [process_doc(session, sem, d["objectId"], d["nodeName"], img_dir) for d in batch]
            await asyncio.gather(*tasks)
            
            done = min(i + batch_size, len(to_process))
            eta = time.time() - start_time if i > 0 else 0
            rate = done / (time.time() - start_time + 0.1) if done > 0 else 0
            remaining = (len(to_process) - done) / rate if rate > 0 else 0
            print(f"⏳ {done}/{len(to_process)} | +{TOTAL['fetched']} fetched, {TOTAL['skipped']} empty, {TOTAL['errors']} err, {TOTAL['images']} imgs | ETA: {remaining:.0f}s")
        
        print(f"\n✅ Done! Fetched: {TOTAL['fetched']}, Empty: {TOTAL['skipped']}, Errors: {TOTAL['errors']}, Images: {TOTAL['images']}")

if __name__ == "__main__":
    asyncio.run(main())
