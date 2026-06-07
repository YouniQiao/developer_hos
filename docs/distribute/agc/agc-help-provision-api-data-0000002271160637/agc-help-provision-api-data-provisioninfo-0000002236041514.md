---
title: "ProvisionInfo"
original_url: /docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-provisioninfo-0000002236041514
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| id | O | String(32) | Profile的ID。 |
| provisionName | O | String(256) | Profile的名称。 |
| provisionType | O | Integer(32) | Profile类型。  取值范围：   * 1：调试 * 2：发布 * 3：In-house发布 * 6：指定设备发布 |
| certName | O | String(100) | 证书名称。 |
| deviceList | O | `List&lt;[DeviceInfo](/docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-deviceinfo-0000002271000697)>` | 关联调试设备列表。 |
| aclPermissionList | O | `List&lt;String>` | 受限ACL权限列表。  数组长度不超过1000。  说明：  仅支持**受限ACL权限**已审核通过的应用使用，申请方式可参见[申请受限ACL权限](/docs/distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-applyacl-0000002502198721)。 |
| aclPermissionAuditState | O | Integer(32) | 受限ACL权限审核状态。  说明：  仅支持**受限ACL权限**已审核通过的应用使用，申请方式可参见[申请受限ACL权限](/docs/distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-applyacl-0000002502198721)。 |
| provisionDownloadUrl | O | String | Profile文件下载URL。 |
| updateTime | O | Integer(64) | Profile更新时间。 |
| expireTime | O | Integer(64) | Profile失效时间。 |
| appId | O | string | 应用ID。 |
| tempFlag | O | Integer(64) | Profile类型是否为**试用调试Profile**。   * 0：否 * 1：是 说明：  [申请的ACL权限](/docs/distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-applyacl-0000002502198721)处于申请中，才能创建试用调试Profile，该Profile的有效期为5天。 |
