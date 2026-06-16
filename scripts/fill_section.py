#!/usr/bin/env python3
"""Fill content for a specific section from Huawei API.
Usage: python3 fill_section.py <section_name>
  section_name: ascf | ndk | game | atomic | industry | testing | faq
"""

import httpx, json, os, re, subprocess, hashlib, html as html_mod, sys, argparse, shutil
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


def collect_docs(nodes, intermediates_by_id=None):
    """Collect docs from catalog tree. Returns (leaf_docs, intermediate_docs).
    leaf_docs: [{id, name}] — pages with no children
    intermediate_docs: [{id, name, children_count}] — nodes that are both a page AND a container
    """
    if intermediates_by_id is None:
        intermediates_by_id = {}
    leaf_docs = []
    for n in nodes:
        rd = n.get("relateDocument")
        children = n.get("children")
        if rd:
            if children:
                # Intermediate node: has page content AND children
                intermediates_by_id[rd] = {
                    "id": rd, "name": n.get("nodeName", ""),
                    "children_count": len(children)
                }
            else:
                leaf_docs.append({"id": rd, "name": n.get("nodeName", "")})
        if children:
            leaf_docs.extend(collect_docs(children, intermediates_by_id))
    return leaf_docs


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


def html_signature(html):
    """Compute content fingerprint for change detection (same as sync_diff.py)."""
    if not html:
        return ""
    text = re.sub(r"<[^>]+>", "", html)
    text = re.sub(r"\s+", " ", text).strip()
    return hashlib.md5(text.encode()).hexdigest()[:12]


def print_report(results):
    """Print a structured box-drawing report to terminal."""
    n_skipped = len(results["skipped"])
    n_orphan = len(results["orphaned"])
    n_failed = len(results["failed"])
    n_images = results["images"]

    # Build title
    kit = results.get("kit")
    title = kit or results["section"]
    short_title = kit.split("（")[0] if kit and "（" in kit else title
    suffix = " (DRY RUN)" if results.get("dry_run") else " 同步报告"
    header = f" {short_title}{suffix} "
    bar = "═" * 46
    line = f"\n╔{bar}╗\n║{header.center(46)}║\n╠{bar}╣"

    rows = [
        ("🆕 新增叶页面", len(results["new_leaf"]) + (0 if results.get("dry_run") else 0)),
        ("📁 新增中间节点", len(results["new_intermediate"])),
        ("🔄 内容变更", len(results.get("content_changed", []))),
        ("📝 内容更新", len(results["updated"]) if not results.get("dry_run") else 0),
        ("⏭️ 跳过(太薄)", n_skipped if not results.get("dry_run") else 0),
        ("🗑️ 孤儿清理", n_orphan if not results.get("dry_run") else 0),
        ("❌ 失败", n_failed if not results.get("dry_run") else 0),
        ("📷 图片下载", n_images if not results.get("dry_run") else 0),
    ]
    for label, count in rows:
        if count > 0 or label in ("❌ 失败",):
            line += f"\n║  {label:<16} {count:<26}║"

    line += f"\n╚{bar}╝"

    # Details
    def fmt_items(label, items):
        if not items:
            return ""
        out = f"\n{label} ({len(items)})\n"
        for item in items:
            if len(item) == 3:
                oid, name, path = item
                out += f"   📄 {name}\n      → {path}\n"
            else:
                out += f"   {item}\n"
        return out

    details = ""
    details += fmt_items("🆕 新增叶页面", results["new_leaf"])
    details += fmt_items("📁 新增中间节点", results["new_intermediate"])
    if results.get("content_changed"):
        details += fmt_items("🔄 内容变更（hash不同）", results["content_changed"])
    details += fmt_items("📝 内容更新", results["updated"])
    details += fmt_items("⏭️ 跳过", results["skipped"])
    details += fmt_items("❌ 失败", results["failed"])
    if results["orphaned"]:
        details += "\n"
        details += f"🗑️ 清理 ({len(results['orphaned'])}):"
        for o in results["orphaned"][:10]:
            details += f"\n   {o}"
        if len(results["orphaned"]) > 10:
            details += f"\n   ... +{len(results['orphaned']) - 10} more"

    print(line)
    if details:
        print(details)
    print()


def save_report(results):
    """Save a markdown report to .hermes/sync-reports/."""
    report_dir = REPO / ".hermes" / "sync-reports"
    report_dir.mkdir(parents=True, exist_ok=True)

    ts = time.strftime("%Y%m%d_%H%M%S")
    kit = results.get("kit")
    tag = kit.split("（")[0].replace(" ", "-").lower() if kit else results["section"]
    filename = f"{ts}_{tag}.md"
    filepath = report_dir / filename

    lines = []
    title = kit or results["section"]
    suffix = " (DRY RUN)" if results.get("dry_run") else " 同步报告"
    lines.append(f"# {title}{suffix}")
    lines.append(f"**时间:** {time.strftime('%Y-%m-%d %H:%M:%S')}")
    lines.append(f"**分类:** {results['section']}")
    if kit:
        lines.append(f"**Kit:** {kit}")
    if results.get("dry_run"):
        lines.append("**模式:** 预览（未修改任何文件）")
    lines.append("")

    sections = [
        ("## 🆕 新增叶页面", results["new_leaf"]),
        ("## 📁 新增中间节点", results["new_intermediate"]),
    ]
    if results.get("content_changed"):
        sections.append(("## 🔄 内容变更（hash不同）", results["content_changed"]))
    sections.extend([
        ("## 📝 内容更新", results["updated"]),
        ("## ⏭️ 跳过", results["skipped"]),
        ("## ❌ 失败", results["failed"]),
    ])

    for heading, items in sections:
        if items:
            lines.append(heading)
            lines.append("")
            for item in items:
                if len(item) == 3:
                    oid, name, path = item
                    lines.append(f"- **{name}** (`{oid}`) → `{path}`")
                else:
                    lines.append(f"- {item}")
            lines.append("")

    if results["orphaned"]:
        lines.append("## 🗑️ 孤儿清理")
        lines.append("")
        for o in results["orphaned"]:
            lines.append(f"- {o}")
        lines.append("")

    stats = f"""## 📊 统计

| 类型 | 数量 |
|------|------|
| 新增叶页面 | {len(results['new_leaf'])} |
| 新增中间节点 | {len(results['new_intermediate'])} |
| 内容变更 | {len(results.get('content_changed', []))} |
| 内容更新 | {len(results['updated'])} |
| 跳过 | {len(results['skipped'])} |
| 孤儿清理 | {len(results['orphaned'])} |
| 失败 | {len(results['failed'])} |
| 图片 | {results['images']} |
"""
    lines.append(stats)

    filepath.write_text("\n".join(lines), encoding="utf-8")
    log(f"📝 Report saved: {filepath}")


def main():
    parser = argparse.ArgumentParser(description="Fill content from Huawei API")
    parser.add_argument("section", nargs="?", default="ascf",
                        help=f"Section name: {list(SECTIONS.keys())}")
    parser.add_argument("--kit", help="Kit name within parent section (e.g. 'Account Kit（华为账号服务）')")
    parser.add_argument("--dry-run", action="store_true",
                        help="Preview changes only: detect new/changed pages without writing files")
    args = parser.parse_args()

    section = args.section
    if section not in SECTIONS:
        print(f"Unknown section: {section}. Available: {list(SECTIONS.keys())}")
        sys.exit(1)

    cfg = SECTIONS[section]
    kit_hint = f" > {args.kit}" if args.kit else ""
    log(f"Starting section: {section}{kit_hint} ({cfg['catalog_name']})")

    # Get catalog tree
    tree = get_catalog_tree(cfg["catalog_name"], cfg["catalog_obj"])

    # For sections that target a sub-node, find the parent node
    intermediates = {}  # {id: {id, name, children_count}}
    if cfg.get("parent_node_name"):
        parent_node = find_node(tree, cfg["parent_node_name"])
        if parent_node:
            if args.kit:
                # Drill into specific Kit
                kit_node = find_node(parent_node.get("children", []), args.kit)
                if kit_node:
                    target_nodes = [kit_node]
                    log(f"Found kit: {args.kit}")
                else:
                    log(f"WARNING: kit '{args.kit}' not found, falling back to parent")
                    target_nodes = [parent_node]
            else:
                target_nodes = [parent_node]
            catalog_docs = collect_docs(target_nodes, intermediates)
            log(f"Found parent node '{cfg['parent_node_name']}', docs: {len(catalog_docs)}")
        else:
            log(f"WARNING: parent node '{cfg['parent_node_name']}' not found, using full tree")
            catalog_docs = collect_docs(tree, intermediates)
    else:
        catalog_docs = collect_docs(tree, intermediates)

    log(f"Catalog leaf docs: {len(catalog_docs)}, intermediates: {len(intermediates)}")

    # Build index of local files by title (for shell-matching sections)
    local_dir = REPO / cfg["local_dir"]
    local_by_title = {}  # title -> (path, displayed_sidebar)
    local_paths_set = set()
    if local_dir.exists():
        for md_file in local_dir.rglob("*.md"):
            # Skip _index.md files (intermediate node pages)
            if md_file.name == "_index.md":
                continue
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

    # Track results (defined early for hash comparison in matching loop)
    results = {
        "new_leaf": [], "new_intermediate": [], "updated": [],
        "content_changed": [], "skipped": [], "failed": [],
        "orphaned": [], "images": 0,
        "section": section, "kit": args.kit, "dry_run": args.dry_run,
    }

    for doc in catalog_docs:
        oid = doc["id"]
        doc_name = doc["name"]
        source_url = cfg["source_prefix"] + oid

        local_path = None
        displayed_sidebar = None

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
        else:
            # 2) Try title match as fallback
            title_match = local_by_title.get(doc_name)
            if title_match:
                candidate_path, cand_sidebar = title_match
                if candidate_path.stem == oid:
                    local_path = candidate_path
                    displayed_sidebar = cand_sidebar
                    matched_paths.add(local_path)

        if local_path:
            # Check if it's a shell (needs filling)
            content = local_path.read_text(encoding="utf-8")
            if content.startswith("---"):
                end = content.find("---", 3)
                body = content[end + 3:] if end > 0 else content
            else:
                body = content
            body_text = re.sub(r"^#+\s.*$", "", body, flags=re.MULTILINE).strip()
            if len(body_text) < 50:
                to_process.append({"doc": doc, "path": local_path, "source_url": source_url,
                                    "is_new": False, "is_intermediate": False, "displayed_sidebar": displayed_sidebar})
                continue

            # Existing page with content — check if upstream changed
            # Extract upstream_hash from frontmatter
            old_hash = ""
            for line in content.split("\n")[:15]:
                if line.startswith("upstream_hash:"):
                    old_hash = line.split("upstream_hash:", 1)[1].strip()
                    break
            if old_hash:
                # Fetch current content for hash comparison
                try:
                    fetched = fetch_doc(oid, cfg["catalog_name"])
                    new_hash = html_signature((fetched or {}).get("html", ""))
                    if new_hash and old_hash != new_hash:
                        if args.dry_run:
                            results["content_changed"].append((oid, doc_name, str(local_path.relative_to(local_dir))))
                        else:
                            to_process.append({"doc": doc, "path": local_path, "source_url": source_url,
                                "is_new": False, "is_intermediate": False, "displayed_sidebar": displayed_sidebar,
                                "hash_changed": True})
                except Exception:
                    pass  # hash check failure is non-fatal
        else:
            # 3) Create new file
            new_path = get_output_path(oid, doc_name, cfg, catalog_docs)
            to_process.append({"doc": doc, "path": new_path, "source_url": source_url,
                                "is_new": True, "is_intermediate": False, "displayed_sidebar": None})

    # 4) Handle intermediate nodes: create _index.md if substantial content
    #    Place in the correct directory based on stem matching
    intermediate_to_process = []
    for iid, inode in intermediates.items():
        stem_match = local_by_stem.get(iid)
        if stem_match:
            # Already exists as a file, check if shell
            matched_paths.add(stem_match)
            content = stem_match.read_text(encoding="utf-8")
            body = content.split("---", 2)[2] if content.count("---") >= 2 else content
            body_text = re.sub(r"^#+\s.*$", "", body, flags=re.MULTILINE).strip()
            if len(body_text) < 50:
                intermediate_to_process.append({"doc": {"id": iid, "name": inode["name"]},
                    "path": stem_match, "source_url": cfg["source_prefix"] + iid,
                    "is_new": False, "is_intermediate": True, "displayed_sidebar": None})
        else:
            # Find matching directory: search for directory named after this ID
            dir_path = None
            for d in local_dir.rglob(iid):
                if d.is_dir():
                    dir_path = d
                    break
            if not dir_path:
                dir_path = local_dir / iid
            dir_path.mkdir(parents=True, exist_ok=True)
            index_path = dir_path / "_index.md"
            intermediate_to_process.append({"doc": {"id": iid, "name": inode["name"]},
                "path": index_path, "source_url": cfg["source_prefix"] + iid,
                "is_new": True, "is_intermediate": True, "displayed_sidebar": None})

    to_process.extend(intermediate_to_process)

    # Delete local files that don't match any catalog doc (cleanup shells)
    # When --kit is specified, skip orphan cleanup to avoid affecting other Kits
    orphaned_paths = []
    if not args.kit:
        for local_path in local_paths_set - matched_paths:
            content = local_path.read_text(encoding="utf-8")
            # Skip hand-written content: no original_url in frontmatter
            has_original = "original_url:" in content[:500]
            if not has_original and len(content) > 200:
                log(f"  ⚠️  SKIP orphan (looks hand-written): {local_path.relative_to(local_dir)}")
                continue
            # Soft-delete to trash directory
            trash_dir = REPO / ".trash" / time.strftime("%Y%m%d_%H%M%S")
            trash_dir.mkdir(parents=True, exist_ok=True)
            relocated = trash_dir / local_path.name
            log(f"  🗑️  Trash orphan: {local_path.relative_to(local_dir)} → .trash/")
            shutil.move(str(local_path), str(relocated))
            orphaned_paths.append(str(local_path.relative_to(local_dir)))
    else:
        log("Skipping orphan cleanup (--kit mode: scoped to selected Kit only)")

    new_count = sum(1 for d in to_process if d["is_new"])
    update_count = sum(1 for d in to_process if not d["is_new"])
    inter_count = sum(1 for d in to_process if d["is_intermediate"])
    log(f"To process: {new_count} new + {update_count} update ({inter_count} intermediate) = {len(to_process)} total")

    # Merge orphaned paths into results and start processing
    results["orphaned"] = orphaned_paths

    # Process each document
    if args.dry_run:
        # Populate results from the matching phase
        for item in to_process:
            if item.get("hash_changed"):
                results["content_changed"].append((item["doc"]["id"], item["doc"]["name"], str(item["path"].relative_to(local_dir))))
            elif item["is_new"]:
                if item["is_intermediate"]:
                    results["new_intermediate"].append((item["doc"]["id"], item["doc"]["name"], str(item["path"].relative_to(local_dir))))
                else:
                    results["new_leaf"].append((item["doc"]["id"], item["doc"]["name"], str(item["path"].relative_to(local_dir))))
            else:
                results["updated"].append((item["doc"]["id"], item["doc"]["name"], str(item["path"].relative_to(local_dir))))

        log(f"🔍 DRY RUN — no files will be written\n")
        print_report(results)
        save_report(results)
        return

    success = 0
    failed = 0
    skipped = 0
    images_total = 0

    for i, item in enumerate(to_process):
        doc = item["doc"]
        oid = doc["id"]
        out_path = item["path"]
        source_url = item["source_url"]
        name = doc["name"]

        try:
            prefix = " 📁" if item["is_intermediate"] else ""
            log(f"  [{i + 1}/{len(to_process)}]{prefix} {name[:40]} ({oid[:40]})")

            # Fetch
            fetched = fetch_doc(oid, cfg["catalog_name"])
            fetched_html = (fetched or {}).get("html") or ""

            # For intermediate nodes: skip if content is too thin
            if item["is_intermediate"] and len(fetched_html) < 500:
                log(f"    ⏭️  Skip thin intermediate (HTML={len(fetched_html)} chars)")
                skipped += 1
                results["skipped"].append((oid, name, f"HTML too thin ({len(fetched_html)} chars)"))
                continue

            # Process HTML (images + merged cells + codehub source links)
            img_dir = out_path.parent / "img"
            html, has_merged, codehub_links = process_html(fetched_html, img_dir, oid)

            # Count images
            img_count = len(list(img_dir.glob("*"))) if img_dir.exists() else 0
            images_total += img_count

            # Convert to MD
            fetched_title = (fetched or {}).get("title", "")
            md_content = html_to_md(html, fetched_title, source_url, has_merged, codehub_links)

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
            # Categorize result
            rel_path = str(out_path.relative_to(local_dir))
            if item.get("hash_changed"):
                results["content_changed"].append((oid, name, rel_path))
            elif item["is_new"]:
                if item["is_intermediate"]:
                    results["new_intermediate"].append((oid, name, rel_path))
                else:
                    results["new_leaf"].append((oid, name, rel_path))
            else:
                results["updated"].append((oid, name, rel_path))
        except Exception as e:
            log(f"  ❌ Failed: {e}")
            traceback.print_exc()
            failed += 1
            results["failed"].append((oid, name, str(e)))

        # Rate limit
        time.sleep(0.5)

    results["images"] = images_total
    results["success"] = success
    results["failed_count"] = failed
    results["skipped_count"] = skipped

    # Generate report
    print_report(results)
    save_report(results)

    # Rebuild content-map.json so new pages are tracked
    log("Rebuilding content-map.json...")
    map_script = REPO / "scripts" / "content_map.py"
    if map_script.exists():
        result = subprocess.run([sys.executable, str(map_script)], capture_output=True, text=True, timeout=60)
        if result.returncode == 0:
            log("✅ content-map.json rebuilt")
        else:
            log(f"⚠️  content-map rebuild failed: {result.stderr[:200]}")
    else:
        log("⚠️  content_map.py not found, skip rebuild")


if __name__ == "__main__":
    main()
