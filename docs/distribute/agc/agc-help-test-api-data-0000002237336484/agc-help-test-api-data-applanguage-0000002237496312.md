---
title: "AppLanguage"
original_url: /docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-applanguage-0000002237496312
format: md
upstream_id: distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-applanguage-0000002237496312
last_sync: 2026-06-07
sync_hash: b8cb15d9
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| language | M | String(20) | 应用支持的语言。 |
| appName | O | String(255) | 应用名称。  不少于2个字符，否则应用信息不完整。 |
| appDesc | M | String(8000) | 对应语言的应用介绍。  不少于2个字符，否则应用信息不完整。 |
| briefInfo | O | String(256) | 应用简介，用于新增应用一句话介绍。  不少于1个字符，否则应用信息不完整。 |
| newFeatures | M | String(1024) | 测试说明，描述测试版本的重点特性。 |
| formalVersionNewFeatures | O | String(1024) | 描述正式版本的重点特性。  当为测试版本时，该字段表示后续转成正式版本的新版本特性描述。 |
| deviceMaterials | O | `List&lt;[DeviceMaterial](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-devicematerial-0000002237336492)>` | 设备类型相关的素材。  数组长度不超过6。  说明：  素材的格式请参考[素材规范](/docs/distribute/agc/agc-help-appendix-0000002312305161/agc-help-app-visual-asset-spec-0000002277607976)。  注意：  接口不校验素材的格式（尺寸、分辨率、文件后缀等），请开发者自行保证素材格式的准确性，以免影响素材最终的呈现效果。 |
