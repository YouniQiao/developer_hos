---
title: "FilePartInfo"
original_url: /docs/distribute/agc/agc-help-upload-api-data-0000002272457913/agc-help-upload-api-data-filepartinfo-0000002237498540
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| sha256 | O | String(64) | 分片文件的sha256值。 |
| length | M | Integer(64) | 分片文件大小。  单位：字节  必须与分片的实际大小一致。单个分片最大限制为100MB。 |
