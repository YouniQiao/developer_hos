---
title: "创建任务"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-advertising-task1-0000001286337462
format: md
---

# 创建任务

您通过本接口创建任务。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/adgroup/create

  俄罗斯 : https://ads-drru.cloud.huawei.ru/ads/v1/promotion/adgroup/create

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/adgroup/create
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | adgroup\_name | string | 是 | 任务名称。  最大长度不得超100；  不能使用“^”,“|”特殊字符；  不同计划下的任务不能重名。 |
  | campaign\_id | string | 是 | 计划ID，详见[创建计划](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-advertising-campaign1-0000001338366185)。 |
  | targeting\_package\_id | long | 是 | 定向包ID，即创建定向包接口中返回的targeting\_id，详见[创建定向包](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-targeting1-0000001338502481)。 |
  | targeting\_package\_scope | string | 是 | 定向类型，详见[定向类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1090712128282)。  campaign\_type=CAMPAIGN\_TYPE\_SHOPPING该字段仅支持PRIVATE。 |
  | product\_id | long | 是 | 推广产品ID，即创建推广产品中接口中返回的product\_id。  注：任务上非App的产品ID和任务ID为一对一对应关系。  计划和产品上的产品类型需一致，详见[创建推广产品](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-advertising-product1-0000001338259305)。 |
  | adgroup\_begin\_date | string | 是 | 投放开始日期，格式：YYYY-MM-DD；如：2020-01-01。  注：开始时间不能小于当前时间，开始时间不能大于结束时间；  开始时间和结束时间差值需要在查询版位获得的投放此版位的任务最短和最长投放时间范围之内。 |
  | adgroup\_end\_date | string | 否 | 投放结束日期，格式：YYYY-MM-DD；为空表示长期投放；如：2020-01-02。  注：若存在结束时间，那么结束时间不能小于开始时间。 |
  | time\_period\_type | string | 是 | 时间段类型。  可以从三种类型中根据自己需要选择一个。  版位查询到的is\_support\_time\_period要有权限  time\_period为空时，时间段类型不得为TIME\_PERIOD\_DAY\_SPECIFIC或TIME\_PERIOD\_HOUR\_SPECIFIC  详见[时间段类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section548205815206)。 |
  | time\_period | string | 否 | time\_period\_type为TIME\_PERIOD\_DAY\_SPECIFIC、TIME\_PERIOD\_HOUR\_SPECIFIC时必填。  只能输入0和1，最大336位；  按照特定时间段投放时，01010100010010……表示指定特殊时段，半小时为粒度，用0、1标识是否选中，1为选中，0为未选中。一天24小时，即每天24\*2=48位，共7天，即共48\*7=336位；  如果time\_period\_type为TIME\_PERIOD\_ALL，则表示一周内每天的特定小时，需要每48个值都重复。  注：时间段要与任务的日期区间有交集。  例：如果任务开始时间是2020-06-22（周一），结束时间是2020-06-24（周三），且选择的类型是TIME\_PERIOD\_DAY\_SPECIFIC或TIME\_PERIOD\_HOUR\_SPECIFIC，那time\_period的入参需要与任务的时间段有交集；若用户想在22/23/24的每天早上6点到9点投放任务，则time\_period的参数可表示为00000000000011111100…0000…(共336位, 每48位代表一天24小时，重复7次)。 |
  | price\_type | string | 是 | 出价方式，详见[付费方式](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1158173811189)。 |
  | price | float | 是 | 出价，整数位不得超过9位，小数位不得超2位；日元不支持小数。  注：范围在计划日限额和对应出价方式查询版位底价之间，版位底价通过[查询版位底价接口获取](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-slot3-0000001338501433)。  日限额和出价比值应在合理的范围内。  出价方式price\_type为oCPC时，该字段非必填 |
  | conversion\_cost | float | 否 | 期望转化成本。  price\_type为PRICING\_OCPC时专用，暂时只支持App和网页。  整数位不得超过9位，小数位不得超2位；  日元没有小数；  取值区间在出价与计划日预算之间。  日限额和期望转化成本比值应在合理的范围内。 |
  | creative\_size\_id | long | 是 | 版位ID，详见[查询版位](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-slot1-0000001338581861)。 |
  | tracking\_id | long | 否 | 转化跟踪指标ID，price\_type为PRICING\_OCPC、PRICING\_CPA时必填，详见[查询转化跟踪目标](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-tracking1-0000001286023238)。 |
  | ocpc\_strategy | string | 否 | 投放策略，price\_type为PRICING\_OCPC时必填，详见[投放策略](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section5377193122418)。 |
  | troas | float | 否 | 目标广告支出回报率 ，取值范围：0.01-1000000。  目标广告支出回报率是指您希望从投入到广告中的每一元钱获得的平均转化价值。该百分比值可以使用以下公式算得：转化价值/广告支出\*100%=目标广告支出回报率。  例如，如果您的目标是每向广告投入一元钱就能够获得六元钱的平均销售额，那么您的目标广告支出回报率就是600%。  鲸鸿动能广告自动优化，以尽量使所有使用此策略的广告达到一个平均的广告支出回报率，部分转化的回报率可能会高于或者低于您的目标值。  当price\_type=TROAS时必填。 |
  | sale\_country | string | 否 | 商品库投放任务的销售国家。  ISO 639-1 标准中的两位国家编码。  通过接口查询，详见[查询DPA任务销售国家列表](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-dpa13-0000001286023254)。  campaign\_type=CAMPAIGN\_TYPE\_SHOPPING时 此字段必填。 |
  | dpa\_filter | Struct2[] | 否 | 商品任务过滤条件。 |
  | fc\_days | long | 否 | 多日频控N天M次中的N，取值1-5。 |
  | fc\_upper\_times | long | 否 | 多日频控N天M次中的M，取值1-10。 |
  | landing\_page\_track\_param | string | 否 | 任务级别的落地页参数，如utm\_campaign=\_\_CID\_\_。 |
  | dplink\_track\_param | string | 否 | 任务级别的直达链接参数，如utm\_campaign=\_\_CID\_\_。当product\_type = ANDROID\_APP时，可填写。 |
  | traffic\_verify\_rule\_id | long | 否 | 流量验证条件ID，即创建流量验证条件接口中返回的traffic\_verify\_rule\_id |

  dpa\_filter(Struct2)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | dimension\_type | string | 是 | 需要查询的商品广告投放过滤维度，取值见[商品广告投放过滤维度](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section13141944162816)枚举值。 |
  | dimension\_values | Struct3 | 是 | 商品库筛选条件设置的取值列表。 |

  dimension\_values(Struct3)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | list\_values | string[] | 否 | 筛选条件的取值。  对于下拉取值的场景，填写设置的取值列表（同样支持单值）  当维度为FREEDELIVERY时，该数组为单值，例如[“false”]表示不支持包邮，[“true”]表示支持包邮。 |
  | range\_values | Struct4 | 否 | 当商品过滤维度为：DISCOUNTRATE，ORDERNUMBER，TAXRATE时，需要为其设置上下限的场景。 |

  range\_values(Struct4)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | min | double | 否 | 对于区间类型的场景，表示最小值。用于数值类型的属性。 |
  | max | double | 否 | 对于区间类型的场景，表示最大值。用于数值类型的属性。 |

  - <strong>请求示例</strong>

    POST /ads/v1/promotion/adgroup/create

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    商品广告：

    ```
    {
        "adgroup_name": "海外创建商品广告-showcase-0606001",
        "campaign_id": 30058567,
        "targeting_package_scope": "PRIVATE",
        "targeting_package_id": 90084129,
        "product_id": 30033122,
        "adgroup_begin_date": "2022-06-06",
        "adgroup_end_date": "2023-05-15",
        "time_period_type": "TIME_PERIOD_ALL",
        "price_type": "PRICING_CPM",
        "price": 20,
        "creative_size_id": 872423008583595900,
        "fc_days": "2",
        "fc_upper_times": 9,
        "sale_country": "RU",
        "dpa_filter": [
            {
                "dimension_type": "ORDERNUMBER",
                "dimension_values": {
                    "range_values": {
                        "min": "50",
                        "max": "80"
                    }
                }
            }
        ]
    }
    ```

    展示广告：

    ```
    {
        "adgroup_name": "海外创建展示广告-安卓应用-0606001",
        "campaign_id": 30058488,
        "targeting_package_scope": "SHARE",
        "targeting_package_id": 90083890,
        "product_id": 30032047,
        "adgroup_begin_date": "2022-06-06",
        "adgroup_end_date": "2023-05-15",
        "time_period_type": "TIME_PERIOD_ALL",
        "price_type": "PRICING_TROAS",
        "price": 20,
        "creative_size_id": 902953232928651100,
        "troas": "50",
        "fc_days": "2",
        "fc_upper_times": 9
    }
    ```
  - <strong>响应字段</strong>

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 任务ID。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong>。 |
    | adgroup\_id | long | 任务ID。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": 200,
        "data": {
            "adgroupId": 45003296
        }
    }
    ```
