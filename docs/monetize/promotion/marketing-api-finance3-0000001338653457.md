---
title: "查询资金账户日结算明细"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-finance3-0000001338653457
format: md
upstream_id: monetize/promotion/marketing-api-finance3-0000001338653457
last_sync: 2026-06-07
sync_hash: cddc4b9c
---
# 查询资金账户日结算明细

您通过本接口可以查询广告账户的日结算明细，包括现金、赠送、返利账户分别支出的信息。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/finance/consume/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/finance/consume/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/finance/consume/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，经理账户登录时，则此字段必填；当前操作的华为账号支持多个广告主账户时，此字段必填。 |
  | agency\_id | long | 否 | 服务商ID，服务商登录时，可选填写该字段  1、若一级服务商登录：  i.传自身或不传，则查询一级服务商的所有消耗（同时不传advertiser\_id）  ii.传子客服务商，则查询子客服务商的所有消耗（同时不传advertiser\_id）  2、若子客服务商登录：  i.传自身或不传，则查询子客服务商的所有消耗（同时不传advertiser\_id） |
  | start\_date | string | 是 | 起始时间 yyyy-MM-dd。 |
  | end\_date | string | 是 | 结束时间 yyyy-MM-dd，时间跨度最大一年。 |
  | account\_type | string | 是 | 账户类型标识，详见[资金账户类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section8668656173214)。 |
  | account\_media\_type | string | 否 | 虚拟账户类型，详见[虚拟账户类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section16548154953218)。 |
  | sign\_party | string | 否 | 签约主体（不传查全部），详见[签约主体](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section2048145892417)。 |

  - <strong>请求示例</strong>

    GET ads/v1/finance/consume/query

    HTTPS/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": 416544351321,
        "start_date": "2020-03-05",
        "end_date": "2020-03-05",
        "account_type": "ALL_ACCOUNT"
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1[] | 响应数据。 |

    Struct1定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | date | string | 日期 yyyy-MM-dd。 |
    | consume | bigdecimal | 当日支出。 |
    | currency | string | 币种。 |
    | consume\_detail | Struct2[] | 分账户支出信息。 |
    | account\_media\_type | string | 适用媒体范围  详见[虚拟账户类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section16548154953218) |

    Struct2定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | account\_type | string | 账户类型标识，详见[资金账户类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section8668656173214)。 |
    | consume | bigdecimal | 当日支出。 |
    | currency | string | 币种。 |
    | sign\_party | string | 签约主体（不传查全部），详见[签约主体](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#ZH-CN_TOPIC_0000001174597591__section9556743173214)。 |
    | gift\_type | string | 赠送金类型，详见[赠送金类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section133552313316)。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": [
            {
                "date": "2020-10-14",
                "consume": "50.01",
                "currency": "CNY",
                "consume_detail": [
                    {
                        "account_type": "CASH_ACCOUNT",
                        "consume": "50.01",
                        "currency": "CNY"
                    }
                ]
            },
            {
                "date": "2020-10-19",
                "consume": "10029.06",
                "currency": "CNY",
                "consume_detail": [
                    {
                        "account_type": "REBATE_ACCOUNT",
                        "consume": "429.03",
                        "currency": "CNY"
                    },
                    {
                        "account_type": "CASH_ACCOUNT",
                        "consume": "9600.03",
                        "currency": "CNY"
                    }
                ]
            },
            {
                "date": "2020-10-20",
                "consume": "2967.03",
                "currency": "CNY",
                "consume_detail": [
                    {
                        "account_type": "CASH_ACCOUNT",
                        "consume": "2967.03",
                        "currency": "CNY"
                    }
                ]
            }
        ]
    }
    ```
