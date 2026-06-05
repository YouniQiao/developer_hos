---
title: "更新隐私政策协议"
original_url: https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-update-privacy-agreement-0000002328805169
format: md
---


#### 功能介绍

此接口用于更新HarmonyOS应用/元服务的隐私政策协议。接口调用者的角色：账号持有者、管理员、APP管理员、运营。

![](../img/agc-help-publish-api-update-privacy-agreement-0000002328805169_0.png)

* 若隐私政策协议被在架版本关联，编辑后需要提交华为运营审核，待协议审核通过后，更新的内容方可生效。
* 若隐私政策协议被状态为“审核中”的应用关联，将不支持编辑。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v2/agreement |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-update-privacy-agreement-0000002328805169_1.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](https://developer.huawei.com/consumer/cn/doc/app/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |
| appId | M | String(32) | 应用ID，获取方法参考[查看应用信息](https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569)。 |

#### [h2]Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| id | M | String(32) | 隐私政策协议ID。 |
| defaultLang | O | String(20) | 隐私政策协议默认语言。  取值范围：   * zh：简体中文 * en：英语 * ug：维吾尔语 * bo：藏语 * zh-Hant-HK：繁体中文（中国香港特别行政区） * zh-Hant-TW：繁体中文（中国台湾） |
| agreementInfos | O | `List&lt;[AgreementInfo](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-agreementinfo-privacy-0000002294845630)>` | 隐私政策协议列表。  数组长度不超过100。 |

#### 请求示例

#### [h2]HarmonyOS应用

```
PUT /api/publish/v2/agreement HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 414*******68
Content-Type: application/json;
Authorization: Bearer *****
appId: 1******57
{
	"id": "14******92",
        "defaultLang": "zh",
	"agreementInfos": [{
		"lang": "zh",
		"baseInfo": {
			"name": "应用的隐私政策协议示例",
			"appName": "应用名称",
			"companyName": "公司名称",
			"briefDesc": "产品说明",
			"effectiveTime": 1719216501000
		},
		"personalInfo": {
			"fullServiceMode": {
				"selectPath": "我的-设置",
				"personalCollectType": "1",
				"basicServiceType": "设置",
				"extraServiceType": "支付"
			}
		},
		"extInfo": {
			"contactInfo": {
				"phoneNum": ["159****7256"]
			},
			"storageInfo": {
				"storagePeriod": "-1",
				"country": "中国境内",
				"isCrossBorder": false
			},
			"childPrivacyUrl": "",
			"versionChangeDescs": [],
			"abstracts": "",
			"managePersonalInfo": {
				"infoAccess": {},
				"infoModify": {},
				"infoDelete": {},
				"infoCancel": {},
				"serviceStop": {},
				"selectedKeys": []
			},
			"customInfo": {
				"customInfos": []
			},
			"extFieldCustomInfo": {
				"childPrivacyTitle": "",
				"childPrivacyCustomInfoDesc": ""
			}
		},
		"thirdSdkInfo": {
			"sdkInfos": []
		},
		"thirdSharedInfos": []
	}]
}
```

#### [h2]元服务

```
PUT /api/publish/v2/agreement HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 414*******68
Content-Type: application/json;
Authorization: Bearer *****
appId: 1******57
{
	"id": "16******96",
	"defaultLang": "zh",
	"agreementInfos": [{
		"lang": "zh",
		"baseInfo": {
			"name": "元服务的隐私政策协议示例",
			"appName": "应用名称",
			"companyName": "公司名称",
			"briefDesc": "产品说明",
			"effectiveTime": 1743392449000
		},
		"personalInfo": {
			"requiredInfo": {
				"sceneItems": [{
					"dataItems": [{
						"itemId": "D0***07",
						"itemDesc": "地址",
						"sensitiveData": 0
					}],
					"sceneId": "1001",
					"sceneReason": "实现应用功能",
					"collectModeId": "1201",
					"collectMode": "在后台运行时",
					"legalBasisId": "1101",
					"legalBasis": "在获取您的同意后",
					"remark": "修改"
				}]
			},
			"adsInfo": {
				"sceneItems": [{
					"dataItems": [{
						"itemId": "D001007",
						"itemDesc": "地址",
						"sensitiveData": 0
					}]
				}],
				"pushContent": "活动和中奖",
				"closeSetting": "设置-广告营销"
			}
		},
		"extInfo": {
			"contactInfo": {
				"phoneNum": ["15850587336"]
			},
			"storageInfo": {
				"storagePeriod": "-1",
				"country": "中国境内",
				"isCrossBorder": false
			},
			"childPrivacyUrl": "",
			"versionChangeDescs": [],
			"abstracts": "",
			"managePersonalInfo": {
				"infoAccess": {},
				"infoModify": {},
				"infoDelete": {},
				"infoCancel": {},
				"serviceStop": {}
			},
			"customInfo": {
				"customInfos": []
			},
			"extFieldCustomInfo": {
				"childPrivacyTitle": "",
				"childPrivacyCustomInfoDesc": ""
			}
		},
		"thirdSdkInfo": {
			"sdkInfos": []
		},
		"thirdSharedInfos": []
	}]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](https://developer.huawei.com/consumer/cn/doc/app/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |
| id | O | String | 隐私政策协议ID。 |

#### 响应示例

```
{
    "ret": {
        "code": 0,
        "msg": "success."
    },
    "id": "16******96"
}
```
