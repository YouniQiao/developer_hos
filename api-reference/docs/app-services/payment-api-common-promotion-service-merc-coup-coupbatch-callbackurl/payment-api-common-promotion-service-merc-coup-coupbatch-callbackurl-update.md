---

title: "设置回调通知地址"
upstream_id: "harmonyos-references/payment-api-common-promotion-service-merc-coup-coupbatch-callbackurl-update"
catalog: "harmonyos-references"
synced_at: "2026-07-09T01:01:35.111570"
content_hash: "9e092d5689a9"
---


# 设置回调通知地址

#### 功能介绍

用于设置接收商家券在华为流量场景发放成功后的通知地址。

![](./img/note_3.0-zh-cn.png) 在创建券批次时通过notifyAppId数据模型notifyUrl参数指定了回调通知配置，未调用过该接口进行配置，以批次上的配置为准。调用该接口配置后以该接口配置的为准。

#### 接口原型

- **承载协议：** HTTPS POST
- **接口方向：** 开发者服务器 -> 华为支付服务器
- **接口URL：** https://petalpay-developer.cloud.huawei.com.cn/api/merchantgrow/v1/merchantcoupon/callback/address/manager
- **数据格式：** 请求消息：Content-Type: application/json 响应消息：Content-Type: application/json

#### 请求参数

Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json; charset=UTF-8 |
| PayMercAuth | 是 | String | 取值为：[PayMercAuth](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-model#paymercauth)的JSON字符串 |

Request Body

| 参数 | 是否必选 | 类型 | 说明 |
| --- | --- | --- | --- |
| requestNo | 是 | String | 请求号，由商户随机生成，不同请求要求唯一。最小长度为1，最大长度为64。 **说明**：用于保证幂等。对不同请求，requestNo的值要求不一样。对于相同请求，值要求一样，比如超时场景，可通过requestNo一样进行重试。 |
| notifyUrl | 是 | String | 事件通知的URL地址，华为流量场景发券时通知商家发券结果的地址，如果不填写，则不通知。最小长度为1，最大长度为256。 |

#### **请求示例**

```
POST /api/merchantgrow/v1/merchantcoupon/callback/address/manager HTTP/1.1
PayMercAuth: {"callerId":"10132120***","traceId":"202305151026422776499","time":1684117602555,"authId":"120291744647139***","headerSign":"u+H1Oe3fXV9mGCES89XA7tSjp8+TELYgG4bKyECwrVGwwExHtdWTnKc4WvEpfjLzpzKE2/D*********************46b7491N1jKg/lOG7eAFfwjEWJu5JyvY5KunSeE6DiKs=","bodySign":"yWDtXOBqDoItPgHmF57L6U5G7F/LhsILChu8YSpVV0HwRQCzdGAz53wDkCRLiAEVGDDu6E6KxPAHE0TIkTxHMcUWx7N6405QrcBimTcT*********************piRT2aQDaqLGaxvta6J5UxIUmAp+wGdV/juGEvQ="}
Content-Type: application/json
{
    "requestNo":"30000006",
    "notifyUrl": "https://xxxx.xxxx.xxxx/test/path"
}
```

#### 响应参数

Response Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json; charset=UTF-8 |

Response Body

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| resultCode | 是 | String | 返回码，"000000"表示成功，其他表示异常，请参见[错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-error-code-rest#公共错误码说明)。 |
| resultDesc | 是 | String | 结果描述。 |
| subCode | 否 | String | 业务错误码。 |
| subDesc | 否 | String | 业务错误描述信息。 |
| sign | 是 | String | 签名信息，除“sign”字段以外的其他字段参与签名。 |
| signType | 否 | String | 签名类型。华为支付生成签名字符串使用的算法，当前为SM2算法。 |
| certNo | 否 | String | 签名所使用的证书编号。 |

#### **响应示例**

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
{
    "resultCode": "000000",
    "resultDesc": "Success.",
    "sign":"MEQCIEIWzdpziRyTi8vhwWHFuDdxf********************jer0YAMabeCgTDG77e+2XJItvq/ZkIcCN5/B20pQ=="
}
```

#### 错误码

resultCode非400000的错误码请看[公共错误码说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/payment-error-code-rest#公共错误码说明)。

| **返回码** | **错误码** | **错误描述** | **解决方案** |
| --- | --- | --- | --- |
| 400000 | UNKNOW_ERROR | 服务暂不可用, 请稍后重试 | 稍候重试。 |
| 400000 | INVALID_ARGUMENTS | 参数不合法 | 检查请求参数。 |
| 400000 | INVALID_MERC_NO | 无效商户号 | 检查入参商户号是否正确。 |
| 400000 | CHECK_MERC_STATUS | 商户状态校验失败 | 请检查商户状态是否正常。 |
