---
title: "FileInfo"
original_url: /docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-fileinfo-0000002272575549
format: md
upstream_id: distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-fileinfo-0000002272575549
last_sync: 2026-06-07
sync_hash: 4bbb42f2
---
| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| fileName | M | String(255) | 文件名称，包括文件的后缀名。 |
| objectId | M | String(1024) | 文件在文件服务器中的对象ID。  说明：  **objectId**的获取流程：先调用[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口，然后调用[上传文件](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-file-0000002271160621)接口上传文件，最后得到[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的**objectId**。 |
