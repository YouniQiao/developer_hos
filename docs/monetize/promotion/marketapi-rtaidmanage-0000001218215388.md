---
title: "批量修改RTAID"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-rtaidmanage-0000001218215388
format: md
upstream_id: monetize/promotion/marketapi-rtaidmanage-0000001218215388
last_sync: 2026-06-07
sync_hash: 34b9e3aa
---
# 批量修改RTAID

## 功能介绍

批量修改RTA任务下的RTA ID。

## 使用约束

该接口有权限控制，请联系华为运营人员申请开通权限。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/rtaid |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

### Body

![](./img/caution_3.0-zh-cn_9cded89a17a6.png) 

任务中如果不存在RTAID会新增，已经存在会修改。

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| subTaskIds | M | List&lt;Long&gt; | 推广子任务ID列表。  集合长度最大200。 |
| rtaId | M | String | RTAID。映射到开发者投放策略信息。 |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |

## 请求示例

```
PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/rtaid
client_id: *** 
Authorization: Bearer ***
Content-Type: application/json

{
        
   "customerId": 100000049,
   "subTaskIds": [200037037,200029114,200029405,200029633],
   "rtaId": "123"
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。 |
| msg | M | String | 返回描述。 |
| failedTasks | O | List&lt;[TaskFailedDetail](/docs/monetize/promotion/marketapi-modle-taskfaileddetail-0000001135626864)&gt; | 失败任务原因说明。 |

## 响应示例

```
{   
    "code": 20770001,
    "msg": "success",
    "failedTasks": []
}
```

## 调用示例

```
“Curl”
curl -X PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/rtaid -H 'client_id: ***' -H 'Authorization: Bearer ***' -H 'Content-Type: application/json' -d '{"customerId": 100000049,"subTaskIds": [200037037,200029114,200029405,200029633],"rtaId": "123"}'
```
