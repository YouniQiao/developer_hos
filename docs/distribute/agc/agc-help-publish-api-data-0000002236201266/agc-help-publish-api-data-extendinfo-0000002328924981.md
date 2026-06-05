---
title: "ExtendInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-extendinfo-0000002328924981
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| contactInfo | O | [ContactInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-contactinfo-0000002328805225) | 联系方式详情。 |
| storageInfo | O | [StorageInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-storageinfo-0000002295005350) | 存储信息。 |
| childPrivacyUrl | O | String(512) | 未成年人隐私保护url。 |
| versionChangeDescs | O | `List&lt;[VersionChangeDesc](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-versionchangedesc-0000002294845686)>` | 版本变更说明。 |
| abstracts | O | String(300) | 摘要信息。 |
| managePersonalInfo | O | [ManagePersonalInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-managepersionalinfo-0000002328924985) | 个人信息管理详情。 |
| customInfo | O | [CustomInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-custominfo-0000002295005358) | 自定义章节详情。 |
| extField | O | String(8192) | 扩展字段。  说明：  扩展字段的value不允许为空字符串，空字符串表示删除此扩展字段。 |
| extFieldCustomInfo | O | [ExtFieldCustomInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-extfieldcustominfo-0000002328924997) | 儿童隐私详情。 |
