---
title: "HmCodeOpenInfo"
original_url: /docs/distribute/agc/agc-help-harmonyoslabel-api-data-model-0000002349175964/agc-help-harmonyoslabel-api-hmcodeinfo-0000002382856349
format: md
upstream_id: distribute/agc/agc-help-harmonyoslabel-api-data-model-0000002349175964/agc-help-harmonyoslabel-api-hmcodeinfo-0000002382856349
last_sync: 2026-06-07
sync_hash: 99ab4f50
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| codeId | M | Integer | HarmonyOS标签ID，唯一标识。 |
| codeName | M | String | HarmonyOS标签名称。 |
| appIconObjectId | M | String | HarmonyOS应用图标对象ID。 |
| codeObjectId | M | String | HarmonyOS标签对象ID。 |
| codeURL | M | String | HarmonyOS标签下载链接。 |
| id | M | Long | 应用域名ID或元服务链接ID。 |
| idURL | M | String | 应用域名ID对应的URL或元服务链接ID对应的URL。 |
| customParameters | O | String | 自定义参数。 |
| servicePath | O | String | 服务路径。 |
| codeType | M | String | HarmonyOS标签类型。  取值范围：   * 1：碰扫合一 * 2：碰一碰  * 3：扫一扫 |
| state | M | String | HarmonyOS标签生成状态。  取值范围：   * 0：审核中 * 1：审核未通过 * 2：已生效 |
| createTime | M | Long | 创建时间，毫秒数。 |
| updateTime | M | Long | 最近更新时间，毫秒数。 |
| approvalTime | M | Long | 审核完成时间，毫秒数。 |
