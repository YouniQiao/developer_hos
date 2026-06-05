---
title: "推广任务详细信息查询"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-queryadtaskdetail-0000001135626836
format: md
---

# 推广任务详细信息查询

## 功能介绍

查询推广任务的详细信息，如关键词列表、定向任务列表、监测链接等。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/task/detail |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_f8af6df74ab8.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。
- 若您为直客团队中的协作者，需要使用<strong>直客管理者账户</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| taskIds | M | List&lt;Long&gt; | 推广任务ID列表。  暂不支持合约任务。  最多支持100个ID。如果超过上限，接口会报错“code:20770004, msg:taskId size invalid”。 |
| customerId | O | String | 授权合作伙伴投放时必须携带；在直客团队体系中，可通过直客协作者账户ID查询协作者账户列表，未传入协作者账户ID时，返回直客管理者账户的数据。  投放操作者账户/直客协作者账户登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)，在右上角账号信息--账户ID获取。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/task/detail
Content-type: application/json
Authorization: Bearer ***
client_id:***
{
         "taskIds":[200052202, 200052192]
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| taskDetails | O | List&lt;[TaskDetail](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-taskdetail-0000001135467068)&gt; | 任务详情。 |

## 响应示例

```
{
    "code": 20770001,
    "msg": "queryTaskDetail success!",
    "taskDetails": [
        {
            "appId": "300158591",
            "appName": "su22",            
            "budget": 111.0,
            "channel": "0",
            "cpdVideoContent": {
                "attachment": "",
                "showBigPic": "cp-picture-test-cn-001_0af7bf22-df45-4465-b3dd-853630e2bd83AF1E89CBEE816D077731C7C5FC0ED096.png",
                "showPic": "cp-picture-test-cn-001_0af7bf22-df45-4465-b3dd-853630e2bd83AF1E89CBEE816D077731C7C5FC0ED096.png",
                "video": "https://1257007775vod2.myqcloud.com/5853f7e8vodgzp1257007775/50c8ba785285890806709870575/Geb0avoIcgqqqqqqqqqqq4A.mp4"
            },
            "deliveryHours": [
                {
                    "day": "Monday",
                    "endHMs": "04:00",
                    "startHMs": "02:30"
                }
            ],
            "deliveryMode": "0",
            "trafficScenarios": [
                1,
                4
            ],
            "deliveryPrice": 1500.0,
            "deliverySwitch": 1,
            "endTime": "2021-07-29",
            "isPositiveRegion": "Y",
            "materialStatus": "CREATIVE MODIFY AUDIT PENDING",
            "negativeKeyWords": [],
            "negativeRegions": "",
            "pricingType": "CPD",
            "regions": "CN",
            "startTime": "2021-06-29",
            "status": "AUDITED",
            "subTasks": [],
            "taskId": 200179768,
            "taskName": "搜索CPD-VideoContent222",
            "taskType": "CPD_VIDEO",
            "userId": "40086000000001839",
            "taskModelId": "401826593831138327"，
            "attributionMode": 1
        }
    ]
}
```

## 调用示例

```
“Curl”
curl -X POST  https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/task/detail  -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json" -d '{" taskIds":[200052202, 200052192]}'
```
