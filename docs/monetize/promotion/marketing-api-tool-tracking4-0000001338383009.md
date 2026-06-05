---
title: "查询分析工具关联关系"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-tracking4-0000001338383009
format: md
---

# 查询分析工具关联关系

您通过本接口可以查询分析工具关联关系。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/analysis\_association/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/analysis\_association/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/analysis\_association/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct | 否 | 过滤条件，若此字段不传，或传空则视为无限制条件。 |
  | fields | string[] | 否 | 查询字段集合，用于指定返回参数的字段列表， 取值范围为接口返回的 list 中的字段；如不填写，则根据默认值进行返回。 |
  | page | integer | 否 | 搜索页码，大于等于1，默认值：1。 |
  | page\_size | integer | 否 | 一页展示数量，取值范围 10~50，默认值: 10。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | tracking\_url\_id | string | 是 | 分析工具关联关系Id。 |
  | app\_id | string | 否 | 推广应用Id（华为应用市场应用Id，大写的C开头），与package\_name二选一；  可以使用推广应用响应中的app\_id填写。 |
  | provider\_id | long | 否 | 工具提供商Id，通过[查询分析工具提供商](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-tracking2-0000001286343126)接口获取。 |
  | provider\_name | string | 否 | 工具提供商名称。 |

  - <strong>请求示例</strong>

    GET ads/v1/tools/analysis\_association/query

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": 504217979710404200,
        "filtering": {
            "app_id": "C101552275"
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
    | data | Struct1 | 分析工具关联关系。 |

    Struct1定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | total | integer | 总条数。 |
    | data | Struct2[] | 关联分析工具列表。 |

    data(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | tracking\_url\_id | string | 分析工具关联关系Id。 |
    | provider\_id | long | 工具提供商Id。 |
    | provider\_name | string | 工具提供商名称。 |
    | product\_type | string | 推广产品，详见[推广产品类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section396354212216)定义。 |
    | product\_name | string | 产品名称。 |
    | product\_unique\_flag | string | 产品标识，应用类型为App时该字段为应用包名。 |
    | app\_id | string | 华为应用市场App ID，应用类型为App时该字段填写。 |
    | click\_tracking\_url | string | 点击监测链接。 |
    | imp\_tracking\_url | string | 曝光监测链接。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 1,
            "data": [
                {
                    "click_tracking_url": "https://s2s.adjust.com/fzso7s0?s2s=1&campaign=huawei_test__CID__&adgroup=__ADSETID__&creative=__ADID__&huawei_callback_url=__CALLBACK_URL__&huawei_callback_param=__CALLBACK__&huawei_request_id=__REQUESTID__&oaid_lower_md5=__OAID1__&huawei_campaign_id=__AAID1__&binaj1008",
                    "product_type": "ANDROID_APP",
                    "imp_tracking_url": "https://s2s.adjust.com/fzso7s0?s2s=1&campaign=huawei_test__CID__&adgroup=__ADSETID__&creative=__ADID__&huawei_callback_url=__CALLBACK_URL__&huawei_callback_param=__CALLBACK__&huawei_request_id=__REQUESTID__&oaid_lower_md5=__OAID1__&huawei_campaign_id=__AAID1__&bianji1008",
                    "provider_id": 1,
                    "product_unique_flag": "cn.sample",
                    "tracking_url_id": "75001324",
                    "provider_name": "Adjust",
                    "product_name": "示例汽车（C000000000）"
                }
            ]
        }
    }
    ```
