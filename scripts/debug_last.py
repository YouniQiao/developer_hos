#!/usr/bin/env python3
"""Debug the last file."""
fpath = '/Users/hhxi/developer_hos/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicematerial-0000002236201274.md'

with open(fpath, 'rb') as f:
    data = f.read()

lines = data.split(b'\n')
line13 = lines[12]

print(f"Line 13 length: {len(line13)}")

# Find all {
for i, b in enumerate(line13):
    if chr(b) == '{':
        ctx = line13[max(0,i-8):i+15]
        print(f"\nBrace at byte offset {i}:")
        print(f"  Raw: {ctx}")
        print(f"  Hex: {ctx.hex()}")
        print(f"  Decoded: {ctx.decode('utf-8', errors='replace')}")
