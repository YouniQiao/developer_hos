---
title: "查询商品库入库失败记录"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-dpa7-0000001338582885
format: md
upstream_id: monetize/promotion/marketing-api-tool-dpa7-0000001338582885
last_sync: 2026-06-07
sync_hash: 6696dfbb
---
# 查询商品库入库失败记录

您通过本接口可以查询商品库入库失败记录。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/product/failure\_record/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/product/failure\_record/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/product/failure\_record/query
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct1 | 是 | 过滤条件(DPA性能要求,必须至少传一个store\_id)。 |
  | page | integer | 是 | 搜索页码，大于等于1，默认值：1。 |
  | page\_size | integer | 是 | 一页展示数量，取值范围 10~50，默认值: 10。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | store\_ids | long[] | 是 | 商品库Id，最多50个。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/dpa/product/failure\_record/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer DAEAALpy3envCfdLiOZRerq2oopxMPmzJmgZOVXs1o27CRO8kHr5z2nyH6bXPxvZIadBeVYgOo1qg3rkXNVd13f9kqn%252F65sm%252Bev7G8h1VT9l3rDMl00q

    ```
    {
        "filtering": {
            "store_ids": [
                848986076793265200,
                839098229214927900
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
    | data | Struct1 | 商品库入库失败记录。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | total | integer | 总条数。 |
    | data | Struct2[] | 数据列表。 |

    data(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | product\_id | string | 商品ID。 |
    | record\_time | string | 记录入库时间，格式:"yyyy-MM-dd HH:mm:ss"。 |
    | failure\_reason | string | 失败原因。 |
    | audit\_failed\_countries | string[] | 机审失败国家，支持多个国家，ISO 639-1 标准中的两位国家编码。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": 200,
        "data": {
            "total": 2,
            "data": [
                {
                    "product_id": "95214",
                    "record_time": "2022-04-12 06:00:00",
                    "failure_reason": "Field verification failed. {Mandatory fields cannot be empty: [\"country\", \"releaseCountry\", \"language\"]}",
                    "audit_failed_countries": [
                        "CA"
                    ]
                },
                {
                    "product_id": "95213",
                    "record_time": "2022-04-12 06:00:00",
                    "failure_reason": "Field verification failed. {Mandatory fields cannot be empty: [\"country\", \"releaseCountry\", \"language\"]}",
                    "audit_failed_countries": [
                        "CA",
                        "CN"
                    ]
                }
            ]
        }
    }
    ```
