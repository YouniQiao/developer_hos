---
title: "QualificationFileInfo"
original_url: /docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-qualificationfileinfo-0000002271160609
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| objectId | M | String(128) | 资质上传的objectId。  说明：  **objectId**的获取流程：先调用[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口，然后调用[上传文件](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-file-0000002271160621)接口上传文件，最后得到[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的**objectId**。 |
| fileName | M | String(128) | 资质文件名称。 |
| fileSize | M | Integer(64) | 资质文件大小。  单位：字节 |
| sha256 | M | String(128) | 资质文件SHA256值。 |
