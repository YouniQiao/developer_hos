#!/usr/bin/env python3
"""Fix last failing MDX file - escape { as \{ in JSON strings."""
fpath = '/Users/hhxi/developer_hos/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicematerial-0000002236201274.md'

with open(fpath, 'rb') as f:
    content = f.read()

original = content

# The issue: {"frameUrl" in pipe table cells. MDX interprets { as JSX.
# Fix: replace { with \{ in the JSON examples
# Pattern: "introVideos": ["{" or "rcmdVideos": ["{" 
# Just escape the { after [" 
content = content.replace(
    b'"introVideos": ["{',
    b'"introVideos": ["\\x7b'  # \\x7b is { in hex, but \x7b is what we want after "
)
# Actually, let me think about this differently.
# The raw file bytes around introVideos are:
# ...["{"frameUrl"...
# We want to escape the { as \{ -> bytes: 5C 7B
# So: ["{  (bytes 5B 22 7B) -> [\"\\{ (bytes 5B 5C 22 5C 7B)
# Hmm, that changes the quote escaping. Let me just wrap the whole JSON in backticks.

# Actually, the SIMPLEST fix: change { at position 1227 to \"\\x60{\" 
# Wait, I need to see the exact bytes. Let me look.

# Find the { that starts frameUrl JSON
for i, b in enumerate(content):
    if content[i:i+12] == b'{"\\x22frameUrl':
        print(f'Found {" pattern at byte {i}')
        # Insert a backtick before {
        content = content[:i] + b'\\x60' + content[i:]
        break

# Find rcmdVideos pattern
for i, b in enumerate(content):
    if content[i:i+12] == b'{"\\x22frameUrl' and content[max(0,i-40):i].find(b'rcmdVideos') >= 0:
        print(f'Found rcmdVideos {" at byte {i}')
        # Insert a backtick before {
        content = content[:i] + b'\\x60' + content[i:]
        break

if content != original:
    with open(fpath, 'wb') as f:
        f.write(content)
    print("File saved!")
else:
    print("No changes")
    # Debug raw bytes
    for kw in [b'introVideos', b'rcmdVideos']:
        idx = original.find(kw)
        if idx >= 0:
            # Show bytes after the [
            bracket_pos = original.find(b'[', idx)
            if bracket_pos >= 0:
                chunk = original[bracket_pos:bracket_pos+20]
                print(f'  {kw} after [: {chunk}')
                print(f'  Hex: {chunk.hex()}')
