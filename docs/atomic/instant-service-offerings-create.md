---
title: "创建商品"
original_url: /docs/dev/atomic-dev/instant-service-offerings-management/instant-service-offerings-create
format: md
---


## 功能介绍

“创建商品”接口用于商家首次提交商品基本信息，完成商品的上架申请。商家通过该接口上传商品名称、类目、价格、主图等核心信息，平台接收后启动内容安全与合规性审核流程。审核通过后，商品将进入可分发状态。

![](./img/774572f1.png)

* **图片合规要求**：主图需通过“创建图片”接口预先上传并获取素材ID。
* **类目要求**：商品类目必须属于该元服务在上架时所选择的标签集合内，否则接口将调用失败。
* **价格合理**：价格不得低于0，原价不能小于售价。
* **商家侧ID唯一性要求**：mchProductId（商家侧商品ID）和mchSkuId（商家侧SKU ID）必须在当前元服务下全局唯一，不允许重复创建。同一商品或SKU不可使用相同ID多次提交，否则将导致接口报错或商品创建失败。建议商家建立平台侧ID与商家侧ID关系，确保商品的准确同步。

## 适用场景

* **商品上线**：通过本接口将商品数据同步至平台。每条商品需指定全局唯一的mchProductId及mchSkuId，提交后进入平台审核流程，审核通过后商品可上线展示并参与分发。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS POST |
| **接口方向** | 开发者服务器-&gt;华为服务器 |
| **接口URL** | https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products |

## 请求参数

### Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8。 |
| Authorization | 是 | String | 通过[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息。 |
| client\_id | 否 | String | 服务商接入场景必传。  API客户端ID。  创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发管理资料 \&gt; 开发配置 \&gt; 开发资料设置”页面中获取，详情请参见[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](/docs/distribute/agc/agc-help-app-0000002235710234/agc-help-view-app-info-0000002282674569)中的应用&gt;APP ID。 |
| x-traceid | 否 | String(100) | 请求链路追踪ID，用于标识一次完整的调用链路，便于进行日志追踪和问题定位。 |

### Request Body

**Product-商品信息**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| mchProductId | 是 | String(128) | 商家侧商品ID。 |
| productName | 否 | String(30) | 商品名称。  字符类型，最少不低于3个字符，最长不超过30个字符。商品名称不宜过长，影响用户视觉体验。  注：1.商品名称只允许汉字、数字、英文字母、特殊字符集；特殊字符集为：`·~～!@#$%^&()！@#￥%……&\*（）-\_——=+[]\【】、&#123;&#125; \|｜;'；’:"： ‘“”,./，。、\&lt;\&gt;?《》？\u00A0\u0020\u3000。  2.商品名称不得仅为数字、字母、特殊字符集或上述三种的组合。  元服务提供多种卡片规范，建议商品字数按照对应卡片规范，避免展示信息重叠。 |
| subtitle | 否 | String(50) | 商品副标题。  最多不超过50个字符，展示在卡片中，用于增量描述商品信息。 |
| categoryCode | 是 | String(32) | 类目编码。参见[元服务标签](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-apptype-0000002271160689#section06007445916)中标签ID。 |
| productTypeId | 否 | Integer | 商品类型。  1-普通商品  2-票务  3-数字商品 |
| launchOptions | 是 | LaunchOptions | 商品直达链接参数。 |
| saleStatus | 是 | Integer | 商家侧商品售卖状态。  1-在售  2-售罄  注意：SPU售罄时，SKU不能是在售状态。 |
| salePrice | 否 | Integer | 商品起始售价，单位：分。  最大值1000000000。 |
| attrs | 是 | JSONObject | 商品属性。  详见[商品属性说明](/docs/dev/atomic-dev/instant-service-offerings-management/instant-service-offerings-attributes)章节，根据商品所属类目填入相应属性。 |
| images | 是 | List\&lt;ProductImage\&gt; | 商品图片列表，仅可传入一个图片。 |
| skus | 否 | List\&lt;ProductSKU\&gt; | 商品SKU列表。 |

**ProductSKU-商品SKU信息**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| mchSkuId | 是 | String(128) | 商家侧SKUID。 |
| originalPrice | 是 | Integer | 原价，单位：分。且原价不能小于售价。  最大值1000000000。 |
| salePrice | 否 | Integer | 售价，单位：分。  最大值1000000000。 |
| skuAttrs | 否 | JSONObject | SKU属性，详见[SKU属性](/docs/dev/atomic-dev/instant-service-offerings-management/instant-service-offerings-attributes#section168311654415)。 |
| saleStatus | 是 | Integer | 商家侧SKU售卖状态。  1-在售  2-售罄  注意：SPU售罄时，SKU不能是在售状态。 |
| launchOptions | 否 | LaunchOptions | 商品SKU直达链接参数。元服务跳转链接参看**LaunchOptions****（元服务）**，应用跳转链接参看**LaunchOptions****（****应用）**。 |

**ProductImage-商品图**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| imageMaterialId | 是 | String(19) | 通过图片上传接口获得的imageMaterialId。 |

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

## 请求示例-电影票务（30000399）

```
POST https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
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
			"imageMaterialId": "183746583948575"
		}
	]
}
```

## 请求示例-微短剧（30000012）

```
POST https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
    "productName": "短剧名称",
    "mchProductId": "M0001",
    "subtitle": "短剧副标题",
    "categoryCode": "30000012",
    "detailWantParam": "{\"path\":\"page1\",\"spuId\":\"123\"}",
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

## 请求示例-面包甜点饮品（30000203）-已录入门店均可配送场景

```
POST https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
    "productName": "茉莉花茶",
    "mchProductId": "SPU0001",
    "subtitle": "真茶现泡",
    "categoryCode": "30000203",
    "detailWantParam": "{\"path\":\"page1\",\"spuId\":\"123\"}",
    "saleStatus": 1,
    "attrs": {
        "sellingPointTag": [
            "鲜果饮品",
            "瘦身王者"
        ],
        "supportedDeliveryMode": [
            {
                "deliveryTypeIds": [
                    1,
                    2
                ],
                "allShops": true
            }
        ]
    },
    "skus": [
        {
            "mchSkuId": "SKU001",
            "salePrice": 56000,
            "originalPrice": 89000,
            "detailWantParam": "{\"path\":\"page1\",\"skuId\":\"123\"}",
            "saleStatus": 1
        }
    ],
    "images": [
        {
            "imageMaterialId": "183746583948575"
        }
    ]
}
```

## 请求示例-面包甜点饮品（30000203）-指定支持配送门店ID

```
POST https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/products
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
    "productName": "茉莉花茶",
    "mchProductId": "SPU0001",
    "subtitle": "真茶现泡",
    "categoryCode": "30000203",
    "detailWantParam": "{\"path\":\"page1\",\"spuId\":\"123\"}",
    "saleStatus": 1,
    "attrs": {
        "sellingPointTag": [
            "鲜果饮品",
            "瘦身王者"
        ],
        "supportedDeliveryMode": [
            {
                "deliveryTypeIds": [
                    1,
                    2
                ],
                "shopIds": [
                    "13047733319470939112",
                    "13047733319470939113"
                ],
                "allShops": false
            }
        ]
    },
    "skus": [
        {
            "mchSkuId": "SKU001",
            "salePrice": 56000,
            "originalPrice": 89000,
            "detailWantParam": "{\"path\":\"page1\",\"skuId\":\"123\"}",
            "saleStatus": 1
        }
    ],
    "images": [
        {
            "imageMaterialId": "183746583948575"
        }
    ]
}
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
| productId | 是 | String(19) | 平台侧生成的商品ID。 |
| skus | 否 | List\&lt;SkuIdInfo\&gt; | 平台侧生成的SKU信息。 |

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
