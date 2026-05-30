#!/usr/bin/env python3
"""
Force-fetch 21 files from API and convert to markdown, then run merge table converter.
"""
import asyncio, os, re, json
import aiohttp
from bs4 import BeautifulSoup
from markdownify import markdownify as md_convert

API_BASE = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal"
HEADERS = {"Content-Type": "application/json", "User-Agent": "Mozilla/5.0"}
PROMO_DIR = "docs/monetize/promotion"

# Change this to the output format we want:
# - 'markdown': normal markdown tables (for build testing)
# - 'merge': MergeTable JSX (final format)
OUTPUT_MODE = 'markdown'

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

async def fetch_one(session, oid):
    async with session.post(f"{API_BASE}/getDocumentById", json={
        "objectId": oid, "version": "", "catalogName": "promotion", "language": "cn"
    }, headers=HEADERS, timeout=aiohttp.ClientTimeout(total=30)) as resp:
        data = await resp.json()
    return data.get("value", {})

async def main():
    oids = [
        "activity-type-0000001131086020",
        "ads-bwgzkpl-0000002506543599",
        "ads-gjrjhg-0000002544259658",
        "ads-hygzhfcz-0000002505686321",
        "ads-khhy-0000002317140653",
        "ads-kpscmgzd-0000002499514356",
        "ads-toufanguangliguifang-0000001793450445",
        "ads_ocpc01-0000001058599220",
        "bp-bonus-cooperation-0000001309230226",
        "bp-delivery-task-management-index-0000001293894160",
        "bp-functions-rta-create-0000001351897861",
        "bpos-start-guest-recharge-overview-0000001379677849",
        "bpos-start-service-provider-financial-management-0000001328517614",
        "different-ratings-0000001234125571",
        "display-0000001057113500",
        "finance-0000001058604140",
        "fusion-summary-0000002499177821",
        "overview-wytg-0000001228193251",
        "settlement-overview-0000001176952305",
        "targeting-0000001180547094",
        "ads_gongju28-0000001625985609",
    ]

    async with aiohttp.ClientSession() as session:
        for oid in oids:
            value = await fetch_one(session, oid)
            html_content = value.get("content", {}).get("content", "")
            doc_title = value.get("title", oid)
            
            if not html_content:
                print(f"  ⚠ {oid}: empty")
                continue
            
            md_body = html_to_md(html_content)
            frontmatter = [
                '---',
                f'title: "{doc_title}"',
                'displayed_sidebar: promotionSidebar',
                f'original_url: https://developer.huawei.com/consumer/cn/doc/promotion/{oid}',
                '---',
                ''
            ]
            full = '\n'.join(frontmatter) + md_body + '\n'
            
            fpath = os.path.join(PROMO_DIR, f"{oid}.md")
            with open(fpath, 'w') as f:
                f.write(full)
            
            sz = len(full)
            print(f"  ✓ {oid}: {sz} bytes")

asyncio.run(main())
