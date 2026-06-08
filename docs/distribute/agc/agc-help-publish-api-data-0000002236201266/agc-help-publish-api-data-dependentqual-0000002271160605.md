---
title: "DependentQual"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-dependentqual-0000002271160605
format: md
upstream_id: distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-dependentqual-0000002271160605
last_sync: 2026-06-07
sync_hash: bec2a696
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| qualCodes | O | String | 资质编码列表，具体请参见[资质编码与资质文件对照表](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-qualificationcode-0000002422741790)。  多个以英文逗号分隔。 |
| required | O | Integer(32) | 资质是否必选。  取值范围：   * 1：必选 * 0：非必选 |
| sort | O | Integer(32) | 资质的排序号。  示例：1 |
| qualLangInfos | O | `List&lt;[DependentQualLang](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-dependentquallang-0000002271000661)>` | 资质的多语言描述信息。 |
