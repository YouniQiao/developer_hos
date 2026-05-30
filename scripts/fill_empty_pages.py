#!/usr/bin/env python3
"""Fill empty promotion pages by fetching content from Huawei API."""
import os, re, sys, asyncio, html as html_module, hashlib
from pathlib import Path
from urllib.parse import urlparse

import aiohttp
from bs4 import BeautifulSoup
from markdownify import markdownify as md_convert

BASE_DIR = Path(__file__).parent.parent
DOCS_DIR = BASE_DIR / "docs" / "monetize" / "promotion"
IMG_DIR = DOCS_DIR / "img"
CATALOG_NAME = "promotion"
API_BASE = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal"

HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/consumer/cn/doc/promotion/ads-ggtfzstp-0000002285988928",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
}

# Target files to fill
TARGETS = [
    "preload-tab-0000002513338994",
    "preload-effect-0000002544938961",
    "preload-rqhx-0000002544858971",
    "preload-push-time-0000002513338996",
    "preload-push-hdfa-0000002544938963",
    "preload-push-hdxxcx-0000002544874473",
    "preload-zh-0000002544937071",
    "preload-role-0000002545107377",
    "preload-dl-0000002544805425",
    "bp-news-newyear-0000002518447694",
    "marketapi-adtask18-0000001135626826",
    "bpos-campaigns-0000001328837534",
]

# Minimal image cache
IMG_CACHE = {}
fetched = 0
errors = 0
images = 0

async def fetch_json(session, endpoint, body, retries=3):
    url = f"{API_BASE}/{endpoint}"
    for attempt in range(retries):
        try:
            async with session.post(url, json=body, headers=HEADERS,
                                    timeout=aiohttp.ClientTimeout(total=60)) as resp:
                if resp.status == 200:
                    return await resp.json()
                print(f"  ⚠ HTTP {resp.status} on {body.get('objectId','')}, retry {attempt+1}")
        except (asyncio.TimeoutError, aiohttp.ClientError) as e:
            if attempt < retries - 1:
                wait = 2 ** attempt
                await asyncio.sleep(wait)
            else:
                raise
    return {}

async def download_image(session, url):
    global images
    if not url or not url.startswith("http"):
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
    local_path = IMG_DIR / fname
    if local_path.exists():
        rel = f"./img/{fname}"
        IMG_CACHE[url_key] = rel
        return rel
    try:
        async with session.get(clean_url, timeout=aiohttp.ClientTimeout(total=60)) as resp:
            if resp.status == 200:
                IMG_DIR.mkdir(parents=True, exist_ok=True)
                local_path.write_bytes(await resp.read())
                images += 1
                rel = f"./img/{fname}"
                IMG_CACHE[url_key] = rel
                return rel
            return url
    except:
        return url

def html_to_md(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')
    for a in soup.find_all('a', attrs={'name': True}):
        if not a.get_text(strip=True) and not a.get('href'):
            a.decompose()
    for p in soup.find_all('p'):
        if not p.get_text(strip=True) and not p.find('img'):
            p.decompose()
    for comment in soup.find_all(string=lambda t: isinstance(t, str) and t.strip().startswith('<!--')):
        comment.extract()
    clean_html = str(soup)
    md = md_convert(clean_html, heading_style="ATX", bullets="-", strip=["script", "style"])
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
    md = re.sub(r'\n{4,}', '\n\n', md)
    return md.strip()

async def process_one(session, oid, title):
    global fetched, errors
    filepath = DOCS_DIR / f"{oid}.md"
    print(f"  Fetching {oid}...")
    try:
        data = await fetch_json(session, "getDocumentById", {
            "objectId": oid, "version": "", "catalogName": CATALOG_NAME, "language": "cn"
        })
    except Exception as e:
        print(f"  ✗ {oid}: {type(e).__name__}")
        errors += 1
        return
    value = data.get("value", {})
    html_content = value.get("content", {}).get("content", "")
    doc_title = value.get("title", title)
    if not html_content:
        print(f"  ⚠ {oid}: empty content from API")
        return
    soup = BeautifulSoup(html_content, 'html.parser')
    for img in soup.find_all('img'):
        src = img.get('src', '')
        if isinstance(src, str) and src.startswith('http'):
            img['src'] = await download_image(session, src)
    html_local = str(soup)
    md_body = html_to_md(html_local)
    frontmatter_lines = [
        '---',
        f'title: "{doc_title}"',
        'displayed_sidebar: promotionSidebar',
        f'original_url: https://developer.huawei.com/consumer/cn/doc/promotion/{oid}',
        '---',
        ''
    ]
    full = '\n'.join(frontmatter_lines) + md_body + '\n'
    filepath.write_text(full, encoding='utf-8')
    fetched += 1
    sz = filepath.stat().st_size
    print(f"  ✓ {oid}: {doc_title[:35]} ({sz} bytes)")

async def main():
    print(f"📥 Filling {len(TARGETS)} empty pages...")
    async with aiohttp.ClientSession() as session:
        for oid in TARGETS:
            await process_one(session, oid, "")
            await asyncio.sleep(0.5)  # rate limit
    print(f"\n✅ Done! Fetched: {fetched}, Errors: {errors}, Images: {images}")

if __name__ == "__main__":
    asyncio.run(main())
