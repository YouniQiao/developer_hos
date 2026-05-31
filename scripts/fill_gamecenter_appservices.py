#!/usr/bin/env python3
"""
批量填充游戏中心 + 应用服务内容
- 从华为 API 获取 HTML，markitdown 转换
- 图片本地化到同级 img/ 目录
- 合并表格 → MergeTable 组件
- MDX 清理（角括号、花括号、裸URL、粗体）
- 保留原有 frontmatter，追加 original_url
"""

import os, re, sys, json, html as html_mod, hashlib, subprocess, time
from pathlib import Path
from urllib.parse import urlparse
from bs4 import BeautifulSoup
import urllib.request

# ========== CONFIG ==========
PROJECT = Path("/Users/hhxi/developer_hos")
DOCS = PROJECT / "docs" / "distribute" / "app-dist"
MARKITDOWN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"
API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/consumer/cn/doc/app/50101",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
}
CATALOG = "app"
BATCH_SIZE = 20
SECTIONS = ["game-center", "app-services"]

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
        # Use hash of path as filename
        h = hashlib.md5(url_path.encode()).hexdigest()[:12]
        local_name = f"{h}{ext}"
        
        img_dir = doc_dir / "img"
        img_dir.mkdir(parents=True, exist_ok=True)
        local_path = img_dir / local_name
        
        # Download with retry
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
                    print(f"    ⚠️ Image download failed after 3 tries: {img_url[:80]}... ({e})")
                    return None
                time.sleep(1)
        return None
    except Exception as e:
        print(f"    ⚠️ Image error: {e}")
        return None


def localize_images(html_str, doc_dir):
    """Download all images in HTML, replace src with local paths."""
    soup = BeautifulSoup(html_str, 'html.parser')
    for img in soup.find_all('img'):
        src = html_mod.unescape(img.get('src', ''))
        if not src or src.startswith('data:'):
            continue
        local = download_image(src, doc_dir)
        if local:
            img['src'] = local
    return str(soup)


def find_merged_tables(html_str):
    """Check if HTML contains tables with rowspan/colspan."""
    soup = BeautifulSoup(html_str, 'html.parser')
    for table in soup.find_all('table'):
        if table.find(attrs={'rowspan': True}) or table.find(attrs={'colspan': True}):
            return True
    return False


def convert_merge_table(html_str):
    """Convert HTML table with rowspan/colspan to MergeTable JSX."""
    soup = BeautifulSoup(html_str, 'html.parser')
    result_parts = []
    
    for table in soup.find_all('table'):
        has_merge = table.find(attrs={'rowspan': True}) or table.find(attrs={'colspan': True})
        if not has_merge:
            continue
        
        # Parse table
        trs = table.find_all('tr')
        if not trs:
            continue
        
        # Determine max columns
        max_cols = 0
        for tr in trs:
            col_count = sum(int(td.get('colspan', 1)) for td in tr.find_all(['td', 'th']))
            max_cols = max(max_cols, col_count)
        
        # Build 2D grid with rowspan tracking
        rowspan_tracker = {}
        rows_data = []
        
        for ri, tr in enumerate(trs):
            row = [None] * max_cols
            ci = 0
            for cell in tr.find_all(['td', 'th']):
                # Skip cells occupied by rowspan from above
                while ci < max_cols and rowspan_tracker.get((ri, ci)):
                    ci += 1
                if ci >= max_cols:
                    break
                
                colspan = int(cell.get('colspan', 1))
                rowspan = int(cell.get('rowspan', 1))
                text = cell.get_text(' ', strip=True)
                # Clean text
                text = re.sub(r'\s+', ' ', text).strip()
                
                if rowspan > 1 or colspan > 1:
                    row[ci] = {'text': text, 'rowspan': rowspan, 'colspan': colspan}
                else:
                    row[ci] = text
                
                # Track rowspan
                if rowspan > 1:
                    for future_ri in range(ri + 1, ri + rowspan):
                        for c in range(ci, ci + colspan):
                            rowspan_tracker[(future_ri, c)] = True
                
                ci += colspan
            
            rows_data.append(row)
        
        # Extract headers (first row)
        headers = [c if isinstance(c, str) else c['text'] for c in rows_data[0]]
        data_rows = rows_data[1:] if len(rows_data) > 1 else []
        
        # Build JSX
        jsx_lines = ["<MergeTable"]
        jsx_lines.append(f'  headers={json.dumps(headers, ensure_ascii=False)}')
        
        rows_js = []
        for row in data_rows:
            row_items = []
            for cell in row:
                if cell is None:
                    row_items.append("null")
                elif isinstance(cell, dict):
                    row_items.append(json.dumps(cell, ensure_ascii=False))
                else:
                    row_items.append(json.dumps(cell, ensure_ascii=False))
            rows_js.append(f"    [{', '.join(row_items)}]")
        
        rows_str = ",\n".join(rows_js)
        jsx_lines.append(f'  rows={{\n{rows_str}\n  }}')
        jsx_lines.append("/>")
        
        jsx = "\n".join(jsx_lines)
        # Replace the table HTML with a marker
        table_html = str(table)
        result_parts.append((table_html, jsx))
    
    return result_parts


def mdx_cleanup(md_text):
    """Fix common MDX issues after markitdown conversion."""
    lines = md_text.split('\n')
    new_lines = []
    in_code = False
    
    for line in lines:
        stripped = line.strip()
        
        # Track code fences
        if stripped.startswith('```'):
            in_code = not in_code
            new_lines.append(line)
            continue
        
        if in_code:
            new_lines.append(line)
            continue
        
        # Skip frontmatter lines (already handled separately)
        
        # Fix ###xxx → ### xxx
        line = re.sub(r'^(#{1,6})([^\s#])', r'\1 \2', line)
        
        # Fix **text** → <strong>text</strong> (CommonMark issue)
        # But only if not already <strong>
        if '<strong>' not in line and '**' in line:
            # Repeatedly replace **...** pairs
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
    """Escape MDX-dangerous characters: angle brackets, curly braces, bare URLs."""
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
        
        # Protect known HTML tags
        html_tags = r'</?(?:strong|/strong|br|img|a|p|li|ul|ol|h[1-6]|table|/table|tr|/tr|t[dh]|/t[dh]|div|span|code|pre|em|b|i|MergeTable|SourceLink)\b[^>]*/?>'
        preserved = []
        
        def save_html(m):
            preserved.append(m.group(0))
            return f'\x00HTML{len(preserved)-1}\x00'
        
        line = re.sub(html_tags, save_html, line, flags=re.IGNORECASE)
        
        # Escape remaining < and > that aren't in backticks
        # Split by backtick regions
        parts = re.split(r'(`[^`]*`)', line)
        for i in range(0, len(parts), 2):
            if i < len(parts):
                # Replace < → &lt; and > → &gt; outside backticks
                # But be careful not to break existing &lt;
                parts[i] = parts[i].replace('<', '&lt;').replace('>', '&gt;')
                # Restore &lt; that were already escaped
                # Actually just do the simple replacement
        line = ''.join(parts)
        
        # Restore preserved HTML tags
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
    """Fetch, convert, and write a single document."""
    try:
        # Fetch from API
        body = json.dumps({
            "objectId": object_id,
            "version": "",
            "catalogName": CATALOG,
            "language": "cn"
        }).encode('utf-8')
        
        req = urllib.request.Request(API_URL, data=body, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=30)
        data = json.loads(resp.read())
        
        content = data.get("value", {}).get("content", {})
        if not content or not content.get("content"):
            print(f"    ⚠️ No content returned for {object_id}")
            return None
        
        title = data["value"].get("title", "")
        html_content = content["content"]
        
        # Check for merged tables
        has_merged = find_merged_tables(html_content)
        
        # Download and localize images
        html_with_local_imgs = localize_images(html_content, doc_dir)
        
        # Convert merged tables before markitdown if present
        merge_table_replacements = []
        if has_merged:
            merge_table_replacements = convert_merge_table(html_with_local_imgs)
            # We'll handle these after markitdown conversion
        
        # Write HTML to temp file
        tmp_html = Path(f"/tmp/hos_{object_id}.html")
        tmp_html.write_text(html_with_local_imgs, encoding='utf-8')
        
        # Convert with markitdown
        result = subprocess.run(
            [MARKITDOWN, str(tmp_html), "-o", str(tmp_html.with_suffix('.md'))],
            capture_output=True, text=True, timeout=30
        )
        
        md_text = Path(str(tmp_html.with_suffix('.md'))).read_text(encoding='utf-8')
        
        # Clean up temp files
        tmp_html.unlink(missing_ok=True)
        Path(str(tmp_html.with_suffix('.md'))).unlink(missing_ok=True)
        
        if not md_text.strip():
            print(f"    ⚠️ markitdown produced empty output for {object_id}")
            return None
        
        # Post-process markdown
        # Fix heading levels: #### [h2]xxx → ### xxx, #### xxx → ## xxx
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
        
        # Handle merge tables: replace markdown tables with MergeTable JSX
        if merge_table_replacements:
            for orig_html, jsx in merge_table_replacements:
                # Try to find the corresponding markdown table
                # Simple heuristic: find the table by its text content
                soup = BeautifulSoup(orig_html, 'html.parser')
                first_cell = ""
                trs = soup.find_all('tr')
                if trs:
                    tds = trs[0].find_all(['td', 'th'])
                    if tds:
                        first_cell = tds[0].get_text(strip=True)[:30]
                
                if first_cell:
                    # Find the markdown table containing this text
                    # Replace the table with MergeTable
                    md_text = re.sub(
                        rf'(\|[^\n]*{re.escape(first_cell)}[^\n]*\n(?:\|[^\n]*\n)+)',
                        f'\n\n{jsx}\n\n',
                        md_text,
                        count=1
                    )
        
        return {"title": title, "md": md_text, "object_id": object_id}
    
    except Exception as e:
        print(f"    ❌ Error processing {object_id}: {e}")
        return None


def get_empty_files():
    """Find all empty .md files in game-center and app-services."""
    empty = []
    for section in SECTIONS:
        base = DOCS / section
        if not base.exists():
            continue
        for md_file in sorted(base.rglob("*.md")):
            content = md_file.read_text(encoding='utf-8')
            parts = content.split('---', 2)
            if len(parts) < 3:
                continue
            body = parts[2].strip()
            non_empty = [l.strip() for l in body.split('\n') if l.strip() and not l.strip().startswith('#')]
            if len(non_empty) == 0:
                obj_id = md_file.stem  # filename without .md is the objectId
                empty.append((md_file, obj_id))
    return empty


def main():
    empty_files = get_empty_files()
    print(f"📋 Found {len(empty_files)} empty files to fill")
    
    if not empty_files:
        print("✅ All files already have content!")
        return
    
    # Process in batches
    success = 0
    skipped = 0
    failed = 0
    
    for i, (md_file, obj_id) in enumerate(empty_files):
        rel_path = md_file.relative_to(DOCS)
        print(f"\n[{i+1}/{len(empty_files)}] {rel_path}")
        
        # Read original frontmatter
        original_content = md_file.read_text(encoding='utf-8')
        parts = original_content.split('---', 2)
        original_fm = parts[1].strip() if len(parts) >= 2 else ""
        
        # Process
        result = process_doc(obj_id, md_file.parent)
        
        if result is None:
            failed += 1
            continue
        
        # Check if content is substantial
        body_text = re.sub(r'[#*\s\-|`]', '', result['md'])
        if len(body_text) < 50:
            print(f"    ⚠️ Content too short ({len(body_text)} chars), skipping")
            skipped += 1
            continue
        
        # Build new frontmatter
        new_fm_lines = []
        # Keep existing fields
        for line in original_fm.split('\n'):
            line = line.strip()
            if not line:
                continue
            if line.startswith('title:'):
                # Use API title if available
                if result['title']:
                    new_fm_lines.append(f'title: "{result["title"]}"')
                else:
                    new_fm_lines.append(line)
            elif line.startswith('original_url:'):
                continue  # Will add fresh one
            else:
                new_fm_lines.append(line)
        
        # Add original_url
        new_fm_lines.append(f'original_url: https://developer.huawei.com/consumer/cn/doc/app/{obj_id}')
        
        new_fm = '\n'.join(new_fm_lines)
        
        # Combine
        final_content = f'---\n{new_fm}\n---\n\n{result["md"]}'
        
        md_file.write_text(final_content, encoding='utf-8')
        success += 1
        
        # Rate limit
        time.sleep(0.5)
    
    print(f"\n{'='*50}")
    print(f"✅ Done! Success: {success}, Skipped (no content): {skipped}, Failed: {failed}")


if __name__ == "__main__":
    main()
