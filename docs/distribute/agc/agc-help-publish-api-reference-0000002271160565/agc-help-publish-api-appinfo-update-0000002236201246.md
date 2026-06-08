---
title: "更新应用基本信息"
original_url: /docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-appinfo-update-0000002236201246
format: md
upstream_id: distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-appinfo-update-0000002236201246
last_sync: 2026-06-07
sync_hash: 34cc54e4
---
#### 功能介绍

此接口用于更新指定HarmonyOS应用/元服务的应用详情。

接口调用者的角色：账号持有者、管理员、APP管理员、运营。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS PUT |
| 接口方向 | 开发者服务器 -> 华为服务器 |
| 接口URL | https://connect-api.cloud.huawei.com/api/publish/v3/app-info |
| 数据格式 | 请求：Content-Type: application/json  响应：Content-Type: application/json |

#### 请求参数

#### [h2]Header

![](../img/agc-help-publish-api-appinfo-update-0000002236201246_0.png)

本接口支持使用Service Account方式和API客户端方式，二者区别请参见[获取服务端授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661)。

**Service Account****方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{JWT}`*”。JWT为[通过Service Account方式获取授权](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section104621343151212)中获取的鉴权令牌。 |

**API客户端方式：**

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | String | 客户端ID，获取方法参考[创建API客户端](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section103mcpsimp)。 |
| Authorization | M | String | 认证信息，格式为“Authorization: Bearer *\\$`{access\_token}`*”。access\_token为[获取Token](/docs/distribute/agc/agc-help-connect-api-0000002236015554/agc-help-connect-api-obtain-server-auth-0000002271134661#section09831133141712)中获取的access\_token。 |

#### [h2]Query

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| appId | M | String(32) | 需要更新的应用ID。 |
| releaseType | O | Integer(32) | 应用发布方式。  取值范围：   * 1：全网   默认值：1 |
| releasePhase | O | Integer(32) | 分阶段发布标识。  取值范围：   * 0：全网 * 3：分阶段   默认值：0 |

#### [h2]Body

请求Body中使用JSON格式携带更新的应用信息，参数如下表所示。

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| defaultLang | O | String(16) | 应用的默认语言。  说明：  取值参见[语言类型](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-langtype-0000002236041558)。 |
| harmonyChildType | O | Integer(4) | HarmonyOS应用/元服务的二级分类。  固定ID。  说明：  取值参见[应用游戏分类](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-apptype-0000002271160689)。 |
| kindMainTag | O | Integer(4) | HarmonyOS应用/元服务主标签。  固定ID。  说明：  取值参见[应用游戏分类](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-apptype-0000002271160689)的“标签”列。 |
| kindSubTags | O | `List&lt;Integer>` | HarmonyOS应用/元服务附属标签。  固定ID。最多可选4个附属标签。  说明：  取值参见[应用游戏分类](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-apptype-0000002271160689)的“标签”列。 |
| privacyPolicy | O | String(255) | 隐私政策网址。 |
| appNetType | O | Integer | 应用联网类型。  取值范围：   * 1：单机 * 2：网游   默认值：1 |
| publishCountry | M | String(2048) | 应用发布国家的[国家码](/docs/distribute/agc/agc-help-connect-api-appendix-0000002271000741/agc-help-connect-api-appendix-countrycode-0000002236201362)。  多个国家以英文逗号分隔，例如：“CN,DE,MC”。  如果取值为“OTHER”，则表示当App Gallery支持的国家或地区列表中新增某个国家或地区时，应用将自动分发到新增的国家和地区。  注意：  取值不能只包含OTHER。  如果国家码有设置非CN的地区，将存在个人信息出境的情况，具体请参考[个人信息出境授权声明](https://developer.huawei.com/consumer/cn/doc/20250303)。 |
| appTariffType | O | String(16) | 应用内付费道具类型。  取值范围：   * 1：激活收费 * 2：道具收费 * 3：关卡收费 * 4：购买虚拟币 * 5：部分章节收费（图书阅读类） * 6：其他的 * 7：课程收费 * 8：会员收费   支持设置多个，使用英文逗号分隔，例如“1,2,3”。 |
| publicationNumber | O | String(50) | 版号信息。  此参数只支持游戏类应用。 |
| developerWebsite | O | String(255) | 开发者官网。 |
| customInfo | O | [CustInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-custinfo-0000002504067925) | 客服信息。 |
| deviceTypes | O | `List&lt;[DeviceTypeInfo](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-devicetypeinfo-0000002236201270)>` | 设备类型信息。 |
| privacyRightsUrl | O | String(256) | 隐私权利网址。  即关于您的用户实施其权利的网站地址，如用户删除、修改、导出其个人数据的入口。 |
| registeredDclType | O | Integer(32) | APP类型信息。  取值范围：   * -1：清空APP类型信息 * 0：APP服务器在中国大陆 * 1：APP服务器不在中国大陆 * 2：APP为单机APP |
| registeredIdType | O | Integer(32) | 主办单位类型。  取值范围：   * -1：清空数据（会联动清空**registeredIdNumber**的内容） * 1：企业（社会信用代码） * 2：个人（身份证号码） * 3：机构（机构代码） |
| registeredIdNumber | O | String(64) | 主办单位证件号。  取值范围：   * **registeredIdType**为1时，对应统一社会信用代码 * **registeredIdType**为2时，对应身份证号码 * **registeredIdType**为3时，对应组织机构代码 |
| registeredEntity | O | Integer(32) | 主办单位。  取值范围：   * 1：与开发者账号主体一致 * 2：与开发者账号主体不一致   说明：  1. 当registeredDclType值为0（APP服务器在中国大陆）时，该字段必填。若不填写或填写错误，会导致审核不通过。 2. 若在版本提交时，该字段值选择“一致”，则主办单位名称和证件号，将直接复用开发者联盟注册账号信息。 3. 若您提交的主办单位信息与联盟账号信息不一致，该字段值却选择了“一致”，则系统将自动判定为“不一致”，将会影响审核结果。 |
| registeredEntityName | O | String(1024) | 主办单位名称。  说明：  当registeredDclType值为0（APP服务器在中国大陆）时，该字段必填。若不填写或填写错误，会导致审核不通过。 |
| privacyAgreementId | O | String(32) | 隐私协议ID。 |
| userAgreementUrl | O | String(512) | 用户协议URL。 |
| userAgreementIds | O | `List&lt;String(32)>` | 用户协议ID列表。  当**userAgreementUrl**和**userAgreementIds**同时传值时，以**userAgreementIds**值为准。  数组长度不超过5。 |
| encrypted | M | Integer(32) | 包是否加密。  取值范围：   * 0：否，表示不加密。 * 1：是，表示加密。   默认值：1 |
| isAiGenerate | O | Integer(32) | 是否涉及AI生成合成服务。  取值范围：   * 0：不涉及。 * 1：涉及。 |
| aiTypes | O | `List&lt;Integer(32)>` | 涉及的AI生成合成服务类型。  取值范围：   * -1：其他 * 1：文本 * 2：图片 * 3：音频 * 4：视频 * 5：虚拟场景   说明：  isAiGenerate取值为1（涉及）时，此参数必填。 |
| testUserName | O | String(128) | 应用审核信息的测试账号用户名。  说明：  如果存在需要登录后才可使用的功能，需要提供测试账号用户名。 |
| testUserPassword | O | String(128) | 应用审核信息的测试账号密码。  说明：  如果存在需要登录后才可使用的功能，需要提供测试账号密码。 |
| appRemark | O | String(300) | 应用审核信息的备注。  提供有助于审核人员更准确、高效测试您应用的额外信息，比如在审核时需要的特别设置等。 |
| selfTestVideos | O | String(2000) | 应用审核信息的自测文件。  格式为JSON字符串，示例：\\{"objectId1":"文件名1","objectId2":"文件名2"...\}  说明：  **objectId**的获取流程：先调用[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口，然后调用[上传文件](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-file-0000002271160621)接口上传文件，最后得到[获取上传文件地址](/docs/distribute/agc/agc-help-upload-api-reference-0000002236041486/agc-help-upload-api-upload-url-0000002236201294)接口返回的**objectId**。  最多可上传5个自测视频，总大小不超过500MB。  注意：  * 此字段只支持元服务。 * 元服务需要与设备联动时，此参数必填。 |
| appReviewPhoneInfo | O | [AppReviewContact](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-appreviewcontact-0000002505438989) | 应用负责人的手机号信息。用于沟通审核问题。 |
| appReviewEmailInfo | O | [AppReviewContact](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-appreviewcontact-0000002505438989) | 应用负责人的邮箱账号信息。用于接收上架审核结果，应用整改或下架通知。 |
| appReviewName | O | String(256) | 应用负责人的姓名。 |
| versionVocs | O | `List&lt;[VersionVoc](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-versionvoc-0000002495156924)>` | 应用版本已解决问题。  数组长度不超过1000。  说明：  调用[查询应用未处理的问题工单](/docs/distribute/agc/agc-help-publish-api-reference-0000002271160565/agc-help-publish-api-post-app-version-voc-0000002495233986)接口可以查询用户反馈的应用问题。如果在应用版本更新时某些问题已经解决，可以将这些问题提交审核，工单平台验证通过后会关闭工单。 |

#### 请求示例

```
PUT /api/publish/v3/app-info?appId=10*****57 HTTP/1.1
Host: connect-api.cloud.huawei.com
client_id: 41*****7168
Authorization: Bearer ******
{
  "defaultLang": "zh-CN",
  "harmonyChildType": 10000014,
  "kindMainTag": 30000017,
  "kindSubTags": [
    30000017,
    30000018
  ],
  "privacyPolicy": "https://*****.link",
  "appNetType": 0,
  "publishCountry": "CN",
  "appTariffType": "6",
  "publicationNumber": "*****",
  "developerWebsite": "https://****.****test.cn/consumer/cn/service/josp/***/index.html",
  "customInfo": {
    "phone": "0086-137xxxxxxxx",
    "email": "137*****@***.com",
    "qqNum": "137*****",
    "internalPath": "华为应用市场 > 我的 > 帮助与客服"
  },
  "deviceTypes": [
    {
      "deviceType": 4,
      "appAdapters": ""
    }
  ],
  "privacyRightsUrl": "",
  "registeredIdType": 2,
  "registeredIdNumber": "1234222****1544487",
  "privacyAgreementId": "string",
  "userAgreementUrl": "https://docs.p***e.com/baike/328370",
  "userAgreementIds": [
    "12***************89",
    "23***************78",
    "34***************67"
  ],
  "encrypted": 0,
  "isAiGenerate": 1,
  "aiTypes": [
    1
  ],
  "testUserName": "*****",
  "testUserPassword": "*****",
  "appRemark": "*****",
  "selfTestVideos": "{"CN/2025102002/********.mp4":"文件名1"}",
  "appReviewPhoneInfo": {
    "account": "137********"
  },
  "appReviewEmailInfo": {
    "account": "137*****@***.com"
  },
  "appReviewName": "*****",
  "versionVocReq": [
    {
      "versionId": "10*****528",
      "packageId": "1573*******5952",
      "vocId": "18******24"
    }
  ]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| ret | M | [ConnectRet](/docs/distribute/agc/agc-help-publish-api-data-0000002236201266/agc-help-publish-api-data-connectret-0000002271160589) | 包含返回码及描述信息的结果。 |

#### 响应示例

```
{
    "ret": {
        "code": 0,
        "msg": "success"
    }
}
```

#### 调用示例

Java代码示例如下：

```
public static void updateAppInfo(String domain, String clientId, String token, String appId) {
	HttpPut put = new HttpPut(domain + "/publish/v3/app-info?appId=" + appId);
	put.setHeader("Authorization", "Bearer " + token);
	put.setHeader("client_id", clientId);
	JSONObject keyString = new JSONObject();
	//Request Body
	keyString.put("defaultLang", "zh-CN");
	keyString.put("harmonyChildType", 10000000);
	//...

	StringEntity entity = new StringEntity(keyString.toString(), Charset.forName("UTF-8"));
	entity.setContentEncoding("UTF-8");
	entity.setContentType("application/json");
	put.setEntity(entity);

	try {
		CloseableHttpClient httpClient = HttpClients.createDefault();
		CloseableHttpResponse httpResponse = httpClient.execute(put);
		int statusCode = httpResponse.getStatusLine().getStatusCode();
		if (statusCode == HttpStatus.SC_OK) {
			BufferedReader br =
				new BufferedReader(new InputStreamReader(httpResponse.getEntity().getContent(), Consts.UTF_8));
			String result = br.readLine();

			JSONObject object = JSON.parseObject(result);
			System.out.println(object.get("ret"));
		}
	} catch (Exception e) {
		System.out.println(e);
	}

}
```
