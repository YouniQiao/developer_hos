---
title: "RTA广告请求接口"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-rta-interface-request-0000001299178600
---
# RTA广告请求接口

## 功能介绍

华为应用市场应用推广平台在每次推广之前，会调用本接口向开发者侧的平台确认是否要向此人群出价，以达到由开发者自主筛选投放人群的效果。开发者平台需要按本文档的要求实现该接口。

## 使用约束

![](./img/0000000000011111111.20251117124642.89188610500129101495753273218159_50001231000000_2800_CC832136BC85D2B609EC4D81C2E1F507FC82F4B92F5CF87154C88066546C3928_65a5606ff058.png) 

如您的服务器对某些请求IP存在限制，需要开通IP允许清单，请联系运营提供。

- 使用接口前请确认您已经申请开通此API。
- API的性能约束：
  - 端到端时延：TP99 &lt;=50ms，AVG &lt;=25ms
  - 最大并发：60000 TPS

## 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 华为应用市场应用推广平台-&gt;开发者平台 |
| 接口URL | https://*xxx.xxx.xxx/rta*  说明：  URL为开发者定义，开通权限后将URL提供给华为运营完成RTA接口地址的配置。仅支持https协议。 |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

## 请求参数

### Header

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| X-Requestor | M | String(64) | 固定传入<strong>AppPromote</strong>。 |
| Authorization | M | String(512) | 鉴权信息，格式为：\{*prefix*\}:\{*Digest(body)*\}   - \{prefix\}为固定字符串"<strong>security</strong>"。 - \{Digest(body)\}：HMAC-SHA256(http-body)；   字符串不区分大小写，冒号前后没有空格。  【示例】security:78c2395236bbf4262cae4f1172a327c2929ae63eaa0395961a49debc3b6f8339  为防止请求被篡改，开发者可以按照HmacSHA256(<strong>requestId</strong>+<strong>requestTime</strong>+<strong>devId</strong>, <strong>secretKey</strong>)算法生成待验证的签名字符串（参考[验签示例](#section13779174482714)），然后验证是否与<strong>Authorization</strong>中的签名字符串一致。如果一致，表示请求消息未被篡改。  其中<strong>secretKey</strong>为华为应用市场应用推广平台生成的鉴权密钥，华为会将其转成base64编码后由华为运营人员传递给开发者平台。拿到密钥后，需要进行base64解码后才能使用。 |
| Content-Type | M | String(32) | 对象内容的类型，固定传入<strong>application/json</strong>。 |
| Timestamp | M | String(32) | 发起请求消息头的UTC时间戳。 |

### Body

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| requestId | M | String(256) | 每一次请求的唯一标识。 |
| requestTime | M | Long | 发起请求消息体的UTC时间戳。 |
| devId | M | String(256) | 设备的OAID（目前只支持OAID），传值使用原始值。 |
| idType | M | Int | 设备ID类型。   - 0：OAID |
| rtaInfos | M | [RtaInfo](#ZH-CN_TOPIC_0000001309549114__zh-cn_topic_0000001177028043_p73791711191617)[] | RTA投放策略ID和推广任务映射的列表信息，开发者可根据不同的人群定义不同的RTA ID，创建推广任务时，按照需要投放的人群填写对应的ID。 |
| rtaInfo4Creatives | O | [RtaInfo4Creative](#ZH-CN_TOPIC_0000001309549114__p714101685614)[] | RTA建议创意的列表信息。如果需要使用RTA建议创意的功能，该字段必填。 |

<strong>RtaInfo</strong>

| 参数名 | 必选(M)/可选(O) | 数据类型 | 说明 |
| --- | --- | --- | --- |
| rtaId | M | String(32) | RTA ID。  说明：  RTA ID可由纯数字、纯字母或字母和数字组合的方式组成，长度不超过32个字符。请确保RTA ID正确填写，否则会导致RTA任务失效。 |
| taskId | M | Long | 子推广任务ID。  注意：  - 自2021年11月15日起，该参数值由<strong>taskId</strong>替换为<strong>subTaskId</strong>，参数名称不变。 - 此处的“子推广任务”需要对应的主推广任务和子推广任务本身同时为“执行”状态。 |

<strong>RtaInfo4Creative</strong>

| 参数名 | 必选(M)/可选(O) | 数据类型 | 说明 |
| --- | --- | --- | --- |
| creativeId | M | String(32) | 外部创意ID。 |

## 请求示例

```
POST https://xxx.xxx.com/rta 
X-Requestor: AppPromote
Authorization: security:***
Content-Type: application/json
Timestamp: "1606011794178"

{
 "requestId": "33orpohsfoda3434872",
 "requestTime": 1603444266343,
 "devId": "6767abbbc7h3e322bcd2345d232",
 "idType": 0,
 "rtaInfos":[{
   "rtaId": "233412asdfd3432423",
   "taskId": 1461111681481911116
  }, {
   "rtaId": "233412asdfd3432111",
   "taskId": 1461111681481911116
  }, {
   "rtaId": "233412asdfd3432111",
   "taskId": 1461111681481911116
  }
 ],
 "rtaInfo4Creatives":[{
   "creativeId": "123"
 }, {
   "creativeId": "456"
 }
 ]
}
```

## 响应参数

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| requestId | M | String(256) | 每一次请求的唯一标识，返回的requestId必须与请求时的requestId一致。 |
| retCode | M | Int | 任务投放状态。   - 0：不投放。 - 1：部分投放。如果部分投放，需要在taskList中返回需要投放的任务列表。 - 2：全部投放。如果需要全部投放，可不返回taskList。 |
| taskList | O | List&lt;Long&gt; | 需要投放的任务列表。  注意：  当retCode为1时，需要返回该参数，同时该参数内容需要与请求体中RtaInfo中的taskId参数保持一致，即透传taskId参数中的内容。 |
| creativeIds | O | List&lt;String&gt; | 外部创意ID列表。  如果有建议创意，需要返回该参数，同时该参数内容需要与请求体中RtaInfo4Creatives中的creativeId参数保持一致，即透传creativeId参数中的内容。  注意：  该参数值与retCode无联动关系。 |

## HTTP返回码

| Http状态码 | 状态码描述 | 说明 |
| --- | --- | --- |
| 200 | OK | 服务器成功返回用户请求的数据。 |
| 400 | INVALID REQUEST | 用户发出的请求有错误，参数不合法或其他错误。 |
| 500 | INTERNAL SERVER ERROR - [\*]： | 服务器发生错误，用户将无法判断发出的请求是否成功。 |

## 响应示例

```
{
    "requestId": "33orpohsfoda3434872",
    "retCode": 1,
    "taskList":[1111111111,1111111112],
    "creativeIds":["123","456"]
}
```

## 验签示例

```
“Java”
public static String getSignature256(String data, String key) {   //data:requestId+requestTime+devId ; key:签名密钥
       return new HexBinaryAdapter()
       .marshal(getSignature256(StringUtils.getBytesUtf8(data), StringUtils.getBytesUtf8(key)))
       .toLowerCase(Locale.US);    
}
```
