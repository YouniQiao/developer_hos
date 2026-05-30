"""
One-shot fix for ALL MDX compilation errors in docs/distribute/agc/

Handles:
1. {access\_token} - invalid JS identifier with backslash (single-line)
2. Large {code blocks} - JSON/Java examples not fenced (multi-line or >80 chars)
"""
import re, os
from pathlib import Path

WORKDIR = "/Users/hhxi/developer_hos"
AGC_DIR = os.path.join(WORKDIR, "docs/distribute/agc")

def find_matching_brace(text, start):
    """Find position of matching } for { at 'start' pos."""
    stack = 1
    i = start + 1
    while i < len(text) and stack > 0:
        if text[i] == '{':
            stack += 1
        elif text[i] == '}':
            stack -= 1
        i += 1
    return i - 1 if stack == 0 else -1

def is_inside_fence(text, pos):
    """Check if position is inside ``` fenced code block (only line-start fences)."""
    prefix = text[:pos]
    # Count ``` that appear at start of line (with optional whitespace)
    fence_lines = len(re.findall(r'^\s*```', prefix, re.MULTILINE))
    return fence_lines % 2 == 1

def fix_file(filepath):
    with open(filepath, 'rb') as f:
        raw = f.read()
    try:
        text = raw.decode('utf-8')
    except:
        return False
    
    original = text
    
    # Phase 1: Fix {anything_with_backslash} patterns
    text = re.sub(
        r'\{([^}\n]*\\[^}\n]*)\}',
        lambda m: '`{' + m.group(1) + '}`',
        text
    )
    
    # Phase 2: Find large non-fenced {code} blocks and wrap
    i = 0
    replacements = []
    
    while i < len(text):
        if text[i] == '{' and not is_inside_fence(text, i):
            end = find_matching_brace(text, i)
            if end < 0:
                i += 1
                continue
            
            inner = text[i+1:end]
            length = end - i
            
            # Large: multi-line OR > 80 single-line chars
            is_large = '\n' in inner or len(inner) > 80
            
            if is_large:
                # Wrap in 4-backtick inline code (safe even with internal backticks)
                new_text = '````' + text[i:end+1] + '````'
                replacements.append((i, end + 1, new_text))
                i = end + 1
            else:
                i = end + 1
        else:
            i += 1
    
    for start, end, new_text in reversed(replacements):
        text = text[:start] + new_text + text[end:]
    
    if text != original:
        with open(filepath, 'wb') as f:
            f.write(text.encode('utf-8'))
        return True
    return False

def main():
    all_files = sorted(Path(AGC_DIR).rglob("*.md"))
    print(f"Processing {len(all_files)} files...")
    
    fixed = []
    for fp in all_files:
        try:
            if fix_file(str(fp)):
                fixed.append(fp.relative_to(WORKDIR))
        except Exception as e:
            print(f"  ERROR {fp.name}: {e}")
    
    print(f"\nFixed: {len(fixed)} files")
    for f in fixed[:15]:
        print(f"  {f}")
    if len(fixed) > 15:
        print(f"  ... and {len(fixed) - 15} more")

if __name__ == "__main__":
    main()
