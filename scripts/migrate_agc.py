#!/usr/bin/env python3
"""
Batch migrate AGC (AppGallery Connect) docs from Huawei API to local MDX files.
Scans existing placeholder files in docs/distribute/agc/ with original_url frontmatter.
Usage: python3 scripts/migrate_agc.py [--resume]
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
from urllib.parse import urlparse, quote, unquote

BASE_DIR = '/Users/hhxi/developer_hos'
AGC_DIR = os.path.join(BASE_DIR, 'docs/distribute/agc')
IMG_DIR = os.path.join(AGC_DIR, 'img')
VENV_PYTHON = '/Users/hhxi/.hermes/hermes-agent/venv/bin/python3'
PROGRESS_FILE = '/tmp/agc_progress.json'
CATALOG_NAME = 'app'

os.makedirs(IMG_DIR, exist_ok=True)

def scan_placeholder_files():
    """Scan AGC directory for placeholder .md files with original_url"""
    files = []
    for root, dirs, fnames in os.walk(AGC_DIR):
        for fname in fnames:
            if not fname.endswith('.md'):
                continue
            fpath = os.path.join(root, fname)
            rel_path = os.path.relpath(fpath, BASE_DIR)
            
            # Read frontmatter
            content = open(fpath, 'r', errors='replace').read()
            
            # Extract original_url
            m = re.search(r'original_url:\s*(https?://\S+)', content)
            if not m:
                continue
            
            url = m.group(1).strip()
            doc_id = url.rstrip('/').split('/')[-1]
            
            # Check if it's a placeholder (small file)
            is_placeholder = os.path.getsize(fpath) < 200
            
            files.append({
                'path': fpath,
                'rel_path': rel_path,
                'url': url,
                'doc_id': doc_id,
                'is_placeholder': is_placeholder,
            })
    
    return files

def fetch_html(doc_id):
    """Fetch document HTML from Huawei API"""
    url = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById'
    data = json.dumps({
        "objectId": doc_id,
        "version": "",
        "catalogName": CATALOG_NAME,
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
    try:
        clean_url = unquote(img_url)
        parsed = urlparse(clean_url)
        path_parts = parsed.path.split('/')
        encoded_path = '/'.join(quote(p, safe='/:') for p in path_parts)
        encoded_url = f"{parsed.scheme}://{parsed.netloc}{encoded_path}"
        if parsed.query:
            encoded_url += f"?{parsed.query}"
    except:
        encoded_url = img_url
    
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
        return img_url

def html_to_markdown(html):
    """Convert HTML to markdown using markitdown"""
    with tempfile.NamedTemporaryFile(suffix='.html', mode='w', delete=False, encoding='utf-8') as f:
        f.write(html)
        html_path = f.name
    
    md_path = html_path + '.md'
    try:
        result = subprocess.run(
            [VENV_PYTHON, '-m', 'markitdown', html_path],
            capture_output=True, text=True, timeout=30
        )
        if result.returncode == 0:
            return result.stdout
        else:
            print(f"  [WARN] markitdown failed: {result.stderr[:200]}")
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
    text = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
    text = re.sub(r'<\?xml[^?]*\?>', '', text)
    text = re.sub(r'<!\[CDATA\[.*?\]\]>', '', text, flags=re.DOTALL)
    
    text = re.sub(r'<h1[^>]*>(.*?)</h1>', r'# \1', text, flags=re.DOTALL)
    text = re.sub(r'<h2[^>]*>(.*?)</h2>', r'## \1', text, flags=re.DOTALL)
    text = re.sub(r'<h3[^>]*>(.*?)</h3>', r'### \1', text, flags=re.DOTALL)
    text = re.sub(r'<h4[^>]*>(.*?)</h4>', r'#### \1', text, flags=re.DOTALL)
    
    text = re.sub(r'<li[^>]*>(.*?)</li>', r'- \1', text, flags=re.DOTALL)
    text = re.sub(r'</?ul[^>]*>', '', text, flags=re.DOTALL)
    text = re.sub(r'</?ol[^>]*>', '', text, flags=re.DOTALL)
    
    text = re.sub(r'<p[^>]*>(.*?)</p>', r'\1\n\n', text, flags=re.DOTALL)
    text = re.sub(r'<div[^>]*>', '\n', text)
    text = re.sub(r'</div>', '\n', text)
    text = re.sub(r'<br\s*/?>', '\n', text)
    
    text = re.sub(r'<strong[^>]*>(.*?)</strong>', r'**\1**', text, flags=re.DOTALL)
    text = re.sub(r'<b[^>]*>(.*?)</b>', r'**\1**', text, flags=re.DOTALL)
    text = re.sub(r'<em[^>]*>(.*?)</em>', r'*\1*', text, flags=re.DOTALL)
    text = re.sub(r'<i[^>]*>(.*?)</i>', r'*\1*', text, flags=re.DOTALL)
    
    text = re.sub(r'<a[^>]*href=[\"\']([^\"\']+)[\"\'][^>]*>(.*?)</a>', r'[\2](\1)', text, flags=re.DOTALL)
    text = re.sub(r'<img[^>]*src=[\"\']([^\"\']+)[\"\'][^>]*>', r'![](\1)', text)
    
    text = re.sub(r'</?thead>', '', text, flags=re.DOTALL)
    text = re.sub(r'</?tbody>', '', text, flags=re.DOTALL)
    text = re.sub(r'<table[^>]*>', '\n<table>\n', text)
    text = re.sub(r'</table>', '</table>\n', text)
    text = re.sub(r'<tr[^>]*>', '<tr>', text)
    text = re.sub(r'</tr>', '</tr>\n', text)
    text = re.sub(r'<th[^>]*>(.*?)</th>', r'<th>\1</th>', text, flags=re.DOTALL)
    text = re.sub(r'<td[^>]*>(.*?)</td>', r'<td>\1</td>', text, flags=re.DOTALL)
    
    text = re.sub(r'<[^>]+>', '', text)
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
    md_text = fix_markdown_tables(md_text)
    
    # Fix MDX issues
    md_text = re.sub(r'(https?://[^\s<>"\'\]\)]+)([\u4e00-\u9fff\uff00-\uffef\u3000-\u303f，。、；：！？）】])', r'\1 \2', md_text)
    md_text = re.sub(r'<(https?://[^>]+)>', r'`\1`', md_text)
    md_text = re.sub(r'(\w+)<(\w+),\s*\w+>', r'`\1<\2>`', md_text)
    md_text = re.sub(r'(`[^`]+`)\s*<', r'\1 <', md_text)
    
    return md_text

def fix_markdown_tables(md_text):
    """Ensure tables have proper header separator rows"""
    lines = md_text.split('\n')
    result = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if line.strip().startswith('|') and line.count('|') > 2:
            if i + 1 < len(lines) and not lines[i+1].strip().startswith('|'):
                if i + 2 < len(lines) and lines[i+2].strip().startswith('|'):
                    cols = line.count('|') - 1
                    separator = '|' + '|'.join(['---'] * cols) + '|'
                    result.append(line)
                    result.append(separator)
                    i += 1
                    continue
        result.append(line)
        i += 1
    return '\n'.join(result)

def write_mdx(filepath, title, md_content, original_url, updated_date):
    """Write the markdown file with frontmatter"""
    # Read existing frontmatter to preserve sidebar position etc.
    existing = open(filepath, 'r', errors='replace').read()
    existing_lines = existing.split('\n')
    
    # Build new frontmatter
    frontmatter = f"""---
title: "{title}"
original_url: {original_url}
---
"""
    
    # Remove any H1 from body
    content = md_content.strip()
    content = re.sub(r'^#\s+.*?\n', '', content, count=1)
    
    full_content = frontmatter + content + '\n'
    
    with open(filepath, 'w') as f:
        f.write(full_content)

def process_page(file_info):
    """Process a single page: fetch -> convert -> save"""
    doc_id = file_info['doc_id']
    rel_path = file_info['rel_path']
    fpath = file_info['path']
    url = file_info['url']
    
    print(f"\n{'='*60}")
    print(f"Processing: {rel_path}")
    print(f"{'='*60}")
    
    html, title, updated = fetch_html(doc_id)
    if html is None:
        print(f"  [FAIL] {title}")
        return False
    
    print(f"  Title: {title}")
    print(f"  HTML size: {len(html)} bytes")
    
    md_text = html_to_markdown(html)
    if not md_text.strip():
        print(f"  [FAIL] Empty conversion result")
        return False
    print(f"  MD size: {len(md_text)} chars")
    
    md_text = process_markdown(md_text, doc_id, title)
    
    write_mdx(fpath, title, md_text, url, updated)
    print(f"  [OK] Saved: {rel_path}")
    
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
    resume = '--resume' in sys.argv
    
    placeholder_files = scan_placeholder_files()
    print(f"Total files with original_url: {len(placeholder_files)}")
    
    placeholders = [f for f in placeholder_files if f['is_placeholder']]
    print(f"Placeholders (needing content): {len(placeholders)}")
    
    progress = load_progress() if resume else {'completed': [], 'failed': []}
    
    to_process = [f for f in placeholders 
                  if f['doc_id'] not in progress['completed'] 
                  and f['doc_id'] not in progress['failed']]
    
    if resume:
        print(f"Resuming: {len(to_process)} remaining "
              f"(completed: {len(progress['completed'])}, "
              f"failed: {len(progress['failed'])})")
    else:
        print(f"Will process: {len(to_process)} pages")
    
    if not to_process:
        print("Nothing to process!")
        return
    
    success = 0
    fail = 0
    
    for i, f_info in enumerate(to_process):
        print(f"\n[{i+1}/{len(to_process)}] ", end='')
        ok = process_page(f_info)
        
        if ok:
            progress['completed'].append(f_info['doc_id'])
            success += 1
        else:
            progress['failed'].append(f_info['doc_id'])
            fail += 1
        
        save_progress(progress)
        time.sleep(0.5)
    
    print(f"\n{'='*60}")
    print(f"Done! Success: {success}, Failed: {fail}")
    print(f"Total completed: {len(progress['completed'])}")

if __name__ == '__main__':
    main()
