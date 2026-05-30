---
title: "创建创意"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-advertising-creative1-0000001338498645
---
# 创建创意

您通过本接口可以创建创意。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/creative/create

  俄罗斯 : https://ads-drru.cloud.huawei.ru/ads/v1/promotion/creative/create

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/creative/create
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | adgroup\_id | long | 是 | 任务ID。 |
  | creative\_name | string | 是 | 创意名称，最大长度不超过100，支持名称里含有\n符号， 同一个广告主下同一任务下不能重复。 |
  | dyn\_ad\_text\_flag | string | 否 | 动态词包标识。  限制条件：  creative\_size\_sub\_type != APP\_ICON和campaign\_type=CAMPAIGN\_TYPE\_SHOPPING  详见[动态词包标识](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section2505524161413)。创意文案、摘要等创意元素支持动态词包拼接：比如日期地点性别动态拼接。 |
  | content\_struct | Struct3 | 是 | 创意详情。 |
  | creative\_size\_sub\_type | string | 是 | 版位子形式，详见[版位子样式](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section97194512155)。 |
  | creative\_size | string | 是 | 尺寸。 |
  | creative\_mode | string | 否 | 创意模式，当campaign\_type=CAMPAIGN\_TYPE\_SHOPPING必填，详见[创意模式](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1049832113283)。  通过【查询商品库】接口响应中的creative\_mode字段进行取值。  查询到creative\_mode的与创建创意中请求参数creative\_mode的映射关系：  1. TEMPLATE -&gt; TEMPLATE\_MODE 2. DIRECT -&gt; DIRECT\_INVESTMENT\_MODE 3. TEMPLATE\_AND\_DIRECT -&gt; TEMPLATE\_MODE或DIRECT\_INVESTMENT\_MODE |

  content\_struct(Struct3)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | images | Struct4[] | 否 | 图片列表信息 最多十张。  根据版位元素creative\_size\_element\_name为image的规则填写（约束见[查询版位元素](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-slot2-0000001338381965)）；  当campaign\_type=CAMPAIGN\_TYPE\_SHOPPING时不填写。 |
  | icon | Struct4 | 否 | icon信息。  根据版位元素creative\_size\_element\_name为icon的规则填写（约束见[查询版位元素](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-slot2-0000001338381965)）；  当campaign\_type=CAMPAIGN\_TYPE\_SHOPPING时不填写。 |
  | video | Struct4 | 否 | 视频信息。  根据版位元素creative\_size\_element\_name为video的规则填写（约束见[查询版位元素](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-slot2-0000001338381965)）；  当campaign\_type=CAMPAIGN\_TYPE\_SHOPPING时不填写。 |
  | title | Struct5 | 否 | 文案。  根据版位元素creative\_size\_element\_name为title的规则填写（约束见[查询版位元素](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-slot2-0000001338381965)）；  使用动态词包；  亚非拉和欧洲站点取值：  \{Location\}\{Date\}\{Gender\}  俄罗斯站点取值：  \{место\}\{Дата\}\{пол\}。 |
  | description | Struct5 | 否 | 描述。  根据版位元素creative\_size\_element\_name为description的规则填写（约束见[查询版位元素](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-slot2-0000001338381965)）。 |
  | corporate | Struct5 | 否 | 品牌名称。  根据版位元素creative\_size\_element\_name为corporate\_name的规则填写（约束见[查询版位元素](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-slot2-0000001338381965)）；  支持通配符填写 取值如下：\{brandName\}。 |
  | landing\_page | Struct6 | 否 | 落地页信息。  根据版位元素creative\_size\_element\_name为landing\_page\_url的规则填写（约束见[查询版位元素](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-slot2-0000001338381965)）。  支持通配符，由运营配置项控制，目前取值如下：  \{targetUrlMobile\}移动端H5商品落地页  \{brandUrlMobile\}移动端H5品牌落地页 |
  | deeplink | Struct7 | 否 | 应用直达地址。  根据版位元素creative\_size\_element\_name为deeplink\_url的规则填写（约束见[查询版位元素](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-slot2-0000001338381965)）。仅当任务中的推广产品为ANDROID\_APP时可填写。定向中installed\_apps\_struct不为空，此参数必填，not\_installed\_apps\_struct不为空，此参数选填。  支持通配符，由运营配置项控制，目前取值如下：  \{targetUrlAndroidApp\}商品详情页  \{dspHuimaiDeeplink\}商品热卖页  \{dspProductAggLink\}商品会场页 |
  | impression\_monitor\_url | Struct8 | 否 | 展示监控地址，取值详见[查询分析工具关联关系](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-tracking4-0000001338383009)。 |
  | click\_monitor\_url | Struct8 | 否 | 点击监控地址，取值详见[查询分析工具关联关系](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-tracking4-0000001338383009)。 |
  | service\_card\_id | string | 否 | 服务卡片ID。  当campaign\_type = CAMPAIGN\_TYPE\_DISPLAY和creative\_size\_sub\_type = SERVICE\_CARD必填；  来源负一屏，会进行合法性校验。 |
  | template | Struct10 | 否 | 创意模板ID。  campaign\_type=CAMPAIGN\_TYPE\_SHOPPING，creative\_mode= TEMPLATE\_MODE填写，取值详见[查询商品库动态模板](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-dpa8-0000001338383021)。 |

  images 、icon 、video(Struct4)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | file | Struct9 | 是 | 文件详情。 |

  title 、description 、corporate(Struct5)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | text | string | 是 | 内容 最长255。 |

  landing\_page(Struct6)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | landing\_page | string | 是 | 落地页地址 最长2048。  当任务中的推广产品为ANDROID\_APP且定向中installed\_apps\_struct不为空时，此字段可填空、自定义落地页、维纳斯落地页。  例如：  landing\_page：  landing\_page：自定义落地页  landing\_page：维纳斯落地页。 |
  | landing\_page\_type | string | 是 | 落地页类型，详见[落地页类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section5467205171914)。 |

  deeplink(Struct7)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | deeplink | string | 是 | 应用直达地址信息 ，最长2048，不能使用“@”特殊字符。 |

  impression\_monitor\_url 、click\_monitor\_url(Struct8)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | monitor\_url | string | 是 | 展示监控地址 ，最长3800，以```https://开`头``。 |

  file(Struct9)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | asset\_id | long | 是 | 素材ID。 |

  template(Struct10)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | template\_id | long | 是 | 模板ID，通过[查询商品库动态模板](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-dpa8-0000001338383021)接口获取。 |

  - <strong>请求示例</strong>

    POST ads/v1/promotion/creative/create

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    [
        {
            "adgroup_id": 46064005,
            "creative_name": "商品广告-促销活动-开屏图片-创意00011-0606003",
            "creative_size_sub_type": "NATIVE_BIG_PICTURE",
            "creative_size": "1080*607",
            "creative_mode": "TEMPLATE_MODE",
            "content_struct": {
                "template": {
                    "template_id": "1610603464"
                },
                "corporate": {
                    "text": "{brandName}"
                },
                "title": {
                    "text": "文案"
                },
                "industry_id": {
                    "category": "100100010002"
                },
                "industry_labels": [
                    {
                        "label": "耳麦"
                    },
                    {
                        "label": "收音机"
                    }
                ],
                "landing_page": {
                    "landing_page": "https://www.baidu.com"
                },
                "deeplink": {
                    "deeplink": "https://www.baidu.com"
                },
                "impression_monitor_url": {
                    "monitor_url": "https://clickc.admaster.com.cn"
                },
                "click_monitor_url": {
                    "monitor_url": "https://clickc.admaster.com.cn"
                }
            }
        }
    ]
    ```
  - <strong>响应字段</strong>

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 创意ID。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | creative\_id | long | 创意ID。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "message": "OK",
        "code": 200,
        "data": {
            123456
        }
    }
    ```
