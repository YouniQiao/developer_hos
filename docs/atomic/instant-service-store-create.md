---
title: "创建门店"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-store-create
format: md
---


## 功能介绍

本接口用于商家向平台提交门店创建申请。商家通过传入门店信息，请求在平台侧注册新门店。平台接收到请求后，将进行数据校验并启动审核流程。

* 系统将为每个成功提交的门店生成唯一的 平台侧门店标识（venueId），请商家保存venueId与自有门店的关联，便于后续管理。
* 同一元服务或应用下，商家侧门店编码（venueCode）全局唯一，仅允许创建一次。重复提交将被拒绝。
* 门店创建后状态为“审核中”，需等待平台审核通过后，方可用于门店直达等业务场景。
* 审核结果可通过“查询门店”接口获取。

![](./img/1604646f.png)

* 所有后续操作（如更新、删除、查询）均需使用返回的venueId。
* 商家侧门店编码（venueCode）请填写为门店跳转链接中对应的门店参数值，确保二者保持一致。

## 适用场景

* 新门店上线。

  商家在商家系统中新增一家实体门店，需通过本接口将门店信息同步至平台。
* 系统对接初始化。

  商家首次接入平台系统，需批量导入已有门店数据。通过本接口逐条提交门店信息，并建立 venueCode 与平台 venueId 的映射关系。
* 服务商、商家（企业开发者）均可调用此接口。

## 接口原型

|  |  |
| --- | --- |
| **承载协议** | HTTPS POST |
| **接口方向** | 开发者服务器-&gt;华为服务器 |
| **接口URL** | https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/venues |

## 请求参数

### **Request Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 取值为：application/json;charset=UTF-8。 |
| Authorization | 是 | String | 通过[接口访问凭证](https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-access-credentials)获取的鉴权令牌。  Bearer后面拼接空格，再拼接获取的鉴权信息。 |
| client\_id | 否 | String | 服务商接入场景必传。  API客户端ID。  创建第三方平台成功后系统自动分配的客户端ID，可在第三方管理平台“开发管理资料 \&gt; 开发配置 \&gt; 开发资料设置”页面中获取，详情请参见[接口访问凭证](https://developer.huawei.com/consumer/cn/doc/atomic-guides/instant-service-access-credentials)。 |
| appId | 是 | String(64) | 在创建应用后，由华为开发者联盟为应用分配的唯一标识。参数取值详见[查看应用基本信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)中的应用&gt;APP ID。 |
| x-traceid | 否 | String(100) | 请求链路追踪ID，用于标识一次完整的调用链路，便于进行日志追踪和问题定位。 |

### **Request Body**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| venueName | 是 | String(100) | 门店名称。 |
| venueCode | 否 | String(64) | 商家侧唯一门店编码。  可用于生成门店直达链接（后续支持根据该字段动态渲染跳转链接）。 |
| categoryCode | 是 | String(32) | 类目编码。参见[元服务标签](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-appendix-apptype-0000002271160689#section06007445916)中标签ID。 |
| latitude | 是 | Double | 采用GCJ02坐标系，填写经度信息。  样例：31.97749。 |
| longitude | 是 | Double | 采用GCJ02坐标系，填写纬度信息。  样例：118.76421 |
| detailedAddress | 是 | String(200) | 详细地址。  样例：软件大道109号雨花客厅E-PARK购物中心9号楼1层12号。 |
| remark | 否 | String(32) | 门店备注。 |
| brand | 否 | String(32) | 品牌名。 |
| contactPhone | 否 | String(20) | 客服电话。  样例1：010-1234567  样例2：+86-13812345678 |
| businessHours | 否 | List\&lt;BusinessHour\&gt; | 营业时间。  详见数据结构[BusinessHour](#section1896225785910)。 |
| mercNo | 否 | String(20) | 关联商户号。 |
| launchOptions | 否 | LaunchOptions | 门店直达链接参数。元服务跳转链接参看**LaunchOptions****（元服务）**，应用跳转链接参看**LaunchOptions****（****应用）**。 |
| imageMaterialId | 否 | String(19) | 平台侧生成的图片素材ID。 |
| province | 否 | String(50) | 门店所在省份名称。 |
| city | 否 | String(50) | 门店所在城市名称。 |
| district | 否 | String(50) | 门店所在区名称。 |

**BusinessHou****r**

| **参数** | 是否必选 | **参数类型** | 描述 |
| --- | --- | --- | --- |
| daysOfWeek | 否 | List\&lt;Integer\&gt; | 每周营业时间。  例如：工作日取值[1,2,3,4,5]，周末取值[6,7]。 |
| timeSlots | 否 | List\&lt;[TimeSlot](#section51011989016)\&gt; | 营业时段。  样例：24小时营业时填入 \&#123;"start":"00:00","end":"23:59"\&#125;。 |

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
| appLinking | 否 | String(1024) | 门店直达appLinking跳转链接  [通过App Linking应用链接拉起指定应用](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-linking-startupapp) |
| deepLink | 否 | String(1024) | 门店直达deepLink跳转链接 |
| minVersionCode | 否 | Integer | 链接可支持的应用最小版本号  如果您配置的直达链接需要依赖已正式发布的应用版本，请提供对应应用的最小版本号。  版本号可在[APP与元服务](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html#/myApp)中选择对应应用，进入软件包管理，查看依赖应用版本号。 |

## 请求示例

```
POST https://connect-api.cloud.huawei.com/api/ability-platform-connect/hag-developer/v1/venues
Authorization: Bearer eyJr*****OiIx---****.eyJh*****iJodHR--***.QRod*****4Gp---****
Content-Type: application/json;charset=UTF-8
appId: 5981*****5845

{
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

### **Response Header**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-type | 否 | String | 取值为：application/json;charset=UTF-8。 |

### **Response Body**

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| errorCode | 是 | Integer | 错误码。 |
| errorDesc | 是 | String | 错误描述信息。仅用于辅助定位问题和提示可读性错误原因，请勿用于业务逻辑判断或流程控制。 |
| venueId | 是 | String(19) | 创建生成的平台侧门店标识。 |

## 响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json;charset=UTF-8
{
    "errorCode": 0,
    "errorDesc": "Success",
    "venueId": "1773242566167455872"
}
```
