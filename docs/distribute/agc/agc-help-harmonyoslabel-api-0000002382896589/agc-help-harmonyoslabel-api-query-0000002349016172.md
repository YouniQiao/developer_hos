---
title: "查询HarmonyOS标签"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-query-0000002349016172
format: md
---


#### 功能介绍

此接口用于查询HarmonyOS NEXT应用或元服务的HarmonyOS标签信息。

#### 使用约束

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/shs/v1/hmcode |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-harmonyoslabel-api-query-0000002349016172_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端API授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-authorize-0000002553919617)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-authorize-0000002553919617#section104621343151212)中获取的鉴权令牌。 |
| appId | M | Integer(64) | 应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |
| productId | M | String | 项目ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-authorize-0000002553919617#section14162113625516)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section12242154616187)中获取的access\_token。 |
| appId | M | Integer(64) | 应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |
| productId | M | String | 项目ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| likeValue | O | String | 需要查询的HarmonyOS标签名称或链接。 |
| page | O | Integer | 请求页码。  默认值：1 |
| limit | O | Integer | 分页大小。  取值范围：[0,100]  默认值：20 |

#### 请求样例

```
GET /api/shs/v1/hmcode?page=1&limit=10&likeValue=*** HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41*******7168
Authorization: Bearer *******
appId: **********
productid: *******
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-connectret-0000002382896625) | 包含返回码及描述信息的结果。 |
| hmCodeInfos | O | `List&lt;[HmCodeOpenInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-harmonyoslabel-api-hmcodeinfo-0000002382856349)>` | 包含HarmonyOS标签信息的数组。 |
| total | O | Integer | 符合条件的总数。 |

#### 响应示例

```
{
    "ret": {
        "code": 0,
        "msg": "success"
    },
    "hmCodeInfos": [
        {
            "codeId": 34,
            "codeName": "带自定义参数的链接",
            "appIconObjectId": "CN/2024060503/1717557538554-f4500be6-efbd-4c9f-b0fe-df8301061e7c.png",
            "codeObjectId": "Z7DMSF3ut7WhX6NGG2/EcL3bw1nlMvx6Bm86zofHPt8=",
            "codeURL": "https://lfcontentcenterdev.hwcloudtest.cn/pub_5/ScenarizedDist_Resource_100_1/a7/v3/9Q-3ve_aSs25nSCG-DHLPA/egsDq6O/49a536db-ef0f-4e37-93cd-5d9b75d80508.png",
            "id": 1332,
            "idURL": "https://atomicservicetest.lfdlatest01cn.hwcloudtest.cn/g7L0",
            "customParameters": "key1=value1&key2=value2&key3=value3",
            "servicePath": "",
            "codeType": "3",
            "state": "2",
            "createTime": 1733974357291,
            "updateTime": 1733974357291,
            "approvalTime": 1733974357291
        }
    ],
    "total": 1
}
```

#### 调用示例

```
public static HmCodeInfo[] queryHmCodeInfo(String domain, String client_id, String appId, String productId, String token,
    String likeValue, int page, int limit) {
    HttpGet get =
        new HttpGet(domain + "/api/shs/v1/hmcode?page=" + page + "&limit=" + limit + "&likeValue=" + likeValue);
    get.setHeader("client_id", client_id);
    get.setHeader("Authorization", "Bearer " + token);
    get.setHeader("appId", appId);
    get.setHeader("productId", productId);
    try {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        CloseableHttpResponse httpResponse = httpClient.execute(get);
        int statusCode = httpResponse.getStatusLine().getStatusCode();
        if (statusCode == HttpStatus.SC_OK) {
            BufferedReader br =
                new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
            String result = br.readLine();

            JSONObject object = JSON.parseObject(result);
            System.out.println(object.get("ret"));
            System.out.println(object.get("total"));
            return (HmCodeInfo[]) object.get("HmCodeInfos");
        }
    } catch (Exception e) {
        e.printStackTrace();
    }
    return null;
}
```
