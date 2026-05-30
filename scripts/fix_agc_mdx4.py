#!/usr/bin/env python3
"""
Comprehensive MDX fix for remaining AGC docs.
Handles: < { ${ {# patterns that MDX interprets as JSX.
"""
import re
import os
import sys

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
        
        # Process character by character to track inline code
        result = []
        i = 0
        in_backtick = False
        
        while i < len(line):
            c = line[i]
            
            # Toggle inline code on backtick (not escaped)
            if c == '`' and (i == 0 or line[i-1] != '\\'):
                in_backtick = not in_backtick
                result.append(c)
                i += 1
                continue
            
            if in_backtick:
                result.append(c)
                i += 1
                continue
            
            # Fix ${} - escape the ${
            if c == '$' and i + 1 < len(line) and line[i+1] == '{':
                result.append('\\$')
                i += 1  # skip past $, { will be handled below or can stay
                continue
            
            # Fix standalone { that would be parsed as JSX expression
            # But NOT if it's part of markdown link syntax [text](url)
            # or if it's already escaped
            if c == '{':
                # Check context - is it a markdown image/table/content?
                # If preceded by space/punctuation/start-of-line, likely not JSX
                prev_char = line[i-1] if i > 0 else ' '
                next_char = line[i+1] if i + 1 < len(line) else ' '
                
                # Don't escape if it's likely a markdown table or code example
                # Common patterns: {| (table), {%, {#, {{ (shortcodes/variables)
                if prev_char in (' ', '\t', '>', '-', '*', '|') or prev_char in '（(（':
                    # Three consecutive { is already verbatim {{
                    if line[i:i+2] != '{{' and line[i:i+2] != '{|' and line[i:i+2] != '{#' and line[i:i+2] != '{%':
                        # If it looks like JSON ({"key": value}) or other data, escape
                        if next_char in ('"', "'", '{', '[', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '\\'):
                            result.append('\\{')
                            i += 1
                            continue
            
            # Fix < outside of HTML-like tags
            if c == '<':
                next_chars = line[i:i+4]
                if next_chars == '&lt;' or next_chars == '<!--':
                    result.append(c)
                elif line[i:i+2] in ('< ', '<\t', '<\n', '<|', '<!', '<?'):
                    result.append('&lt;')
                elif i + 1 < len(line) and line[i+1] in ('/', 'b', 'h', 'p', 'd', 's', 't', 'i', 'e', 'u', 'o', 'a', 'm', 'l', 'c', 'f', 'n', 'x', 'w', 'k'):
                    # Could be an HTML tag - check if it's complete
                    tag_end = line.find('>', i)
                    if tag_end > i:
                        tag_content = line[i+1:tag_end]
                        # If it looks like a valid HTML tag, keep it
                        if re.match(r'^/?[a-zA-Z][a-zA-Z0-9]*(?:\s+[^>]*)?$', tag_content):
                            result.append(c)
                            i += 1
                            continue
                    result.append('&lt;')
                else:
                    result.append('&lt;')
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
    AGC_DIR = '/Users/hhxi/developer_hos/docs/distribute/agc'
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
