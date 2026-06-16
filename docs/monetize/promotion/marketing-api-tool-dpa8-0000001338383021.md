---
title: "查询商品库动态模板"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-dpa8-0000001338383021
format: md
upstream_id: monetize/promotion/marketing-api-tool-dpa8-0000001338383021
last_sync: 2026-06-07
sync_hash: 0e849942
---
# 查询商品库动态模板

您通过本接口可以查询商品库动态模板。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/product/templates/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/product/templates/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/product/templates/query
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct1 | 否 | 过滤条件，若此字段不传，或传空则视为无限制条件。 |
  | page | integer | 是 | 搜索页码，大于等于1，默认值：1。 |
  | page\_size | integer | 是 | 一页展示数量，取值范围 10~50，默认值: 10。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | template\_ids | string[] | 否 | 模板Id，最多10个。 |
  | creative\_type | string | 否 | 创意类型详见[动态创意类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#动态创意类型)。 |
  | creative\_size\_width | string | 否 | 创意宽度。 |
  | creative\_size\_height | string | 否 | 创意高度。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/dpa/product/templates/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer DAEAALpy3envCfdLiOZRerq2oopxMPmzJmgZOVXs1o27CRO8kHr5z2nyH6bXPxvZIadBeVYgOo1qg3rkXNVd13f9kqn%252F65sm%252Bev7G8h1VT9l3rDMl00q

    ```
    {
        "filtering": {
            "template_ids": [
                52224760336,
                52410919113
            ]
        },
        "page": 1,
        "page_size": 10
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码200：成功，其他错误码标识失败。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 商品库动态模板数据。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | total | integer | 总条数。 |
    | template\_list | Struct2[] | 数据列表。 |

    template\_list(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | template\_id | string | 模板Id。 |
    | template\_name | string | 模板名称。 |
    | template\_width | string | 模板宽度。 |
    | template\_height | string | 模板高度。 |
    | template\_type | string | 商品库模板类型，详见[模板类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#模板类型)。 |
    | solution | string | 模板方案。 |
    | preview\_content\_url | string | 内容url。 |
    | creative\_type | string | 创意类型。 |
    | creative\_size\_width | string | 创意宽度大小。 |
    | creative\_size\_height | string | 创意高度大小。 |
    | creative\_size\_subtype | string | 创意大小子样式，详见[版位子样式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#版位子样式)。 |
    | creative\_size\_type | string | 创意大小样式，详见[版位形式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#版位形式)。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 2,
            "template_list": [
                {
                    "template_id": "52410919113",
                    "template_name": "DPA_Splash_1_1080_1920",
                    "template_width": "1080",
                    "template_height": "1920",
                    "template_type": null,
                    "preview_content_url": "https://cs02-pps-drcn.dbankcdn.com/dl/pps/5af5e44504f143d2b524681024sample.jpg",
                    "solution": "dpa",
                    "creative_type": "image",
                    "creative_size_width": "1080",
                    "creative_size_type": "CREATIVE_SIZE_TYPE_SINGLE_PICTURE",
                    "creative_size_subtype": "INTERSTITIAL_PICTURE"
                },
                {
                    "template_id": "52224760336",
                    "template_name": "DPA_InfoFlow_1_1080_607",
                    "template_width": "1080",
                    "template_height": "607",
                    "template_type": null,
                    "preview_content_url": "https://cs02-pps-drcn.dbankcdn.com/dl/pps/20201113160904B08A81FED76E739BC0475FC85Dsample.jpg",
                    "solution": "dpa",
                    "creative_type": "image",
                    "creative_size_width": "1080",
                    "creative_size_type": "CREATIVE_SIZE_TYPE_SINGLE_PICTURE",
                    "creative_size_subtype": "INTERSTITIAL_PICTURE",
                    "creative_size_height": "607"
                }
            ]
        }
    }
    ```
