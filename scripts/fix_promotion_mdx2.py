#!/usr/bin/env python3
"""Fix remaining MDX errors — escape bare < characters that aren't HTML tags."""
import re
from pathlib import Path

DOCS_DIR = Path(__file__).parent.parent / "docs" / "monetize" / "promotion"

# Valid HTML tag names (can start a tag after <)
VALID_TAG_STARTS = set('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/!?')
VALID_TAG_NAME = re.compile(r'^[a-zA-Z/][a-zA-Z0-9_\-]*')

def fix_file(fp):
    content = fp.read_text(encoding='utf-8')
    original = content
    
    if not content.startswith('---'):
        return False
    
    end_fm = content.find('---', 3)
    if end_fm == -1:
        return False
    frontmatter = content[:end_fm + 3]
    body = content[end_fm + 3:]
    
    lines = body.split('\n')
    in_code = False
    result = []
    
    for line in lines:
        stripped = line.strip()
        
        if stripped.startswith('```') or stripped.startswith('~~~'):
            in_code = not in_code
            result.append(line)
            continue
        
        if in_code:
            result.append(line)
            continue
        
        # Fix: escape bare < characters that aren't HTML tags
        # Strategy: find every < and check what follows
        new_chars = []
        i = 0
        while i < len(line):
            if line[i] == '<':
                # Check if this looks like an HTML tag
                rest = line[i+1:]
                if rest and rest[0] in VALID_TAG_STARTS:
                    # Could be an HTML tag — check if it's a known one
                    m = VALID_TAG_NAME.match(rest)
                    if m:
                        tag = m.group()
                        base = tag.lstrip('/').rstrip('/ ')
                        if base.lower() in {'div','span','p','br','img','a','table','tr','td','th',
                            'ul','ol','li','h1','h2','h3','h4','h5','h6','strong','em','code','pre',
                            'blockquote','hr','input','form','button','label','select','option','textarea',
                            'section','article','nav','header','footer','main','dl','dt','dd','sup','sub',
                            'b','i','u','s','col','colgroup','tbody','thead','tfoot','caption','figure',
                            'figcaption','details','summary','mark','iframe','video','audio','canvas',
                            'center','font','base','link','meta','style','abbr','address','area',
                            'aside','bdi','bdo','body','cite','col','data','datalist','del',
                            'dfn','dialog','fieldset','figcaption','figure','head','hgroup',
                            'html','ins','kbd','legend','main','map','menu','meter','noscript',
                            'object','optgroup','output','picture','portal','progress','q','rp',
                            'rt','ruby','s','samp','script','search','slot','small','source',
                            'summary','tbody','template','textarea','tfoot','thead','time','title',
                            'track','var','video','wbr'}:
                            # Valid HTML tag — keep as-is
                            new_chars.append('<')
                            i += 1
                            continue
                # Not a valid HTML tag — escape
                new_chars.append('&lt;')
                i += 1
            elif line[i] == '>':
                # Check if preceded by &lt; — skip if so
                if new_chars and new_chars[-1] == '&lt;':
                    # The > might close the &lt;
                    pass
                else:
                    # Check if this > closes a known tag
                    # Simple heuristic: if preceded by word chars and no matching <, escape
                    if new_chars:
                        last_word = ''.join(new_chars[-10:])
                        # Check if there's an unclosed < nearby
                        if '<' not in last_word:
                            new_chars.append('&gt;')
                            i += 1
                            continue
                new_chars.append('>')
                i += 1
            else:
                new_chars.append(line[i])
                i += 1
        
        result.append(''.join(new_chars))
    
    new_content = frontmatter + '\n'.join(result)
    
    if new_content != original:
        fp.write_text(new_content, encoding='utf-8')
        return True
    return False

def main():
    files = sorted(DOCS_DIR.glob("*.md"))
    fixed = 0
    for fp in files:
        if fp.stat().st_size < 200:
            continue
        try:
            if fix_file(fp):
                fixed += 1
        except Exception as e:
            print(f"  ✗ {fp.name}: {e}")
    print(f"✅ Fixed {fixed} / {len(files)} files")

if __name__ == "__main__":
    main()
