---
title: "创建文件人群"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-filecreation-0000001847699773
format: md
---

# 创建文件人群

## 功能介绍

您在使用Marketing API上报上传结果后，需要使用Marketing API为上传完毕的人群包文件数据创建接口，供运营人员进行人群包校验。校验通过后，即可成功创建人群包。

## 使用约束

接口调用者的角色：仅支持直客调用

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -&gt; 推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/1b567bc0cb56.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| groupName | M | String(256) | 人群名称 |
| objectId | M | String(255) | 文件对象 |
| fileIdType | M | Int32 | 文件类型，0：imei，1：oaid |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file
Content-type: application/json"
Authorization: Bearer ***
client_id:***

{
   "groupName": "创建人群定向示例",
    "fileIdType": 1,
    "objectId": "17f8b476** ** **0804B179F40FE91.txt"
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| groupId | O | String | 创建成功的话会返回定向ID，失败的话该值为空。 |

## 响应示例

```
{
    "code": 20770001,
    "msg": "Success",
    "groupId": "V2024** ** **3730"
}
```

## 调用示例

```
“Curl”
curl --location --request POST ' https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file ' \
--header 'client_id: ** ** **' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ***
Body:
{
   "groupName": "创建人群定向示例",
    "fileIdType": 1,
    "objectId": "17f8b476** ** **0804B179F40FE91.txt"
}'
```
