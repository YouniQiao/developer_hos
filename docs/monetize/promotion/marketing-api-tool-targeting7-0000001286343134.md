---
title: "查询定向字典"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-targeting7-0000001286343134
format: md
---

# 查询定向字典

您通过本接口可以查询定向字典。

- 其中定向包中的地域定向通过[海外地域字典数据](https://developer.huawei.com/consumer/cn/doc/promotion/attachments-0000001532611905#ZH-CN_TOPIC_0000001532611905__li66991118709)提供。
- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dictionary/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dictionary/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dictionary/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | targeting\_list | string[] | 是 | 用户查询哪些定向包集合，详见[定向包集合](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix5-0000001338486113#section1755261710100)。 |
  | language | string | 否 | 语言码，支持zh\_CN,en\_US,ru\_RU三种。 |

  - <strong>请求示例</strong>

    GET /ads/v1/tools/dicationary/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "language": "zh_CN",
        "targeting_list": [
            "pre_define_audience",
            "not_pre_define_audience",
            "gender",
            "age",
            "series_type",
            "device_price",
            "app_category",
            "network_type",
            "pre_define_audience",
            "not_pre_define_audience",
            "media_app_category",
            "carrier",
            "language",
            "app_interest",
        ]
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 定向字典列表。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | tree\_targeting\_map | Map&lt;string, Struct2[]&gt; | 树状结构定向数据。  Map中的Key为：app\_category、series\_type、carrier、location\_category。 |
    | linear\_targeting\_map | Map&lt;string, Struct3[]&gt; | 线状结构定向数据。  Map中的Key为：gender、age、device\_price、network\_type、pre\_define\_audience、not\_pre\_define\_audience、media\_app\_category、app\_interest、language。 |

    tree\_targeting\_map (Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | id | string | 元素ID。 |
    | pid | string | 父节点元素ID。 |
    | label | string | 显示的内容。 |
    | value | string | 元素的值。 |

    linear\_targeting\_map (Struct3)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | id | string | 元素ID。 |
    | label | string | 显示的内容。 |
    | value | string | 元素的值。 |
    | additional | string | pre\_define\_audience、not\_pre\_define\_audience定向存在，内容为“公共”、“专属”、“私有”，展示时使用。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "linear_targeting_map": {
                "gender": [
                    {
                        "label": "男",
                        "value": "0"
                    },
                    {
                        "label": "女",
                        "value": "1"
                    }
                ],
                "age": [
                    {
                        "label": "18~23岁",
                        "value": "1"
                    },
                    {
                        "label": "24~34岁",
                        "value": "2"
                    },
                    {
                        "label": "35~44岁",
                        "value": "3"
                    },
                    {
                        "label": "45~54岁",
                        "value": "4"
                    },
                    {
                        "label": "55岁及以上",
                        "value": "5"
                    }
                ]
            }
        }
    }
    ```
