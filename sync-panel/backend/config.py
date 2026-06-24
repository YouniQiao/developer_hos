"""配置：路径、华为 API 端点、并发、catalog 映射。集中管理。"""
from pathlib import Path

# ---- 路径 ----
REPO_DIR = Path("/Users/hhxi/developer_hos")
DB_PATH = Path(__file__).resolve().parent / "sync_panel.db"
DOCS_DIR = REPO_DIR / "docs"

# ---- 华为文档 API ----
DOC_API = (
    "https://svc-drcn.developer.huawei.com/community/servlet/consumer/"
    "cn/documentPortal/getDocumentById"
)
TREE_API = (
    "https://svc-drcn.developer.huawei.com/community/servlet/consumer/"
    "cn/documentPortal/getCatalogTree"
)
API_HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/",
    "User-Agent": "Mozilla/5.0",
}

# ---- 并发与超时 ----
CONCURRENCY = 5
REQUEST_TIMEOUT = 15
TREE_TIMEOUT = 30
TREE_SLEEP = 0.3

# ---- 目录树比对时跳过的 catalog ----
SKIP_CATALOGS = {"harmonyos-releases", "architecture-guides"}

# ---- catalog → sidebar 文件映射（用于执行新增时自动更新 sidebar）----
# 值是相对于 REPO_DIR 的 sidebar 文件路径
SIDEBAR_MAP = {
    "app":              "sidebars-agc.js",
    "harmonyos-guides": "sidebars-appdev.js",
    "best-practices":   "sidebars-appdev.js",
    "atomic-guides":    "sidebars-atomic.js",
    "atomic-ascf":      "sidebars-atomic.js",
    "games-guides":     "sidebars-gamedev.js",
    "harmonyos-faqs":   "sidebars-faq.js",
    "promotion":        "sidebars-promotion.js",
    "monetize":         "sidebars-monetization.js",
    "content":          "sidebars-content-dist.js",
    "service":          "sidebars-service-dist.js",
    "design-guides":    "sidebars-design.js",
    "harmonyos-releases": "sidebars-releases.js",
}

# ---- catalog 映射（唯一真相源，sync_runner 和未来脚本共用）----
# 按路径前缀匹配，越具体的越靠前
CATALOG_MAP = [
    ("docs/dev/app-dev/getting-started/quick-start",        "harmonyos-guides"),
    ("docs/dev/app-dev/getting-started/dev-fundamentals",   "harmonyos-guides"),
    ("docs/dev/app-dev/getting-started/resource-access",    "harmonyos-guides"),
    ("docs/dev/app-dev/getting-started/glossary",           "harmonyos-guides"),
    ("docs/dev/app-dev/application-framework",              "harmonyos-guides"),
    ("docs/dev/app-dev/system",                             "harmonyos-guides"),
    ("docs/dev/app-dev/media",                              "harmonyos-guides"),
    ("docs/dev/app-dev/graphics",                           "harmonyos-guides"),
    ("docs/dev/app-dev/application-services",               "harmonyos-guides"),
    ("docs/dev/app-dev/ai",                                 "harmonyos-guides"),
    ("docs/dev/app-dev/multi-device",                       "best-practices"),
    ("docs/dev/ndk-dev",                                    "harmonyos-guides"),
    ("docs/dev/testing",                                    "harmonyos-guides"),
    ("docs/dev/atomic-dev/ascf",                            "atomic-ascf"),
    ("docs/dev/atomic-dev",                                 "atomic-guides"),
    ("docs/dev/game-dev",                                   "games-guides"),
    ("docs/dev/industry-solutions",                         "architecture-guides"),
    ("docs/FAQ",                                            "harmonyos-faqs"),
]

EXTRA_CATALOGS = {
    "docs/monetize/promotion":    "promotion",
    "docs/monetize/monetization": "monetize",
    "docs/monetize":              "promotion",
    "docs/distribute/app-dist/app-market": "app",
    "docs/distribute/app-dist/game-center": "app",
    "docs/distribute/content-dist": "content",
    "docs/distribute/service-dist": "service",
    "docs/distribute/xiaoyi":       "service",
    "docs/distribute/agc":          "app",
    "docs/distribute":              "harmonyos-guides",
    "docs/design/app-compatibility": "harmonyos-releases",
    "docs/design":                   "design-guides",
    "docs/tools/deveco-testing/release-notes": "harmonyos-releases",
    "docs/tools":          "harmonyos-guides",
    "docs/experience-suggestions": "harmonyos-guides",
    "docs/quality":        "best-practices",
    "docs/security":       "best-practices",
    "docs/architecture":   "harmonyos-guides",
    "docs/guides":         "harmonyos-guides",
    "docs/resources":      "harmonyos-guides",
    "docs/atomic":         "atomic-guides",
}

# ---- Release Notes 排除模式（目录树比对时跳过这些节点）----
RELEASE_NOTE_PATTERNS = [
    r"变更", r"发布说明", r"release.?note", r"changelog", r"版本更新",
    r"修复的问题", r"已知问题", r"新增特性",
]


def get_catalog(path):
    """根据文档路径返回所属华为 catalog 名。"""
    for prefix, catalog in CATALOG_MAP:
        if path.startswith(prefix):
            return catalog
    for prefix, catalog in EXTRA_CATALOGS.items():
        if path.startswith(prefix):
            return catalog
    return "harmonyos-guides"


def all_catalogs():
    """返回所有不重复的 catalog 名集合。"""
    cats = set()
    for _, cat in CATALOG_MAP:
        cats.add(cat)
    for cat in EXTRA_CATALOGS.values():
        cats.add(cat)
    return cats
