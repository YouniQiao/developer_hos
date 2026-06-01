#!/usr/bin/env python3
"""
批量填充内容分发(content-dist)内容
- 5个板块：主题中心、音频能力平台、教育中心、华为视频百花号、小艺输入法设计师平台
- 从华为 API 获取 HTML，markitdown 转换
- 图片本地化到同级 img/ 目录
- 合并表格 → MergeTable 组件
- MDX 清理（角括号、花括号、裸URL、粗体、###空格）
- 保留原有 frontmatter，追加 original_url
"""
import os, re, sys, json, html as html_mod, hashlib, subprocess, time
from pathlib import Path
from urllib.parse import urlparse
from bs4 import BeautifulSoup
import urllib.request

# ========== CONFIG ==========
PROJECT = Path("/Users/hhxi/developer_hos")
DOCS = PROJECT / "docs" / "distribute" / "content-dist"
MARKITDOWN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"
API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/consumer/cn/doc/content/",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
}
CATALOG = "content"
SECTIONS = ["theme-center", "audio-platform", "education-center", "huawei-video-baihua", "xiaoyi-ime-designer"]

# Files that start with 'x' prefix locally (numeric filenames)
X_PREFIX_FILES = {
    '466-capability-0000001881726154', '454-capability-0000001580733885',
    '280-capability-0000001592176765', '194-capability-0000001591976781',
    '408-capability-0000001933842793', '286-capability-0000002507669002',
}

# ========== IMAGE CACHE ==========
image_cache = {}  # url_path -> local_rel_path

def download_image(img_url, doc_dir):
    """Download image to doc_dir/img/, return local relative path."""
    try:
        parsed = urlparse(img_url)
        url_path = parsed.path
        if url_path in image_cache:
            return image_cache[url_path]
        
        ext = os.path.splitext(url_path)[1]
        if not ext or len(ext) > 6:
            ext = '.png'
        h = hashlib.md5(url_path.encode()).hexdigest()[:12]
        local_name = f"{h}{ext}"
        
        img_dir = doc_dir / "img"
        img_dir.mkdir(parents=True, exist_ok=True)
        local_path = img_dir / local_name
        
        for attempt in range(3):
            try:
                req = urllib.request.Request(img_url, headers={"User-Agent": "Mozilla/5.0"})
                data = urllib.request.urlopen(req, timeout=15).read()
                if len(data) > 200:
                    local_path.write_bytes(data)
                    rel = f"./img/{local_name}"
                    image_cache[url_path] = rel
                    return rel
            except Exception as e:
                if attempt == 2:
                    print(f"    ⚠️ Image failed: {img_url[:80]} ({e})")
                    return None
                time.sleep(1)
        return None
    except Exception as e:
        print(f"    ⚠️ Image error: {e}")
        return None


def localize_images(html_str, doc_dir):
    """Download all images in HTML, replace src with local paths."""
    soup = BeautifulSoup(html_str, 'html.parser')
    found = 0
    for img in soup.find_all('img'):
        src = html_mod.unescape(img.get('src', ''))
        if not src or src.startswith('data:'):
            continue
        local = download_image(src, doc_dir)
        if local:
            img['src'] = local
            found += 1
    if found > 0:
        print(f"    📷 Downloaded {found} images")
    return str(soup)


def find_merged_tables(html_str):
    """Check if HTML contains tables with rowspan/colspan."""
    soup = BeautifulSoup(html_str, 'html.parser')
    for table in soup.find_all('table'):
        if table.find(attrs={'rowspan': True}) or table.find(attrs={'colspan': True}):
            return True
    return False


def convert_merge_table(html_str):
    """Convert HTML table with rowspan/colspan to MergeTable JSX.
    Returns list of (table_html, jsx_code) pairs."""
    soup = BeautifulSoup(html_str, 'html.parser')
    result_parts = []
    
    for table in soup.find_all('table'):
        has_merge = table.find(attrs={'rowspan': True}) or table.find(attrs={'colspan': True})
        if not has_merge:
            continue
        
        trs = table.find_all('tr')
        if not trs:
            continue
        
        # Determine max columns
        max_cols = 0
        for tr in trs:
            col_count = sum(int(td.get('colspan', 1)) for td in tr.find_all(['td', 'th']))
            max_cols = max(max_cols, col_count)
        
        # Track active rowspans: dict of (future_row, col) -> True
        rowspan_tracker = {}
        rows_data = []
        
        for ri, tr in enumerate(trs):
            row = [None] * max_cols
            ci = 0
            for cell in tr.find_all(['td', 'th']):
                while ci < max_cols and rowspan_tracker.get((ri, ci)):
                    ci += 1
                if ci >= max_cols:
                    break
                
                colspan = int(cell.get('colspan', 1))
                rowspan = int(cell.get('rowspan', 1))
                text = cell.get_text(' ', strip=True)
                text = re.sub(r'\s+', ' ', text).strip()
                # Escape single quotes and backslashes for JSX
                text = text.replace('\\', '\\\\').replace("'", "\\'")
                
                if rowspan > 1 or colspan > 1:
                    row[ci] = {'text': text, 'rowspan': rowspan, 'colspan': colspan}
                else:
                    row[ci] = text
                
                if rowspan > 1:
                    for future_ri in range(ri + 1, ri + rowspan):
                        for c in range(ci, ci + colspan):
                            rowspan_tracker[(future_ri, c)] = True
                
                ci += colspan
            
            rows_data.append(row)
        
        # Headers (first row), data rows (rest)
        headers = [c if isinstance(c, str) else (c['text'] if c else '') for c in rows_data[0]]
        data_rows = rows_data[1:] if len(rows_data) > 1 else []
        
        # Build JSX
        jsx_lines = ["<MergeTable"]
        jsx_lines.append(f'  headers={{{repr(headers)}}}')
        
        rows_js = []
        for row in data_rows:
            row_items = []
            for cell in row:
                if cell is None:
                    row_items.append("null")
                elif isinstance(cell, dict):
                    row_items.append(f"{{ text: '{cell['text']}', rowspan: {cell['rowspan']}, colspan: {cell['colspan']} }}")
                else:
                    row_items.append(repr(cell))
            rows_js.append(f"    [{', '.join(row_items)}]")
        
        rows_str = ",\n".join(rows_js)
        jsx_lines.append(f'  rows={{\n{rows_str}\n  }}')
        jsx_lines.append("/>")
        
        jsx = "\n".join(jsx_lines)
        table_html = str(table)
        result_parts.append((table_html, jsx))
    
    return result_parts


def mdx_cleanup(md_text):
    """Fix common MDX issues: ###xxx -> ### xxx, **text** -> <strong>text</strong>."""
    lines = md_text.split('\n')
    new_lines = []
    in_code = False
    
    for line in lines:
        stripped = line.strip()
        
        if stripped.startswith('```'):
            in_code = not in_code
            new_lines.append(line)
            continue
        
        if in_code:
            new_lines.append(line)
            continue
        
        # Fix ###xxx → ### xxx
        line = re.sub(r'^(#{1,6})([^\s#])', r'\1 \2', line)
        
        # Fix **** consecutive bold → merge or separate
        changed = True
        while changed:
            changed = False
            new_line = re.sub(r'\*\*([^*]+)\*\*\*\*([^*]+)\*\*', r'**\1** **\2**', line)
            if new_line != line:
                line = new_line
                changed = True
        
        # Fix **text** → <strong>text</strong>
        if '**' in line and '<strong>' not in line.replace('**', ''):
            changed = True
            while changed:
                changed = False
                new_line = re.sub(r'\*\*([^*\n]+?)\*\*', r'<strong>\1</strong>', line)
                if new_line != line:
                    line = new_line
                    changed = True
        
        new_lines.append(line)
    
    return '\n'.join(new_lines)


def escape_mdx_dangerous(md_text):
    """Escape MDX-dangerous chars: angle brackets, curly braces, bare URLs."""
    lines = md_text.split('\n')
    new_lines = []
    in_code = False
    in_frontmatter = False
    fm_count = 0
    
    for line in lines:
        stripped = line.strip()
        
        if stripped == '---':
            fm_count += 1
            in_frontmatter = (fm_count < 2)
            new_lines.append(line)
            continue
        
        if in_frontmatter:
            new_lines.append(line)
            continue
        
        if stripped.startswith('```'):
            in_code = not in_code
            new_lines.append(line)
            continue
        
        if in_code:
            new_lines.append(line)
            continue
        
        # Protect known HTML/JSX tags
        html_tags = r'</?(?:strong|/strong|br\s*/?|img|a|p|li|ul|ol|h[1-6]|table|/table|tr|/tr|t[dh]|/t[dh]|div|span|code|pre|em|b|i|MergeTable|SourceLink)\b[^>]*/?>'
        preserved = []
        
        def save_html(m):
            preserved.append(m.group(0))
            return f'\x00HTML{len(preserved)-1}\x00'
        
        line = re.sub(html_tags, save_html, line, flags=re.IGNORECASE)
        
        # Escape < > outside backticks
        parts = re.split(r'(`[^`]*`)', line)
        for i in range(0, len(parts), 2):
            if i < len(parts):
                parts[i] = parts[i].replace('<', '&lt;').replace('>', '&gt;')
        line = ''.join(parts)
        
        # Restore preserved tags
        for i, tag in enumerate(preserved):
            line = line.replace(f'\x00HTML{i}\x00', tag)
        
        # Fix bare URLs followed by Chinese punctuation
        line = re.sub(
            r'(?<!`)(https?://[^\s)`<>]+)([。，；、！？）\)」』】])',
            r'`\1`\2',
            line
        )
        
        new_lines.append(line)
    
    return '\n'.join(new_lines)


def process_doc(object_id, doc_dir):
    """Fetch, convert, and return processed markdown + title."""
    try:
        body = json.dumps({
            "objectId": object_id,
            "version": "",
            "catalogName": CATALOG,
            "language": "cn"
        }).encode('utf-8')
        
        req = urllib.request.Request(API_URL, data=body, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=15)
        data = json.loads(resp.read())
        
        content = data.get("value", {}).get("content", {})
        if not content or not content.get("content"):
            return None
        
        title = data["value"].get("title", "")
        html_content = content["content"]
        
        # Check for merged tables
        has_merged = find_merged_tables(html_content)
        
        # Download and localize images
        html_processed = localize_images(html_content, doc_dir)
        
        # Convert merged tables to markers
        merge_table_replacements = []
        if has_merged:
            merge_table_replacements = convert_merge_table(html_processed)
        
        # Write HTML to temp file for markitdown
        tmp_html = Path(f"/tmp/hos_content_{object_id}.html")
        tmp_html.write_text(html_processed, encoding='utf-8')
        
        # Convert with markitdown
        tmp_md = tmp_html.with_suffix('.md')
        result = subprocess.run(
            [MARKITDOWN, str(tmp_html), "-o", str(tmp_md)],
            capture_output=True, text=True, timeout=30
        )
        
        if not tmp_md.exists():
            tmp_html.unlink(missing_ok=True)
            return None
        
        md_text = tmp_md.read_text(encoding='utf-8')
        
        # Clean up temp files
        tmp_html.unlink(missing_ok=True)
        tmp_md.unlink(missing_ok=True)
        
        if not md_text.strip():
            return None
        
        # Detect mojibake (UTF-8 double encoding)
        has_mojibake = any(ord(c) > 0x400 and ord(c) < 0x500 for c in md_text[:2000])
        if has_mojibake:
            print(f"    ⚠️ Mojibake detected, using manual extraction instead")
            md_text = manual_html_to_md(html_content, title)
        
        # Post-process headings
        # markitdown outputs H1 from <h1>, but Huawei docs use <h4> as sections
        md_lines = md_text.split('\n')
        fixed_lines = []
        for line in md_lines:
            m = re.match(r'^####\s+\[h2\](.*)$', line)
            if m:
                fixed_lines.append(f'###{m.group(1)}')
                continue
            m = re.match(r'^####\s+(.*)$', line)
            if m:
                fixed_lines.append(f'## {m.group(1)}')
                continue
            fixed_lines.append(line)
        md_text = '\n'.join(fixed_lines)
        
        # MDX cleanup
        md_text = mdx_cleanup(md_text)
        md_text = escape_mdx_dangerous(md_text)
        
        # Handle merge tables
        if merge_table_replacements:
            for orig_html, jsx in merge_table_replacements:
                soup = BeautifulSoup(orig_html, 'html.parser')
                first_cell = ""
                trs = soup.find_all('tr')
                if trs:
                    tds = trs[0].find_all(['td', 'th'])
                    if tds:
                        first_cell = tds[0].get_text(strip=True)[:40]
                
                if first_cell:
                    # Escape for regex
                    first_esc = re.escape(first_cell)
                    md_text_old = md_text
                    md_text = re.sub(
                        rf'(\|[^\n]*{first_esc}[^\n]*\n(?:\|[^\n]*\n)+)',
                        f'\n\nimport MergeTable from \'@site/src/components/MergeTable\';\n\n{jsx}\n\n',
                        md_text,
                        count=1
                    )
        
        return {"title": title, "md": md_text, "object_id": object_id}
    
    except Exception as e:
        print(f"    ❌ Error: {e}")
        return None


def manual_html_to_md(html_str, title):
    """Fallback: manual HTML-to-MD extraction for simple documents."""
    soup = BeautifulSoup(html_str, 'html.parser')
    lines = [f"# {title}", ""]
    
    # Try to find main content area
    body = soup.find('body') or soup
    for child in body.find_all(['h3', 'h4', 'p', 'table', 'ul', 'ol'], recursive=True):
        if child.name in ('h3', 'h4'):
            text = child.get_text(strip=True)
            lines.append(f"## {text}")
            lines.append("")
        elif child.name == 'p':
            text = child.get_text(strip=True)
            if text:
                lines.append(text)
                lines.append("")
        elif child.name == 'table':
            lines.append(html_table_to_md(str(child)))
            lines.append("")
        elif child.name in ('ul', 'ol'):
            for li in child.find_all('li', recursive=False):
                text = li.get_text(strip=True)
                marker = '- ' if child.name == 'ul' else '1. '
                lines.append(f"{marker}{text}")
            lines.append("")
    
    return '\n'.join(lines)


def html_table_to_md(table_html):
    """Convert simple HTML table to markdown."""
    soup = BeautifulSoup(table_html, 'html.parser')
    trs = soup.find_all('tr')
    if not trs:
        return ''
    
    # Determine max columns from all rows
    max_cols = 0
    for tr in trs:
        n = len(tr.find_all(['td', 'th']))
        max_cols = max(max_cols, n)
    
    if max_cols < 2:
        return ''
    
    lines = []
    for i, tr in enumerate(trs):
        cells = tr.find_all(['td', 'th'])
        row = []
        for cell in cells:
            text = cell.get_text(strip=True)
            text = re.sub(r'\s+', ' ', text)
            row.append(text)
        # Pad if needed
        while len(row) < max_cols:
            row.append('')
        lines.append('| ' + ' | '.join(row) + ' |')
        if i == 0:
            lines.append('| ' + ' | '.join(['---'] * max_cols) + ' |')
    
    return '\n'.join(lines)


def get_empty_files():
    """Find all .md files in content-dist that need content (< 200 bytes = stubs)."""
    empty = []
    for section in SECTIONS:
        base = DOCS / section
        if not base.exists():
            continue
        for md_file in sorted(base.rglob("*.md")):
            try:
                stat = md_file.stat()
                if stat.st_size < 200:
                    empty.append(md_file)
            except:
                pass
    return empty


def extract_frontmatter(content):
    """Separate frontmatter from body."""
    parts = content.split('---', 2)
    if len(parts) >= 3:
        return '---' + parts[1] + '---', parts[2]
    return '', content


def get_object_id_from_filepath(filepath, docs_base):
    """Extract relateDocument from file path."""
    rel = filepath.relative_to(docs_base)
    name = rel.stem
    # Handle 'x' prefix files
    if name in X_PREFIX_FILES or name.startswith('x') and name[1:] in X_PREFIX_FILES:
        return name[1:] if name.startswith('x') else name
    return name


def main():
    empty_files = get_empty_files()
    print(f"Found {len(empty_files)} stub files to fill\n")
    
    if not empty_files:
        print("No files to fill!")
        return
    
    # Process in batches
    total = len(empty_files)
    success = 0
    skipped = 0
    failed = 0
    
    for i, md_path in enumerate(empty_files):
        # Get object_id from filename
        section = md_path.relative_to(DOCS).parts[0]
        object_id = get_object_id_from_filepath(md_path, DOCS)
        doc_dir = md_path.parent
        
        print(f"[{i+1}/{total}] {section}/{object_id[:50]}...", end=' ', flush=True)
        
        # Read existing frontmatter
        content = md_path.read_text(encoding='utf-8')
        fm, _ = extract_frontmatter(content)
        
        # Process document
        result = process_doc(object_id, doc_dir)
        
        if result is None:
            print(f"⏭️ skipped (no content)", flush=True)
            skipped += 1
            continue
        
        # Build final content
        # Add original_url to frontmatter
        original_url = f"https://developer.huawei.com/consumer/cn/doc/content/{object_id}"
        if 'original_url:' not in fm:
            fm_lines = fm.split('\n')
            # Insert before closing ---
            insert_at = -1
            for j, l in enumerate(fm_lines):
                if l.strip() == '---' and j > 0:
                    insert_at = j
                    break
            if insert_at > 0:
                fm_lines.insert(insert_at, f'original_url: {original_url}')
            fm = '\n'.join(fm_lines)
        
        body = result['md']
        # Remove the H1 title from markitdown output (we use frontmatter title instead)
        # But keep it if the body starts with it
        title_line = f"# {result['title']}"
        body_first_line = body.split('\n')[0].strip()
        if body_first_line.startswith(f"# {result.get('title', '')}"):
            # Keep the H1, just ensure it's there
            pass
        elif not body.strip().startswith('#'):
            body = f"# {result['title']}\n\n{body}"
        
        final_content = f"{fm}\n\n{body}"
        
        # Write back
        md_path.write_text(final_content, encoding='utf-8')
        
        size = len(final_content)
        print(f"✅ ({size:,} bytes)", flush=True)
        success += 1
        
        # Small delay between requests
        time.sleep(0.3)
    
    print(f"\n{'='*50}")
    print(f"Done! Success: {success}, Skipped: {skipped}, Failed: {failed}")
    print(f"Total: {total}")


if __name__ == '__main__':
    main()
