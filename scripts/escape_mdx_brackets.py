#!/usr/bin/env python3
"""Escape non-HTML angle brackets in format:md files.

For files with format: md, replace ALL < and > that aren't part of
known HTML tags with their HTML entities.
"""

import re
import os
from pathlib import Path

DOCS_DIR = Path('/Users/hhxi/developer_hos/docs')

# Known HTML5 tags with optional attributes and self-closing
HTML_TAGS_RE = re.compile(
    r'</?(?:a|abbr|address|area|article|aside|audio|'
    r'b|base|bdi|bdo|blockquote|body|br|button|'
    r'canvas|caption|cite|code|col|colgroup|'
    r'data|datalist|dd|del|details|dfn|dialog|div|dl|dt|'
    r'em|embed|'
    r'fieldset|figcaption|figure|footer|form|'
    r'h[1-6]|head|header|hgroup|hr|html|'
    r'i|iframe|img|input|ins|'
    r'kbd|'
    r'label|legend|li|link|'
    r'main|map|mark|menu|meta|meter|'
    r'nav|noscript|'
    r'object|ol|optgroup|option|output|'
    r'p|picture|pre|progress|'
    r'q|'
    r'rp|rt|ruby|'
    r's|samp|script|section|select|slot|small|source|'
    r'span|strong|style|sub|summary|sup|svg|'
    r'table|tbody|td|template|textarea|tfoot|th|thead|'
    r'time|title|tr|track|'
    r'u|ul|'
    r'var|video|'
    r'wbr)'
    r'(?:\s[^>]*)?/?>',
    re.IGNORECASE
)

def has_format_md(content):
    return 'format: md' in content[:200]

def escape_line(line, in_code_block):
    """Escape < and > in a single line, preserving HTML tags."""
    stripped = line.strip()
    
    if stripped.startswith('```'):
        return line, not in_code_block
    
    if in_code_block:
        return line, in_code_block
    
    # Find all HTML tag spans, escape everything else
    result = []
    pos = 0
    
    for m in HTML_TAGS_RE.finditer(line):
        start, end = m.start(), m.end()
        segment = line[pos:start]
        segment = segment.replace('<', '&lt;').replace('>', '&gt;')
        result.append(segment)
        result.append(line[start:end])
        pos = end
    
    segment = line[pos:]
    segment = segment.replace('<', '&lt;').replace('>', '&gt;')
    result.append(segment)
    
    return ''.join(result), in_code_block


def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception:
        return False
    
    if not has_format_md(content):
        return False
    
    lines = content.split('\n')
    result_lines = []
    in_code_block = False
    modified = False
    
    for line in lines:
        new_line, in_code_block = escape_line(line, in_code_block)
        if new_line != line:
            modified = True
        result_lines.append(new_line)
    
    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write('\n'.join(result_lines))
    
    return modified


def main():
    count = 0
    modified = 0
    
    for root, dirs, files in os.walk(DOCS_DIR):
        for fname in files:
            if not fname.endswith('.md') and not fname.endswith('.mdx'):
                continue
            filepath = str(Path(root) / fname)
            count += 1
            
            try:
                if process_file(filepath):
                    modified += 1
                    if modified % 200 == 0:
                        print(f"  Modified {modified} files...")
            except Exception as e:
                print(f"  ERROR {filepath}: {e}")
    
    print(f"\nDone. {count} files scanned, {modified} modified.")


if __name__ == '__main__':
    main()
