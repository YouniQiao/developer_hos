---
title: "申请Profile"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-apply-provision-0000002271000689
format: md
---


#### 功能介绍

此接口用于申请指定设备发布Profile、In-house发布Profile、调试Profile或发布Profile。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/provision |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-provision-api-apply-provision-0000002271000689_0.png)

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
| provisionName | M | String(256) | Profile名称。 |
| provisionType | M | Integer(32) | Profile类型。  取值范围：   * 1：调试 * 2：发布 * 3：In-house发布 * 6：指定设备发布 |
| certId | M | String(32) | 证书ID。 |
| appId | M | String(20) | 应用ID。 |
| deviceIdList | O | `List&lt;String(32)>` | 调试/测试设备ID列表。  可通过[查询设备列表](https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-query-device-0000002236201306)接口获取。  数组长度不超过4000。 |
| aclPermissionList | O | `List&lt;String(256)>` | 受限ACL权限列表。  数组长度不超过1000。  说明：  仅支持**受限ACL权限**已审核通过的应用使用，申请方式可参见[申请受限ACL权限](https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-applyacl-0000002502198721)。 |

#### 请求样例

```
POST /api/publish/v3/provision HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer ******
{
  "provisionName": "testProvision",
  "provisionType": 1,
  "certId": "34******28",
  "appId": "69****117",
  "deviceIdList": [
    "14****208"
  ],
  "aclPermissionList": [
    ""
  ]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-data-connectret-0000002271000693) | 包含返回码及描述信息的结果。 |
| provisionInfo | O | [ProvisionInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-provision-api-data-provisioninfo-0000002236041514) | Profile信息。 |

#### 响应示例

```
{
  "ret": {
    "code": 0,
    "msg": "success"
  },
  "provisionInfo": {
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
}
```

#### 调用示例

Java代码示例如下：

```
public static JSONObject createProvision(String domain, String clientId, String token, String provisionName,
     Integer provisionType, String certId, String appId, List<String> deviceIdList) {
     HttpPost post = new HttpPost(domain + "/publish/v3/provision");
     post.setHeader("Authorization", "Bearer " + token);
     post.setHeader("client_id", clientId);

     JSONObject keyString = new JSONObject();
     keyString.put("provisionName", provisionName);
     keyString.put("provisionType", provisionType);
     keyString.put("certId", certId);
     keyString.put("appId", appId);
     keyString.put("deviceIdList", deviceIdList);

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
