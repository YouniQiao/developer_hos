---
title: "获取文件上传地址"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-upload-api-upload-url-0000002236201294
---

#### 功能介绍

上传文件至AppGallery Connect前需要先调用此接口获取上传地址，包括图片、视频、APP、PDF等文件。

此接口当前支持获取上传地址的应用软件包格式包括APP（HarmonyOS应用/元服务）。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/upload-url/for-obs |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-upload-api-upload-url-0000002236201294_0.png)

本接口支持使用Service Account方式、API客户端方式和OAuth客户端方式，区别请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\${JWT}*”。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\${access\_token}*”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

**OAuth客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| teamId | M | String(64) | 开发者所在团队的团队ID。 |
| oauth2Token | M | String | 认证信息，传入[获取用户授权码](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | M | String(32) | 应用ID。 |
| fileName | M | String(256) | 原始文件名，包含文件后缀。  主要用于在生成上传地址时获取原始文件后缀。 |
| sha256 | O | String(64) | 文件内容的SHA256哈希值。   * 如果传入此参数，文件在上传到文件服务器后会执行完整性校验。 * 如果不传则不做校验。 |
| contentLength | M | Integer | 文件内容的大小。  单位：字节。 |
| chineseMainlandFlag | O | Integer | 软件包是否分发中国大陆（不包括港澳台）。  取值范围：   * 0：不分发中国大陆 * 1：分发中国大陆   说明：  当开发者注册地非中国大陆时，必须设置**chineseMainlandFlag**参数。 |

#### 响应参数

![](../img/agc-help-upload-api-upload-url-0000002236201294_1.png)

获取的上传URL有效期约为5分钟，超时后此URL将失效，需重新调用接口获取上传URL。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-upload-api-data-connectret-0000002273607369) | 包含返回码及描述信息的结果。 |
| urlInfo | M | [CommonUrlInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-upload-api-data-commonurlinfo-0000002272577809) | 文件上传信息，包含请求方法、文件上传URL、请求头等信息。 |
