---
title: "查询DPA任务销售国家列表"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-dpa13-0000001286023254
format: md
---

# 查询DPA任务销售国家列表

您通过本接口可以查询DPA任务销售国家列表。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/store/sale\_country/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/store/sale\_country/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/store/sale\_country/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct1 | 否 | 过滤条件。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | flow\_resources | string[] | 是 | 资源类型，详见[投放网络](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1178164162818)。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/dpa/store/sale\_country/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer DAEAALpy3envCfdLiOZRerq2oopxMPmzJmgZOVXs1o27CRO8kHr5z2nyH6bXPxvZIadBeVYgOo1qg3rkXNVd13f9kqn%252F65sm%252Bev7G8h1VT9l3rDMl00q

    ```
    {
        "filtering": {
            "flow_resources": [
                "FLOW_RESOURCE_SHOWAD"
            ]
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码, 200成功，其他失败。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 响应对象。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | country\_code | string | 销售国家编码，ISO 639-1 标准中的两位国家编码。 |
    | product\_counts | integer | 支持投放该国家的商品总数，商品来自于所有支持该销售国家的商品库。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "sale_country_list": [
                {
                    "country_code": "CN",
                    "product_counts": 0
                },
                {
                    "country_code": "CA",
                    "product_counts": 0
                }
            ]
        }
    }
    ```
