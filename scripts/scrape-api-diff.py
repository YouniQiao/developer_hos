#!/usr/bin/env python3
"""Scrape HarmonyOS API diff pages from developer.huawei.com.

Outputs one JSON file per version to static/data/:
  api-diff-611.json, api-diff-610.json, ...

Each JSON file is an array of change records:
{
  "version": "6.1.1(24)",
  "kit": "Ability Kit",
  "operation": "新增API",
  "dts_file": "api/@ohos.app.ability.systemConfiguration.d.ts",
  "old_class": "...",
  "old_api": "...",
  "old_detail": "...",
  "new_class": "...",
  "new_api": "...",
  "new_detail": "...",
  "detail_url": "https://developer.huawei.com/.../js-apidiff-abilitykit-6111"
}
"""

import json
import os
import re
import sys
import time
import requests
from bs4 import BeautifulSoup

API_BASE = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal"
CATALOG_URL = f"{API_BASE}/getCatalogTree"
DOC_URL = f"{API_BASE}/getDocumentById"
SITE_BASE = "https://developer.huawei.com/consumer/cn/doc/harmonyos-releases"
OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "static", "data")

HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/consumer/cn/doc/",
    "Accept": "application/json, text/plain, */*",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
}

# Known version suffixes and their display names
VERSIONS = [
    ("611", "6.1.1(24)"),
    ("610", "6.1.0(23)"),
    ("602", "6.0.2(22)"),
    ("601", "6.0.1(21)"),
    ("600", "6.0.0(20)"),
]

# Sleep between API calls to be polite
DELAY = 0.5


def api_post(url, data, retries=3):
    """POST to Huawei API with retry."""
    for attempt in range(retries):
        try:
            resp = requests.post(url, headers=HEADERS, json=data, timeout=30)
            resp.raise_for_status()
            result = resp.json()
            if result.get("code") != 0:
                print(f"  API error: {result.get('message')}", file=sys.stderr)
                return None
            return result
        except Exception as e:
            if attempt < retries - 1:
                time.sleep(2 ** attempt)
            else:
                print(f"  Request failed after {retries} attempts: {e}", file=sys.stderr)
                return None


def get_catalog_tree(catalog_name, object_id):
    """Fetch the full catalog tree."""
    data = {"language": "cn", "catalogName": catalog_name, "objectId": object_id}
    result = api_post(CATALOG_URL, data)
    if result:
        return result["value"]["catalogTreeList"]
    return []


def find_node(tree, name):
    """Recursively find a node by nodeName (partial match)."""
    for node in tree:
        if name in node.get("nodeName", ""):
            return node
        children = node.get("children", [])
        if children:
            found = find_node(children, name)
            if found:
                return found
    return None


def collect_leaves(nodes, results=None):
    """Recursively collect all leaf nodes with relateDocument."""
    if results is None:
        results = []
    for node in nodes:
        rd = node.get("relateDocument", "")
        name = node.get("nodeName", "")
        children = node.get("children", [])
        if rd and not children:
            results.append((rd, name))
        if children:
            collect_leaves(children, results)
    return results


def parse_cell(cell):
    """Parse a table cell like '<p>类名：XXX；</p><p>API声明：YYY</p><p>差异内容：ZZZ</p>'.
    
    Returns dict with class_name, api_declaration, detail.
    """
    result = {"class_name": "", "api_declaration": "", "detail": ""}
    if not cell:
        return result

    text = cell.get_text(strip=True)
    if text == "NA":
        return result

    # Parse structured fields: 类名, API声明, 差异内容
    for p in cell.find_all("p"):
        content = p.get_text(strip=True)
        if content.startswith("类名："):
            result["class_name"] = content.split("：", 1)[1].rstrip("；;")
        elif content.startswith("API声明："):
            result["api_declaration"] = content.split("：", 1)[1]
        elif content.startswith("差异内容："):
            result["detail"] = content.split("：", 1)[1]

    # If no <p> tags, the whole cell content might be plain text (e.g., dts file)
    if not any(result.values()):
        result["detail"] = text

    return result


def parse_table(html_content):
    """Parse the API diff HTML table into structured records."""
    soup = BeautifulSoup(html_content, "lxml")
    table = soup.find("table")
    if not table:
        return []

    rows = table.find_all("tr")
    records = []
    
    for row in rows[1:]:  # Skip header
        cells = row.find_all(["td", "th"])
        if len(cells) < 4:
            continue

        operation = cells[0].get_text(strip=True)
        old_info = parse_cell(cells[1])
        new_info = parse_cell(cells[2])
        dts_file = cells[3].get_text(strip=True)

        # Use whichever side has data for class_name and api_declaration
        record = {
            "operation": operation,
            "dts_file": dts_file,
            "old_class": old_info["class_name"],
            "old_api": old_info["api_declaration"],
            "old_detail": old_info["detail"],
            "new_class": new_info["class_name"],
            "new_api": new_info["api_declaration"],
            "new_detail": new_info["detail"],
        }
        records.append(record)

    return records


def scrape_version(version_slug, version_name):
    """Scrape all API diff pages for one version."""
    print(f"\n{'='*60}")
    print(f"Scraping {version_name} ({version_slug})...")
    print(f"{'='*60}")

    # 1. Get catalog tree to find the API diff section
    full_tree = get_catalog_tree("harmonyos-releases", "harmonyos-releases")
    if not full_tree:
        print(f"  ⚠️  No catalog tree at all")
        return []

    # Find the specific version node first
    major_minor = version_name.split("(")[0].strip()  # "6.1.1", "6.0.2", etc.
    version_node = find_node(full_tree, major_minor)
    
    if not version_node:
        print(f"  ⚠️  Version node not found for {version_name}")
        return []

    # From the version node, find the API diff section
    apidiff_node = None
    
    def find_apidiff(nodes):
        nonlocal apidiff_node
        for node in nodes:
            rd = node.get("relateDocument", "")
            name = node.get("nodeName", "")
            # Match "apidiff" or "apidff" (typo in API data)
            if ("apid" in rd.lower() and ("diff" in rd.lower() or "dff" in rd.lower())) or ("API变更" in name):
                if rd and node.get("children"):
                    apidiff_node = node
                    return
            children = node.get("children", [])
            if children:
                find_apidiff(children)

    find_apidiff(version_node.get("children", []))
    
    if not apidiff_node:
        print(f"  ⚠️  No API diff section found in {version_name}")
        return []

    # Collect Kit pages: handle both flat and nested structures
    apidiff_children = apidiff_node.get("children", [])
    kit_nodes = []
    for child in apidiff_children:
        grandchildren = child.get("children", [])
        if grandchildren:
            # Sub-category (e.g., "6.1.0 Beta2引入的变更") — collect its leaf nodes
            kit_nodes.extend(grandchildren)
        else:
            # Direct Kit page
            kit_nodes.append(child)

    kits = []
    for node in kit_nodes:
        rd = node.get("relateDocument", "")
        name = node.get("nodeName", "")
        if rd and name:
            kits.append((rd, name))

    print(f"  Found {len(kits)} Kit pages")

    # 2. Fetch each Kit page and parse the table
    all_records = []
    for i, (rd, kit_name) in enumerate(kits):
        print(f"  [{i+1}/{len(kits)}] {kit_name} ...", end=" ", flush=True)
        time.sleep(DELAY)

        doc = api_post(DOC_URL, {
            "objectId": rd,
            "version": "",
            "catalogName": "harmonyos-releases",
            "language": "cn",
        })

        if not doc:
            print("FAILED")
            continue

        html = doc["value"]["content"]["content"]
        records = parse_table(html)

        # Enrich with version and kit info
        for rec in records:
            rec["version"] = version_name
            rec["kit"] = kit_name
            rec["detail_url"] = f"{SITE_BASE}/{rd}"

        all_records.extend(records)
        print(f"{len(records)} rows")

    return all_records


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    total = 0
    for slug, name in VERSIONS:
        records = scrape_version(slug, name)
        if not records:
            continue

        # Write versioned JSON
        out_path = os.path.join(OUTPUT_DIR, f"api-diff-{slug}.json")
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(records, f, ensure_ascii=False, indent=2)

        file_size = os.path.getsize(out_path)
        print(f"  ✅ {out_path} — {len(records)} records, {file_size/1024:.0f} KB")
        total += len(records)

    print(f"\n{'='*60}")
    print(f"Done! Total: {total} records across {len(VERSIONS)} versions")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
