---
title: "查询测试群组列表"
original_url: /docs/distribute/agc/agc-help-test-api-reference-0000002271000709/agc-help-test-api-get-test-grouplist-0000002271000717
format: md
---


#### 功能介绍

此接口用于邀请测试查询已创建的测试群组列表。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/app-test/v1/test-group/list |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-test-api-get-test-grouplist-0000002271000717_0.png)

API客户端方式和OAuth客户端方式的区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID。 |
| Authorization | M | String | 认证信息。  格式：Authorization: Bearer *\\$`{access\_token}`* |
| appId | M | String(32) | 应用ID。  获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

![](../img/agc-help-test-api-get-test-grouplist-0000002271000717_1.png)

请参见[API客户端方式获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section1679462873111)获取**客户端ID**和**access\_token**。

**OAuth客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| teamId | M | String(64) | 开发者所在团队的团队ID。 |
| oauth2Token | M | String | 认证信息。  请传入[获取用户授权码](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。 |
| appId | M | String(32) | 应用ID。  获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| current | O | Integer | 当前页。  默认值：1 |
| pageSize | O | Integer | 每页数。  默认值：10 |

#### 请求示例

```
 GET /api/app-test/v1/test-group/list?current=1&pageSize=10 HTTP/1.1
 Host: connect-api.cloud.huawei.com
 client_id: 4141******68
 Content-Type: application/json
 Authorization: Bearer *******
 appId: 6917********65
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| rtnCode | M | String | 返回码。  取值范围：   * 0：成功 * 1：参数校验不通过。 * 2：越权错误。 * -1：内部异常。 |
| rtnDesc | O | String | 返回码描述信息。 |
| businessCode | O | String | 业务错误码。 |
| groups | O | [SimpleGroupInfo](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-simplegroupinfo-0000002237336496) | 简要测试群组信息。 |
| pageInfo | O | [PageInfo](/docs/distribute/agc/agc-help-test-api-data-0000002237336484/agc-help-test-api-data-pageinfo-0000002272455653) | 分页信息。 |

#### 响应示例

```
{
	"rtnCode" : 0,
	"groups" : [{
			"groupId" : "761e********08",
			"groupName" : "测试群组demo",
			"addedTestersNum" : 0
		}
	],
	"allAddedTestersNum" : 0,
	"pageInfo" : {
		"current" : 1,
		"pageSize" : 10,
		"totalRecord" : 1,
		"totalPage" : 1
	}
}
```
