---
title: "下载域名配置文件"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-domain-api-download-domain-config-0000002271160653
---

#### 功能介绍

此接口用于以文件流的形式进行直接下载域名配置文件。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 服务器域名配置约束与限制

* 同一个元服务每个自然月服务器域名修改次数，默认为50次。
* 单项服务器域名配置数量最多不超过200个。
* 域名只支持HTTPS和WSS协议。
* 域名不能使用IP地址或localhost。
* 不可配置全局禁止清单内的域名。

#### 业务域名配置约束与限制

* 同一个元服务每个自然月业务域名修改次数，默认为50次。
* 同一个APPID下，最多支持配置100个业务域名；同一个业务域名最多可配置100个APPID。
* 域名只支持HTTPS协议。
* 域名不能使用IP地址或localhost。
* 网页内iframe的域名也需要配置。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/dms/domain-manage/v1/app/domain/verify-file |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-domain-api-download-domain-config-0000002271160653_0.png)

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

#### 请求示例

```
GET /api/dms/domain-manage/v1/app/domain/verify-file HTTP/1.1
 Host: connect-api.cloud.huawei.com
 client_id: 4141******68
 Content-Type: application/json
 Authorization: Bearer *******
 appId: 10******57
```

#### 响应参数

通过InputStream文件流返回校验文件内容。

#### 响应示例

无
