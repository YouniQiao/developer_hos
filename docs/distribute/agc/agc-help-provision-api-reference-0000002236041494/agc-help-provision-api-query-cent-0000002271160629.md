---
title: "查询证书"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-query-cent-0000002271160629
format: md
---


#### 功能介绍

此接口用于查询创建的证书。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/cert/list |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-provision-api-query-cent-0000002271160629_0.png)

本接口支持使用Service Account方式、API客户端方式和OAuth客户端方式，区别请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

**OAuth客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| teamId | M | String(64) | 开发者所在团队的团队ID。 |
| oauth2Token | M | String | 认证信息，传入[获取用户授权码](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。 |

#### [h2]Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| certType | O | Integer(32) | 证书类型。  取值范围：   * 1：调试 * 2：发布 * 3：In-house发布 * 4：二进制证书（用于二进制程序签名） |
| certIds | O | `List&lt;String(32)>` | 证书ID列表。  数组长度为1~100。 |

#### 请求样例

```
POST /api/publish/v3/cert/list HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer ******
{
  "certType": 1,
  "certIds": [
    "1443604834804035072"
  ]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-data-connectret-0000002271000693) | 包含返回码及描述信息的结果。 |
| certInfo | O | `List&lt;[CertInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-data-certinfo-0000002236041510)>` | 证书信息。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "certList": [
    {
      "id": "14***************72",
      "certName": "test",
      "certType": 1,
      "createTime": 1844593505000,
      "expireTime": 1718363106749,
      "certDownloadUrl": "https://****de0d.cer?X-Amz-Algorithm=****"
    }
  ]
}
```

#### 调用示例

Java代码示例如下：

```
public static JSONObject getCertList(String domain, String clientId, String token, Integer certType,
     List<String> certIds) {
     HttpPost post = new HttpPost(domain + "/publish/v3/cert/list");
     post.setHeader("Authorization", "Bearer " + token);
     post.setHeader("client_id", clientId);

     JSONObject keyString = new JSONObject();
     keyString.put("certType", certType);
     keyString.put("certIds", certIds);

     StringEntity entity = new StringEntity(keyString.toString(), StandardCharsets.UTF_8);
     entity.setContentEncoding("UTF-8");
     entity.setContentType("application/json");
     post.setEntity(entity);

     try {
         CloseableHttpClient httpClient = HttpClients.createDefault();
         CloseableHttpResponse httpResponse = httpClient.execute(post);
         int statusCode = httpResponse.getStatusLine().getStatusCode();
         if (statusCode == HttpStatus.SC_OK) {
             BufferedReader br = new BufferedReader(
                 new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
             String result = br.readLine();
             return JSON.parseObject(result);
         }
     } catch (Exception ignored) {
     }
     return null;
 }
```
