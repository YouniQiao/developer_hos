#!/usr/bin/env python3
"""
Batch migrate Huawei Monetize docs from API to local MDX files.
Usage: python3 scripts/migrate_monetize.py [--all|--section SECTION|--resume]
"""

import json
import os
import re
import subprocess
import sys
import tempfile
import time
import urllib.request
import urllib.error
from pathlib import Path

BASE_DIR = '/Users/hhxi/developer_hos'
DOCS_DIR = os.path.join(BASE_DIR, 'docs/monetize/monetization')
IMG_DIR = os.path.join(DOCS_DIR, 'img')
SCRIPTS_DIR = os.path.join(BASE_DIR, 'scripts')
VENV_PYTHON = '/Users/hhxi/.hermes/hermes-agent/venv/bin/python3'
CATALOG_FILE = '/tmp/catalog_monetize.network-response'

# Ensure directories exist
os.makedirs(IMG_DIR, exist_ok=True)
os.makedirs(SCRIPTS_DIR, exist_ok=True)

# Track processed pages to resume
PROGRESS_FILE = '/tmp/monetize_progress.json'

def load_catalog():
    """Load catalog tree from saved response"""
    with open(CATALOG_FILE) as f:
        data = json.loads(f.read())
    
    pages = []
    def extract(node):
        name = node.get('nodeName', '')
        doc_id = node.get('relateDocument', '')
        if doc_id:
            pages.append({'name': name, 'doc_id': doc_id})
        for child in node.get('children', []):
            extract(child)
    
    for top in data['value']['catalogTreeList']:
        extract(top)
    
    return pages

def fetch_html(doc_id):
    """Fetch document HTML from Huawei API"""
    url = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById'
    data = json.dumps({
        "objectId": doc_id,
        "version": "",
        "catalogName": "monetize",
        "language": "cn"
    }).encode('utf-8')
    
    req = urllib.request.Request(url, data=data, headers={
        'Content-Type': 'application/json',
        'Origin': 'https://developer.huawei.com',
        'Referer': 'https://developer.huawei.com/',
        'User-Agent': 'Mozilla/5.0'
    })
    
    try:
        resp = urllib.request.urlopen(req, timeout=30)
        result = json.loads(resp.read().decode('utf-8'))
        if result.get('code') != 0:
            return None, None, f"API error: {result.get('message')}"
        value = result['value']
        html = value['content']['content']
        title = value.get('title', '')
        updated = value.get('updatedDate', '')
        return html, title, updated
    except Exception as e:
        return None, None, str(e)

def download_image(img_url, doc_id, img_index):
    """Download image and return local path"""
    # URL-encode the image URL properly
    from urllib.parse import urlparse, quote, unquote
    # The URL may already be partially encoded - unquote first then re-quote
    try:
        clean_url = unquote(img_url)
        # Encode only the path portion, not the scheme and domain
        parsed = urlparse(clean_url)
        path_parts = parsed.path.split('/')
        encoded_path = '/'.join(quote(p, safe='/:') for p in path_parts)
        encoded_url = f"{parsed.scheme}://{parsed.netloc}{encoded_path}"
        if parsed.query:
            encoded_url += f"?{parsed.query}"
    except:
        encoded_url = img_url
    
    # Generate filename from URL hash
    ext = '.png'
    for e in ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp']:
        if e in img_url.lower():
            ext = e
            break
    
    filename = f"{doc_id}_{img_index}{ext}"
    local_path = os.path.join(IMG_DIR, filename)
    
    if os.path.exists(local_path):
        return f'./img/{filename}'
    
    try:
        req = urllib.request.Request(encoded_url, headers={
            'User-Agent': 'Mozilla/5.0',
            'Referer': 'https://developer.huawei.com/'
        })
        resp = urllib.request.urlopen(req, timeout=30)
        with open(local_path, 'wb') as f:
            f.write(resp.read())
        return f'./img/{filename}'
    except Exception as e:
        print(f"  [WARN] Failed to download {img_url[:80]}: {e}")
        return img_url  # fall back to original URL

def html_to_markdown(html):
    """Convert HTML to markdown using markitdown"""
    with tempfile.NamedTemporaryFile(suffix='.html', mode='w', delete=False) as f:
        f.write(html)
        html_path = f.name
    
    md_path = html_path + '.md'
    try:
        # Convert using markitdown
        result = subprocess.run(
            [VENV_PYTHON, '-m', 'markitdown', html_path],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            return result.stdout
        else:
            print(f"  [WARN] markitdown failed: {result.stderr[:200]}")
            # Fallback: simple HTML to text conversion
            return simple_html_to_md(html)
    except Exception as e:
        print(f"  [WARN] markitdown error: {e}")
        return simple_html_to_md(html)
    finally:
        os.unlink(html_path)
        if os.path.exists(md_path):
            os.unlink(md_path)

def simple_html_to_md(html):
    """Simple HTML to markdown fallback conversion"""
    # Remove scripts, styles, XML declarations
    text = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
    text = re.sub(r'<\?xml[^?]*\?>', '', text)
    text = re.sub(r'<!\[CDATA\[.*?\]\]>', '', text, flags=re.DOTALL)
    
    # Handle headings
    text = re.sub(r'<h1[^>]*>(.*?)</h1>', r'# \1', text, flags=re.DOTALL)
    text = re.sub(r'<h2[^>]*>(.*?)</h2>', r'## \1', text, flags=re.DOTALL)
    text = re.sub(r'<h3[^>]*>(.*?)</h3>', r'### \1', text, flags=re.DOTALL)
    text = re.sub(r'<h4[^>]*>(.*?)</h4>', r'#### \1', text, flags=re.DOTALL)
    
    # Handle lists
    text = re.sub(r'<li[^>]*>(.*?)</li>', r'- \1', text, flags=re.DOTALL)
    text = re.sub(r'</?ul[^>]*>', '', text, flags=re.DOTALL)
    text = re.sub(r'</?ol[^>]*>', '', text, flags=re.DOTALL)
    
    # Handle paragraphs
    text = re.sub(r'<p[^>]*>(.*?)</p>', r'\1\n\n', text, flags=re.DOTALL)
    
    # Handle div sections
    text = re.sub(r'<div[^>]*>', '\n', text)
    text = re.sub(r'</div>', '\n', text)
    
    # Handle <br>
    text = re.sub(r'<br\s*/?>', '\n', text)
    
    # Handle bold/italic
    text = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', text, flags=re.DOTALL)
    text = re.sub(r'<b[^>]*>(.*?)</b>', r'**\1**', text, flags=re.DOTALL)
    text = re.sub(r'<em[^>]*>(.*?)</em>', r'*\1*', text, flags=re.DOTALL)
    text = re.sub(r'<i[^>]*>(.*?)</i>', r'*\1*', text, flags=re.DOTALL)
    
    # Handle links
    text = re.sub(r'<a[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', r'[\2](\1)', text, flags=re.DOTALL)
    
    # Handle images (placeholder - will be downloaded separately)
    text = re.sub(r'<img[^>]*src=["\']([^"\']+)["\'][^>]*>', r'![](\1)', text)
    
    # Handle tables (simple - just td/tr)
    text = re.sub(r'</?thead>', '', text, flags=re.DOTALL)
    text = re.sub(r'</?tbody>', '', text, flags=re.DOTALL)
    text = re.sub(r'<table[^>]*>', '\n<table>\n', text)
    text = re.sub(r'</table>', '</table>\n', text)
    text = re.sub(r'<tr[^>]*>', '<tr>', text)
    text = re.sub(r'</tr>', '</tr>\n', text)
    text = re.sub(r'<th[^>]*>(.*?)</th>', r'<th>\1</th>', text, flags=re.DOTALL)
    text = re.sub(r'<td[^>]*>(.*?)</td>', r'<td>\1</td>', text, flags=re.DOTALL)
    
    # Remove all remaining HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    
    # Clean up excessive whitespace
    text = re.sub(r'\n{3,}', '\n\n', text)
    text = re.sub(r' +\n', '\n', text)
    
    return text.strip()

def process_markdown(md_text, doc_id, title):
    """Post-process markdown: download images, fix MDX issues"""
    lines = md_text.split('\n')
    new_lines = []
    img_index = 0
    
    for line in lines:
        img_matches = re.findall(r'!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)', line)
        for alt_text, img_url in img_matches:
            local_path = download_image(img_url, doc_id, img_index)
            orig = f'![{alt_text}]({img_url}'
            # Reconstruct preserving title if present
            title_match = re.search(re.escape(img_url) + r'(\s+"[^"]*")', line)
            if title_match:
                orig_full = f'![{alt_text}]({img_url}{title_match.group(1)})'
                new_img = f'![{alt_text}]({local_path}{title_match.group(1)})'
                line = line.replace(orig_full, new_img)
            else:
                orig_full = f'![{alt_text}]({img_url})'
                new_img = f'![{alt_text}]({local_path})'
                line = line.replace(orig_full, new_img)
            img_index += 1
        
        new_lines.append(line)
    
    md_text = '\n'.join(new_lines)
    
    # Fix tables - ensure they have proper header separator
    md_text = fix_markdown_tables(md_text)
    
    # Fix MDX issues:
    # 1. URL followed by CJK character - add space
    md_text = re.sub(r'(https?://[^\s<>"\'\]\)]+)([\u4e00-\u9fff\uff00-\uffef\u3000-\u303f，。、；：！？）】])', r'\1 \2', md_text)
    
    # 2. <https://...> in angle brackets (MDX treats as JSX)
    md_text = re.sub(r'<(https?://[^>]+)>', r'`\1`', md_text)
    
    # 3. HashMap<String, String> style generics
    md_text = re.sub(r'(\w+)<(\w+),\s*\w+>', r'`\1<\2>`', md_text)
    # But avoid over-escaping
    md_text = re.sub(r'(`[^`]+`)\s*<', r'\1 <', md_text)
    
    # 4. Fix any remaining angle bracket issues in type annotations
    # E.g. in code blocks they're fine, but outside they cause MDX issues
    
    return md_text

def fix_markdown_tables(md_text):
    """Ensure tables have proper header separator rows"""
    lines = md_text.split('\n')
    result = []
    i = 0
    while i < len(lines):
        line = lines[i]
        # Check if we have a pipe table without separator
        if line.strip().startswith('|') and line.count('|') > 2:
            # Check if next line is a separator
            if i + 1 < len(lines) and not lines[i+1].strip().startswith('|'):
                # Check if line after that also starts with |
                if i + 2 < len(lines) and lines[i+2].strip().startswith('|'):
                    # This is a table header without separator - add one
                    cols = line.count('|') - 1
                    separator = '|' + '|'.join(['---'] * cols) + '|'
                    result.append(line)
                    result.append(separator)
                    i += 1
                    continue
        result.append(line)
        i += 1
    return '\n'.join(result)

def write_mdx(doc_id, title, md_content, updated_date):
    """Write the markdown file with frontmatter"""
    filepath = os.path.join(DOCS_DIR, f'{doc_id}.md')
    
    frontmatter = f"""---
title: "{title}"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/{doc_id}
---

"""
    # Remove any existing H1 if the markdown already has one (to avoid double #)
    content = md_content.strip()
    content = re.sub(r'^#\s+.*?\n', '', content, count=1)  # Remove H1 from body since title is in frontmatter
    
    full_content = frontmatter + content + '\n'
    
    with open(filepath, 'w') as f:
        f.write(full_content)
    
    return filepath

def process_page(doc_id, name):
    """Process a single page: fetch -> convert -> save"""
    print(f"\n{'='*60}")
    print(f"Processing: {name} ({doc_id})")
    print(f"{'='*60}")
    
    # Fetch HTML
    html, title, updated = fetch_html(doc_id)
    if html is None:
        print(f"  [FAIL] {title}")
        return False
    
    print(f"  Title: {title}")
    print(f"  HTML size: {len(html)} bytes")
    
    # Convert HTML to markdown
    md_text = html_to_markdown(html)
    if not md_text.strip():
        print(f"  [FAIL] Empty conversion result")
        return False
    print(f"  MD size: {len(md_text)} chars")
    
    # Post-process
    md_text = process_markdown(md_text, doc_id, title)
    
    # Write file
    filepath = write_mdx(doc_id, title, md_text, updated)
    print(f"  [OK] Saved: {filepath}")
    
    return True

def load_progress():
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE) as f:
            return json.load(f)
    return {'completed': [], 'failed': []}

def save_progress(progress):
    with open(PROGRESS_FILE, 'w') as f:
        json.dump(progress, f)

def main():
    pages = load_catalog()
    print(f"Total pages in catalog: {len(pages)}")
    
    # Check filter
    filter_section = None
    if '--section' in sys.argv:
        idx = sys.argv.index('--section')
        filter_section = sys.argv[idx + 1]
    
    resume = '--resume' in sys.argv
    run_all = '--all' in sys.argv or len(sys.argv) == 1
    
    progress = load_progress() if resume else {'completed': [], 'failed': []}
    
    # Determine which pages to process
    to_process = pages
    
    if filter_section:
        # Filter by section name
        to_process = [p for p in pages if filter_section.lower() in p['name'].lower() or 
                      filter_section.lower() in p['doc_id'].lower()]
        print(f"Filtered to {len(to_process)} pages matching '{filter_section}'")
    
    if resume:
        to_process = [p for p in to_process if p['doc_id'] not in progress['completed'] 
                     and p['doc_id'] not in progress['failed']]
        print(f"Resuming: {len(to_process)} remaining (completed: {len(progress['completed'])}, failed: {len(progress['failed'])})")
    
    # Process
    success = 0
    fail = 0
    
    for i, page in enumerate(to_process):
        doc_id = page['doc_id']
        name = page['name']
        
        # Skip if already processed
        if doc_id in progress['completed']:
            continue
        
        print(f"\n[{i+1}/{len(to_process)}] ", end='')
        ok = process_page(doc_id, name)
        
        if ok:
            progress['completed'].append(doc_id)
            success += 1
        else:
            progress['failed'].append(doc_id)
            fail += 1
        
        save_progress(progress)
        
        # Be nice to the API
        time.sleep(0.5)
    
    print(f"\n{'='*60}")
    print(f"Done! Success: {success}, Failed: {fail}")
    print(f"Total completed: {len(progress['completed'])}")

if __name__ == '__main__':
    main()
