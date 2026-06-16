---
title: "删除Profile"
original_url: /docs/distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-delete-provision-0000002236201310
format: md
upstream_id: distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-delete-provision-0000002236201310
last_sync: 2026-06-07
sync_hash: 99d93bc9
---
#### 功能介绍

此接口用于删除申请的Profile。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS DELETE |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/provision |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-provision-api-delete-provision-0000002236201310_0.png)

本接口支持使用Service Account方式、API客户端方式和OAuth客户端方式，区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#h2创建api客户端)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

**OAuth客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| teamId | M | String(64) | 开发者所在团队的团队ID。 |
| oauth2Token | M | String | 认证信息，传入[获取用户授权码](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| id | M | String(32) | 待删除Profile的ID。 |

#### 请求样例

```
DELETE /api/publish/v2/provision?id=10******57 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer *******
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-connectret-0000002271000693) | 包含返回码及描述信息的结果。 |

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
public static JSONObject deleteProvision(String domain, String clientId, String token, String provisionId) {
     HttpDelete put = new HttpDelete(domain + "/publish/v2/provision?id=" + provisionId);
     put.setHeader("Authorization", "Bearer " + token);
     put.setHeader("client_id", clientId);
     try {
         CloseableHttpClient httpClient = HttpClients.createDefault();
         CloseableHttpResponse httpResponse = httpClient.execute(put);
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
