#!/usr/bin/env python3
"""Fix {VARIABLE} -> backtick-wrapped via raw byte replacement."""
import os
import re

AGC_DIR = '/Users/hhxi/developer_hos/docs/distribute/agc'

# Specific variable names to fix (ASCII only - Chinese handled separately)
var_names = ['JWT', 'access_token', 'libraryName', 'domain', 
             'moduleName', 'bundleName', 'abilityName', 'jsonStr']

fixed = 0
for root, dirs, files in os.walk(AGC_DIR):
    for fname in files:
        if not fname.endswith('.md'):
            continue
        fpath = os.path.join(root, fname)
        with open(fpath, 'rb') as f:
            data = f.read()
        original = data
        
        for name in var_names:
            old = b'{' + name.encode() + b'}'
            new = b'`' + name.encode() + b'`'
            # But wrap in { } braces too
            new = b'`{' + name.encode() + b'}`'
            data = data.replace(old, new)
        
        # Also fix Chinese variable patterns using regex on decoded text
        text = data.decode('utf-8', errors='replace')
        orig_text = text
        # Fix {chinese_text} - any { followed by CJK and closed by }
        text = re.sub(
            r'(?<!\\)\{([\u4e00-\u9fff\u3000-\u303f][^}]*)\}',
            r'`{\1}`',
            text
        )
        if text != orig_text:
            data = text.encode('utf-8')
        
        if data != original:
            with open(fpath, 'wb') as f:
                f.write(data)
            fixed += 1

print(f'Fixed {fixed} files')
