---
title: "查询分包列表"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-querychannelpkg-0000001135467048
format: md
---

# 查询分包列表

## 功能介绍

查询智能分包列表。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/app/channel-pkg/query |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_882df42263d1.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| appIds | M | List&lt;String&gt; | 推广应用ID列表，最大长度100。 |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |
| pageSize | O | Integer | 分页查询时指定返回数据每页的条数。 |
| page | O | Integer | 分页查询时指定返回数据的页码，默认值为1，表示第1页。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/app/channel-pkg/query
Content-type: application/json
Authorization: Bearer ***
client_id:***
{
   "appIds": ["300158621","100305949"],
   "pageSize": 20,
   "page": 1
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| totalCount | M | String | 总数。  最大长度32。 |
| list | O | List&lt;[ChannelPkgInfo](/docs/monetize/promotion/marketapi-modle-channelpkginfo-0000001135626854)&gt; | 智能分包列表。 |

## 响应示例

```
{   
    
    "code": 0,
    "msg": "Query app_channel info successfully",
    "totalCount": "42",
    "list": [
        {
            "appId": "300158805",
            "appCnName": "su28w（HMOS）",
            "appEnName": "su28w（HMOS）",
            "channel": "package012422",
            "channelPkgId": 401826593821148463,
            "channelPkgName": "package012",
            "lastUpdateTime": "2021-04-12 17:37:23",
            "status": 1
        },
        {
            "appId": "300158805",
            "appCnName": "su28w（HMOS）",
            "appEnName": "su28w（HMOS）",
            "channel": "zhoumy123456",
            "channelPkgId": 401826593821148290,
            "channelPkgName": "zhoumy",
            "lastUpdateTime": "2021-04-12 14:57:19",
            "status": 1
        }
    ]
 
}
```

## 调用示例

```
“Curl”
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/app/channel-pkg/query -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json" -d '{"appIds": ["300158805","300153501"],"customerId": "","pageSize": 20,"page": 1}'
```
