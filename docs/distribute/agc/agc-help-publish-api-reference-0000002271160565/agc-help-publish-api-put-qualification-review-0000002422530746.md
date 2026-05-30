---
title: "修改资质审核任务"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-put-qualification-review-0000002422530746
---

#### 功能介绍

此接口用于修改元服务的资质审核任务。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/qualification-review-task |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-put-qualification-review-0000002422530746_0.png)

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
| tagQualInfos | M | `List&lt;[TagQualInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-tagqualinfo-0000002236041478)>` | 标签和标签对应的资质信息列表。  数组长度不超过5。 |

#### 请求示例

```
PUT /api/publish/v2/qualification-review-task HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 414*******68
Content-Type: application/json
Authorization: Bearer ******
appId: 1******57
{
  "tagQualInfos": [
    {
      "tagId": "30000322",
      "taskId": "1****3",
      "qualificationInfos": [
        {
          "qualificationCode": "10023",
          "qualificationFileInfos": [
            {
              "objectId": "*******",
              "fileName": "f******e",
              "fileSize": 10,
              "sha256": "0********7"
            }
          ],
          "validityType": 0,
          "startTime": "2024-05-10",
          "expireTime": "2025-05-10"
        }
      ]
    }
  ]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  }
}
```
