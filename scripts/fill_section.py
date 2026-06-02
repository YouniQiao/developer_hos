#!/usr/bin/env python3
"""Fill content for a specific section from Huawei API.
Usage: python3 fill_section.py <section_name>
  section_name: ascf | ndk | game | atomic
"""

import httpx, json, os, re, subprocess, hashlib, html as html_mod, sys
from pathlib import Path
from urllib.parse import urlparse
from bs4 import BeautifulSoup
import time
import traceback

API = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal"
HEADERS = {"Content-Type": "application/json", "Referer": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide", "User-Agent": "Mozilla/5.0"}
MARKITDOWN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"
REPO = Path("/Users/hhxi/developer_hos")

SECTIONS = {
    "ascf": {
        "catalog_name": "atomic-ascf",
        "local_dir": "docs/dev/atomic-dev/ascf",
        "catalog_obj": "ascf-overview",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/atomic-ascf/",
        "flat": False,  # nested directory structure
    },
    "ndk": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/ndk-dev",
        "catalog_obj": "ndk-development-overview",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": True,  # flat files in single directory
        "parent_node_name": "NDK开发",
    },
    "game": {
        "catalog_name": "games-guides",
        "local_dir": "docs/dev/game-dev",
        "catalog_obj": "games-center-introduction-0000002320553253",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/games-guides/",
        "flat": True,
    },
    "atomic": {
        "catalog_name": "atomic-guides",
        "local_dir": "docs/dev/atomic-dev",
        "catalog_obj": "atomic-service-definition",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/atomic-guides/",
        "flat": False,
    },
}


def log(msg):
    print(f"[{time.strftime('%H:%M:%S')}] {msg}", flush=True)


def collect_docs(nodes):
    docs = []
    for n in nodes:
        rd = n.get("relateDocument")
        if rd:
            docs.append({"id": rd, "name": n.get("nodeName", "")})
        if n.get("children"):
            docs.extend(collect_docs(n["children"]))
    return docs


def get_catalog_tree(catalog_name, object_id):
    resp = httpx.post(
        f"{API}/getCatalogTree",
        json={"language": "cn", "catalogName": catalog_name, "objectId": object_id},
        headers=HEADERS, timeout=30,
    )
    return resp.json()["value"]["catalogTreeList"]


def find_node(nodes, target_name):
    for n in nodes:
        if n.get("nodeName") == target_name:
            return n
        if n.get("children"):
            r = find_node(n["children"], target_name)
            if r:
                return r
    return None


def fetch_doc(object_id, catalog_name):
    """Fetch document HTML from API. Retry up to 3 times."""
    for attempt in range(3):
        try:
            resp = httpx.post(
                f"{API}/getDocumentById",
                json={"objectId": object_id, "version": "", "catalogName": catalog_name, "language": "cn"},
                headers=HEADERS, timeout=30,
            )
            data = resp.json()
            content = data.get("value", {}).get("content", {})
            return {
                "title": data.get("value", {}).get("title", ""),
                "html": content.get("content", ""),
                "updated": data.get("value", {}).get("updatedDate", ""),
            }
        except Exception as e:
            if attempt < 2:
                time.sleep(2)
            else:
                raise


def process_html(html_content, img_dir, doc_id):
    """Download images and detect merged cells. Returns (modified_html, has_merged)."""
    if not html_content:
        return html_content, False

    soup = BeautifulSoup(html_content, "html.parser")

    # Download images
    img_dir.mkdir(parents=True, exist_ok=True)
    for img in soup.find_all("img"):
        src = html_mod.unescape(img.get("src", ""))
        if not src:
            continue
        try:
            url_path = urlparse(src).path
            h = hashlib.md5(url_path.encode()).hexdigest()[:8]
            ext = os.path.splitext(url_path)[1] or ".png"
            local_name = f"{h}{ext}"
            local_path = img_dir / local_name

            if not local_path.exists():
                resp = httpx.get(src, timeout=15, follow_redirects=True)
                if resp.status_code == 200 and len(resp.content) > 200:
                    local_path.write_bytes(resp.content)

            img["src"] = f"./img/{local_name}"
        except Exception:
            pass  # keep original src on failure

    # Detect merged cells
    has_merged = False
    for td in soup.find_all(["td", "th"]):
        if td.get("rowspan") or td.get("colspan"):
            has_merged = True
            break

    return str(soup), has_merged


def html_to_md(html_content, title, source_url, has_merged_cells=False):
    """Convert HTML to markdown with post-processing."""
    if not html_content:
        fm = f'---\ntitle: "{title}"\noriginal_url: {source_url}\n---\n\n# {title}\n\n> 该页面内容暂未从官方获取。\n'
        return fm

    tmp = Path(f"/tmp/hos_doc_{os.getpid()}_{hashlib.md5(html_content.encode()).hexdigest()[:8]}.html")
    tmp.write_text(html_content, encoding="utf-8")

    try:
        result = subprocess.run([MARKITDOWN, str(tmp)], capture_output=True, text=True, timeout=30)
        md = result.stdout
    finally:
        tmp.unlink(missing_ok=True)

    # Post-process headings
    lines = md.split("\n")
    new_lines = []
    for line in lines:
        m = re.match(r"^####\s+\[h([1-6])\]\s*(.*)", line)
        if m:
            new_level = int(m.group(1)) + 1
            new_lines.append("#" * new_level + " " + m.group(2))
            continue
        m = re.match(r"^####\s+(.*)", line)
        if m:
            new_lines.append("## " + m.group(1))
            continue
        new_lines.append(line)
    md = "\n".join(new_lines)

    # Fix ###xxx → ### xxx
    md = re.sub(r"^(###)([^\s#])", r"### \2", md, flags=re.MULTILINE)

    # Fix ****Title**** → #### Title (bold-only pseudo-headings)
    md = re.sub(r"^\*\*\*\*(.+?)\*\*\*\*$", r"#### \1", md, flags=re.MULTILINE)

    # Fix empty headings
    md = re.sub(r"^(#+)\s*$", "", md, flags=re.MULTILINE)

    # Collapse excessive newlines
    md = re.sub(r"\n{4,}", "\n\n\n", md)

    # Build frontmatter
    title_safe = title.replace('"', "'").replace("\\", "")
    fm = f'---\ntitle: "{title_safe}"\noriginal_url: {source_url}\n'
    if has_merged_cells:
        fm += "has_merged_cells: true\n"
    fm += "---\n\n"

    # Remove duplicate h1 (use frontmatter title)
    md = re.sub(r"^# .*\n", "", md, count=1)
    md = md.strip()

    return fm + md + "\n"


def get_output_path(doc_id, doc_name, section_cfg, all_catalog_docs):
    """
    Determine output path for a document.
    - For nested sections (ascf, atomic): maintain directory structure based on catalog
    - For flat sections (ndk, game): use local_dir/<doc_id>.md
    """
    local_dir = REPO / section_cfg["local_dir"]

    if section_cfg["flat"]:
        return local_dir / f"{doc_id}.md"
    else:
        # For nested sections, find the doc in existing files
        for existing in local_dir.rglob("*.md"):
            if existing.stem == doc_id:
                return existing
        # If not found, create in top-level
        return local_dir / f"{doc_id}.md"


def main():
    section = sys.argv[1] if len(sys.argv) > 1 else "ascf"
    if section not in SECTIONS:
        print(f"Unknown section: {section}. Available: {list(SECTIONS.keys())}")
        sys.exit(1)

    cfg = SECTIONS[section]
    log(f"Starting section: {section} ({cfg['catalog_name']})")

    # Get catalog tree
    tree = get_catalog_tree(cfg["catalog_name"], cfg["catalog_obj"])

    # For NDK, find the specific NDK开发 node
    if section == "ndk":
        ndk_node = find_node(tree, cfg["parent_node_name"])
        if ndk_node:
            catalog_docs = collect_docs([ndk_node])
        else:
            catalog_docs = collect_docs(tree)
    else:
        catalog_docs = collect_docs(tree)

    log(f"Catalog docs: {len(catalog_docs)}")

    # Build index of local files by objectId
    local_dir = REPO / cfg["local_dir"]
    local_index = {}
    if local_dir.exists():
        for md_file in local_dir.rglob("*.md"):
            local_index[md_file.stem] = md_file

    # Determine which docs to process
    to_process = []
    for doc in catalog_docs:
        oid = doc["id"]
        local_path = local_index.get(oid)
        source_url = cfg["source_prefix"] + oid

        if local_path is None:
            # Missing file - need to create
            to_process.append({"doc": doc, "path": get_output_path(oid, doc["name"], cfg, catalog_docs), "source_url": source_url, "is_new": True})
        else:
            # Check if it's a shell
            content = local_path.read_text(encoding="utf-8")
            if content.startswith("---"):
                end = content.find("---", 3)
                body = content[end + 3 :] if end > 0 else content
            else:
                body = content
            body_text = re.sub(r"^#+\s.*$", "", body, flags=re.MULTILINE).strip()
            if len(body_text) < 50:
                to_process.append({"doc": doc, "path": local_path, "source_url": source_url, "is_new": False})

    new_count = sum(1 for d in to_process if d["is_new"])
    update_count = sum(1 for d in to_process if not d["is_new"])
    log(f"To process: {new_count} new + {update_count} update = {len(to_process)} total")

    # Process each document
    success = 0
    failed = 0
    images_total = 0

    for i, item in enumerate(to_process):
        doc = item["doc"]
        oid = doc["id"]
        out_path = item["path"]
        source_url = item["source_url"]

        try:
            log(f"  [{i + 1}/{len(to_process)}] {doc['name'][:40]} ({oid[:40]})")

            # Fetch
            fetched = fetch_doc(oid, cfg["catalog_name"])

            # Process HTML (images + merged cells)
            img_dir = out_path.parent / "img"
            html, has_merged = process_html(fetched["html"], img_dir, oid)

            # Count images
            img_count = len(list(img_dir.glob("*"))) if img_dir.exists() else 0
            images_total += img_count

            # Convert to MD
            md_content = html_to_md(html, fetched["title"], source_url, has_merged)

            # Write
            out_path.parent.mkdir(parents=True, exist_ok=True)
            out_path.write_text(md_content, encoding="utf-8")

            success += 1
        except Exception as e:
            log(f"  ❌ Failed: {e}")
            failed += 1

        # Rate limit
        time.sleep(0.5)

    log(f"✅ Done! Success: {success}, Failed: {failed}, Images: {images_total}")


if __name__ == "__main__":
    main()
