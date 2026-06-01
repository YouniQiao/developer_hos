#!/usr/bin/env python3
"""
Fill xiaoyi stub files with actual content from Huawei API (service catalog).
Usage: python3 fill_xiaoyi.py
"""
import os, re, json, time, html as html_mod, subprocess, urllib.request, tempfile, hashlib
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_DIR = Path(__file__).parent.parent
DOCS_DIR = BASE_DIR / "docs" / "distribute" / "xiaoyi"
MARKITDOWN_BIN = "/Users/hhxi/.hermes/hermes-agent/venv/bin/markitdown"
API_URL = "https://svc-drcn.developer.huawei.com/community/servlet/consumer/cn/documentPortal/getDocumentById"
CATALOG_NAME = "service"
MAX_WORKERS = 5

HEADERS = {
    "Content-Type": "application/json",
    "Referer": "https://developer.huawei.com/consumer/cn/doc/service/update1-0000001238499957",
    "User-Agent": "Mozilla/5.0"
}

IMAGE_CACHE = {}

# All leaf documents from the service catalog tree for 小艺开放平台
# Format: (objectId, relative_dir_in_xiaoyi)
DOCS = [
    # 变更说明
    ("update1-0000001238499957", "."),
    # 业务介绍 > 小艺开放平台
    ("introduction-0000001193306784", "harmonyos-service-0000001238266717"),
    ("strength-0000001193466742", "harmonyos-service-0000001238266717"),
    ("function-0000001238386683", "harmonyos-service-0000001238266717"),
    # 业务介绍 > 小艺开放平台 > 动态与公告
    ("model-discontinuation-notice-0000002550825992", "harmonyos-service-0000001238266717/news-announcements-0000002581585685"),
    # 鸿蒙智能体 > 上架审核规范
    ("agent-information-0000002471344217", "audit-specifications-0000002469548113"),
    ("agent-security-0000002437625978", "audit-specifications-0000002469548113"),
    ("agent-content-0000002471344229", "audit-specifications-0000002469548113"),
    ("agent-function-0000002437785802", "audit-specifications-0000002469548113"),
    ("agent-pay-0000002551486355", "audit-specifications-0000002469548113"),
    ("agent-advertisement-0000002520493294", "audit-specifications-0000002469548113"),
    ("user-privacy-0000002437785806", "audit-specifications-0000002469548113"),
    ("protection-of-minors-0000002471344233", "audit-specifications-0000002469548113"),
    ("intellectual-property-0000002471264365", "audit-specifications-0000002469548113"),
    ("intelligence-qualification-0000002437625986", "audit-specifications-0000002469548113"),
    ("developer-behavior-0000002471264369", "audit-specifications-0000002469548113"),
    ("developer-behavior-0000002497919308", "audit-specifications-0000002469548113"),
    ("permission-usage-0000002551695531", "audit-specifications-0000002469548113"),
    ("appendix-0000002437625990", "audit-specifications-0000002469548113"),
    # 鸿蒙智能体 > 快速创建智能体
    ("quick-start-0000002469548009", "."),
    # 鸿蒙智能体 > 开发智能体
    ("differences-in-arrangement-modes-0000002471344117", "developing-intelligent-agents-0000002435989592"),
    ("base-info-0000002444908490", "developing-intelligent-agents-0000002435989592"),
    ("privacy-policy-0000002477617042", "developing-intelligent-agents-0000002435989592"),
    ("content-compliance-0000002477777024", "developing-intelligent-agents-0000002435989592"),
    ("difference-in-page-layout-0000002471264245", "developing-intelligent-agents-0000002435989592"),
    # 开发智能体 > 编排-能力拓展
    ("a2a-basic-configuration-0000002437785686", "ability-expansion-function-introduction-0000002437625858"),
    ("a2a-output-settings-0000002471344121", "ability-expansion-function-introduction-0000002437625858"),
    ("open-claw-base-0000002518704040", "ability-expansion-function-introduction-0000002437625858"),
    ("opening-statement-preset-problem-0000002471264249", "ability-expansion-function-introduction-0000002437625858"),
    ("input-0000002437625862", "ability-expansion-function-introduction-0000002437625858"),
    ("suggestions-for-user-issues-0000002437785690", "ability-expansion-function-introduction-0000002437625858"),
    ("quick-instructions-0000002471344125", "ability-expansion-function-introduction-0000002437625858"),
    ("background-image-0000002471264253", "ability-expansion-function-introduction-0000002437625858"),
    ("character-voice-0000002437625870", "ability-expansion-function-introduction-0000002437625858"),
    ("voice-call-0000002437785698", "ability-expansion-function-introduction-0000002437625858"),
    # 能力拓展 > 插件
    ("plugin-parameter-setting-0000002493084596", "plug-in-2-0000002471344133"),
    ("plugin-card-0000002525044573", "plug-in-2-0000002471344133"),
    ("plugin-debug-0000002525183123", "plug-in-2-0000002471344133"),
    ("plugin-upgrade-0000002525143219", "plug-in-2-0000002471344133"),
    ("plugin-mock-0000002517939356", "plug-in-2-0000002471344133"),
    # 能力拓展 > 工作流/工作流配置
    ("workflow-setting-0000002549367139", "workflow-configuration-5-0000002471264261"),
    ("workflow-card-0000002517687350", "workflow-configuration-5-0000002471264261"),
    ("workflow-text-card-0000002517847268", "workflow-configuration-5-0000002471264261"),
    ("workflow-gui-0000002549407129", "workflow-configuration-5-0000002471264261"),
    # 能力拓展 > 触发器
    ("trigger-common-0000002492963588", "trigger-0000002437625878"),
    ("trigger-webhook-0000002525203283", "trigger-0000002437625878"),
    # 能力拓展 > other leaves
    ("related-applications-0000002437785706", "ability-expansion-function-introduction-0000002437625858"),
    ("account-binding-0000002471344141", "ability-expansion-function-introduction-0000002437625858"),
    ("paid-agents-0000002505800294", "ability-expansion-function-introduction-0000002437625858"),
    ("knowledge-base-0000002471264269", "ability-expansion-function-introduction-0000002437625858"),
    ("variable-0000002437625886", "ability-expansion-function-introduction-0000002437625858"),
    ("long-term-memory-0000002437785714", "ability-expansion-function-introduction-0000002437625858"),
    # 开发智能体 > 调试与预览
    ("list-of-user-groups-for-real-machine-testing-0000002471264273", "real-machine-testing-0000002471344145"),
    ("use-real-machine-testing-0000002437625890", "real-machine-testing-0000002471344145"),
    # 开发智能体 > other leaves
    ("process-introduction-0000002509696971", "developing-intelligent-agents-0000002435989592"),
    ("agent-version-management-0000002532867477", "developing-intelligent-agents-0000002435989592"),
    # 鸿蒙智能体 > 开发知识库
    ("create-a-knowledge-base-0000002471344153", "develop-a-knowledge-base-0000002435989624"),
    ("test-and-publish-the-knowledge-base-0000002471264281", "develop-a-knowledge-base-0000002435989624"),
    ("add-knowledge-base-in-intelligent-agents-0000002437625898", "develop-a-knowledge-base-0000002435989624"),
    # 鸿蒙智能体 > 开发工作流
    ("create-workflow-0000002471344157", "development-workflow-0000002435989628"),
    ("import-derive-0000002532719443", "development-workflow-0000002435989628"),
    ("workflow-version-management-0000002503518822", "development-workflow-0000002435989628"),
    # 开发工作流 > 工作流节点说明
    ("start-nodes-0000002471344161", "workflow-node-description-0000002437785730"),
    ("end-nodes-0000002478973886", "workflow-node-description-0000002437785730"),
    ("large-model-node-0000002471264289", "workflow-node-description-0000002437785730"),
    ("plug-in-node-0000002437625906", "workflow-node-description-0000002437785730"),
    ("workflow-node-0000002437785738", "workflow-node-description-0000002437785730"),
    ("code-node-0000002471344165", "workflow-node-description-0000002437785730"),
    ("selector-node-0000002471264297", "workflow-node-description-0000002437785730"),
    ("intent-classification-node-0000002437625914", "workflow-node-description-0000002437785730"),
    ("output-node-0000002437785742", "workflow-node-description-0000002437785730"),
    ("loop-0000002471344169", "workflow-node-description-0000002437785730"),
    ("batch-0000002471264301", "workflow-node-description-0000002437785730"),
    ("knowledge-base-node-0000002437625918", "workflow-node-description-0000002437785730"),
    ("variable-component-0000002437785746", "workflow-node-description-0000002437785730"),
    ("long-term-memory-node-0000002471344173", "workflow-node-description-0000002437785730"),
    ("text-processing-node-0000002471264305", "workflow-node-description-0000002437785730"),
    ("questioner-node-0000002437625926", "workflow-node-description-0000002437785730"),
    # 鸿蒙智能体 > 开发插件
    ("plug-in-classification-0000002471344177", "develop-plug-ins-0000002435989648"),
    # MCP插件 > 创建插件
    ("mcp-plugin-par-0000002525597351", "mcp-plugin-0000002437785774/create-plugin-0000002471344201"),
    ("mcp-plugin-import-0000002493437678", "mcp-plugin-0000002437785774/create-plugin-0000002471344201"),
    # MCP插件 > other
    ("post-plugin-0000002471264333", "mcp-plugin-0000002437785774"),
    ("plugin-auth-0000002437625954", "mcp-plugin-0000002437785774"),
    # 云插件
    ("create-plugin-0000002471264325", "cloud-plug-in-0000002471344189"),
    ("create-tools-0000002437625946", "cloud-plug-in-0000002471344189"),
    ("testing-and-publishing-plugins-0000002437785770", "cloud-plug-in-0000002471344189"),
    ("cloud-plug-mock-0000002517832252", "cloud-plug-in-0000002471344189"),
    # 端插件
    ("create-side-plug-in-0000002437625930", "end-plug-in-0000002471264313"),
    ("endpoint-plugin-configuration-0000002437785762", "end-plug-in-0000002471264313"),
    ("end-plug-mock-0000002549594931", "end-plug-in-0000002471264313"),
    ("end-plug-in-permissions-0000002437785766", "end-plug-in-0000002471264313"),
    # 端侧应用实现
    ("plugin-to-terminal--configuration-0000002471264317", "end-side-application-implementation-0000002471344185"),
    ("corresponding-code-implementation-of-plug-in-tools-0000002437625938", "end-side-application-implementation-0000002471344185"),
    # 其他创建插件方式
    ("plugins-based-on-existing-intent-conversions-0000002471264329", "other-ways-to-create-plugins-0000002471344197"),
    ("file-import-generates-cloud-plugin-0000002437625950", "other-ways-to-create-plugins-0000002471344197"),
    # 鸿蒙智能体 > 开发卡片
    ("create-new-card-0000002471344205", "development-card-0000002435989672"),
    ("save-custom-cards-0000002437785786", "development-card-0000002435989672"),
    ("reply-template-configuration-0000002471344213", "development-card-0000002435989672"),
    ("card-upgrade-scenario-0000002471264345", "development-card-0000002435989672"),
    ("card-user-guide-0000002477777026", "development-card-0000002435989672"),
    # 开发卡片 > 自定义卡片编辑
    ("edit-component-0000002437625958", "custom-card-editing-0000002471264337"),
    ("create-new-variable-0000002437785782", "custom-card-editing-0000002471264337"),
    ("example-of-using-custom-cards-0000002471344209", "custom-card-editing-0000002471264337"),
    # 自定义卡片编辑 > 事件配置
    ("multi-jump-0000002485633457", "additional-information-0000002471264341"),
    ("send-message-0000002452553680", "additional-information-0000002471264341"),
    ("set-variable-0000002485753413", "additional-information-0000002471264341"),
    ("modify-component-properties-0000002452394064", "additional-information-0000002471264341"),
    ("switch-page-0000002485633469", "additional-information-0000002471264341"),
    ("check-installation-status-0000002452553688", "additional-information-0000002471264341"),
    ("invoke-plugin-0000002485753421", "additional-information-0000002471264341"),
    ("copy-to-clipboard-0000002452394068", "additional-information-0000002471264341"),
    ("preview-image-0000002485633477", "additional-information-0000002471264341"),
    ("delete-list-data-0000002452553700", "additional-information-0000002471264341"),
    ("operation-celia-0000002485753433", "additional-information-0000002471264341"),
    # 自定义卡片编辑 > 音视频组件
    ("component-usage-0000002453655260", "audio-video-component-0000002437625962"),
    ("audio-style1-0000002486894569", "audio-video-component-0000002437625962"),
    ("audio-style2-0000002486934625", "audio-video-component-0000002437625962"),
    # 自定义卡片编辑 > other
    ("choice-group-component-0000002509817009", "custom-card-editing-0000002471264337"),
    ("multiple-tabs-component-0000002477617044", "custom-card-editing-0000002471264337"),
    ("map-component-0000002531935077", "custom-card-editing-0000002471264337"),
    ("h5card-component-0000002521232377", "custom-card-editing-0000002471264337"),
    # 鸿蒙智能体 > other
    ("interface-0000002517970934", "."),
    ("develop-timbre-0000002520134781", "."),
    # 小艺罗盘 > 评测
    ("evaluation-set-0000002544815783", "review-0000002512394302"),
    ("evaluation-commission-0000002513135882", "review-0000002512394302"),
    ("evaluation-task-0000002513295812", "review-0000002512394302"),
    # 小艺罗盘 > 观测
    ("operations-dashboard-0000002552835075", "observe-0000002521675110"),
    # 鸿蒙Agent通信协议
    ("agent2agent-comments-0000002500412353", "agent2agent-0000002498656261"),
    # Agent通信 > 消息指令定义
    ("initialize-initialized-0000002537681161", "agent2agent-definition-0000002500439093"),
    ("message-stream-0000002505761434", "agent2agent-definition-0000002500439093"),
    ("tasks-cancel-0000002537561193", "agent2agent-definition-0000002500439093"),
    ("clear-context-0000002537681163", "agent2agent-definition-0000002500439093"),
    ("authorize-deauthorize-0000002505921274", "agent2agent-definition-0000002500439093"),
    ("pushmessage-0000002505761436", "agent2agent-definition-0000002500439093"),
    # Agent通信 > 消息参数说明
    ("query-data-0000002537691281", "agent2agent-parameter-desc-0000002467479802"),
    ("response-data-0000002505931382", "agent2agent-parameter-desc-0000002467479802"),
    # Agent通信 > other leaves
    ("agent2agent-action-0000002467539682", "agent2agent-0000002498656261"),
    ("agent2agent-command-0000002467900460", "agent2agent-0000002498656261"),
    ("agent2agent-context-0000002501019701", "agent2agent-0000002498656261"),
    # 智能体数字商品支付
    ("service-introduction-0000002537853869", "digital-product-payment-0000002537601305"),
    ("service-configuration-0000002537721283", "digital-product-payment-0000002537601305"),
    ("service-debug-0000002513652200", "digital-product-payment-0000002537601305"),
    # 交互接口说明
    ("order-notification-0000002537601307", "interaction-interface-0000002505801554"),
    ("privilege-query-0000002537721285", "interaction-interface-0000002505801554"),
    # OpenClaw接入
    ("openclaw-0000002518410344", "."),
    # 意图框架
    ("intents-kit-white-paper-0000001855842156", "intents-kit-0000001677103865"),
    ("intents-ai-distribution-characteristic-0000001901922213", "intents-kit-0000001677103865"),
    ("intents-schema-0000001901962713", "intents-kit-0000001677103865"),
    # 白皮书
    ("intelligent-agent-white-paper-0000002508129114", "."),
    ("ai-terminal-white-paper-0000001929691644", "."),
    # 服务条款
    ("harmonyos_agreement-0000001238515921", "terms_conditions-0000001193795972"),
    ("service_assurance-0000001193316036", "terms_conditions-0000001193795972"),
    ("protocol-variation-0000001323720125", "terms_conditions-0000001193795972"),
    ("privacy-statement-0000002485708558", "terms_conditions-0000001193795972"),
    ("compliance-guidelines-0000002485548586", "terms_conditions-0000001193795972"),
    # 补充链接文档
    ("account-binding-0000001240149967", "addlinkage-0000001240069905"),
    ("oauth-0000001240070027", "addlinkage-0000001240069905"),
    ("connent-data-synchronization-0000001194950100", "addlinkage-0000001240069905"),
    ("interface-0000001195110098", "addlinkage-0000001240069905"),
]


def fetch_document(object_id):
    payload = json.dumps({"objectId": object_id, "version": "", "catalogName": CATALOG_NAME, "language": "cn"}).encode()
    req = urllib.request.Request(API_URL, data=payload, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read())
        if data.get('code') == 0:
            val = data.get('value', {})
            return val.get('content', {}).get('content', ''), val.get('title', '')
    except Exception as e:
        pass
    return None, "error"


def download_image(url, md_path):
    url_key = re.sub(r'\?.*$', '', url)
    if url_key in IMAGE_CACHE:
        return IMAGE_CACHE[url_key]
    md_dir = md_path.parent
    img_dir = md_dir / "img"
    img_dir.mkdir(parents=True, exist_ok=True)
    url_hash = hashlib.md5(url_key.encode()).hexdigest()[:12]
    ext = os.path.splitext(url_key.split('/')[-1])[1] or '.png'
    if ext.lower() not in ('.png','.jpg','.jpeg','.gif','.webp','.svg','.bmp'):
        ext = '.png'
    img_name = f"{url_hash}{ext}"
    img_path = img_dir / img_name
    if not img_path.exists():
        try:
            decoded = html_mod.unescape(url)
            req = urllib.request.Request(decoded, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=30) as resp:
                img_path.write_bytes(resp.read())
        except:
            return url
    rel = f"./img/{img_name}"
    IMAGE_CACHE[url_key] = rel
    return rel


def html_to_md(html, md_path):
    img_pat = re.compile(r'<img[^>]+src="([^"]+)"', re.IGNORECASE)
    img_count = [0]
    def repl(m):
        url = m.group(1)
        local = download_image(url, md_path)
        if local != url: img_count[0] += 1
        return m.group(0).replace(url, local)
    html = img_pat.sub(repl, html)
    
    with tempfile.NamedTemporaryFile(mode='w', suffix='.html', delete=False, encoding='utf-8') as f:
        f.write(f"<html><body>{html}</body></html>")
        tmp = f.name
    try:
        result = subprocess.run([MARKITDOWN_BIN, tmp], capture_output=True, text=True, timeout=60)
        md = result.stdout
    except:
        md = html
    finally:
        os.unlink(tmp)
    
    # Clean headings
    lines = md.split('\n')
    new_lines = []
    for line in lines:
        m_h2 = re.match(r'^(#{1,6})\s+\[h2\]\s*(.*)', line)
        if m_h2:
            new_lines.append('### ' + m_h2.group(2).strip())
            continue
        if line.startswith('# '):
            new_lines.append(line)
        elif re.match(r'^##\s', line):
            new_lines.append(line)
        elif re.match(r'^###\s', line):
            new_lines.append('##' + line[3:])
        elif re.match(r'^####\s', line):
            new_lines.append('##' + line[4:])
        elif re.match(r'^#####\s', line):
            new_lines.append('###' + line[5:])
        else:
            if '[h2]' in line:
                line = line.replace('[h2]', '')
            new_lines.append(line)
    
    md = '\n'.join(new_lines)
    md = re.sub(r'\n{4,}', '\n\n\n', md)
    return md, img_count[0]


def process(oid, rel_dir):
    fname = f"{oid}.md"
    if rel_dir == '.':
        md_path = DOCS_DIR / fname
    else:
        md_path = DOCS_DIR / rel_dir / fname
    md_path.parent.mkdir(parents=True, exist_ok=True)
    
    html, title = fetch_document(oid)
    if html is None:
        return False, f"{oid}: fetch failed ({title})"
    if not html.strip():
        return False, f"{oid}: empty content"
    
    md, imgs = html_to_md(html, md_path)
    
    has_merge = bool(re.search(r'rowspan|colspan', html, re.IGNORECASE))
    import_line = "import MergeTable from '@site/src/components/MergeTable';\n\n" if has_merge else ""
    
    orig = f"https://developer.huawei.com/consumer/cn/doc/service/{oid}"
    fm = f'---\ntitle: "{title or oid}"\ndisplayed_sidebar: xiaoyiSidebar\noriginal_url: {orig}\n---\n\n{import_line}'
    
    md_path.write_text(fm + md, encoding='utf-8')
    return True, f"{fname}: {len(md)} bytes, {imgs} imgs"


def main():
    print(f"Xiaoyi content filler — {len(DOCS)} docs")
    total = success = 0
    with ThreadPoolExecutor(max_workers=MAX_WORKERS) as ex:
        futures = {ex.submit(process, oid, rd): (oid, rd) for oid, rd in DOCS}
        for f in as_completed(futures):
            total += 1
            try:
                ok, msg = f.result()
                if ok: success += 1
                print(f"  [{success}/{total}] {'✅' if ok else '❌'} {msg}")
            except Exception as e:
                print(f"  [{total}] ❌ {futures[f]}: {e}")
    print(f"\nDone: {success}/{total}")


if __name__ == "__main__":
    main()
