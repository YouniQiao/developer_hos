---
title: "查询计划"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-advertising-campaign2-0000001286335642
format: md
upstream_id: monetize/promotion/marketing-api-advertising-campaign2-0000001286335642
last_sync: 2026-06-07
sync_hash: 23db9a66
---
# 查询计划

您通过本接口查询计划。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/campaign/query

  俄罗斯 : https://ads-drru.cloud.huawei.ru/ads/v1/promotion/campaign/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/campaign/query
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
  | campaign\_name | string | 否 | 计划名称。  最大长度不得超过100；  不包含“^”、 “ |”。 |
  | campaign\_ids | string[] | 否 | 推广计划ID列表，最多100个。 |
  | updated\_begin\_time | string | 否 | 计划更新的开始时间，格式如下:"yyyy-MM-dd HH:mm:ss"。 |
  | updated\_end\_time | string | 否 | 计划更新的结束时间，格式如下:"yyyy-MM-dd HH:mm:ss"。 |
  | created\_begin\_time | string | 否 | 计划创建的开始时间，格式如下:"yyyy-MM-dd HH:mm:ss"。 |
  | created\_end\_time | string | 否 | 计划创建的结束时间，格式如下:"yyyy-MM-dd HH:mm:ss"。 |
  | show\_status | string | 否 | 计划状态，详见[计划界面显示的状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1996414411226)。 |
  | campaign\_type | string | 否 | 计划类型，详见[计划类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1119111358231)。 |

  - <strong>请求示例</strong>

    GET /ads/v1/promotion/campaign/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "page": "1",
        "page_size": "50",
        "filtering": {
            "campaign_type": "CAMPAIGN_TYPE_DISPLAY",
            "campaign_name": "计划-展示广告-国内"
        }
    }
    ```
  - <strong>响应字段</strong>

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 计划列表。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | total | integer | 总条数。 |
    | data | Struct2[] | 计划列表。 |

    data(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | campaign\_name | string | 计划名称。 |
    | campaign\_id | string | 计划ID。 |
    | campaign\_status | string | 操作状态，详见[计划/任务/创意操作状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section9341472176)。 |
    | campaign\_daily\_budget\_status | string | 计划日预算状态，详见[计划日预算状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section145031217132116)。 |
    | user\_balance\_status | string | 账户余额状态，详见[账户余额状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section16501634162212)。 |
    | product\_type | string | 推广产品 计划的product\_type与关联推广产品的product\_type需要保持一致，详见[推广产品类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section396354212216)。 |
    | tomorrow\_daily\_budget | integer | 次日计划日限额，不返回表示与当日计划日限额相同，详见[日限额说明](/docs/monetize/promotion/marketing-api-appendix5-0000001338486113#section433813381695)。 |
    | today\_daily\_budget | integer | 当日计划日限额，详见[日限额说明](/docs/monetize/promotion/marketing-api-appendix5-0000001338486113#section433813381695)。 |
    | created\_time | string | 计划创建的时间，格式如下:"yyyy-MM-dd HH:mm:ss"。 |
    | show\_status | string | 计划状态，详见[计划界面显示的状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1996414411226)。 |
    | campaign\_type | string | 计划类型，详见[计划类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1119111358231)。 |
    | flow\_resource | string | 投放网络，详见[投放网络](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1178164162818)。 |
    | sync\_flow\_resource\_searchad | string | 同时同步投放搜索广告网络。  YES  NO |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 1210,
            "data": [
                {
                    "campaign_name": "美丽传说营销节",
                    "product_type": "ANDROID_APP",
                    "user_balance_status": "ADVERTISER_BALANCE_NOT_EXCEED",
                    "campaign_status": "OPERATION_STATUS_ENABLE",
                    "campaign_daily_budget_status": "CAMPAIGN_DAILY_BUDGET_NOT_EXCEED",
                    "show_status": "CAMPAIGN_STATUS_DELETE",
                    "created_time": "2021-01-01 00:00:00",
                    "marketing_goal": "NO_GOAL",
                    "campaign_id": "35002310",
                    "today_daily_budget": "40"
                },
                {
                    "campaign_name": "憧憬人生",
                    "product_type": "ANDROID_APP",
                    "user_balance_status": "ADVERTISER_BALANCE_NOT_EXCEED",
                    "campaign_status": "OPERATION_STATUS_ENABLE",
                    "campaign_daily_budget_status": "CAMPAIGN_DAILY_BUDGET_NOT_EXCEED",
                    "campaign_id": "35002309",
                    "today_daily_budget": "200",
                    "created_time": "2021-04-07 09:00:00",
                    "marketing_goal": "NO_GOAL"
                }
            ]
        }
    }
    ```
