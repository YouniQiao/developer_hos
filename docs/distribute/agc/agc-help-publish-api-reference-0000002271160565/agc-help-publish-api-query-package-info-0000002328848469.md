---
title: "查询应用软件包信息"
original_url: /docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-query-package-info-0000002328848469
format: md
upstream_id: distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-query-package-info-0000002328848469
last_sync: 2026-06-07
sync_hash: a501adb9
---
#### 功能介绍

此接口用于查询HarmonyOS应用/元服务的软件包信息。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/app-package-info |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-query-package-info-0000002328848469_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#h2创建api客户端)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| packageId | M | String(32) | 待查询的软件包ID。 |

#### 请求示例

```
GET /api/publish/v2/app-package-info?packageId=10004151 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 414*******68
Content-Type: application/json
Authorization: Bearer ******
appId: 1******57
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |
| packageInfo | M | [PackageInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-packageinfo-0000002328964965) | 软件包信息。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success."
  },
  "packageInfo": {
    "packageId": "16****60",
    "fileName": "pe****.app",
    "versionCode": 1000000,
    "versionName": "1.0.0",
    "buildVersion": "10.10.50",
    "allPermissions": [
      {
        "id": "ohos.permission.WRITE_CONTACTS",
        "deviceMultiReasons": [
          {
            "lang": "zh_CN",
            "reason": "label1",
            "videoUrl": "https://****/CN/2024121101/****"
          }
        ]
      },
      {
        "id": "hos.permission.READ_CONTACTS",
        "deviceMultiReasons": [
          {
            "lang": "zh_CN",
            "reason": "label2",
            "videoUrl": "https://****/CN/2024121101/****"
          }
        ]
      }
    ]
  }
}
```
