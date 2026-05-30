#!/usr/bin/env python3
"""Fix last file - replace backtick with \{ for JSON brace escaping."""
fpath = '/Users/hhxi/developer_hos/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicematerial-0000002236201274.md'

with open(fpath, 'rb') as f:
    data = f.read()

original = data

# Current pattern: [\"`{"frameUrl"  (bytes: 5B 5C 22 60 7B 5C 22 66 72 61 6D 65 55 72 6C)
# Need to change to: [\"\{""frameUrl"  (bytes: 5B 5C 22 5C 7B 5C 22 66 72 61 6D 65 55 72 6C)
# Replace `{ (60 7B) with \{ (5C 7B)

# Find all occurrences of `{ in the file  
import re
matches = list(re.finditer(b'\\x60\\x7b', data))
print(f"Found {len(matches)} backtick+brace occurrences")

for m in matches:
    ctx = data[max(0,m.start()-5):m.end()+20]
    print(f"  at {m.start()}: {ctx}")

data = data.replace(b'\\x60\\x7b', b'\\x5c\\x7b')

if data != original:
    with open(fpath, 'wb') as f:
        f.write(data)
    print("Fixed!")
else:
    print("No changes")
