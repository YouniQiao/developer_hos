#!/usr/bin/env python3
"""
One-shot regeneration of sidebars-appdev.js.
All sections in official Huawei order. All kits auto-generated from filesystem.
"""
import json, os, re, sys

BASE = "/Users/hhxi/developer_hos/docs"
SIDEBAR = "/Users/hhxi/developer_hos/sidebars-appdev.js"

# ===== Directory labels (Chinese names for subdirectories) =====
DIR_LABELS = {
    'accessibility-approve-experience': '无障碍体验提升',
    'improve-screen-reader-experience': '优化屏幕朗读体验',
    'test-app-accessibility': '测试应用无障碍',
    'app-data-persistence': '应用数据持久化',
    'cross-app-data-share': '跨应用数据共享',
    'data-reliability-security': '数据可靠性与安全',
    'distributed-data-cloud-sync': '同应用端云数据同步',
    'distributed-data-sync': '分布式数据同步',
    'uniform-data-definition': '标准化数据定义',
    'arkdata-debug-tool': 'ArkData调试工具',
    'many-to-many-data-share': '多对多数据共享',
    'one-to-many-data-share': '一对多数据共享',
    'arkts-ui-development': 'ArkTS UI开发',
    'arkts-add-component': '添加组件',
    'arkts-draw-graphics': '绘制图形',
    'arkts-env-property': '环境属性',
    'arkts-form-selection': '表单与选择',
    'arkts-interaction-development-guide-overview': '交互开发指导',
    'rkts-interaction-development-guide-raw-input-event': '原始输入事件',
    'rkts-interaction-development-guide-support-gesture': '手势绑定',
    'arkts-layout-development': '布局开发',
    'arkts-build-layout': '构建布局',
    'arkts-list-and-grid': '列表与网格',
    'arkts-media-display': '媒体展示',
    'arkts-rendering-control': '渲染控制',
    'arkts-set-navigation-routing': '导航与路由',
    'arkts-state-management': '状态管理',
    'arkts-support-accessibility-friendliness': '无障碍友好',
    'arkts-theme': '主题',
    'arkts-use-animation': '动画',
    'arkts-use-dialog': '对话框',
    'arkts-use-text': '文本使用',
    'arkts-user-defined-capabilities': '用户自定义能力',
    'arkts-use-ndk': 'NDK开发',
    'arkts-add-event': '添加事件',
    'arkts-build-text-ndk': '文本(NDK)',
    'arkts-list-and-grid-ndk': '列表网格(NDK)',
    'display-manager': '显示管理',
    'ui-debug-optimize': '调试与优化',
    'ui-development-faq': 'UI开发常见问题',
    'ui-stability': 'UI稳定性',
    'ui-js-dev': 'JS UI开发',
    'js-framework-overview': '框架概览',
    'js-framework-syntax': '框架语法',
    'ui-js-animation': 'JS动画',
    'ui-js-animation-css': 'CSS动画',
    'ui-js-animation-js': 'JS动画',
    'ui-js-interpolator-animation': '插值器动画',
    'ui-js-building-ui': '构建UI',
    'ui-js-building-layout': '构建布局',
    'ui-js-components': 'JS组件',
    'ui-js-basic-components': '基础组件',
    'ui-js-canvas': 'Canvas',
    'ui-js-container-components': '容器组件',
    'ui-js-svg': 'SVG',
    'ui-js-webgl': 'WebGL',
    'window-manager': '窗口管理',
    'launch-page': '启动页',
    'multi-window-guide': '多窗口开发',
    'multi-window-adapt': '多窗口适配',
    'window-pipwindow': '画中画窗口',
    'arkts-ui': 'ArkTS卡片',
    'arkts-ui-liveform': '互动卡片',
    'arkts-ui-liveform-sceneanimation': '场景动效类型互动卡片',
    'arkts-ui-widget': 'ArkTS卡片组件',
    'arkts-ui-lockscreen-form': '锁屏卡片',
    'arkts-ui-transparent-backplate-form': '透明底板卡片',
    'arkts-ui-widget-add': '添加卡片',
    'arkts-ui-widget-event': '卡片事件',
    'arkts-ui-widget-interaction': '卡片交互',
    'arkts-ui-widget-page': '卡片页面',
    'form-js-ui': 'JS卡片',
    'ui-design-actionbar': '操作栏',
    'ui-design-faq': '常见问题',
    'ui-design-hds-tabs': 'HDS标签页',
    'ui-design-icon-process': '图标处理',
    'ui-design-list-item-card': '列表项与卡片',
    'ui-design-navigation': '导航',
    'ui-design-sidebar': '侧边栏',
    'ui-design-snackbar': '通知栏',
    'ui-design-visual-effect': '视觉效果',
}

def make_label(d):
    return DIR_LABELS.get(d, d.replace('-', ' ').title())

def path_to_doc_id(fpath):
    rel = os.path.relpath(fpath, BASE)
    return re.sub(r'\.(md|mdx)$', '', rel).replace('\\', '/')

def build_items(dirpath):
    items = []
    try:
        entries = sorted(os.listdir(dirpath))
    except:
        return items
    subdirs, files = [], []
    for e in entries:
        epath = os.path.join(dirpath, e)
        if e.startswith('.') or e == 'img' or e == '_category_.json':
            continue
        if os.path.isdir(epath):
            subdirs.append(e)
        elif e.endswith(('.md', '.mdx')):
            files.append(e)
    for f in files:
        items.append(path_to_doc_id(os.path.join(dirpath, f)))
    for d in subdirs:
        dpath = os.path.join(dirpath, d)
        children = build_items(dpath)
        if children:
            label = make_label(d)
            cat = {'type': 'category', 'label': label, 'collapsed': True, 'items': children}
            for lid in [path_to_doc_id(os.path.join(dpath, d)),
                        path_to_doc_id(os.path.join(dpath, d + '-overview'))]:
                if os.path.exists(os.path.join(BASE, lid + '.md')) or os.path.exists(os.path.join(BASE, lid + '.mdx')):
                    cat['link'] = {'type': 'doc', 'id': lid}
                    break
            items.append(cat)
    return items

def gen_entry(label, rel_dir):
    dirpath = os.path.join(BASE, 'dev/app-dev', rel_dir)
    if not os.path.isdir(dirpath):
        print(f"  ✗ DIR MISSING: {dirpath}")
        return None
    items = build_items(dirpath)
    if not items:
        print(f"  ✗ NO ITEMS: {dirpath}")
        return None
    return json.dumps({
        'type': 'category', 'label': label, 'collapsed': True, 'items': items
    }, ensure_ascii=False, separators=(',', ':'))

# ================================================
# STRUCTURE DEFINITION (official order from Huawei)
# ================================================

SECTIONS = {
    '入门': None,  # Keep from original
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
    '系统': {  # subgroups
        '安全': [
            ('程序访问控制', 'system/system-security/access-control'),
            ('Asset Store Kit（关键资产存储服务）', 'system/system-security/asset-store-kit'),
            ('Crypto Architecture Kit（加解密系统框架）', 'system/system-security/crypto-architecture-kit'),
            ('Data Guard Kit（数据防泄漏服务）', 'system/system-security/data-guard-kit-guide'),
            ('Data Protection Kit（数据保护服务）', 'system/system-security/data-protection-kit'),
            ('Device Certificate Kit（设备证书服务）', 'system/system-security/device-certificate-kit'),
            ('Device Security Kit（设备安全服务）', 'system/system-security/device-security-kit-guide'),
            ('Enterprise Threat Protection Kit（企业威胁防护服务）', 'system/system-security/enterprise-threat-protection-kit-guide'),
            ('HUKS Kit（通用密钥库服务）', 'system/system-security/huks-kit'),
            ('Online Authentication Kit（在线认证服务）', 'system/system-security/online-authentication-kit-guide'),
            ('Password Vault Kit（密码保险箱服务）', 'system/system-security/passwordvault'),
            ('User Authentication Kit（用户认证服务）', 'system/system-security/user-authentication-kit'),
        ],
    },
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
}

# ================================================
# Read original to extract 入门 + 多设备开发 + 网络/基础功能/硬件/调测调优
# ================================================
with open(SIDEBAR) as f:
    orig = f.read()

# Extract 入门 (add missing opening bracket)
intro_start = orig.find("'入门与准备'")
# Find the end of 入门 section: the closing }, before 应用框架
appfw_marker = "label: '应用框架'"
appfw_pos = orig.find(appfw_marker)
# Find the }, just before 应用框架
intro_end_marker = orig.rfind('},', 0, appfw_pos)
intro_chunk_raw = orig[intro_start:intro_end_marker+1]  # include the },
# The original had: { type: 'category', label: '入门与准备', ... }
# Our extraction starts at '入门与准备' — missing the opening { and type/label keys
intro_chunk = "{\n      type: 'category',\n      label: " + intro_chunk_raw

# Extract 多设备开发 (strip trailing file-ending brackets)
multi_start = orig.find("'多设备开发'")
multi_chunk_raw = orig[multi_start:]
# The file ends with: ...inner}]},\n        }],\n    }],};\n
# Strip trailing },\n from multi_chunk (keeping the multi-device bracket)
multi_chunk = multi_chunk_raw
# Last line is something like:     }],};
# Strip just the file-ending part
for end_marker in ['}];\n', '};\n']:
    if multi_chunk.endswith(end_marker):
        multi_chunk = multi_chunk[:-len(end_marker)].rstrip().rstrip(',')
        print(f"  Stripped end marker: {repr(end_marker)}")
        break
else:
    # Fallback: just strip trailing semicolon and braces
    multi_chunk = multi_chunk.rstrip().rstrip(';').rstrip('}').rstrip().rstrip(',')

# multi_chunk starts at '多设备开发' — missing opening { type: 'category', label:
# Also: the trailing }] from the original includes the appDevSidebar closing ],
# which we need to strip since we add our own
multi_chunk = multi_chunk.rstrip(']')  # strip the original appDevSidebar close
multi_chunk = "{\n      type: 'category',\n      label: " + multi_chunk

# Extract system subgroups (网络, 基础功能, 硬件, 调测调优) from original
# Find system section in original
sys_marker = "label: '系统'"
sys_idx = orig.find(sys_marker)
media_marker = "label: '媒体'"
media_idx = orig.find(media_marker)
sys_chunk = orig[sys_idx:media_idx]

# Extract the 4 subgroup lines
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
        # The last entry (调测调优) may include the system items closing ]
        # Strip it so we can add our own closing bracket
        if i == 3:  # last one
            line = line.rstrip(']')
        sg_lines[sg_name] = line
        print(f"  Extracted 系统/{sg_name} ({len(sg_lines[sg_name])} chars)")

# ================================================
# GENERATE
# ================================================
lines = []
lines.append("/** @type {import(\"@docusaurus/plugin-content-docs\").SidebarsConfig} */")
lines.append("module.exports = {")
lines.append("  appDevSidebar: [")

# 入门
lines.append("    " + intro_chunk + ",")
print("✓ 入门")

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

# 系统 (安全 + original subgroups)
lines.append("    {")
lines.append("      type: 'category',")
lines.append("      label: '系统',")
lines.append("      collapsed: true,")
lines.append("      items: [")
sys_entries = []

# 安全
sec_kits = SECTIONS['系统']['安全']
sec_lines = []
for label, rel_dir in sec_kits:
    e = gen_entry(label, rel_dir)
    if e:
        sec_lines.append("            " + e)
        print(f"  ✓ 系统/安全/{label}")
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

# 网络, 基础功能, 硬件, 调测调优 (from original)
for sg_name in ['网络', '基础功能', '硬件', '调测调优']:
    if sg_name in sg_lines:
        sys_entries.append("        " + sg_lines[sg_name])
        print(f"  ✓ 系统/{sg_name} (from original)")

lines.append(",\n".join(sys_entries))
lines.append("      ]")
lines.append("    },")
print("✓ 系统")

# 媒体, 图形, 应用服务, AI (all from SECTIONS)
for section in ['媒体', '图形', '应用服务', 'AI']:
    lines.append("    {")
    lines.append("      type: 'category',")
    lines.append(f"      label: '{section}',")
    lines.append("      collapsed: true,")
    lines.append("      items: [")
    sec_entries = []
    for label, rel_dir in SECTIONS[section]:
        e = gen_entry(label, rel_dir)
        if e:
            sec_entries.append("        " + e)
            print(f"  ✓ {section}/{label}")
    lines.append(",\n".join(sec_entries))
    lines.append("      ]")
    lines.append("    },")
    print(f"✓ {section}")

# 多设备开发 (from original)
lines.append("    " + multi_chunk)

lines.append("  ]")
lines.append("};")

content = '\n'.join(lines) + '\n'
with open(SIDEBAR, 'w') as f:
    f.write(content)

print(f"\nWritten {len(content):,} chars to {SIDEBAR}")
