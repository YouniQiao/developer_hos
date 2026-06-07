---
title: "创建lookalike人群定向"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-createlookalike-0000001210922474
format: md
---

# 创建lookalike人群定向

## 功能介绍

创建 lookalike人群定向。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -&gt; 推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/lookalike |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_e3013e970e4b.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| groupName | M | String | 定向包名称。  最大长度50。 |
| extendedMagnitude | M | Integer | 扩展推广人群量级。  单位：万 |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |
| groupId | M | String | 定向包ID，由[新增标签定向](/docs/monetize/promotion/marketapi-addtag-0000001181826407#section21761435152419)时返回。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/lookalike
Content-type: application/json"
Authorization: Bearer ***
client_id:***

{
	"customerId": "200000061",
	"groupId": "1366360** **8563627",
	"groupName": "示例定向包名称",
	"extendedMagnitude": 200
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| groupId | O | String | 新建人群定向后的groupId。 |

## 响应示例

```
{
	"code": 20770001,
	"msg": "Success",
	"groupId": "123"
}
```

## 调用示例

```
“Curl”
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/lookalike -H "client_id:***" -H "Authorization:Bearer ***" -H "Content-type: application/json" -d '{"customerId": "200000061","groupId": "1366360** **8563627","groupName": "示例定向包名称","extendedMagnitude": 200}'
```
