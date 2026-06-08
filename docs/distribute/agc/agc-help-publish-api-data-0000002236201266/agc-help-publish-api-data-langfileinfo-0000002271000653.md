---
title: "LangFileInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-langfileinfo-0000002271000653
format: md
upstream_id: distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-langfileinfo-0000002271000653
last_sync: 2026-06-07
sync_hash: cd8140ba
upstream_hash: 1c29b01bc6e2
---

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| lang | M | String(8) | 语言种类。  说明：  取值参见[语言类型](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-langtype-0000002236041558)。  更新图片、视频时此参数必选。 |
| fileInfoList | M | `List&lt;[FileInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-fileinfo-0000002236041466)>` | 文件信息。  数组长度不超过20。 |
