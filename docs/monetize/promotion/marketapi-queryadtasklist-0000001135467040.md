---
title: "查询推广任务列表"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-queryadtasklist-0000001135467040
format: md
upstream_id: monetize/promotion/marketapi-queryadtasklist-0000001135467040
last_sync: 2026-06-07
sync_hash: 11fe47d8
---
# 查询推广任务列表

## 功能介绍

查询推广任务的详情。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v1/ad/query |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_df562c10b0a9.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。
- 若您为直客团队中的协作者，需要使用<strong>直客管理者账户</strong>创建API客户端和获取Access Token。

### Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| customerId | O | String | 授权合作伙伴投放时必须携带；在直客团队体系中，可通过直客协作者账户ID查询协作者账户列表，未传入协作者账户ID时，返回直客管理者账户的数据。  投放操作者账户/直客协作者账户登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)，在右上角账号信息--账户ID获取。 |
| page | O | Integer | 分页查询时指定返回数据的页码。  默认值：1，表示第1页。 |
| pageSize | O | Integer | 分页查询时指定返回数据每页的条数。  取值范围：[1,1000]  默认值：20 |
| filtering | O | [AdTaskFiltering](/docs/monetize/promotion/marketapi-modle-adtaskfiltering-0000001181826447) | 本次查询的过滤条件。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v1/ad/query
Content-type: application/json
Authorization: Bearer *** 
client_id:***
{
    "page": 1,
    "pageSize": 20, 
    "filtering":
    {
        "taskIds":[600209687] 
    }
}
```

## 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回码描述信息。 |
| total | O | Long | 总记录数。 |
| datas | M | List&lt;[AdTask](/docs/monetize/promotion/marketapi-modle-adtask-0000001135626850)&gt; | 返回任务详细信息。 |

## 响应示例

```
{
 "code": 20770001,
 "msg": "query task success",
 "total": 0,
 "datas": [{
   "taskId": 600209687,
   "taskName": "精选推荐RTA测试",
   "appId": "100106783",
   "appName": "Mathlab Fraction Calculator",
   "status": "SUSPENDED",
   "pricingType": "CPD",
   "deliveryMode": "0",
   "mediaChannel": "243728192482956951",
   "deliverStartTime": "1999-01-01",
   "deliverEndTime": "9999-12-31",
   "deliveryHours": [],
   "price": 1.2,
   "budget": 0.0
  }
 ]
}
```

## 调用示例

```
“Curl”
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v1/ad/query -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json"  -d '{"page":1,"pageSize":20,"filtering":{"taskIds":[600209687]}}'
```
