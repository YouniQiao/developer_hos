---
title: "查询素材"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-asset2-0000001338262105
---
# 查询素材

您通过本接口可以查询素材。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/creative\_asset/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/creative\_asset/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/creative\_asset/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | page | integer | 是 | 搜索页码，取值范围1~10000。 |
  | page\_size | integer | 是 | 一页展示数量，取值范围 10~50。 |
  | filtering | Struct1 | 否 | 过滤条件，若此字段不传，或传空则视为无限制条件。 |

  filtering (Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | width | integer | 否 | 素材宽度。 |
  | height | integer | 否 | 素材高度。 |
  | asset\_id | long | 否 | 素材ID。 |
  | asset\_name | string | 否 | 素材名称。 |
  | asset\_type | string | 否 | 素材类型，详见[素材类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1346462516198)。 |
  | file\_hash\_sha256 | string | 否 | SHA256摘要，用于端侧校验。 |
  | asset\_status | string | 否 | 素材状态，详见[素材状态](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section20198250101918)。 |

  - <strong>请求示例</strong>

    GET /ads/v1/tools/creative\_asset/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": "494008260362282880",
        "page": 1,
        "page_size": 50,
        "filtering": {
            "asset_id": "30008193"
        }
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 素材列表。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | total | integer | 素材总条数。 |
    | creative\_asset\_infos | Struct2[] | 素材列表。 |

    creative\_asset\_infos(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | asset\_id | long | 素材ID。 |
    | asset\_name | string | 素材名称。 |
    | file\_url | string | 文件url信息，固定的永久的URL信息。 |
    | width | integer | 素材宽。 |
    | height | integer | 素材高。 |
    | video\_play\_duration | integer | 播放时长。 |
    | file\_size | integer | 文件大小，单位bytes。 |
    | file\_format | string | 详见[素材类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1346462516198)。 |
    | asset\_type | string | 素材类型，详见[素材类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section1346462516198)。 |
    | file\_hash\_sha256 | string | 文件SHA256摘要。 |
    | asset\_status | string | 素材状态，详见[素材状态](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section20198250101918)。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "total": 1,
            "creative_asset_infos": [
                {
                    "asset_status": "CREATIVE_ASSET_ENABLE",
                    "asset_id": 30008193,
                    "asset_name": "c23662212a204b1e9626476d1936fb45-6d0afbcb-bd4d-48b2-8224-e87a55031969",
                    "asset_type": "CREATIVE_ASSET_PICTURE",
                    "file_url": "https://pps-connector-performance-arm-test-cn.obs.cn-north-4.myhwclouds.com/dl/pps/20220607224205052564E10A7930E49624367E82sample.png",
                    "width": 1080,
                    "height": 1920,
                    "video_play_duration": 0,
                    "file_size": 1938373,
                    "file_format": "image/png",
                    "file_hash_sha256": "2e8227c59fc4fcc94771e12ed8af8a11c45344c4d1c1c2f26c6e25706eeea3de"
                }
            ]
        }
    }
    ```
