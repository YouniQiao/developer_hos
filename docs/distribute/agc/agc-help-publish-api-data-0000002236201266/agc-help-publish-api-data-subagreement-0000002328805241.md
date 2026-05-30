---
title: "SubAgreement"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-subagreement-0000002328805241
---

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| id | O | String | 隐私政策协议ID。 |
| srcAgreementId | O | String | 源隐私政策协议ID。 |
| templateId | O | String | 隐私政策协议模板ID。 |
| templateType | O | Integer(32) | 隐私政策协议模板类型。  取值范围：   * 空 * 1：元服务模板 * 2：HarmonyOS应用模板 |
| type | O | Integer(32) | 协议类型。  取值范围：   * 1：隐私政策协议 |
| agreementInfos | O | `List&lt;[AgreementInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-agreementinfo-privacy-0000002294845630)>` | 隐私政策协议列表。  数组长度不超过100。 |
| versionCode | O | Integer(64) | 隐私政策协议版本号。 |
| status | O | Integer | 隐私政策协议状态。  取值范围：   * 1：草稿 * 2：已完成 * 3：已删除 * 不传值：默认查未删除的记录 |
| lastAuditResult | O | String | CMS审核结果。  说明：  * 若隐私政策协议被在架版本关联，编辑后需要提交华为运营审核，待协议审核通过后，更新的内容方可生效。 * 若结果为“审核中”，或隐私政策协议被状态为“审核中”的应用关联，将不支持编辑。 |
| urls | O | `List&lt;String(256)>` | url列表，多语言的后面对应拼接不同的语言，从隐私政策协议模板中获取对应的url，进行拼接。  数组长度为1~100。 |
| createTime | O | Integer(64) | 隐私政策协议创建时间与1970年1月1日午夜之间的差值，以毫秒为单位。例如：1733555215000 |
| updateTime | O | Integer(64) | 隐私政策协议最近更新时间与1970年1月1日午夜之间的差值，以毫秒为单位。例如：1733555215000 |
