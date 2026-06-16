---
title: "更新版本上架时间"
original_url: /docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-update-release-time-0000002271160573
format: md
upstream_id: distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-update-release-time-0000002271160573
last_sync: 2026-06-07
sync_hash: b8f373e3
---
#### 功能介绍

此接口用于设置版本的上架时间。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/on-shelf-time |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-update-release-time-0000002271160573_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#h2创建api客户端)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | M | String | 应用ID。 |

#### [h2]Body

请求Body中使用JSON格式携带更新版本上架时间内容，参数如下表所示。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| changeType | M | Integer | 修改类型。  取值范围：   * 2：指定时间上架改为审核通过立即上架 * 3：变更定时上架时间 |
| releaseTime | M | String | 指定的版本上架时间。  UTC时间格式：yyyy-MM-ddTHH:mm:ssZZ，例如“2015-01-01T01:01:01+0800”。  **changeType**为3时有效。 |
| releaseType | M | Integer | 发布方式。  取值范围：   * 1：全网   目前支持全网及[releasePhase](/docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-app-submit-0000002271160585#ZH-CN_TOPIC_0000002271160585__li150910519461)为3的分阶段发布。 |

#### 请求示例

```
PUT /api/publish/v2/on-shelf-time?appId=1******57 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer ******
{
    "changeType":3,
    "releaseTime":"2015-01-01T01:01:01+0800",
    "releaseType":1
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |

#### 响应示例

```
{
    "ret": {
        "code": 0,
        "msg": "success"
    }
}
```
