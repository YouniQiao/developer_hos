---
title: "查询门店列表"
original_url: /docs/dev/atomic-dev/instant-service-store-management/instant-service-store-list
format: md
upstream_id: dev/atomic-dev/instant-service-store-management/instant-service-store-list
last_sync: 2026-06-07
sync_hash: 6c85f3ca
---
## 功能介绍

本接口用于商家系统定期从平台侧拉取其名下所有门店的完整列表，支持分页查询。

* 分页控制：通过请求参数pageSize指定每页返回的门店数量（最大 50）。
* 翻页机制：首次请求无需传参，后续页通过上一次响应中的nextPageToken作为请求参数传入，实现连续翻页。
* 结束判断：响应中包含布尔字段hasMore：
  + 当hasMore = true时，表示还有更多数据，请继续使用返回的nextPageToken调用接口获取下一页。
  + 当hasMore = false时，表示已读取全部数据，对账可结束。
* 上下文保持：nextPageToken是一个加密的上下文标记，包含本次查询的快照状态和位置信息，有效期建议在5分钟内连续使用，超时需重新发起首次查询。

**使用流程示例：**

1. 首次请求：不带nextPageToken，平台返回第一页数据+ nextPageToken + hasMore。
2. 第二次请求：携带上一步返回的nextPageToken，平台返回第二页数据 + 新的 nextPageToken + hasMore。
3. 依此类推，直到某次响应中hasMore=false，表示数据已全部拉取完成。

![](./img/f9c2169d.png)

* 本接口专为数据同步与对账设计，是商家保障本地系统与平台数据一致性的核心工具。不适用于实时展示类场景。
* 请确保在一次完整的对账任务中不要中断翻页流程，并避免在对账期间调用“新增门店”“删除门店”等写接口，以防止数据视图不一致或翻页异常。

## 适用场景

商家每日定时（如凌晨2点）调用接口拉取平台全量门店列表，与商家侧数据进行比对，识别：

* 平台存在但商家缺失的门店（如删除失败残留的门店数据）。
* 商家存在但平台不存在的门店（如创建失败的门店数据）。
* 名称、地址等字段不一致的数据。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS POST |
| **接口方向** | 开发者服务器-&gt;华为服务器 |
| **接口URL** | https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/venues/list |

## 请求参数

**Request Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8。 |
| Authorization | 是 | String | 通过[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息。 |
| client\_id | 否 | String | 服务商接入场景必传。  API客户端ID。  创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发管理资料 \&gt; 开发配置 \&gt; 开发资料设置”页面中获取，详情请参见[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)中的应用-APP ID。 |
| x-traceid | 否 | String(100) | 请求链路追踪ID，用于标识一次完整的调用链路，便于进行日志追踪和问题定位。 |

**Request Body**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| pageSize | 是 | Integer | 每次查询数量。  最大值50。 |
| nextPageToken | 否 | String | 由上次获取列表请求返回，记录翻页的上下文。传入时会从上次返回的结果往后翻一页，不传默认获取第一页数据。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/venues/list
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
    "pageSize": 10,
    "nextPageToken": "91T88893ES2531A0122K"
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
| venueIds | 是 | List\&lt;String\&gt; | 门店ID列表。 |
| nextPageToken | 否 | 下一页标识 | 用于查询下一页的参数。  当无下一页数据时，不返回。 |
| hasMore | 是 | Boolean | 是否有下一页。 |

## 响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8

{
    "errorCode": 0,
    "errorDesc": "success",
    "venueIds": [
        "181583479001",
        "181583479002",
        "181583479003",
        "181583479004",
        "181583479005",
        "181583479006",
        "181583479007",
        "181583479008",
        "181583479009",
        "181583479010"
    ],
    "nextPageToken": "JA6QJ6771167X5JZA8DY",
    "hasMore": true
}
```
