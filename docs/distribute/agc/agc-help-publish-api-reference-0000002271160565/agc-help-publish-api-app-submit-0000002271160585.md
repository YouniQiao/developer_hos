---
title: "提交发布"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-app-submit-0000002271160585
---

#### 功能介绍

此接口用于提交HarmonyOS应用/元服务审核，调用本接口前必须保证应用信息已补充完整，应用软件包已经上传。

接口调用者的角色：账号持有者、管理员、APP管理员。

![](../img/agc-help-publish-api-app-submit-0000002271160585_0.png)

软件包采用异步解析方式，请您在传包后等候2分钟再调用提交发布接口。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/app-submit |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-app-submit-0000002271160585_1.png)

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
| appId | M | String(32) | 应用ID。 |

#### [h2]Body

Body中使用JSON格式携带发布信息，参数如下表所示。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| releaseTime | O | String(64) | 指定发布时间。  UTC时间格式：yyyy-MM-ddTHH:mm:ssZZ，例如“2015-01-01T01:01:01+0800”。  可以不用填写，则表示立刻发布。  说明：  如果在首次提交发布时已设置过releaseTime参数，撤销审核后再次提交发布时，需要将releaseTime参数重新设置为过去的时间，才能实现立即发布。 |
| remark | O | String(300) | 提审发布备注。  可以为空，如果填写则长度范围为10-300。 |
| releaseType | O | Integer(32) | 应用发布方式。  取值范围：   * 1：全网   默认值：1 |
| releasePhase | O | Integer(32) | 分阶段发布标识。  取值范围：   * 0：全网 * 3：分阶段   默认值：0 |
| phasedReleaseDescription | O | String(500) | 分阶段发布说明。  说明：  releasePhase取值为3（分阶段）时，此参数必填。 |

#### 请求示例

```
POST /api/publish/v3/app-submit HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 414*******68
Content-Type: application/json;
Authorization: Bearer *****
appId: 1******57
{
  "releaseTime": "2015-01-01T01:01:01+0800",
  "remark": "",
  "releaseType": 1,
  "releasePhase": 3,
  "phasedReleaseDescription": "******"
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |

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
public static void  submit(String domain,String clientId, String token, String appId){
	HttpPost put = new HttpPost(domain + "/publish/v3/app-submit?appid=" + appId);

	put.setHeader("Authorization", "Bearer " + token);
	put.setHeader("client_id", clientId);

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

	}
}
```
