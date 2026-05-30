---
title: "更新用户协议"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-update-user-agreement-0000002294845626
---

#### 功能介绍

此接口用于更新HarmonyOS应用/元服务的用户协议信息。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/agreement |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-update-user-agreement-0000002294845626_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\${JWT}*”。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\${access\_token}*”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| id | M | String(32) | 用户协议ID。 |
| defaultLang | O | String(20) | 用户协议默认语言。  取值范围：   * zh：简体中文 * en：英语 * ug：维吾尔语 * bo：藏语 * zh-Hant-HK：繁体中文（中国香港特别行政区） * zh-Hant-TW：繁体中文（中国台湾） |
| agreementInfos | O | `List&lt;[AgreementInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-agreementinfo-user-0000002236041482)>` | 用户协议列表。  数组长度不超过100。 |

#### 请求示例

```
PUT /api/publish/v2/agreement HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 414*******68
Content-Type: application/json;
Authorization: Bearer *****
appId: 1******57
{
  "id": "15********08",
  "defaultLang": "zh",
  "agreementInfos": [
    {
      "lang": "zh",
      "baseInfo": {
        "name": "新增",
        "agreementTitle": "新增中文",
        "userAgreementUrl": "https://*****/****/****"
      }
    },
    {
      "lang": "en",
      "baseInfo": {
        "name": "新增",
        "agreementTitle": "新增英文",
        "userAgreementUrl": "https://*****/****/****"
      }
    },
    {
      "lang": "zh-Hant-HK",
      "baseInfo": {
        "name": "新增",
        "agreementTitle": "香港",
        "userAgreementUrl": "https://*****/****/****"
      }
    }
  ]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |
| id | O | String | 用户协议ID。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success."
  },
  "id": "15********08"
}
```
