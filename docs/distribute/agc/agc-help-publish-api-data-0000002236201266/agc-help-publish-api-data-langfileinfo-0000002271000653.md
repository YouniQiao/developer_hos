---
title: "LangFileInfo"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-langfileinfo-0000002271000653
format: md
---


| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| lang | M | String(8) | 语言种类。  说明：  取值参见[语言类型](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-appendix-langtype-0000002236041558)。  更新图片、视频时此参数必选。 |
| fileInfoList | M | `List&lt;[FileInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-fileinfo-0000002236041466)>` | 文件信息。  数组长度不超过20。 |
