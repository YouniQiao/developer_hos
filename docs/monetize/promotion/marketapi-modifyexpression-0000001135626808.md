---
title: "修改交并差定向"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modifyexpression-0000001135626808
---
# 修改交并差定向

## 功能介绍

修改交并差定向任务。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/expression |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\{access\_token\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_f5096d3b9f77.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| groupId | M | String | 定向任务ID |
| groupName | O | String | 定向包名称。  最大长度50。 |
| included\_audiences | O | List&lt;String&gt; | 包含定向包ID列表。  集合长度最大为100个，ID最大长度64。 |
| included\_expression | O | String | 多个包含定向包之间计算关系，枚举值为：   - AND - OR |
| excluded\_audiences | O | List&lt;String&gt; | 排除定向包ID列表。  集合长度最大为100个，ID最大长度64。 |
| excluded\_expression | O | String | 多个排除定向包之间计算关系，枚举值为：   - AND - OR |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |

## 请求示例

```
PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/expression
client_id: ***
Authorization: Bearer ***
Content-Type: application/json

{
     "groupId":"216365",
     "groupName":"测试定向",
     "included_audiences":["216343","216341"],
     "included_expression":"AND",
     "excluded_audiences": ["216329"],
     "excluded_expression": "OR"
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| groupId | O | String | 成功时返回定向ID，失败时该值为空。 |

## 响应示例

```
{   
   "code": 20770001,
   "msg": "",
   "groupId": "216367"
}
```

## 调用示例

```
“Curl”
curl -X PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/expression -H 'client_id: ***' -H 'Authorization: Bearer ***' -H 'Content-Type: application/json' -d 
{"groupId":"216365","groupName":"测试定向","included_audiences":["216343","216341"],"included_expression":"AND","excluded_audiences":["216329"],"excluded_expression":"OR"}
```
