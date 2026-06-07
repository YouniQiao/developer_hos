---
title: "查询任务"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-advertising-task2-0000001338496821
format: md
---

# 查询任务

您通过本接口查询任务。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/adgroup/query

  俄罗斯 : https://ads-drru.cloud.huawei.ru/ads/v1/promotion/adgroup/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/adgroup/query
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
  | campaign\_id | string | 否 | 计划ID。  最大长度不得超过50；  只能填写数字；  不能使用“^”和换行。 |
  | adgroup\_name | string | 否 | 任务名称。 |
  | adgroup\_ids | long[] | 否 | 任务ID列表。 |
  | product\_type | string | 否 | 推广产品，详见[推广产品类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section396354212216)。 |
  | product\_id | long | 否 | 推广产品ID。  注：任务上非App的产品ID和任务ID为一对一关系。  计划和产品上的产品类型需一致。 |
  | app\_id | string | 否 | 华为应用市场App ID，如：C12345。 |
  | updated\_begin\_time | string | 否 | 任务更新的开始时间，格式："yyyy-MM-dd HH:mm:ss"。 |
  | updated\_end\_time | string | 否 | 任务更新的结束时间，格式："yyyy-MM-dd HH:mm:ss"。 |
  | created\_begin\_time | string | 否 | 任务创建的开始时间，格式："yyyy-MM-dd HH:mm:ss"。 |
  | created\_end\_time | string | 否 | 任务创建的结束时间，格式："yyyy-MM-dd HH:mm:ss"。 |
  | show\_status | string | 否 | 任务状态，详见[任务界面显示的状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section3371527182115)。 |
  | ocpc\_status | string | 否 | 学习期状态查询。取值范围：  OCPC\_STATUS\_STUDY  OCPC\_STATUS\_SUCCESS  OCPC\_STATUS\_FAIL。 |
  | is\_allow\_change\_to\_ocpc | string | 否 | 是否允许切换到ocpc。取值范围：  YES  NO。 |
  | ocpx\_status | string | 否 | ocpx学习期状态，详见[ocpx学习期状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section522152522613)。 |
  | app\_install\_flag | string | 否 | 应用是否安装标识，product\_type为ANDROID\_APP时有效，详见[应用是否安装标识](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section184791429181813)。 |

  - <strong>请求示例</strong>

    GET /ads/v1/promotion/adgroup/query

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "page": "1",
        "page_size": "50",
        "filtering": {
            "is_allow_change_to_ocpc": "NO"
        }
    }
    ```
  - <strong>响应字段</strong>

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 任务列表。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | total | integer | 任务总条数。 |
    | data | Struct2[] | 任务列表。 |

    data(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | adgroup\_name | string | 任务名称。 |
    | adgroup\_id | long | 任务ID。 |
    | campaign\_id | string | 计划ID。 |
    | campaign\_name | string | 计划名称。 |
    | adgroup\_status | string | 任务操作状态，详见[计划/任务/创意操作状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section9341472176)。 |
    | campaign\_daily\_budget  \_status | string | 计划日预算状态，详见[计划日限额状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section145031217132116)。 |
    | show\_status | string | 界面显示的状态，详见[任务界面显示的状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section3371527182115)。 |
    | targeting\_id | long | 任务定向ID。 |
    | product\_id | long | 推广产品ID。 |
    | adgroup\_begin\_date | string | 投放开始日期，格式：YYYY-MM-DD，如：2020-01-01。 |
    | adgroup\_end\_date | string | 投放结束日期，格式：YYYY-MM-DD，为空表示长期投放，如：2020-01-02。  如果是长期投放，不返回该字段。 |
    | time\_period\_type | string | 时间段类型，详见[时间段类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section548205815206)。 |
    | time\_period | string | time\_period\_type为TIME\_PERIOD\_DAY\_SPECIFIC、TIME\_PERIOD\_HOUR\_SPECIFIC时有值。  按照特定时间段投放时，01010100010010……表示指定特殊时段，半小时为粒度，用0、1标识是否选中，1为选中，0为未选中。一天24小时，即每天24\*2=48位，共7天，即共48\*7=336位 |
    | price\_type | string | 出价方式，详见[付费方式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1158173811189)。 |
    | price | float | 出价。 |
    | conversion\_cost | float | 期望转化成本，price\_type为PRICING\_OCPC时专用。 |
    | ocpc\_status | string | oCPC学习状态，price\_type为PRICING\_OCPC时专用，详见[oCPC学习状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section71461826152219)。 |
    | creative\_size\_id | long | 版位ID。 |
    | dyn\_price\_flag | string | 智能提价标志，仅当推广产品为ANDROID\_APP且定向包中installed\_apps\_struct值为true时有效，详见[智能提价标志](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section6941189219)。 |
    | dyn\_price\_upper\_limit | float | 智能提价上限，dyn\_price\_flag为DYNAMIC\_PRICE\_ENABLE时有效。 |
    | tracking\_id | long | 转化指标ID。 |
    | ocpc\_click\_raise | string | 是否启用一键起量，详见[一键起量标志](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section207875182314)。 |
    | ocpc\_click\_raise\_upper\_limit | float | 提价幅度上限，ocpc\_click\_raise为OCPC\_CLICK\_RAISE\_ENABLE时有效。 |
    | created\_time | string | 任务创建的时间，格式如下："yyyy-MM-dd HH:mm:ss"。 |
    | ocpc\_strategy | string | 投放策略，详见[投放策略](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section5377193122418)。 |
    | change\_to\_ocpc\_status | string | 切换到ocpc状态，详见[切换ocpc状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section19641142514258)。 |
    | effect\_target | string | 切换为ocpc任务时满足条件的转化目标。切换任务时，需与转化跟踪中获取的转化目标做交集 详见[转化目标](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section125615641916)。 |
    | is\_retain\_assistant | boolean | 是否为次留助手。 |
    | app\_install\_flag | string | 应用是否安装标识，product\_type为ANDROID\_APP时有效，详见[应用是否安装标识](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section184791429181813)。 |
    | sale\_country | String | 商品销售国家。 |
    | dpa\_filter | Struct1[] | 商品销售条件。 |
    | fc\_days | long | 多日频控N天M次中的N。 |
    | fc\_upper\_times | long | 多日频控N天M次中的M。 |
    | landing\_page\_track\_param | string | 商品库级别的落地页参数。 |
    | dplink\_track\_param | string | 商品库级别的直达链接参数。 |
    | traffic\_verify\_rule\_id | long | 流量验证条件ID，即创建流量验证条件接口中返回的traffic\_verify\_rule\_id |

    dpa\_filter(Struct1)定义

    |  |  |  |  |
    | --- | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
    | dimension\_type | string | 是 | 需要查询的商品广告投放过滤维度，取值见[商品广告投放过滤维度](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section13141944162816)枚举值。 |
    | dimension\_values | Struct2 | 是 | 商品库筛选条件设置的取值列表。 |

    dimension\_values(Struct2)定义

    |  |  |  |  |
    | --- | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
    | list\_values | string[] | 否 | 筛选条件的取值，  对于下拉取值的场景，填写设置的取值列表（同样支持单值）；  当维度为FREEDELIVERY时，该数组为单值，例如[“false”]表示不支持包邮，[“true”]表示支持包邮。 |
    | range\_values | Struct4 | 否 | 当商品过滤维度为：DISCOUNTRATE，ORDERNUMBER，TAXRATE时，展示取值范围。 |

    range\_values(Struct4)定义

    |  |  |  |  |
    | --- | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
    | min | double | 否 | 对于区间类型的场景，表示最小值。用于数值类型的属性。 |
    | max | double | 否 | 对于区间类型的场景，表示最大值。用于数值类型的属性。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 1,
            "data": [
                {
                    "created_time": "2022-06-08 09:37:50",
                    "adgroup_id": 46064862,
                    "is_retain_assistant": false,
                    "adgroup_begin_date": "2022-06-08",
                    "dpa_recommand": "BEHAVIOR_DATA_RECOMMENDATION",
                    "time_period_type": "TIME_PERIOD_ALL",
                    "creative_size_id": 781619636062959500,
                    "campaign_name": "编辑海外计划1",
                    "targeting_id": 90084808,
                    "change_to_ocpc_status": "CHANGE_TO_OCPC_STATUS_NOT_ALLOWED",
                    "price": 111,
                    "product_id": 76110013,
                    "app_install_flag": "APP_NOT_INSTALLED",
                    "price_type": "PRICING_CPM",
                    "adgroup_status": "OPERATION_STATUS_ENABLE",
                    "campaign_daily_budget_status": "CAMPAIGN_DAILY_BUDGET_NOT_EXCEED",
                    "show_status": "ADGROUP_STATUS_AUDIT",
                    "adgroup_name": "syj插屏应用多规格视频、图片版位\t-20220608-竞价",
                    "campaign_id": "30059151"
                }
            ]
        }
    }
    ```
