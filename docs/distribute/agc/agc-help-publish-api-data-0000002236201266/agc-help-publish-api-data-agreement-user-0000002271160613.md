---
title: "Agreement（用户协议）"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-agreement-user-0000002271160613
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| id | O | String | 用户协议ID。 |
| type | O | Integer(32) | 协议类型。  取值范围：   * 2：用户协议 |
| agreementInfos | O | `List&lt;[AgreementInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-agreementinfo-user-0000002236041482)>` | 用户协议列表。  数组长度不超过100。 |
| versionCode | O | Integer(64) | 用户协议版本号。 |
| status | O | Integer | 用户协议状态。  取值范围：   * 2：已完成 * 3：已删除 |
| defaultLang | O | String(20) | 用户协议默认语言。  取值范围：   * zh：简体中文 * en：英语 * ug：维吾尔语 * bo：藏语 * zh-Hant-HK：繁体中文（中国香港特别行政区） * zh-Hant-TW：繁体中文（中国台湾） |
| createTime | O | Integer(64) | 用户协议创建时间。  时间是与1970年1月1日午夜之间的差值。  单位：毫秒  示例：1733555215000 |
| updateTime | O | Integer(64) | 用户协议最近更新时间。  时间是与1970年1月1日午夜之间的差值。  单位：毫秒  示例：1733555215000 |
