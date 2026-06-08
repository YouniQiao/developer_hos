---
title: "编辑商品组"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-advertising-shopping-group2-0000001338379169
format: md
upstream_id: monetize/promotion/marketing-api-advertising-shopping-group2-0000001338379169
last_sync: 2026-06-07
sync_hash: 7fd0f91b
---
# 编辑商品组

您通过本接口可以编辑商品组。仅支持海外展示广告网络的商品类广告可以修改。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/item\_group/update

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/item\_group/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/item\_group/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | adgroup\_id | long | 是 | 任务ID。 |
  | item\_groups | Struct1 | 是 | 商品分组以及出价信息，需要传递根节点。 |

  item\_groups(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | dimension\_type | string | 是 | 商品分组的细分依据，详见[查询商品库筛选条件取值](/docs/monetize/promotion/marketing-api-tool-dpa2-0000001338502485)。 |
  | dimension\_value | string | 是 | 商品分组的细分依据取值，详见[查询商品库筛选条件取值](/docs/monetize/promotion/marketing-api-tool-dpa2-0000001338502485)。 |
  | price | float | 否 | 商品分组的出价。 |
  | status | string | 否 | 商品分组状态，详见[商品分组状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section7332135573017)，ACTIVE（默认值）。 |
  | child\_item\_groups | Struct1[] | 否 | 商品分组节点的下级节点。 |

  - <strong>请求示例</strong>

    POST /ads/v1/promotion/item\_group/update

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "adgroup_id": 46062000,
        "item_groups": {
            "dimension_value": "All",
            "dimension_type": "All",
            "child_item_groups": [
                {
                    "dimension": "CATEGORY",
                    "dimension_value": "短视频>生活>日常",
                    "status": "ACTIVE",
                    "child_item_groups": [
                        {
                            "dimension": "BRANDNAME",
                            "dimension_value": "1shopify01ThisIsHw",
                            "status": "ACTIVE",
                            "price": 2345
                        }
                    ]
                }
            ]
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
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "adgroup_name": "shopping-20220526-竞价",
            "adgroup_id": 46062000,
            "campaign_name": "无明确目的导向-商品广告-20220526-20:55:01",
            "campaign_id": "30055999",
            "item_groups": [
                {
                    "parent_item_group_id": "",
                    "item_group_id": "0000000001",
                    "dimension_type": "All",
                    "dimension_value": "All",
                    "is_leaf": "false",
                    "status": "ACTIVE"
                },
                {
                    "parent_item_group_id": "0000000001",
                    "item_group_id": "0000000002",
                    "dimension": "CATEGORY",
                    "dimension_value": "短视频>生活>日常",
                    "price": 2345,
                    "is_leaf": "false",
                    "status": "ACTIVE"
                },
                {
                    "parent_item_group_id": "0000000002",
                    "item_group_id": "0000000003",
                    "dimension_type": "BRANDNAME",
                    "dimension_value": "1shopify01ThisIsHw",
                    "price": 2345,
                    "is_leaf": true,
                    "status": "ACTIVE"
                },
                {
                    "parent_item_group_id": "0000000002",
                    "item_group_id": "0000000004",
                    "dimension_type": "BRANDNAME",
                    "dimension_value": "Others",
                    "price": 222,
                    "is_leaf": true,
                    "status": "SUSPEND"
                },
                {
                    "parent_item_group_id": "0000000001",
                    "item_group_id": "0000000005",
                    "dimension_type": "CATEGORY",
                    "dimension_value": "Others",
                    "price": 222,
                    "is_leaf": true,
                    "status": "SUSPEND"
                }
            ]
        }
    }
    ```
