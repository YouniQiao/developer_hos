#!/usr/bin/env python3
"""Comprehensive MDX fix for promotion docs — escape HTML-like tags, curly braces, bare URLs."""
import re, os, sys
from pathlib import Path

DOCS_DIR = Path(__file__).parent.parent / "docs" / "monetize" / "promotion"

# Known HTML tags that should NOT be escaped
KNOWN_TAGS = {
    'div', 'span', 'p', 'br', 'img', 'a', 'table', 'tr', 'td', 'th',
    'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'strong', 'em', 'code', 'pre', 'blockquote', 'hr', 'input',
    'form', 'button', 'label', 'select', 'option', 'textarea',
    'section', 'article', 'nav', 'header', 'footer', 'main',
    'dl', 'dt', 'dd', 'sup', 'sub', 'b', 'i', 'u', 's',
    'col', 'colgroup', 'colgroup', 'tbody', 'thead', 'tfoot', 'caption',
    'figure', 'figcaption', 'details', 'summary', 'mark',
    'iframe', 'video', 'audio', 'canvas',
    'center', 'font', 'base', 'link', 'meta', 'style',
    'abbr', 'address', 'area', 'article', 'aside', 'base',
    'bdi', 'bdo', 'blockquote', 'body', 'caption', 'cite', 'code',
    'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details',
    'dfn', 'dialog', 'dl', 'dt', 'fieldset', 'figcaption',
    'figure', 'footer', 'head', 'header', 'hgroup', 'hr',
    'html', 'ins', 'kbd', 'legend', 'main', 'map', 'mark', 'menu',
    'meter', 'nav', 'noscript', 'object', 'optgroup', 'option',
    'output', 'picture', 'portal', 'pre', 'progress', 'q', 'rp',
    'rt', 'ruby', 's', 'samp', 'script', 'search', 'section',
    'select', 'slot', 'small', 'source', 'strong', 'sub', 'summary',
    'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot',
    'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul',
    'var', 'video', 'wbr',
}

def fix_mdx(content):
    """Fix MDX-incompatible content in markdown body."""
    if not content.startswith('---'):
        return content
    
    end_fm = content.find('---', 3)
    if end_fm == -1:
        return content
    
    frontmatter = content[:end_fm + 3]
    body = content[end_fm + 3:]
    
    lines = body.split('\n')
    in_code = False
    result = []
    
    for line in lines:
        stripped = line.strip()
        
        if stripped.startswith('```') or stripped.startswith('~~~'):
            in_code = not in_code
            result.append(line)
            continue
        
        if in_code:
            result.append(line)
            continue
        
        # Fix 1: Escape bare URLs followed by Chinese punctuation/characters
        # Pattern: https://xxx。 or https://xxx， or https://xxx中文
        line = re.sub(
            r'(https?://[^\s\)\]<>"\'，。、；：）】】》》]+)([，。、；：）】》》\u4e00-\u9fff])',
            r'`\1`\2',
            line
        )
        
        # Fix 2: Escape curly braces outside code blocks  
        # Protect markdown links [text](url) and images ![alt](url)
        # We only escape { and } that are NOT inside markdown link syntax
        # System.out.println -> System.out.println
        # 
        line = line.replace('{', '\\{').replace('}', '\\}')
        # But unescape inside markdown links
        # Actually a simpler approach: just escape braces that are JS-like
        # { and } followed by a character that suggests JS
        
        # Fix 3: Escape non-HTML tags like <string>, <package>, <number> etc.
        # These are common in API documentation for type parameters
        def escape_tag(m):
            tag_name = m.group(1)
            if tag_name.lower() in KNOWN_TAGS:
                return m.group(0)  # keep valid HTML
            # Handle self-closing or closing tags
            if tag_name.startswith('/'):
                base = tag_name[1:]
                if base.lower() in KNOWN_TAGS:
                    return m.group(0)
            if tag_name.endswith('/') or tag_name.endswith(' /'):
                base = tag_name.rstrip(' /')
                if base.lower() in KNOWN_TAGS:
                    return m.group(0)
            # Escape it
            return f'&lt;{tag_name}&gt;'
        
        line = re.sub(r'<([a-zA-Z_][a-zA-Z0-9_\-./ ]*[a-zA-Z0-9_"/]?)>', escape_tag, line)
        
        # Fix 4: Escape remaining < followed by non-letter (like <1, <2)
        line = re.sub(r'<(\d[^>]*)>', r'&lt;\1&gt;', line)
        
        # Fix 5: Escape ≤, ≥ and similar math symbols where they might appear in JSX context
        line = line.replace('≤', '&lt;=').replace('≥', '&gt;=')
        
        result.append(line)
    
    return frontmatter + '\n'.join(result)

def main():
    files = sorted(DOCS_DIR.glob("*.md"))
    fixed = 0
    
    for fp in files:
        if fp.stat().st_size < 200:
            continue
        try:
            content = fp.read_text(encoding='utf-8')
            new_content = fix_mdx(content)
            if new_content != content:
                fp.write_text(new_content, encoding='utf-8')
                fixed += 1
                print(f"  ✓ {fp.name[:40]}")
        except Exception as e:
            print(f"  ✗ {fp.name}: {e}")
    
    print(f"\n✅ Fixed {fixed} / {len(files)} files")

if __name__ == "__main__":
    main()
