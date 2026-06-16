---
title: "更新商品库"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-dpa5-0000001286023250
format: md
upstream_id: monetize/promotion/marketing-api-tool-dpa5-0000001286023250
last_sync: 2026-06-07
sync_hash: 0a1c752f
---
# 更新商品库

您通过本接口可以更新商品库。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/dpa/store/update

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/dpa/store/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/dpa/store/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | store\_id | long | 是 | 商品库Id。 |
  | store\_name | string | 否 | 商品库名称。 |
  | store\_group | string | 否 | 商品库分组，创建DPA任务时，可以通过商品库分组实现用于投放任务的商品库。 |
  | store\_data\_source | Struct1 | 否 | 商品库商品更新数据源配置。 |
  | store\_update\_policy | Struct2 | 否 | 商品库商品更新策略，当upload\_method = ADS\_API时不允许填写。 |

  store\_data\_source(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | upload\_method | string | 是 | 商品库数据上传方式，详见[商品库数据上传方式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#商品库数据上传方式)。 |
  | update\_type | string | 否 | 商品库数据更新方式，详见[商品库数据更新方式](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#商品库数据更新方式)。  当upload\_method = ADS\_API时非必填，其他场景必填。 |

  store\_update\_policy(Struct2)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | xml\_update\_url\_type | string | 是 | 定时拉取方式获取xml数据的url地址类型, 详见[url地址类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#url地址类型)。 |
  | xml\_update\_url | string | 是 | 定时拉取方式获取xml数据的url地址。 |
  | auth\_name | string | 否 | 用户名。 |
  | auth\_password | string | 否 | 密码。 |
  | update\_frequency | integer | 是 | 定时拉取更新频次，单位小时。 |
  | update\_begin\_time | integer | 是 | 定时拉取开始时间，只能是整点，0-23。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/dpa/store/update HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer DAEAALpy3envCfdLiOZRerq2oopxMPmzJmgZOVXs1o27CRO8kHr5z2nyH6bXPxvZIadBeVYgOo1qg3rkXNVd13f9kqn%252F65sm%252Bev7G8h1VT9l3rDMl00q

    ```
    {
        "store_id": 67863729372,
        "store_name": "cyx55",
        "store_data_source": {
            "upload_method": "ADS_API",
            "update_type": "INCREMENTAL_UPDATE"
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码200：成功，其他错误码标识失败。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 更新商品库响应数据。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | store\_id | long | 商品库Id。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": 200,
        "data": {
            "store_id": "35003379"
        }
    }
    ```
