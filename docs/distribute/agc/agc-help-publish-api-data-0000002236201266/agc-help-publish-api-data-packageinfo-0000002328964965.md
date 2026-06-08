---
title: "PackageInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-packageinfo-0000002328964965
format: md
upstream_id: distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-packageinfo-0000002328964965
last_sync: 2026-06-07
sync_hash: 757b7bf7
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| packageId | O | String | 软件包ID。 |
| fileName | O | String | 软件包文件名称。 |
| versionCode | O | Integer(64) | 版本号，对应软件包中的versionCode。 |
| versionName | O | String | 版本描述，对应软件包中的versionName。 |
| buildVersion | O | String | 构建版本号，用于区分同一主版本下的不同测试子版本。 |
| allPermissions | O | `List&lt;[AllPermission](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-allpermission-0000002295046904)>` | 所有权限信息。 |
