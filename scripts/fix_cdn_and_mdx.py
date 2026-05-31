#!/usr/bin/env python3
"""Fix: 1) Re-download CDN images, 2) Fix MergeTable JSX syntax, 3) Fix remaining MDX issues"""
import json, urllib.request, subprocess, os, re, html as html_mod, hashlib, time
from pathlib import Path
from urllib.parse import urlparse

DOCS = Path("/Users/hhxi/developer_hos/docs/distribute/app-dist")
SECTIONS = ["game-center", "app-services"]
image_cache = {}

def download_image(img_url, doc_dir):
    try:
        parsed = urlparse(img_url)
        url_path = parsed.path
        if url_path in image_cache:
            return image_cache[url_path]
        ext = os.path.splitext(url_path)[1]
        if not ext or len(ext) > 6: ext = '.png'
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
                    print(f"    ⚠️ Failed: {img_url[:80]}...")
                time.sleep(1)
        return None
    except: return None

# Step 1: Fix CDN images
print("=== Fixing CDN images ===")
cdn_pattern = re.compile(r'!\[([^\]]*)\]\((https?://[a-zA-Z0-9._/-]*contentcenter[^)\s]*)\)')
cdn_count = 0
for section in SECTIONS:
    for md_file in sorted(DOCS.glob(f"{section}/**/*.md")):
        content = md_file.read_text(encoding='utf-8')
        if 'contentcenter' not in content:
            continue
        
        changed = [False]
        cdn_count = [0]
        def replace_cdn(m):
            alt = m.group(1)
            img_url = m.group(2)
            local = download_image(img_url, md_file.parent)
            if local:
                cdn_count[0] += 1
                changed[0] = True
                return f'![{alt}]({local})'
            return m.group(0)
        new_content = cdn_pattern.sub(replace_cdn, content)
        if changed[0]:
            md_file.write_text(new_content, encoding='utf-8')

print(f"  Fixed {cdn_count} CDN images")

# Step 2: Fix MergeTable JSX syntax
print("\n=== Fixing MergeTable JSX ===")
merge_fixed = 0
for section in SECTIONS:
    for md_file in sorted(DOCS.glob(f"{section}/**/*.md")):
        content = md_file.read_text(encoding='utf-8')
        if '<MergeTable' not in content:
            continue
        
        changed = False
        
        # Fix: headers=["a","b"] → headers={["a","b"]}
        # Fix: rows={...} already has braces, but check for missing braces
        new_content = re.sub(
            r'headers=\[(.*?)\]',
            r'headers={[\1]}',
            content,
            flags=re.DOTALL
        )
        
        # Fix: rows might be without braces
        new_content = re.sub(
            r'rows=\[\s*\[',
            r'rows={[\n    [',
            new_content
        )
        
        # Fix: closing ] of rows might need }
        # Look for pattern: \n]/> → \n  ]}/>
        new_content = re.sub(
            r'\n\s*\](?=\s*/>)',
            r'\n  ]}',
            new_content
        )
        
        if new_content != content:
            md_file.write_text(new_content, encoding='utf-8')
            merge_fixed += 1

print(f"  Fixed {merge_fixed} MergeTable files")

# Step 3: Fix remaining MDX issues (angle brackets in non-code context)
print("\n=== Fixing MDX issues ===")
mdx_fixed = 0
for section in SECTIONS:
    for md_file in sorted(DOCS.glob(f"{section}/**/*.md")):
        content = md_file.read_text(encoding='utf-8')
        changed = False
        lines = content.split('\n')
        new_lines = []
        in_code = False
        in_fm = True
        fm_count = 0
        
        for line in lines:
            stripped = line.strip()
            
            if stripped == '---':
                fm_count += 1
                in_fm = (fm_count < 2)
                new_lines.append(line)
                continue
            
            if in_fm:
                new_lines.append(line)
                continue
            
            if stripped.startswith('```'):
                in_code = not in_code
                new_lines.append(line)
                continue
            
            if in_code:
                new_lines.append(line)
                continue
            
            # Skip MergeTable and SourceLink lines (they're valid JSX)
            if stripped.startswith('<MergeTable') or stripped.startswith('<SourceLink') or stripped.startswith('headers=') or stripped.startswith('rows=') or stripped == '/>':
                new_lines.append(line)
                continue
            
            # Fix bare angle brackets that aren't HTML/JSX
            # Replace <X> patterns where X contains Chinese or non-tag characters
            # But protect known patterns first
            html_tags = r'</?(?:strong|/strong|br|img|a|p|li|ul|ol|h[1-6]|table|/table|tr|/tr|t[dh]|/t[dh]|div|span|code|pre|em|b|i)\b[^>]*/?>'
            preserved = []
            
            def save_html(m):
                preserved.append(m.group(0))
                return f'\x00HTML{len(preserved)-1}\x00'
            
            line = re.sub(html_tags, save_html, line, flags=re.IGNORECASE)
            
            # Now escape remaining angle brackets (not in backticks)
            parts = re.split(r'(`[^`]*`)', line)
            for i in range(0, len(parts), 2):
                if i < len(parts):
                    # Only escape < and > that are problematic for MDX
                    # < followed by Chinese, digit, or special char
                    parts[i] = re.sub(r'<([^\s>]*[\u4e00-\u9fff][^\s>]*)>', r'&lt;\1&gt;', parts[i])
                    # <number patterns like <2.0
                    parts[i] = re.sub(r'<(\d[^\s>]*)>', r'&lt;\1&gt;', parts[i])
            
            line = ''.join(parts)
            
            # Restore preserved HTML
            for i, tag in enumerate(preserved):
                line = line.replace(f'\x00HTML{i}\x00', tag)
            
            new_lines.append(line)
        
        new_content = '\n'.join(new_lines)
        if new_content != content:
            md_file.write_text(new_content, encoding='utf-8')
            mdx_fixed += 1

print(f"  Fixed {mdx_fixed} MDX files")

print("\n✅ Done!")
