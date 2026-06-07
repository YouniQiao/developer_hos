---
title: "查询关键词"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-keywords1-0000001286373436
format: md
---

# 查询关键词

您通过本接口可以查询关键词信息，包括关键词和否词信息。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/keywords/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/keywords/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/keywords/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | page | int | 是 | 页数 取值范围1-10000。 |
  | page\_size | int | 是 | 每页数量 取值范围10-50。 |
  | filtering | string | 否 | 过滤条件，若此字段不传，或传空则视为无限制条件。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | flow\_resources | string[] | 否 | 投放网络。 |
  | keyword\_ids | long[] | 否 | 关键词ID。 |
  | status | string | 否 | 关键词状态类型，详见[关键词查询状态类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section595274716303)。 |
  | keyword\_type | string | 否 | 关键词类型，详见[关键词类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section27631713113012)，不传默认是KEYWORD。 |
  | app\_id | string | 否 | 应用市场的应用id。 |
  | adgroup\_id | string | 否 | 任务id。 |
  | adgroup\_name | string | 否 | 任务名称。 |
  | campaign\_id | string | 否 | 计划id。 |
  | campaign\_name | string | 否 | 计划名称。 |
  | keyword\_name | string | 否 | 词名称，模糊查询。 |

  - <strong>请求示例</strong>

    GET /ads/v1/promotion/keywords/query

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "page": 1,
        "page_size": 10,
        "filtering": {
            "flow_resources": [
                "FLOW_RESOURCE_SHOWAD"
            ],
            "keyword": "keyword_name_test"
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 操作日志响应结果。 |

    Struct1定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | total | int | 总数。 |
    | data | Struct2[] | 操作日志列表。 |

    Struct2定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | keyword\_id | string | 关键词id。 |
    | keyword\_name | string | 关键词名称。 |
    | campaign\_id | string | 计划id。 |
    | adgroup\_id | Long | 任务id。 |
    | keyword\_status | string | 关键词当前状态，详见[关键词当前状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section511813407306)。 |
    | approved\_status | string | 关键词审核状态，详见[关键词审核状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section17921103403010)。 |
    | support\_campaign | string | 否定词是否适用于计划下所有任务。  YES：适用该广告计划下的所有任务；  NO：仅适用当前广告，默认值。 |
    | association\_object\_level | string | 关键词关联对象所属层级，详见[关键词查询状态类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section595274716303)。 |
    | match\_type | string | 【匹配模式】MATCH\_TYPE\_EXACT：精确匹配。 |
    | price\_type | string | 出价方式，详见[付费方式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1158173811189)。 |
    | price | BigDecimal | 搜索排名出价，如果不填使用任务上的价格。 |
    | created\_time | string | 创建时间，格式yyyy-MM-dd HH:mm:ss。 |
    | updated\_time | string | 更新时间，格式yyyy-MM-dd HH:mm:ss。 |
    | keyword\_type | string | 关键词类型，详见[关键词类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section27631713113012)。 |
    | adgroup\_name | string | 任务名称。 |
    | campaign\_name | string | 计划名称。 |
    | app\_id | string | 应用市场应用id。 |
    | app\_name | string | 推广应用名称。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 981,
            "data": [
                {
                    "keyword_id": "3028832",
                    "keyword": "ces",
                    "campaign_Id": "8028832",
                    "adgroup_id": 55045298,
                    "match_type": "KEYWORD_NAGATIVE",
                    "created_time": "2021-08-06 06:04:27",
                    "updated_time": "2021-09-02 17:12:36"
                }
            ]
        }
    }
    ```
