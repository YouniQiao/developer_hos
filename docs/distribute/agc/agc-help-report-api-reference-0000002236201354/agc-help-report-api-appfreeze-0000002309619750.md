---
title: "获取AppFreeze指标"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-report-api-appfreeze-0000002309619750
---

#### 功能介绍

获取某一应用指定时间段内的AppFreeze指标数据，指标查询结果包括AppFreeze发生时间、AppFreeze次数、AppFreeze设备数及Fingerprint等。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/apm/api/v1/hap/query/app-freeze/metric |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-report-api-appfreeze-0000002309619750_0.png)

本接口仅支持API客户端认证方式。

**请求认证头：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID。 |
| Authorization | M | String | 认证信息。  格式：Authorization: Bearer *\\$`{access\_token}`* |

![](../img/agc-help-report-api-appfreeze-0000002309619750_1.png)

请参见[API客户端方式获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section1679462873111)获取**客户端ID**和**access\_token**。

**其他请求头：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| packageName | M | String | 当前查询指标的应用包名。 |
| appId | M | String | 应用ID。  获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| startTime | M | Long | 毫秒时间戳，查询指标的开始时间。 |
| endTime | M | Long | 毫秒时间戳，查询指标的结束时间。 |
| [filters](#ZH-CN_TOPIC_0000002309619750__zh-cn_topic_0000001987488842_table193464513242) | O | Object | 查询指标的过滤条件，内部条件通过and逻辑组合。 |

**filters查询过滤条件定义：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| fingerprints | O | Array | 查询条件，fingerprint集合。 |
| appVersions | O | Array | 查询条件，应用版本集合。 |
| osVersions | O | Array | 查询条件，OS版本集合。 |
| deviceNames | O | Array | 查询条件，设备名称集合。 |

**body请求样例：**

```
{
  "startTime": 1704211200000,
  "endTime": 1704211200000,
  "filters": {
    "fingerprints": [
      "string"
    ],
    "appVersions": [
      "13.4.1.200"
    ],
    "osVersions": [
      "4.0.0.1"
    ],
    "deviceNames": [
      "ALN-AL00"
    ]
  }
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| requestId | M | String | 请求ID，单次请求唯一。 |
| reason | M | String | 请求状态码。 |
| message | M | String | 请求状态信息。 |
| [data](#ZH-CN_TOPIC_0000002309619750__zh-cn_topic_0000001987488842_table6175954163516) | M | Object | 指标查询结果。 |

**data对象详情****：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appFreezeCount | M | Long | 发生AppFreeze的总次数。 |
| startCount | M | Long | 当前时间段内启动应用的总次数。 |
| appFreezeDeviceCount | M | Long | 发生AppFreeze的总设备数。 |
| deviceCount | M | Long | 当前时间段内启动应用的总设备数。 |
| [summaries](#ZH-CN_TOPIC_0000002309619750__zh-cn_topic_0000001987488842_table194841755113517) | M | Array | 指标集合。 |

**summaries中单个对象详情：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| fingerprint | M | String | fingerprint。 |
| appFreezeCount | M | String | 发生AppFreeze的次数。 |
| appFreezeDeviceCount | M | String | 发生AppFreeze的设备数。 |
| summary | M | String | AppFreeze摘要信息。 |
| firstTime | M | Long | AppFreeze的首次发生时间。 |
| lastTime | M | Long | AppFreeze的末次发生时间。 |

**响应样例：**

```
{
  "requestId": "77cf0db5-d457-4feb-844b-63bc99877c01",
  "reason": "string",
  "message": "string",
  "data": {
    "appFreezeCount": 10,
    "startCount": 60,
    "appFreezeDeviceCount": 7,
    "deviceCount": 20,
    "summaries": [
      {
        "fingerprint": "string",
        "appFreezeCount": 2,
        "appFreezeDeviceCount": 1,
        "summary": "APP_INPUT_BLOCK",
        "reason": "APP_INPUT_BLOCK",
        "firstTime": 1704211200000,
        "lastTime": 1704211200000
      }
    ]
  }
}
```
