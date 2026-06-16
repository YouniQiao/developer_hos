---
title: "批量修改子任务"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-subtask-batchrevise-0000001180098798
format: md
upstream_id: monetize/promotion/marketapi-subtask-batchrevise-0000001180098798
last_sync: 2026-06-07
sync_hash: 6b46b7b6
---
# 批量修改子任务

## 功能介绍

批量修改推广任务子任务。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/batch/subtask |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#h2创建api客户端)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_95f221d5ae9b.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| subTasks | M | List&lt;[BatchUpdateSubTaskAM](/docs/monetize/promotion/marketapi-modle-batchupdatesubtask-0000001182852766#ZH-CN_TOPIC_0000001741282936__zh-cn_topic_0000001176165925_table134188155317)&gt; | 子任务 |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。  长度范围1~64。 |

## 请求示例

```
PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/batch/subtask
client_id: *** 
Authorization: Bearer ***
Content-Type: application/json 

{
  "subTasks": [
    {
      "subTaskPrice": 20.0,
      "subTaskFollowAppId": "1033564",
      "subTaskId": 566412
    }
  ]
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码，参考[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |

## 响应示例

```
{   
  "code": 20770001,
  "msg": "success"
}
```

## 调用示例

```
“Curl”
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/task -H 'client_id: ***' -H 'Authorization: Bearer ***' -H 'Content-Type: application/json' -d 
'{"subTasks":[{"subTaskPrice":20.0,"subTaskFollowAppId":"1033564","subTaskId":566412}]}'
```
