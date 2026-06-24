---
title: "申请退券"
upstream_id: "harmonyos-references/payment-api-common-promotion-service-merc-coup-ucoup-refund"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:47.227746"
---

# 申请退券

#### 功能介绍

商户可以在退款之后调用此退券API，调用成功后，券恢复到用户的卡包里面，并且在有效期内可退回到激活态，券可正常再被使用。如果退券时，券已不在有效期内，则券的状态被更新为失效态，不可再被使用。

#### 接口原型

- **承载协议：** HTTPS POST
- **接口方向：** 开发者服务器 -> 华为支付服务器
- **接口URL：** https://petalpay-developer.cloud.huawei.com.cn/api/merchantgrow/v1/merchantcoupon/coupon/refund
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
| batchNo | 是 | String | 券的所属批次号。最小长度为1，最大长度为40。 |
| couponCode | 是 | String | 待退券的CouponCode。最小长度为1，最大长度为32。 |

#### **请求示例**

```
POST /api/merchantgrow/v1/merchantcoupon/coupon/refund HTTP/1.1
PayMercAuth: {"callerId":"10132120***","traceId":"202305151026422776499","time":1684117602555,"authId":"120291744647139***","headerSign":"u+H1Oe3fXV9mGCES89XA7tSjp8+TELYgG4bKyECwrVGwwExHtdWTnKc4WvEpfjLzpzKE2/+K*********************UcN9QrxXSeR8r6X46b7491N1jKg/lOG7eAFfwjEWJu5JyvY5KunSeE6DiKs=","bodySign":"yWDtXOBqDoItPgHmF57L6U5G7F/LhsILChu8YSpVV0HwRQCzdGAz53wDkCRLiAEVGDDu6E6KxPAHE0TIkTx*********************Pj10iUIFeaszpiRT2aQDaqLGaxvta6J5UxIUmAp+wGdV/juGEvQ="}
Content-Type: application/json
{
  "requestNo": "REQ000***",
  "batchNo": "PV1202602051023491879174270605609***",
  "couponCode": "C1"
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
| refundTime | 是 | String | 微信退券成功的时间，格式为yyyy-MM-dd'T'HH:mm:ss.SSSZ，yyyy-MM-DD表示年月日，T出现在字符串中，表示time元素的开头，HH:mm:ss.SSS表示时分秒，Z为对应的时区。例如：2023-03-28T17:50:12.000+0800表示，北京时间2023年3月28日 17点50分12秒。注意：要使用必须传准确的UTC时间。 |

#### **响应示例**

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
{
  "resultCode": "000000",
  "resultDesc": "Success.",
  "sign":"MEQCIEIWzdpziRyTi8vhwWHFuDdx********************jer0YAMabeCgTDG77e+2XJItvq/ZkIcCN5/B20pQ==",
  "refundTime": "2024-03-23T16:42:12.000+0800"
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
| 400000 | INVALID_APPID | AppId未和商户绑定 | 检查appId是否正确且已经绑定商户号。 |
| 400000 | INSUFFICIENT_PERMISSION | 商户权限受限 | 在商户平台检查并配置该产品权限。 |
| 400000 | CUST_NOT_EXIST | 用户不存在或已销户 | 请确认操作的华为账号状态是否正常或已销户。 |
| 400000 | COUPON_NOT_EXIST | 未找到相关优惠券 | 查询用户优惠券信息，确认是否存在优惠券。 |
| 400000 | COUPON_INVALID_STATUS | 优惠券状态不正确 | 查询用户优惠券状态，确认是否正常。 |
