---
title: "QualificationInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-qualificationinfo-0000002236201286
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| qualificationCode | M | String(32) | 资质编码，具体请参见[资质编码与资质文件对照表](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-qualificationcode-0000002422741790)。 |
| qualificationFileInfos | M | `List&lt;[QualificationFileInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-qualificationfileinfo-0000002271160609)>` | 资质文件信息列表。  数组长度不超过10。 |
| validityType | M | Integer(32) | 资质有效期类型。  取值类型：   * 0：自定义有效期 * 1：永久有效   默认值：0 |
| startTime | O | String(20) | 资质有效期开始时间。  UTC时间格式：*yyyy-MM-dd*  示例：2024-05-10 |
| expireTime | O | String(20) | 资质有效期结束时间。  UTC时间格式：*yyyy-MM-dd*  示例：2024-05-10  说明：  请保证剩余有效期大于30天。 |
