---
title: "查询版位"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-slot1-0000001338581861
format: md
---

# 查询版位

您通过本接口可以查询版位信息。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/position/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/position/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/position/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct1 | 否 | 过滤条件。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | product\_type | string | 否 | 推广产品，详见[推广产品类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section396354212216)。 |
  | price\_type | string | 否 | 付费方式，详见[付费方式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1158173811189)。 |
  | creative\_size\_id\_list | string | 否 | 查询指定版位ID列表。 |
  | objective\_type | string | 否 | 推广目的，详见[推广目的](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section15457195232912)。 |
  | category | string | 否 | 版位所属分类，详见[版位所属分类](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section172015520335)。 |
  | flow\_resources | string[] | 否 | 投放网络，详见[投放网络](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1178164162818)。 |
  | campaign\_type | string | 否 | 计划类型，取值见[计划类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1119111358231)枚举值。 |
  | vip | string | 否 | vip 版位，0：不是，1：是，详见[VIP版位](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1464067123014)。 |

  - <strong>请求示例</strong>

    GET /ads/v1/tools/position/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "filtering": {
            "product_type": "ANDROID_APP"
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 版位列表。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | creative\_size\_info\_list | Struct2[] | 版位列表。 |

    creative\_size\_info\_list(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | creative\_size\_id | long | 版位ID。 |
    | creative\_size\_base\_info | Struct3 | 版位基础信息。 |
    | creative\_size\_operation\_info | Struct4 | 版位配置信息。 |
    | creative\_size\_price\_info | Struct5 | 版位出价信息。 |

    creative\_size\_base\_info(Struct3)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | creative\_size\_name\_dsp | string | 版位名称。 |
    | creative\_size\_description | string | 版位描述。 |
    | creative\_size\_sample\_list | Struct7[] | 版位预览图列表信息。 |
    | creative\_size\_placement\_list | Struct6[] | 版位规格列表信息。 |

    creative\_size\_sample\_list(Struct7)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | preview\_title | string | 预览图标题。 |
    | preview\_description | string | 预览图描述。 |
    | creative\_size\_sample | string | 预览图地址。 |

    creative\_size\_placement\_list(Struct6)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | placement\_size\_id | string | 规格ID。 |
    | creative\_size | string | 尺寸。格式：宽\*高。 |
    | creative\_size\_sub\_type | string | 版位子形式，详见[版位子样式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section97194512155)。 |
    | is\_support\_multiple  \_creatives | string | 是否支持多创意，详见[是否支持多创意](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section45712576185)。 |

    creative\_size\_operation\_info(Struct4)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | support\_product\_type | string | 支持的推广产品，多值以逗号分隔，详见[推广产品类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section396354212216)。 |
    | support\_app\_install\_flag | string | 支持的应用是否安装标识，多值以逗号分隔。推广产品为应用时有效，详见[应用是否安装标识](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section184791429181813)。 |
    | is\_support\_time\_period | string | 是否支持选择投放时段，详见[是否选择支持投放时段](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section16157194911818)。 |
    | is\_support\_multiple  \_creatives | string | 是否支持多创意，详见[是否支持多创意](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section45712576185)。 |
    | min\_duration\_days | integer | 投放此版位的任务最短投放时间，单位天。默认不限制。 |
    | max\_duration\_days | integer | 投放此版位的任务最长投放时间，单位天。默认不限制。 |

    creative\_size\_price\_info(Struct5)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | support\_price\_type | string | 付费方式，详见[付费方式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1158173811189)。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "creative_size_info_list": [
                {
                    "creative_size_id": 585942342557546400,
                    "creative_size_operation_info": {
                        "support_product_type": "ANDROID_APP",
                        "support_app_install_flag": "APP_NOT_INSTALLED"
                    },
                    "creative_size_price_info": {
                        "floor_price_cpd": "111.00",
                        "support_price_type": "PRICING_CPM,PRICING_CPD",
                        "floor_price_cpm": "111.00"
                    },
                    "creative_size_base_info": {
                        "creative_size_sample_list": [
                            {
                                "preview_title": "多规格新增",
                                "preview_description": "多规格新增",
                                "creative_size_sample": "https://pps-channel-test-cn.obs.cn-north-3.myhwclouds.com/dl/pps/creativeSizeSample/3b86c0a9d0bd4fd0847dcff78d60c34b-23dce8fa-9c77-4fc5-b663-7c7d00ff7ec7.jpg"
                            }
                        ],
                        "creative_size_name_dsp": "开屏图片1920*1080",
                        "creative_size_description": "版位的示例描述",
                        "creative_size_placement_list": [
                            {
                                "placement_name": "开屏",
                                "creative_size_sub_type": 32,
                                "creative_size": "1920*1080",
                                "is_support_multiple_creatives": " MULTI_CREATIVE_ENABLE ",
                                "placement_size_id": 447664078572236300
                            }
                        ],
                        "impression_inventory": 10000,
                        "creative_size_sample": "https://pps-channel-test-cn.obs.cn-north-3.myhwclouds.com/dl/pps/creativeSizeSample/3b86c0a9d0bd4fd0847dcff78d60c34b-23dce8fa-9c77-4fc5-b663-7c7d00ff7ec7.jpg"
                    }
                }
            ]
        }
    }
    ```
