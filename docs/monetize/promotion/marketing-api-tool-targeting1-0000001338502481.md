---
title: "创建定向包"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-targeting1-0000001338502481
---
# 创建定向包

您通过本接口创建定向包，创建后的定向包，可以绑定同一广告主的多个任务。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/targeting\_package/create

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/targeting\_package/create

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/targeting\_package/create
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | targeting\_name | string | 是 | 定向包名称，最大长度不超过100必填。 |
  | targeting\_description | string | 否 | 定向包描述，最大长度不超过100。 |
  | targeting\_type | string | 是 | 定向包类型，包含应用类、非应用类，详见[【定向包类型】](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section14680439191)。 |
  | gender\_struct | Struct2 | 否 | 性别定向，值为gender定向中的value。  单选值，不支持复选。 |
  | age\_struct | Struct2 | 否 | 年龄定向，值为age定向中的value。  可同时选择不同年龄段的值。 |
  | series\_type\_struct | Struct2 | 否 | 手机系列定向，值为series\_type定向中的value。 |
  | installed\_apps\_struct | Struct2 | 否 | 已安装应用定向，如果选择此定向，value填写[“true”]，productType为ANDROID\_APP时，installedAppsStruct和not\_installed\_Apps\_struct为二选一。 |
  | not\_installed\_apps\_struct | Struct2 | 否 | 未安装应用定向，如果选择此定向，value填写[“true”]，productType为ANDROID\_APP时，installedAppsStruct和not\_installed\_apps\_struct为二选一。 |
  | app\_category\_installed\_struct | Struct2 | 否 | 已安装App分类定向，值为app\_category定向中的value，app\_category\_installed\_struct、not\_app\_category\_install\_struct、app\_category\_active\_struct不能同时选择。 |
  | not\_app\_category\_install\_struct | Struct2 | 否 | 未安装App分类定向，值为app\_category定向中的value，app\_category\_installed\_struct、not\_app\_category\_install\_struct、app\_category\_active\_struct不能同时选择。 |
  | app\_category\_active\_struct | Struct2 | 否 | 一个月内活跃App分类定向，值为app\_category定向中的value，app\_category\_installed\_struct、not\_app\_category\_install\_struct、app\_category\_active\_struct不能同时选择。 |
  | network\_type\_struct | Struct2 | 否 | 网络类型定向，值为network\_type定向中的value，可以复选。 |
  | audience\_struct | Struct2 | 否 | 自定义人群定向，值为pre\_define\_audience定向中的id；pre\_defined\_audience\_struct和not\_pre\_defined\_audience\_struct选择的值不能相同；  取查询定向接口响应数据。 |
  | not\_audience\_struct | Struct2 | 否 | 排除自定义人群定向，值为not\_pre\_define\_audience定向中的id；  pre\_defined\_audience\_struct和not\_pre\_defined\_audience\_struct选择的值不能相同。  取查询定向接口响应数据。 |
  | current\_custom\_location\_struct | Struct2 | 否 | 自定义地理位置-当前-包含，详见[海外地域字典数据](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-targeting7-0000001286343134#ZH-CN_TOPIC_0000001286343134__li1079145116117)。 |
  | not\_current\_custom\_location\_struct | Struct2 | 否 | 自定义地理位置-当前-排除，详见[海外地域字典数据](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-targeting7-0000001286343134#ZH-CN_TOPIC_0000001286343134__li1079145116117)。 |
  | app\_category\_of\_media\_struct | Struct2 | 否 | 投放媒体类型定向值为media\_app\_category；  value值如果需要选择所有的子节点的话，可以只传入父节点；  相关联的父子节点不能同时填入。 |
  | carrier\_struct | Struct2 | 否 | 运营商定向，值为carrier的value（注意取pid非0的value）。 |
  | language\_struct | Struct2 | 否 | 语言定向，值为language的value。 |
  | unlimit\_app\_interest\_struct | Struct2 | 否 | App兴趣。值为app\_interest中的value、unlimit\_app\_interest\_struct、normal\_app\_interest\_struct、high\_app\_interest\_struct，只能选择填写一个。 |
  | normal\_app\_interest\_struct | Struct2 | 否 | App兴趣中兴趣的用户。值为app\_interest中的value、unlimit\_app\_interest\_struct、normal\_app\_interest\_struct、high\_app\_interest\_struct，只能选择填写一个。 |
  | high\_app\_interest\_struct | Struct2 | 否 | App兴趣高兴趣的用户。值为app\_interest中的value、unlimit\_app\_interest\_struct、normal\_app\_interest\_struct、high\_app\_interest\_struct，只能选择填写一个。 |
  | ai\_target | Struct2 | 否 | 智能扩量。  如果填值不为空，智能扩量开关ai\_target\_flag必须打开，取值详见[【智能扩量】](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1559243472919)。 |
  | ai\_target\_flag | string | 否 | 智能扩量开关：开关打开ai\_target字段如果不填就是默认突破，取值详见[【智能扩量开关】](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section9173164110290)。 |
  | app\_category\_of\_media\_struct | Struct2 | 否 | 投放媒体类型定向  value值如果需要选择所有的子节点的话，可以只传入父节点 |
  | not\_app\_category\_of\_media\_struct | Struct2 | 否 | 投放媒体类型排除定向 |
  | accept\_roaming\_flag | string | 否 | 漫游流量开关：选择地域定向时生效，字段不填时默认打开。  取值详见[漫游流量开关](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section16966142714578) |

  Struct2定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | value | string[] | 是 | 定向选中的值。 |
  | additional | string | 否 |  |

  - <strong>请求示例</strong>

    POST ads/v1/tools/targeting\_package/create

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": "504217979710404224",
        "targeting_name": "海外-非应用类",
        "targeting_description": "showcase",
        "targeting_type": "TARGET_TYPE_NOT_APP",
        "gender_struct": {
            "value": [
                "0"
            ]
        },
        "network_type_struct": {
            "value": [
                "2G",
                "WIFI",
                "3G",
                "4G"
            ]
        },
        "app_category_active_struct": {
            "value": [
                "20",
                "18",
                "15"
            ]
        },
        "age_struct": {
            "value": [
                "3",
                "5",
                "1"
            ]
        },
        "app_category_of_media_struct": {
            "value": [
                "16",
                "15"
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
        "carrier_struct": {
            "value": [
                "1119"
            ]
        },
        "series_type_struct": {
            "value": []
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 定向包ID。 |

    Struct1定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | targeting\_id | long | 定向包ID。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "targeting_id": "65002585"
        }
    }
    ```
