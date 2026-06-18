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

MCP_HOST = os.environ.get("MCP_HOST", "127.0.0.1")
MCP_PORT = int(os.environ.get("MCP_PORT", "8765"))

mcp = FastMCP("HarmonyOS Developer Docs", host=MCP_HOST, port=MCP_PORT)

# ── helpers ────────────────────────────────────────────────

def _md_files() -> list[Path]:
    """Return all .md / .mdx files under DOCS_ROOT."""
    root = Path(DOCS_ROOT)
    if not root.exists():
        return []
    files = list(root.rglob("*.md")) + list(root.rglob("*.mdx"))
    return sorted(files)


def _relative(p: Path) -> str:
    """Path relative to DOCS_ROOT, without extension."""
    return str(p.relative_to(DOCS_ROOT)).rsplit(".", 1)[0]


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


def _split_chunks(text: str) -> list[dict]:
    """Split document into chunks by ## headings.
    Returns [{"heading": str, "content": str}, ...]
    First chunk = everything before the first ## heading.
    """
    lines = text.split("\n")
    chunks = []
    current_heading = ""
    current_lines = []

    for line in lines:
        if re.match(r"^##\s", line):
            if current_lines or current_heading:
                chunks.append({
                    "heading": current_heading,
                    "content": "\n".join(current_lines).strip()
                })
            current_heading = line.strip()
            current_lines = []
        else:
            current_lines.append(line)

    # Last chunk
    if current_lines or current_heading:
        chunks.append({
            "heading": current_heading,
            "content": "\n".join(current_lines).strip()
        })

    return chunks


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
        chunk: 分块编号。0=返回全文，1=第一块，N=第N块
    """
    full = Path(DOCS_ROOT) / f"{path}.md"
    if not full.exists():
        full = Path(DOCS_ROOT) / f"{path}.mdx"
    if not full.exists():
        candidates = list(Path(DOCS_ROOT).rglob(f"{path}*.md")) + \
                      list(Path(DOCS_ROOT).rglob(f"{path}*.mdx"))
        if candidates:
            full = candidates[0]
        else:
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
    """获取文档的章节大纲（所有 ## 标题），用于了解文档结构后再按需分块读取。
    
    Args:
        path: 文档相对路径（不含扩展名），如 'distribute/agc/agc-help-introduction'
    """
    full = Path(DOCS_ROOT) / f"{path}.md"
    if not full.exists():
        full = Path(DOCS_ROOT) / f"{path}.mdx"
    if not full.exists():
        candidates = list(Path(DOCS_ROOT).rglob(f"{path}*.md")) + \
                      list(Path(DOCS_ROOT).rglob(f"{path}*.mdx"))
        if candidates:
            full = candidates[0]
        else:
            return f"未找到文档: {path}"

    content = _read_stripped(full)
    if not content:
        return f"文档为空: {path}"

    chunks = _split_chunks(content)
    if not chunks:
        return "文档无章节标题。"

    lines = [f"文档: {path}（共 {len(chunks)} 块）\n"]
    for i, c in enumerate(chunks, 1):
        h = c["heading"] if c["heading"] else "(开头)"
        preview = c["content"][:80].replace("\n", " ")
        lines.append(f"  [{i}] {h}  — {preview}...")

    return "\n".join(lines)


@mcp.tool()
def list_sections() -> str:
    """列出文档的目录结构（一级和二级目录）。"""
    root = Path(DOCS_ROOT)
    if not root.exists():
        return "错误：文档目录不存在。"

    sections = sorted(
        [d for d in root.iterdir() if d.is_dir() and not d.name.startswith(".")],
        key=lambda d: d.name,
    )

    out = ["# HarmonyOS 开发者文档目录\n"]
    for sec in sections:
        subs = sorted(
            [d for d in sec.iterdir() if d.is_dir()],
            key=lambda d: d.name,
        )
        out.append(f"## {sec.name} ({len(subs)} 个子目录)")
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
