---
title: "查询上架自检报告信息"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-get-detect-task-0000002525033189
format: md
---


#### 功能介绍

此接口用于查询邀请测试进行上架自检的报告信息。如果自检未通过，可以从返回参数reportUrl中获取自检报告。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/test/app/version/detect-report |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-test-api-get-detect-task-0000002525033189_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |
| versionId | M | String(32) | 测试版本ID。  可从[新建测试版本](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-add-test-version-0000002236041526#section9752647125217)接口返回的versionId参数中获取。 |

#### 请求示例

```
 GET /api/publish/v2/test/app/version/detect-report?appId=6917********65&versionId=76********08 HTTP/1.1
 Host: connect-api.cloud.huawei.com
 client_id: 4141******68
 Content-Type: application/json
 Authorization: Bearer *******
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-data-connectret-0000002272455641) | 包含返回码及描述信息的结果。 |
| state | M | Integer | 邀请测试进行上架前自检的任务状态。  取值范围：   * -1：自检任务已失效 * 0：自检任务待处理 * 1：自检任务处理中 * 2：自检已通过 * 3：自检未通过 |
| reportUrl | O | String | 自检报告链接。  说明：  仅当state为3（自检未通过）时，返回该参数。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "state": 3,
  "reportUrl": "https://****"
}
```
