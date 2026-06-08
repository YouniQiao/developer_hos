---
title: "SceneItem"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-sceneitem-0000002294845634
format: md
upstream_id: distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-sceneitem-0000002294845634
last_sync: 2026-06-07
sync_hash: bfb73288
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| dataItems | O | `List&lt;[DataItem](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-dataitem-0000002328924933)>` | 数据信息。  数组长度不超过200。 |
| sceneId | O | String(64) | 收集项用途ID。 |
| sceneReason | O | String(500) | 收集项用途描述。 |
| collectModeId | O | String(64) | 收集方式ID。 |
| collectMode | O | String(500) | 收集方式描述。 |
| legalBasisId | O | String(64) | 法律基础ID。 |
| legalBasis | O | String(500) | 法律基础描述。 |
| remark | O | String(500) | 补充说明。 |
