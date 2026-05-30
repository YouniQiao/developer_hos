#!/usr/bin/env python3
"""Fix all remaining MDX angle bracket issues in AGC docs.
Targets <[ and <` patterns in pipe tables."""
import re
import os

AGC_DIR = '/Users/hhxi/developer_hos/docs/distribute/agc'

def fix_file(fpath):
    with open(fpath, 'r', errors='replace') as f:
        content = f.read()
    original = content

    lines = content.split('\n')
    new_lines = []
    
    in_code_block = False
    
    for line in lines:
        # Track code blocks
        if line.strip().startswith('```'):
            in_code_block = not in_code_block
            new_lines.append(line)
            continue
        
        if in_code_block:
            new_lines.append(line)
            continue
        
        # Only fix pipe table lines
        if line.strip().startswith('|') and line.count('|') >= 3:
            # Replace < followed by [ or ` or digit inside table cells
            # <[ -> &lt;[
            line = re.sub(r'<(\[)', r'&lt;\1', line)
            line = re.sub(r'<(`)', r'&lt;\1', line)
            # <number -> &lt;number
            line = re.sub(r'<(\d)', r'&lt;\1', line)
            # <. -> &lt;.
            line = re.sub(r'<(\.)', r'&lt;\1', line)
        
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
