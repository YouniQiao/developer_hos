---
title: "预检查业务域名配置"
original_url: /docs/distribute/agc/agc-help-domain-api-reference-0000002271160649/agc-help-domain-api-precheck-0000002295134522
format: md
---


#### 功能介绍

此接口用于对业务域名配置进行预检查。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 业务域名配置约束与限制

* 同一个元服务每个自然月业务域名修改次数，默认为50次。
* 同一个APPID下，最多支持配置100个业务域名；同一个业务域名最多可配置100个APPID。
* 域名只支持HTTPS协议。
* 域名不能使用IP地址或localhost。
* 网页内iframe的域名也需要配置。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/dms/domain-manage/v1/app/domain/pre-check |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-domain-api-precheck-0000002295134522_0.png)

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

请求Body中使用JSON格式携带业务域名信息，参数如下表所示。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| domain | O | [DomainInfo](/docs/distribute/agc/agc-help-domain-api-data-0000002237343328/agc-help-domain-api-data-domaininfo2-0000002273216801) | 业务域名信息。  说明：  type必须设置为webView。 |

#### 请求示例

```
 POST /api/dms/domain-manage/v1/app/domain/pre-check HTTP/1.1
 Host: connect-api.cloud.huawei.com
 client_id: 4141******68
 Content-Type: application/json
 Authorization: Bearer *******
 appId: 10******57
 {
   "domain": {
     "type": "webView",
     "value": "https://huawei.com:8080"
   }
 }
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-domain-api-data-0000002237343328/agc-help-domain-api-data-connectret-0000002272462489) | 包含返回码及描述信息的结果。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  }
}
```
