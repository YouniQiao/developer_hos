---
title: "查询深度转化目标"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-tracking0-0000001574246740
format: md
---

# 查询深度转化目标

【简介】通过此接口可以查询深度转化目标，需要向运营申请转化指标权限。使用深度转化目标需要先创建相应的<strong>[转化跟踪指标](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section125615641916)</strong>。例如，使用激活应用为浅层指标同时使用<strong>[浏览商品](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section125615641916)</strong>作为深度转化目标。则需要创建<strong>[激活应用](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section125615641916)</strong>和<strong>[浏览商品](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section125615641916)</strong>的转化跟踪指标。此时即可使用浏览商品作为激活应用目标的深度转化目标。

<strong>请求地址</strong>

亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/effect\_tracking/deep\_effect\_target/query

俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/effect\_tracking/deep\_effect\_target/query

欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/effect\_tracking/deep\_effect\_target/query

<strong>请求方法</strong>

<strong>GET</strong>

<strong>请求参数</strong>

|  |  |  |  |
| --- | --- | --- | --- |
| <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
| advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
| page | integer | 是 | 搜索页码，  取值范围1~10000； |
| page\_size | integer | 是 | 一页展示数量，  取值范围 10~50； |
| filtering | Struct1 | 是 | 过滤条件，此字段必传 |

filtering (Struct1)定义

|  |  |  |  |
| --- | --- | --- | --- |
| <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
| tracking\_id | long | 是 | 转化跟踪指标ID |
| creative\_size\_id | long | 否 | 版位ID |
| targeting\_package\_id | long | 否 | 定向包ID  详见<strong>[【创建定向包】](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-targeting1-0000001338502481)</strong> |

<strong>请求示例</strong>

GET /ads/v1/tools/effect\_tracking/deep\_effect\_target/query

HTTP/1.1

Accept:application/json

Content-Type:application/json

Authorization:Bearer CgB\*\*\*\*\*\*

\\{

"page":1,

"page\_size":10,

"filtering":\\{

"tracking\_id":"xxxxxx",

"creative\_size\_id":"xxxxxx",

"targeting\_package\_id":"xxxx"

\\}

\\}

<strong>响应字段</strong>

|  |  |  |
| --- | --- | --- |
| <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
| code | string | 返回码 |
| message | string | 返回描述 |
| data | string[] | 深度转化目标  详见[深度转化目标](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1042612114174) |

<strong>应答示例</strong>

HTTPS/1.1 200 OK

\\{

"code": "200",

"data": [

"OCPC\_DEEP\_EFFECT\_TARGET\_BROWSE",

"OCPC\_DEEP\_EFFECT\_TARGET\_ADD\_TO\_CART",

"OCPC\_DEEP\_EFFECT\_TARGET\_REGISTER",

"OCPC\_DEEP\_EFFECT\_TARGET\_RETAIN",

"OCPC\_DEEP\_EFFECT\_TARGET\_PAID",

"OCPC\_DEEP\_EFFECT\_TARGET\_PRE\_ORDER",

"OCPC\_DEEP\_EFFECT\_TARGET\_CUSTOM\_APP"

]

\\}
