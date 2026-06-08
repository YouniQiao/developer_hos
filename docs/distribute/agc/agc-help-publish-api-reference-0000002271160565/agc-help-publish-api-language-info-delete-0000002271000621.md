---
title: "删除应用语言信息"
original_url: /docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-language-info-delete-0000002271000621
format: md
upstream_id: distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-language-info-delete-0000002271000621
last_sync: 2026-06-07
sync_hash: 87207b4a
---
#### 功能介绍

此接口用于删除指定HarmonyOS应用/元服务不需要的语言描述信息，默认语言不支持删除。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS DELETE |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/app-language-info |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-language-info-delete-0000002271000621_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | M | String | 需要删除语言描述信息的应用ID。 |
| lang | M | String | 需要删除的语言。  说明：  取值参见[语言类型](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-langtype-0000002236041558)。 |
| releaseType | O | Integer | 应用发布方式。  取值范围：   * 1：全网   默认值：1 |

#### 请求示例

```
DELETE /api/publish/v2/app-language-info?appId=10******57&amp; lang=zh-CN HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer *******
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

#### 调用示例

Java代码示例如下：

```
public static void deleteLangInfo(String domain, String clientId, String token, String appId, String lang, Integer releaseType) {
	HttpDelete put = new HttpDelete(
		domain + "/publish/v2/app-language-info?appId=" + appId + "&lang=" + lang + "&releaseType" + releaseType);
	put.setHeader("Authorization", "Bearer " + token);
	put.setHeader("client_id", clientId);
	try {
		CloseableHttpClient httpClient = HttpClients.createDefault();
		CloseableHttpResponse httpResponse = httpClient.execute(put);
		int statusCode = httpResponse.getStatusLine().getStatusCode();
		if (statusCode == HttpStatus.SC_OK) {
			BufferedReader br = new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
			String result = br.readLine();
			JSONObject object = JSON.parseObject(result);
			System.out.println(object.get("ret"));
		}
	} catch (Exception e) {
		System.out.println(e);
	}
}
```
