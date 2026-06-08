---
title: "更新商品"
original_url: /docs/dev/atomic-dev/instant-service-offerings-management/instant-service-offerings-update
format: md
upstream_id: dev/atomic-dev/instant-service-offerings-management/instant-service-offerings-update
last_sync: 2026-06-07
sync_hash: 067fe997
---
## 功能介绍

本接口用于商家对已在平台创建的商品进行信息更新。调用该接口仅修改商品的管理态数据（即草稿数据），不影响当前线上展示内容。更新后的管理态商品需经平台审核通过后，其数据才会覆盖线上态数据，正式对外生效。

接口请求结构与“添加商品”基本一致，关键区别在于必须传入平台侧分配的商品唯一标识productId，用于定位待更新的商品实体。

该接口为全量覆盖写操作：

* 请求中需传入商品所有字段的当前完整值（包括未变更字段），任何未传入的字段将被视为清空，其值会被置为空或系统默认值，可能导致信息丢失。
* SKU列表的处理遵循增量更新逻辑：
  + 若SKU列表中包含已存在的平台skuId，则使用新数据覆盖对应SKU的管理态信息。
  + 若SKU未携带skuId，但包含唯一mchSkuId，则视为新增SKU，系统将为其分配新的skuId。
  + 原商品中存在的SKU，若在本次请求中未上传且未加入skusToDelete字段，则保持不变。
  + 如需删除特定SKU，需显式传入skusToDelete字段，列出待删除的平台skuId。

![](./img/0357b45f.png)

* 必须传入productId：请求需携带平台分配的productId，否则无法定位目标商品，导致调用失败。
* 全量覆盖，非增量更新：接口为全字段覆盖模式，未传字段视为清空。务必确保请求中包含商品所有当前有效字段的完整数据。
* 管理态与线上态分离：调用接口仅影响管理态（草稿），不影响线上展示；必须等待平台审核通过后，变更才会生效。
* SKU 更新逻辑需特别注意：
  + 修改现有SKU：必须携带其skuId和完整信息，mchSkuId不允许变化。
  + 新增SKU：不传skuId，但 mchSkuId必须全局唯一。
  + 删除SKU：必须通过skusToDelete显式指定待删除的平台skuId，否则保留在商品中。
* 禁止频繁提交：避免短时间内重复提交相同更新请求，可能触发接口限流或影响审核优先级。
* 数据一致性要求：mchProductId和mchSkuId在创建后不可更改，用于商家系统与平台数据映射，确保一致性。
* 类目变更限制：不允许通过更新接口修改商品类目至当前元服务未绑定的类目，否则将导致接口失败。

## 适用场景

* 商品信息全量更新当商品标题、主图、副标题、价格、商品类目等一个或多个字段发生变化时，商家通过本接口提交包含全部字段的最新数据，确保管理态信息完整准确。
* SKU 动态调整。
  1. 新增规格：如新增甜度、杯型等 SKU ，通过不带 skuId 但带唯一 mchSkuId 的方式上传，系统自动分配新 skuId。
  2. 修改现有 SKU：更新某 SKU 的甜度、杯型时，需携带其 skuId 和完整信息，mchSkuId 需保持不变。
* 审核驳回后修正：若商品因信息不全或不合规被审核驳回，商家可在本地修正后，重新调用更新接口提交完整数据，推动再次进入审核流程。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS PUT |
| **接口方向** | 开发者服务器-&gt;华为服务器 |
| **接口URL** | https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products |

## 请求参数

### **Request Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8 |
| Authorization | 是 | String | 通过[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息。 |
| client\_id | 否 | String | 服务商接入场景必传。  API客户端ID。  创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发管理资料 \&gt; 开发配置 \&gt; 开发资料设置”页面中获取，详情请参见[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)中的应用-APP ID。 |
| x-traceid | 否 | String(100) | 请求链路追踪ID，用于标识一次完整的调用链路，便于进行日志追踪和问题定位。 |

### **Request Body**

**Product-商品信息**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| productId | 是 | String(19) | 平台侧商品ID。 |
| mchProductId | 是 | String(128) | 商家侧商品ID。 |
| productName | 否 | String(30) | 商品名称。  字符类型，最少不低于3个字符，最长不超过30个字符。商品名称不宜过长，影响用户视觉体验。  注：1.商品名称只允许汉字、数字、英文字母、特殊字符集；特殊字符集为：`·~～!@#$%^&()！@#￥%……&\*（）-\_——=+[]\【】、&#123;&#125; \|｜;'；’:"： ‘“”,./，。、\&lt;\&gt;?《》？\u00A0\u0020\u3000  2.商品名称不得仅为数字、字母、特殊字符集或上述三种的组合。  元服务提供多种卡片规范，建议商品字数按照对应卡片规范，避免展示信息重叠。 |
| subtitle | 否 | String(50) | 商品副标题。  最多不超过50个字符，展示在卡片中，用于增量描述商品信息。 |
| categoryCode | 是 | String(32) | 类目编码，参见[元服务标签](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-apptype-0000002271160689#section06007445916)中标签ID |
| productTypeId | 否 | Integer | 商品类型。  1-普通商品  2-票务  3-数字商品 |
| launchOptions | 是 | LaunchOptions | 商品直达链接参数。 |
| saleStatus | 是 | Integer | 商家侧商品售卖状态。  1-在售  2-售罄  注意：SPU售罄时，SKU不能是在售状态。 |
| salePrice | 否 | Integer | 商品起始售价，单位：分。  最大值1000000000 |
| attrs | 是 | JSONObject | 商品属性。  详见[商品属性说明](/docs/dev/atomic-dev/instant-service-offerings-management/instant-service-offerings-attributes)章节，根据商品所属类目填入相应属性。 |
| images | 是 | List\&lt;ProductImage\&gt; | 商品图片列表。 |
| skus | 否 | List\&lt;ProductSKU\&gt; | 商品SKU列表。 |
| skusToDelete | 否 | List\&lt;SkuIdInfo\&gt; | 要删除的skuId列表。 |

**ProductSKU-商品SKU信息**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| skuId | 是 | String(19) | 平台侧skuId。 |
| mchSkuId | 是 | String(128) | 商家侧SKUID。 |
| originalPrice | 是 | Integer | 原价，单位：分。且原价不能小于售价。  最大值1000000000。 |
| salePrice | 否 | Integer | 售价，单位：分。  最大值1000000000。 |
| skuAttrs | 否 | JSONObject | SKU属性。 |
| saleStatus | 是 | Integer | 商家侧SKU售卖状态。  1-在售  2-售罄  注意：SPU售罄时，SKU不能是在售状态。 |
| launchOptions | 否 | LaunchOptions | 商品SKU直达链接参数。元服务跳转链接参看**LaunchOptions****（元服务）**，应用跳转链接参看**LaunchOptions****（****应用）。** |

**SkuIdInfo**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| skuId | 是 | String(19) | 平台侧生成的SKU标识。 |

**ProductImage-商品图**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| imageMaterialId | 是 | String(19) | 通过图片上传接口获得的imageMaterialId。 |

## 请求示例-电影票务（30000399）

```
PUT https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
	"productId": "1873659836782098752",
	"productName": "电影名称",
	"mchProductId": "SPU0001",
	"subtitle": "电影副标题",
	"categoryCode": "30000399",
	"launchOptions": {
		"wantParam": "{\"path\":\"page1\",\"spuId\":\"123\"}"
	},
	"saleStatus": 1,
	"attrs": {
		"directors": [
			"导演1",
			"导演2"
		],
		"mainActors": [
			"主演1",
			"主演2"
		],
		"duration": 120,
		"distributor": "万达",
		"releaseDate": "2025-02-02",
		"rating": "8.85",
		"genre": [
			"科幻",
			"冒险"
		],
		"venueApplicableScope": {
			"isAllVenuesAvailable": false,
			"availableVenueIds": [
				"123123123",
				"3249"
			]
		}
	},
	"skus": [
		{
			"skuId": "1276659536481396751",
			"mchSkuId": "SKU001",
			"salePrice": 56000,
			"originalPrice": 89000,
			"launchOptions": {
				"wantParam": "{\"path\":\"page1\",\"skuId\":\"123\"}"
			},
			"saleStatus": 1,
			"skuAttrs": {
				"venueId": "123123123",
				"showStartTimes": [
					"2025-08-01T19:30:03+08:00",
					"2025-08-02T19:30:03+08:00"
				]
			}
		}
	],
	"skusToDelete": [
		{
			"skuId": "1476659836482398752"
		}
	],
	"images": [
		{
			"imageMaterialId": "183746583948575"
		}
	]
}
```

## 请求示例-微短剧（30000012）

```
PUT https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
	"productId": "1873659836782098752",
	"productName": "短剧名称",
	"mchProductId": "M0001",
	"subtitle": "短剧副标题",
	"categoryCode": "30000012",
	"launchOptions": {
		"wantParam": "{\"path\":\"page1\",\"spuId\":\"123\"}"
	},
	"saleStatus": 1,
	"attrs": {
		"directors": [
			"导演1",
			"导演2"
		],
		"mainActors": [
			"主演1",
			"主演2"
		],
		"genre": [
			"科幻",
			"冒险"
		],
		"totalEpisodes": 50,
		"releaseYear": "2025",
		"recordNumber": "xxx"
	},
	"images": [
		{
			"imageMaterialId": "183746583948575"
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
| productId | 是 | String(19) | 平台侧商品ID。 |
| skus | 否 | List\&lt;SkuIdInfo\&gt; | 本地新增的SKU ID信息。 |

**SkuIdInfo**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| skuId | 是 | String(19) | 平台侧生成的SKU标识。 |
| mchSkuId | 是 | String | 商家侧SKU标识。 |

## 响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
{
    "errorCode": 0,
    "errorDesc": "success",
    "productId": "1987906463146952686",
    "skus": [
        {
            "skuId": "1753865269525746731",
            "mchSkuId": "SKU001"
        }
    ]
}
```
