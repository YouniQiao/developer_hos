---
title: "创建推广产品"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-advertising-product1-0000001338259305
format: md
upstream_id: monetize/promotion/marketing-api-advertising-product1-0000001338259305
last_sync: 2026-06-07
sync_hash: 84ba69d7
---
# 创建推广产品

您通过本接口可以推广产品。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/product/create

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/product/create

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/product/create
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | product\_type | string | 是 | 推广产品，详见[推广产品类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#推广产品类型)。 |
  | ag\_app\_type | string | 否 | 推广应用类型，当product\_type = ANDROID\_APP时必填，详见[推广应用类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#推广应用类型)。 |
  | product\_info | Struct1 | 是 | 推广产品信息。 |

  product\_info(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | app | Struct2 | 否 | 应用信息，product\_type为ANDROID\_APP时填写。 |
  | web\_page | Struct3 | 否 | 网页信息，product\_type为WEB时填写。 |

  app(Struct2)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | app\_id | string | 是 | 华为应用市场App ID。 |

  web\_page(Struct3)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | dest\_url | string | 是 | 落地页地址，最长2048，以```https://开头和http://开`头``。  当推广产品用于创建ads商品广告（campaign\_type=CAMPAIGN\_TYPE\_SHOPPING时）时，该字段可填写 \\{targetUrlMobile\\}。 |

  - <strong>请求示例</strong>

    POST /ads/v1/promotion/product/create

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "product_type": "ANDROID_APP",
        "ag_app_type": "AG_APP_FOR_DISPLAY_NETWORK",
        "product_info": {
            "app": {
                "app_id": "C10280916"
            }
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码 |
    | message | string | 返回描述 |
    | data | Struct1 | 推广产品ID |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | product\_id | long | 推广产品ID |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": 200,
        "data": {
            "product_id": 123456
        }
    }
    ```
