---
title: "编辑创意"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-advertising-creative3-0000001286179366
format: md
---

# 编辑创意

您通过本接口可以编辑创意。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/creative/update

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/creative/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/creative/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | creative\_id | long | 是 | 创意ID。 |
  | creative\_name | string | 否 | 创意名称，最大长度不超过100，支持换行 同一个广告主下同一任务下不能重复。 |
  | dyn\_ad\_text\_flag | string | 否 | 动态词包标识，  限制条件：  creative\_size\_sub\_type != APP\_ICON和campaign\_type=CAMPAIGN\_TYPE\_SHOPPING，详见[动态词包标识](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section2505524161413)，创意文案、摘要等创意元素支持动态词包拼接：比如日期地点性别动态拼接。 |
  | content\_struct | Struct3 | 否 | 创意详情。 |

  content\_struct (Struct3)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | images | Struct4[] | 否 | 图片列表信息，最多十张。  根据版位元素creative\_size\_element\_name为image的规则填写（约束见[查询版位元素](/docs/monetize/promotion/marketing-api-tool-slot2-0000001338381965)），当campaign\_type=CAMPAIGN\_TYPE\_SHOPPING时不填写。 |
  | icon | Struct4 | 否 | icon信息。  根据版位元素creative\_size\_element\_name为icon的规则填写（约束见[查询版位元素](/docs/monetize/promotion/marketing-api-tool-slot2-0000001338381965)），当campaign\_type=CAMPAIGN\_TYPE\_SHOPPING时不填写。 |
  | video | Struct4 | 否 | 视频信息。  根据版位元素creative\_size\_element\_name为video的规则填写（约束见[查询版位元素](/docs/monetize/promotion/marketing-api-tool-slot2-0000001338381965)），当campaign\_type=CAMPAIGN\_TYPE\_SHOPPING时不填写。 |
  | title | Struct5 | 否 | 文案。  根据版位元素creative\_size\_element\_name为title的规则填写（约束见[查询版位元素](/docs/monetize/promotion/marketing-api-tool-slot2-0000001338381965)）。 |
  | description | Struct5 | 否 | 描述。  根据版位元素creative\_size\_element\_name为description的规则填写（约束见[查询版位元素](/docs/monetize/promotion/marketing-api-tool-slot2-0000001338381965)）。 |
  | corporate | Struct5 | 否 | 品牌名称  根据版位元素creative\_size\_element\_name为corporate\_name的规则填写（约束见[查询版位元素](/docs/monetize/promotion/marketing-api-tool-slot2-0000001338381965)），支持通配符填写 取值如下：\\{brandName\\}。 |
  | landing\_page | Struc6 | 否 | 落地页信息。  根据版位元素creative\_size\_element\_name为landing\_page\_url的规则填写（约束见[查询版位元素](/docs/monetize/promotion/marketing-api-tool-slot2-0000001338381965)），仅当任务中的推广产品为ANDROID\_APP且定向中not\_installed\_apps\_struct不为空，此参数必填。  支持通配符，由运营配置项控制，目前取值如下：  \\{targetUrlMobile\\}移动端H5商品落地页  \\{brandUrlMobile\\}移动端H5品牌落地页 |
  | deeplink | Struct7 | 否 | 应用直达地址。  根据版位元素creative\_size\_element\_name为deeplink\_url的规则填写（约束见[查询版位元素](/docs/monetize/promotion/marketing-api-tool-slot2-0000001338381965)），仅当任务中的推广产品为ANDROID\_APP时可填写。定向中installed\_apps\_struct不为空，此参数必填，not\_installed\_apps\_struct不为空，此参数选填。  支持通配符，由运营配置项控制，目前取值如下：  \\{targetUrlAndroidApp\\}商品详情页  \\{dspHuimaiDeeplink\\}商品热卖页  \\{dspProductAggLink\\}商品会场页 |
  | impression\_monitor\_url | Struct8 | 否 | 展示监控地址，取值详见[查询分析工具关联关系](/docs/monetize/promotion/marketing-api-tool-tracking4-0000001338383009)。 |
  | click\_monitor\_url | Struct8 | 否 | 点击监控地址，取值详见[查询分析工具关联关系](/docs/monetize/promotion/marketing-api-tool-tracking4-0000001338383009)。 |
  | service\_card\_id | string | 否 | 服务卡片ID。  当campaign\_type = CAMPAIGN\_TYPE\_DISPLAY和creative\_size\_sub\_type = SERVICE\_CARD必填，来源负一屏，会进行合法性校验。 |
  | template | Struct10 | 否 | 创意模板ID。  campaign\_type=CAMPAIGN\_TYPE\_SHOPPING，creative\_mode= TEMPLATE\_MODE填写，取值详见[查询商品库动态模板](/docs/monetize/promotion/marketing-api-tool-dpa8-0000001338383021)。 |

  images 、icon、video(Struct4)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | file | Struct9 | 是 | 文件详情。 |

  file(Struct9)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | asset\_id | long | 是 | 素材ID。 |

  title、description 、corporate(Struct5)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | text | string | 是 | 内容，最长255。 |

  landing\_page(Struct6)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | landing\_page | string | 是 | 落地页地址 ，最长2048。 |
  | landing\_page\_type | string | 是 | 落地页类型，详见[落地页类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section5467205171914)。 |

  deeplink(Struct7)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | deeplink | string | 是 | 应用直达地址信息，最长2048，不能使用“@”特殊字符。 |

  impression\_monitor\_url、click\_monitor\_url(Struct8)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | monitor\_url | string | 是 | 展示监控地址 ，最长3800，以```https://开`头``。 |

  template(Struct10)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | template\_id | long | 是 | 模板ID，通过[查询商品库动态模板](/docs/monetize/promotion/marketing-api-tool-dpa8-0000001338383021)接口获取。 |

  - <strong>请求示例</strong>

    POST ads/v1/promotion/creative/update

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    [
        {
            "creative_id": 70052468,
            "content_struct": {
                "landing_page": {
                    "landing_page": "https://huawei.com.cn"
                },
                "deeplink": {
                    "deeplink": "https://huawei.com.cn"
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
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200"
    }
    ```
