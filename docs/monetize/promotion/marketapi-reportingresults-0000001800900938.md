---
title: "上报上传结果"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-reportingresults-0000001800900938
---
# 上报上传结果

## 功能介绍

您在获取了上传信息，并且成功上传人群包文件数据后，可使用Marketing API向推广平台服务端上报上传结果。（注意：上报上传结果接口调用后，等待1分钟，可以继续调用其他接口）

## 使用约束

接口调用者的角色：仅支持直客调用

人群包文件数据状态：已上传

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器 -&gt; 推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file/reportUploadResult |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\{access\_token\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/0000000000011111111.20251117124651.06507652264346220695335308047492_50001231000000_2800_F8E04F695C44C9E4F4E650AB6893C46DF47F4189866315672FC69B05BD7E3278_5b2ad8d25314.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| objectId | M | String | 上报结果请求对象 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file/reportUploadResult
 
--header 'client_id: *** 
--header 'Authorization: Bearer ***
--header 'Content-Type: application/json' 
 
Body:
{
    "objectId": "751eb312-9d04-4730-b7e5-02b774c62a7e445D6F0C5E4CDF469EE7FF211FAA078C.txt"
}'
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | String | 返回码  具体请参见[错误码](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述 |

## 响应示例

```
{
    "code": 10521005,
    "msg": "the group file is processing"
}
```

## 调用示例

```
“Curl”
 POST https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file/reportUploadResult'
 
--header 'client_id: ***
--header 'Authorization: Bearer ***
--header 'Content-Type: application/json' 
 
{
    "objectId": "01585bf8-a6cb-4a4a-ac87-1353d9f3c54dC2CF1C6DFDB89AF2C12BB25A6C8BCEC0.txt"
}
```
