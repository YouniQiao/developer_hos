---
title: "编辑任务"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-advertising-task3-0000001338377353
format: md
---

# 编辑任务

您通过本接口可以编辑任务。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/adgroup/update

  俄罗斯 : https://ads-drru.cloud.huawei.ru/ads/v1/promotion/adgroup/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/adgroup/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | adgroup\_id | long | 是 | 任务ID。 |
  | adgroup\_name | string | 否 | 任务名称必填。  最大长度不得超100；  不能使用“^”,“|”特殊字符，  同一个计划下的任务名称不能重复。 |
  | targeting\_package\_id | long | 否 | 定向包ID，即创建定向包接口中返回的targeting\_id；  当campaign\_type=CAMPAIGN\_TYPE\_SHOPPING，此字段不能填写，详见[创建定向包](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-targeting1-0000001338502481)。 |
  | targeting\_package\_scope | string | 否 | 定向类型，详见[定向类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1090712128282)。  campaign\_type=CAMPAIGN\_TYPE\_SHOPPING该字段取值为PRIVATE。 |
  | adgroup\_begin\_date | string | 否 | 投放开始日期，格式：YYYY-MM-DD，如：2020-01-01。  注：原始开始时间小于当前时间并且原始结束时间大于当前时间，说明任务已经开始，不能修改开始时间，只能修改结束时间；  修改的开始时间不能早于当天。 |
  | adgroup\_end\_date | string | 否 | 投放结束日期，格式：YYYY-MM-DD，为空表示长期投放，如：2020-01-02。  注：结束时间不能早于开始时间，也不能早于当前时间；原始结束时间小于当前时间说明任务已经结束，不能修改任何时间。 |
  | time\_period\_type | string | 否 | 时间段类型，可以从三种类型中根据自己需要选择一个。  time\_period为空时，时间段类型不得为TIME\_PERIOD\_DAY\_SPECIFIC或TIME\_PERIOD\_HOUR\_SPECIFIC，详见[时间段类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section548205815206)。 |
  | time\_period | string | 否 | time\_period\_type为TIME\_PERIOD\_DAY\_SPECIFIC、TIME\_PERIOD\_HOUR\_SPECIFIC时必填。  按照特定时间段投放时，01010100010010……表示指定特殊时段，半小时为粒度，用0、1标识是否选中，1为选中，0为未选中。一天24小时，即每天24\*2=48位，共7天，即共48\*7=336位  如果time\_period\_type为TIME\_PERIOD\_ALL，则表示一周内每天的特定小时，需要每48个值都重复。  注：时间段要与任务的日期区间有交集。  例：如果任务开始时间是2020-06-22（周一），结束时间是2020-06-24（周三），且选择的类型是TIME\_PERIOD\_DAY\_SPECIFIC或TIME\_PERIOD\_HOUR\_SPECIFIC，那time\_period的入参需要与任务的时间段有交集；若用户想在22/23/24的每天早上6点到9点投放任务，则time\_period的参数可表示为00000000000011111100…0000…(共336位)。 |
  | price | float | 否 | 出价，整数位不得超过9位，小数位不得超2位。注：范围在计划日限额和对应出价方式查询版位底价之间，版位底价通过[查询版位底价](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-slot3-0000001338501433)。  日限额和深度转化价格比值应在合理的范围内。 |
  | conversion\_cost | float | 否 | 期望转化成本，price\_type为PRICING\_OCPC时专用，暂支持App和网页，整数位不得超过9位，小数位不得超2位，出价方式由CPX切换成OCPC时必填，取值区间在出价与计划日预算之间。  日限额和深度转化价格比值应在合理的范围内。 |
  | tracking\_id | long | 否 | 转化跟踪指标ID，price\_type为PRICING\_OCPC、PRICING\_CPA时必填，详见[查询转化跟踪目标](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-tracking1-0000001286023238)。 |
  | price\_type | string | 否 | 付费方式，允许切换成ocpc的任务才可以填写，详见[付费方式](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1158173811189)。 |
  | ocpc\_strategy | string | 否 | 投放策略 price\_type 为 PRICING\_OCPC时必填 详见[投放策略](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section5377193122418)。 |
  | troas | float | 否 | 目标广告支出回报率 ，取值范围：0.01-1000000。 |
  | dpa\_filter | Struct1[] | 否 | 商品任务过滤条件。 |
  | fc\_days | long | 否 | 多日频控N天M次中的N，取值1-5。 |
  | fc\_upper\_times | long | 否 | 多日频控N天M次中的M，取值1-10。 |
  | landing\_page\_track\_param | string | 否 | 商品库级别的落地页参数，如utm\_campaign=\_\_CID\_\_。 |
  | dplink\_track\_param | string | 否 | 商品库级别的直达链接参数，如utm\_campaign=\_\_CID\_\_。  当product\_type = ANDROID\_APP时，可填写。 |
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
  | list\_values | string[] | 否 | 筛选条件的取值。  对于下拉取值的场景，填写设置的取值列表（同样支持单值）；  当维度为FREEDELIVERY时，该数组为单值，例如[“false”]表示不支持包邮，[“true”]表示支持包邮。 |
  | range\_values | Struct4 | 否 | 当商品过滤维度为：折扣 销量，税率，需要为其设置上下限的场景。 |

  range\_values(Struct4)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | min | double | 否 | 对于区间类型的场景，表示最小值。用于数值类型的属性。 |
  | max | double | 否 | 对于区间类型的场景，表示最大值。用于数值类型的属性。 |

  - <strong>请求示例</strong>

    POST ads/v1/promotion/adgroup/update HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "adgroup_id": 46053414,
        "adgroup_name": "正式投放-安卓应用-ocpc-双出价-编辑",
        "adgroup_end_time": "2022-08-15",
        "price": 266,
        "conversion_cost": "288",
        "tracking_id": "38104647",
        "ocpc_click_raise": "OCPC_CLICK_RAISE_ENABLE",
        "ocpc_click_raise_upper_limit": 6
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
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | adgroup\_id | long | 任务ID。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "adgroup_id": 45002610
        }
    }
    ```
