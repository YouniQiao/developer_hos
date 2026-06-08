---
title: "停止测试版本"
original_url: /docs/distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-stop-test-version-0000002236041542
format: md
upstream_id: distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-stop-test-version-0000002236041542
last_sync: 2026-06-07
sync_hash: b9ebf77a
---
#### 功能介绍

此接口用于停止测试版本。

![](../img/agc-help-test-api-stop-test-version-0000002236041542_0.png)

停止测试版本后，测试版本会完全下架，不再支持编辑。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/test/version/stop |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-test-api-stop-test-version-0000002236041542_1.png)

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
| appId | M | String | 应用ID。 |

#### [h2]Body

请求Body中使用JSON格式携带测试版本信息，参数如下表所示。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| versionId | M | String(32) | 测试版本ID。 |

#### 请求示例

```
 POST /api/publish/v2/test/version/stop?appId=6917********65 HTTP/1.1
 Host: connect-api.cloud.huawei.com
 client_id: 4141******68
 Content-Type: application/json
 Authorization: Bearer *******
 {
   "versionId": "1418********32"
 }
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-connectret-0000002272455641) | 包含返回码及描述信息的结果。 |

#### 响应示例

```
{
     "ret": {
         "code": 0,
         "msg": "success"
     }
}
```
