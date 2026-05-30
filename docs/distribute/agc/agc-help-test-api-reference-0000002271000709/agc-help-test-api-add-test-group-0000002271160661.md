---
title: "新增测试群组"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-add-test-group-0000002271160661
---

#### 功能介绍

此接口用于邀请测试创建测试群组。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/app-test/v1/test-group |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-test-api-add-test-group-0000002271160661_0.png)

API客户端方式和OAuth客户端方式的区别请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID。 |
| Authorization | M | String | 认证信息。  格式：Authorization: Bearer *\\${access\_token}* |
| appId | M | String(32) | 应用ID。  获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |

![](../img/agc-help-test-api-add-test-group-0000002271160661_1.png)

请参见[API客户端方式获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section1679462873111)获取**客户端ID**和**access\_token**。

**OAuth客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| teamId | M | String(64) | 开发者所在团队的团队ID。 |
| oauth2Token | M | String | 认证信息。  请传入[获取用户授权码](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。 |
| appId | M | String(32) | 应用ID。  获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Body

请求Body中使用JSON格式携带测试群组信息，参数如下表所示。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| groupName | M | String(50) | 测试群组。 |

#### 请求示例

```
 POST /api/app-test/v1/test-group HTTP/1.1
 Host: connect-api.cloud.huawei.com
 client_id: 4141******68
 Content-Type: application/json
 Authorization: Bearer *******
 appId: 6917********65
 {
   "groupName": "测试群组demo"
 }
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| rtnCode | M | String | 返回码。  取值范围：   * 0：成功 * 1：参数校验不通过。 * 2：越权错误。 * -1：内部异常。 |
| rtnDesc | O | String | 返回码描述信息。 |
| businessCode | O | String | 业务错误码。  取值范围：   * 100：测试群组名称重复。 * 101：测试群组数量已达上限。 |
| groupId | O | String | 测试群组ID。 |

#### 响应示例

```
{
  "rtnCode": 0,
  "rtnDesc": "success",
  "businessCode": 0,
  "groupId": "761e********08"
}
```
