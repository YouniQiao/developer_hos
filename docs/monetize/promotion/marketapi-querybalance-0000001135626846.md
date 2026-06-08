---
title: "查询账户余额"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-querybalance-0000001135626846
format: md
upstream_id: monetize/promotion/marketapi-querybalance-0000001135626846
last_sync: 2026-06-07
sync_hash: 87277216
---
# 查询账户余额

## 功能介绍

查询开发者账户内的余额，包括现金余额、赠送金余额、耀星券余额。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/advertiser/account/balance?signParty=\\{signParty\\}&customerId=\\{customerId\\} |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Query

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| signParty | O | Integer | - 0表示查询国内账户 - 1表示查询海外账户   默认为0。 |
| customerId | O | String | 代理客户的内部ID，代理查询时必须携带。   - 授权合作伙伴查询时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 - 直客团队协作者查询时必须携带，该字段请使用<strong>协作者账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 <strong>说明：</strong>协作者查询时，会使用此字段与直客管理者账户ID校验从属关系，再根据此字段查询报表。 |

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_d8f78f04f4e4.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。
- 若您为直客团队中的协作者，需要使用<strong>直客管理者账户</strong>创建API客户端和获取Access Token。

## 请求示例

```
GET https://connect-api.cloud.huawei.com/api/marketing-api/v2/advertiser/account/balance?signParty=1&customerId=xxx
Content-type: application/json 
Authorization: Bearer ***
client_id:***
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 说明 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码，参考[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| totalMoney | M | double | 总共余额。 |
| lockedMoney | M | double | 锁定余额。 |
| publicCash | M | double | 公共现金余额。 |
| cash | M | double | 现金余额。 |
| exchange | M | double | 置换金。 |
| gift | M | double | 返利金额+纯赠送。 |
| starCoupon | M | double | 耀星券。 |
| currency | M | String | 币种。 |

## 响应示例

```
{   
  "code": 0,
  "msg": "string",
  "totalMoney": 0,
  "lockedMoney": 0,
  "publicCash": 0,
  "cash": 0,
  "exchange": 0,
  "gift": 0,
  "starCoupon": 0,
  "currency": "CNY"
 }
```

## 调用示例

```
“Curl”
curl -X GET https://connect-api.cloud.huawei.com/api/marketing-api/v2/advertiser/account/balance?signParty=1&customerId=xxx -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json"
```
