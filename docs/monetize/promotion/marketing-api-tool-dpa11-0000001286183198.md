---
title: "批量更新商品价格"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-dpa11-0000001286183198
format: md
upstream_id: monetize/promotion/marketing-api-tool-dpa11-0000001286183198
last_sync: 2026-06-07
sync_hash: 47b752c9
---
# 批量更新商品价格

您通过本接口可以批量更新商品价格。

![](./img/note_3.0-zh-cn_9a112e362fbf.png) 

商品成功上架后，才可以调用该接口。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/product/update

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/product/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/product/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | product\_ids | string[] | 是 | 商品ID列表，最大100个。 |
  | store\_id | long | 是 | 商品库ID，请登录华为商品广告系统-商品库列表页面获取。 |
  | inventory\_status | string | 否 | 库存状态，详见[商品库库存状态（适用于DPA）](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section14542448142316)，默认值：INVENTORY\_STATUS\_YES。 |
  | status | string | 否 | 是否可投放，详见[投放状态](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section4424554122317)，默认为LAUNCH\_STATUS\_YES。 |
  | discount | double | 否 | 商品折扣，0.1 ~ 1.0，默认值1。 |
  | disprice | double | 否 | 限时价格。 |
  | inventory\_volume | integer | 否 | 库存数量。 |
  | offline\_time | string | 否 | 下线时间，格式yyyy-MM-dd HH:mm:ss，时区和商品原本时区相同。 |
  | price | bigdecimal | 是 | 现价。 |
  | currency | string | 否 | 币种，使用ISO 4217标准的字母代码，例如：USD、EUR、CNY等。 |
  | original\_price | bigdecimal | 否 | 商品原价。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/dpa/product/update HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer DAEAALpy3envCfdLiOZRerq2oopxMPmzJmgZOVXs1o27CRO8kHr5z2nyH6bXPxvZIadBeVYgOo1qg3rkXNVd13f9kqn%252F65sm%252Bev7G8h1VT9l3rDMl00q

    ```
    {
        "product_ids": [
            "555413",
            "555416"
        ],
        "store_id": 848986076793265200,
        "price": 25.99,
        "inventory_status": "INVENTORY_STATUS_YES",
        "status": "LAUNCH_STATUS_YES",
        "discount": 1,
        "disprice": 19.99,
        "inventory_volume": 100,
        "offline_time": "2022-05-31 00:00:00",
        "currency": "USD"
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
