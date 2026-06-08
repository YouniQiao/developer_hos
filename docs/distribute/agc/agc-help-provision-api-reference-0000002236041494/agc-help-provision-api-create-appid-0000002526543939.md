---
title: "创建APP ID"
original_url: /docs/distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-create-appid-0000002526543939
format: md
upstream_id: distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-create-appid-0000002526543939
last_sync: 2026-06-07
sync_hash: 94cfdecd
---
#### 功能介绍

此接口用于为HarmonyOS应用/元服务创建APP ID。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/app |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-provision-api-create-appid-0000002526543939_0.png)

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
| projectId | M | String | 项目ID，获取方法请参见[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appName | M | String(64) | 应用名称。 |
| packageName | O | String(128) | 应用包名。  说明：  installationFree取值为0（HarmonyOS应用）时，此参数必填。 |
| parentType | M | Integer(32) | 应用分类。  取值范围：   * 2：游戏 * 13：应用 |
| installationFree | M | Integer(32) | 应用类型。  取值范围：   * 0：HarmonyOS应用 * 1：元服务   默认值：0 |

#### 请求样例

```
POST /api/publish/v3/app?projectId=10****59 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer ******
{
  "appName": "appName",
  "packageName": "com.xxx.xxx",
  "parentType": 13,
  "installationFree": 0
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-connectret-0000002271000693) | 包含返回码及描述信息的结果。 |
| appId | O | String | 应用ID。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "appId": "69****117"
}
```
