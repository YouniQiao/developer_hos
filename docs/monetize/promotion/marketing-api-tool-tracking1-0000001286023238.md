---
title: "查询转化跟踪目标"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-tracking1-0000001286023238
format: md
upstream_id: monetize/promotion/marketing-api-tool-tracking1-0000001286023238
last_sync: 2026-06-07
sync_hash: 1a9825be
upstream_hash: 508b9b453e4f
---

# 查询转化跟踪目标

您通过本接口可以查询转化跟踪目标，需要向运营申请转化指标权限。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/effect\_tracking/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/effect\_tracking/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/effect\_tracking/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct | 否 | 过滤条件，若此字段不传，或传空则视为无限制条件。 |
  | fields | string[] | 否 | 查询字段集合，用于指定返回参数的字段列表， 取值范围为接口返回的 list 中的字段；如不填写，则根据默认值进行返回。 |
  | page | integer | 是 | 搜索页码，大于等于1，默认值：1。 |
  | page\_size | integer | 是 | 一页展示数量，取值范围 10~50，默认值: 10。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>必选</strong> | <strong>描述</strong> |
  | product\_unique\_flag | string | 否 | 推广产品的唯一标识，应用是包名，网页是URL链接 最大长度是2048位。 |
  | effect\_name | string | 否 | 转换指标名称，最大长度255位，满足正则校验^[\w\u4e00-\u9fa5\_]\\{1,20\\}$。 |
  | effect\_type | string | 否 | 转化目标，取值见[转化目标](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section125615641916)枚举值。 |
  | product\_type | string | 否 | 推广产品，取值见[推广产品类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section396354212216)枚举值。 |

  - <strong>请求示例</strong>

    GET /ads/v1/tools/effect\_tracking/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "filtering": {
            "effect_name": "智能检测_reEngage"
        },
        "page": 1,
        "page_size": 10
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 转化跟踪指标列表。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>类型</strong> | <strong>参数名称</strong> | <strong>描述</strong> |
    | total | integer | 转化跟踪指标总条数。 |
    | data | Struct2[] | 转化跟踪指标列表。 |

    data(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | tracking\_id | long | 转化跟踪指标ID。 |
    | tracking\_status | string | 跟踪状态，详见[转化跟踪状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section118619176208)。 |
    | effect\_name | string | 转化跟踪指标名称。 |
    | effect\_type | string | 转化目标，详见[转化目标](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section125615641916)。 |
    | click\_tracking\_url | string | 点击监测地址。 |
    | imp\_tracking\_url | string | 曝光监测地址。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 1,
            "data": [
                {
                    "click_tracking_url": "https://s2s.adjust.com/fzso7s0?s2s=1&campaign=huawei_test__CID__&adgroup=__ADSETID__&creative=__ADID__&huawei_callback_url=__CALLBACK_URL__&huawei_callback_param=__CALLBACK__&huawei_request_id=__REQUESTID__&oaid_lower_md5=__OAID1__&huawei_campaign_id=__AAID1__222",
                    "tracking_status": "TRACKING_STATUS_NOT_ACTIVE",
                    "effect_name": "智能检测_reEngage",
                    "imp_tracking_url": "https://s2s.adjust.com/fzso7s0?s2s=1&campaign=huawei_test__CID__&adgroup=__ADSETID__&creative=__ADID__&huawei_callback_url=__CALLBACK_URL__&huawei_callback_param=__CALLBACK__&huawei_request_id=__REQUESTID__&oaid_lower_md5=__OAID1__&huawei_campaign_id=__AAID1__222ddd",
                    "effect_type": "TRACKING_RE_ENGAGE",
                    "tracking_id": 38105952
                }
            ]
        }
    }
    ```
