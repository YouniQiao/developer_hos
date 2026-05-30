#!/usr/bin/env python3
"""Precise MDX fix for AGC docs — only escape patterns that cause build failures."""
import re
import os
import sys

AGC_DIR = '/Users/hhxi/developer_hos/docs/distribute/agc'

# Patterns that MUST be fixed (cause MDX compilation errors)
# These appear in non-code-block, non-pipe-table-contexts

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
        
        # Process character by character to handle inline code
        result = []
        i = 0
        in_backtick = False
        
        while i < len(line):
            c = line[i]
            nxt = line[i+1] if i+1 < len(line) else ''
            prv = line[i-1] if i > 0 else ''
            
            if c == '`' and prv != '\\':
                in_backtick = not in_backtick
                result.append(c)
                i += 1
                continue
            
            if in_backtick:
                result.append(c)
                i += 1
                continue
            
            # ============= CASE 1: ${...} template literals =============
            if c == '$' and nxt == '{':
                # Check if already escaped
                if prv != '\\':
                    result.append('\\$')
                    i += 1  # Will handle { in next iteration
                    continue
                else:
                    result.append(c)
                    i += 1
                    continue
            
            # ============= CASE 2: {...} JSON/data literals that start with {" or {' or {[ =============
            if c == '{' and nxt in ('"', "'", '[', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'):
                if prv != '\\':
                    result.append('\\{')
                    i += 1
                    continue
            
            # ============= CASE 3: HTML-like tags that aren't valid =============
            if c == '<' and line[i:i+4] != '&lt;':
                # Check if it's a valid HTML/JSX-like pattern
                # If followed by alphanumeric, `, [, ., /, Chinese char
                if nxt in ('`', '[', '.', '/', ',', '、') or \
                   (nxt.isdigit()) or \
                   (nxt >= '\u4e00' and nxt <= '\u9fff') or \
                   (nxt >= '\u3000' and nxt <= '\u303f'):
                    result.append('&lt;')
                    i += 1
                    continue
                # Check if followed by lowercase word common in type annotations
                rest = line[i:i+10]
                type_patterns = ['string', 'integer', 'boolean', 'long', 'double', 'float', 'byte',
                                'short', 'char', 'void', 'null', 'object', 'number', 'map', 'list',
                                'set', 'array']
                for tp in type_patterns:
                    if rest[1:].lower().startswith(tp) and (len(rest) <= 1+len(tp) or not rest[1+len(tp)].isalpha()):
                        result.append('&lt;')
                        i += 1
                        break
                else:
                    result.append(c)
            else:
                result.append(c)
            
            i += 1
        
        line = ''.join(result)
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
    
    # Show which files still have potential issues
    # (This helps debug)
    remaining = 0
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
                # Check for unescaped { followed by " or 0-9
                for m in re.finditer(r'(?<!\\)\{(?=["\'\[\d-])', line):
                    remaining += 1
                    if remaining <= 10:
                        print(f'  REMAINING: {os.path.relpath(fpath, AGC_DIR)}:{lineno}: ...{line[max(0,m.start()-10):m.end()+30]}...')
    if remaining:
        print(f'Total remaining unescaped patterns: {remaining}')
    else:
        print('All known patterns fixed!')

if __name__ == '__main__':
    main()
