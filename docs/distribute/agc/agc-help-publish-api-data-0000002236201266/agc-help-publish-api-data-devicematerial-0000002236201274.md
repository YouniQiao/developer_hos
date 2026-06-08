---
title: "DeviceMaterial"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicematerial-0000002236201274
format: md
upstream_id: distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicematerial-0000002236201274
last_sync: 2026-06-07
sync_hash: 1c648c60
---
| 参数名称 | 必选（M）/可选（O） | 类型 | 参数说明 |
| --- | --- | --- | --- |
| deviceType | M | Integer | 设备类型。  取值范围：   * 4：手机 * 5：平板 * 8：智慧屏 * 12：智能手表 * 14：运动手表 * 19：PC/2in1 |
| appIcon | O | String(300) | 应用图标下载地址。  注意：  作为输入参数是相对地址，作为查询结果是完整地址。 |
| screenShots | O | `List&lt;String(300)>` | 应用截屏地址。  多个地址以英文逗号隔开，最多不超过10个地址，最少不少于3个地址。  注意：  作为输入参数是相对地址，作为查询结果是完整地址。 |
| banner | O | String(300) | 高清大图地址。  注意：  作为输入参数是相对地址，作为查询结果是完整地址。 |
| showType | O | Integer | 截图展现方式。  取值范围：   * 0：竖屏 * 1：横屏 |
| introVideos | O | `List&lt;String(300)>` | 介绍视频。  Json字符串格式，含有**videoUrl**、**frameUrl**两个字段，数组长度最多5个。  示例："introVideos": ["`````{\"frameUrl\":\"https://\*\*.cn:18445/FileServer/D11.jpeg\",\"videoUrl\":\"https://\*.\*.cn:18445/82C.mp4\"}`````" ] |
| rcmdVideos | O | `List&lt;String(300)>` | 推荐视频。  Json字符串格式，含有**videoUrl**、**frameUrl**两个字段。数组长度最多5个。  示例："rcmdVideos": ["`````{\"frameUrl\":\"https://\*.\*.cn:18445/5D7.jpeg\",\"videoUrl\":\"https://\*.\*.cn:18445/97A.mp4\"}`````" |
| promoGraphics | O | `List&lt;String(300)>` | 宣传图片地址。  多个地址以英文逗号隔开，最多不超过10个地址。  注意：  作为输入参数是相对地址，作为查询结果是完整地址。 |
| rcmdPics | O | String(2560) | 推荐图片地址。  多个地址以英文逗号隔开，最多不超过10个地址。 |
| videoShowType | O | Integer | 视频展现方式。  取值范围：   * 0：竖屏 * 1：横屏 |
