---
title: "FilePartComposeInfo"
original_url: /docs/distribute/agc/agc-help-upload-api-data-0000002272457913/agc-help-upload-api-data-filepartcomposeinfo-0000002272457917
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| partObjectId | M | String(64) | 分片对象ID。  必须与[获取分片上传地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490)时返回的**partObjectId**一致。 |
| etag | M | String(64) | [上传分片实体](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-upload-0000002236201298)时返回的分片的**Etag**值。 |
