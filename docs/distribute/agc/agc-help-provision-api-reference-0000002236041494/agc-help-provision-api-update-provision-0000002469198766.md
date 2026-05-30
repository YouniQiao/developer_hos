---
title: "修改Profile绑定的设备"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-update-provision-0000002469198766
---

#### 功能介绍

此接口用于修改调试Profile绑定的调试设备，或者修改指定设备发布Profile绑定的测试设备。

![](../img/agc-help-provision-api-update-provision-0000002469198766_0.png)

调试Profile/指定设备发布Profile必须是“生效”状态才支持修改设备。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/provision |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-provision-api-update-provision-0000002469198766_1.png)

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

#### [h2]Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| provisionId | M | String(32) | Profile的ID。 |
| deviceIdList | M | `List&lt;String(32)>` | 调试/测试设备ID列表。  可通过[查询设备列表](https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-query-device-0000002236201306)接口获取。  数组长度不超过4000。 |

#### 请求样例

```
PUT /api/publish/v3/provision HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer ******
{
  "provisionId": "1443****504",
  "deviceIdList": [
    "14****208"
  ]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-data-connectret-0000002271000693) | 包含返回码及描述信息的结果。 |
| provisionInfo | O | [ProvisionInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-data-provisioninfo-0000002236041514) | 调试Profile/指定设备发布Profile信息。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "provisionInfo": {
    "id": "14***************04",
    "provisionName": "testProvision",
    "provisionType": 1,
    "certName": "0614-debug",
    "deviceList": [
      {
        "id": "14***************80",
        "deviceName": "de******me",
        "udid": "111111111222****************************************333333444444",
        "deviceType": 1,
        "createTime": "2024-06-14 11:55:28.676"
      }
    ],
    "aclPermissionList": [
      ""
    ],
    "aclPermissionAuditState": 0,
    "provisionDownloadUrl": "https://****/CN/2024061412/1718367940748-6ef9436f-6cd0-4b65-a1df-62174c795b40.p7b?X-Amz-Algorithm=****",
    "updateTime": 1718363106749,
    "expireTime": 1844598288000,
    "appId": "69****117",
    "tempFlag": "0"
  }
}
```
