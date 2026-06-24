import sys, re
sys.path.insert(0, '.')
from sync_runner import fetch_doc

samples = [
    ('js-apis-app-ability-ability', 'harmonyos-references'),
    ('js-apis-app-ability-abilityconstant', 'harmonyos-references'),
    ('js-apis-audio', 'harmonyos-references'),
    ('js-apis-bundle', 'harmonyos-references'),
    ('js-apis-bytrace', 'harmonyos-references'),
    ('js-apis-system-capability', 'harmonyos-references'),
    ('js-apis-arkui-componentUtils', 'harmonyos-references'),
]
for oid, cat in samples:
    r = fetch_doc(oid, cat)
    if r and r.get('html'):
        html = r['html']
        title = r.get('title', '')[:40]
        text = re.sub(r'<[^>]+>', '', html)
        text = re.sub(r'\s+', ' ', text).strip()
        print(f'{title}: html={len(html):6d}  text={len(text):5d}')
    else:
        print(f'{oid}: fetch failed')
