#!/usr/bin/env python3
"""Nuclear option: fix ALL remaining {var} patterns not in backticks."""
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
        
        # Process char by char to fix ALL remaining issues
        result = []
        i = 0
        in_bt = False
        while i < len(line):
            c = line[i]
            prv = line[i-1] if i > 0 else ''
            
            if c == '`' and prv != '\\':
                in_bt = not in_bt
                result.append(c)
                i += 1
                continue
            
            if in_bt:
                result.append(c)
                i += 1
                continue
            
            # Fix {word} - wrap the entire {word} including braces in backticks
            if c == '{':
                # Find matching }
                j = i + 1
                depth = 1
                while j < len(line) and depth > 0:
                    if line[j] == '{':
                        depth += 1
                    elif line[j] == '}':
                        depth -= 1
                    j += 1
                
                if depth == 0 and j > i + 1:
                    # Check if it's a valid JS expression
                    inner = line[i+1:j-1]
                    # If it looks like a variable reference (word chars only)
                    if re.match(r'^[a-zA-Z_$][a-zA-Z0-9_.$]*$', inner):
                        # Wrap in backticks
                        line = line[:i] + '`' + line[i:j-1] + '`' + line[j-1:]
                        # Adjust position since we added chars
                        result.append('`')
                        # Copy the inner content plus closing brace plus backtick
                        result.append('{' + inner + '}`')
                        i = j  # Skip past the }
                        continue
                
                result.append(c)
            elif c == '$':
                # Fix ${...} template literals
                if i + 1 < len(line) and line[i+1] == '{':
                    # Find matching }
                    j = i + 2
                    depth = 1
                    while j < len(line) and depth > 0:
                        if line[j] == '{':
                            depth += 1
                        elif line[j] == '}':
                            depth -= 1
                        j += 1
                    
                    if depth == 0:
                        # Wrap the whole ${...} in backticks
                        result.append('`')
                        while i < j:
                            result.append(line[i])
                            i += 1
                        result.append('`')
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
