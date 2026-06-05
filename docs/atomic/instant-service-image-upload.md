---
title: "上传图片"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-image-upload
format: md
---


## 功能介绍

上传图片接口用于将商品的图片文件或图片URL上传至平台素材库，生成唯一的素材ID（imageMaterialId），供后续创建或更新商品时使用。该接口为商品图片字段的前置依赖，所有在商品中使用的图片必须通过此接口预先上传并获取有效的imageMaterialId。

开发者可通过本接口上传图片文件（二进制流）或提供可公开访问的图片URL。上传成功后，该imageMaterialId可在创建商品、更新商品等接口中作为图片字段的值进行引用。

通过传入 imageTypeId 参数指定图片类型，系统将根据类型执行对应的图片规格校验（如尺寸、比例、大小限制等），确保图片符合平台展示要求。

![](./img/d40678ee.png)

* 图片源二选一：请求中必须提供file（图片文件）或imageUrl（图片URL）其中之一，不可同时传入，否则将返回参数错误。
* 重复上传处理：对于内容相同的图片（基于哈希值判断），无论上传多少次，系统将返回相同的imageMaterialId，避免资源重复存储。
* 图片类型必填：imageTypeId为必传字段，用于标识图片用途及规格类型，不同类型的图片有对应的规格要求，上传时将进行校验。
* 图片可访问性：若使用imageUrl方式上传，该URL必须为可公开访问的链接，且图片资源在上传期间可被平台服务器正常下载。
* 上传时效性：建议在调用创建/更新商品接口前实时获取imageMaterialId，避免因图片资源过期或被删除导致商品发布失败。
* 规格校验：图片上传时将根据imageTypeId进行格式、大小、分辨率等校验，不符合要求的图片将被拒绝并返回具体错误信息（具体规格要求详见[图片规格说明](#section1930262816497)）。
* 素材ID有效期：生成的imageMaterialId长期有效，但若图片因违规等原因被平台下架，该ID将失效，请确保图片内容合规。

## 适用场景

* 商品创建前准备图片素材：在调用“创建商品”接口前，须先通过本接口上传图片，获取图片对应的imageMaterialId，填入商品数据中。
* 商品信息更新时更换图片：当需要修改商品图片时，需先上传新图片获取新的imageMaterialId，通过“更新商品”接口替换原图片引用。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS POST |
| **接口方向** | 开发者服务器-&gt;华为服务器 |
| **接口URL** | https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/images |

## 请求参数

**Request Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：multipart/form-data。 |
| Authorization | 是 | String | 通过[接口访问凭证](https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息。 |
| client\_id | 否 | String | 服务商接入场景必传。  API客户端ID。  创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发管理资料 \&gt; 开发配置 \&gt; 开发资料设置”页面中获取，详情请参见[接口访问凭证](https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-access-credentials)。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)中的应用&gt;APP ID。 |
| x-traceid | 否 | String(100) | 消息跟踪标识，用于关联消息。 |

**Request Form Data**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| file | 条件必选 | File | 图片文件。 |
| imageUrl | 条件必选 | String(1024) | 图片URL。 |
| imageTypeId | 必选 | Integer | 图片类型。  例如：1-商品主图。 |

## 请求示例-通过文件二进制流上传

```
POST https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/images
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
appId: 5981*****5845

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="file"; filename="image.png"
Content-Type: image/png

<二进制图片数据>
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="imageTypeId"

1
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

## 请求示例-通过图片URL上传

```
POST https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/images
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
appId: 5981*****5845

------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="imageUrl"

https://example.com/images/product.png
------WebKitFormBoundary7MA4YWxkTrZu0gW
Content-Disposition: form-data; name="imageTypeId"

1
------WebKitFormBoundary7MA4YWxkTrZu0gW--
```

## 响应参数

调用成功时，返回如下：

**Response Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-type | 否 | String | 取值为：application/json;charset=UTF-8。 |

**Response Body**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| errorCode | 是 | Integer | 错误码。 |
| errorDesc | 是 | String | 错误描述信息。仅用于辅助定位问题和提示可读性错误原因，请勿用于业务逻辑判断或流程控制。 |
| imageMaterialId | 是 | String(19) | 平台侧生成的图片素材ID。 |

## 响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8

{
    "errorCode": 0,
    "errorDesc": "",
    "imageMaterialId": "21365941231557"
}
```

## 图片规格说明

| imageTypeId | 定义 | 规格要求 | 典型场景 |
| --- | --- | --- | --- |
| 1 | 商品主图类型1 | 【尺寸规范】  宽高比例：严格保持1:1正方形比例。  像素范围：建议100px\*100px至1000px\*1000px（推荐使用600px\*600px）。  【文件要求】  格式选择：  首选：PNG格式（支持透明背景，展现效果更佳）。  可选：JPEG/JPG格式。  大小限制：单文件≤500KB。 | 普通商品 |
