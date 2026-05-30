#!/usr/bin/env python3
"""Fix all remaining {var} patterns using regex."""
import re
import os

AGC_DIR = '/Users/hhxi/developer_hos/docs/distribute/agc'

# Patterns that are valid JSX and should NOT be wrapped
# These are rare in docs but we should avoid breaking them
VALID_JS_PATTERNS = [
    r'\{\s*/\*.*?\*/\s*\}',  # comments {/* */}
]

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
        
        # Track inline code regions
        # Split by backtick regions
        parts = re.split(r'(`)', line)
        result_parts = []
        in_bt = False
        
        for part in parts:
            if part == '`':
                in_bt = not in_bt
                result_parts.append(part)
                continue
            
            if in_bt:
                result_parts.append(part)
                continue
            
            # Not in backtick - fix patterns
            
            # Fix ${...} - wrap in backtick if not already
            part = re.sub(
                r'(?<!\\)\$\{([^}]+)\}',
                r'`${\1}`',
                part
            )
            
            # Fix {word} - wrap in backtick if it looks like a variable ref
            part = re.sub(
                r'(?<!\\)\{([a-zA-Z_$][a-zA-Z0-9_$.]*)\}',
                r'`{\1}`',
                part
            )
            
            # Fix {Chinese} patterns
            part = re.sub(
                r'(?<!\\)\{([\u4e00-\u9fff][^}]*)\}',
                r'`{\1}`',
                part
            )
            
            result_parts.append(part)
        
        line = ''.join(result_parts)
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
