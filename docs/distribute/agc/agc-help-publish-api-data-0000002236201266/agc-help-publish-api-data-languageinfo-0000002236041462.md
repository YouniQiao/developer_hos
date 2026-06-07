---
title: "LanguageInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-languageinfo-0000002236041462
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| lang | O | String(8) | 当前语言。  说明：  取值参见[语言类型](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-langtype-0000002236041558)。 |
| appName | O | String(64) | 当前语言的应用名称。 |
| appDesc | O | String(8000) | 当前语言的应用描述。 |
| briefInfo | O | String(80) | 当前语言的一句话简介。 |
| newFeatures | O | String(500) | 当前语言的新版本简介。 |
| icon | O | String(256) | 当前语言的图标地址。 |
| showType | O | Integer | 当前语言的截图展现方式。  取值范围：   * 0：竖屏 * 1：横屏 |
| videoShowType | O | Integer | 当前语言的视频展现方式。  取值范围：   * 0：竖屏 * 1：横屏 |
| introPic | O | String(4096) | 应用介绍的截图地址。  多个地址以逗号隔开，最多不超过10个地址。 |
| introVideo | O | String(4096) | 应用的介绍视频地址和视频截图地址。  最多5个视频，每个视频必须对应截图。  示例：[`"videoUrl":"XXX/app/000/000/375/20160512143416.mp4","frameUrl":"XXX/app/000/000/375/20160512143416.68439491.jpg"}`,`"videoUrl":"/app/000/000/376/20160512143416.mp4","frameUrl":"/app/000/000/376/20160512143416.68439491.jpg"}`] |
| rcmdPic | O | String(4096) | 应用的推荐截图地址。  多个地址以逗号隔开，最多不超过10个地址。 |
| rcmdVideo | O | String(4096) | 应用的推荐视频地址以及视频截图地址。  最多5个视频，每个视频必须对应截图。  示例：[`"videoUrl":"XXX/app/000/000/375/20160512143416.mp4","frameUrl":"XXX/app/000/000/375/20160512143416.68439491.jpg"}`,`"videoUrl":"/app/000/000/376/20160512143416.mp4","frameUrl":"/app/000/000/376/20160512143416.68439491.jpg"}`] |
| deviceMaterials | O | `List&lt;[DeviceMaterial](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicematerial-0000002236201274)>` | 设备相关的素材，包括图片、视频。  数组长度不超过6。   * 应用为多设备时，只显示手机的相关素材信息。 * 应用为单设备时，显示对应设备相关的素材信息。 |
