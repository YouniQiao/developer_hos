#!/usr/bin/env python3
"""Fill content for a specific section from Huawei API.
Usage: python3 fill_section.py <section_name>
  section_name: ascf | ndk | game | atomic | industry | testing | faq
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
    "industry": {
        "catalog_name": "architecture-guides",
        "local_dir": "docs/dev/industry-solutions",
        "catalog_obj": "practice-auto-app-architecture-v1-0000001903742656",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/architecture-guides/",
        "flat": True,  # flat files in single directory, named by objectId
    },
    "testing": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/testing",
        "catalog_obj": "application-dev-guide",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": False,  # nested, names may not match objectIds perfectly
        "parent_node_name": "应用测试",
    },
    "faq": {
        "catalog_name": "harmonyos-faqs",
        "local_dir": "docs/FAQ",
        "catalog_obj": "faqs-purax-2",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/",
        "flat": False,  # nested directory structure
    },
    "appfw": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/app-dev/application-framework",
        "catalog_obj": "abilitykit-overview",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": False,  # nested, names match relateDocument stems
        "parent_node_name": "应用框架",
    },
    "system": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/app-dev/system",
        "catalog_obj": "abilitykit-overview",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": False,
        "parent_node_name": "系统",
    },
    "media": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/app-dev/media",
        "catalog_obj": "abilitykit-overview",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": False,
        "parent_node_name": "媒体",
    },
    "graphics": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/app-dev/graphics",
        "catalog_obj": "abilitykit-overview",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": False,
        "parent_node_name": "图形",
    },
    "appsvc": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/app-dev/application-services",
        "catalog_obj": "abilitykit-overview",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": False,
        "parent_node_name": "应用服务",
    },
    "ai": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/app-dev/ai",
        "catalog_obj": "abilitykit-overview",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": False,
        "parent_node_name": "AI",
    },
    "quickstart": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/app-dev/getting-started/quick-start",
        "catalog_obj": "start-overview",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": False,
        "parent_node_name": "快速入门",
    },
    "devfund": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/app-dev/getting-started/dev-fundamentals",
        "catalog_obj": "application-package-overview",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": False,
        "parent_node_name": "开发基础知识",
    },
    "resaccess": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/app-dev/getting-started/resource-access",
        "catalog_obj": "resource-categories-and-access",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": True,
        "parent_node_name": "资源分类与访问",
    },
    "glossary": {
        "catalog_name": "harmonyos-guides",
        "local_dir": "docs/dev/app-dev/getting-started/glossary",
        "catalog_obj": "glossary",
        "source_prefix": "https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/",
        "flat": True,
        "parent_node_name": "HarmonyOS术语",
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
    """Download images and detect merged cells. Returns (modified_html, has_merged, codehub_links).
    codehub_links is a list of (filename, url) tuples extracted from <pre codehub="..."> tags.
    """
    if not html_content:
        return html_content, False, []

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

    # Extract codehub source links from <pre codehub="..."> tags
    codehub_links = []
    codehub_idx = 0
    for pre in soup.find_all("pre"):
        codehub_url = pre.get("codehub", "")
        if codehub_url:
            # Extract filename from URL (last segment before #)
            filename = codehub_url.rstrip("/").rsplit("/", 1)[-1]
            if "#" in filename:
                filename = filename.split("#")[0]
            codehub_links.append((filename, codehub_url))
            # Add a marker comment after the pre tag that will survive markitdown
            marker = soup.new_string(f"<!--CODEHUB:{codehub_idx}-->")
            pre.insert_after(marker)
            codehub_idx += 1

    return str(soup), has_merged, codehub_links


def html_to_md(html_content, title, source_url, has_merged_cells=False, codehub_links=None):
    """Convert HTML to markdown with post-processing.
    codehub_links is a list of (filename, url) tuples for <SourceLink> injection."""
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

    # Replace CODEHUB markers with SourceLink HTML (raw HTML for format:'md' compatibility)
    if codehub_links:
        for idx, (filename, url) in enumerate(codehub_links):
            marker = f"<!--CODEHUB:{idx}-->"
            # Use raw HTML since format is 'md' (not MDX) — JSX components won't work
            replacement = (
                f'\n\n<div class="source-link-wrapper">'
                f'<a href="{url}" target="_blank" rel="noopener noreferrer" class="source-link">'
                f'<svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" '
                f'fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" '
                f'strokeLinejoin="round">'
                f'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />'
                f'<polyline points="15 3 21 3 21 9" />'
                f'<line x1="10" y1="14" x2="21" y2="3" />'
                f'</svg>'
                f' 查看源码：{filename}'
                f'</a>'
                f'</div>\n'
            )
            md = md.replace(marker, replacement)

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

    # For sections that target a sub-node, find the parent node
    if cfg.get("parent_node_name"):
        parent_node = find_node(tree, cfg["parent_node_name"])
        if parent_node:
            catalog_docs = collect_docs([parent_node])
            log(f"Found parent node '{cfg['parent_node_name']}', docs: {len(catalog_docs)}")
        else:
            log(f"WARNING: parent node '{cfg['parent_node_name']}' not found, using full tree")
            catalog_docs = collect_docs(tree)
    else:
        catalog_docs = collect_docs(tree)

    log(f"Catalog docs: {len(catalog_docs)}")

    # Build index of local files by title (for shell-matching sections)
    local_dir = REPO / cfg["local_dir"]
    local_by_title = {}  # title -> (path, displayed_sidebar)
    local_paths_set = set()
    if local_dir.exists():
        for md_file in local_dir.rglob("*.md"):
            local_paths_set.add(md_file)
            content = md_file.read_text(encoding="utf-8")
            title = None
            displayed_sidebar = None
            for line in content.split("\n")[:10]:
                if line.startswith("title:"):
                    title = line.split("title:", 1)[1].strip().strip('"')
                if line.startswith("displayed_sidebar:"):
                    displayed_sidebar = line.split("displayed_sidebar:", 1)[1].strip()
            if title:
                local_by_title[title] = (md_file, displayed_sidebar)

    # Determine which docs to process
    to_process = []
    matched_paths = set()
    # Pre-build stem index for fast lookup
    local_by_stem = {}
    if local_dir.exists():
        for md_file in local_dir.rglob("*.md"):
            local_by_stem[md_file.stem] = md_file

    for doc in catalog_docs:
        oid = doc["id"]
        doc_name = doc["name"]
        source_url = cfg["source_prefix"] + oid

        local_path = None
        displayed_sidebar = None
        match_method = None  # 'stem' or 'title' or None

        # 1) Try exact stem match first (most reliable)
        stem_match = local_by_stem.get(oid)
        if stem_match:
            local_path = stem_match
            matched_paths.add(local_path)
            # Read displayed_sidebar from frontmatter
            content = local_path.read_text(encoding="utf-8")
            for line in content.split("\n")[:10]:
                if line.startswith("displayed_sidebar:"):
                    displayed_sidebar = line.split("displayed_sidebar:", 1)[1].strip()
                    break
            match_method = 'stem'
        else:
            # 2) Try title match as fallback (for truncated/shell filenames)
            # ONLY if the title is unique in the catalog — otherwise create new
            title_match = local_by_title.get(doc_name)
            if title_match:
                candidate_path, cand_sidebar = title_match
                # Check if the matched file's stem matches our doc_id
                # If NOT, this is a title collision — create a new file instead
                if candidate_path.stem == oid:
                    local_path = candidate_path
                    displayed_sidebar = cand_sidebar
                    matched_paths.add(local_path)
                # else: title collision, fall through to create new file

        if local_path:
            # Check if it's a shell (needs filling)
            content = local_path.read_text(encoding="utf-8")
            if content.startswith("---"):
                end = content.find("---", 3)
                body = content[end + 3 :] if end > 0 else content
            else:
                body = content
            body_text = re.sub(r"^#+\s.*$", "", body, flags=re.MULTILINE).strip()
            if len(body_text) < 50:
                to_process.append({"doc": doc, "path": local_path, "source_url": source_url,
                                    "is_new": False, "displayed_sidebar": displayed_sidebar})
        else:
            # 3) Create new file
            new_path = get_output_path(oid, doc_name, cfg, catalog_docs)
            to_process.append({"doc": doc, "path": new_path, "source_url": source_url,
                                "is_new": True, "displayed_sidebar": None})

    # Delete local files that don't match any catalog doc (cleanup shells)
    for local_path in local_paths_set - matched_paths:
        log(f"  🗑️  Deleting orphan: {local_path.relative_to(local_dir)}")
        local_path.unlink()

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

            # Process HTML (images + merged cells + codehub source links)
            img_dir = out_path.parent / "img"
            html, has_merged, codehub_links = process_html(fetched["html"], img_dir, oid)

            # Count images
            img_count = len(list(img_dir.glob("*"))) if img_dir.exists() else 0
            images_total += img_count

            # Convert to MD
            md_content = html_to_md(html, fetched["title"], source_url, has_merged, codehub_links)

            # Preserve displayed_sidebar from shell frontmatter
            displayed_sidebar = item.get("displayed_sidebar")
            if displayed_sidebar:
                md_content = md_content.replace(
                    "---\n",
                    f"---\ndisplayed_sidebar: {displayed_sidebar}\n",
                    1
                )

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
