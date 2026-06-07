---
title: "查询指定定向包详情"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-targeting6-0000001286023246
format: md
---

# 查询指定定向包详情

您通过本接口可以查询公共定向包或私有定向包详情。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/targeting\_package\_detail/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/targeting\_package\_detail/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/targeting\_package\_detail/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | targeting\_id | long | 是 | 定向包ID。 |

  - <strong>请求示例</strong>

    GET /ads/v1/tools/targeting\_package\_detail/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": "494008260362282880",
        "targeting_id": "90084433"
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 定向包详情。 |

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数字段</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | targeting\_id | long | 定向包ID。 |
    | targeting\_name | string | 定向包名称。 |
    | targeting\_scope | string | 定向类型，详见[定向类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1090712128282)。 |
    | targeting\_description | string | 定向包描述。 |
    | targeting\_type | string | 定向包类型，包含应用类、非应用类，详见[定向包类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section14680439191)。 |
    | gender\_struct | Struct3 | 性别定向，值为gender定向中的value。 |
    | age\_struct | Struct3 | 年龄定向，值为age定向中的value。 |
    | series\_type\_struct | Struct3 | 手机系列定向，值为series\_type定向中的value。 |
    | installed\_apps\_struct | Struct3 | 已安装应用定向，如果选择此定向，value不为空。 |
    | not\_installed\_apps\_struct | Struct3 | 未安装应用定向，如果选择此定向，value不为空。 |
    | app\_category\_installed\_struct | Struct3 | 已安装App分类定向，值为app\_category定向中的value。 |
    | not\_app\_category\_install\_struct | Struct3 | 未安装App分类定向，值为app\_category定向中的value。 |
    | app\_category\_active\_struct | Struct3 | 一个月内活跃App分类定向，值为app\_category定向中的value。 |
    | network\_type\_struct | Struct3 | 网络类型定向，值为network\_type定向中的value。 |
    | audience\_struct | Struct3 | 自定义人群定向，值为pre\_define\_audience定向中的id。 |
    | not\_audience\_struct | Struct3 | 排除自定义人群定向，值为not\_pre\_define\_audience定向中的id。 |
    | current\_custom\_location\_struct | Struct3 | 自定义地理位置-当前-包含。 |
    | not\_current\_custom\_location\_struct | Struct3 | 自定义地理位置-当前-排除。 |
    | app\_category\_of\_media\_struct | Struct3 | 投放媒体类型定向。 |
    | not\_app\_category\_of\_media\_struct | Struct3 | 投放媒体类型排除定向。 |
    | carrier\_struct | Struct2 | 运营商定向，值为carrier的value。 |
    | language\_struct | Struct2 | 语言定向，值为language的value。 |
    | unlimit\_app\_interest\_struct | Struct2 | App兴趣定向，app\_interest中的value。 |
    | normal\_app\_interest\_struct | Struct2 | 中等兴趣App的用户定向app\_interest中的value。 |
    | high\_app\_interest\_struct | Struct2 | 高兴趣App的用户定向，app\_interest中的value。 |
    | ai\_target | Struct2 | 智能扩量，详见[智能扩量](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1559243472919)。 |
    | ai\_target\_flag | string | 智能扩量开关，详见[智能扩量开关](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section9173164110290)。 |
    | is\_retain\_assistant | boolean | 是否为次留定向包，true为是，false为否。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 1,
            "data": [
                {
                    "targeting_id": 90084142,
                    "targeting_description": "showcase",
                    "targeting_type": "TARGET_TYPE_NOT_APP",
                    "targeting_name": "海外-非应用类",
                    "gender_struct": {
                        "value": [
                            "0"
                        ]
                    },
                    "age_struct": {
                        "value": [
                            "1",
                            "3",
                            "5"
                        ]
                    },
                    "app_category_active_struct": {
                        "value": [
                            "15",
                            "18",
                            "20"
                        ]
                    },
                    "network_type_struct": {
                        "value": [
                            "2G",
                            "3G",
                            "4G",
                            "WIFI"
                        ]
                    },
                    "series_type_struct": {
                        "value": []
                    },
                    "app_category_of_media_struct": {
                        "value": [
                            "15",
                            "16"
                        ]
                    },
                    "carrier_struct": {
                        "value": [
                            "1119"
                        ]
                    },
                    "normal_app_interest_struct": {
                        "value": [
                            "16",
                            "20",
                            "21",
                            "22",
                            "378",
                            "382"
                        ]
                    },
                    "current_custom_location_struct": {
                        "value": [
                            "1023330520121418798"
                        ]
                    },
                    "ai_target_flag": "AI_TARGET_DISABLE",
                    "is_retain_assistant": false
                }
            ]
        }
    }
    ```
