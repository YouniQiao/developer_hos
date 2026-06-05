---
title: "关键词状态修改"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-keywords3-0000001338413333
format: md
---

# 关键词状态修改

您通过本接口可以批量修改同类型关键词的状态。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/keywords/status/update

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/keywords/status/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/keywords/status/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | keyword\_ids | long[] | 是 | 关键词id列表，最多100个。 |
  | keyword\_type | string | 是 | 关键词类型，详见[关键词类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section27631713113012)。 |
  | status | string | 是 | 关键词操作状态，详见[关键词状态操作类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section181642020203020)。 |

  - <strong>请求示例</strong>

    POST /ads/v1/promotion/keywords/status/update

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "keyword_ids": [
            302844,
            403232
        ],
        "keyword_type": "KEYWORD",
        "status": "KEYWORD_STATUS_DELETE"
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
        "code": "200",
        "data": [
            {
                "keyword_id": 2121,
                "error_code": 1122002008,
                "error_message": "无效的关键词id"
            },
            {
                "keyword_id": 38103295,
                "error_code": 1122002006,
                "error_message ": "不能删除全部关键词"
            },
            {
                "keyword_id": 38103296,
                "err_code": 1122002007,
                "error_msg": "关键词已删除"
            }
        ]
    }
    ```
