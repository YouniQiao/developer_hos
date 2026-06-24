import re

# 一级分类：中文 → 英文
TOP_SECTION_MAP = {
    "api参考概述": "overview",
    "应用框架": "app-framework",
    "系统": "system",
    "媒体": "media",
    "应用服务": "app-services",
    "图形": "graphics",
    "ai": "ai",
    "公共基础能力": "common",
    "标准库": "stdlib",
}


def doc_path_en(breadcrumb, object_id):
    """生成英文文档路径，格式: {section}/{subgroup}/{object_id}
    
    breadcrumb: ['应用框架', 'Ability Kit', 'ArkTS API', ...]
    → app-framework/js-apis-app-ability/js-apis-app-ability-ability
    """
    parts = []
    
    # 一级目录
    if breadcrumb:
        top = breadcrumb[0].strip().lower()
        parts.append(TOP_SECTION_MAP.get(top, top))
    
    # oid 清理：取最后一段，去掉尾部版本号
    oid_clean = object_id.split("/")[-1] if "/" in object_id else object_id
    oid_clean = re.sub(r"-\d{10,}$", "", oid_clean)
    
    # 子目录：从 object_id 提取分组前缀（≥4段才建子目录）
    segments = oid_clean.split("-")
    if len(segments) >= 4:
        subgroup = "-".join(segments[:-1])
        parts.append(subgroup)
    
    # 文件名
    parts.append(oid_clean)
    
    return "/".join(parts)
