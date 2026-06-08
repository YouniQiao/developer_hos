---
title: "新建用户协议"
original_url: /docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-create-user-agreement-0000002271160581
format: md
upstream_id: distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-create-user-agreement-0000002271160581
last_sync: 2026-06-07
sync_hash: ee947123
---
#### 功能介绍

此接口用于新建HarmonyOS应用/元服务的用户协议。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/agreement |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-create-user-agreement-0000002271160581_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| type | M | Integer(32) | 协议类型。  取值范围：   * 2：用户协议 |
| defaultLang | O | String(20) | 用户协议默认语言。  取值范围：   * zh：简体中文 * en：英语 * ug：维吾尔语 * bo：藏语 * zh-Hant-HK：繁体中文（中国香港特别行政区） * zh-Hant-TW：繁体中文（中国台湾） |
| agreementInfos | O | [AgreementInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-agreementinfo-user-0000002236041482) | 用户协议列表。  数组长度不超过100。 |

#### 请求示例

```
POST /api/publish/v2/agreement HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 414*******68
Content-Type: application/json;
Authorization: Bearer *****
appId: 1******57
{
  "type": 2,
  "channel": 1,
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
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |
| id | O | String | 用户协议ID。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "id": "45******56"
}
```
