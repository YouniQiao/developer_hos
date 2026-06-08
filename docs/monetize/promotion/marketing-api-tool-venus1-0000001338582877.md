---
title: "查询维纳斯落地页列表"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-venus1-0000001338582877
format: md
upstream_id: monetize/promotion/marketing-api-tool-venus1-0000001338582877
last_sync: 2026-06-07
sync_hash: 093d0e64
---
# 查询维纳斯落地页列表

您通过本接口可以获取维纳斯落地页列表。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/venus\_list/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/venus\_list/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/venus\_list/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | string | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct1 | 否 | 过滤条件，若此字段不传，或传空则视为无限制条件。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | country\_code | string | 否 | 商品广告任务属性中的国家码，当landing\_page\_style = VENUS\_STYLE\_DYNAMIC时必填。 |
  | landing\_page\_style | string | 否 | 落地页风格，详见[维纳斯落地页风格类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1383720253110)。 |
  | landing\_page\_type | string | 否 | 落地页类型，详见[维纳斯落地页类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section5421169153111)。 |

  - <strong>请求示例</strong>

    GET /ads/v1/promotion/venus\_list/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer DAEAALpy3envCfdLiOZRerq2oopxMPmzJmgZOVXs1o27CRO8kHr5z2nyH6bXPxvZIadBeVYgOo1qg3rkXNVd13f9kqn%252F65sm%252Bev7G8h1VT9l3rDMl00q

    ```
    {
        "filtering": {
            "country_code": "",
            "landing_page_style": "VENUS_STYLE_DYNAMIC",
            "landing_page_type": "LANDING_PAGE_TYPE_WEB"
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码，200成功，其他失败。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 响应数据。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | landing\_page\_id | string | 维纳斯落地页id。 |
    | landing\_page\_name | string | 维纳斯落地页名称。 |
    | landing\_page\_url | string | 落地页链接地址。 |
    | landing\_page\_style | string | 落地页风格，详见[维纳斯落地页风格类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1383720253110)。 |
    | landing\_page\_type | string | 落地页类型，详见[维纳斯落地页类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section5421169153111)。 |
    | create\_time | string | 落地页创建时间。 |
    | update\_time | string | 落地页最后更新时间。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK
