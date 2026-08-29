---
title: "活动/景点门票接口"
upstream_id: "harmonyos-references/wallet-rest-api-ticket"
catalog: "harmonyos-references"
content_hash: "88c07e6f7bfb"
synced_at: "2026-08-29T18:18:37.267957"
---

# 活动/景点门票接口

#### 预置模板

卡片模板的创建是接入流程的第一步，这一步可以通过http/https请求的方式向华为钱包云服务提供卡券样式的关键信息，如卡面主标题、副标题、logo、背景图片等，用于华为钱包门票页面的展示。

开发者可创建多个共享相同机构名和服务号但模板ID不同的模板。在申请门票时，每张卡必须绑定唯一的模板ID，即一个模板可被多张门票复用，而一张门票仅能关联一个模板ID。

#### [h2]接口原型

- **承载协议**：HTTPS POST
- **接口方向**：开发者业务管理服务->钱包云服务
- **接口URL**：https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass/v2/{cardType}/model
- **数据格式**： 请求消息：Content-Type: application/json;charset=UTF-8 响应消息：Content-Type: application/json;charset=UTF-8

#### [h2]请求参数

Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 请求的数据类型，取值为：application/json;charset=UTF-8。 |
| Authorization | 是 | String | 认证信息，将[获取AccessToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-public#获取accesstoken)获取到的“access_token”的值拼接在字符串“Bearer”之后，以空格符相隔，组成“Authorization”参数的值。 |
| Accept | 是 | String | 响应的数据格式，取值为：application/json;charset=UTF-8。 |

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
| isCreateWhiteCard | 否 | String | 是否为NFC卡的标记。 true：NFC卡。 false：非NFC卡。 |

| commonFields参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| logo | 是 | String | 卡面logo，128*128px，大小钱包云服务
- **接口URL**：https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass/v2/{cardType}/instance
- **数据格式**： 请求消息：Content-Type: application/json;charset=UTF-8 响应消息：Content-Type: application/json;charset=UTF-8

#### [h2]请求参数

Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 请求的数据类型，取值为：application/json;charset=UTF-8。 |
| Authorization | 是 | String | 认证信息，将[获取AccessToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-public#获取accesstoken)获取到的“access_token”的值拼接在字符串“Bearer”之后，以空格符相隔，组成“Authorization”参数的值。 |
| Accept | 是 | String | 响应的数据格式，取值为：application/json;charset=UTF-8。 |

Request Body

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| passTypeIdentifier | 是 | String | 创建Wallet Kit服务时注册的服务号，格式为：hwpass.xxx.xxx.xxx（xxx可为公司/产品名称，总长度不超过32个英文小写字符，请严格按照此规则定义）。 |
| passStyleIdentifier | 是 | String | 模板ID，长度不超过64个字符，只能是字母、数字、“.”、“-”和“_”。 |
| organizationName | 是 | String | 预置模板中创建的商户名称，最长64个字节。 |
| organizationPassId | 是 | String | 门票卡片在开发者服务器中的卡号。在同一个appId下唯一。长度16个字节，为保证唯一性，请勿手动输入，建议使用代码随机生成，只能是字母、数字，当前和serialNumber保持一致。 |
| serialNumber | 是 | String | 门票卡片在华为钱包服务器中的卡号，即instanceId。在同一个appId下唯一。长度16个字节，为保证唯一性，请勿手动输入，建议使用代码随机生成，只能是字母、数字，当前和organizationPassId保持一致。 |
| fields | 是 | fields | 卡券展示信息，包括commonFields、appendFields、barCode、flexFields、status、localized部分。 |

| barCode参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| text | 否 | String | 二维码下方显示的描述或数字。 |
| type | 否 | String | 二维码类型，固定值：'qrCode'。 |
| value | 否 | String | 二维码码值。 |
| encoding | 否 | String | 编码格式，固定值：'UTF-8'。 |

| flexFields参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| primaryFields | 否 | List | 主要信息区字段列表，最多展示4条数据。每个主要信息区字段包含key、value、label。 每行展示规则：1个key居左对齐，2个key分别居左居右，3~4个key两侧居左居右、中间居中。 label和value值进行展示，label不支持换行，value最多2行超过截断。 |
| secondaryFields | 否 | List | 次要信息字段列表，最多展示4个。取label和value进行展示。每个元素包含key、value、label。门票常用key：seat（座位）、row（排）、section（区域）、gate（入口）、confirmationNumber（确认号）。 |

| **status**参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| state | 是 | String | 状态值。取值如下： - active：生效 - inactive：未激活 - completed：已使用 - expired：已过期 |
| effectTime | 是 | String | 生效时间，格式为yyyy-MM-ddTHH:mm:ss.SSSZ。 |
| expireTime | 是 | String | 失效时间，格式为yyyy-MM-ddTHH:mm:ss.SSSZ。如果超过此时间，卡券自动按照expired状态处理。 |

| localized参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| key | 否 | String | 国际化键名。无固定值，根据实际需要国际化的字段传入对应键名即可。 |
| value | 否 | String | 国际化文本，对应语言的显示内容。 |
| language | 否 | String | 语言代码，如zh-CN、en-US。 |

| commonFields参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| ownerPassTypeIdentifier | 是 | String | 服务号，格式为：hwpass.xxx.xxx.xxx。 |
| readerMatchValue | 否 | String | 门票标识，建议不超过20个字节，第一字节表示开发者标识，第二字节表示品牌/系列标识，后续的字节用于保证开发者内唯一性。字符只能包含0-9和A-F。 |
| deviceType | 否 | String | 当前门票开通的设备类型，Phone：手机、Wear：穿戴。 |
| personalizedData | 否 | Object | 开发者个性化数据。 |
| logo | 否 | String | 卡面logo，128*128px，大小钱包云服务
- **接口URL**：https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass/v2/{cardType}/instance/{instanceId}
- **数据格式**： 请求消息：Content-Type: application/json;charset=UTF-8 响应消息：Content-Type: application/json;charset=UTF-8

#### [h2]请求参数

Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 请求的数据类型，取值为：application/json;charset=UTF-8。 |
| Authorization | 是 | String | 认证信息，将[获取AccessToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-public#获取accesstoken)获取到的“access_token”的值拼接在字符串“Bearer”之后，以空格符相隔，组成“Authorization”参数的值。 |
| Accept | 是 | String | 响应的数据格式，取值为：application/json;charset=UTF-8。 |

Request Body

参见[申请门票](#申请门票)的请求体，如果是全量更新，与申请门票接口请求体相同。如果是局部更新，则只需传入需要变更的数据体。

#### [h2]请求示例

```
PATCH /hmspass/v2/key_ticket/instance/100005 HTTP/1.1
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

http响应为200时表示成功。其他错误情况，可见[REST API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-error-code)。

#### [h2]调用示例

```
public HwWalletObject invokeHwCreateKeyTicketObject() {
    HwWalletObject request = new HwWalletObject();
    request.setPassTypeIdentifier("hwpass.keyticket.test");
    request.setPassStyleIdentifier("keyTicketModelTest");
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
    // 100005仅为instanceId的示例值，实际使用时请替换为真实的instanceId。
    String walletServerUrl = baseUrl + "/v2/key_ticket/instance/100005";
    HttpEntity<JSONObject> entity = new HttpEntity<>(JSONObject.parseObject(JSONObject.toJSONString(request)), header);
    ResponseEntity<JSONObject> exchange =
        REST_TEMPLATE.exchange(walletServerUrl, HttpMethod.PATCH, entity, JSONObject.class);
    return JSONObject.parseObject(exchange.getBody().toJSONString(), HwWalletObject.class);
}
```
