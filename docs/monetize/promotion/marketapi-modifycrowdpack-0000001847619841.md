---
title: "文件人群修改"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modifycrowdpack-0000001847619841
---
# 文件人群修改

## 功能介绍

在成功创建人群包后，您可使用Marketing API修改文件人群。

## 使用约束

接口调用者的角色：仅支持直客调用；若文件人群已授权给代理，直客需先取消授权，再调用接口修改文件人群；修改完，重新授权给代理使用。

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -&gt; 推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\{access\_token\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/0000000000011111111.20251117124652.85224901385957828233598944956614_50001231000000_2800_8EC924222C424F8A994DAB4CC2F5289728F1863150D8703243F67949C782C67E_3d1c05bd1b9f.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。

### Body

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| groupName | O | String(256) | 人群名称 |
| groupId | M | String | 人群ID |
| fileIdType | M | String | 文件类型，"0"代表IMEI, "1"代表OAID |
| objectId | O | String | 文件对象[c1]  说明：  若objectId是新增的，需要先完成“获取上传信息”、“上传文件”、“上报上传结果”3个接口的调用。 |

## 请求示例

```
PUT https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file
Content-type: application/json"
Authorization: Bearer ***
client_id:***
{
    "groupName": "创建人群定向示例",
"groupId": "V2024** ** **3283"
"fileIdType": 1,
     "objectId": "d4a0cf18-92c2-421c-9c10-0ace87b68bd0797119877B93797CC8BF35FF3EB6065A.txt"}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | Integer | 返回码。具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述。 |
| groupId | O | String | 创建成功的话会返回定向ID，失败的话该值为空。 |

## 响应示例

```
{
    “code": 20770001,
    "msg": "modifyFileGroup Success",
    "groupId": "V2024** ** **3283"
}
```

## 调用示例

```
“Curl”
curl --location --request PUT ' https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file ' \
--header 'client_id: ** ** **' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer ***
Body:
{
   "groupName": "创建人群定向示例",
    "groupId": "V2024** ** **3283"
}'
```
