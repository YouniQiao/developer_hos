---
title: "AppDomainConfig"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-domain-api-data-appdomainconfig-0000002237503148
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | O | String(32) | 元服务的应用ID。 |
| appName | O | String(128) | 元服务名称。  通常由运营录入，不一定是应用信息中的真实名称。 |
| modifyCounts | O | Integer(32) | 每个月修改次数。 |
| serverDomainCounts | O | Integer(32) | 服务器域名上限。 |
| businessDomainCounts | O | Integer(32) | 业务域名上限。 |
| updateTime | O | Integer(64) | 该配置最后一次修改时间。  UTC时间戳。 |
