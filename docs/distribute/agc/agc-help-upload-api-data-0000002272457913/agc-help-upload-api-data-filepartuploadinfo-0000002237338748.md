---
title: "FilePartUploadInfo"
original_url: /docs/distribute/agc/agc-help-upload-api-data-0000002272457913/agc-help-upload-api-data-filepartuploadinfo-0000002237338748
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| url | M | String | 分片上传地址。  上传地址有效期为4分钟，请在4分钟内调用[上传分片实体](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-upload-0000002236201298)接口上传分片。 |
| method | M | String | 上传分片时需要使用的HTTP请求方式。  默认值：PUT |
| partObjectId | M | String | 分片对象ID。  有可能为空字符串。 |
| headers | M | String | 使用分片上传地址上传分片文件时，请求头所需的参数，为JSON结构。  格式：`"Authorization":"\*\*\*","x-amz-content-sha256":"\*\*\*","x-amz-date":"\*\*\*","Host":"\*\*\*","Content-Type":"\*\*\*"}`  具体说明请参见[上传分片实体](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-upload-0000002236201298)接口。 |
