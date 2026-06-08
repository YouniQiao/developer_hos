---
title: "ThirdSharedInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-thirdsharedinfo-0000002294845678
format: md
upstream_id: distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-thirdsharedinfo-0000002294845678
last_sync: 2026-06-07
sync_hash: 30b85047
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| name | O | String(100) | 第三方名称。 |
| purpose | O | String(500) | 使用目的。 |
| personalType | O | String(500) | 涉及个人信息的种类。 |
| officialPrivacyUrl | O | String(1024) | 第三方的官网链接和隐私政策链接。 |
| serviceType | O | String(100) | 共享信息的服务类型。 |
| scene | O | String(200) | 使用场景。 |
| shareType | O | String(100) | 共享方式。 |
| dataItems | O | `List&lt;[DataItem](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-dataitem-0000002328924933)>` | 第三方数据信息。  数组长度不超过200。 |
