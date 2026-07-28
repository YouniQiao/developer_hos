---
title: "数字车钥匙接口"
upstream_id: "harmonyos-references/wallet-rest-api-carkey"
catalog: "harmonyos-references"
content_hash: "d3f45d1e1a82"
synced_at: "2026-07-28T16:53:07.227509"
---

# 数字车钥匙接口

#### 预置模板

卡片模板的创建是接入流程的第一步，这一步可以通过http/https请求的方式向华为钱包云服务提供卡券样式的关键信息，如卡面主标题、副标题、logo、背景图片等，用于华为钱包钥匙页面的展示。

开发者可创建多个共享相同机构名和服务号但模板ID不同的模板。在申请车钥匙时，每张卡必须绑定唯一的模板ID，即一个模板可被多个车钥匙复用，而一个车钥匙仅能关联一个模板ID。

#### [h2]接口原型

- **承载协议**：HTTPS POST
- **接口方向**：三方业务管理服务->钱包云服务
- **接口URL**：https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass/v2/key_stdcar/model
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
| passTypeIdentifier | 是 | String | 创建Wallet Kit服务时注册的服务号，格式为：hwpass.stdcarkey.xxx.xxx（xxx可为公司/产品名称，总长度不超过32个英文小写字符，请严格按照此规则定义）。 |
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
- **接口URL**：https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass/v2/key_stdcar/instance
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
| passTypeIdentifier | 是 | String | 服务号，格式为：hwpass.stdcarkey.xxx.xxx（xxx可为公司/产品名称，总长度不超过32个英文小写字符，请严格按照此规则定义）。 |
| passStyleIdentifier | 是 | String | 模板ID，长度不超过64个字符，只能是字母、数字、“.”、“-”和“_”。 |
| organizationName | 是 | String | 预置模板中创建的商户名称，最长64个字节。 |
| organizationPassId | 是 | String | 车钥匙卡片在开发者服务器中的卡号，长度16个字节，为保证唯一性，请勿手动输入，建议使用代码随机生成，只能是字母、数字，当前和serialNumber保持一致。 |
| serialNumber | 是 | String | 车钥匙卡片在华为钱包服务器中的卡号，即instanceId。在同一个appId下唯一。长度16个字节，为保证唯一性，请勿手动输入，建议使用代码随机生成，只能是字母、数字，当前和organizationPassId保持一致。 |
| fields | 是 | fields | 卡券展示信息，包括commonFields、timeList和status三部分。 |
| linkDevicePass | 是 | linkDevicePass | 链接设备参数，用于保存车钥匙管理台服务器地址、公钥信息以及是否使能卡券的NFC能力。 |

| **timeList**参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| linkDevicePassExpireTime | 是 | List | 时间列表 |

| **status**参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| state | 是 | String | 状态值。取值如下： - active：生效 - inactive：未激活 - completed：已使用 - expired：已过期 |
| effectTime | 是 | String | 生效时间，UTC格式。 |
| expireTime | 是 | String | 失效时间，UTC格式。如果超过此时间，卡券自动按照expired状态处理。 |

| commonFields参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| bleServiceUuid | 是 | String | 车厂蓝牙设备的SERVICE_UDID，用于手机发现车端蓝牙模块开启的车钥匙服务；请使用蓝牙标准规范：如0000xxxx-0000-1000-8000-00805f9b34fb。 |
| ownerPassTypeIdentifier | 是 | String | 服务号，格式为：hwpass.stdcarkey.xxx.xxx（xxx可为公司/产品名称，总长度不超过32个英文小写字符，请严格按照此规则定义）。 |
| readerMatchValue | 是 | String | 车钥匙标识，建议不超过20字节（第一字节：车厂标识，第二字节：品牌/系列标识，后续字节保证在车厂内唯一）, 只能包含0-9，A-F。 |
| bleTargetPackage | 是 | String | 车主App的包名，用于钱包在特定场景下拉起车厂App。 |
| bleMacAddress | 是 | String | 车端蓝牙设备的mac地址，用于华为手机扫描车端蓝牙模块、向车端蓝牙发起Gatt连接等。请注意格式合法性，如：01:23:45:67:89:0A。 |
| bleFeature | 是 | String | 支持蓝牙车钥匙的标识，固定hwpass.carkey.ble。 |
| deviceType | 是 | String | 当前钥匙开通的设备类型，如Phone：手机，Wear：穿戴。 |
| keyHolderType | 是 | String | 当前钥匙持有者的性质，如Owner：车主、Share：分享。 |
| vehicleId | 是 | String | 车辆vin码，不超过20个字节。 |
| personalizedData | 否 | String | 车厂个性化数据，可用于储存车辆标定数据等。 |
| logo | 否 | String | 卡面logo，128*128px，大小钱包云服务
- **接口URL**：https://wallet-passentrust-drcn.cloud.huawei.com.cn/hmspass/v2/key_stdcar/instance/{instanceId}
- **数据格式**： 请求消息：Content-Type: application/json;charset=UTF-8 响应消息：Content-Type: application/json;charset=UTF-8

#### [h2]请求参数

Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 数据格式，取值为：Content-Type: application/json;charset=UTF-8。 |
| Authorization | 是 | String | 认证信息，将[获取AccessToken](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-public#获取accesstoken)获取到的“access_token”的值拼接在字符串“Bearer”之后，以空格符相隔，组成“Authorization”参数的值。 |
| Accept | 是 | String | 响应的数据格式，取值为：Content-Type: application/json;charset=UTF-8。 |

Request Body

参见[申请ICCE车钥匙](#申请icce钥匙)的请求体，如果是全量更新，与申请ICCE车钥匙接口请求体相同。如果是局部更新，则只需传入需要变更的数据体。

#### [h2]请求示例

```
POST /hmspass/v2/key_stdcar/instance/100000 HTTP/1.1
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
    public void createStdCarKeyModel() {
        JSONObject model = JSONObject.parseObject(ConfigUtil.readFile("StdCarKeyModel.json"));
        HwWalletObjectUtil.validateModel(model);
        String urlSegment = "/v2/key_stdcar/model";
        JSONObject responseModel = serverApiService.postToWalletServer(urlSegment, JSONObject.toJSONString(model));
    }
```

#### 上传车端数据到DK服务器

车端可通过钱包提供的通道上传自定义数据，用于获取DK服务器存储的钥匙状态、权限信息等云端数据，钱包作为中间桥梁透传交互数据，提供完整的业务闭环渠道。

#### [h2]接口原型

- **承载协议**：HTTPS POST
- **接口方向**：钱包云服务->三方业务管理服务
- **接口URL**：开发者在华为钱包管理台网站上提供的回调地址
- **数据格式**： 请求消息：Content-Type: application/json;charset=UTF-8 响应消息：Content-Type: application/json;charset=UTF-8

#### [h2]请求参数

Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 数据格式，取值为：application/json;charset=UTF-8。 |
| Accept | 是 | String | 响应的数据格式，取值为：identity。 |

Request Body

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| passTypeIdentifier | 是 | String | 服务号，格式为：hwpass.stdcarkey.xxx.xxx（xxx可为公司/产品名称，总长度不超过32个英文小写字符，请严格按照此规则定义）。 |
| serialNumber | 是 | String | Pass对象在发卡方的唯一键值，回调时以便发卡方根据此值识别具体的卡券记录。 |
| payload | 是 | String | 车端请求报文中的整个body部分，如03040102xxxx。 |
| signature | 是 | String | 钱包服务器使用signByRSAWithPSS方式对请求体的签名。 |

#### [h2]请求示例

```
POST /api/callback HTTP/1.1
Content-Type: application/json;charset=UTF-8
Accept: identity
{
    "requestBody": {
      "passTypeIdentifier": "Replace with the Service ID you applied on AGC",
      "serialNumber": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "payload": "10101"
    },
    "signature": "xxx"
}
```

#### [h2]响应参数

| 父节点参数 | 子节点参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- | --- |
| Httpstatus | - | 否 | String | 接口网络状态码，参考[REST API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-error-code)进行处理。 |
| response | payload | 否 | String | SP验证请求后，返回的数据。 |

#### [h2]响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
{
  "httpStatus": "0",
  "response": {
    "payload": "xxx"
  }
}
```

#### 获取配对码

计算配对码返回给钱包App。

#### [h2]接口原型

- **承载协议**：HTTPS POST
- **接口方向**：钱包云服务->三方业务管理服务
- **接口URL**：{webServiceURL}/v1/passes/requestPairCode
- **数据格式**： 请求消息：Content-Type: application/json;charset=UTF-8 响应消息：Content-Type: application/json;charset=UTF-8

#### [h2]请求参数

Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| Content-Type | 是 | String | 数据格式，取值为：application/json;charset=UTF-8。 |
| Accept | 是 | String | 响应的数据格式，取值为：identity。 |

Request Body

| 父节点参数 | 子节点参数 | 参数类型 | 是否必选 | 描述 |
| --- | --- | --- | --- | --- |
| requestBody | passTypeIdentifier | String | 是 | 创建Wallet Kit服务时注册的服务号，需要开发者到华为AGC网站申请。 |
| requestBody | serialNumber | String | 是 | 车钥匙卡片在华为钱包云服务器中的卡号，回调时以便发卡方根据此值识别具体的卡券记录。 |
| requestBody | transPublicKey | String | 是 | 用于加密返回的对称秘钥，用于对返回的数据做数字信封。 |
| requestBody | userDeviceId | String | 是 | 用户在当前设备上的唯一标识。 |
| requestBody | transId | String | 是 | 请求唯一标识，为随机数。 |
| requestBody | vehicleType | String | 否 | 车辆标识类型，mac：车端蓝牙MAC地址、vin：车辆VIN码、readerId：NFC读头标识。默认值为mac。 |
| requestBody | vehicleId | String | 是 | 车辆标识，用于匹配对应的车辆。 |
| requestBody | vehicleBroadcast | String | 是 | 扫描到的车端广播报文，byte[]数组转十六进制字符。 |
| requestBody | connectionType | String | 否 | 支持的传入类型，0200：NFC、0201：NFC+BLE、0202：UWB、0203：SLE。默认值为0202。 |
| requestBody | timestamp | String | 是 | 请求时间戳，格式 yyyyMMddHHmmssSSS，校验请求消息送达时间为5分钟以内。 |
| requestBody | timeZone | String | 否 | 默认东八区，非国内需要传入时区，国内传空。 |
| signature | - | String | 是 | Applet的身份私钥对requestBody的Hash值的签名。 |
| certificate | signature | String | 是 | 钱包云服务使用钱包服务器私钥对publicKey的签名值。DK业务管理服务收到该请求后，需要使用钱包云服务公钥对其进行验签。 |
| certificate | publicKey | String | 是 | Applet的身份公钥。 |

#### [h2]请求示例

```
POST /v1/passes/requestPairCode HTTP/1.1
Content-Type: application/json;charset=UTF-8
Accept: identity
{
    "requestBody": {
      "passTypeIdentifier": "xxx",
      "serialNumber": "xxx",
      "transPublicKey": "xxx",
      "transId": "xxx",
      "vehicleType": "xxx",
      "vehicleId": "xxx",
      "vehicleBroadcast": "xxx",
      "connectionType": "xxx",
      "timestamp": "xxx",
      "timeZone": "",
    },
    "signature": "xxx",
    "certificate": {
      "signature": "xxx",
      "publicKey": "xxx"
    },
}
```

#### [h2]响应参数

| 父节点参数 | 子节点参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- | --- |
| Httpstatus | - | 是 | String | 接口网络状态码，参考[REST API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/wallet-rest-api-error-code)进行处理。 |
| response | encryptPairCode | 是 | String | SP Server通过生成的16字节临时对称密钥key和iv加密配对码信息。对称加密算法使用AES-128-GCM，采用Base64编码。 |
| response | encryptSessionKey | 否 | String | SP Server使用请求中的transPublicKey加密生成的sessionKey，采用Base64编码。 |
| signature | - | 否 | String | SP Server对response的Hash值进行签名。 |

#### [h2]响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
{
  "httpStatus": "0",
  "response": {
    "encryptPairCode": "xxx",
    "encryptSessionKey": "xxx",
  }
}
```

#### 车钥匙迁移

用户更换移动设备后，车钥匙自动迁移至新设备，无须重新线下配对，保障用户持续使用数字车钥匙的便捷体验。

#### [h2]接口原型

- **承载协议**：HTTPS POST
- **接口方向**：钱包云服务->三方业务管理服务
- **接口URL**：{webServiceURL}/v2/passes/transfer
- **数据格式**： 请求消息：Content-Type: application/json;charset=UTF-8 响应消息：Content-Type: application/json;charset=UTF-8

#### [h2]请求参数

Request Header

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| signType | 是 | String | 签名方式，固定值：SHA256WithRSA/PSS。 |
| sign | 是 | String | 对整个消息体的签名值。 |
| signVersion | 否 | String | 本次签名使用的秘钥版本号，默认值为0。 |
| version | 是 | String | 接口版本号，固定值：V2。 |

Request Body

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| requestNo | 是 | String | 请求流水号，单次请求的唯一标识。 |
| passData | 是 | String | 原始的Pass数据。 |
| userDeviceId | 是 | String | 用户在当前设备上的唯一标识。 |
| deviceCategory | 是 | String | 设备类型，phone: 手机、wear: 穿戴，默认值为phone。 |
| deviceModel | 是 | String | 设备名，用于展示可开通的设备名称。 |
| deviceModelNumber | 是 | String | 设备型号编码，用于获取匹配的标定数据。 |
| capabilitySetInfo | 否 | String | 能力集信息，同步返回是否支持NFC/BLE/UWB/SLE。0200：NFC、0201：NFC+BLE、0202：UWB、0203：SLE。 |
| openId | 否 | String | 华为账号OpenId，开通时传入，用于车企后台发卡的车钥匙关联华为账号OpenId。兼容处理：存量钥匙未关联openId，放通不校验。 |
| transferScene | 否 | String | 迁移场景，预留字段，包括克隆以及其他批量/主动添卡场景。phoneClone：克隆、userOperation：其他。 |
| timestamp | 是 | String | 时间戳。 |

#### [h2]请求示例

```
POST /v2/passes/transfer HTTP/1.1
Content-Type: application/json;charset=UTF-8
signType: SHA256WithRSA/PSS
sign: u+H1Oe3fXV9mGCES89XA7tSjp8+TELYgG4bKyECwrVGwwExH********************g
signVersion: 0
version: V2
{
    "requestNo": "xxx",
    "passData": "xxx",
    "userDeviceId": "xxx",
    "deviceCategory": "xxx",
    "deviceModel": "xxx",
    "deviceModelNumber": "xxx",
    "capabilitySetInfo": "xxx",
    "openId": "xxx",
    "transferScene": "xxx",
    "timestamp": ""
}
```

#### [h2]响应参数

| 参数 | 是否必选 | 参数类型 | 描述 |
| --- | --- | --- | --- |
| resultCode | 是 | String | 响应结果码。0：成功；1010：原钥匙已经删除；1011：openId不一致，迁移失败。 |
| resultDesc | 是 | String | 返回值描述。success: 成功、其他：失败。 |
| jweData | 否 | String | jwe数据，响应结果码为0时必选，否则可空。 |

#### [h2]响应示例

```
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
{
  "resultCode": "0",
  "resultDesc": "success",
  "jweData": "xxx",
}
```
