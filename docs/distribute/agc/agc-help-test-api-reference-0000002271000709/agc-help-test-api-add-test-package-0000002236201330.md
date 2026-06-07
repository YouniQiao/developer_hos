---
title: "添加软件包"
original_url: /docs/distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-add-test-package-0000002236201330
format: md
---


#### 功能介绍

此接口用于测试版本上传软件包。

![](../img/agc-help-test-api-add-test-package-0000002236201330_0.png)

由于软件包解析采用异步方式，建议在上传软件包后轮询[查询软件包编译状态](/docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-query-compile-status-0000002236041434)，确认包解析完成后，再调用[更新测试版本](/docs/distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-modify-test-version-0000002271160657)接口绑定软件包。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/test/version/pkg |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-test-api-add-test-package-0000002236201330_1.png)

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
| appId | M | String | 应用ID。 |

#### [h2]Body

请求Body中使用JSON格式携带需要上传的软件包信息，参数如下表所示。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| distributeMode | O | Integer(32) | 软件包分发方式。  取值范围：   * 1：测试专区 * 2：应用市场 |
| file | M | [FileInfo](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-fileinfo-0000002272575549) | 文件信息。 |

#### 请求示例

```
 POST /api/publish/v2/test/version/pkg?appId=10****47 HTTP/1.1
 Host: connect-api.cloud.huawei.com
 client_id: 4141******68
 Content-Type: application/json
 Authorization: Bearer *******
{
  "distributeMode": 1,
  "file": {
    "fileName": "********.app",
    "objectId": "CN/2024052102/********.app"
  }
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-connectret-0000002272455641) | 包含返回码及描述信息的结果。 |
| pkgVersion | O | `List&lt;String>` | 软件包ID。  仅返回一个值。 |

#### 响应示例

```
{
     "ret": {
         "code": 0,
         "msg": "success"
     },
     "pkgVersion": ["1426********00"]
}
```
