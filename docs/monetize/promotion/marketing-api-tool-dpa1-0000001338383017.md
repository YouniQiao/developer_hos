---
title: "查询商品库"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-dpa1-0000001338383017
---
# 查询商品库

您通过本接口获取查询商品库。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/store/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/store/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/store/query
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct1 | 否 | 过滤条件，若此字段不传，或传空则视为无限制条件。 |
  | page | integer | 是 | 搜索页码。 |
  | page\_size | integer | 是 | 一页展示数量。 |

  filtering(Struct1)参数

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | store\_ids | long[] | 否 | 商品库Id，最多50个。 |
  | country | string | 否 | ISO 639-1 标准中的两位国家编码。 |
  | content\_language | string | 否 | ISO 3166-1 标准中的两位语言编码。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/dpa/store/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "filtering": {
            "store_ids": [
                45001041
            ],
            "country": "CN",
            "content_language": "ZH"
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
    | data | Struct1 | 指定对象统计数据。 |

    data(Struct1)参数

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | total | integer | 总条数。 |
    | store\_list | Struct2[] | 商品库列表。 |

    store\_list(Struct2)参数

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | store\_id | long | 商品库Id。 |
    | store\_name | string | 商品库名称。 |
    | store\_type | string | 商品库类型。 |
    | store\_status | integer | 商品库状态，1：正常，2：删除，默认正常。 |
    | sale\_country | string | 国家编码。 |
    | additional\_country | String[] | 商品库可以同时投放的国家。 |
    | content\_language | string | 语言编码。 |
    | store\_group | String | 商品库分组。 |
    | creative\_mode | string | 创意投放类型。 |
    | product\_quantity | long | 当前商品库中有效总商品数。 |
    | store\_data\_source | Struct2 | 商品库商品更新数据源配置。 |
    | store\_update\_policy | Struct3 | 商品库商品更新策略。 |
    | created\_time | string | 创建时间，格式如下:"yyyy-MM-dd HH:mm:ss"。 |
    | updated\_time | string | 更新时间，格式如下:"yyyy-MM-dd HH:mm:ss"。 |

    store\_data\_source(Struct2)参数

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | upload\_method | string | 商品库数据上传方式，详见[商品库数据上传方式](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section18930165402817)。 |
    | update\_type | string | 商品库数据更新方式，详见[商品库数据更新方式](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1391137298)。 |

    store\_update\_policy(Struct3)参数

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | xml\_update\_url\_type | integer | 定时拉取方式获取xml数据的url地址类型，详见[url地址类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section48424918293)。 |
    | xml\_update\_url | string | 定时拉取方式获取xml数据的url地址。 |
    | auth\_name | string | 用户名。 |
    | auth\_password | string | 密码。 |
    | update\_frequency | integer | 定时拉取更新频次，单位小时。 |
    | update\_begin\_time | integer | 定时拉取开始时间，只能是整点，0-23。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 2,
            "store_list": [
                {
                    "store_type": "E_COMMERCE",
                    "store_name": "cyxTest1",
                    "store_id": 894100567738276500,
                    "store_status": 1,
                    "product_quantity": 0,
                    "store_group": null,
                    "created_time": "2022-05-18 14:58:13",
                    "creative_mode": "DIRECT",
                    "updated_time": "2022-05-18 14:58:13",
                    "own": 0,
                    "sale_country": "CA",
                    "content_language": "fr",
                    "additional_country": "CA,CN",
                    "store_data_source": {
                        "upload_method": "FILE_UPLOAD",
                        "update_type": "FULL_UPDATE"
                    },
                    "store_update_policy": null
                },
                {
                    "store_type": "E_COMMERCE",
                    "store_name": "ymp来源pps",
                    "store_id": 887618983518526100,
                    "store_status": 1,
                    "product_quantity": 0,
                    "store_group": null,
                    "created_time": "2022-05-09 16:20:28",
                    "creative_mode": "TEMPLATE",
                    "updated_time": "2022-05-09 16:20:28",
                    "own": 0,
                    "sale_country": "AD",
                    "content_language": "ca",
                    "additional_country": "AE,AF,AG,AI,AL,AM,AO,AQ,AR ",
                    "store_data_source": null,
                    "store_update_policy": null
                }
            ]
        }
    }
    ```
