---
title: "修改定向包"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-targeting3-0000001286183190
format: md
upstream_id: monetize/promotion/marketing-api-tool-targeting3-0000001286183190
last_sync: 2026-06-07
sync_hash: 56189c8e
---
# 修改定向包

您通过本接口可以修改定向包。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/targeting\_package/update

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/targeting\_package/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/targeting\_package/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | targeting\_id | long | 是 | 定向包ID。 |
  | targeting\_name | string | 否 | 定向包名称，最大长度不超过100。 |
  | gender\_struct | Struct2 | 否 | 性别定向，值为gender定向中的value。  单选值，不支持复选。 |
  | age\_struct | Struct2 | 否 | 年龄定向，值为age定向中的value。可同时选择不同年龄段的。 |
  | series\_type\_struct | Struct2 | 否 | 手机系列定向，值为series\_type定向中的value，series\_type\_struct和device\_price\_struct不能同时选择。 |
  | app\_category\_installed\_struct | Struct2 | 否 | 已安装App分类定向，值为app\_category定向中的value。  app\_category\_installed\_struct、not\_app\_category\_install\_struct、app\_category\_active\_struct不能同时选择。 |
  | not\_app\_category\_install\_struct | Struct2 | 否 | 未安装App分类定向，值为app\_category定向中的value。  app\_category\_installed\_struct、not\_app\_category\_install\_struct、app\_category\_active\_struct不能同时选择。 |
  | app\_category\_active\_struct | Struct2 | 否 | 一个月内活跃App分类定向，值为app\_category定向中的value。  app\_category\_installed\_struct、not\_app\_category\_install\_struct、app\_category\_active\_struct不能同时选择。 |
  | network\_type\_struct | Struct2 | 否 | 网络类型定向，值为network\_type定向中的value，可以复选。 |
  | audience\_struct | Struct2 | 否 | 自定义人群定向，值为pre\_define\_audience定向中的id；  pre\_defined\_audience\_struct和not\_pre\_defined\_audience\_struct选择的值不能相同。 |
  | not\_audience\_struct | Struct2 | 否 | 排除自定义人群定向，值为not\_pre\_define\_audience定向中的id  pre\_defined\_audience\_struct和not\_pre\_defined\_audience\_struct选择的值不能相同。 |
  | current\_custom\_location\_struct | Struct2 | 否 | 自定义地理位置-当前-包含；  商品广告必填地域，地域编码详见[海外地域字典数据](/docs/monetize/promotion/marketing-api-tool-targeting7-0000001286343134#ZH-CN_TOPIC_0000001286343134__li1079145116117)。 |
  | not\_current\_custom\_location\_struct | Struct2 | 否 | 自定义地理位置-当前-排除；  商品广告必填地域，地域编码详见[海外地域字典数据](/docs/monetize/promotion/marketing-api-tool-targeting7-0000001286343134#ZH-CN_TOPIC_0000001286343134__li1079145116117)。 |
  | app\_category\_of\_media\_struct | Struct2 | 否 | 投放媒体类型定向值为media\_app\_category；  value值如果需要选择所有的子节点的话，可以只传入父节点，相关联的父子节点不能同时填入。 |
  | carrier\_struct | Struct2 | 否 | 运营商定向，值为carrier的value（注意取pid非0的value）。 |
  | language\_struct | Struct2 | 否 | 语言定向，值为language的value，商品广告不支持语言定向。 |
  | unlimit\_app\_interest\_struct | Struct2 | 否 | App兴趣，值为app\_interest中的value。 |
  | normal\_app\_interest\_struct | Struct2 | 否 | App兴趣中兴趣的用户，值为app\_interest中的value。 |
  | high\_app\_interest\_struct | Struct2 | 否 | App兴趣高兴趣的用户，值为app\_interest中的value。 |
  | ai\_target | Struct2 | 否 | 智能扩量如果填值不为空，智能扩量开关ai\_target\_flag必须打开，取值详见[智能扩量](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section1559243472919)。 |
  | ai\_target\_flag | string | 否 | 智能扩量开关：开关打开ai\_target字段如果不填就是默认突破，取值详见[智能扩量开关](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section9173164110290)。 |
  | app\_category\_of\_media\_struct | Struct2 | 否 | 投放媒体类型定向  value值如果需要选择所有的子节点的话，可以只传入父节点 |
  | not\_app\_category\_of\_media\_struct | Struct2 | 否 | 投放媒体类型排除定向 |

  Struct2定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | value | string[] | 是 | 定向选中的值。 |
  | additional | string | 否 | - |

  - <strong>请求示例</strong>

    POST ads/v1/tools/targeting\_package/update

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": "504216955008382592",
        "targeting_id": "90084638",
        "gender_struct": {
            "value": [
                "1"
            ]
        },
        "age_struct": {
            "value": [
                "3",
                "4"
            ]
        },
        "app_category_installed_struct": {
            "value": [
                "15",
                "18"
            ]
        },
        "network_type_struct": {
            "value": [
                "4G",
                "3G"
            ]
        },
        "not_audience_struct": {
            "value": [
                "7|2358408",
                "8|2235148"
            ]
        },
        "not_app_category_of_media_struct": {
            "value": [
                "21",
                "15"
            ]
        }
    }
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
