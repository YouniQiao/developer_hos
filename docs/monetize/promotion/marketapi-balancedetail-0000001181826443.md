---
title: "查询账户消耗明细"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-balancedetail-0000001181826443
format: md
---

# 查询账户消耗明细

## 功能介绍

查询开发者账户内的消耗明细，包括现金、赠送金、耀星券的消耗明细。

## 使用约束

- 这里查询的是用户名下所有的消耗，包括国内和海外两部分数据。
- 接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/advertiser/account/balance/detail |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_ef14f5a4fc6d.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。
- 若您为直客团队中的协作者，需要使用<strong>直客管理者账户</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| appIds | O | List&lt;String&gt; | 推广应用ID列表。  说明：  具体appId值请登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后点击右上角账号后的下拉箭头，在下拉窗中点击“我的推广权限”后的“管理”，点击“已申请”页签即可看到对应已申请推广权限的应用的<strong>appId</strong>。 |
| customerId | O | String | 代理客户的内部ID，代理查询时必须携带。   - 授权合作伙伴查询时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 - 直客团队协作者查询时必须携带，该字段请使用<strong>协作者账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 <strong>说明：</strong>协作者查询时，会使用此字段与直客管理者的账户ID校验从属关系，再根据此字段查询报表。 |
| startTime | M | String | 起始时间，格式YYYY-MM-DD。 |
| endTime | M | String | 截止时间，格式YYYY-MM-DD。 |
| pageSize | O | Integer | 分页查询时指定返回数据每页的条数，默认20，取值范围为1-1000。 |
| page | O | Integer | 分页查询时指定返回数据的页码，默认值为1，表示第1页。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/advertiser/account/balance/detail
Content-type: application/json
Authorization: Bearer ***
client_id:***
{   
    "appIds": [
     "C300158621"
    ],
    "customerId": "12345",
    "endTime": "2020-03-02",
    "startTime": "2020-01-01", 
    "page":1,
    "pageSize": 10
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码，参考[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| totalMoney | M | double | 总消耗。  总消耗=现金消耗+赠送金消耗+置换金消耗+耀星券消耗 |
| cashCostMoney | M | double | 现金消耗金额。 |
| giftCostMoney | M | double | 赠送金消耗金额。 |
| exchangeCostMoney | M | double | 置换金消耗金额。 |
| starCouponCostMoney | M | double | 耀星券消耗金额。 |
| currency | M | String | 币种。 |
| spentDetails | O | List&lt;[SpentDetail](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-spentdetail-0000001135626862)&gt; | 消耗明细。 |
| totalCount | M | Integer | 记录数。 |

## 响应示例

```
{   
   
   "code": 20770001,
    "msg": "success.",
    "cashCostMoney": 93.0,
    "currency": "CNY",
    "exchangeCostMoney": 0.0,
    "giftCostMoney": 0.0,
    "spentDetails": [
        {
            "appId": "C300158621",
            "appName": "su23",
            "cashCostMoney": 93.0,
            "exchangeCostMoney": 0.0,
            "giftCostMoney": 0.0,
            "starCouponCostMoney": 0.0,
            "time": "2021-01-01~2021-03-02",
            "totalMoney": 93.0
        }
    ],
    "starCouponCostMoney": 0.0,
    "totalCount": 1,
    "totalMoney": 93.0
}
```

## 调用示例

```
“Curl”
curl -H "Content-type: application/json" -H "Authorization:Bearer ***" -H "client_id:***" -X POST -d '{"endTime": "2020-03-02","startTime": "2020-01-01", "page":1,"pageSize": 10}' https://connect-api.cloud.huawei.com/api/marketing-api/v2/advertiser/account/balance/detail
```
