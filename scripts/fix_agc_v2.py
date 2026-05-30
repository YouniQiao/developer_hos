#!/usr/bin/env python3
"""
Fix the exact patterns causing MDX build failures in AGC docs.
Reads failing file list from /tmp/fail_files_v2.txt
Handles:
1. \{json-like} -> must be escaped as \{\"json-like\"\}
2. \${template} -> in backticks or escaped
3. <type> -> &lt;type&gt; (already partially fixed)
"""
import re
import os
import sys

def read_lines(fpath):
    with open(fpath, 'r', errors='replace') as f:
        return f.readlines()

def write_lines(fpath, lines):
    with open(fpath, 'w') as f:
        f.writelines(lines)

def fix_file(fpath):
    lines = read_lines(fpath)
    original = ''.join(lines)
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
        
        # Fix: unescaped { followed by " or ' or number - these are JSON/data literals
        # Need to escape the {
        # Pattern: {"key" or {'key' or {123
        line = re.sub(r'(?<!\\)\{(?=["\'\[\d])', r'\{', line)
        
        # Fix: unescaped { after $ where $ may or may not be backslash-escaped
        # Pattern: ${...} -> \${\...} or `...`
        # But actually ${ is common in API docs. Just escape the {.
        line = re.sub(r'(?<!\\)\$\{(?=[a-zA-Z_])', r'\$\{', line)
        
        new_lines.append(line)
    
    result = ''.join(new_lines)
    if result != original:
        write_lines(fpath, new_lines)
        return True
    return False

def main():
    fail_file = '/tmp/fail_files_v2.txt'
    if not os.path.exists(fail_file):
        print("No failing files list found")
        return
    
    with open(fail_file) as f:
        failing = [l.strip() for l in f if l.strip()]
    
    fixed = 0
    for fpath in failing:
        if not os.path.exists(fpath):
            continue
        if fix_file(fpath):
            fixed += 1
    
    print(f'Fixed {fixed}/{len(failing)} failing files')
    
    # Also scan all AGC files for common patterns
    extra_fixed = 0
    AGC_DIR = '/Users/hhxi/developer_hos/docs/distribute/agc'
    for root, dirs, files in os.walk(AGC_DIR):
        for fname in files:
            if fname.endswith('.md'):
                fpath = os.path.join(root, fname)
                if fix_file(fpath):
                    extra_fixed += 1
    
    print(f'Extra fixed: {extra_fixed}')

if __name__ == '__main__':
    main()
