---
title: "订单通知接口"
displayed_sidebar: xiaoyiSidebar
original_url: /docs/distribute/xiaoyi/interaction-interface-0000002505801554/order-notification-0000002537601307
format: md
---


# 订单通知接口

**功能介绍**

此接口用于通知开发者下发或者撤销商品权益。

**场景描述**

在收到用户付款或者申请退款通知后，调用该接口通知开发者下发或者撤销商品权益。

**接口原型**

| 承载协议 | HTTPS POST |
| --- | --- |
| 接口方向 | 小艺开放平台服务器 -> 开发者服务器 |
| 接口URL | interfaceUrl（开发者自定义） |
| 数据格式 | * 请求消息：Content-Type: application/json;charset=utf-8 * 响应消息：Content-Type: application/json;charset=utf-8 |

**鉴权方式**

**支持非对称密钥认证：**

基于RSA3072生成非对称密钥用于签名认证，开发者在网页上下载公钥，私钥由华为侧保管用于签名，公钥供开发者用于验签。

**请求参数**

**Request Header**

| 参数 | 参数类型 | <strong>M/O</strong> | 说明 |
| --- | --- | --- | --- |
| Content-Type | String | M | 取值为：application/json;charset=UTF-8 |
| signature | String | M | RSA签名密钥（计费相关接口使用）  1、密钥生成rsa\_public\_key.pem，开发者在网页上面下载公钥用于验证rsa签名，私钥由华为侧保存  2、使用SHA256WithRSA/PSS（秘钥长度3072）对http body（json序列化后）进行签名操作  3、将计算出的签名使用base64编码，并放置在头部signature字段 |

**Request Body**

| 参数 | 参数类型 | <strong>M/O</strong> | 说明 |
| --- | --- | --- | --- |
| traceId | String | M | 请求id，用于问题定位 |
| status | String | M | 操作状态，发放：PAID、撤销：REVOKE |
| agentOrderId | String | M | Agent订单id（华为侧） |
| skuId | String | M | 商品id（开发者配置） |
| ts | String | M | 时间戳，用于加密和缓存穿透。格式为：当前计算机时间和GMT时间（格林威治时间）1970年1月1号0时0分0秒所差的毫秒数 |
| userIdType | String | M | 用户账号类型 ，开发者自定义：CP\_USER\_ID |
| userId | String | M | 用户id |
| transBuffer | String | O | 透传信息，可以用于开发者存放业务自定义字段（例如触发场景等） |
| amount | BigDecimal | M | 实付金额，人民币单位为分 |
| currency | String | M | 币种，CNY |
| purchaseTest | Boolean | O | 真机测试场景触发时该字段为True，缺省False |
| deviceType | Integer | M | 设备类型，默认手机：0  [手机：0，平板：2，手表：4，车机：5，PC：11] |

**响应参数**

**Response Header**

| 参数 | 参数类型 | <strong>M/O</strong> | 说明 |
| --- | --- | --- | --- |
| Content-Type | String | M | 取值为：application/json;charset=UTF-8 |

**Response Body**

| 参数 | 参数类型 | <strong>M/O</strong> | 说明 |
| --- | --- | --- | --- |
| code | String | M | 返回码。\* success：成功，\* 其他：失败 |
| desc | String | O | 响应描述 |
| cpOrderId | String | M | Agent开发者内部自己的订单id |