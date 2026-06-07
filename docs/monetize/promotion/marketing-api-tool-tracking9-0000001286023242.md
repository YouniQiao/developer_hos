---
title: "查询关联关系分析密钥"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-tracking9-0000001286023242
format: md
---

# 查询关联关系分析密钥

您通过本接口可以查询关联关系分析密钥。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/analysis\_association/secret\_key/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/analysis\_association/secret\_key/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/analysis\_association/secret\_key/query
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
  | tracking\_url\_id | String | 是 | 分析工具关联关系Id。 |

  - <strong>请求示例</strong>

    POST ads/v1/tools/analysis\_association/secret\_key/query

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "filtering": {
            "tracking_url_id": " 48102139"
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | string | 关联分析工具密钥。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": " 3cAvz/3h1LQ1pk28Q1jO2emPZtQUaVxRR8mmdpfOdY4= "
    }
    ```
