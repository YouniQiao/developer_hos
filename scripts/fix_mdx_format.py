#!/usr/bin/env python3
"""
Fix Docusaurus MDX compilation errors v6 - FINAL.

Key insight: MDX decodes HTML entities BEFORE JSX validation.
So &lt;X&gt; won't work. Use CommonMark backslash escaping: \<X\>

Strategy for format:md files:
1. Void HTML elements: make self-closing (<meta> -> <meta />)
2. HTML tags with attributes + matching close: preserve
3. Bare non-void HTML tags without close: escape with \<tag\>
4. Non-HTML tags: escape with \<tag\>
5. URLs in brackets: strip brackets
6. {expr}: escape
7. <>: escape with \<\>
"""

import re
import os
from pathlib import Path

DOCS_DIR = Path('/Users/hhxi/developer_hos/docs')

VOID_ELEMENTS = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 
                 'link', 'meta', 'source', 'track', 'wbr'}

NON_VOID_HTML = {
    'a', 'abbr', 'address', 'article', 'aside', 'audio',
    'b', 'bdi', 'bdo', 'blockquote', 'body', 'button', 'canvas', 'caption',
    'cite', 'code', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details',
    'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'fieldset', 'figcaption',
    'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head',
    'header', 'hgroup', 'html', 'i', 'iframe', 'ins', 'kbd', 'label',
    'legend', 'li', 'main', 'map', 'mark', 'menu', 'meter', 'nav',
    'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p',
    'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp',
    'script', 'section', 'select', 'slot', 'small', 'span', 'strong',
    'style', 'sub', 'summary', 'sup', 'svg', 'table', 'tbody', 'td',
    'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr',
    'u', 'ul', 'var', 'video',
}

ALL_HTML = VOID_ELEMENTS | NON_VOID_HTML


def has_real_import(body):
    lines = body.split('\n')
    in_code = False
    for line in lines:
        s = line.strip()
        if s.startswith('```'):
            in_code = not in_code
            continue
        if not in_code and re.match(r'^import\s+', s):
            return True
    return False


def escape_angle(text):
    """Use CommonMark backslash escaping: \<text\> instead of &lt;text&gt;"""
    return '\\<' + text + '\\>'


def handle_angle_brackets(text):
    def replacer(m):
        full = m.group(0)
        inner = m.group(1)
        
        # Closing tag </tag>
        if inner.startswith('/'):
            tag = inner[1:].strip().lower()
            if tag in ALL_HTML:
                return full
            return escape_angle('/' + inner[1:])
        
        tag_with_attrs = inner.rstrip('/').strip()
        
        # Has attributes (space)?
        if ' ' in tag_with_attrs:
            tag_name = tag_with_attrs.split()[0].lower()
            if tag_name in ALL_HTML:
                return full
            return escape_angle(inner)
        
        tag_name = tag_with_attrs.lower()
        
        # Void element
        if tag_name in VOID_ELEMENTS:
            return full
        
        # Non-void HTML without attributes
        if tag_name in NON_VOID_HTML:
            rest = text[text.find(full) + len(full):]
            if ('</' + tag_name + '>').lower() in rest.lower():
                return full
            return escape_angle(inner)
        
        # Empty <>
        if inner == '':
            return escape_angle('')
        
        # URL pattern
        if '://' in inner:
            return inner
        
        # Not HTML — escape
        return escape_angle(inner)
    
    return re.sub(r'<([^>]*)>', replacer, text)


def escape_line(line):
    parts = re.split(r'(`[^`]+`)', line)
    result = []
    
    for i, part in enumerate(parts):
        if i % 2 == 1:
            result.append(part)
            continue
        
        # Fix void elements
        for tag in VOID_ELEMENTS:
            part = re.sub(
                rf'<({tag})(\s[^>]*)?>(?!\s*</{tag}>)',
                r'<\1\2 />',
                part,
                flags=re.IGNORECASE
            )
        
        # Handle angle brackets
        part = handle_angle_brackets(part)
        
        # Escape braces
        part = part.replace('{', '\\{').replace('}', '\\}')
        
        result.append(part)
    
    return ''.join(result)


def process_body(body):
    lines = body.split('\n')
    out = []
    in_fence = False
    for line in lines:
        s = line.strip()
        if s.startswith('```'):
            in_fence = not in_fence
            out.append(line)
        elif in_fence:
            out.append(line)
        else:
            out.append(escape_line(line))
    return '\n'.join(out)


def has_format_md(content):
    if not content.startswith('---'):
        return False
    end = content.find('\n---', 3)
    if end == -1:
        return False
    return bool(re.search(r'^format:\s*md\s*$', content[4:end], re.MULTILINE))


def add_format_md(content):
    end = content.find('\n---', 3)
    fm = content[4:end]
    rest = content[end:]
    return '---\n' + fm + '\nformat: md' + rest


def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8', errors='replace') as f:
            content = f.read()
    except Exception:
        return None
    
    if not filepath.endswith('.md'):
        return None
    if not content.startswith('---'):
        return None
    
    fm_end = content.find('\n---', 3)
    if fm_end == -1:
        return None
    
    body = content[fm_end + 4:]
    
    if has_real_import(body):
        return None
    
    modified = content
    if not has_format_md(content):
        modified = add_format_md(content)
        fm_end2 = modified.find('\n---', 3)
        body = modified[fm_end2 + 4:]
    
    new_body = process_body(body)
    fm_part = modified[:modified.find('\n---', 3) + 4]
    new_content = fm_part + '\n' + new_body
    
    if new_content != modified:
        with open(filepath, 'w', encoding='utf-8', errors='replace') as f:
            f.write(new_content)
        return 'fixed'
    elif modified != content:
        with open(filepath, 'w', encoding='utf-8', errors='replace') as f:
            f.write(modified)
        return 'tagged'
    return None


def main():
    count = fixed = tagged = 0
    for root, dirs, files in os.walk(DOCS_DIR):
        for fname in files:
            if not fname.endswith('.md'): continue
            filepath = str(Path(root) / fname)
            count += 1
            try:
                result = process_file(filepath)
                if result == 'fixed': fixed += 1
                elif result == 'tagged': tagged += 1
                if (fixed + tagged) % 2000 == 0:
                    print(f"  {fixed + tagged}...")
            except Exception as e:
                print(f"  ERROR {filepath}: {e}")
    print(f"\nDone. {count} files. fixed: {fixed}, tagged: {tagged}")


if __name__ == '__main__':
    main()
