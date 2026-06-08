---
title: "查询门店"
original_url: /docs/dev/atomic-dev/instant-service-store-management/instant-service-store-query
format: md
upstream_id: dev/atomic-dev/instant-service-store-management/instant-service-store-query
last_sync: 2026-06-07
sync_hash: a83f4922
---
## 功能介绍

本接口用于商家查询在平台注册的门店信息。商家可通过平台侧门店标识（venueId）查询指定门店的当前状态及详细信息。

平台返回门店的完整信息，包括基础资料、审核状态、营业时间、地理位置等字段，便于商家进行状态跟踪、数据核对及后续业务管理。

建议商家在以下场景调用本接口：

* 获取门店审核结果（如创建、更新后确认审核是否通过）。
* 同步门店最新状态与信息至本地系统。
* 校验门店是否已生效，以支持门店直达等业务上线。

![](./img/24b241c8.png)

返回结果中包含venueState字段，用于标识当前门店的审核状态，建议以此字段用于业务逻辑判断。

## 适用场景

* **门店审核结果确认**

  商家通过“创建门店”或“更新门店”接口提交请求后，状态为“审核中”。可通过本接口获取最终审核结果，确认门店是否已生效。
* **本地系统数据同步**

  商家需定期或实时获取平台侧门店信息，保持本地系统与平台数据一致，避免因信息滞后导致业务异常。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS GET |
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
GET https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/venues?venueId=1773242566167455872
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
| venueInfo | 是 | VenueInfo | 门店信息。 |
| imageInfo | 否 | ImageInfo | 图片信息。 |

**VenueInfo**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| venueId | 是 | String(19) | 平台侧门店标识。 |
| venueName | 是 | String(100) | 门店名称。 |
| venueCode | 否 | String(64) | 商家侧门店编码。  可用于生成门店直达链接。 |
| categoryCode | 是 | String(32) | 类目编码。参见[元服务标签](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-apptype-0000002271160689#section06007445916)中标签ID。 |
| latitude | 是 | Double | 采用GCJ02坐标系，填写经度信息。  样例：31.97749。 |
| longitude | 是 | Double | 采用GCJ02坐标系，填写纬度信息。  样例：118.76421。 |
| detailedAddress | 是 | String(200) | 详细地址。  样例：软件大道109号雨花客厅E-PARK购物中心9号楼1层12号 |
| remark | 否 | String(32) | 门店备注。 |
| brand | 否 | String(32) | 品牌名。 |
| contactPhone | 否 | String(20) | 客服电话。  样例1：010-1234567  样例2：+86-13812345678 |
| businessHours | 否 | List\&lt;BusinessHour\&gt; | 营业时间。  详见数据结构[BusinessHour](#section28762120586)。 |
| venueState | 是 | String(10) | 门店状态。  详见[门店状态说明](/docs/dev/atomic-dev/instant-service-store-management/instant-service-store-process#section8277181513335)章节。 |
| mercNo | 否 | String(20) | 关联商户号。当有平台面向商家举办营销活动时，购买商品的用户可参与平台营销活动，并享受优惠。 |
| launchOptions | 否 | LaunchOptions | 门店直达链接参数。元服务跳转链接参看**LaunchOptions****（元服务）**，应用跳转链接参看**LaunchOptions****（****应用）**。 |

**BusinessHour**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| daysOfWeek | 否 | List\&lt;Integer\&gt; | 每周营业时间。  例如：工作日取值[1,2,3,4,5]，周末取值[6,7]。 |
| timeSlots | 否 | List\&lt;TimeSlot\&gt; | 营业时段。 |

**TimeSlot**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| start | 否 | String(10) | 营业开始时间。 |
| end | 否 | String(10) | 营业结束时间。 |

**ImageInfo**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| typeId | 是 | Integer | 图片类型。  例如：31-门店头图。 |
| imageMaterialId | 是 | String(19) | 平台侧生成的图片素材ID。 |
| imageUrl | 否 | String（1024） | 平台侧生成的图片URL，仅当门店审核通过后返回。 |
| mchFileUrl | 否 | String(1024) | 商家侧图片URL。 |

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
	"errorDesc": "Success",
	"venueInfo": {
		"venueName": "venueName",
		"venueCode": "C001",
		"categoryCode": "30000203",
		"latitude": 34.101101,
		"longitude": 108.202202,
		"detailedAddress": "详细地址",
		"remark": "备注",
		"brand": "品牌方",
		"contactPhone": "010-1234567",
		"businessHours": [
			{
				"daysOfWeek": [
					1,
					2,
					3,
					4,
					5
				],
				"timeSlots": [
					{
						"start": "09:00",
						"end": "12:00"
					},
					{
						"start": "13:00",
						"end": "21:00"
					}
				]
			},
			{
				"daysOfWeek": [
					6,
					7
				],
				"timeSlots": [
					{
						"start": "08:00",
						"end": "12:00"
					},
					{
						"start": "13:00",
						"end": "22:00"
					}
				]
			}
		],
		"mercNo": "商户号",
		"venueState": "ACTIVE",
		"launchOptions": {
			"wantParam": "{\"path\":\"page2\", \"venueId\":123}"
		}
	}
}
```
