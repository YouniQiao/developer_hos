---
title: "查询日预算和次日预算"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-dailybudget-query-0000001192788600
---
# 查询日预算和次日预算

## 功能介绍

查询账户日预算和次日预算。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/query/account/dailybudget/\{accountRegionType\}?customerId=\{customerId\} |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Path

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>参数类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| accountRegionType | M | String | 账户区域类型，枚举类型如下   - CHINA：国内账户 - OUTCHINA：国际账户 |

### Query

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\{access\_token\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_afcae98cb20e.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

## 请求示例

```
GET https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/query/account/dailybudget/CHINA?customerId=***
Authorization: Bearer ***
client_id:***
Content-type: application/json
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| rtnCode | M | Integer | 返回码，参考[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
| rtnDesc | M | String | 返回描述。 |
| message | M | [AccountDailyBudget](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-accountdailybudget-0000001195432366) | 账户日预算详情。 |

## 响应示例

```
{
    "rtnCode": 20770001,
    "rtnDesc": "Success",
    "message": {
        "userId": "123",
        "currency": "CNY",
        "todayBudget": 1400.00,
        "nextDayBudget": 2000.00,
        "cost": 566.65,
        "nextDaySwitch": 1
    }
}
```

## 调用示例

```
“Curl”
curl -X GET https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/query/account/dailybudget/CHINA?customerId=*** -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json"
```
