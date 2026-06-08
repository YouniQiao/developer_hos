---
title: "查询账户充值记录"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-finance2-0000001286213492
format: md
upstream_id: monetize/promotion/marketing-api-finance2-0000001286213492
last_sync: 2026-06-07
sync_hash: 7c7b5697
---
# 查询账户充值记录

![](./img/note_3.0-zh-cn_14d3955a6ee1.png) 

<strong>您可以通过本接口查询广告账户充值记录信息，非中国大陆地区目前只支持查询直客的充值记录</strong>。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/finance/recharge/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/finance/recharge/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/finance/recharge/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户，此字段必填。 |
  | start\_date | string | 否 | 付款起始时间 yyyy-MM-dd。 |
  | end\_date | string | 否 | 付款结束时间yyyy-MM-dd，时间跨度最大一年。 |
  | page | integer | 是 | 搜索页码，取值范围1~200。 |
  | page\_size | integer | 是 | 一页展示数据数量，取值范围10~50。 |
  | recharge\_type | string | 是 | 充值类型，详见[充值类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section49461613103310)。 |
  | recharge\_status | string | 是 | 充值状态，详见[充值状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section2356202223315)。 |
  | receipt\_status | string | 是 | 发票状态，详见[发票状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1771132983314)。 |
  | recharge\_usage | string | 否 | 充值用途。不填默认查全部充值用途  详见[充值用途](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section8687552165920) |

  - <strong>请求示例</strong>

    GET ads/v1/finance/recharge/query

    HTTPS/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "start_date": "2020-03-08",
        "end_date": "2020-03-08",
        "page": 1,
        "page_size": 10,
        "recharge_type": "ALL_RECHARGE",
        "recharge_status": "ALL_RECHARGE",
        "receipt_status": "ALL_RECEIPT"
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | total | integer | 信息总数。 |
    | data | Struct1[] | 充值信息列表。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | recharge\_id | string | 充值订单ID。 |
    | recharge\_amount | bigdecimal | 充值金额。 |
    | currency | string | 币种。 |
    | created\_time | string | 订单创建时间，yyyy-MM-dd HH:mm:ss。 |
    | pay\_time | string | 订单支付时间，yyyy-MM-dd HH:mm:ss。 |
    | recharge\_type | string | 充值类型，详见[充值类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section49461613103310)。 |
    | recharge\_status | string | 充值状态，详见[充值状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section2356202223315)。 |
    | receipt\_status | string | 发票状态，详见[发票状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1771132983314)。 |
    | remark | string | 描述信息。 |
    | sign\_party | string | 签约主体  详见[签约主体](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section2048145892417) |
    | account\_type | string | 账户类型标识  详见[资金账户类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section8668656173214) |
    | media\_type | string | 适用媒体范围  详见[虚拟账户类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section16548154953218) |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "total": 18,
        "data": [
            {
                "receipt_status": "NOT_WRITE_RECEIPT",
                "recharge_id": "020210323111942000020000001",
                "recharge_amount": "111.00",
                "create_time": "2021-03-23 09:19:42",
                "recharge_type": "ONLINE_RECHARGE",
                "remark": "0",
                "currency": "CNY",
                "recharge_status": "OBLIGATION",
                "pay_time": ""
                "sign_party": "HW_SOFT",
                "account_type": "REBATE_ACCOUNT",
                "media_type": "GENERIC_ACCOUNT"
            },
            {
                "receipt_status": "NOT_WRITE_RECEIPT",
                "recharge_id": "020210308151816000020000025",
                "recharge_amount": "1.00",
                "create_time": "2021-03-08 13:18:17",
                "recharge_type": "ONLINE_RECHARGE",
                "remark": "充值啊",
                "currency": "CNY",
                "recharge_status": "OBLIGATION",
                "pay_time": ""
                "sign_party": "HW_SOFT",
                "account_type": "REBATE_ACCOUNT",
                "media_type": "GENERIC_ACCOUNT"
            }
        ]
    }
    ```
