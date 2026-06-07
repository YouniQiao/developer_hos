---
title: "查询符合条件的商品数量"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-dpa10-0000001286502750
format: md
---

# 查询符合条件的商品数量

您通过本接口可以查询符合条件的商品数量。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/store/dimension\_values/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/store/dimension\_values/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/store/dimension\_values/query
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct1 | 是 | 过滤条件。 |

  Struct1定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | country | string | 是 | 投放国家的编码。 |
  | flow\_resources | string[] | 是 | 资源类型，详见[投放网络](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1178164162818)。 |
  | dimension\_category | Integer | 是 | 筛选条件类别，详见[筛选条件类别](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section131497188312)。 |
  | dimension\_values | Struct2[] | 是 | 需要查询的商品过滤维度。 |

  Struct2定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | dimension\_type | string | 是 | 商品过滤维度，详见[商品过滤维度](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section164841617202910)。  CATEGORY和ORIGINALCATEGORY支持树形结构，其他支持取值列表。 |
  | dimension\_values | Struct3 | 是 | 商品库中的筛选条件列表。 |

  dimension\_values(Struct3)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | list\_values | string[] | 是 | 筛选条件的取值，对于下拉取值的场景，返回取值列表（同样支持单值）。 |
  | tree\_values | Struct4[] | 是 | 筛选条件的取值，对于树形结构取值的场景，返回树形结构的数据。 |
  | range\_values | Struct5 | 是 | 设置上下限的场景。 |

  tree\_values(Struct4)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | id | long | 是 | 类目Id。 |
  | parent\_id | long | 是 | 父级类目Id。 |
  | level | int | 是 | 类目级别。 |
  | value | string | 是 | 类目名称。 |

  range\_values(Struct5)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | min | string | 是 | 对于区间类型的场景，表示最小值。 |
  | max | string | 是 | 对于区间类型的场景，表示最大值。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/dpa/store/dimension\_values/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer DAEAALpy3envCfdLiOZRerq2oopxMPmzJmgZOVXs1o27CRO8kHr5z2nyH6bXPxvZIadBeVYgOo1qg3rkXNVd13f9kqn%252F65sm%252Bev7G8h1VT9l3rDMl00q

    ```
    {
        "filtering": {
            "country": "CN",
            "flow_resources": [
                "FLOW_RESOURCE_SHOWAD"
            ],
            "dimension_category": 1,
            "dimensions": [
                {
                    "dimension_type": "CATEGORY",
                    "dimension_value": {
                        "list_values": [],
                        "tree_values": [
                            {
                                "id": 144,
                                "parent_id": 0,
                                "level": 1,
                                "value": "短视频"
                            },
                            {
                                "id": 1441317,
                                "parent_id": 144,
                                "level": 2,
                                "value": "情感"
                            },
                            {
                                "id": 1441321,
                                "parent_id": 144,
                                "level": 2,
                                "value": "时事"
                            },
                            {
                                "id": 14413175057,
                                "parent_id": 1441317,
                                "level": 3,
                                "value": "其他"
                            },
                            {
                                "id": 14413215116,
                                "parent_id": 1441321,
                                "level": 3,
                                "value": "国内"
                            }
                        ],
                        "range_values": []
                    }
                }
            ]
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码：200：成功、500：失败。 |
    | message | string | 返回描述。 |
    | data | integer | 商品数量。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": 223
    }
    ```
