---
title: "接入流程"
original_url: /docs/distribute/agc/agc-help-location-sense-by-nfc-0000002382896585/agc-help-by-nfc-summary-0000002382896613
format: md
upstream_id: distribute/agc/agc-help-location-sense-by-nfc-0000002382896585/agc-help-by-nfc-summary-0000002382896613
last_sync: 2026-06-07
sync_hash: 1e8cdad6
---
目前身份确认的手段以传统NFC刷卡、刷身份证、人脸识别、刷二维码、人工验证等方式为主，操作复杂，效率低，且个人隐私存在泄漏风险。鉴于景区、交通、商业、政府单位、集团公司、房地产、酒店、核电、教育等行业普遍存在身份确认诉求，近场服务增加了NFC身份识别场景体验，开发者可在设备管理界面注册NFC设备，后续当HarmonyOS手机用户碰一碰NFC设备后，手机端会根据已注册NFC设备的不同状态结果直达开发者提供的服务内容，例如检票、点餐等，做到精准推荐，帮助用户减少操作步骤，提升用户体验。

#### 接入流程

| **序号** | **步骤** | **详情** |
| --- | --- | --- |
| 1 | [申请开通权限](/docs/distribute/agc/agc-help-location-sense-0000002305282449/agc-help-location-sense-apply-permission-0000002382902149) | 当前近场服务处于灰度开放阶段，使用服务前需先申请开通近场服务权限。如果已开通，可跳过本步骤。 |
| 2 | [注册NFC设备](/docs/distribute/agc/agc-help-location-sense-by-nfc-0000002382896585/agc-help-nfc-regist-0000002382856333) | 注册接入近场服务的NFC设备。 |
| 3 | [创建应用链接](/docs/dev/app-dev/application-services/app-linking-kit-guide/app-linking-startupapp#在agc为应用创建关联的网址域 名)/[创建元服务链接](/docs/dev/atomic-dev/atomic-linking/atomic-applinking#section48651523147) | 配置拉起页面的URL。 |
| 4 | [创建全网态服务](/docs/distribute/agc/agc-help-location-sense-by-nfc-0000002382896585/agc-help-nfc-apply-service-0000002349016136) | 创建全网态近场服务，关联拉起页面。 |

#### 设备限制

当前仅支持HarmonyOS手机。
