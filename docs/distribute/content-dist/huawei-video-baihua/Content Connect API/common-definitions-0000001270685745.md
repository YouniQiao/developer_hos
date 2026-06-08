---
title: "公共定义"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/huawei-video-baihua/Content Connect API/common-definitions-0000001270685745
format: md
upstream_id: distribute/content-dist/huawei-video-baihua/Content Connect API/common-definitions-0000001270685745
last_sync: 2026-06-07
sync_hash: 35091913
---
# 公共定义

<strong>接口协议</strong>

对接客户端的接口，统一采用HTTPS协议。

请求方法：POST；

数据格式：请求为JSON格式，响应为JSON的报文格式；

请求参数和返回数据统一采用utf-8编码；

消息头:"Content-Type", " application/json; charset=utf-8"；

请求和响应的参数类型本质都是string字符串。例如：定义为integer“类型”是指该字符串值必须满足integer规则的校验。

注意：

OpenAPI请求地址：https://video-openapi-drcn.cloud.huawei.com

<strong>公共请求</strong>

In Header

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 参数名称 | 参数类型 | 参数描述 | 参数示例 | 是否必须 |
| Content-Type | string | 请求格式类型。 | application/json; charset=utf-8 | true |
| Accept | string | 接收响应格式类型。 | application/json | true |
| Authorization | string | Bearer AccessToken（业务接入方申请的OAuth的AT，[获取AccessToken](https://developer.huawei.com/consumer/cn/doc/development/HMSCore-Guides/open-platform-oauth-0000001053629189)说明）。 | Bearer CF3Xl2XV6jMKZgqYSZFws9IPlgDvxqOfFSmrlmtkTRupbU2VklvhX9kC9JCnKVSDX2VrDgAPuzvNm3WccUIaDg== | true |

In Body

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| 参数名称 | 参数类型 | 参数描述 | 参数示例 | 是否必须 |
| retCode | integer | 0：操作成功  其他：操作失败错误码。 | application/json; charset=utf-8 | true |
| retMsg | string | 错误信息（操作成功时无错误信息）。 | application/json | false |
| data | json对象 | 返回数据体,参考各个接口的响应消息；  注意：响应中有data节点, data节点下由各API定义其他参数。 |  | false |