"""
Batch fill AppMarket skeleton pages from Huawei API.
"""
import json, re, subprocess, os, urllib.request
from pathlib import Path

WORKDIR = "/Users/hhxi/developer_hos"
MARKITDOWN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"
API = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
BASE = Path(WORKDIR) / "docs/distribute/app-dist/app-market"

# Build mapping: API objectId -> local file path
MAPPING = {}

# Top-level pages
for oid, path in [
    ("50103", "x50103.md"),
    ("50113", "x50113.md"),
    ("50116", "x50116.md"),
    ("privacy-label", "privacy-label.md"),
    ("TabletDevice", "TabletDevice.md"),
    # 审核政策 - top-level
    ("50104", "x50000/x50104/x50104-overview.md"),
    ("50129", "x50000/x50129/x50129-overview.md"),
    ("80301", "x50000/x80301.md"),
    ("80302", "x50000/x80302.md"),
    ("50109", "x50000/x50109.md"),
    ("50120", "x50000/x50120.md"),
    ("50125", "x50000/x50125.md"),
    ("50130", "x50000/x50130.md"),
    ("50121", "x50000/x50121.md"),
    ("50170", "x50000/x50170.md"),
    ("50106", "x50000/x50106.md"),
    ("50118", "x50000/x50118.md"),
    ("50150", "x50000/x50150.md"),
    ("50142", "x50000/x50142.md"),
    ("50166", "x50000/x50166.md"),
    ("50000-FAQ", "x50000/x50000-FAQ.md"),
]:
    MAPPING[oid] = path

# Application review guide subsections
for i in range(1, 12):
    MAPPING[f"50104-{i:02d}"] = f"x50000/x50104/x50104-{i:02d}.md"
MAPPING["50115"] = "x50000/x50104/x50115.md"
MAPPING["50117"] = "x50000/x50104/x50117.md"

# Meta-service review guide subsections
for i in range(1, 12):
    MAPPING[f"50129-{i:02d}"] = f"x50000/x50129/x50129-{i:02d}.md"

# Qualification documents
MAPPING["50111-overview"] = "x50000/x50111/x50111-overview.md"
MAPPING["50108"] = "x50000/x50111/x50108.md"
for i in range(1, 123):
    MAPPING[f"50111-{i:02d}"] = f"x50000/x50111/x50111-{i:02d}.md"

# FAQ
MAPPING["faq-overview"] = "x50000/FAQ-faq/FAQ-faq-overview.md"
for i in range(1, 12):
    MAPPING[f"faq-{i:02d}"] = f"x50000/FAQ-faq/FAQ-faq-{i:02d}.md"
MAPPING["50128"] = "x50000/FAQ-faq/x50128.md"

# Green apps
MAPPING["50124"] = "help-greenapp/x50124.md"
MAPPING["help-greenapp-faq"] = "help-greenapp/help-greenapp-faq.md"
MAPPING["50123"] = "help-greenapp/x50123.md"

# Agreements (x20240513/)
agreements = {
    "signing-guide": "signing-guide.md",
    "20208": "x20208.md", "20204": "x20204.md", "20209": "x20209.md",
    "86741055": "x86741055.md", "20215": "x20215.md",
    "76411906": "x76411906.md",
    "hwsubprocessor": "hwsubprocessor.md",
    "aspgsubprocessor": "aspgsubprocessor.md",
    "hksubprocessor": "hksubprocessor.md",
    "20211": "x20211.md", "20214": "x20214.md", "20212": "x20212.md",
    "controller": "Controller.md",
    "20213": "x20213.md",
    "64077474": "x64077474.md", "64141665": "x64141665.md",
    "70941808": "x70941808.md", "77379566": "x77379566.md",
    "jiqixuexi": "jiqixuexi.md", "5555": "x5555.md",
    "agc_prediction": "agc_Prediction.md",
    "paidservice": "PaidService.md", "locationkit": "Locationkit.md",
    "0326": "x0326.md",
    "agcprivacystatement": "AGCPrivacyStatement.md",
    "hwdbserviceagreement": "HWDBServiceAgreement.md",
    "20210812": "x20210812.md",
    "intelligentoperation": "Intelligentoperation.md",
    "1145": "x1145.md", "1008": "x1008.md", "1196": "x1196.md",
    "1110": "x1110.md", "1245": "x1245.md", "1249": "x1249.md",
    "1190": "x1190.md", "1001": "x1001.md", "1019": "x1019.md",
    "1277": "x1277.md", "1282": "x1282.md",
    "20250303": "x20250303.md",
}
for oid, fname in agreements.items():
    MAPPING[oid] = f"x20240513/{fname}"


def clean_headings(md):
    lines = md.split('\n')
    fixed = []
    for line in lines:
        m = re.match(r'^####\s+\[h2\]\s*(.*)', line)
        if m: fixed.append('### ' + m.group(1)); continue
        m = re.match(r'^####\s+(.*)', line)
        if m: fixed.append('## ' + m.group(1)); continue
        fixed.append(line)
    return '\n'.join(fixed)

def clean_mdx(md):
    md = re.sub(r'###([^ #\n])', r'### \1', md)
    lines = md.split('\n')
    fixed = []
    for line in lines:
        if line.strip().startswith('|'):
            line = re.sub(r'(?<!\w)<(?!\w)', '&lt;', line)
        fixed.append(line)
    return '\n'.join(fixed)

def fetch_convert(oid):
    req = urllib.request.Request(API,
        data=json.dumps({"objectId": oid, "version": "", "catalogName": "app", "language": "cn"}).encode(),
        headers={"Content-Type": "application/json", "Referer": "https://developer.huawei.com/consumer/cn/doc/"})
    resp = urllib.request.urlopen(req, timeout=30)
    data = json.loads(resp.read())
    html = data["value"]["content"]["content"]
    title = data["value"]["title"]
    
    if len(html) < 200:
        return title, None, True
    
    tmp_h = f"/tmp/am_{oid}.html"
    tmp_m = f"/tmp/am_{oid}.md"
    with open(tmp_h, "w") as f: f.write(html)
    subprocess.run([MARKITDOWN, tmp_h, "-o", tmp_m], check=True, capture_output=True)
    with open(tmp_m) as f: md = f.read()
    return title, md, False

def main():
    done = skipped = empty = errors = 0
    
    for oid, rel_path in sorted(MAPPING.items()):
        local = BASE / rel_path
        if not local.exists():
            skipped += 1; continue
        if local.stat().st_size > 500:
            skipped += 1; continue
        
        try:
            title, md, is_empty = fetch_convert(oid)
            if is_empty:
                empty += 1; continue
            
            md = clean_headings(md)
            md = clean_mdx(md)
            
            with open(local) as f: old = f.read()
            fm_match = re.match(r'(---\n.*?\n---)\n', old, re.DOTALL)
            if fm_match:
                fm = fm_match.group(1)
                if 'original_url' not in fm:
                    fm = fm.rstrip() + f'\noriginal_url: https://developer.huawei.com/consumer/cn/doc/app/{oid}\n---'
            else:
                fm = f'---\ntitle: "{title}"\noriginal_url: https://developer.huawei.com/consumer/cn/doc/app/{oid}\n---'
            
            with open(local, "w") as f:
                f.write(fm + '\n' + md)
            done += 1
            if done % 20 == 0:
                print(f"  ... {done}/{len(MAPPING)} done")
        except Exception as e:
            errors += 1
            if errors <= 5:
                print(f"  ✗ {oid}: {e}")
    
    print(f"\nDone: {done}, Skipped: {skipped}, Empty: {empty}, Errors: {errors}")

if __name__ == "__main__":
    main()
