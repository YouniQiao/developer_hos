---
title: "查询设备列表"
original_url: /docs/distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-query-device-0000002236201306
format: md
upstream_id: distribute/agc/agc-help-provision-api-reference-0000002236041494/agc-help-provision-api-query-device-0000002236201306
last_sync: 2026-06-07
sync_hash: 96195af2
---
#### 功能介绍

此接口用于查询当前设备的信息。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/device/list |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-provision-api-query-device-0000002236201306_0.png)

本接口支持使用Service Account方式、API客户端方式和OAuth客户端方式，区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

**OAuth客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| teamId | M | String(64) | 开发者所在团队的团队ID。 |
| oauth2Token | M | String | 认证信息，传入[获取用户授权码](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section949717114392)中获取的Access Token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| deviceName | O | String(256) | 设备名称。  支持模糊查询。 |
| fromRecCount | O | Integer(32) | 起始页数。  取值范围：最小为1  默认值：1 |
| maxReqCount | O | Integer(32) | 每页返回条数。  取值范围：[1,100]  默认值：20 |
| order | O | Integer(32) | 返回的结果排序方式。  取值范围：   * 1：创建时间降序 * 2：设备名称升序 |

#### 请求样例

```
GET /api/publish/v2/device/list?deviceName=testDevice HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41******68
Content-Type: application/json
Authorization: Bearer ******
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-connectret-0000002271000693) | 包含返回码及描述信息的结果。 |
| totalCount | M | Integer(32) | 总记录条数。 |
| deviceList | O | `List&lt;[DeviceInfo](/docs/distribute/agc/agc-help-provision-api-data-0000002271160637/agc-help-provision-api-data-deviceinfo-0000002271000697)>` | 设备详情。 |

#### 响应示例

```
{
    "ret": {
        "code": 0,
        "msg": "success"
    },
    "deviceList": [
        {
            "id": "14***************80",
            "deviceName": "testDevice"
            "udid": "111111111222****************************************333333444444",
            "deviceType": 1,
            "createTime": "2024-06-14 11:55:28.676",
        }
    ],
    "totalCount": 1
}
```

#### 调用示例

Java代码示例如下：

```
public static JSONObject getDeviceList(String domain, String clientId, String token, String deviceName) {
     HttpGet get = new HttpGet(domain + "/publish/v2/device/list?deviceName=" + deviceName);

     get.setHeader("Authorization", "Bearer " + token);
     get.setHeader("client_id", clientId);
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
