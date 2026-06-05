---
title: "撤销审核"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-on-shelf-cancel-0000002271000637
format: md
---


#### 功能介绍

此接口用于HarmonyOS应用/元服务的撤销审核，当应用发布方式为“全网”时，只有处于“审核中”、“预审中”、“升级审核中”、“待上架/预约上架”、“申请下架”状态的应用可以撤销审核；当应用发布方式为“HarmonyOS测试发布方式（API>=10）”时，只有处于“正在审核”状态的应用可以撤销审核。

![](../img/agc-help-publish-api-on-shelf-cancel-0000002271000637_0.png)

可通过查询应用信息接口的appInfo参数获取应用状态，具体请参见[releaseState应用状态说明](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-appinfo-0000002236041454#ZH-CN_TOPIC_0000002236041454__zh-cn_topic_0000002093216050_zh-cn_topic_0000001057964443_p38168214)。

接口调用者的角色：账号持有者、管理员、APP管理员。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/version/on-shelf/cancel |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-on-shelf-cancel-0000002271000637_1.png)

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

#### [h2]Body

请求Body中使用JSON格式携带撤销审核信息，参数如下表所示。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| versionId | M | String | 版本ID。 |

#### 请求示例

```
PUT /api/publish/v3/version/on-shelf/cancel HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******7168
Content-Type: application/json
Authorization: Bearer ******
appId: 1******57
{
    "versionId": "******"
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
public static void cancelOnshelfAudit(String domain, String token, Integer teamId, String appId, String versionId) {
    HttpPut put = new HttpPut(domain + "/publish/v3/version/on-shelf/cancel");
    put.setHeader("Authorization", "Bearer " + token);
    put.setHeader("teamId", teamId);
    put.setHeader("client_id", clientId);
    put.setHeader("appId", appId);
    JSONObject keyString = new JSONObject();
    keyString.put("versionId", versionId);
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
