---
title: "修改日预算和次日预算"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-dailybudget-revise-0000001237788539
format: md
upstream_id: monetize/promotion/marketapi-dailybudget-revise-0000001237788539
last_sync: 2026-06-07
sync_hash: fc302abd
---
# 修改日预算和次日预算

## 功能介绍

修改账户日预算和次日预算。

## 使用约束

- 接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -&gt; 推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/account/dailybudget |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_92034406bf0a.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |
| currency | M | String | 账户币种。枚举值如下：   - CNY：人民币 - EUR：欧元 - USD：美元 - JPY：日元 - GBP：英镑 |
| accountRegionType | M | String | 账户区域类型，枚举类型如下   - CHINA：国内账户 - OUTCHINA：国际账户 |
| todayBudget | O | Double | 账户日预算，如须设置为不限制，填写值为0。 |
| nextDaySwitch | O | Integer | 账户次日预算设置开关，如设置次日预算，该字段必填。   - 0：关闭 - 1：开启 |
| nextDayBudget | O | Double | 账户次日预算，如须设置为不限制，填写值为0。  说明：  如nextDaySwitch值为0，即账户次日预算开关设置为关闭，此字段无需填写。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/account/dailybudget
client_id: *** 
Authorization: Bearer ***
Content-Type: application/json 

{
    "accountRegionType": "CHINA",
    "currency": "CNY",
    "nextDaySwitch": 0
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| rtnCode | M | Integer | 返回码，参考[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| rtnDesc | M | String | 返回描述。 |

## 响应示例

```
{    
    "rtnCode": 20770001,
    "rtnDesc": "Success."
}
```

## 调用示例

```
“Curl”
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/account/dailybudget  -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json" -d '{"accountRegionType":"CHINA","currency":"CNY","nextDaySwitch":0}'
```
