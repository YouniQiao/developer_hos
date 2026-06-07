---
title: "DeviceMaterial"
original_url: /docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-devicematerial-0000002237336492
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| deviceType | M | Integer | 设备类型。  取值范围：   * 4：手机 * 5：平板 * 12：智能手表 * 14：运动手表 |
| appIcon | O | String(300) | 应用图标下载地址。  不少于1个字符，否则应用信息不完整。  注意：  作为输入参数是相对地址，作为查询结果是完整地址。 |
| screenShots | O | `List&lt;String(300)>` | 应用截屏地址。  不少于1个字符，否则应用信息不完整。  多个地址以英文逗号隔开，最多不超过10个地址，最少不少于3个地址。  注意：  作为输入参数是相对地址，作为查询结果是完整地址。 |
| showType | O | Integer | 截图展现方式。  取值范围：   * 0：竖屏 * 1：横屏 |
| promoGraphics | O | `List&lt;String(300)>` | 宣传图片地址。  多个地址以英文逗号隔开，最多不超过10个地址。  注意：  作为输入参数是相对地址，作为查询结果是完整地址。 |
