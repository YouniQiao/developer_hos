---
title: "同步设备信息"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-beacon-regist-api-0000002348998430
---

#### 功能介绍

此接口用于注册或更新第三方服务商的Beacon信标设备信息至AGC。

#### 使用约束

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器->华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/shs/v1/location-device-infos  注意：  调用获取Token接口时使用的域名必须与本接口域名保持一致，例如本接口使用“connect-api.cloud.huawei.com”，则调用[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section12242154616187)接口时必须使用“https://connect-api.cloud.huawei.com/api/oauth2/v1/token” 。 |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-beacon-regist-api-0000002348998430_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端API授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-beacon-regist-by-api-developprocess-0000002382838597#section111031455161510)。

**Service Account方式**

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| uid | M | Integer | 开发者子账号ID。  使用子账号登录后，请参见[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)获取Developer ID。 |
| teamId | M | Integer | 开发者主账号ID。  使用主账号登录后，请参见[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)获取Developer ID。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\${JWT}*”。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-beacon-regist-by-api-developprocess-0000002382838597#section144411716143212)中获取的鉴权令牌。 |

**API客户端方式**

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| uid | M | Integer | 开发者子账号ID。  使用子账号登录后，请参见[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)获取Developer ID。 |
| teamId | M | Integer | 开发者主账号ID。  使用主账号登录后，请参见[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)获取Developer ID。 |
| client\_id | M | String | 客户端ID，获取方法请参见[创建API客户端](https://developer.huawei.com/consumer/cn/doc/app/agc-help-beacon-regist-by-api-developprocess-0000002382838597#section112481434183417)时生成的“ID”。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer \\${access\_token}”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section12242154616187)中获取的access\_token。 |

#### [h2]Body

| **参数** | **必选(M)/****可选(O)** | **参数类型** | **描述** |
| --- | --- | --- | --- |
| deviceBaseInfo | M | [DeviceBaseInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-beacon-api-devicebaseinfo-0000002382838601) | 设备基本信息。 |
| deviceCustomInfo | O | [DeviceCustomInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-beacon-api-devicecustominfo-0000002348998434) | 设备自定义信息。 |

#### 请求示例

```
POST https://connect-api.cloud.huawei.com/api/shs/v1/location-device-infos
Content-Type: application/json
uid：***
teamId：***
client_id: ***
Authorization: Bearer ***

{
  "deviceBaseInfo": {
    "locationDeviceId": "1234567890******1234567890abcdef00170022",
    "uuid": "1234567890******1234567890abcdef",
    "name": "test01",
    "major": 1,
    "minor": 1,
    "deviceModel": "TD-BC02",
    "deviceRole": "0",
    "batteryLevel": 100,
    "siteId": "155******330780288",
    "classification": "TOURISM",
    "locationInfo": "***",
    "longitude": "111.617956",
    "latitude": "26.341332",
    "transmitPower": "6",
    "broadcastInterval": "1000"
  },
  "deviceCustomInfo": [
    {
      "customName": "******",
      "customValue": "******"
    }
  ]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-beacon-api-connectret-0000002349158198) | 包含返回码及描述信息的JSON字符串，格式为\{"code":*retcode*, "msg": "*description*"}，retcode为返回码，description为返回码描述信息。返回码请参见[错误码](https://developer.huawei.com/consumer/cn/doc/app/agc-help-beacon-api-errorcode-0000002382718897)。 |

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

```
public static CommonRsp syncDeviceInfos(Long clientId, Long uid, Long teamId, DeviceDetailInfo request) {
  // 构造同步设备信息API的URL
  String url = domain + "/api/shs/v1/location-device-infos";
  HttpPost post = new HttpPost(url);

  // 设置请求头
  post.setHeader("Authorization", "Bearer " + authorization);
  post.setHeader("client_id", String.valueOf(clientId));
  post.setHeader("uid", String.valueOf(uid));
  post.setHeader("teamId", String.valueOf(teamId));

  // 将请求对象转换为JSON，并将其设置为请求体
  StringEntity entity = new StringEntity(
    JSON.toJSONString(request), ContentType.create("application/json", "UTF-8")
  );
  post.setEntity(entity);

  try (CloseableHttpClient httpClient = HttpClients.createDefault();
  CloseableHttpResponse httpResponse = httpClient.execute(post)) {

    // 检查响应状态
    int statusCode = httpResponse.getStatusLine().getStatusCode();
    if (statusCode == HttpStatus.SC_OK) {
      // Parse the response JSON into a CommonRsp object
      BufferedReader br = new BufferedReader(
        new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8)
      );
      String result = br.readLine();
      return JSON.parseObject(result, CommonRsp.class);
    } else {
      LOGGER.error("Failed to synchronize device information. HTTP status: {}, URL: {}", statusCode, url);
    }
  } catch (Exception e) {
    LOGGER.error("Error occurred while synchronizing device information. URL: {}, Error: {}", url, e.getMessage(), e);
  }

  // 失败时返回默认响应
  return new CommonRsp().retSet(ResultEnum.FAIL.toRet());
}
```
