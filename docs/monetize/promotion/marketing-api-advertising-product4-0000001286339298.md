---
title: "查询应用详情"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-advertising-product4-0000001286339298
format: md
---

# 查询应用详情

您通过本接口可以查询应用详情。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/app\_detail/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/app\_detail/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/app\_detail/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct1 | 是 | 过滤条件。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | app\_id | string | 是 | 华为应用市场的应用 ID。 |

  - <strong>请求示例</strong>

    GET /ads/v1/promotion/app\_detail/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization：Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "filtering": {
            "app_id": "C100182137"
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码，200成功，其他失败。 |
    | message | string | 返回描述。 |
    | data | Struct1[] | 关键词列表。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | app\_id | string | 华为应用市场应用 ID。 |
    | package\_name | string | 应用包名。 |
    | product\_name | string | 应用名称。 |
    | icon\_url | string | 应用图标地址。 |
    | description | string | 应用描述/介绍。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK
