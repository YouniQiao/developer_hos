---
title: "获取上传信息"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/maketpai-uploadinformation-0000001801060702
format: md
---

# 获取上传信息

## 功能介绍

您可以使用Marketing API获取上传信息

## 使用约束

接口调用者的角色：仅支持直客调用

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS GET |
| 接口方向 | 开发者服务器 -&gt; 推广平台服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file/getUploadInfo |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| <strong>参数</strong> | <strong>必选(M)/可选(O)</strong> | <strong>类型</strong> | <strong>描述</strong> |
| --- | --- | --- | --- |
| file-content-sha256 | M | String | 对象内容的sha256的哈希值（该值需和上传文件匹配） |
| file-content-length | M | String | 对象内容的大小(0，1073741824 ],单位：字节 |
| trace-id | O | String | Trace id，只支持[a-zA-Z0-9\_]和‘-’ |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer $\\{access\_token\\}”。access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

![](./img/e0787c7ce312.png) 

- 若您为直客，请直接使用您的开发者账号创建API客户端和获取Access Token。

## 请求示例

```
GET https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file/getUploadInfo
Content-type: application/json"
--header 'file-content-sha256: 886e62c781bd2358b285860474c90697d2416b1c82c891' \
--header 'file-content-length: 1' \
--header 'trace-id: ca395936-eff5-4ef8-8b00-b9cee047c906' \
--header 'client_id: ***' \
--header 'Authorization: Bearer ***"
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| code | M | String | 返回码  具体请参见[错误码](/docs/monetize/promotion/marketapi-returncode-0000001135626866)。 |
| msg | M | String | 返回描述 |
| headers | M | Map&lt;String,String&gt; | 返回头消息鉴权信息 |
| headers-Authorization | M | String | 返回头消息鉴权信息  NSP返回的鉴权信息,写明了返回哪些字段 |
| headers-x-amz-content-sha256 | M | String | 返回头消息鉴权信息  NSP记录的请求ID |
| headers-x-amz-client-request-id | O | String | 返回头消息鉴权信息，请求头中携带trace-id时才返回 |
| headers-x-amz-date | M | String | 返回头消息鉴权信息  请求时间 |
| connection | O | String | 返回头消息鉴权信息  链接状态 |
| headers-Host | M | String | 返回头消息鉴权信息  Http协议的Host字段 |
| headers-Content-Type | M | String | 返回头消息鉴权信息  对象内容的类型，例如：image/jpeg |
| headers-user-agent | M | String | 返回头消息鉴权信息  NSP版本信息 |
| url | M | String | 上传请求的URL |
| method | M | String | HTTP请求方法：PUT |
| objectId | M | String | 对象id |

## 响应示例

```
{
    "code": 0,
    "msg": "SUCCESS",
    "headers": {
        "Authorization": "AWS4-HMAC-SHA256 Credential=ZH2YBPYURRC9CBQVYLHZ/20240130/cn-north-4/s3/aws4_request, SignedHeaders=content-length;content-type;host;x-amz-client-request-id;x-amz-content-sha256;x-amz-date, Signature=***",
        "x-amz-content-sha256": "886e62c781bd2358b285860474c90697d2416b1c82c891",
        "x-amz-client-request-id": "ca6c9135-5c3f-4f58-aad7-8a9945618fa0",
        "x-amz-date": "20240130T080604Z",
        "connection": "close",
        "Host": "nsp-apppromote-outerug-drcn-test.obs.cn-north-4.myhuaweicloud.cn",
        "Content-Type": "text/plain",
        "user-agent": "promote_useragent"
    },
    "method": "PUT",
    "objectId": "a98d1adf-d129-4415-ad74-018788439409C5039DB641D6F53E22DC060E0FCC2BEF.txt",
    "url": "https://nsp-apppromote-outerug-drcn-test.obs.cn-north-4.myhuaweicloud.cn/nsp-apppromote-outerug-drcn-test_a98d1adf-d129-4415-ad74-018788439409C5039DB641D6F53E22DC060E0FCC2BEF.txt"
}
```

## 调用示例——获取上传信息

```
“Curl”
curl -H "Content-type: application/json" 
-H "file-content-sha256: 886e62c781bd2358b285860474c90697d2416b1c82c891" 
-H "file-content-length: 1" 
-H "trace-id: ca395936-eff5-4ef8-8b00-b9cee047c906" 
-H "client_id: ***" 
-H "Authorization: ***" 
-X GET https://connect-api.cloud.huawei.com/api/marketing-api/v2/group/file/getUploadInfo
```
