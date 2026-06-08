---
title: "关键词出价修改"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-keywords2-0000001338613217
format: md
upstream_id: monetize/promotion/marketing-api-keywords2-0000001338613217
last_sync: 2026-06-07
sync_hash: eb3deaee
---
# 关键词出价修改

您通过本接口可以批量修改关键词的出价信息。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/keywords/price/update

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/keywords/price/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/keywords/price/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | keywords | Struct1[] | 是 | 关键词信息列表，最多100条。 |

  keywords(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | keyword\_id | long | 是 | 关键词id。 |
  | price | bigDecimal | 是 | 关键词出价，出价大于版位底价，小于日预算。 |

  - <strong>请求示例</strong>

    POST /ads/v1/promotion/keywords/price/update

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "keywords": [
            {
                "keyword_id": 3088872,
                "price": 100
            }
        ]
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1[] | 失败时返回的错误信息列表，如果无错误则不返回该数据。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | keyword\_id | long | 更新失败的关键词ID。 |
    | error\_code | string | 错误码。 |
    | error\_message | string | 失败提示信息。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": 200,
        "data": [
            {
                "keyword_id": 40822332,
                "error_code": "10230921",
                "error_message": ""
            }
        ]
    }
    ```
