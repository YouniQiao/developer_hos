---
title: "查询推广产品"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-advertising-product2-0000001286498910
---
# 查询推广产品

您通过本接口可以查询推广产品。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/product/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/product/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/product/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | filtering | Struct1 | 是 | 过滤条件。 |
  | page | integer | 是 | 搜索页码，取值范围1~10000。 |
  | page\_size | integer | 是 | 一页展示数量，取值范围 10~50。 |

  filtering(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | product\_type | string | 是 | 推广产品 ，详见[推广产品类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section396354212216)。 |
  | ag\_app\_type | string | 否 | 推广应用类型，当product\_type = ANDROID\_APP时必填，详见[推广应用类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section166083016284)。 |
  | product\_id | long | 否 | 推广产品id。 |

  - <strong>请求示例</strong>

    GET /ads/v1/promotion/product/query

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "page": 1,
        "page_size": 10,
        "filtering": {
            "product_type": "ANDROID_APP",
            "ag_app_type": "AG_APP_FOR_DISPLAY_NETWORK"
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 推广产品详情。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | product\_id | long | 推广产品ID。 |
    | product\_type | string | 推广产品，详见[推广产品类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section396354212216)。 |
    | product\_info | Struct2 | 产品信息。 |

    product\_info(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | app | Struct3 | 应用信息。 |
    | web\_page | Struct5 | 网页信息。 |

    app(Struct3)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | app\_id | string | 华为应用市场App ID。 |
    | product\_name | string | 应用名称。 |
    | package\_name | string | 应用包名。 |
    | icon\_url | string | App图标地址。 |
    | description | string | App描述/介绍。 |
    | app\_store\_download\_url | string | App下载地址。 |
    | app\_store\_second\_  download\_url | string | App备用下载地址。 |
    | default\_editor\_desc | string | App的一句话简介。 |

    web\_page(Struct5)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | dest\_url | string | 落地页地址。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 1,
            "data": [
                {
                    "product_type": "ANDROID_APP",
                    "product_id": "30030899",
                    "product_info": {
                        "app": {
                            "icon_url": "https://lfhiapptest.hwcloudtest.cn:39443/hwmarket3/files/application/icon144/ebab6c3dee454c1f92327edf74sample.png",
                            "app_store_download_url": "https://lfhiapptest.hwcloudtest.cn:39443/hwmarketmirrortest/application/apk/eb/ebab6c3dee454c1f92327edf748c7292/com.saicmobility.user.2106282132.apk?maple=0&trackId=0&distOpEntity=HWSW",
                            "app_store_second_download_url": "https://lfhiapptest.hwcloudtest.cn:39443/hwmarketmirrortest/application/apk/eb/ebab6c3dee454c1f92327edf748c7292/com.saicmobility.user.2106282132.apk?maple=0&trackId=0&distOpEntity=HWSW",
                            "package_name": "com.sample.user",
                            "description": "周三打车低至1元起。",
                            "reserve_countries": [],
                            "default_editor_desc": "示例出行",
                            "countries": [],
                            "app_id": "C000000000",
                            "product_name": "示例出行"
                        }
                    }
                }
            ]
        }
    }
    ```
