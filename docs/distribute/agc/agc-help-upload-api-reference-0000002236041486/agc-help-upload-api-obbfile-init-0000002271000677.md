---
title: "分片上传初始化"
original_url: /docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-init-0000002271000677
format: md
---


#### 功能介绍

此接口用于分片信息初始化，在获取分片文件上传地址前调用。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/upload/multipart/init |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-upload-api-obbfile-init-0000002271000677_0.png)

本接口支持使用Service Account方式、API客户端方式和OAuth客户端方式，区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

**OAuth客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| teamId | M | String(64) | 开发者所在团队的团队ID。 |
| oauth2Token | M | String | 认证信息，传入[获取用户授权码](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | M | String(32) | 应用ID。 |
| fileName | M | String(256) | 原始文件名，需要带文件后缀。 |
| contentType | O | String | 对象内容的类型。  为HTTP标准的content-type。  例如：image/jpeg  如果不传，则默认值：application/octet-stream |
| releaseType | O | Integer | 应用发布方式。  取值范围：   * 1：全网发布。 * 6：HarmonyOS测试发布（API>=10）。 |
| chineseMainlandFlag | O | Integer | 软件包是否分发中国大陆（不包括港澳台）。  取值范围：   * 0：不分发中国大陆 * 1：分发中国大陆 |

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-upload-api-data-0000002272457913/agc-help-upload-api-data-connectret-0000002273607369) | 包含返回码及描述信息的结果。 |
| objectId | M | String(128) | 生成的对象ID。  在[获取分片上传地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490)时需要使用此ID。 |
| nspPartMinSize | M | Integer(64) | 分片文件的最小值。  单位：字节  默认值：5,242,880（即5MB） |
| nspPartMaxSize | M | Integer(64) | 分片文件的最大值。  单位：字节  默认值：1,073,741,824（即1024MB） |
| nspUploadId | M | String(128) | 文件上传ID。  在[获取分片上传地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-obbfile-uploadurl-0000002236041490)时需要使用此ID。 |
