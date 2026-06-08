---
title: "批量下架商品"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-dpa12-0000001338263153
format: md
upstream_id: monetize/promotion/marketing-api-tool-dpa12-0000001338263153
last_sync: 2026-06-07
sync_hash: c2ecb028
---
# 批量下架商品

您通过本接口可以批量下架商品。

![](./img/note_3.0-zh-cn_5cc92271b2d7.png) 

只有商品成功上架，才可以调用该接口。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/product/offline

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/product/offline

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/product/offline
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | product\_ids | string[] | 是 | 商品ID列表，最多100个。 |
  | store\_id | long | 是 | 商品库ID，请登录华为商品广告系统-商品库列表页面获取。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/dpa/product/offline HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer DAEAALpy3envCfdLiOZRerq2oopxMPmzJmgZOVXs1o27CRO8kHr5z2nyH6bXPxvZIadBeVYgOo1qg3rkXNVd13f9kqn%252F65sm%252Bev7G8h1VT9l3rDMl00q

    ```
    {
        "product_ids": [
            "62608",
            "62609"
        ],
        "store_id": 848986076793265200
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
        "code": "200",
        "message": true
    }
    ```
