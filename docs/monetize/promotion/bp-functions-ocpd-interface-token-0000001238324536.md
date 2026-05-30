---
title: "获取Token"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-ocpd-interface-token-0000001238324536
---
# 获取Token

## 功能介绍

在使用API客户端方式调用Marketing API的接口前，需要通过华为开放平台进行鉴权，并获取认证通过后的Token。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -&gt; 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/oauth2/v1/token |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

## 请求参数

请求参数以JSON格式传入，包含参数如下。

| 参数名称 | 必选(M)/可选(O) | 数据类型 | 参数说明 |
| --- | --- | --- | --- |
| grant\_type | M | String(256) | 固定传入“client\_credentials”。 |
| client\_id | M | String(256) | 客户端ID，即[创建API客户端](https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-ocpx-return-0000001282520037#section103mcpsimp)中生成的“客户端ID”。 |
| client\_secret | M | String(2048) | 客户端密钥，即[创建API客户端](https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-ocpx-return-0000001282520037#section103mcpsimp)中生成的“密钥”。 |

## 请求示例

```
POST /api/oauth2/v1/token
Host: connect-api.cloud.huawei.com
Content-Type: application/json
{
   "grant_type":"client_credentials",
   "client_id":"26** ** ** **20",
   "client_secret":"** ** ** ** ** ** ** ** ** ** ** **"
}
```

## 响应参数

返回值为JSON格式的字符串，包含参数如下。

| 参数名称 | 必选(M)/可选(O) | 数据类型 | 参数说明 |
| --- | --- | --- | --- |
| access\_token | O | String | 认证Token，用于接口调用。  此参数只在获取成功时返回。 |
| expires\_in | O | Long | access\_token的有效期，单位秒。您需要在过期时间到达时重新调用本接口获取新的access\_token。  此参数只在获取成功时返回。 |
| ret | O | String(100) | 获取Token失败时的错误信息，包含错误码及描述信息的JSON字符串，格式为\{"code":*retcode*, "msg": "*description*"\}，retcode为错误码，description为错误码描述信息。 |

## 响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "access_token": "eyJhbGciOiJIUzU** ** ** ** ** ** ** **",    
    "expires_in": 172800
}
```

## 调用示例

```
public static String getToken(String domain, String clientId, String clientSecret) {
    String token = null;
    try {
        HttpPost post = new HttpPost(domain + "/oauth2/v1/token");

        JSONObject keyString = new JSONObject();
        keyString.put("client_id", "18893***83957248");
        keyString.put("client_secret", "B15B497B44E080EBE2C4DE4E74930***52409516B2A1A5C8F0FCD2C579A8EB14");
        keyString.put("grant_type", "client_credentials");

        StringEntity entity = new StringEntity(keyString.toString(), Charset.forName("UTF-8"));
        entity.setContentEncoding("UTF-8");
        entity.setContentType("application/json");
        post.setEntity(entity);

        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpResponse response = httpClient.execute(post);
        int statusCode = response.getStatusLine().getStatusCode();
        if (statusCode == HttpStatus.SC_OK) {

            BufferedReader br =
                new BufferedReader(new InputStreamReader(response.getEntity().getContent(), Consts.UTF_8));
            String result = br.readLine();
            JSONObject object = JSON.parseObject(result);
            token = object.getString("access_token");
        }

        post.releaseConnection();
        httpClient.close();
    } catch (Exception e) {

    }
    return token;
}
```
