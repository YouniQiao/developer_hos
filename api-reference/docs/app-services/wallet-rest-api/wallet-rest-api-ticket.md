---
title: "活动/景点门票接口"
upstream_id: "harmonyos-references/wallet-rest-api-ticket"
catalog: "harmonyos-references"
content_hash: "f08846e7c593"
synced_at: "2026-07-28T16:53:07.890045"
---

# 活动/景点门票接口

#### 预置模板

卡片模板的创建是接入流程的第一步，这一步可以通过http/https请求的方式向华为钱包云服务提供卡券样式的关键信息，如卡面主标题、副标题、logo、背景图片等，用于华为钱包门票页面的展示。

开发者可创建多个共享相同机构名和服务号但模板ID不同的模板。在申请门票时，每张卡必须绑定唯一的模板ID，即一个模板可被多张门票复用，而一张门票仅能关联一个模板ID。

#### [h2]接口原型

- **承载协议**：HTTPS POST
- **接口方向**：三方业务管理服务->钱包云服务
- **接口URL**：https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass/v2/{cardType}/model
- **数据格式**： 请求消息：Content-Type: application/json;charset=UTF-8 响应消息：Content-Type: application/json;charset=UTF-8

#### [h2]请求参数

Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 数据格式，取值为：Content-Type: application/json;charset=UTF-8。 |
| Authorization | 是 | String | 认证信息，将[获取AccessToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-public#获取accesstoken)获取到的“access_token”的值拼接在字符串“Bearer”之后，以空格符相隔，组成“Authorization”参数的值。 |
| Accept | 是 | String | 响应的数据格式，取值为：Content-Type: application/json;charset=UTF-8。 |

Request Body

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| passTypeIdentifier | 是 | String | 创建Wallet Kit服务时注册的服务号，格式为：hwpass.xxx.xxx.xxx（xxx可为公司/产品名称，总长度不超过32个英文小写字符，请严格按照此规则定义）。 |
| passStyleIdentifier | 是 | String | 模板ID，长度不超过64个字符，只能是字母、数字、“.”、“-”和“_”。 |
| organizationName | 是 | String | 商户名称，最长64个字节，无具体格式要求，中英文均可。 |
| passVersion | 是 | String | Pass版本号，固定“10.0”。 |
| fields | 是 | fields | 卡券展示信息，包括appendFields和commonFields两部分。 |

| appendFields参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| isCreateWhiteCard | 是 | String | 用于表明是否是NFC卡的标记： true：是NFC卡。 false：非NFC卡。 |

| commonFields参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| logo | 是 | String | 卡面logo，128*128px，大小钱包云服务
- **接口URL**：https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass/v2/{cardType}/instance
- **数据格式**： 请求消息：Content-Type: application/json;charset=UTF-8 响应消息：Content-Type: application/json;charset=UTF-8

#### [h2]请求参数

Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 数据格式，取值为：Content-Type: application/json;charset=UTF-8。 |
| Authorization | 是 | String | 认证信息，将[获取AccessToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-public#获取accesstoken)获取到的“access_token”的值拼接在字符串“Bearer”之后，以空格符相隔，组成“Authorization”参数的值。 |
| Accept | 是 | String | 响应的数据格式，取值为：Content-Type: application/json;charset=UTF-8。 |

Request Body

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| passTypeIdentifier | 是 | String | 创建Wallet Kit服务时注册的服务号，格式为：hwpass.xxx.xxx.xxx（xxx可为公司/产品名称，总长度不超过32个英文小写字符，请严格按照此规则定义）。 |
| passStyleIdentifier | 是 | String | 模板ID，长度不超过64个字符，只能是字母、数字、“.”、“-”和“_”。 |
| organizationName | 是 | String | 预置模板中创建的商户名称，最长64个字节。 |
| organizationPassId | 是 | String | 门票卡片在开发者服务器中的卡号。在同一个appId下唯一。长度16个字节，为保证唯一性，请勿手动输入，建议使用代码随机生成，只能是字母、数字，当前和serialNumber保持一致。 |
| serialNumber | 是 | String | 门票卡片在华为钱包服务器中的卡号，即instanceId。在同一个appId下唯一。长度16个字节，为保证唯一性，请勿手动输入，建议使用代码随机生成，只能是字母、数字，当前和organizationPassId保持一致。 |
| fields | 是 | fields | 卡券展示信息，包括commonFields、timeList和status三部分。 |
| linkDevicePass | 是 | linkDevicePass | 链接设备参数，用于保存门票管理台服务器地址、公钥信息以及是否使能卡券的NFC能力。 |

| **timeList**参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| linkDevicePassExpireTime | 是 | List | 时间列表。 |

| **status**参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| state | 是 | String | 状态值。取值如下： - active：生效 - inactive：未激活 - completed：已使用 - expired：已过期 |
| effectTime | 是 | String | 生效时间，UTC格式。 |
| expireTime | 是 | String | 失效时间，UTC格式。如果超过此时间，卡券自动按照expired状态处理。 |

| commonFields参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| ownerPassTypeIdentifier | 是 | String | 服务号，格式为：hwpass.xxx.xxx.xxx。 |
| readerMatchValue | 是 | String | 门票标识，建议字节不超过20字节（第一字节：三方标识，第二字节：品牌/系列标识，后续字节保证在三方内唯一）, 只能包含0-9，A-F。 |
| deviceType | 是 | String | 当前门票开通的设备类型，如Phone：手机，Wear：穿戴。 |
| personalizedData | 否 | Object | 三方个性化数据。 |
| logo | 否 | String | 卡面logo，128*128px，大小钱包云服务
- **接口URL**：https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass/v2/{cardType}/instance/{instanceId}
- **数据格式**： 请求消息：Content-Type: application/json;charset=UTF-8 响应消息：Content-Type: application/json;charset=UTF-8

#### [h2]请求参数

Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 数据格式，取值为：Content-Type: application/json;charset=UTF-8。 |
| Authorization | 是 | String | 认证信息，将[获取AccessToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-public#获取accesstoken)获取到的“access_token”的值拼接在字符串“Bearer”之后，以空格符相隔，组成“Authorization”参数的值。 |
| Accept | 是 | String | 响应的数据格式，取值为：Content-Type: application/json;charset=UTF-8。 |

Request Body

参见[申请门票](#申请门票)的请求体，如果是全量更新，与申请门票接口请求体相同。如果是局部更新，则只需传入需要变更的数据体。

#### [h2]请求示例

```
POST /hmspass/v2/key_ticket/instance/100005 HTTP/1.1
Content-Type: application/json;charset=UTF-8
Authorization: Bearer bKyECwrVGw********************e
Accept: application/json;charset=UTF-8
{
  "fields": {
    "commonFields": [
      {
        "value": "xxxx",
        "key": "personalizedData"
      }
    ]
  }
}
```

#### [h2]响应参数

模板预置成功，即http响应为200时，钱包云服务会将DK业务管理服务请求的数据原样返回，即和上面的请求体中的数据一致；其他错误情况，可见[REST API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-error-code)。

#### [h2]调用示例

```
public HwWalletObject invokeHwCreateKeyParkObject() {
    HwWalletObject request = new HwWalletObject();
    request.setPassTypeIdentifier("hwpass.keypark.test");
    request.setPassStyleIdentifier("keyParkModelTest");
    request.setOrganizationPassId("20001");
    request.setSerialNumber("20001");
    Fields fields = new Fields();
    fields.setCountryCode("CN");
    List<ValueObject> commonFields = new ArrayList<>();
    ValueObject seatNumber = new ValueObject();
    seatNumber.setKey("seatNumber");
    seatNumber.setValue("12A");
    commonFields.add(seatNumber);
    fields.setCommonFields(commonFields);
    request.setFields(fields);
    HttpHeaders header = constructHttpHeaders();
    String baseUrl = "https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass";
    String walletServerUrl = baseUrl + "/v2/key_parkcard/instance";
    HttpEntity<JSONObject> entity = new HttpEntity<>(JSONObject.parseObject(JSONObject.toJSONString(request)), header);
    ResponseEntity<JSONObject> exchange =
        REST_TEMPLATE.exchange(walletServerUrl, HttpMethod.PATCH, entity, JSONObject.class);
    return JSONObject.parseObject(exchange.getBody().toJSONString(), HwWalletObject.class);
}
```
