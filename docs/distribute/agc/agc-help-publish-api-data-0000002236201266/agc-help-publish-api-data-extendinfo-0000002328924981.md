---
title: "ExtendInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-extendinfo-0000002328924981
format: md
upstream_id: distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-extendinfo-0000002328924981
last_sync: 2026-06-07
sync_hash: d5fa32e8
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| contactInfo | O | [ContactInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-contactinfo-0000002328805225) | 联系方式详情。 |
| storageInfo | O | [StorageInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-storageinfo-0000002295005350) | 存储信息。 |
| childPrivacyUrl | O | String(512) | 未成年人隐私保护url。 |
| versionChangeDescs | O | `List&lt;[VersionChangeDesc](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-versionchangedesc-0000002294845686)>` | 版本变更说明。 |
| abstracts | O | String(300) | 摘要信息。 |
| managePersonalInfo | O | [ManagePersonalInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-managepersionalinfo-0000002328924985) | 个人信息管理详情。 |
| customInfo | O | [CustomInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-custominfo-0000002295005358) | 自定义章节详情。 |
| extField | O | String(8192) | 扩展字段。  说明：  扩展字段的value不允许为空字符串，空字符串表示删除此扩展字段。 |
| extFieldCustomInfo | O | [ExtFieldCustomInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-extfieldcustominfo-0000002328924997) | 儿童隐私详情。 |
