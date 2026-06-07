---
title: "BriefVersionInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-briefversioninfo-0000002271000657
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| versionId | O | String | 版本ID。 |
| state | O | Integer | 版本状态。  说明：  **state**字段的取值请参考**AppInfo**中的[releaseState](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-appinfo-0000002236041454#ZH-CN_TOPIC_0000002236041454__zh-cn_topic_0000002093216050_zh-cn_topic_0000001057964443_p38168214)参数。 |
| lastVersionId | O | String | 应用的上一个上架版本ID。 |
| releaseType | O | Integer(32) | 应用发布方式。  取值范围：   * 1：全网 * 6：HarmonyOS测试发布方式（API>=10）   默认值：1 |
| releasePhase | O | Integer(32) | 分阶段发布标识。  取值范围：   * 0：全网 * 3：分阶段 * 4：分阶段转全网 |
| updateTime | O | Integer(64) | 最近更新时间。  此时间是与1970年1月1日午夜之间的差值。  单位：毫秒  示例：1675992294335 |
| packageList | O | `List&lt;[BriefPackageInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-briefpackageinfo-0000002236041470)>` | 软件包信息列表。 |
