#!/usr/bin/env python3
"""Debug remaining MDX patterns in failing files."""
import re
import os

with open('/tmp/fail_files.txt', 'r') as f:
    failing = [l.strip() for l in f if l.strip()]

for fpath in failing[:5]:
    if not os.path.exists(fpath):
        continue
    with open(fpath, 'r', errors='replace') as f:
        content = f.read()
    
    print(f'\n=== {os.path.basename(fpath)} ===')
    
    lines = content.split('\n')
    in_fence = False
    
    for lineno, line in enumerate(lines, 1):
        if line.strip().startswith('```'):
            in_fence = not in_fence
            continue
        if in_fence:
            continue
        
        # Find ALL potentially problematic patterns
        
        # 1. Unescaped { followed by " or '
        for m in re.finditer(r'(?<!\\)\{(?=["\'])', line):
            # Check if this { is inside backticks
            before = line[:m.start()]
            bt_count = before.count('`') - before.count('\\`')
            in_bt = bt_count % 2 == 1
            if not in_bt:
                ctx = line[max(0,m.start()-15):m.end()+35]
                print(f'  L{lineno}: UNESCAPED JSON {{ ...{repr(ctx)}...')
        
        # 2. Unescaped ${
        for m in re.finditer(r'(?<!\\)\$\{', line):
            before = line[:m.start()]
            bt_count = before.count('`') - before.count('\\`')
            in_bt = bt_count % 2 == 1
            if not in_bt:
                ctx = line[max(0,m.start()-15):m.end()+35]
                print(f'  L{lineno}: UNESCAPED ${{ ...{repr(ctx)}...')
        
        # 3. Unescaped < not followed by space or valid HTML
        for m in re.finditer(r'<(?![ /?a-zA-Z!%])', line):
            if line[m.start():m.start()+4] == '&lt;':
                continue
            before = line[:m.start()]
            bt_count = before.count('`') - before.count('\\`')
            in_bt = bt_count % 2 == 1
            if not in_bt:
                ctx = line[max(0,m.start()-15):m.end()+15]
                print(f'  L{lineno}: PROBLEMATIC < ...{repr(ctx)}...')
