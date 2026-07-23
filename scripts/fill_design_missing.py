#!/usr/bin/env python3
"""Fetch missing design pages from Huawei API and convert to MD."""
import json, re, os, subprocess, urllib.request, urllib.parse
from pathlib import Path
from bs4 import BeautifulSoup
from markitdown import MarkItDown

API = 'https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById'
HEADERS = {'Content-Type': 'application/json', 'Referer': 'https://developer.huawei.com/consumer/cn/doc/design-guides/'}
REPO = Path('/Users/hhxi/developer_hos')
DOCS_DIR = REPO / 'docs/design'

# Map: relateDocument → (local_relative_path, page_title)
PAGES = [
    # 视觉风格
    ('typography-0000002622688363', 'general-design-basics/visual-design/typography.md', '文本排版'),
    ('immersivelight-0000002612101053', 'general-design-basics/visual-design/immersivelight.md', '沉浸光感'),
    ('corner-radius-parameter-0000002556468705', 'general-design-basics/visual-design/corner-radius-parameter.md', '圆角参数'),
    ('interval-parameter-0000002562577161', 'general-design-basics/visual-design/interval-parameter.md', '间隔参数'),
    # 选择类
    ('color-picker-0000002574393143', 'components/selection-components/color-picker.md', '色彩选择器'),
    # 系统特性
    ('floatview-0000002624640357', 'system-features/features/floatview.md', '闪控球和闪控窗'),
    ('shortcat-0000002550987962', 'system-features/features/shortcat.md', '桌面快捷方式'),
    # 系统能力
    ('parallel_view-0000002588655180', 'system-features/capabilities/parallel_view.md', '平行视界'),
    # 智能座舱
    ('smart-cockpit-overview-0000002592486432', 'multi-device-design/smart-cockpit-overview.md', '智能座舱 — 概述'),
    ('smart-cockpit-basic-experience-0000002592646356', 'multi-device-design/smart-cockpit-basic-experience.md', '智能座舱 — 基础体验要求'),
    ('smart-cockpit-ux-basic-0000002622965869', 'multi-device-design/smart-cockpit-ux-basic.md', '智能座舱 — 设计基础'),
    ('smart-cockpit-system-architecture-0000002623086005', 'multi-device-design/smart-cockpit-system-architecture.md', '智能座舱 — 系统架构'),
    ('smart-cockpit-application-architecture-0000002592486434', 'multi-device-design/smart-cockpit-application-architecture.md', '智能座舱 — 应用架构'),
    ('smart-cockpit-hicar-0000002592646358', 'multi-device-design/smart-cockpit-hicar.md', '智能座舱 — HUAWEI HiCar'),
]


def fetch_html(rd):
    body = json.dumps({
        'objectId': rd, 'version': '',
        'catalogName': 'design-guides', 'language': 'cn',
    })
    result = subprocess.run(
        ['curl', '-s', API, '-H', f'Content-Type: application/json',
         '-H', f'Referer: {HEADERS["Referer"]}', '-d', body],
        capture_output=True, text=True, timeout=30,
    )
    data = json.loads(result.stdout)
    return data['value']['content']['content']


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
        if '?' in fname:
            fname = fname.split('?')[0]
        if not fname or '.' not in fname:
            continue
        local_path = os.path.join(save_dir, fname)
        if not os.path.exists(local_path):
            try:
                req = urllib.request.Request(src, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req, timeout=30) as resp:
                    with open(local_path, 'wb') as f:
                        f.write(resp.read())
            except Exception as e:
                print(f'    ✗ Download {fname}: {e}')
        img['src'] = f'./img/{fname}'
    return str(soup)


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


def clean_md(text):
    lines = text.split('\n')
    result = []
    for line in lines:
        line = re.sub(r'\[h2\]\s*', '', line)
        line = re.sub(r'\[h3\]\s*', '', line)
        if re.match(r'^#{1,6}\s*$', line):
            continue
        result.append(line)
    return '\n'.join(result)


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


def promote_headings_smart(md_text):
    code_pattern = re.compile(r'^#[^#\s]')
    lines = md_text.split('\n')
    result = []
    for line in lines:
        if line.startswith('#'):
            if code_pattern.match(line.lstrip()):
                result.append(line)
                continue
            depth = len(line) - len(line.lstrip('#'))
            new_depth = max(1, depth - 1)
            result.append('#' * new_depth + line.lstrip('#'))
        else:
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


def convert_one(rd, rel_path, title_h1):
    out_path = DOCS_DIR / rel_path
    img_dir = out_path.parent / 'img'

    print(f'\n─ {rd} → {rel_path}')

    html = fetch_html(rd)
    print(f'  HTML: {len(html)} chars')

    html = download_images(html, str(img_dir))
    html = explode_rowspan(html)

    tmpfile = Path(f'/tmp/{rd}_clean.html')
    tmpfile.write_text(html, encoding='utf-8')
    result = MarkItDown().convert(str(tmpfile))
    md_text = result.text_content if hasattr(result, 'text_content') else str(result)
    print(f'  MD raw: {len(md_text)} chars')

    md_text = clean_md(md_text)
    md_text = remove_first_h1(md_text)
    md_text = promote_headings_smart(md_text)
    md_text = escape_mdx(md_text)

    final = f'---\ntitle: "{title_h1}"\n---\n\n# {title_h1}\n\n{md_text.strip()}'

    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(final)
    print(f'  ✓ Written: {len(final)} chars, {final.count(chr(10))} lines')


if __name__ == '__main__':
    for rd, rel_path, title in PAGES:
        try:
            convert_one(rd, rel_path, title)
        except Exception as e:
            print(f'  ✗ FAILED: {e}')
    print('\n=== Done! ===')
