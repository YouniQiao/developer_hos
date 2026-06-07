---
title: "FileInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-fileinfo-0000002236041466
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| deviceType | M | Integer(32) | 设备类型。  取值范围：   * 4：手机 * 5：平板 * 8：智慧屏 * 12：智能手表 * 14：运动手表 * 19：PC/2in1 |
| objectIdList | M | `List&lt;String(512)>` | 文件在OBS上的objectId。  说明：  **objectId**的获取流程：先调用[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口，然后调用[上传文件](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-file-0000002271160621)接口上传文件，最后得到[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的**objectId**。  数组长度不超过10。  说明：  * 如果是应用介绍视频，最多3个视频以及对应海报。files中必须先传视频再传海报，且视频和海报必须交替上传，即先传第1组的视频再传对应的海报，再传下一组视频和海报。 * 如果是推荐视频，1个推荐视频以及对应海报。files中必须先传视频再传海报。 |
| showType | O | Integer | 当前语言的截图展现方式。  取值范围：   * 0：竖屏 * 1：横屏 |
