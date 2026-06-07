---
title: "查询商品组信息"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-advertising-shopping-group1-0000001338498649
format: md
---

# 查询商品组信息

您通过本接口可以查询商品组信息。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/item\_group/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/item\_group/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/item\_group/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | page | integer | 是 | 搜索页码，取值范围1~10000。 |
  | page\_size | integer | 是 | 一页展示数量，取值范围 10~50。 |
  | filtering | Struct1 | 否 | 过滤条件，若此字段不传，或传空则视为无限制条件。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | adgroup\_name | string | 否 | 任务名称。 |
  | adgroup\_id | long | 否 | 任务ID。 |
  | campaign\_name | string | 否 | 计划名称。 |
  | campaign\_id | string | 否 | 计划ID。 |

  - <strong>请求示例</strong>

    GET /ads/v1/promotion/item\_group/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "page": 1,
        "page_size": 50,
        "filtering": {
            "adgroup_id": 46062590
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 响应数据。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | total | integer | 总条数。 |
    | data | Struct2[] | DPA任务商品组信息。 |

    data(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | adgroup\_name | string | 任务名称。 |
    | adgroup\_id | long | 任务ID。 |
    | campaign\_name | string | 计划名称。 |
    | campaign\_id | string | 计划ID。 |
    | item\_groups | Struct3[] | 商品分组以及出价信息；DPA任务中的商品分组为树形结构。 |

    item\_groups(Struct3)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | parent\_item\_group\_id | string | 商品分组父节点Id，根节点该字段为“”。 |
    | item\_group\_id | string | 商品分组Id。 |
    | dimension\_type | string | 商品分组的细分依据，详见[查询商品库筛选条件取值](/docs/monetize/promotion/marketing-api-tool-dpa2-0000001338502485)。 |
    | dimension\_value | string | 商品分组的细分依据取值；  根节点名称固定为All；  商品分组同级的排他商品组名称固定为Others。 |
    | price | float | 商品分组的出价。 |
    | is\_leaf | boolean | 商品分组是否为叶子节点，只有叶子节点才允许设置出价。 |
    | status | string | 商品分组状态，详见[商品分组状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section7332135573017)。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 1,
            "data": [
                {
                    "campaign_name": "销售转化-商品广告-20220530-19:19:19",
                    "item_groups": [
                        {
                            "dimension_value": "All",
                            "price": 123,
                            "item_group_id": "0000000001",
                            "is_leaf": true,
                            "dimension_type": "All",
                            "status": "ACTIVE"
                        }
                    ],
                    "adgroup_id": 46062590,
                    "adgroup_name": "shopping-20220530-竞价",
                    "campaign_id": "30056692"
                }
            ]
        }
    }
    ```
