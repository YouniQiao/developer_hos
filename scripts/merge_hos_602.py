#!/usr/bin/env python3
"""Convert Huawei 6.0.2(22) release docs → harmonyos-602.md + tool pages."""
import json, re, os, sys, subprocess, urllib.request, urllib.parse
from pathlib import Path
from bs4 import BeautifulSoup
from markitdown import MarkItDown

API = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById'
HEADERS = {'Content-Type': 'application/json', 'Referer': 'https://developer.huawei.com/consumer/cn/doc/'}

# --- Utilities ---

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
                        if target_row >= len(rows): break
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
        if not src.startswith('http'): continue
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

def clean_md(text):
    lines = text.split('\n')
    result = []
    for line in lines:
        line = re.sub(r'\[h2\]\s*', '', line)
        line = re.sub(r'\[h3\]\s*', '', line)
        if re.match(r'^#{1,6}\s*$', line): continue
        result.append(line)
    return '\n'.join(result)

def remove_first_h1(text):
    lines = text.split('\n')
    out, skipped = [], False
    for i, line in enumerate(lines):
        if not skipped and line.startswith('# '):
            skipped = True; continue
        if skipped and i == 1 and not line.strip(): continue
        out.append(line)
    return '\n'.join(out)

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
                    if '](http' in s or s.startswith('['): new_cells.append(cell)
                    elif s.startswith('`') and s.endswith('`'): new_cells.append(cell)
                    else: new_cells.append(f' `{s}` ')
                else: new_cells.append(cell)
            fixed.append('|'.join(new_cells))
        else: fixed.append(line)
    return '\n'.join(fixed)

def is_code_line(line):
    stripped = line.strip()
    if stripped.startswith('#'):
        if re.match(r'^#{2,}\s', stripped): return False
        after_hash = stripped[1:]
        if after_hash and not after_hash[0].isspace(): return True
    return False

def smart_promote_headings(md_text, has_h2_set, no_h2_set):
    """Version headings (no [h2]) → ##, sub-headings ([h2]) → ###"""
    lines = md_text.split('\n')
    result = []
    for line in lines:
        if line.startswith('#') and not is_code_line(line):
            depth = len(line) - len(line.lstrip('#'))
            heading = line.lstrip('#').strip()
            if heading in no_h2_set and depth != 2:
                result.append(f'## {heading}')
                continue
            if heading in has_h2_set and depth != 3:
                result.append(f'### {heading}')
                continue
        result.append(line)
    return '\n'.join(result)

def fetch_html(rd):
    body = json.dumps({'objectId': rd, 'version': '', 'catalogName': 'harmonyos-releases', 'language': 'cn'})
    r = subprocess.run(['curl', '-s', API, '-H', f'Content-Type: application/json', '-H', f'Referer: {HEADERS["Referer"]}', '-d', body], capture_output=True, text=True, timeout=30)
    data = json.loads(r.stdout)
    return data['value']['content']['content']

def html_to_clean_md(html, img_dir):
    html = download_images(html, img_dir)
    html = explode_rowspan(html)
    tmpfile = Path('/tmp/_602_clean.html')
    tmpfile.write_text(html, encoding='utf-8')
    result = MarkItDown().convert(str(tmpfile))
    md_text = result.text_content if hasattr(result, 'text_content') else str(result)
    md_text = clean_md(md_text)
    md_text = remove_first_h1(md_text)
    return escape_mdx(md_text)

# --- Build heading marker sets ---

def build_marker_sets(doc_ids):
    has_h2 = set()
    no_h2 = set()
    for rd in doc_ids:
        html = fetch_html(rd)
        soup = BeautifulSoup(html, 'html.parser')
        for tag in soup.find_all(['h4', 'h5']):
            text = tag.get_text(strip=True)
            clean = re.sub(r'\[h[234]\]\s*', '', text)
            if '[h2]' in text: has_h2.add(clean)
            elif clean: no_h2.add(clean)
    # Remove H1 titles
    for x in ['版本概览', 'OS新增和增强特性', 'OS平台能力', '总览', '针对所有应用的变更']:
        no_h2.discard(x)
    return has_h2, no_h2


# ============ MAIN ============

if __name__ == '__main__':
    project = Path(__file__).parent.parent
    img_dir = str(project / 'docs/dev/release-notes/img')
    
    # --- Build merged page ---
    merge_docs = [
        ('overview-602', '版本概览'),
        ('os-new-feature-602', 'OS新增和增强特性'),
    ]
    
    has_h2, no_h2 = build_marker_sets([rd for rd, _ in merge_docs])
    print(f'No marker → ## ({len(no_h2)}), [h2] → ### ({len(has_h2)})')
    
    parts = [
        '---', 'title: "HarmonyOS 6.0.2(22)"', '---', '',
        '# HarmonyOS 6.0.2(22)', '',
    ]
    
    for rd, label in merge_docs:
        print(f'\n--- {rd} ({label}) ---')
        html = fetch_html(rd)
        print(f'  HTML: {len(html)} chars')
        md_text = html_to_clean_md(html, img_dir)
        md_text = smart_promote_headings(md_text, has_h2, no_h2)
        print(f'  MD: {len(md_text)} chars')
        parts.append(f'## {label}')
        parts.append('')
        parts.append(md_text.strip())
        parts.append('')
    
    harmonyos = '\n'.join(parts)
    # Clean triple+ newlines
    harmonyos = re.sub(r'\n{3,}', '\n\n', harmonyos)
    
    out_path = str(project / 'docs/dev/release-notes/harmonyos-602.md')
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(harmonyos)
    print(f'\nharmonyos-602.md: {len(harmonyos)} chars, {harmonyos.count(chr(10))} lines')
    
    # --- Build DevEco Studio page ---
    print('\n--- deveco-studio-new-features-602 ---')
    html = fetch_html('deveco-studio-new-features-602')
    img_dir_ds = str(project / 'docs/tools/coding-debug/release-notes/img')
    md = html_to_clean_md(html, img_dir_ds)
    # DevEco Studio headings: version headings have no marker → they're major
    # The structure is flat: version + 兼容性 + 新增和增强特性, all at same level
    # Use smart promote based on marker analysis
    has_h2_ds, no_h2_ds = build_marker_sets(['deveco-studio-new-features-602'])
    # For standalone pages, promote no-marker headings 2 levels, [h2] headings 1 level
    # Actually, these headings have NO [h2] markers at all - all are no-marker
    # So promote by 2 levels (#### → ##)
    lines = md.split('\n')
    out = []
    for line in lines:
        if line.startswith('#'):
            depth = len(line) - len(line.lstrip('#'))
            heading = line.lstrip('#').strip()
            if heading in no_h2_ds:
                out.append('## ' + heading)
            else:
                out.append('### ' + heading)
        else:
            out.append(line)
    md = '\n'.join(out)
    
    ds = f'---\ntitle: "HarmonyOS 6.0.2(22)"\n---\n\n# DevEco Studio 新增和增强特性\n\n{md.strip()}'
    ds_path = str(project / 'docs/tools/coding-debug/release-notes/deveco-studio-602.md')
    with open(ds_path, 'w', encoding='utf-8') as f:
        f.write(ds)
    print(f'deveco-studio-602.md: {len(ds)} chars, {ds.count(chr(10))} lines')
    
    # --- Build DevEco Testing page ---
    print('\n--- deveco-testing-releasenotes-602 ---')
    html = fetch_html('deveco-testing-releasenotes-602')
    img_dir_dt = str(project / 'docs/tools/deveco-testing/release-notes/img')
    md = html_to_clean_md(html, img_dir_dt)
    # Promote headings by 2 levels for standalone
    lines = md.split('\n')
    out = []
    for line in lines:
        if line.startswith('#'):
            depth = len(line) - len(line.lstrip('#'))
            new_depth = max(1, depth - 2)
            out.append('#' * new_depth + line.lstrip('#'))
        else:
            out.append(line)
    md = '\n'.join(out)
    
    dt = f'---\ntitle: "HarmonyOS 6.0.2(22)"\n---\n\n# DevEco Testing 新增和增强特性\n\n{md.strip()}'
    dt_path = str(project / 'docs/tools/deveco-testing/release-notes/deveco-testing-602.md')
    with open(dt_path, 'w', encoding='utf-8') as f:
        f.write(dt)
    print(f'deveco-testing-602.md: {len(dt)} chars, {dt.count(chr(10))} lines')
    
    print('\nDone!')
