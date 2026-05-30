---
title: "查询分析工具提供商"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-tracking2-0000001286343126
---
# 查询分析工具提供商

您通过本接口可以查询分析工具提供商。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/analysis\_tool\_provider/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/analysis\_tool\_provider/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/analysis\_tool\_provider/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |

  - <strong>请求示例</strong>

    GET ads/v1/tools/analysis\_provider/query

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": 762191849506010800
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 分析工具提供商数据。 |

    Struct1定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | provider\_id | long | 工具提供商Id。 |
    | provider\_name | string | 工具提供商名称。 |
    | self\_attribution | string | 是否自归因，取值见[是否自归因](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section4161450315)枚举值。 |
    | available\_urls | String[] | 工具提供商的监测链接地址的前缀。 |
    | channel | string | 应用分析工具提供商channel。 |
    | is\_owner | string | 是否归属广告主 ，取值为：  YES  NO |
    | analyse\_tool\_type | string | 分析工具类型，取值见[分析工具类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section35342093211)枚举值。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": [
            {
                "provider_id": 1,
                "provider_name": "Adjust",
                "self_attribution": "NOT_SELF_ATTRIBUTION",
                "available_urls": "https://s2s.adjust.com;https://s2s.adjust.com/impression;",
                "is_owner": "NO",
                "analyse_tool_type": "PUBLIC"
            },
            {
                "provider_id": 2,
                "provider_name": "AppsFlyer",
                "self_attribution": "NOT_SELF_ATTRIBUTION",
                "available_urls": "https://app.appsflyer.com;https://impression.appsflyer.com;",
                "channel": "",
                "is_owner": "NO",
                "analyse_tool_type": "PUBLIC"
            },
            {
                "provider_id": 5,
                "provider_name": "Sizmek",
                "self_attribution": "NOT_SELF_ATTRIBUTION",
                "available_urls": "https://bsch.serving-sys.com;https://bs.serving-sys.com;",
                "is_owner": "NO",
                "analyse_tool_type": "PUBLIC"
            },
            {
                "provider_id": 17,
                "provider_name": "Airbridge",
                "self_attribution": "SELF_ATTRIBUTION",
                "channel": "Airbridge",
                "is_owner": "NO",
                "analyse_tool_type": "PUBLIC"
            }
        ]
    }
    ```
