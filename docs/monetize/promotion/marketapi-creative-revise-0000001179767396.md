---
title: "修改任务创意状态"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-creative-revise-0000001179767396
format: md
upstream_id: monetize/promotion/marketapi-creative-revise-0000001179767396
last_sync: 2026-06-07
sync_hash: c689abcf
---
# 修改任务创意状态

## 功能介绍

修改推广任务创意状态，包括启停和删除。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/creative/status |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_063be8ab30ba.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |
| creativeIds | M | List&lt;Long&gt; | 任务推广创意ID，支持批量修改。 |
| creativeTemplateGroupRelIds | O | List&lt;Long&gt; | 预审创意组关联关系Id，支持批量修改。 |
| creativeSwitch | O | String | 任务推广创意开关。  枚举值如下：   - ON：开启 - OFF：关闭 |
| status | O | String | 任务推广创意状态。  枚举值如下：   - DELETE：删除 说明：  同时操作启停和删除只能有一个生效，即不可以同时设置creativeSwitch和status的参数值。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/creative/status
client_id: *** 
Authorization: Bearer ***
Content-Type: application/json 
{   
   "customerId": "",    
   "creativeIds": [1433675870236844032],    
   "creativeTemplateGroupRelIds": [1930909069515431956],  
   "creativeSwitch": "ON",    
   "status": ""
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| rtnCode | M | Integer | 返回码。  具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| rtnDesc | M | String | 返回描述。 |

## 响应示例

```
{
    "rtnCode": 20770001,
    "rtnDesc": "success"
}
```

## 调用示例

```
curl -X POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/creative/status -H 'client_id: ***' -H 'Authorization: Bearer ***' -H 'Content-Type: application/json' -d '{"customerId": "","creativeIds":[1433675870236844032],"creativeTemplateGroupRelIds":[1930909069515431956],"creativeSwitch": "ON","status": ""}'
```
