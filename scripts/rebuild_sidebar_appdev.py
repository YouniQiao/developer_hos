#!/usr/bin/env python3
"""
Rebuild sidebars-appdev.js using Huawei catalog tree API for correct hierarchy.
All kits get their official structure, labels, and ordering from the API.
"""
import json, os, re, urllib.request, time

BASE = "/Users/hhxi/developer_hos/docs"
SIDEBAR = "/Users/hhxi/developer_hos/sidebars-appdev.js"
API = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getCatalogTree"
HEADERS = {"Content-Type": "application/json", "Referer": "https://developer.huawei.com/", "User-Agent": "Mozilla/5.0"}

# ========== CATALOG TREE CACHE ==========
_catalog_cache = None

def get_catalog_tree():
    global _catalog_cache
    if _catalog_cache is None:
        data = json.dumps({"catalogName": "harmonyos-guides", "lang": "cn"}).encode()
        req = urllib.request.Request(API, data=data, headers=HEADERS)
        resp = urllib.request.urlopen(req, timeout=30)
        _catalog_cache = json.loads(resp.read())['value']['catalogTreeList']
    return _catalog_cache

def find_catalog_node(name):
    """Find a catalog node by exact nodeName match."""
    def search(nodes):
        for node in nodes:
            if node.get('nodeName') == name:
                return node
            if 'children' in node and node['children']:
                r = search(node['children'])
                if r:
                    return r
        return None
    return search(get_catalog_tree())

# ========== KIT PATH MAPPING ==========
# Maps kit label → dev/app-dev/ relative directory
KIT_TO_RELDIR = {
    'Ability Kit（程序框架服务）': 'application-framework/ability-kit',
    'Accessibility Kit（无障碍服务）': 'application-framework/accessibility-kit',
    'ArkData（方舟数据管理）': 'application-framework/arkdata',
    'ArkTS（方舟编程语言）': 'application-framework/arkts',
    'ArkUI（方舟UI框架）': 'application-framework/arkui',
    'ArkWeb（方舟Web）': 'application-framework/arkweb',
    'Background Tasks Kit（后台任务开发服务）': 'application-framework/background-task-kit',
    'Content Embed Kit（内容嵌入服务）': 'application-framework/content-embed-kit',
    'Core File Kit（文件基础服务）': 'application-framework/core-file-kit',
    'Data Augmentation Kit（数据增强服务）': 'application-framework/data-augmentation-kit-guide',
    'Form Kit（卡片开发服务）': 'application-framework/form-kit',
    'IME Kit（输入法开发服务）': 'application-framework/ime-kit',
    'IPC Kit（进程间通信服务）': 'application-framework/ipc-kit',
    'Localization Kit（本地化开发服务）': 'application-framework/localization-kit',
    'UI Design Kit（UI设计套件）': 'application-framework/ui-design-kit-guide',
    'Audio Kit（音频服务）': 'media/audio-kit',
    'AVCodec Kit（音视频编解码服务）': 'media/avcodec-kit',
    'AVSession Kit（音视频播控服务）': 'media/avsession-kit',
    'Camera Kit（相机服务）': 'media/camera-kit',
    'DRM Kit（数字版权保护服务）': 'media/drm-kit',
    'Image Kit（图片处理服务）': 'media/image-kit',
    'Media Kit（媒体服务）': 'media/media-kit',
    'Media Library Kit（媒体文件管理服务）': 'media/medialibrary-kit',
    'Ringtone Kit（铃声服务）': 'media/ringtone-kit-guide',
    'Scan Kit（统一扫码服务）': 'media/scan-kit-guide',
    'AR Engine（AR引擎服务）': 'graphics/ar-engine-kit-guide',
    'ArkGraphics 2D（方舟2D图形服务）': 'graphics/arkgraphics-2d',
    'ArkGraphics 3D（方舟3D图形）': 'graphics/arkgraphics-3d',
    'Graphics Accelerate Kit（图形加速服务）': 'graphics/graphics-accelerate-kit-guide',
    'Spatial Recon Kit（空间建模服务）': 'graphics/spatial-recon-kit-guide',
    'XEngine Kit（GPU加速引擎服务）': 'graphics/xengine-kit-guide',
    'Account Kit（华为账号服务）': 'application-services/account-kit-guide',
    'Ads Kit（广告服务）': 'application-services/ads-kit-guide',
    'App Linking Kit（应用链接服务）': 'application-services/app-linking-kit-guide',
    'Calendar Kit（日历服务）': 'application-services/calendar-kit',
    'Call Service Kit（通话服务）': 'application-services/call-kit-guide',
    'Cloud Foundation Kit（云开发服务）': 'application-services/cloud-foundation-kit-guide',
    'Contacts Kit（联系人服务）': 'application-services/contacts-kit',
    'Enterprise Space Kit（企业数字空间服务）': 'application-services/enterprise-space-kit-guide',
    'File Manager Service Kit（文件管理服务）': 'application-services/file-manager-service-kit-guide',
    'Game Controller Kit（游戏控制器服务）': 'application-services/game-controller-kit',
    'Game Service Kit（游戏服务）': 'application-services/game-service-kit-guide',
    'Health Service Kit（运动健康服务）': 'application-services/health-service-kit-guide',
    'IAP Kit（应用内支付服务）': 'application-services/iap-kit-guide',
    'Live View Kit（实况窗服务）': 'application-services/live-view-kit-guide',
    'Location Kit（位置服务）': 'application-services/location-kit',
    'Map Kit（地图服务）': 'application-services/map-kit-guide',
    'Notification Kit（用户通知服务）': 'application-services/notification-kit',
    'Payment Kit（鸿蒙支付服务）': 'application-services/payment-kit-guide',
    'PDF Kit（PDF服务）': 'application-services/pdf-kit-guide',
    'Preview Kit（文件预览服务）': 'application-services/preview-kit-guide',
    'Push Kit（推送服务）': 'application-services/push-kit-guide',
    'Reader Kit（阅读服务）': 'application-services/reader-kit-guide',
    'Scenario Fusion Kit（融合场景服务）': 'application-services/scenario-fusion-kit-guide',
    'Screen Time Guard Kit（屏幕时间守护服务）': 'application-services/screen-time-guard-kit-guide',
    'Share Kit（分享服务）': 'application-services/share-kit-guide',
    'Wallet Kit（钱包服务）': 'application-services/wallet-kit-guide',
    'Weather Service Kit（天气服务）': 'application-services/weather-service-kit-guide',
    'Agent Framework Kit（智能体框架服务）': 'ai/harmony-agent-framework-kit-guide',
    'Core Speech Kit（基础语音服务）': 'ai/core-speech-kit-guide',
    'Core Vision Kit（基础视觉服务）': 'ai/core-vision-kit-guide',
    'Intents Kit（意图框架服务）': 'ai/intents-kit-guide',
    'MindSpore Lite Kit（昇思推理框架服务）': 'ai/mindspore-lite-kit',
    'Natural Language Kit（自然语言理解服务）': 'ai/natural-language-kit-guide',
    'Neural Network Runtime Kit（Neural Network运行时服务）': 'ai/neural-network-runtime-kit',
    'Speech Kit（场景化语音服务）': 'ai/speech-kit-guide',
    'Vision Kit（场景化视觉服务）': 'ai/vision-kit-guide',
    # 系统/安全
    '程序访问控制': 'system/system-security/access-control',
    'Asset Store Kit（关键资产存储服务）': 'system/system-security/asset-store-kit',
    'Crypto Architecture Kit（加解密系统框架）': 'system/system-security/crypto-architecture-kit',
    'Data Guard Kit（数据防泄漏服务）': 'system/system-security/data-guard-kit-guide',
    'Data Protection Kit（数据保护服务）': 'system/system-security/data-protection-kit',
    'Device Certificate Kit（设备证书服务）': 'system/system-security/device-certificate-kit',
    'Device Security Kit（设备安全服务）': 'system/system-security/device-security-kit-guide',
    'Enterprise Threat Protection Kit（企业威胁防护服务）': 'system/system-security/enterprise-threat-protection-kit-guide',
    'HUKS Kit（通用密钥库服务）': 'system/system-security/huks-kit',
    'Online Authentication Kit（在线认证服务）': 'system/system-security/online-authentication-kit-guide',
    'Password Vault Kit（密码保险箱服务）': 'system/system-security/passwordvault',
    'User Authentication Kit（用户认证服务）': 'system/system-security/user-authentication-kit',
}

def resolve_doc_id(relate_document, parent_search=None, rel_dir=None):
    """Resolve a relateDocument string to a local doc ID.
    Returns None if no local file exists.
    """
    if not relate_document:
        return None
    candidates = []
    base = f'dev/app-dev/{rel_dir}'
    if parent_search:
        candidates.append(f'{base}/{parent_search}/{relate_document}')
    candidates.append(f'{base}/{relate_document}')
    for cand in candidates:
        for ext in ['.md', '.mdx']:
            if os.path.exists(os.path.join(BASE, cand + ext)):
                return cand
    return None

def build_from_catalog(node, rel_dir, parent_search=None, depth=0):
    """Recursively build sidebar items from a catalog tree node."""
    items = []
    children = node.get('children', [])
    
    for child in children:
        name = child.get('nodeName', '')
        doc = child.get('relateDocument', '')
        pf = child.get('parentFileNameForSearch', '') or parent_search or ''
        is_leaf = not child.get('children')
        
        if is_leaf:
            # Leaf node → doc ID
            doc_id = resolve_doc_id(doc, pf, rel_dir)
            if doc_id:
                items.append(doc_id)
        else:
            # Category node → recurse
            sub_items = build_from_catalog(child, rel_dir, pf, depth+1)
            if sub_items:
                cat = {
                    'type': 'category',
                    'label': name,
                    'collapsed': True,
                    'items': sub_items,
                }
                listing = resolve_doc_id(doc, pf, rel_dir)
                if listing:
                    cat['link'] = {'type': 'doc', 'id': listing}
                items.append(cat)
    
    return items

def gen_entry(label, rel_dir):
    """Generate entry: catalog ordering + labels, filesystem structure."""
    cat_node = find_catalog_node(label)
    order_map = {}
    label_map = {}
    if cat_node:
        _build_catalog_maps(cat_node, order_map, label_map)
    
    if not order_map:
        print(f"  ⚠ {label}: no catalog order, using filesystem alphabetical")
    
    return gen_entry_fs(label, rel_dir, order_map, label_map)


def _build_catalog_maps(node, order_map, label_map, counter=[0]):
    """Walk catalog tree: position indices + nodeName labels."""
    for child in node.get('children', []):
        doc = child.get('relateDocument', '')
        name = child.get('nodeName', '')
        if doc:
            if doc not in order_map:
                order_map[doc] = counter[0]
                counter[0] += 1
            if name and doc not in label_map:
                label_map[doc] = name
        if child.get('children'):
            _build_catalog_maps(child, order_map, label_map, counter)

# ========== FILESYSTEM FALLBACK ==========
def path_to_doc_id(fpath):
    rel = os.path.relpath(fpath, BASE)
    return re.sub(r'\.(md|mdx)$', '', rel)

def build_items_fs(dirpath, order_map=None, label_map=None):
    items = []
    try:
        entries = os.listdir(dirpath)
    except:
        return items
    
    if order_map is None:
        order_map = {}
    if label_map is None:
        label_map = {}
    
    # Collect files and directories into a unified list, sorted by catalog order
    # so they're interleaved correctly (catalog order mixes files and dirs)
    def sort_key(name):
        stem = re.sub(r'\.(md|mdx)$', '', name)
        return (order_map.get(stem, 999999), name.lower())
    
    entries_list = []
    for e in entries:
        epath = os.path.join(dirpath, e)
        if e.startswith('.') or e == 'img' or e == '_category_.json':
            continue
        if os.path.isdir(epath):
            entries_list.append(('dir', e))
        elif e.endswith(('.md', '.mdx')):
            entries_list.append(('file', e))
    
    entries_list.sort(key=lambda x: sort_key(x[1]))
    
    for etype, e in entries_list:
        if etype == 'file':
            # Skip stub link-list files that have a corresponding directory
            # (these are redundant index pages; their dir handles navigation)
            stem = re.sub(r'\.(md|mdx)$', '', e)
            dpath = os.path.join(dirpath, stem)
            if os.path.isdir(dpath):
                # Check if this file is a link-only stub
                fpath = os.path.join(dirpath, e)
                if _is_link_only_page(fpath):
                    continue  # skip — the directory category replaces it
            items.append(path_to_doc_id(os.path.join(dirpath, e)))
        else:
            dpath = os.path.join(dirpath, e)
            children = build_items_fs(dpath, order_map, label_map)
            if children:
                # Use catalog label if available, else generated label
                label = label_map.get(e, e.replace('-', ' ').title())
                cat = {'type': 'category', 'label': label, 'collapsed': True, 'items': children}
                # Try to find a landing page for this category
                # Skip link-only stubs; prefer content pages
                for lid_cand in [path_to_doc_id(os.path.join(dpath, e)),
                                 path_to_doc_id(os.path.join(dpath, e + '-overview'))]:
                    for ext in ['.md', '.mdx']:
                        lid_path = os.path.join(BASE, lid_cand + ext)
                        if os.path.exists(lid_path) and not _is_link_only_page(lid_path):
                            cat['link'] = {'type': 'doc', 'id': lid_cand}
                            break
                    if 'link' in cat:
                        break
                items.append(cat)
    return items


def _is_link_only_page(filepath):
    """Check if a .md/.mdx page contains only a list of links (no real content)."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except:
        return False
    if not content.startswith('---'):
        return False
    parts = content.split('---', 2)
    if len(parts) < 3:
        return False
    body = parts[2].strip()
    if not body:
        return True  # empty body
    lines = [l.strip() for l in body.split('\n') if l.strip()]
    if not lines:
        return True
    # Every non-empty line must be a markdown link bullet.
    # Handles: * [text](url), * **[text](url)**, ** [text](url), etc.
    link_pattern = re.compile(r'^(\*{1,3}|\-)\s+\*{0,2}\[.+\]\(.+\)\*{0,2}$')
    heading_pattern = re.compile(r'^#{1,6}\s+')  # heading lines are content, not link-only
    for l in lines:
        if heading_pattern.match(l):
            return False
        if not link_pattern.match(l):
            return False
    return True

def gen_entry_fs(label, rel_dir, order_map=None, label_map=None):
    dirpath = os.path.join(BASE, 'dev/app-dev', rel_dir)
    if not os.path.isdir(dirpath):
        return None
    items = build_items_fs(dirpath, order_map or {}, label_map or {})
    if not items:
        return None
    return json.dumps({'type': 'category', 'label': label, 'collapsed': True, 'items': items},
                      ensure_ascii=False, separators=(',', ':'))

# ========== SECTIONS DEFINITION ==========
SECTIONS = {
    '应用框架': [
        ('Ability Kit（程序框架服务）', 'application-framework/ability-kit'),
        ('Accessibility Kit（无障碍服务）', 'application-framework/accessibility-kit'),
        ('ArkData（方舟数据管理）', 'application-framework/arkdata'),
        ('ArkTS（方舟编程语言）', 'application-framework/arkts'),
        ('ArkUI（方舟UI框架）', 'application-framework/arkui'),
        ('ArkWeb（方舟Web）', 'application-framework/arkweb'),
        ('Background Tasks Kit（后台任务开发服务）', 'application-framework/background-task-kit'),
        ('Content Embed Kit（内容嵌入服务）', 'application-framework/content-embed-kit'),
        ('Core File Kit（文件基础服务）', 'application-framework/core-file-kit'),
        ('Data Augmentation Kit（数据增强服务）', 'application-framework/data-augmentation-kit-guide'),
        ('Form Kit（卡片开发服务）', 'application-framework/form-kit'),
        ('IME Kit（输入法开发服务）', 'application-framework/ime-kit'),
        ('IPC Kit（进程间通信服务）', 'application-framework/ipc-kit'),
        ('Localization Kit（本地化开发服务）', 'application-framework/localization-kit'),
        ('UI Design Kit（UI设计套件）', 'application-framework/ui-design-kit-guide'),
    ],
    '媒体': [
        ('Audio Kit（音频服务）', 'media/audio-kit'),
        ('AVCodec Kit（音视频编解码服务）', 'media/avcodec-kit'),
        ('AVSession Kit（音视频播控服务）', 'media/avsession-kit'),
        ('Camera Kit（相机服务）', 'media/camera-kit'),
        ('DRM Kit（数字版权保护服务）', 'media/drm-kit'),
        ('Image Kit（图片处理服务）', 'media/image-kit'),
        ('Media Kit（媒体服务）', 'media/media-kit'),
        ('Media Library Kit（媒体文件管理服务）', 'media/medialibrary-kit'),
        ('Ringtone Kit（铃声服务）', 'media/ringtone-kit-guide'),
        ('Scan Kit（统一扫码服务）', 'media/scan-kit-guide'),
    ],
    '图形': [
        ('AR Engine（AR引擎服务）', 'graphics/ar-engine-kit-guide'),
        ('ArkGraphics 2D（方舟2D图形服务）', 'graphics/arkgraphics-2d'),
        ('ArkGraphics 3D（方舟3D图形）', 'graphics/arkgraphics-3d'),
        ('Graphics Accelerate Kit（图形加速服务）', 'graphics/graphics-accelerate-kit-guide'),
        ('Spatial Recon Kit（空间建模服务）', 'graphics/spatial-recon-kit-guide'),
        ('XEngine Kit（GPU加速引擎服务）', 'graphics/xengine-kit-guide'),
    ],
    '应用服务': [
        ('Account Kit（华为账号服务）', 'application-services/account-kit-guide'),
        ('Ads Kit（广告服务）', 'application-services/ads-kit-guide'),
        ('App Linking Kit（应用链接服务）', 'application-services/app-linking-kit-guide'),
        ('Calendar Kit（日历服务）', 'application-services/calendar-kit'),
        ('Call Service Kit（通话服务）', 'application-services/call-kit-guide'),
        ('Cloud Foundation Kit（云开发服务）', 'application-services/cloud-foundation-kit-guide'),
        ('Contacts Kit（联系人服务）', 'application-services/contacts-kit'),
        ('Enterprise Space Kit（企业数字空间服务）', 'application-services/enterprise-space-kit-guide'),
        ('File Manager Service Kit（文件管理服务）', 'application-services/file-manager-service-kit-guide'),
        ('Game Controller Kit（游戏控制器服务）', 'application-services/game-controller-kit'),
        ('Game Service Kit（游戏服务）', 'application-services/game-service-kit-guide'),
        ('Health Service Kit（运动健康服务）', 'application-services/health-service-kit-guide'),
        ('IAP Kit（应用内支付服务）', 'application-services/iap-kit-guide'),
        ('Live View Kit（实况窗服务）', 'application-services/live-view-kit-guide'),
        ('Location Kit（位置服务）', 'application-services/location-kit'),
        ('Map Kit（地图服务）', 'application-services/map-kit-guide'),
        ('Notification Kit（用户通知服务）', 'application-services/notification-kit'),
        ('Payment Kit（鸿蒙支付服务）', 'application-services/payment-kit-guide'),
        ('PDF Kit（PDF服务）', 'application-services/pdf-kit-guide'),
        ('Preview Kit（文件预览服务）', 'application-services/preview-kit-guide'),
        ('Push Kit（推送服务）', 'application-services/push-kit-guide'),
        ('Reader Kit（阅读服务）', 'application-services/reader-kit-guide'),
        ('Scenario Fusion Kit（融合场景服务）', 'application-services/scenario-fusion-kit-guide'),
        ('Screen Time Guard Kit（屏幕时间守护服务）', 'application-services/screen-time-guard-kit-guide'),
        ('Share Kit（分享服务）', 'application-services/share-kit-guide'),
        ('Wallet Kit（钱包服务）', 'application-services/wallet-kit-guide'),
        ('Weather Service Kit（天气服务）', 'application-services/weather-service-kit-guide'),
    ],
    'AI': [
        ('Agent Framework Kit（智能体框架服务）', 'ai/harmony-agent-framework-kit-guide'),
        ('Core Speech Kit（基础语音服务）', 'ai/core-speech-kit-guide'),
        ('Core Vision Kit（基础视觉服务）', 'ai/core-vision-kit-guide'),
        ('Intents Kit（意图框架服务）', 'ai/intents-kit-guide'),
        ('MindSpore Lite Kit（昇思推理框架服务）', 'ai/mindspore-lite-kit'),
        ('Natural Language Kit（自然语言理解服务）', 'ai/natural-language-kit-guide'),
        ('Neural Network Runtime Kit（Neural Network运行时服务）', 'ai/neural-network-runtime-kit'),
        ('Speech Kit（场景化语音服务）', 'ai/speech-kit-guide'),
        ('Vision Kit（场景化视觉服务）', 'ai/vision-kit-guide'),
    ],
    '系统/安全': [
        ('程序访问控制', 'system/system-security/access-control'),
        ('Asset Store Kit（关键资产存储服务）', 'system/system-security/asset-store-kit'),
        ('Crypto Architecture Kit（加解密算法框架服务）', 'system/system-security/crypto-architecture-kit'),
        ('Enterprise Data Guard Kit（企业数据保护服务）', 'system/system-security/data-guard-kit-guide'),
        ('Data Protection Kit（数据保护服务）', 'system/system-security/data-protection-kit'),
        ('Device Certificate Kit（设备证书服务）', 'system/system-security/device-certificate-kit'),
        ('Device Security Kit（设备安全服务）', 'system/system-security/device-security-kit-guide'),
        ('Enterprise Threat Protection Kit（企业威胁防护服务）', 'system/system-security/enterprise-threat-protection-kit-guide'),
        ('Universal Keystore Kit（密钥管理服务）', 'system/system-security/huks-kit'),
        ('Online Authentication Kit（在线认证服务）', 'system/system-security/online-authentication-kit-guide'),
        ('密码自动填充服务', 'system/system-security/passwordvault'),
        ('User Authentication Kit（用户认证服务）', 'system/system-security/user-authentication-kit'),
    ],
}

# ========== GENERATE ==========
with open(SIDEBAR) as f:
    orig = f.read()

# Extract fixed sections from original
intro_start = orig.find("'入门与准备'")
appfw_marker = "label: '应用框架'"
appfw_pos = orig.find(appfw_marker)
intro_end_marker = orig.rfind('},', 0, appfw_pos)
intro_chunk_raw = orig[intro_start:intro_end_marker+1]
intro_chunk = "{\n      type: 'category',\n      label: " + intro_chunk_raw

# Multi-device
multi_start = orig.find("'多设备开发'")
multi_chunk_raw = orig[multi_start:]
for end_marker in ['}];\n', '};\n']:
    if multi_chunk_raw.endswith(end_marker):
        multi_chunk = multi_chunk_raw[:-len(end_marker)].rstrip().rstrip(',')
        break
else:
    multi_chunk = multi_chunk_raw.rstrip().rstrip(';').rstrip('}').rstrip().rstrip(',')
multi_chunk = multi_chunk.rstrip(']')
multi_chunk = "{\n      type: 'category',\n      label: " + multi_chunk

# System subgroups from original
sys_marker = "label: '系统'"
sys_idx = orig.find(sys_marker)
media_marker = "label: '媒体'"
media_idx = orig.find(media_marker)
sys_chunk = orig[sys_idx:media_idx]
sg_lines = {}
for i, sg_name in enumerate(['网络', '基础功能', '硬件', '调测调优']):
    marker = f'"label": "{sg_name}"'
    idx = sys_chunk.find(marker)
    if idx > 0:
        line_start = sys_chunk.rfind('\n', 0, idx) + 1
        line_end = sys_chunk.find('\n', idx)
        if line_end < 0:
            line_end = len(sys_chunk)
        line = sys_chunk[line_start:line_end].strip().rstrip(',')
        if i == 3:
            line = line.rstrip(']')
        sg_lines[sg_name] = line

# Build file
lines = []
lines.append("/** @type {import(\"@docusaurus/plugin-content-docs\").SidebarsConfig} */")
lines.append("module.exports = {")
lines.append("  appDevSidebar: [")
lines.append("    " + intro_chunk + ",")

# 应用框架
lines.append("    {")
lines.append("      type: 'category',")
lines.append("      label: '应用框架',")
lines.append("      collapsed: true,")
lines.append("      items: [")
appfw_entries = []
for label, rel_dir in SECTIONS['应用框架']:
    e = gen_entry(label, rel_dir)
    if e:
        appfw_entries.append("        " + e)
        print(f"  ✓ {label}")
lines.append(",\n".join(appfw_entries))
lines.append("      ]")
lines.append("    },")
print("✓ 应用框架")

# 系统
lines.append("    {")
lines.append("      type: 'category',")
lines.append("      label: '系统',")
lines.append("      collapsed: true,")
lines.append("      items: [")
sys_entries = []

# 安全
sec_lines = []
for label, rel_dir in SECTIONS['系统/安全']:
    e = gen_entry(label, rel_dir)
    if e:
        sec_lines.append("            " + e)
        print(f"  ✓ 安全/{label}")
if sec_lines:
    security = ",\n".join(sec_lines)
    sys_entries.append(f"""        {{
          type: 'category',
          label: '安全',
          collapsed: true,
          items: [
{security}
          ]
        }}""")

for sg_name in ['网络', '基础功能', '硬件', '调测调优']:
    if sg_name in sg_lines:
        sys_entries.append("        " + sg_lines[sg_name])
        print(f"  ✓ 系统/{sg_name} (from original)")

lines.append(",\n".join(sys_entries))
lines.append("      ]")
lines.append("    },")
print("✓ 系统")

# 媒体, 图形, 应用服务, AI
for section in ['媒体', '图形', '应用服务', 'AI']:
    lines.append("    {")
    lines.append("      type: 'category',")
    lines.append(f"      label: '{section}',")
    lines.append("      collapsed: true,")
    lines.append("      items: [")
    sec_entries = []
    # Insert section-level overview page if it exists
    overview_doc_id = f'dev/app-dev/{section.lower()}-overview' if section == '媒体' else None
    if overview_doc_id:
        from pathlib import Path as _Path
        found_overview = False
        for _ext in ['.md', '.mdx']:
            if os.path.exists(os.path.join(BASE, overview_doc_id + _ext)):
                found_overview = True
                break
        # Also check specific known overview pages
        if not found_overview:
            # Try multimedia-development-overview for 媒体
            alt_id = 'dev/app-dev/media/multimedia-development-overview'
            for _ext in ['.md', '.mdx']:
                if os.path.exists(os.path.join(BASE, alt_id + _ext)):
                    overview_doc_id = alt_id
                    found_overview = True
                    break
        if found_overview:
            sec_entries.append(f'        "{overview_doc_id}"')
            print(f"  ✓ {section}/概览")
    for label, rel_dir in SECTIONS[section]:
        e = gen_entry(label, rel_dir)
        if e:
            sec_entries.append("        " + e)
            print(f"  ✓ {section}/{label}")
    lines.append(",\n".join(sec_entries))
    lines.append("      ]")
    lines.append("    },")
    print(f"✓ {section}")

# 多设备开发
lines.append("    " + multi_chunk)
lines.append("  ]")
lines.append("};")

content = '\n'.join(lines) + '\n'
with open(SIDEBAR, 'w') as f:
    f.write(content)

print(f"\nWritten {len(content):,} chars")
