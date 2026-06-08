---
title: "删除定向包"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-targeting4-0000001338406725
format: md
upstream_id: monetize/promotion/marketing-api-tool-targeting4-0000001338406725
last_sync: 2026-06-07
sync_hash: cce599ed
---
# 删除定向包

您通过本接口可以删除定向包。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/targeting\_package/delete

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/targeting\_package/delete

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/targeting\_package/delete
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | targeting\_id | long | 是 | 定向包ID。 |

  - <strong>请求示例</strong>

    POST ads/v1/tools/targeting\_package/delete

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "targeting_id": "90084638"
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
