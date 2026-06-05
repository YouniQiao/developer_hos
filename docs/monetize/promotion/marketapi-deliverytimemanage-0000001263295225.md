---
title: "批量修改任务投放时间/时段"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-deliverytimemanage-0000001263295225
format: md
---

# 批量修改任务投放时间/时段

## 功能介绍

批量修改推广任务的投放起止时间、投放的具体时段。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/deliverytime |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_d41f537a5c15.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| taskIds | M | List&lt;Long&gt; | 推广任务ID列表。  最大长度100。 |
| startDate | O | String | 投放开始日期。  格式：YYYY-MM-DD |
| endDate | O | String | 投放结束日期。  格式：YYYY-MM-DD |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |
| deliveryHours | O | List&lt;[DeliveryHour](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-deliveryhour-0000001181826453)&gt; | 投放时段。  允许为空数组。 |

## 请求示例

```
PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/deliverytime
Content-type: application/json
Authorization: Bearer ***
client_id:***

{
     
  "customerId": "",
  "taskIds": [200029168,200029308],
  "startDate": null,
  "endDate": "2021-05-30",
  "deliveryHours": [
    {
      "day": "Monday",
      "startHMs": "0000",
      "endHMs": "0130"
    },
    {
      "day": "Monday",
      "startHMs": "0200",
      "endHMs": "0230"
    },
    {
      "day": "Monday",
      "startHMs": "2300",
      "endHMs": "2400"
    },
    {
      "day": "Tuesday",
      "startHMs": "0200",
      "endHMs": "0230"
    }
  ]
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| failedTasks | O | List&lt;[TaskFailedDetail](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-taskfaileddetail-0000001135626864)&gt; | 失败任务原因说明。 |

## 响应示例

```
{   
  
    "code": 20770001,
    "msg": "Successfully modified tasks",
    "failedTasks": []
}
```

## 调用示例

```
“Curl”
curl -X PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/task/deliverytime-H "Authorization:Bearer ***" -H "client_id:***"  -H "Content-type: application/json" -d '{"customerId":"","taskIds":[200029168,200029308],"startDate":null,"endDate":"2021-05-30","deliveryHours":[{"day":"Monday","startHMs":"0000","endHMs":"0130"},{"day":"Monday","startHMs":"0200","endHMs":"0230"},{"day":"Monday","startHMs":"2300","endHMs":"2400"},{"day":"Tuesday","startHMs":"0200","endHMs":"0230"}]}'
```
