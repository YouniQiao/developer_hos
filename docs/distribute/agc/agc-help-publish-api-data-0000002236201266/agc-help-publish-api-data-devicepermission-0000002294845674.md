---
title: "DevicePermission"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicepermission-0000002294845674
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| permissions | O | `List&lt;[Permission](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-permission-0000002328924977)>` | 权限详情。  数组长度为1~200。 |
| reasonId | O | String(64) | 权限理由ID。 |
| reason | O | String(500) | 权限理由描述。 |
| groupId | O | String(100) | 权限groupId。 |
| groupName | O | String(256) | 权限groupName。 |
