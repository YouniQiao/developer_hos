---
title: "批量更新任务预算"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-updatebudget-batch-0000001263215157
format: md
upstream_id: monetize/promotion/marketapi-updatebudget-batch-0000001263215157
last_sync: 2026-06-07
sync_hash: 2fdc6de6
---
# 批量更新任务预算

## 功能介绍

批量修改推广任务的日预算金额。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/budget |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_1fa067997da4.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| taskIds | M | List&lt;Long&gt; | 推广任务ID。 |
| budget | M | Double | 预算。限制每天的花费，请填写整数，最低100￥，最高 10,000,000￥（允许为0，代表不限制日预算）。每天的实际消耗超过预算后，系统会自动停止推广，第二天再推广。  修改后的任务日预算，不能低于当前已经消费金额的105%，以整数为单位向上取整。 |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到“华为账号”。 |

## 请求示例

```
PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/budget
Content-type: application/json
Authorization: Bearer ***
client_id:***
{
   "taskIds":[200052125, 200052153],
   "budget":20
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| failedTasks | O | List&lt;[TaskFailedDetail](/docs/monetize/promotion/marketapi-modle-taskfaileddetail-0000001135626864)&gt; | 失败任务原因说明。 |

## 响应示例

```
{   
   
    "code": 20770001,
    "msg": "all tasks update daily budget success",
    "failedTasks":[]
}
```

## 调用示例

```
“Curl”
curl -X PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/budget -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json" -d '{"taskIds":"[200052125, 200052153]", "budget":20}'
```
