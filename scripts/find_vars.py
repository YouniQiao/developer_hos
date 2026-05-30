#!/usr/bin/env python3
"""Find remaining {variable} patterns causing ReferenceErrors."""
import re
import os

AGC_DIR = '/Users/hhxi/developer_hos/docs/distribute/agc'
pattern = re.compile(r'(?<!\\)\{([a-zA-Z_][a-zA-Z0-9_.]*)\}')

count = 0
for root, dirs, files in os.walk(AGC_DIR):
    for fname in files:
        if not fname.endswith('.md'):
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, 'r', errors='replace') as f:
            content = f.read()
        
        lines = content.split('\n')
        in_fence = False
        for lineno, line in enumerate(lines, 1):
            if line.strip().startswith('```'):
                in_fence = not in_fence
                continue
            if in_fence:
                continue
            
            for m in pattern.finditer(line):
                # Check if inside backtick
                before = line[:m.start()]
                bt_count = before.count('`') - before.count(r'\`')
                if bt_count % 2 == 0:
                    var = m.group(1)
                    ctx = line[max(0,m.start()-15):m.end()+10]
                    print(f'{var} in {os.path.basename(fpath)}:{lineno}: {repr(ctx)}')
                    count += 1
                    if count >= 30:
                        break
            if count >= 30:
                break
        if count >= 30:
            break

print(f'\nTotal remaining: {count}')
