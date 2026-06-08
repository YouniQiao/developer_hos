---
title: "编辑计划"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-advertising-campaign3-0000001338495013
format: md
upstream_id: monetize/promotion/marketing-api-advertising-campaign3-0000001338495013
last_sync: 2026-06-07
sync_hash: e26006af
---
# 编辑计划

您通过本接口可以编辑计划状态、计划名称、计划日预算。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/campaign/update

  俄罗斯 : https://ads-drru.cloud.huawei.ru/ads/v1/promotion/campaign/update

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/campaign/update
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | campaign\_id | string | 是 | 计划ID，长度为1到50。 |
  | campaign\_name | string | 否 | 编辑后的名称，  最大长度不得超100位；  不能使用“^”,“|”特殊字符不能等于原来计划值且不能重复。 |
  | daily\_budget | Struct1 | 否 | 日预算，修改后的值不能与原值重复，详见[修改限额约束](/docs/monetize/promotion/marketing-api-appendix5-0000001338486113#section1543192018918)。 |
  | campaign\_status | string | 否 | 计划需要设置的状态，详见[操作类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section6618155418172)。 |

  daily\_budget(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | daily\_budget | integer | 是 | 日预算，修改后的值不能与原值重复，详见[修改限额约束](/docs/monetize/promotion/marketing-api-appendix5-0000001338486113#section1543192018918)。 |
  | daily\_budget\_op\_type | string | 是 | 计划修改日预算操作类型，详见[计划修改日限额操作类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section2030619466205)。 |

  - <strong>请求示例</strong>

    POST /ads/v1/promotion/campaign/update HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "campaign_id": "30052950",
        "campaign_name": "编辑海外计划1",
        "campaign_status": "OPERATION_DISABLE",
        "daily_budget": {
            "daily_budget": 500,
            "daily_budget_op_type": "UPDATE_TODAY_DAILY_BUDGET"
        }
    }
    ```
  - <strong>响应字段</strong>

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
  - <strong>应答示例</strong>

    HTTPS/1.1

    ```
    {
        "code": 200
    }
    ```
