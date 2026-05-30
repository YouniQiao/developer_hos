---
title: "查询测试群组成员"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-query-test-group-user-0000002271160665
---

#### 功能介绍

此接口用于邀请测试查询已添加到测试群组的成员信息。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/test/group |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-test-api-query-test-group-user-0000002271160665_0.png)

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

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| groupId | M | String(32) | 测试群组ID。 |
| hwAccount | O | String(256) | 测试群组成员的华为账号。 |
| nickName | O | String(50) | 测试群组的成员昵称。 |
| addWay | O | Integer | 添加测试群组成员的方式。  取值范围：   * 1：手动添加测试成员的华为账号 * 2：通过邀请码添加测试成员 |
| orderByAddTime | O | Integer | 按照添加时间排序。  取值范围：   * 1：顺序，即从小到大 * 2：倒序，即从大到小   说明：  **orderByAddTime**和**orderByInstallTime**同时存在时，优先取当前**orderByAddTime**字段排序。 |
| orderByInstallTime | O | Integer | 按照安装时间排序。  取值范围：   * 1：顺序，即从小到大 * 2：倒序，即从大到小 |
| current | O | Integer | 当前页。  默认值：1 |
| pageSize | O | Integer | 每页数量。  默认值：10 |

#### 请求示例

```
 GET /api/publish/v2/test/group?groupId=76********08 HTTP/1.1
 Host: connect-api.cloud.huawei.com
 client_id: 4141******68
 Content-Type: application/json
 Authorization: Bearer *******
 appId: 6917********65
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-data-connectret-0000002272455641) | 包含返回码及描述信息的结果。 |
| groupInfo | O | [SimpleGroupInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-data-simplegroupinfo-0000002237336496) | 测试群组的简要信息。 |
| testerInfo | O | `List&lt;[testerInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-data-testerinfo-0000002272575561)>` | 测试群组成员信息。 |
| invitationCodeInfo | O | `List&lt;[InvitationCodeInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-test-api-data-invitationcodeinfo-0000002237496324)>` | 测试群组邀请码信息。 |
| pageInfo | O | PageInfo | 分页信息。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "groupInfo": {
    "groupId": "76********08",
    "groupName": "测试群组demo",
    "addedTestersNum": 0
  },
  "testerInfo": [
    {
      "id": "41*****68",
      "hwAccount": "0086-130****5675",
      "nickName": "M***y",
      "joinType": 1,
      "joinTime": 1704211200000,
      "latestInstallTime": 1704211200000,
      "versionName": "testVersionName",
      "versionCode": 10000
    }
  ],
  "invitationCodeInfo": [
    {
      "id": "10**34",
      "invitationCode": "string",
      "startTime": 1694211200000,,
      "endTime": 1794211278888,
      "status": 1,
      "invitedNum": 8,
      "waitInviteNum": 2
    }
  ],
  "pageInfo": {
    "current": 1,
    "pageSize": 10,
    "totalRecord": 1,
    "totalPage": 1
  }
}
```
