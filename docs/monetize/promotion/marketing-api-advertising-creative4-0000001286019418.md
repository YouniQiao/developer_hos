---
title: "批量编辑创意状态"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-advertising-creative4-0000001286019418
---
# 批量编辑创意状态

您通过本接口可以批量编辑创意状态。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/creative\_status/update

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/creative\_status/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/creative\_status/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | creative\_ids | long[] | 是 | 创意ID。 |
  | op\_type | string | 是 | 操作类型，详见[操作类型](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section6618155418172)。  1.原状态为删除，不可更新；  2.启动操作需要保证创意原状态是暂停状态；  3.暂停操作保证创意是启动状态；  4.删除操作保证创意未删除。 |

  - <strong>请求示例</strong>

    POST /ads/v1/promotion/creative\_status/update

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": "509380059010738048",
        "creative_ids": [
            58108389,
            58108381
        ],
        "op_type": "OPERATION_DELETE"
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 创意ID列表。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | success | long[] | 更新状态成功的创意ID列表。 |
    | errors | Struct2[] | 更新失败的创意列表。 |

    errors(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | creative\_id | long | 更新状态失败的创意ID。 |
    | error\_code | string | 更新失败的错误码。 |
    | error\_message | string | 更新失败的原因。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "errors": [
                {
                    "creative_id": 58108389,
                    "error_code": "1005025",
                    "error_message": "The creative ID does not exist."
                },
                {
                    "creative_id": 58108381,
                    "error_code": "1005025",
                    "error_message": "The creative ID does not exist."
                }
            ]
        }
    }
    ```
