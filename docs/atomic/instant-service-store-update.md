---
title: "更新门店"
original_url: /docs/dev/atomic-dev/instant-service-store-management/instant-service-store-update
format: md
upstream_id: dev/atomic-dev/instant-service-store-management/instant-service-store-update
last_sync: 2026-06-07
sync_hash: 584931ce
---
## 功能介绍

本接口用于商家向平台提交门店信息更新申请。当门店的信息发生变更时，商家可通过本接口同步最新数据至平台。

平台接收到更新请求后，将启动审核流程。门店状态变更为 “审核中”，本次提交的内容将进入待审核流程。

* 用户可见的在线数据：在整个审核周期内（包括审核不通过），始终保留为上一次审核通过的版本，确保前端服务稳定、数据一致。
* 商家可见的管理态数据：提交更新后即保存为最新草稿内容，无论审核是否通过，商家在后台均可查看本次提交的修改记录。

审核结果处理如下：

* **审核通过**：管理态数据生效，同步更新为本次提交内容，并成为新的在线数据。
* **审核不通过**：
  + 在线数据不变：用户端仍展示上一次审核通过的信息，不受影响。
  + 管理态数据保留：商家后台仍可查看本次提交的修改内容（即“失败但保留草稿”），便于后续修正与重新提交。

![](./img/4bdbd42c.png)

* 仅允许对状态为 “审核通过” 的门店发起更新。处于“审核中”的门店不可重复提交。
* 调用“更新门店”接口时，必须传入所有字段的当前值，包括未发生变化的字段。任何未传入的字段将被视为“清空”操作，其值会被置为空或默认值。
* 所有操作必须基于平台分配的venueId进行。
* 审核不通过不会导致数据丢失或回退至旧版本，商家可基于当前管理态内容继续修改并重新提交。

## 适用场景

* 门店信息更新时，提交更新门店申请。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS PUT |
| **接口方向** | 开发者服务器-&gt;华为服务器 |
| **接口URL** | https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/venues |

## 请求参数

### **Request Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8。 |
| Authorization | 是 | String | 通过[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息。 |
| client\_id | 否 | String | 服务商接入场景必传。  API客户端ID。  创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发管理资料 \&gt; 开发配置 \&gt; 开发资料设置”页面中获取，详情请参见[接口访问凭证](/docs/dev/atomic-dev/instant-service-access-credentials/instant-service-access-credentials)。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)中的应用-APP ID。 |
| x-traceid | 否 | String(100) | 请求链路追踪ID，用于标识一次完整的调用链路，便于进行日志追踪和问题定位。 |

### **Request Body**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| venueId | 是 | String(19) | 平台侧门店标识。 |
| venueName | 是 | String(100) | 门店名称。 |
| venueCode | 否 | String(64) | 商家侧门店编码。  可用于生成门店直达链接。 |
| categoryCode | 是 | String(32) | 类目编码，参见[元服务标签](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-apptype-0000002271160689#section06007445916)中标签ID。 |
| latitude | 是 | Double | 采用GCJ02坐标系，填写经度信息。  样例：31.97749。 |
| longitude | 是 | Double | 采用GCJ02坐标系，填写纬度信息。  样例：118.76421。 |
| detailedAddress | 是 | String(200) | 详细地址。  样例：软件大道109号雨花客厅E-PARK购物中心9号楼1层12号。 |
| remark | 否 | String(32) | 门店备注。 |
| brand | 否 | String(32) | 品牌名。 |
| contactPhone | 否 | String(20) | 客服电话。  样例1：010-1234567  样例2：+86-13812345678 |
| businessHours | 否 | List\&lt;BusinessHour\&gt; | 营业时间。  详见数据结构[BusinessHour](#section121321437125815)。 |
| mercNo | 否 | String(20) | 关联商户号。 |
| launchOptions | 否 | LaunchOptions | 门店直达链接参数。元服务跳转链接参看**LaunchOptions****（元服务）**，应用跳转链接参看**LaunchOptions****（****应用）**。 |
| imageMaterialId | 否 | String(19) | 平台侧生成的图片素材ID。 |
| province | 否 | String(50) | 门店所在省份名称。 |
| city | 否 | String(50) | 门店所在城市名称。 |
| district | 否 | String(50) | 门店所在区名称。 |

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

## 请求示例

```
PUT https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/venues
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
	"venueId": "1773242566167455872",
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
	"launchOptions": {
		"wantParam": "{\"path\":\"page2\", \"venueId\":123}"
	}
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
	"errorDesc": "Success"
}
```
