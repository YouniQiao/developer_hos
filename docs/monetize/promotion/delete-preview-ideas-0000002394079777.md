---
title: "删除预审创意"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/delete-preview-ideas-0000002394079777
format: md
---

# 删除预审创意

## 功能介绍

您可以使用Marketing API删除预审创意。

## 使用约束

接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS DELETE |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/creative/template?externalCreativeIds=1111&externalCreativeIds=222&customerId=333 |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_8a4f657e8424.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Query

| <strong>参数</strong> | <strong>必</strong> <strong>选</strong> <strong>(M)/</strong> <strong>可</strong> <strong>选</strong> <strong>(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作</strong> <strong>账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |
| externalCreativeIds | M | List&lt;String&gt; | 外部创意ID列表 |

## 请求示例

```
DELETE https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/creative/template?externalCreativeIds =1111&externalCreativeIds=222&customerId=333
client_id: *** 
Authorization: Bearer ***
Content-Type: application/json
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| rtnCode | M | Integer | 返回码。具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
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
“Curl”
curl -X DELETE https://connect-api.cloud.huawei.com/api/marketing-api/v2/ad/creative/template?externalCreativeIds =1111&externalCreativeIds=222&customerId=333 -H 'client_id: ***' -H 'Authorization: Bearer ***' -H 'Content-Type: application/json' -d '{"customerId": "","codeDesc": "success"}'
```
