---
title: "查询账户余额"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-finance1-0000001286533062
format: md
upstream_id: monetize/promotion/marketing-api-finance1-0000001286533062
last_sync: 2026-06-07
sync_hash: d3d23e6d
---
# 查询账户余额

您通过本接口可以查询广告账户的余额，包括现金、赠送、返利账户分别有多少钱和当日的支出数据。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/finance/balance/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/finance/balance/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/finance/balance/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，经理账户登录时，则此字段必填；当前操作的华为账号支持多个广告主账户时，此字段必填。 |

  - <strong>请求示例</strong>

    GET ads/v1/finance/balance/query HTTPS/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": 1534653132156
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1[] | 响应数据。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | valid\_balance | bigdecimal | 可用余额。 |
    | balance | bigdecimal | 余额。 |
    | consume | bigdecimal | 当日支出金额。 |
    | account\_type | string | 账户类型标识，详见[资金账户类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section8668656173214)。 |
    | currency | string | 币种。 |
    | balance\_detail | Struct2[] | 余额详情 |
    | consume\_detail | Struct3[] | 当日支出金额详情 |

    Struct2定义

    |  |  |  |
    | --- | --- | --- |
    | balance | string | 余额 |
    | media\_type | string | 适用媒体范围  详见[虚拟账户类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section16548154953218) |
    | valid\_balance | string | 可用余额 |

    Struct3定义

    |  |  |  |
    | --- | --- | --- |
    | media\_type | string | 适用媒体范围  详见[虚拟账户类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section16548154953218) |
    | consume | string | 支出金额 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": [
            {
                "account_type": "CASH_ACCOUNT",
                "balance": "2000100705.00",
                "consume": "0.00",
                "currency": "CNY",
                "valid_balance": "2000100433.28"
            },
            {
                "account_type": "GIFT_ACCOUNT",
                "balance": "0.00",
                "consume": "0.00",
                "currency": "CNY",
                "valid_balance": "0.00",
                "balance_detail": [{
                    "balance": "0.00",
                    "media_type": "GENERIC_ACCOUNT",
                    "valid_balance": "0.00"
                    },
                    {
                    "balance": "0.00",
                    "media_type": "SELF_ACCOUNT",
                    "valid_balance": "0.00"
                    }
                ],
                "consume_detail": [{
                    "media_type": "GENERIC_ACCOUNT",
                    "consume": "0.00"
                    },
                    {
                    "media_type": "SELF_ACCOUNT",
                    "consume": "0.00"
                    }
                ]
            },
            {
                "account_type": "REBATE_ACCOUNT",
                "balance": "0.00",
                "consume": "0.00",
                "currency": "CNY",
                "valid_balance": "0.00"
            }
        ]
    }
    ```
