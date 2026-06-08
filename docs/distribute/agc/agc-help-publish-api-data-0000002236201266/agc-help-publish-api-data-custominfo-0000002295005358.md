---
title: "CustomInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-custominfo-0000002295005358
format: md
upstream_id: distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-custominfo-0000002295005358
last_sync: 2026-06-07
sync_hash: 1248ee4e
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| title | O | String(100) | 自定义章节标题。 |
| customInfoDesc | O | String(5000) | 自定义章节内容。 |
| customInfos | O | `List&lt;[CustomChapter](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-customchapter-0000002294845694)>` | 额外的自定义章节详情。  数组长度不超过5。 |
