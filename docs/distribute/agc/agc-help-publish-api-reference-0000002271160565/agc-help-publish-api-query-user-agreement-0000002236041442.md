---
title: "查询用户协议列表"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-query-user-agreement-0000002236041442
---

#### 功能介绍

此接口用于查询HarmonyOS应用/元服务的用户协议信息。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/agreement/list |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-query-user-agreement-0000002236041442_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| agreementIdList | O | `List&lt;String(64)>` | 用户协议ID。  数组长度为1~1000。 |
| name | M | String(100) | 用户协议名称。  使用模糊查询方式。 |
| status | O | Integer(32) | 用户协议状态。  取值范围：   * 2：已完成 * 3：已删除 |
| type | O | Integer(32) | 协议类型。  取值范围：   * 2：用户协议 |
| fromRecCount | O | Integer(32) | 查询起始位置。  默认值：1 |
| maxReqCount | O | Integer | 最大请求查询数。  取值范围：[1,100]  默认值：30 |

#### 请求示例

```
POST /api/publish/v2/agreement/list HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer ******
appId: 1******57
{
  "agreementIdList": [
    ""
  ],
  "name": "",
  "status": 2,
  "type": 2,
  "fromRecCount": 1,
  "maxReqCount": 30
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |
| totalCount | O | Integer | 用户协议总数量。 |
| agreements | O | [Agreement](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-agreement-user-0000002271160613) | 用户协议信息列表。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "totalCount": 1,
  "agreements": [
    {
      "id": "15********08",
      "type": 2,
      "agreementInfos": [
        {
          "lang": "zh",
          "baseInfo": {
          "name": "N*******9",
          "agreementTitle": "**********",
          "userAgreementUrl": "http://**********"
          }
        }
      ],
      "versionCode": 1,
      "status": 2,
      "defaultLang": "zh",
      "createTime": 1733555215000,
      "updateTime": 1733555215000
    }
  ]
}
```
