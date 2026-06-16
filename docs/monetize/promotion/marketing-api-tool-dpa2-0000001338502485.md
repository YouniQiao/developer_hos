---
title: "查询商品库筛选条件取值"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-dpa2-0000001338502485
format: md
upstream_id: monetize/promotion/marketing-api-tool-dpa2-0000001338502485
last_sync: 2026-06-07
sync_hash: 8d8c4a1a
---
# 查询商品库筛选条件取值

您通过本接口查询商品库筛选条件。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/store/dimensions/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/store/dimensions/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/store/dimensions/query
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct1 | 是 | 过滤条件。 |

  filtering （Struct1）参数

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | country | string | 是 | 商品库投放任务的销售国家。 |
  | flow\_resources | string[] | 是 | 资源类型，详见[投放网络](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#投放网络)。 |
  | dimension\_category | String | 是 | 筛选条件类别，取值见[筛选条件类别](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#筛选条件类别)枚举值。 |
  | dimension\_type | String[] | 否 | 商品广告投放过滤维度，详见[商品广告投放过滤维度](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#商品广告投放过滤维度)。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/dpa/store/dimensions/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "filtering": {
            "flow_resource": [
                "FLOW_RESOURCE_SHOWAD"
            ],
            "country": "CN",
            "dimension_category": "DPA_DIMENSION",
            "dimension_type": "CATEGORY"
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 指定对象统计数据。 |

    Struct1参数

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | dimension\_type | string | 商品过滤维度，详见[商品过滤维度](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#商品过滤维度)。 |
    | dimension\_values | Struct2 | 商品库中的筛选条件列表。 |

    Struct2参数

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | list\_values | string[] | 筛选条件的取值，对于下拉取值的场景，返回取值列表（同样支持单值）。 |
    | tree\_values | Struct3[] | 筛选条件的取值，对于树形结构取值的场景，返回树形结构的数据。 |

    tree\_values(Struct3)参数

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | id | long | 类目Id。 |
    | parent\_id | long | 父级类目Id。 |
    | level | int | 类目级别。 |
    | name | string | 类目名称。 |
    | value | string | 从父节点到叶节点蛇形结构。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    \\{

    ```
        "code": "200",
        "data": [
            {
                "dimension_type": "CATEGORY",
                "dimension_values": {
                    "list_values": [],
                    "tree_values": [
                        {
                            "id": 144,
                            "parent_id": 0,
                            "level": 1,
                            "name": "短视频",
                            "value": "短视频"
                        },
                        {
                            "id": 1441303,
                            "parent_id": 144,
                            "level": 2,
                            "name": "娱乐",
                            "value": "短视频 > 娱乐"
                        },
                        {
                            "id": 14413034841,
                            "parent_id": 1441303,
                            "level": 3,
                            "name": "明星生活",
                            "value": "短视频 > 娱乐 > 明星生活"
                        },
                        {
                            "id": 1441317,
                            "parent_id": 144,
                            "level": 2,
                            "name": "情感",
                            "value": "短视频 > 情感"
                        }
                    ]
                }
            }
        ]
    }
    ```
