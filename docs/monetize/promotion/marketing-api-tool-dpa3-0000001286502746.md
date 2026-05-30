---
title: "全量导入商品通知"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-dpa3-0000001286502746
---
# 全量导入商品通知

您通过本接口可以实现全量导入商品通知。

![](./img/note_3.0-zh-cn_0389808115a6.png) 

1. 全量添加过程，全量导入商品通知接口开始，然后再调用批量添加接口，最后调用导入商品通知接口结束。

2. 增量添加过程，直接调用批量添加接口，增加导入要先全量导入成功后才可以增量。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/product/import\_notify

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/product/import\_notify

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/product/import\_notify
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | store\_id | long | 是 | 商品库ID，请登录华为商品广告系统-商品库列表页面获取。 |
  | operation\_type | string | 是 | 全量导入商品通知类型，取值如下：BEGIN、END。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/dpa/product/import\_notify/update HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer DAEAALpy3envCfdLiOZRerq2oopxMPmzJmgZOVXs1o27CRO8kHr5z2nyH6bXPxvZIadBeVYgOo1qg3rkXNVd13f9kqn%252F65sm%252Bev7G8h1VT9l3rDMl00q

    ```
    {
        "store_id": "45001041",
        "operation_type": "BEGIN"
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码：200：成功、500：失败。 |
    | message | string | 返回描述。 |
    | data | boolean | 是否成功。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": true
    }
    ```
