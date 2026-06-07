---
title: "上传分片实体"
original_url: /docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-upload-0000002236201298
format: md
---


#### 功能介绍

此接口用于将分片实体文件上传到AppGallery Connect服务器，每次调用只能上传一个分片，支持多次调用逐个上传多个分片。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | [获取分片上传地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490)接口中返回的**method**参数中指定的请求方式。 |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | [获取分片上传地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490)接口中返回的分片文件上传地址（参见**FilePartUploadInfo**的**url**参数）。 |
| 数据格式 | 请求：Content-Type: application/octet-stream  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 校验信息。  对应[获取分片上传地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490)接口返回的headers参数中的**Authorization**。 |
| x-amz-content-sha256 | M | String | 文件对象内容的SHA256哈希值。  对应[获取分片上传地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490)接口返回的headers参数中的**x-amz-content-sha256**。 |
| x-amz-date | M | String | 文件上传地址生成的时间。  对应[获取分片上传地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490)接口返回的headers参数中的**x-amz-date**。 |
| Host | M | String | 上传服务器地址。  对应[获取分片上传地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490)接口返回的headers参数中的**Host**。 |
| Content-Type | M | String | 对象内容的类型。  对应[获取分片上传地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490)接口返回的headers参数中的**Content-Type**。 |

#### [h2]Body

请求Body为二进制形式的分片文件内容，对应**Content-Type**为application/octet-stream，文件的大小必须和获取文件上传地址时填写的**length**一致，最大不能超过100MB。

#### 响应参数

HTTP响应码为200时表示上传成功，成功时在header中会携带如下参数。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ETag | M | String(header) | 响应消息header中的ETag值。  每个分片Etag不相同，在合并分片时需要使用。 |

HTTP响应码非200时表示上传失败，请检查[获取分片上传地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490)时参数是否传入准确。
