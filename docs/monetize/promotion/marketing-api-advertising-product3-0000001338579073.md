---
title: "编辑推广产品"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-advertising-product3-0000001338579073
---
# 编辑推广产品

您通过本接口可以编辑推广产品。仅可以网页类型的推广产品。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/product/update

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/product/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/product/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | product\_id | long | 是 | 创建的推广产品id。 |
  | product\_type | string | 是 | 推广产品 ，详见[推广产品类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section396354212216)。 |
  | ag\_app\_type | string | 否 | 推广应用类型，详见[推广应用类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section166083016284)。 |
  | product\_info | Struct1 | 是 | 推广产品信息。 |

  product\_info(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | web\_page | Struct3 | 否 | 网页信息，product\_type为WEB时填写。 |

  web\_page(Struct3)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | dest\_url | string | 是 | 落地页地址，最长2048，以```https://开头和http://开`头``。  当推广产品用于创建商品广告（campaign\_type=CAMPAIGN\_TYPE\_SHOPPING时）时，该字段可填写 \{targetUrlMobile\}。 |

  - <strong>请求示例</strong>

    POST /ads/v1/promotion/product/update

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "product_id": "30031747",
        "product_type": "WEB",
           "product_info": {
            "web_page": {
                "dest_url": "https://www.huawei.com"
            }
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
        "code": 200
    }
    ```
