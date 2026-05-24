#!/usr/bin/env python3
"""Convert Huawei 6.1.0(23) release docs → harmonyos-610.md (merged page)."""
import json, re, os, sys, urllib.request, urllib.parse, subprocess
from pathlib import Path
from bs4 import BeautifulSoup
from markitdown import MarkItDown

API = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById'
HEADERS = {'Content-Type': 'application/json', 'Referer': 'https://developer.huawei.com/consumer/cn/doc/'}

# --- Same utilities as convert_hos_release.py (copied inline) ---

def explode_rowspan(html_str):
    soup = BeautifulSoup(html_str, 'html.parser')
    for table in soup.find_all('table'):
        rows = table.find_all('tr')
        insertions = {}
        for r, row in enumerate(rows):
            cells = row.find_all(['td', 'th'])
            for c, cell in enumerate(cells):
                rs = int(cell.get('rowspan', 1))
                cell.attrs.pop('rowspan', None)
                if rs > 1:
                    for dr in range(1, rs):
                        target_row = r + dr
                        if target_row >= len(rows):
                            break
                        if target_row not in insertions:
                            insertions[target_row] = []
                        insertions[target_row].append((c, cell.name, cell.decode_contents()))
        for r in sorted(insertions.keys()):
            row = rows[r]
            for col_idx, tag_name, cell_html in sorted(insertions[r], key=lambda x: -x[0]):
                new_cell = soup.new_tag(tag_name)
                new_cell.append(BeautifulSoup(cell_html, 'html.parser'))
                existing_cells = row.find_all(['td', 'th'])
                if col_idx >= len(existing_cells):
                    row.append(new_cell)
                else:
                    existing_cells[col_idx].insert_before(new_cell)
    return str(soup)

def download_images(html_str, save_dir):
    soup = BeautifulSoup(html_str, 'html.parser')
    imgs = soup.find_all('img')
    os.makedirs(save_dir, exist_ok=True)
    for img in imgs:
        src = img.get('src', '')
        if not src.startswith('http'):
            continue
        parsed = urllib.parse.urlparse(src)
        fname = os.path.basename(parsed.path)
        local_path = os.path.join(save_dir, fname)
        if not os.path.exists(local_path):
            try:
                req = urllib.request.Request(src, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=30) as resp:
                    with open(local_path, 'wb') as f:
                        f.write(resp.read())
            except Exception as e:
                print(f'  ✗ Download {fname}: {e}')
        img['src'] = f'./img/{fname}'
    return str(soup)

def promote_headings(md_text, levels=1):
    lines = md_text.split('\n')
    result = []
    for line in lines:
        if line.startswith('#'):
            depth = len(line) - len(line.lstrip('#'))
            new_depth = max(1, depth - levels)
            result.append('#' * new_depth + line.lstrip('#'))
        else:
            result.append(line)
    return '\n'.join(result)

def clean_md(text):
    lines = text.split('\n')
    result = []
    for line in lines:
        line = re.sub(r'\[h2\]\s*', '', line)
        line = re.sub(r'\[h3\]\s*', '', line)
        if 'note_3.0-zh-cn.png' in line:
            if result and not result[-1].startswith('> '):
                result.append('> **注意：**')
            continue
        if re.match(r'^#{1,6}\s*$', line):
            continue
        result.append(line)
    return '\n'.join(result)

def escape_mdx(text):
    lines = text.split('\n')
    fixed = []
    for line in lines:
        if line.strip().startswith('|') and ('{' in line or '}' in line):
            cells = line.split('|')
            new_cells = []
            for cell in cells:
                s = cell.strip()
                if s and ('{' in s or '}' in s):
                    if '](http' in s or s.startswith('['):
                        new_cells.append(cell)
                    elif s.startswith('`') and s.endswith('`'):
                        new_cells.append(cell)
                    else:
                        new_cells.append(f' `{s}` ')
                else:
                    new_cells.append(cell)
            fixed.append('|'.join(new_cells))
        else:
            fixed.append(line)
    return '\n'.join(fixed)

def remove_first_h1(text):
    lines = text.split('\n')
    out, skipped = [], False
    for i, line in enumerate(lines):
        if not skipped and line.startswith('# '):
            skipped = True
            continue
        if skipped and i == 1 and not line.strip():
            continue
        out.append(line)
    return '\n'.join(out)

def fetch_html(rd):
    body = json.dumps({'objectId': rd, 'version': '', 'catalogName': 'harmonyos-releases', 'language': 'cn'})
    result = subprocess.run(
        ['curl', '-s', API, '-H', f'Content-Type: application/json',
         '-H', f'Referer: {HEADERS["Referer"]}', '-d', body],
        capture_output=True, text=True, timeout=30,
    )
    data = json.loads(result.stdout)
    return data['value']['content']['content']

def html_to_clean_md(html, img_dir, heading_promote=1):
    """Full pipeline for a single doc: images → rowspan → markitdown → clean"""
    html = download_images(html, img_dir)
    html = explode_rowspan(html)
    tmpfile = Path(f'/tmp/merge_clean.html')
    tmpfile.write_text(html, encoding='utf-8')
    result = MarkItDown().convert(str(tmpfile))
    md_text = result.text_content if hasattr(result, 'text_content') else str(result)
    md_text = clean_md(md_text)
    md_text = remove_first_h1(md_text)
    md_text = promote_headings(md_text, levels=heading_promote)
    return escape_mdx(md_text)


# ============ MAIN ============

if __name__ == '__main__':
    project_root = Path(__file__).parent.parent
    img_dir = str(project_root / 'docs/dev/release-notes/img')
    
    merge_docs = [
        ('overview-610', '版本概览'),
        ('os-new-feature-610', 'OS新增和增强特性'),
        ('changelogs-overview-610', '应用行为变更'),
        ('changelogs-for-all-apps-6101', '变更公告'),
    ]
    
    parts = [
        '---',
        'title: "HarmonyOS 6.1.0(23)"',
        '---',
        '',
        '# HarmonyOS 6.1.0(23)',
        '',
    ]
    
    for rd, label in merge_docs:
        print(f'\n--- {rd} ({label}) ---')
        html = fetch_html(rd)
        print(f'  HTML: {len(html)} chars')
        
        md_text = html_to_clean_md(html, img_dir, heading_promote=1)
        print(f'  MD: {len(md_text)} chars')
        
        parts.append(f'## {label}')
        parts.append('')
        parts.append(md_text.strip())
        parts.append('')
    
    harmonyos = '\n'.join(parts)
    out_path = str(project_root / 'docs/dev/release-notes/harmonyos-610.md')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(harmonyos)
    print(f'\nWritten: {len(harmonyos)} chars, {harmonyos.count(chr(10))} lines')
    print('Done!')
