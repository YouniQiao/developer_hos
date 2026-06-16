---
title: "更新应用语言信息"
original_url: /docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-language-info-update-0000002271160569
format: md
upstream_id: distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-language-info-update-0000002271160569
last_sync: 2026-06-07
sync_hash: bb7c4a2d
---
#### 功能介绍

此接口用于更新指定的HarmonyOS应用/元服务的语言描述信息，如果当前没有语言描述信息则新增。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/app-language-info |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-language-info-update-0000002271160569_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#h2创建api客户端)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | M | String | 需要更新语言描述信息的应用ID。 |
| releaseType | O | Integer(32) | 应用发布方式。  取值范围：   * 1：全网   默认值：1 |
| releasePhase | O | Integer(32) | 分阶段发布标识。  取值范围：   * 0：全网 * 3：分阶段   默认值：0 |

#### [h2]Body

请求Body中使用JSON格式携带更新的语言描述信息，参数如下表所示。

![](../img/agc-help-publish-api-language-info-update-0000002271160569_1.png)

**appDesc**、**briefInfo**和**newFeatures**三个参数的取值不能相同。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| lang | M | String(8) | 语言种类。  说明：  取值参见[语言类型](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-langtype-0000002236041558)。 |
| appName | O | String(64) | 对应语言的应用名称。  新增一个语言种类时，此字段必选。 |
| appDesc | O | String(8000) | 对应语言的应用描述信息。 |
| briefInfo | O | String(80) | 对应语言的一句话简介。 |
| newFeatures | O | String(500) | 对应语言的新版本简介。  说明：  升级版本时，此参数必填。 |

#### 请求示例

```
PUT /api/publish/v3/app-language-info?appId=10******57 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******7168
Content-Type: application/json
Authorization: Bearer ******
{
    "lang": "zh-CN",
    "appName": "PhotoPlaza",
    "appDesc": "*****",
    "briefInfo": "*****",
    "newFeatures": "*****"
}
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
public static void updateLangInfo(String domain, String clientId, String token, String appId, Integer releaseType) {
	HttpPut put = new HttpPut(
		domain + "/publish/v3/app-language-info?appId=" + appId + "&releaseType=" + releaseType);
	put.setHeader("Authorization", "Bearer " + token);
	put.setHeader("client_id", clientId);
	JSONObject keyString = new JSONObject();
	//Request Body
	keyString.put("lang", "zh-CN");
	keyString.put("appName", "Demo");
	keyString.put("appDesc", "This is a Demo");
	//...
	StringEntity entity = new StringEntity(keyString.toString(), Charset.forName("UTF-8"));
	entity.setContentEncoding("UTF-8");
	entity.setContentType("application/json");
	put.setEntity(entity);
	try {
		CloseableHttpClient httpClient = HttpClients.createDefault();
		CloseableHttpResponse httpResponse = httpClient.execute(put);
		int statusCode = httpResponse.getStatusLine().getStatusCode();
		if (statusCode == HttpStatus.SC_OK) {
			BufferedReader br =
				new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
			String result = br.readLine();

			JSONObject object = JSON.parseObject(result);
			System.out.println(object.get("ret"));
		}
	} catch (Exception e) {
		System.out.println(e);
	}
}
```
