---
title: "查询Profile列表"
original_url: /docs/distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-query-provision-0000002236041506
format: md
upstream_id: distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-query-provision-0000002236041506
last_sync: 2026-06-07
sync_hash: 238ef4ea
---
#### 功能介绍

此接口用于查询申请的Profile。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/provision/list |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-provision-api-query-provision-0000002236041506_0.png)

本接口支持使用Service Account方式、API客户端方式和OAuth客户端方式，区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |
| provisionId | O | String | Profile的ID。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |
| provisionId | O | String | Profile的ID。 |

**OAuth客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| teamId | M | String(64) | 开发者所在团队的团队ID。 |
| oauth2Token | M | String | 认证信息，传入[获取用户授权码](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)。 |
| provisionId | O | String | Profile的ID。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| fromRecCount | O | Integer(32) | 起始页数。  默认值：1 |
| maxReqCount | O | Integer(32) | 每页返回条数。  取值范围：[1,100]  默认值：10 |

#### 请求样例

```
GET /api/publish/v3/provision/list?fromRecCount=1&maxReqCount=100 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer ******
appId: 691****117
provisionId: 1443****504
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-connectret-0000002271000693) | 包含返回码及描述信息的结果。 |
| totalCount | O | Integer(32) | 总记录条数。 |
| provisionList | O | `List&lt;[ProvisionInfo](/docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-provisioninfo-0000002236041514)>` | Profile信息。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "totalCount": 0,
  "provisionList": [
    {
      "id": "14***************04",
      "provisionName": "testProvision",
      "provisionType": 1,
      "certName": "0614-debug",
      "deviceList": [
        {
          "id": "14***************80",
          "deviceName": "de******me",
          "udid": "111111111222****************************************333333444444",
          "deviceType": 1,
          "createTime": "2024-06-14 11:55:28.676"
        }
      ],
      "aclPermissionList": [
        ""
      ],
      "aclPermissionAuditState": 0,
      "provisionDownloadUrl": "https://****/CN/2024061412/1718367940748-6ef9436f-6cd0-4b65-a1df-62174c795b40.p7b?X-Amz-Algorithm=****",
      "updateTime": 1718363106749,
      "expireTime": 1844598288000,
      "appId": "69****117",
      "tempFlag": "0"
    }
  ]
}
```

#### 调用示例

Java代码示例如下：

```
public static JSONObject getProvisionList(String domain, String clientId, String token, String appId,
     String provisionId, Integer fromRecCount, Integer maxReqCount) {
     HttpGet get = new HttpGet(
         domain + "/publish/v3/provision/list?fromRecCount=" + fromRecCount + "&maxReqCount=" + maxReqCount);

     get.setHeader("Authorization", "Bearer " + token);
     get.setHeader("client_id", clientId);
     get.setHeader("appId", appId);
     get.setHeader("provisionId", provisionId);

     try {
         CloseableHttpClient httpClient = HttpClients.createDefault();
         CloseableHttpResponse httpResponse = httpClient.execute(get);
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
