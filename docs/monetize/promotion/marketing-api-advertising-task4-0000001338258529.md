---
title: "批量编辑任务状态"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-advertising-task4-0000001338258529
format: md
upstream_id: monetize/promotion/marketing-api-advertising-task4-0000001338258529
last_sync: 2026-06-07
sync_hash: 3e69ea07
---
# 批量编辑任务状态

您通过本接口可以批量编辑任务状态。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/adgroup/status/update

  俄罗斯 : https://ads-drru.cloud.huawei.ru/ads/v1/promotion/adgroup/status/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/adgroup/status/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | adgroup\_ids | long[] | 是 | 任务ID数组,最大50个任务id。 |
  | op\_type | string | 是 | 操作类型，详见[操作类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section6618155418172)。  注：1.如果任务已是删除状态，则会提示任务已删除，不可更新操作；  2.任务下无审核通过的有效素材，不能进行修改任务状态操作；  3.已结束的任务不支持修改状态操作；  4.启动操作需要保证任务原状态是暂停状态  5.暂停操作需要保证任务是启动状态。 |

  - <strong>请求示例</strong>

    POST /ads/v1/promotion/adgroup/status/update HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": "509380059010738048",
        "adgroup_ids": [
            46060512,
            46060487
        ],
        "op_type": "OPERATION_DISABLE"
    }
    ```
  - <strong>响应字段</strong>

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 编辑失败的任务列表。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | <strong>error\_info\_list</strong> | Struct2[] | 编辑失败的任务列表。 |

    error\_info\_list(Struct2)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | id | long | 错误ID。 |
    | code | integer | 错误结果码。 |
    | message | string | 错误描述。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200"
    }
    ```
