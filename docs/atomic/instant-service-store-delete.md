---
title: "删除门店"
original_url: /docs/dev/atomic-dev/instant-service-store-management/instant-service-store-delete
format: md
upstream_id: dev/atomic-dev/instant-service-store-management/instant-service-store-delete
last_sync: 2026-06-07
sync_hash: f935786b
---
## 功能介绍

本接口用于商家删除指定门店。调用成功后，门店将即时从平台下线，用户端不可见。

![](./img/a9a0d175.png)

* 无需平台审核，删除操作即时生效。
* 支持对任意状态的门店执行删除。
* 删除为高风险操作，提交后不可逆，请谨慎调用！

## 适用场景

* **门店永久关闭**

  门店停止运营，需立即从平台下线。
* **商家侧同步清理**

  商家系统检测到门店关闭，调用平台删除接口，保持数据一致。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS DELETE |
| **接口方向** | 开发者服务器-&gt;华为服务器 |
| **接口URL** | https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/venues?venueId=***\&#123;venueId\&#125;*** |

## 请求参数

**Request Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8。 |
| Authorization | 是 | String | 通过[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息。 |
| client\_id | 否 | String | 服务商接入场景必传。  API客户端ID。  创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发管理资料 \&gt; 开发配置 \&gt; 开发资料设置”页面中获取，详情请参见[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)中的应用-APP ID。 |
| x-traceid | 否 | String(100) | 请求链路追踪ID，用于标识一次完整的调用链路，便于进行日志追踪和问题定位。 |

**Request Query Parameters**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| venueId | 是 | String(19) | 平台侧门店标识。 |

## 请求示例

```
DELETE https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/venues?venueId=1773242566167455872
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845
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
    "errorDesc": "Success"
}
```
