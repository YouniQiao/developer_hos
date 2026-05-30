#!/usr/bin/env python3
"""Fix remaining MDX angle bracket issues in AGC docs.

Patterns found in failing files:
- <void> in table cells (Promise<void>)
- <[xxx] in table cells
- <`xxx` in table cells
- <number in table cells
- <string | null> etc.
"""
import re
import os
import sys

AGC_DIR = '/Users/hhxi/developer_hos/docs/distribute/agc'

def fix_file(fpath):
    with open(fpath, 'r', errors='replace') as f:
        content = f.read()
    original = content

    lines = content.split('\n')
    new_lines = []
    
    in_code_block = False
    
    for line in lines:
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            new_lines.append(line)
            continue
        if in_code_block:
            new_lines.append(line)
            continue
        
        # Only fix pipe table lines
        if line.strip().startswith('|') and line.count('|') >= 3:
            # Replace any <X where X is alphanumeric and not already escaped
            # This catches: <void, <string, <number, <[link, <`text`, <. etc.
            # But NOT << (already escaped) or </ (closing tags)
            line = re.sub(r'<(?!&lt;)([a-zA-Z0-9\[\]`\.])', r'&lt;\1', line)
        
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
