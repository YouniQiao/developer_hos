---
title: "上传文件"
original_url: /docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-file-0000002271160621
format: md
upstream_id: distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-file-0000002271160621
last_sync: 2026-06-07
sync_hash: 3fa23335
---
#### 功能介绍

客户端或服务器向AppGallery Connect上传相关文件接口。

浏览器或客户端与服务器之间的接口协议采用HTTPS，Content-Type采用application/octet-stream格式，文件使用application/octet-stream格式编码添加到HTTPS报文中。

此接口当前支持上传的应用软件包包括APP（HarmonyOS应用/元服务）。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 使用约束

* 文件大小上限：针对APP（HarmonyOS应用/元服务）软件包，HarmonyOS应用不超过4GB，元服务不超过10MB。
* 文件类型要求与[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)中请求的文件名后缀相同。
* 用户头像需采用文件加密存储。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | [获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口中获取的URL地址。 |
| 数据格式 | 请求：Content-Type: application/octet-stream  响应：Content-Type: application/json |

#### 请求参数

#### [h2]header

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 校验信息。  对应[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的headers参数中的**Authorization**。 |
| x-amz-content-sha256 | M | String | 文件对象内容的SHA256哈希值。  对应[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的headers参数中的**x-amz-content-sha256**。 |
| x-amz-date | M | String | 文件上传地址生成的时间。  对应[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的headers参数中的**x-amz-date**。 |
| Host | M | String | 上传服务器地址。  对应[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的headers参数中的**Host**。 |
| user-agent | M | String | 用户代理。  对应[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的headers参数中的**user-agent**。 |
| Content-Type | M | String | 对象内容的类型。  对应[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的headers参数中的**Content-Type**。 |

#### [h2]Body

请求Body为二进制形式的文件内容，对应**Content-Type**为application/octet-stream，文件的大小必须和获取文件上传地址时填写的**contentLength**一致。

#### 响应参数

接口返回的HTTP状态码为200时，表示文件上传成功。
