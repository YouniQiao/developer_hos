#!/usr/bin/env python3
"""
Fix MDX compilation errors in AGC docs.
Root cause: underscores inside {...} JS expressions got Markdown-escaped as \_
but MDX treats {...} as JavaScript, where \_ is invalid.

Fix: wrap ${...} patterns in backticks to make them inline code.
"""
import re
import os

AGC_DIR = '/Users/hhxi/developer_hos/docs/distribute/agc'

def fix_file(fpath):
    with open(fpath, 'r', errors='replace') as f:
        content = f.read()
    original = content
    
    lines = content.split('\n')
    new_lines = []
    in_fence = False
    
    for line in lines:
        if line.strip().startswith('```'):
            in_fence = not in_fence
            new_lines.append(line)
            continue
        if in_fence:
            new_lines.append(line)
            continue
        
        # Pattern 1: replace ${...} with `${...}` (wrap in backticks)
        # But only if not already in backticks
        # Match $ or \$ followed by {stuff} where stuff doesn't contain another {
        line = re.sub(r'(?<!`)(?:\$|\\\$)\{([^}]+)\}(?!`)', r'`${\1}`', line)
        
        # Pattern 2: replace plain {...} JSON/data with `{...}` 
        # Only for patterns that start with {" or {' or {[ or {number
        line = re.sub(r'(?<!`)(?<!\\)\{(["\'\d\.\-])([^}]*)\}(?!`)', r'`{\1\2}`', line)
        
        # Pattern 3: fix \_ inside remaining {...} - replace \_ with _
        line = re.sub(r'\{([^}]*?)\\_([^}]*?)\}', r'{\1_\2}', line)
        
        new_lines.append(line)
    
    content = '\n'.join(new_lines)
    
    if content != original:
        with open(fpath, 'w') as f:
            f.write(content)
        return True
    return False

def main():
    fixed = 0
    for root, dirs, files in os.walk(AGC_DIR):
        for fname in files:
            if not fname.endswith('.md'):
                continue
            if fix_file(os.path.join(root, fname)):
                fixed += 1
    print(f'Fixed {fixed} files')

if __name__ == '__main__':
    main()
