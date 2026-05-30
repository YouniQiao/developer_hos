---
title: "使用转化行为数据创建人群定向"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-useconvertdata-0000001231274168
---
# 使用转化行为数据创建人群定向

## 功能介绍

使用转化行为数据创建人群定向。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -&gt; 推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/behavior |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\{access\_token\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_b4164581f152.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| groupName | M | String(64) | 标签分组名称。 |
| condition | M | String | 标签条件，标签条件可为单个标签；标签条件为多个标签时，多个标签枚举值之间用逗号分隔，格式参考请求示例，取值请参考[Condition](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-condition-0000001181946369)。  说明：  后续标签可能会发生变动，请关注[接口更新说明](https://developer.huawei.com/consumer/cn/doc/promotion/market-changing-history-0000001195355715)。 |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |
| groupId | M | String | 创建时此字段可填空。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/behavior
Content-type: application/json"
Authorization: Bearer ***
client_id:***

{
	"groupName": "示例转化行为人群名称",
	"condition":"{\"forecast_age_dev\": \"16\"}",
	"customerId": "200000061",
	"groupId": "",
	
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
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
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/behavior -H "client_id:***" -H "Authorization:Bearer ***" -H "Content-type: application/json" -d '{"customerId": "200000061","groupId": "1366360** **8563627","groupName": "示例转化行为人群名称","condition":"{\"forecast_age_dev\": \"16\"}"}'
```
