#!/usr/bin/env python3
"""Fix the last remaining MDX failure file - binary safe."""
fpath = '/Users/hhxi/developer_hos/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicematerial-0000002236201274.md'

with open(fpath, 'rb') as f:
    content = f.read()

original = content

# Pattern: "introVideos": ["{\"frameUrl\" -> insert backtick before {
# In raw bytes: 22 69 6E 74 72 6F 56 69 64 65 6F 73 22 3A 20 5B 22 7B 5C 22 66 72 61 6D 65 55 72 6C
# That's: "introVideos": ["{\"frameUrl
needle1 = b'"introVideos": ["{\\"frameUrl\\"'
replacement1 = b'"introVideos": [\\"`{"\\"frameUrl\\"'
content = content.replace(needle1, replacement1)
if content != original:
    print(f"Fixed introVideos: found at byte offset {original.find(needle1)}")

# Pattern 2: "rcmdVideos": ["{\"frameUrl\"
needle2 = b'"rcmdVideos": ["{\\"frameUrl\\"'
replacement2 = b'"rcmdVideos": [\\"`{"\\"frameUrl\\"'
content = content.replace(needle2, replacement2)
if content != original:
    print(f"Fixed rcmdVideos: found at byte offset {original.find(needle2)}")

if content != original:
    with open(fpath, 'wb') as f:
        f.write(content)
    print("File saved!")
else:
    print("No changes made - pattern not found")
    # Debug: show what's around introVideos/rcmdVideos
    for kw in [b'introVideos', b'rcmdVideos']:
        idx = original.find(kw)
        if idx > 0:
            print(f"  {kw} at {idx}: {original[idx:idx+40]}")
