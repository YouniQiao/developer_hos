"""
HarmonyOS Developer Docs MCP Server
Provides AI tools to search and retrieve HarmonyOS developer documentation.
"""
import os
import re
import textwrap
from pathlib import Path
from mcp.server.fastmcp import FastMCP

DOCS_ROOT = os.environ.get("DOCS_ROOT", "/opt/actions-runner/_work/developer_hos/developer_hos/docs")
API_REFS_ROOT = os.environ.get("API_REFS_ROOT", str(Path(DOCS_ROOT).parent / "api-reference" / "docs"))

DOCS_ROOTS = [DOCS_ROOT, API_REFS_ROOT]

MCP_HOST = os.environ.get("MCP_HOST", "127.0.0.1")
MCP_PORT = int(os.environ.get("MCP_PORT", "8765"))

mcp = FastMCP("HarmonyOS Developer Docs", host=MCP_HOST, port=MCP_PORT)

# ── helpers ────────────────────────────────────────────────

def _md_files() -> list[Path]:
    """Return all .md / .mdx files under all DOCS_ROOTS."""
    files = []
    for root_dir in DOCS_ROOTS:
        root = Path(root_dir)
        if root.exists():
            files.extend(list(root.rglob("*.md")) + list(root.rglob("*.mdx")))
    return sorted(files)


def _relative(p: Path) -> str:
    """Path relative to its DOCS_ROOT, without extension, prefixed by source."""
    for root_dir in DOCS_ROOTS:
        rp = Path(root_dir)
        try:
            rel = str(p.relative_to(rp)).rsplit(".", 1)[0]
            source = "api" if str(rp) == str(Path(API_REFS_ROOT)) else "guide"
            return f"[{source}] {rel}"
        except ValueError:
            pass
    return str(p).rsplit(".", 1)[0]


def _find_doc(path: str) -> Path | None:
    """在多个 DOCS_ROOTS 中查找文档。"""
    for root_dir in DOCS_ROOTS:
        full = Path(root_dir) / f"{path}.md"
        if full.exists():
            return full
        full = Path(root_dir) / f"{path}.mdx"
        if full.exists():
            return full
    # 模糊匹配
    for root_dir in DOCS_ROOTS:
        candidates = list(Path(root_dir).rglob(f"{path}*.md")) + \
                      list(Path(root_dir).rglob(f"{path}*.mdx"))
        if candidates:
            return candidates[0]
    return None


def _read_stripped(p: Path) -> str:
    """Read a markdown file, strip frontmatter and HTML tags, return plain text."""
    try:
        raw = p.read_text(encoding="utf-8", errors="replace")
    except Exception:
        return ""
    if raw.startswith("---"):
        end = raw.find("---", 3)
        if end != -1:
            raw = raw[end + 3:]
    raw = re.sub(r"<[^>]+>", "", raw)
    raw = re.sub(r"\n{3,}", "\n\n", raw)
    return raw.strip()


def _detect_heading_level(text: str) -> int:
    """Detect the primary heading level used for section breaks.
    Returns 2, 3, or 4. Defaults to 2."""
    counts = {2: 0, 3: 0, 4: 0}
    for line in text.split("\n"):
        for level in (2, 3, 4):
            if re.match(rf"^{'#' * level}\s", line):
                counts[level] += 1
    # Pick the most common level, minimum 2
    best = max(counts, key=lambda k: counts[k])
    return best if counts[best] > 0 else 2


def _split_chunks(text: str) -> list[dict]:
    """Split document into chunks by the most common heading level.
    Works for guide docs (##) and API refs (####).
    Returns [{"heading": str, "content": str}, ...]
    First chunk = everything before the first heading."""
    level = _detect_heading_level(text)
    prefix = "#" * level + " "
    lines = text.split("\n")
    chunks = []
    current_heading = ""
    current_lines = []

    for line in lines:
        if line.startswith(prefix) and not line.startswith(prefix + "#"):
            if current_lines or current_heading:
                chunks.append({
                    "heading": current_heading,
                    "content": "\n".join(current_lines).strip()
                })
            current_heading = line.strip()
            current_lines = []
        else:
            current_lines.append(line)

    if current_lines or current_heading:
        chunks.append({
            "heading": current_heading,
            "content": "\n".join(current_lines).strip()
        })

    return chunks


def _all_headings(text: str) -> list[dict]:
    """Extract ALL headings (## through ####) with their level, for outline."""
    headings = []
    for line in text.split("\n"):
        m = re.match(r"^(#{2,4})\s+(.+)", line)
        if m:
            headings.append({
                "level": len(m.group(1)),
                "text": m.group(2).strip(),
            })
    return headings


def _search_in_file(path: Path, query: str) -> list[dict]:
    """Search for query in a single file; return list of matching snippets."""
    text = _read_stripped(path)
    if not text:
        return []
    hits = []
    query_lower = query.lower()
    lines = text.split("\n")
    for i, line in enumerate(lines):
        if query_lower in line.lower():
            start = max(0, i - 1)
            end = min(len(lines), i + 2)
            snippet = "\n".join(lines[start:end]).strip()
            hits.append({"line": i + 1, "snippet": snippet})
    return hits


def _extract_tables(text: str) -> list[dict]:
    """Extract markdown tables from text. Returns [{"headers": [...], "rows": [[...], ...]}, ...]."""
    tables = []
    lines = text.split("\n")
    i = 0
    while i < len(lines):
        # Detect table: line with |, followed by separator line with |---|
        if "|" in lines[i] and not lines[i].strip().startswith("```"):
            header_line = lines[i]
            if i + 1 < len(lines) and re.match(r"^\|[\s\-:|]+\|$", lines[i + 1].strip()):
                # Found a table
                headers = [h.strip() for h in header_line.split("|")[1:-1]]
                rows = []
                j = i + 2
                while j < len(lines) and "|" in lines[j] and not lines[j].strip().startswith("```"):
                    cells = [c.strip() for c in lines[j].split("|")[1:-1]]
                    if cells:
                        rows.append(cells)
                    j += 1
                tables.append({"headers": headers, "rows": rows})
                i = j
                continue
        i += 1
    return tables


def _format_table(headers: list[str], rows: list[list[str]], max_width: int = 60) -> str:
    """Format a table as plain text with aligned columns."""
    if not rows:
        return "（空表）"
    # Calculate column widths
    col_count = len(headers)
    widths = [len(h) for h in headers]
    for row in rows:
        for ci, cell in enumerate(row):
            if ci < col_count:
                # Truncate long cells
                cell_text = cell[:max_width] + "…" if len(cell) > max_width else cell
                widths[ci] = max(widths[ci], len(cell_text))
    # Build
    def fmt_row(cells):
        parts = []
        for ci, c in enumerate(cells[:col_count]):
            c = c[:max_width] + "…" if len(c) > max_width else c
            parts.append(c.ljust(widths[ci]))
        return "| " + " | ".join(parts) + " |"

    out = [fmt_row(headers), fmt_row(["-" * w for w in widths])]
    for row in rows:
        out.append(fmt_row(row))
    return "\n".join(out)


def _find_params_sections(text: str) -> dict:
    """Find parameter tables grouped by their parent section heading.
    Scans for markdown tables, then backtracks to find the nearest
    heading containing 请求参数/响应参数.
    Returns {"heading": "formatted_table_text", ...}"""
    lines = text.split("\n")
    
    # Build a mapping: line_index -> nearest params heading above it
    # Also track all headings for context
    heading_at_line = {}  # line_idx -> heading_text
    for i, line in enumerate(lines):
        m = re.match(r"^#{1,4}\s+(.*)", line)
        if m:
            heading_at_line[i] = m.group(1).strip()
    
    # Extract all tables with their line positions
    table_positions = []  # [(start_line, headers, rows), ...]
    i = 0
    while i < len(lines):
        if "|" in lines[i] and not lines[i].strip().startswith("```"):
            header_line = lines[i]
            sep_pattern = r"^\|[\s\-:|\|]+\|$"
            if i + 1 < len(lines) and re.match(sep_pattern, lines[i + 1].strip()):
                headers = [h.strip() for h in header_line.split("|")[1:-1]]
                rows = []
                j = i + 2
                while j < len(lines) and "|" in lines[j] and not lines[j].strip().startswith("```"):
                    cells = [c.strip() for c in lines[j].split("|")[1:-1]]
                    if cells:
                        rows.append(cells)
                    j += 1
                table_positions.append((i, headers, rows))
                i = j
                continue
        i += 1
    
    if not table_positions:
        return {}
    
    # For each table, find the nearest params heading above it
    result = {}
    for start_line, headers, rows in table_positions:
        # Backtrack to find nearest heading
        best_heading = None
        best_line = -1
        for hline in sorted(heading_at_line.keys()):
            if hline < start_line and hline > best_line:
                htext = heading_at_line[hline]
                if re.search(r"(请求参数|响应参数|入参|出参)", htext):
                    best_heading = htext
                    best_line = hline
        
        # If no params heading found, try one more level up
        if not best_heading:
            for hline in sorted(heading_at_line.keys(), reverse=True):
                if hline < start_line:
                    parent = heading_at_line[hline]
                    if re.search(r"(请求|响应)", parent):
                        best_heading = parent
                        break
        
        if not best_heading:
            continue
        
        # Accumulate under this heading
        if best_heading not in result:
            result[best_heading] = []
        result[best_heading].append((headers, rows))
    
    # Format
    output = {}
    for heading, table_list in result.items():
        parts = []
        for ti, (headers, rows) in enumerate(table_list):
            if len(table_list) > 1:
                parts.append(f"\n### 表格 {ti + 1}")
            parts.append(_format_table(headers, rows))
        output[heading] = "\n".join(parts)
    
    return output


def _first_paragraph(text: str) -> str:
    """Extract the first meaningful paragraph after the H1 title."""
    lines = text.split("\n")
    in_frontmatter = False
    passed_h1 = False
    para_lines = []
    for line in lines:
        if line.strip() == "---":
            in_frontmatter = not in_frontmatter
            continue
        if in_frontmatter:
            continue
        if not passed_h1:
            if re.match(r"^#\s", line):
                passed_h1 = True
            continue
        # Skip images, empty lines at start
        if not para_lines and (not line.strip() or line.strip().startswith("![")):
            continue
        if line.strip():
            para_lines.append(line.strip())
        elif para_lines:
            break  # End of first paragraph
    text = " ".join(para_lines)
    if len(text) > 200:
        text = text[:200] + "…"
    return text


def _find_api_entries(query: str, files: list[Path], max_results: int = 20) -> list[dict]:
    """Search for API by name — matches filenames, H1 titles, and headings.
    Returns [{"path": ..., "title": ..., "matches": [...], "desc": ...}, ...]"""
    query_lower = query.lower().replace(".", r"\.").replace("(", r"\(").replace(")", r"\)")
    clean_query = query.lower()
    results = []
    seen = set()

    # Pass 1: match filenames (fast)
    for f in files:
        name = f.stem.lower()
        if clean_query in name:
            if f not in seen:
                results.append({"file": f, "reason": "filename"})
                seen.add(f)

    # Pass 2: if not enough results, scan headings (lightweight — only read lines starting with #)
    if len(results) < max_results:
        for f in files:
            if f in seen:
                continue
            try:
                with open(f, encoding="utf-8", errors="replace") as fh:
                    for line in fh:
                        if line.startswith("#"):
                            # Skip frontmatter
                            if line.strip() == "---":
                                continue
                            if clean_query in line.lower():
                                results.append({"file": f, "reason": "heading"})
                                seen.add(f)
                                break
            except Exception:
                continue
            if len(results) >= max_results * 3:  # Collect more than needed for sorting
                break

    # Pass 3: read matched files and extract details
    output = []
    for entry in results[:max_results * 2]:
        f = entry["file"]
        try:
            raw = f.read_text(encoding="utf-8", errors="replace")
        except Exception:
            continue
        
        # Extract frontmatter title
        title = ""
        if raw.startswith("---"):
            end = raw.find("---", 3)
            if end != -1:
                fm = raw[3:end]
                m = re.search(r'title:\s*"?(.+?[^\\])"?\s*$', fm, re.MULTILINE)
                if m:
                    title = m.group(1).strip().strip('"')
        
        # Strip frontmatter and HTML for content
        content = raw
        if content.startswith("---"):
            end = content.find("---", 3)
            if end != -1:
                content = content[end + 3:]
        content = re.sub(r"<[^>]+>", "", content)
        
        # Extract H1 if no frontmatter title
        if not title:
            m = re.match(r"^#\s+(.+)", content.strip())
            if m:
                title = m.group(1).strip()
        
        # Find matching headings
        matching_headings = []
        for line in content.split("\n"):
            m = re.match(r"^#{1,4}\s+(.+)", line)
            if m:
                htext = m.group(1).strip()
                if clean_query in htext.lower():
                    matching_headings.append(htext[:80])
        
        desc = _first_paragraph(content)
        rel = _relative(f)
        
        output.append({
            "path": rel,
            "title": title,
            "matches": matching_headings[:5],
            "desc": desc,
        })

    # Sort: prefer those with heading matches (more specific)
    output.sort(key=lambda x: (len(x["matches"]) == 0, -len(x["matches"]), x["path"]))
    return output[:max_results]


# ── tools ───────────────────────────────────────────────────

@mcp.tool()
def search_docs(query: str, max_results: int = 10) -> str:
    """搜索 HarmonyOS 开发者文档。返回匹配的文件路径和内容片段。
    
    Args:
        query: 搜索关键词（支持中文）
        max_results: 最大返回结果数，默认 10
    """
    files = _md_files()
    if not files:
        return "错误：文档目录不存在或为空。"

    results = []
    for f in files:
        hits = _search_in_file(f, query)
        if hits:
            rel = _relative(f)
            for h in hits[:3]:
                results.append({
                    "file": rel,
                    "line": h["line"],
                    "snippet": h["snippet"][:500],
                })
        if len(results) >= max_results:
            break

    if not results:
        return f"未找到与 '{query}' 相关的内容。"

    out = []
    for r in results:
        out.append(f"📄 {r['file']}\n{r['snippet']}\n")
    return "\n---\n".join(out)


@mcp.tool()
def get_doc(path: str, chunk: int = 0) -> str:
    """获取指定文档的内容，支持分块读取。
    
    Args:
        path: 文档相对路径（不含扩展名），如 'distribute/agc/agc-help-introduction'
              对于 API 参考，如 'app-framework/arkts-apis-bluetooth'
        chunk: 分块编号。0=返回全文，1=第一块，N=第N块
    """
    full = _find_doc(path)
    if not full:
        return f"未找到文档: {path}"

    content = _read_stripped(full)
    if not content:
        return f"文档为空: {path}"

    # Chunked mode
    if chunk > 0:
        chunks = _split_chunks(content)
        total = len(chunks)
        if chunk > total:
            return f"分块超出范围: 请求第 {chunk} 块，但文档只有 {total} 块。"

        c = chunks[chunk - 1]
        heading = c["heading"] if c["heading"] else "(文档开头)"
        body = c["content"]
        if len(body) > 6000:
            body = body[:6000] + "\n\n... (本块内容过长，已截断)"

        return f"[{chunk}/{total}] {heading}\n\n{body}"

    # Full mode (backward compatible)
    if len(content) > 8000:
        content = content[:8000] + "\n\n... (内容过长，已截断，可使用 chunk 参数分块读取)"

    return content


@mcp.tool()
def get_doc_outline(path: str) -> str:
    """获取文档的章节大纲（所有层级的标题），用于了解文档结构后再按需分块读取。
    
    Args:
        path: 文档相对路径（不含扩展名），如 'distribute/agc/agc-help-introduction'
              对于 API 参考，如 'app-framework/arkts-apis-bluetooth'
    """
    full = _find_doc(path)
    if not full:
        return f"未找到文档: {path}"

    content = _read_stripped(full)
    if not content:
        return f"文档为空: {path}"

    headings = _all_headings(content)
    if not headings:
        return "文档无章节标题。"

    # Also get the chunk count
    chunks = _split_chunks(content)
    lines = [f"文档: {path}（共 {len(chunks)} 块）\n"]

    for i, h in enumerate(headings):
        indent = "  " * (h["level"] - 2)
        lines.append(f"  {indent}{'#' * h['level']} {h['text']}")

    lines.append(f"\n💡 使用 get_doc(path, chunk=N) 分块读取，共 {len(chunks)} 块。")
    return "\n".join(lines)


@mcp.tool()
def get_api_params(path: str) -> str:
    """提取 API 参考文档中的参数信息（请求参数、响应参数等）。
    适用于 API 参考文档，自动查找并格式化所有参数表格。
    
    Args:
        path: API 文档相对路径，如 'app-framework/js-apis-bluetooth'
    """
    full = _find_doc(path)
    if not full:
        return f"未找到文档: {path}"

    content = _read_stripped(full)
    if not content:
        return f"文档为空: {path}"

    sections = _find_params_sections(content)
    if not sections:
        return f"未在文档中找到参数表格: {path}"

    out = [f"📄 {_relative(full)}\n"]
    for heading, section_text in sections.items():
        tables = _extract_tables(section_text)
        if tables:
            out.append(f"## {heading}")
            for ti, t in enumerate(tables):
                if len(tables) > 1:
                    out.append(f"\n### 表格 {ti + 1}")
                out.append(_format_table(t["headers"], t["rows"]))
                out.append("")
        else:
            # No table found, show as plain text (trimmed)
            plain = section_text.strip()
            if plain:
                out.append(f"## {heading}")
                out.append(plain[:500])
                out.append("")

    return "\n".join(out)


@mcp.tool()
def find_api(name: str, max_results: int = 15) -> str:
    """按 API 名称搜索 HarmonyOS API 参考文档。
    匹配文件名、文档标题（H1）和函数/类名（H2-H4），
    返回文档路径、标题、匹配项和简介。
    
    Args:
        name: API 名称关键词，如 'bluetooth'、'createGattServer'、'支付'
        max_results: 最大返回结果数，默认 15
    """
    files = _md_files()
    if not files:
        return "错误：文档目录不存在或为空。"

    entries = _find_api_entries(name, files, max_results)
    if not entries:
        return f"未找到与 '{name}' 相关的 API。"

    out = []
    for i, e in enumerate(entries):
        lines = [f"### {i + 1}. {e['title'] or '(无标题)'}"]
        lines.append(f"📄 {e['path']}")
        if e['desc']:
            lines.append(f"   {e['desc']}")
        if e['matches']:
            lines.append(f"   匹配项: {', '.join(e['matches'])}")
        out.append("\n".join(lines))

    out.append(f"\n💡 使用 get_doc(path) 查看完整文档，get_api_params(path) 查看参数表。")
    return "\n\n".join(out)


@mcp.tool()
def list_sections() -> str:
    """列出文档的目录结构（一级和二级目录），标注来源（指南/API参考）。"""
    out = ["# HarmonyOS 开发者文档目录\n"]
    
    for root_dir in DOCS_ROOTS:
        root = Path(root_dir)
        if not root.exists():
            continue
        
        source = "API参考" if str(root) == str(Path(API_REFS_ROOT)) else "指南"
        sections = sorted(
            [d for d in root.iterdir() if d.is_dir() and not d.name.startswith(".")],
            key=lambda d: d.name,
        )
        
        out.append(f"## {source}\n")
        for sec in sections:
            subs = sorted(
                [d for d in sec.iterdir() if d.is_dir()],
                key=lambda d: d.name,
            )
            out.append(f"### {sec.name} ({len(subs)} 个子目录)")
            for sub in subs:
                md_count = len(list(sub.rglob("*.md"))) + len(list(sub.rglob("*.mdx")))
                out.append(f"  - {sub.name} ({md_count} 篇文档)")
            out.append("")

    return "\n".join(out)


# ── entry ───────────────────────────────────────────────────

def main():
    mcp.run(transport="streamable-http")


if __name__ == "__main__":
    main()
