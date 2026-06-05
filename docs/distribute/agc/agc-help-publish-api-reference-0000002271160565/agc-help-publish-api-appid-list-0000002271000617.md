---
title: "查询应用包名对应的appid"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-appid-list-0000002271000617
format: md
---


#### 功能介绍

此接口用于根据HarmonyOS应用/元服务的应用包名查询对应的应用ID，支持一次查询多个应用包名。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/appid-list |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-appid-list-0000002271000617_0.png)

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
| packageName | M | String(4096) | 需要查询的应用包名。  多个包名以逗号分隔，最多支持50个。 |
| packageTypes | O | String(32) | 通过软件包类型过滤应用，只查询指定软件包类型的应用。  取值范围：   * 7：APP（HarmonyOS应用/元服务） |

#### 请求示例

```
GET /api/publish/v2/appid-list?packageName=com.huawei.xxxx HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41*******7168
Authorization: Bearer *******
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |
| appids | O | `List&lt;[Pair](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-pair-0000002271000645)>` | 应用包名对应的AppId对象的数组。 |

#### 响应示例

```
{
    "ret": {
        "code": 0,
        "msg": "success"
    },
    "appids": [
        {
            "key": "PhotoPlaza",
            "value": "10****057"
        }
    ]
}
```

#### 调用示例

Java代码示例如下：

```
public static AppId[] queryAppId(String domain, String client_id, String token, String packageNames) {
	HttpGet get = new HttpGet(domain + "/publish/v2/appid-list?packageName=" + packageNames);
	get.setHeader("client_id", client_id);
	get.setHeader("Authorization", "Bearer " + token);
	try {
		CloseableHttpClient httpClient = HttpClients.createDefault();
		CloseableHttpResponse httpResponse = httpClient.execute(get);
		int statusCode = httpResponse.getStatusLine().getStatusCode();
		if (statusCode == HttpStatus.SC_OK) {
			BufferedReader br =
					new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
			String result = br.readLine();

			JSONObject object = JSON.parseObject(result);
			System.out.println(object.get("ret"));
			AppId[] appids = (AppId[]) object.get("appids");
			return appids;
		}
	} catch (Exception e) {
		e.printStackTrace();
	}
	return null;
}
```
