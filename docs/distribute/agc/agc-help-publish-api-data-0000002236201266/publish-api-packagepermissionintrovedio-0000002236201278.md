---
title: "PackagePermissionIntroVideo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/publish-api-packagepermissionintrovedio-0000002236201278
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| lang | M | String(8) | 语言种类。  说明：  取值参见[语言类型](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-langtype-0000002236041558)。 |
| permissionName | M | String(512) | 权限标记字符串。 |
| deviceType | M | Integer(32) | 设备类型。  取值范围：   * 4：手机 * 5：平板 * 8：智慧屏 * 12：智能手表 * 14：运动手表 * 19：PC/2in1 |
| objectId | M | String(512) | 文件在OBS上的objectId。  说明：  **objectId**的获取流程：先调用[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口，然后调用[上传文件](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-file-0000002271160621)接口上传文件，最后得到[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的**objectId**。 |
