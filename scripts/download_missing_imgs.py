#!/usr/bin/env python3
"""Re-fetch docs that missed images and download images."""
import json, os, re, subprocess, hashlib, urllib.request, sys
from pathlib import Path
from bs4 import BeautifulSoup
import html as html_mod
from urllib.parse import urlparse

DOCS_DIR = Path("/Users/hhxi/developer_hos/docs/dev/app-dev/multi-device")
IMG_DIR = DOCS_DIR / "img"
IMG_DIR.mkdir(parents=True, exist_ok=True)

API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
HEADERS = {"Content-Type": "application/json", "Referer": "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-multi-device-overview"}
MARKITDOWN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"

existing_imgs = {f.name for f in IMG_DIR.iterdir() if f.suffix.lower() in ('.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg')}

# The 28 docs from the second batch (those that might miss images)
RE_FETCH = [
    "bpta-multi-device-window-direction", "bpta-multi-device-window-immersive",
    "bpta-multi-interaction", "bpta-multi-music-app-overview",
    "bpta-multi-settings-application-page", "bpta-multi_game",
    "bpta-pad-guide", "bpta-pc-guide", "bpta-purax-guide",
    "bpta-smartwatch", "bpta-smartwatchnavigation",
    "bpta-unified-drag-and-drop", "bpta-vdeocast", "bpta-web-adaptation",
    "multi-business-office", "multi-communication-app", "multi-community-app",
    "multi-convenient-life", "multi-financial-app", "multi-news-read",
    "multi-picture-app", "multi-shopping-price-comparison",
    "multi-short-video-app", "multi-ticket-class",
    "multi-travel-accommodation", "multi-travel-navigation",
    "multi-video-app", "bpta-multi-mobile-payment",
]

downloaded = 0
skipped = 0
errors = 0

for doc_id in RE_FETCH:
    try:
        body = json.dumps({"objectId": doc_id, "version": "", "catalogName": "best-practices", "language": "cn"}).encode()
        req = urllib.request.Request(API_URL, data=body, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=20)
        data = json.loads(resp.read())
        html_content = data["value"]["content"]["content"]
        
        soup = BeautifulSoup(html_content, 'html.parser')
        for img in soup.find_all('img'):
            src = html_mod.unescape(img.get('src', ''))
            if not src:
                continue
            h = hashlib.md5(urlparse(src).path.encode()).hexdigest()[:8]
            ext = os.path.splitext(urlparse(src).path)[1] or '.png'
            local_name = f"{h}{ext}"
            if local_name not in existing_imgs:
                try:
                    img_req = urllib.request.Request(src, headers={"Referer": "https://developer.huawei.com/"})
                    img_resp = urllib.request.urlopen(img_req, timeout=10)
                    img_data = img_resp.read()
                    if len(img_data) > 200:
                        (IMG_DIR / local_name).write_bytes(img_data)
                        existing_imgs.add(local_name)
                        downloaded += 1
                except:
                    skipped += 1
        
        sys.stdout.write(f"\r{doc_id}: +{downloaded} imgs")
        sys.stdout.flush()
    except Exception as e:
        errors += 1
        sys.stdout.write(f"\n  ❌ {doc_id}: {e}\n")

print(f"\n\nDone: {downloaded} downloaded, {skipped} skipped, {errors} errors")
print(f"Total images: {len(existing_imgs)}")
