---
title: "查询创意"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-advertising-creative2-0000001338379165
format: md
---

# 查询创意

您通过本接口可以查询创意的列表数据。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/creative/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/creative/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/creative/query
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
  | adgroup\_id | long | 否 | 任务ID。 |
  | creative\_ids | long[] | 否 | 创意ID集合。 |
  | approved\_status | string | 否 | 创意审核状态，详见[创意审核状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1749811142159)。 |
  | updated\_begin\_time | string | 否 | 创意更新的开始时间，格式:"yyyy-MM-dd HH:mm:ss"。 |
  | updated\_end\_time | string | 否 | 创意更新的结束时间，格式:"yyyy-MM-dd HH:mm:ss"。 |
  | created\_begin\_time | string | 否 | 创意创建的开始日期，格式："yyyy-MM-dd HH:mm:ss"。 |
  | created\_end\_time | string | 否 | 创意创建的结束日期，格式："yyyy-MM-dd HH:mm:ss"。 |
  | show\_status | string | 否 | 创意展示状态，详见[创意显示状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section870681931619)。 |
  | creative\_name | string | 否 | 创意名称。 |
  | campaign\_type | string | 否 | 计划类型，详见[计划类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1119111358231)。 |

  - <strong>请求示例</strong>

    GET /ads/v1/promotion/creative/query

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "page": 1,
        "page_size": 10,
        "filtering": {
            "approved_status": "AUDIT"
        }
    }
    ```
  - 响应字段

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | total | integer | 创意总条数。 |
    | data | Struct2[] | 创意列表。 |

    data(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | approved\_status | string | 创意审核状态，详见[创意审核状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1749811142159)。 |
    | show\_status | string | 创意显示状态，详见[创意显示状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section870681931619)。 |
    | creative\_id | long | 创意ID。 |
    | campaign\_id | string | 推广计划ID。 |
    | adgroup\_id | long | 任务ID。 |
    | creative\_name | string | 创意名称。 |
    | creative\_size\_type | string | 版位形式，详见[版位形式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1772223181512)。 |
    | creative\_size\_sub\_type | string | 版位子形式，详见[版位子样式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section97194512155)。 |
    | creative\_size\_id | long | 版位ID。 |
    | creative\_status | string | 操作状态，详见[计划/任务/创意操作状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section9341472176)。 |
    | approved\_message | string | 审核信息。 |
    | dyn\_ad\_text\_flag | string | 动态词包标识，详见[动态词包标识](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section2505524161413)。 |
    | content\_struct | Struct3 | 创意详情。 |
    | creative\_score | integer | 创意打分字段，打分范围在0-50之间。 |
    | creative\_comment | string | 评分意见。 |
    | created\_time | string | 创意创建的时间，格式如下："yyyy-MM-dd HH:mm:ss"。 |
    | creative\_mode | string | 创意模式，详见[创意模式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1049832113283)。 |

    content\_struct(Struct3)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | images | Struct4[] | 图片列表信息。 |
    | icon | Struct4 | icon信息。 |
    | video | Struct4 | 视频信息。 |
    | title | Struct5 | 文案。 |
    | description | Struct5 | 描述。 |
    | corporate | Struct5 | 品牌名称。 |
    | landing\_page | Struc6 | 落地页信息。 |
    | deeplink | Struct7 | 应用直达地址。 |
    | impression\_monitor\_url | Struct8 | 展示监控地址，取值详见[查询分析工具关联关系](/docs/monetize/promotion/marketing-api-tool-tracking4-0000001338383009)。 |
    | click\_monitor\_url | Struct8 | 点击监控地址，取值详见[查询分析工具关联关系](/docs/monetize/promotion/marketing-api-tool-tracking4-0000001338383009)。 |
    | service\_card\_id | string | 服务卡片ID，仅creative\_size\_sub\_type为SERVICE\_CARD才显示。 |
    | template | Struct10 | 创意模板ID。  campaign\_type=CAMPAIGN\_TYPE\_SHOPPING，creative\_mode= TEMPLATE\_MODE填写，取值详见[查询商品库动态模板](/docs/monetize/promotion/marketing-api-tool-dpa8-0000001338383021)。 |

    images 、icon 、video(Struct4)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | file | Struct9 | 素材。 |

    file(Struct9)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | url | string | 素材地址。 |
    | width | integer | 宽度，单位像素。 |
    | height | integer | 高度，单位像素。 |
    | format | string | 后缀名。  video/mp4；  image/jpg；  image/jpeg；  image/png；  image/gif。 |
    | size | integer | 文件大小。 |
    | asset\_id | long | 素材ID。 |
    | sha256 | string | 文件sha256摘要。 |
    | duration | integer | 视频播放时长，仅视频存在，单位毫秒。 |

    title、description 、corporate(Struct5)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | text | string | 内容。 |

    landing\_page(Struct6)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | landing\_page | string | 落地页地址。 |
    | landing\_page\_type | string | 落地页类型，详见[落地页类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section5467205171914)。 |

    deeplink(Struct7)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | deeplink | string | 应用直达地址信息。 |

    impression\_monitor\_url 、click\_monitor\_url(Struct8)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | monitor\_url | string | 展示监控地址。 |

    template(Struct10)定义

    |  |  |  |  |
    | --- | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
    | template\_id | long | 是 | 模板ID，通过[查询商品库动态模板](/docs/monetize/promotion/marketing-api-tool-dpa8-0000001338383021)接口获取。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 1,
            "data": [
                {
                    "creative_name": "zyh123123",
                    "content_struct": {
                        "images": [
                            {
                                "sequence": 1,
                                "file": {
                                    "duration": 0,
                                    "size": 151947,
                                    "sha256": "0a2f186b68582a1f119d32f574284e6ff124ca1177826d51edb75d8b4c3f474d",
                                    "width": 1080,
                                    "format": "image/jpeg",
                                    "url": "http://cs02-pps-drcn.dbankcdn.com/dl/pps/20191212153725fbed5339f827488487249895f5sample.jpg",
                                    "file_url_with_sites": [],
                                    "height": 607
                                  
                                },
                                "id": 10000056
                            }
                        ],
                        "corporate": {
                            "id": 10000025,
                            "text": "示例汽车"
                        },
                        "deeplink": {
                            "deeplink": "himovie://com.huawei.himovie/showlive?channelId=L2019120915344160000020113000000&pver=21300000&portal=himovie&from=himovie ?",
                            "id": 10000001
                        },
                        "landing_page": {
                            "landing_page": "https://url.cloud.huawei.com/50XtmcwvEk",
                            "id": 10000003,
                            "landing_page_type": 3,
                            "need_show_title": false
                        },
                        "title": {
                            "id": 10000006,
                            "text": "示例发布会"
                        }
                    },
                    "adgroup_id": 1,
                    "approved_status": "APPROVE",
                    "dyn_ad_text_flag": "DYNAMIC_WORD_DISABLE",
                    "creative_id": 1,
                    "creative_size_id": 42,
                    "creative_size_sub_type": "SPLASH_PICTURE",
                    "approved_message": "涉嫌违法问题，请整改",
                    "show_status": "CREATIVE_STATUS_DELETE",
                    "creative_status": "OPERATION_STATUS_ENABLE",
                    "campaign_id": "1",
                    "creative_size_type": "CREATIVE_SIZE_TYPE_SINGLE_PICTURE"
                }
            ]
        }
    }
    ```
