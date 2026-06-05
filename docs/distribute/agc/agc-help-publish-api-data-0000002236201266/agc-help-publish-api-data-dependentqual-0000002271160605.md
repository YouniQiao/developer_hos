---
title: "DependentQual"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-dependentqual-0000002271160605
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| qualCodes | O | String | 资质编码列表，具体请参见[资质编码与资质文件对照表](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-appendix-qualificationcode-0000002422741790)。  多个以英文逗号分隔。 |
| required | O | Integer(32) | 资质是否必选。  取值范围：   * 1：必选 * 0：非必选 |
| sort | O | Integer(32) | 资质的排序号。  示例：1 |
| qualLangInfos | O | `List&lt;[DependentQualLang](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-dependentquallang-0000002271000661)>` | 资质的多语言描述信息。 |
