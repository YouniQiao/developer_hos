---
title: "下架商品"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-offerings-delist
---

## 功能介绍

下架商品接口用于商家主动将已在平台上线并处于“上架中”状态的商品下架。调用该接口后，商品将不再对外展示。

该操作为即时生效操作，无需平台审核。

![](./img/6de4cbac.png)

* 不可下架无线上版本的商品：对于从未成功上线的商品（如审核失败无历史版本），调用下架接口将返回错误。
* 状态校验：接口会校验商品当前状态是否为“已上架”或“已冻结”，非此状态将拒绝下架请求。建议调用前先通过查询接口获取最新状态。
* 下架不等于删除：下架仅停止对外展示，商品所有信息仍保留在平台系统中。如需彻底删除商品，请使用“删除商品”接口。

## 适用场景

* 当商品因停售、经营策略调整等原因不再对外销售时，商家可通过本接口主动下架。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS POST |
| **接口方向** | 开发者服务器->华为服务器 |
| **接口URL** | https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products/offline |

## 请求参数

**Request Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8 |
| Authorization | 是 | String | 通过[接口访问凭证](https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息。 |
| client\_id | 否 | String | 服务商接入场景必传。  API客户端ID。  创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发管理资料 > 开发配置 > 开发资料设置”页面中获取，详情请参见[接口访问凭证](https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-access-credentials)。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)中的应用-APP ID。 |
| x-traceid | 否 | String(100) | 请求链路追踪ID，用于标识一次完整的调用链路，便于进行日志追踪和问题定位。 |

**Request Body**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| productId | 是 | String(19) | 平台侧商品ID。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products/offline
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
    "productId": "3609293607964280344"
}
```

## 响应参数

调用成功时，返回如下：

**Response Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-type | 否 | String | 取值为：application/json;charset=UTF-8。 |

**Response Body**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| errorCode | 是 | Integer | 错误码。 |
| errorDesc | 是 | String | 错误描述信息。仅用于辅助定位问题和提示可读性错误原因，请勿用于业务逻辑判断或流程控制。 |

## 响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
{
    "errorCode": 0,
    "errorDesc": "success"
}
```
