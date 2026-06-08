---
title: "查询商品"
original_url: /docs/dev/atomic-dev/instant-service-offerings-management/instant-service-offerings-query
format: md
upstream_id: dev/atomic-dev/instant-service-offerings-management/instant-service-offerings-query
last_sync: 2026-06-07
sync_hash: 1d1b7392
---
## 功能介绍

该接口用于查询商品的详细信息，通过指定queryType查询类型，可选择获取线上生效的商品、管理态待生效商品（如草稿、审核中、审核拒绝状态）。

![](./img/71cc8963.png)

* queryType=1返回的数据为线上生效版本数据，可能与草稿版本存在差异，请勿用于编辑回显。
* 若需获取最新编辑内容，请使用queryType=2 查询待生效数据。

## 适用场景

* 商家后台查看编辑中的商品：便于商家查看草稿或审核中的商品进度，支持继续编辑或重新提交，queryType使用2。
* 用户端展示商品信息：仅展示已上线、可对外提供的商品数据，queryType使用1。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS GET |
| **接口方向** | 开发者服务器-&gt;华为服务器 |
| **接口URL** | https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products  ?productId=1225483444192790810&queryType=1 |

## 请求参数

**Request Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8 |
| Authorization | 是 | String | 通过[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息。 |
| client\_id | 否 | String | 服务商接入场景必传。  API客户端ID。  创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发管理资料 \&gt; 开发配置 \&gt; 开发资料设置”页面中获取，详情请参见[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)中的应用&gt;APP ID。 |
| x-traceid | 否 | String(100) | 请求链路追踪ID，用于标识一次完整的调用链路，便于进行日志追踪和问题定位。 |

**Request Query Parameters**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| productId | 是 | String(19) | 平台侧商品ID。 |
| queryType | 否 | Integer | 查询类型：  1-查询线上生效商品数据（默认）。  2-查询待生效商品数据（状态包括：草稿、审核中、审核拒绝）。  3-查询线上生效和待生效商品数据。 |

## 请求示例

```
GET https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products?productId=1225483444192790810&queryType=1
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845
```

## 响应参数

调用成功时，返回如下：

### **Response Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-type | 否 | String | 取值为：application/json;charset=UTF-8。 |

### **Response Body**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| errorCode | 是 | Integer | 错误码。 |
| errorDesc | 是 | String | 错误描述信息。仅用于辅助定位问题和提示可读性错误原因，请勿用于业务逻辑判断或流程控制。 |
| onlineProduct | 可选 | Product | 线上生效商品数据。 |
| pendingProduct | 可选 | Product | 待生效商品数据。 |

**Product-商品信息**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| productId | 是 | String(19) | 平台侧商品ID。 |
| mchProductId | 是 | String(128) | 商家侧商品ID。 |
| productName | 否 | String(30) | 商品名称。  字符类型，最少不低于3个字符，最长不超过30个字符。商品名称不易过长，影响用户视觉体验。  注：1.商品名称只允许汉字、数字、英文字母、特殊字符集；特殊字符集为：`·~～!@#$%^&()！@#￥%……&\*（）-\_——=+[]\【】、&#123;&#125; \|｜;'；’:"： ‘“”,./，。、\&lt;\&gt;?《》？\u00A0\u0020\u3000  2.商品名称不得仅为数字、字母、特殊字符集或上述三种的组合。  元服务提供多种卡片规范，建议商品字数按照对应卡片规范，避免展示信息重叠。 |
| subtitle | 否 | String(50) | 商品副标题。  最多不超过50个字符，展示在卡片中，用于增量描述商品信息。 |
| categoryCode | 是 | String(32) | 类目编码。参见[元服务标签](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-apptype-0000002271160689#section06007445916)中标签ID。 |
| productTypeId | 否 | Integer | 商品类型。  1-普通商品  2-票务  3-数字商品 |
| launchOptions | 是 | LaunchOptions | 商品直达链接参数。元服务跳转链接参看**LaunchOptions****（元服务）**，应用跳转链接参看**LaunchOptions****（****应用）**。 |
| saleStatus | 是 | Integer | 商家侧商品售卖状态。  1-在售  2-售罄  注意：商品售罄时，SKU不能是在售状态。 |
| productState | 是 | String(10) | 商品状态。  详见[商品状态说明](/docs/dev/atomic-dev/instant-service-offerings-management/instant-service-offerings-process#section6422175104311)。 |
| salePrice | 否 | Integer | 商品起始售价，单位：分。  最大值1000000000。 |
| attrs | 是 | JSONObject | 商品属性。  详见[商品属性说明](/docs/dev/atomic-dev/instant-service-offerings-management/instant-service-offerings-attributes)章节，根据商品所属类目填入相应属性。 |
| images | 是 | List\&lt;ProductImage\&gt; | 商品图片列表。 |
| skus | 否 | List\&lt;ProductSKU\&gt; | 商品SKU列表。 |

**ProductSKU-商品SKU信息**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| skuId | 是 | String(19) | 平台侧SKUID。 |
| mchSkuId | 是 | String(128) | 商家侧SKUID。 |
| originalPrice | 是 | Integer | 原价，单位：分。且原价不能小于售价。  最大值1000000000。 |
| salePrice | 否 | Integer | 售价，单位：分。  最大值1000000000。 |
| skuAttrs | 否 | JSONObject | SKU属性。 |
| saleStatus | 是 | Integer | 商家侧SKU售卖状态。  1-在售  2-售罄  注意：SPU售罄时，SKU不能是在售状态 |
| launchOptions | 否 | LaunchOptions | 商品SKU直达链接参数。元服务跳转链接参看**LaunchOptions****（元服务）**，应用跳转链接参看**LaunchOptions****（****应用）**。 |

**ProductImage-商品图**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| mchFileUrl | 条件必选 | String(512) | 商家侧图片URL。 |
| imageMaterialId | 条件必选 | String(20) | 通过图片上传接口获得的imageMaterialId。 |
| imageUrl | 可选 | String(512) | 图片URL。仅当商品审核通过后返回。 |
| typeId | 必选 | Integer | 图片类型。  1-商品主图 |

**LaunchOptions****（元服务）**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| wantParam | 必填 | String(1024) | 门店直达链接参数，实际打开元服务对应门店页面的参数。会通过  [openAtomicService](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#openatomicservice12) API跳转绑定的元服务。  链接格式为json字符串，内容为[want.parameters](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want)参数。  例如：\&#123;"path":"page2", "venueId":123\&#125;。 |

**LaunchOptions****（应用）**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| appLinking | 否 | String(1024) | 门店直达appLinking跳转链接  [通过App Linking应用链接拉起指定应用](/docs/dev/app-dev/application-services/app-linking-kit-guide/app-linking-startupapp) |
| deepLink | 否 | String(1024) | 门店直达deepLink跳转链接 |
| minVersionCode | 否 | Integer | 链接可支持的应用最小版本号  如果您配置的直达链接需要依赖已正式发布的应用版本，请提供对应应用的最小版本号。  版本号可在[APP与元服务](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myApp)中选择对应应用，进入软件包管理，查看依赖应用版本号。 |

## 响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8

{
	"errorCode": 0,
	"errorDesc": "success",
	"onlineProduct": {
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
		"images": [
			{
				"mchFileUrl": "https://example.com/images/product.png",
				"typeId": 1,
				"imageMaterialId": "https://xxx.com/xxx/images/product.png"
			}
		]
	},
	"pendingProduct": {
		"productName": "电影名称2",
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
		"images": [
			{
				"mchFileUrl": "https://example.com/images/product.png",
				"typeId": 1,
				"imageMaterialId": "https://xxx.com/xxx/images/product.png"
			}
		]
	}
}
```
