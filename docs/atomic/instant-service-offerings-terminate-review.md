---
title: "撤回商品审核"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-offerings-terminate-review
---

## 功能介绍

“撤回商品审核”接口用于商家在创建或更新商品后、审核流程尚未完成前，主动终止当前审核流程的操作。调用该接口后，平台将取消对该版本商品的审核处理，商品的管理态状态回退至“草稿”或上一个状态，便于商家继续编辑修改。

该操作仅影响管理后台中的待审核版本（即“管理态”数据），不会对已上线的线上版本（即“运行态”数据）产生任何影响。

![](./img/4039a1ff.png)

* 仅限“审核中”状态可操作：必须在商品提交审核后、平台尚未返回“通过”或“驳回”结果时调用。一旦审核完成（无论通过与否），该接口不可用。
* 仅影响管理态，不影响线上运行态。
* 保留待审核版本数据：被撤回的审核版本内容完整保留在管理后台，支持继续编辑更新。
* 支持重新提交审核。

## 适用场景

* 商家误提交了错误商品信息，但原线上版本仍在正常销售。此时可撤回审核，避免错误版本上线。
* 在A版本审核过程中，需要更换为B版本。可先撤回A版本审核，直接提交B版本。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS POST |
| **接口方向** | 开发者服务器-&gt;华为服务器 |
| **接口URL** | https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products/review/revoke |

## 请求参数

**Request Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8。 |
| Authorization | 是 | String | 通过[接口访问凭证](https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息。 |
| client\_id | 否 | String | 服务商接入场景必传。  API客户端ID。  创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发管理资料 \&gt; 开发配置 \&gt; 开发资料设置”页面中获取，详情请参见[接口访问凭证](https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-access-credentials)。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)中的应用-APP ID。 |
| x-traceid | 否 | String(100) | 请求链路追踪ID，用于标识一次完整的调用链路，便于进行日志追踪和问题定位。 |

**Request Body**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| productId | 是 | String(19) | 平台侧商品ID。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products/review/revoke
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
    "productId": "3609293607964280344"
}
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

## 响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
{
    "errorCode": 0,
    "errorDesc": "success"
}
```
