#!/usr/bin/env python3
"""
Batch fix MDX issues in converted markdown files.
Handles: 尖括号, 花括号, **粗体, 裸URL
Based on developer-hos-content-workflow skill patterns.
"""
import re
from pathlib import Path

BASE = Path('/Users/hhxi/developer_hos')
DOC_DIR = BASE / 'docs' / 'tools' / 'coding-debug'
KNOWN_HTML_TAGS = r'</?(?:strong|/strong|br|img|a|p|li|ul|ol|h[1-6]|table|/table|tr|/tr|t[dh]|/t[dh]|div|span|code|pre|em|b|i|blockquote)\b[^>]*/?>'

def fix_consecutive_bold(text):
    """Merge **** sequences: **word1****word2** → **word1word2**"""
    changed = True
    while changed:
        changed = False
        new = re.sub(r'\*\*([^*]+)\*\*\*\*([^*]+)\*\*', r'**\1\2**', text)
        if new != text:
            text = new
            changed = True
    return text

def fix_bold_in_paragraph(text):
    """Replace **text** with <strong>text</strong> (non-codeblock).
    Must be done BEFORE angle bracket escaping to avoid <strong> being escaped."""
    lines = text.split('\n')
    new_lines = []
    in_code_block = False
    in_frontmatter = False
    fm_count = 0
    
    for line in lines:
        stripped = line.strip()
        
        # Track frontmatter
        if stripped == '---':
            fm_count += 1
            if fm_count == 1:
                in_frontmatter = True
            elif fm_count == 2:
                in_frontmatter = False
            new_lines.append(line)
            continue
        
        if in_frontmatter:
            new_lines.append(line)
            continue
        
        # Track code blocks
        if stripped.startswith('```'):
            in_code_block = not in_code_block
            new_lines.append(line)
            continue
        
        if in_code_block:
            new_lines.append(line)
            continue
        
        # Replace **...** with <strong>...</strong>
        # But skip if inside backticks
        parts = re.split(r'(`[^`]*`)', line)
        for i, part in enumerate(parts):
            if part.startswith('`'):
                continue  # skip backtick content
            # Replace ** pairs
            changed = True
            while changed:
                changed = False
                new_part = re.sub(r'\*\*([^*\n]+?)\*\*', r'<strong>\1</strong>', part)
                if new_part != part:
                    part = new_part
                    changed = True
            parts[i] = part
        new_lines.append(''.join(parts))
    
    return '\n'.join(new_lines)

def fix_angle_brackets(text):
    """Escape <...> that aren't known HTML tags (non-codeblock)."""
    lines = text.split('\n')
    new_lines = []
    in_code_block = False
    in_frontmatter = False
    fm_count = 0
    
    for line in lines:
        stripped = line.strip()
        
        if stripped == '---':
            fm_count += 1
            if fm_count == 1: in_frontmatter = True
            elif fm_count == 2: in_frontmatter = False
            new_lines.append(line)
            continue
        
        if in_frontmatter:
            new_lines.append(line)
            continue
        
        if stripped.startswith('```'):
            in_code_block = not in_code_block
            new_lines.append(line)
            continue
        
        if in_code_block:
            new_lines.append(line)
            continue
        
        # Skip lines inside backtick spans
        # Strategy: preserve known tags, escape rest
        preserved = []
        def preserve_known(m):
            preserved.append(m.group(0))
            return f'\x00{len(preserved)-1}\x00'
        
        line = re.sub(KNOWN_HTML_TAGS, preserve_known, line, flags=re.I)
        
        # Now escape remaining < and >
        # But be careful: < and > inside backticks should be preserved
        parts = re.split(r'(`[^`]*`)', line)
        for i, part in enumerate(parts):
            if part.startswith('`'):
                continue
            # Replace < with &lt; and > with &gt; 
            part = part.replace('<', '&lt;').replace('>', '&gt;')
            parts[i] = part
        line = ''.join(parts)
        
        # Restore preserved known tags
        for j, tag in enumerate(preserved):
            line = line.replace(f'\x00{j}\x00', tag)
        
        new_lines.append(line)
    
    return '\n'.join(new_lines)

def fix_curly_braces(text):
    """Fix {...} patterns that MDX interprets as expressions (non-codeblock)."""
    lines = text.split('\n')
    new_lines = []
    in_code_block = False
    in_frontmatter = False
    fm_count = 0
    
    for line in lines:
        stripped = line.strip()
        
        if stripped == '---':
            fm_count += 1
            if fm_count == 1: in_frontmatter = True
            elif fm_count == 2: in_frontmatter = False
            new_lines.append(line)
            continue
        
        if in_frontmatter:
            new_lines.append(line)
            continue
        
        if stripped.startswith('```'):
            in_code_block = not in_code_block
            new_lines.append(line)
            continue
        
        if in_code_block:
            new_lines.append(line)
            continue
        
        # Fix patterns like `{variable}` and `{ key: value }` 
        # Strategy: wrap in backticks
        # Only fix lines that have standalone {...} not in backticks
        parts = re.split(r'(`[^`]*`)', line)
        for i, part in enumerate(parts):
            if part.startswith('`'):
                continue
            # Fix `{something}` patterns that look like variables
            # e.g. `{e}` → `` `{e}` ``
            # But don't touch things that are already formatted
            part = re.sub(r'(?<![`\\])\{([a-zA-Z_][a-zA-Z0-9_.]*)\}', r'`{\1}`', part)
            parts[i] = part
        new_lines.append(''.join(parts))
    
    return '\n'.join(new_lines)

def fix_bare_urls(text):
    """Wrap bare URLs that are followed by Chinese chars in backticks (non-codeblock)."""
    lines = text.split('\n')
    new_lines = []
    in_code_block = False
    in_frontmatter = False
    fm_count = 0
    
    for line in lines:
        stripped = line.strip()
        
        if stripped == '---':
            fm_count += 1
            if fm_count == 1: in_frontmatter = True
            elif fm_count == 2: in_frontmatter = False
            new_lines.append(line)
            continue
        
        if in_frontmatter:
            new_lines.append(line)
            continue
        
        if stripped.startswith('```'):
            in_code_block = not in_code_block
            new_lines.append(line)
            continue
        
        if in_code_block:
            new_lines.append(line)
            continue
        
        # Fix: bare URL followed by Chinese char
        # http://example.com。 → `http://example.com`。
        parts = re.split(r'(`[^`]*`)', line)
        for i, part in enumerate(parts):
            if part.startswith('`'):
                continue
            # Match URL not already in backticks
            part = re.sub(
                r'(?<!`)(https?://[^\s`)\]}>)\u4e00-\u9fff，。；：、！？])',
                lambda m: f'`{m.group(1)[:-1]}`{m.group(1)[-1]}',
                part
            )
            # Also handle *url* patterns
            part = re.sub(r'\*(https?://[^*]+)\*', r'`\1`', part)
            parts[i] = part
        new_lines.append(''.join(parts))
    
    return '\n'.join(new_lines)

def fix_headings(text):
    """Fix ###missing space and other heading issues."""
    # ###标题 → ### 标题
    text = re.sub(r'^(###)([^ #\n])', r'\1 \2', text, flags=re.MULTILINE)
    # Also fix h1-h6
    for h in range(1, 7):
        prefix = '#' * h
        text = re.sub(rf'^({prefix})([^ #\n])', rf'\1 \2', text, flags=re.MULTILINE)
    return text

def process_file(filepath):
    """Apply all fixes to a single file."""
    try:
        text = filepath.read_text(encoding='utf-8')
    except:
        return f"read error: {filepath}"
    
    original = text
    
    # Order matters! Bold → Angle → Curly → URL
    text = fix_consecutive_bold(text)
    text = fix_bold_in_paragraph(text)
    text = fix_angle_brackets(text)
    text = fix_curly_braces(text)
    text = fix_bare_urls(text)
    text = fix_headings(text)
    
    if text != original:
        filepath.write_text(text, encoding='utf-8')
        return f"fixed: {filepath.name}"
    return f"no change: {filepath.name}"

def main():
    import sys
    
    if len(sys.argv) > 1:
        # Fix specific files
        files = [Path(f) for f in sys.argv[1:]]
    else:
        # Fix all .md files
        files = list(DOC_DIR.rglob('*.md'))
    
    print(f"Processing {len(files)} files...")
    fixed = 0
    unchanged = 0
    errors = 0
    
    for f in files:
        result = process_file(f)
        if result.startswith('fixed'):
            fixed += 1
            print(f"  ✅ {result}")
        elif result.startswith('no change'):
            unchanged += 1
        else:
            errors += 1
            print(f"  ❌ {result}")
    
    print(f"\nDone: {fixed} fixed, {unchanged} unchanged, {errors} errors")

if __name__ == '__main__':
    main()
