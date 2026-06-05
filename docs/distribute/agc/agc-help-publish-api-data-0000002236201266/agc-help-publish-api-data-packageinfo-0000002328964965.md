---
title: "PackageInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-packageinfo-0000002328964965
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| packageId | O | String | 软件包ID。 |
| fileName | O | String | 软件包文件名称。 |
| versionCode | O | Integer(64) | 版本号，对应软件包中的versionCode。 |
| versionName | O | String | 版本描述，对应软件包中的versionName。 |
| buildVersion | O | String | 构建版本号，用于区分同一主版本下的不同测试子版本。 |
| allPermissions | O | `List&lt;[AllPermission](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-allpermission-0000002295046904)>` | 所有权限信息。 |
