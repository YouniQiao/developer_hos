---
title: "免审更新商品"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-offerings-direct-update
format: md
---


## 功能介绍

为提升商家运营效率，平台提供免审更新商品接口。该接口允许商家在无需重新走完整审核流程的前提下，直接对商品的关键可变字段进行实时更新，变更后立即生效。

免审更新主要支持以下三类操作：

* 修改商品或 SKU 的售卖状态（如在售、售罄）。
* 调整商品或 SKU 的价格信息（如原价、售价）。
* 删除指定 SKU（需传入平台侧 skuId）。

与常规更新接口不同，免审更新直接作用于商品的线上版本数据，变更后立即生效，不经过审核流程。

![](./img/043cb306.png)

* 仅支持特定字段免审更新：免审接口仅允许修改以下字段：
  1. 商品级：saleStatus（商品销售状态）、salePrice（售价）。
  2. SKU 级：saleStatus（商品销售状态）、originalPrice（原价）、salePrice（售价）、skusToDelete（删除 SKU 列表）；其他字段（如标题、主图等）仍需通过常规更新接口提交并审核。
* 基于线上版本操作：免审更新的前提是商品存在已上线的版本（在线版本）。若商品从未上线或当前无有效线上版本，则不支持免审更新。
* 审核中版本自动同步：若商品当前有“审核中”的版本，免审更新的操作会自动同步至该审核中版本，确保后续审核通过后数据一致性。例如：免审下架某 SKU 后，即使新版商品正在审核，该 SKU 也会被标记为删除。
* 不可新增或修改非允许字段：不支持通过此接口新增 SKU 或修改非价格/状态类字段（如名称、图片等），此类需求仍需走常规更新流程。
* 删除 SKU 需使用平台 skuId：如需删除 SKU，必须在 skusToDelete 中传入平台分配的 skuId，且该 SKU 必须存在于当前线上版本中。
* 数据一致性要求：商家应确保本地系统与平台数据状态一致，避免因重复删除、无效状态变更导致异常。建议结合查询接口确认当前商品状态后再执行操作。
* 变更立即生效，不可逆：免审更新无审核缓冲期，一旦调用成功，变更立即影响所有公域展示场景。请务必在调用前进行充分校验。
* 频率限制：平台对免审接口设有调用频率限制，请勿频繁发起免审更新。

## 适用场景

* 实时调价：商家在开展活动时，可通过免审接口快速调整商品或 SKU 的价格，确保价格信息在各流量入口实时同步，提升转化效率。
* 库存状态调整：当某 SKU 暂时缺货或恢复供应时，可通过更新售卖状态为“售罄”或“在售”，实现快速上下线控制，避免用户下单失败带来的体验问题。
* SKU 精简与下线：对于已停售或不再支持的 SKU，可直接通过 skusToDelete 字段删除，系统即时生效，无需等待审核。
* 审核中版本的数据同步：若商品当前存在“审核中”的新版本，调用免审更新后，相关变更（如价格、售卖状态、删除 SKU）将自动同步至审核中版本，确保新版内容与最新运营策略一致，避免数据错位。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS PUT |
| **接口方向** | 开发者服务器-&gt;华为服务器 |
| **接口URL** | https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products/direct-update |

## 请求参数

### **Request Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8 |
| Authorization | 是 | String | 通过[接口访问凭证](https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息。 |
| client\_id | 否 | String | 服务商接入场景必传。  API客户端ID。  创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发管理资料 \&gt; 开发配置 \&gt; 开发资料设置”页面中获取，详情请参见[接口访问凭证](https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-access-credentials)。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)中的应用-APP ID。 |
| x-traceid | 否 | String(100) | 请求链路追踪ID，用于标识一次完整的调用链路，便于进行日志追踪和问题定位。 |

### **Request Body**

**DirectUpdateProduct-免审更新商品信息**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| productId | 是 | String(19) | 平台侧商品ID。 |
| saleStatus | 是 | Integer | 商家侧商品售卖状态。  1-在售  2-售罄  注意：SPU售罄时，SKU不能是在售状态。 |
| salePrice | 否 | Integer | 商品起始售价，单位：分。  最大值1000000000。 |
| skus | 否 | List\&lt;DirectUpdateProductSKU\&gt; | 商品SKU列表。 |
| skusToDelete | 否 | List\&lt;SkuIdInfo\&gt; | 要删除的skuId列表。 |

**DirectUpdateProductSKU-免审更新商品SKU信息**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| skuId | 是 | String(19) | 平台侧skuId。 |
| originalPrice | 是 | Integer | 原价，单位：分。且原价不能小于售价。  最大值1000000000。 |
| salePrice | 否 | Integer | 售价，单位：分。  最大值1000000000。 |
| saleStatus | 是 | Integer | 商家侧SKU售卖状态。  1-在售  2-售罄  注意：SPU售罄时，SKU不能是在售状态。 |

**SkuIdInfo**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| skuId | 是 | String(19) | 平台侧生成的SKU标识。 |

## 请求示例

```
PUT https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products/direct-update
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
    "productId": "3609293607964280344",
    "saleStatus": 1,
    "skus": [
        {
            "skuId": "",
            "salePrice": "",
            "originalPrice": "",
            "saleStatus": 1
        }
    ],
    "skusToDelete": [
        {
            "skuId": "1959491001646876431"
        }
    ]
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
