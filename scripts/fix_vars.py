#!/usr/bin/env python3
"""Fix all {variable} patterns that MDX evaluates as JS expressions."""
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
        
        # Process char by char to track inline backticks
        result = []
        i = 0
        in_bt = False
        while i < len(line):
            c = line[i]
            prv = line[i-1] if i > 0 else ''
            
            # Toggle inline backtick (not escaped)
            if c == '`' and prv != '\\':
                in_bt = not in_bt
                result.append(c)
                i += 1
                continue
            
            if in_bt:
                result.append(c)
                i += 1
                continue
            
            # Fix {word} - wrap in backtick
            # Pattern: { followed by alphanumeric/underscore/dot, ended by }
            # But NOT { followed by " ' [ 0-9 . - (already handled)
            # AND NOT already escaped \{
            if c == '{' and (prv != '\\'):
                nxt = line[i+1] if i+1 < len(line) else ''
                
                # Skip patterns we already handle
                if nxt in ('"', "'", '[', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '-', '\\'):
                    result.append(c)
                    i += 1
                    continue
                
                # Look ahead for matching }
                j = i + 1
                while j < len(line) and line[j] != '}':
                    j += 1
                if j < len(line) and j > i + 1:
                    inner = line[i+1:j]
                    # If inner contains only word chars (a-z, A-Z, 0-9, _, .), wrap in backtick
                    if re.match(r'^[a-zA-Z_][a-zA-Z0-9_.]*$', inner):
                        result.append('`{')
                        # Find the matching }
                        while i < j:
                            i += 1
                            result.append(line[i])
                        result.append('`')
                        i += 1  # skip past }
                        continue
                
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
    # Find occurrences first
    var_pattern = re.compile(r'(?<!\\)\{([a-zA-Z_][a-zA-Z0-9_.]*)\}')
    total = 0
    for root, dirs, files in os.walk(AGC_DIR):
        for fname in files:
            if not fname.endswith('.md'):
                continue
            fpath = os.path.join(root, fname)
            with open(fpath, 'r', errors='replace') as f:
                content = f.read()
            # Rough count (may include code blocks)
            total += len(var_pattern.findall(content))
    
    print(f"Found ~{total} variable patterns")
    
    fixed = 0
    for root, dirs, files in os.walk(AGC_DIR):
        for fname in files:
            if not fname.endswith('.md'):
                continue
            if fix_file(os.path.join(root, fname)):
                fixed += 1
    
    print(f"Fixed {fixed} files")

if __name__ == '__main__':
    main()
