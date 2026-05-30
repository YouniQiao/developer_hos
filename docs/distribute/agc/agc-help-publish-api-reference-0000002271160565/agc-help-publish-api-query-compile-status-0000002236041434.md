---
title: "查询软件包编译状态"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-query-compile-status-0000002236041434
---

#### 功能介绍

此接口用于查询HarmonyOS应用/元服务的软件包的编译状态。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/package/compile/status |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-query-compile-status-0000002236041434_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\${JWT}*”。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\${access\_token}*”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | M | String(32) | 应用ID。 |
| pkgIds | M | String(500) | 待查询的软件包ID。  多个ID之间用英文逗号分隔。  可从[更新应用软件包信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-app-package-info-update-0000002236201250#section19172900)接口返回的packageId参数中获取。 |

#### 请求示例

```
GET /api/publish/v3/package/compile/status?appId=10*****7&pkgIds=10004151 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 414*******68
Content-Type: application/json
Authorization: Bearer ******
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |
| pkgStateList | M | `List&lt;[PackageStates](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-packagestates-0000002271160601)>` | 软件包列表。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "pkgStateList": [
    {
      "pkgId": "154984****07039539",
      "successStatus": 0
    }
  ]
}
```

#### 调用示例

Java代码示例如下：

```
public static JSONObject getAabStatus(String domain, String clientId, String token, String appId, String pkgIds) {
	HttpGet get = new HttpGet(domain + "/publish/v3/package/compile/status?appId=" + appId + "&pkgIds=" + pkgIds);

	get.setHeader("Authorization", "Bearer " + token);
	get.setHeader("client_id", clientId);
	try {
		CloseableHttpClient httpClient = HttpClients.createDefault();
		CloseableHttpResponse httpResponse = httpClient.execute(get);
		int statusCode = httpResponse.getStatusLine().getStatusCode();
		if (statusCode == HttpStatus.SC_OK) {
			BufferedReader br =
				new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
			String result = br.readLine();

			// Object returned by the app information query API, which can be received using the AppInfo object. For details, please refer to the API reference.
			JSONObject object = JSON.parseObject(result);

			return object;
		}
	} catch (Exception e) {

	}
	return null;
}
```
