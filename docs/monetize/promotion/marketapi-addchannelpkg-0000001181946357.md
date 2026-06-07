---
title: "新增智能分包"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-addchannelpkg-0000001181946357
format: md
---

# 新增智能分包

## 功能介绍

创建智能分包。

## 使用约束

- 本功能需要提前向华为方申请智能分包权限。
- 接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/app/channel-pkg |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_468c9e68ff0a.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| channel | M | String | 智能分包渠道号。  最大长度128。 |
| appId | M | String | 应用ID。  最大长度32。 |
| channelPkgName | M | String | 智能分包名称。  最大长度128。 |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/app/channel-pkg
Content-type: application/json
Authorization: Bearer ***
client_id:***
{
    "appId": "300153501",
    "channel": "channel12345",
    "customerId": "200000091",
    "channelPkgName": "channelPkgName123"
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  取值范围：   - 20770001：成功 - 20770020：调用失败 |
| msg | M | String | 返回描述。 |
| channelPkgId | O | String | 智能分包ID。  最大长度1024。 |

## 响应示例

```
{   
   
  "code": 0,
  "msg": "",
  "channelPkgId": 401826593821148463
 
}
```

## 调用示例

```
“Curl”
curl -X POST  https://connect-api.cloud.huawei.com/api/marketing-api/v2/app/channel-pkg -H "Authorization:Bearer 
***" -H "client_id:***" -H "Content-type: application/json" -d '{"appId": "300153501","channel": "channel12345","customerId": "200000091","channelPkgName": "channelPkgName123"}'
```
