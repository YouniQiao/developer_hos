---
title: "编辑素材"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-asset3-0000001286022210
format: md
---

# 编辑素材

您通过本接口可以编辑素材。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/creative\_asset/update

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/creative\_asset/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/creative\_asset/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | asset\_id | long | 是 | 素材ID。 |
  | asset\_name | string | 是 | 修改后的素材名称，最长100位不能包含”’”,”\”,”\\{”,”\\}”,”%”,”\*”,”^”,”#”,”&lt;”,”&gt;”,”|”特殊字符。 |

  - <strong>请求示例</strong>

    POST ads/v1/tools/creative\_asset/update HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "asset_id": "30007131",
        "asset_name": "bianjisucaimingcheng"
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
        "code": 200
    }
    ```
