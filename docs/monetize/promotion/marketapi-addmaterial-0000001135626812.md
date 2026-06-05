---
title: "新增素材"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-addmaterial-0000001135626812
format: md
---

# 新增素材

## 功能介绍

为品牌类推广任务， 上传素材。

## 使用约束

- 图片文件限制单个最大2M，视频文件最大50M，资质文件最大50M。
- 接口调用者的角色：账号持有者、管理员、App管理员、运营。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器-&gt;推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/material?customerId=\\{customerId\\} |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/caution_3.0-zh-cn_5028b30a8082.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。
- 若您为客户投放伙伴，需要使用<strong>客户投放伙伴主账号</strong>创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| fileType | M | String | 素材类型。具体枚举值如下   - PIC ：图片素材 - VIDEO：视频素材 - ATTACHMENT：资质文件 |
| fileName | M | String | 文件名称，从[文件上传](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-fileupload-0000001135467022)中获取上传的本地真实文件名称。 |
| fileSignature | M | String | 文件SHA256值(用于服务端校验)，从[文件上传](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-fileupload-0000001135467022)中获取文件sha256值。 |
| customerId | O | String | 授权合作伙伴投放时必须携带，该字段请使用<strong>投放操作账户</strong>登录[华为应用市场应用推广平台](https://ads.huawei.com/cn/)后在“我的账号信息”中查看到的“华为账号”。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/material
Content-type: application/json
Authorization: Bearer ***
client_id:***

{ 
  "customerId":"",
  "fileType":"ATTACHMENT",
  "fileName":"test.jpg",
  "fileSignature":"***"
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。  具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| Id | O | Long | 素材ID。 |

## 响应示例

```
{   
  "code": 20770001,
  "msg": "",
  "id": 34
}
```

## 调用示例

```
“Curl”
curl-X POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/material/?customerId=200000111  -H "Authorization:Bearer ***" -H "client_id:***" -H "Content-type: application/json" -d '{"customerId":"","fileType":"ATTACHMENT","fileName":"test.jpg","fileSignature":"***"}'
```
