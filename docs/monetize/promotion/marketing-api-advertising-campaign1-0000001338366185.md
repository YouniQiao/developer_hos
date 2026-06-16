---
title: "创建计划"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-advertising-campaign1-0000001338366185
format: md
upstream_id: monetize/promotion/marketing-api-advertising-campaign1-0000001338366185
last_sync: 2026-06-07
sync_hash: d165a51a
---
# 创建计划

您通过本接口创建计划。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/campaign/create

  俄罗斯 : https://ads-drru.cloud.huawei.ru/ads/v1/promotion/campaign/create

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/campaign/create
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | campaign\_name | string | 是 | 计划名称。  不能使用“^”,“|”，换行符；  最大长度不得超过100；  计划名称不得重复。 |
  | product\_type | string | 是 | 推广产品，详见[推广产品类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#推广产品类型)。 |
  | daily\_budget | integer | 是 | 当日预算。  整数位数长度不得超9位；  如果日预算不限制，则设置为999999999，最小限额约束见[创建限额约束](/docs/monetize/promotion/marketing-api-appendix5-0000001338486113#最小限额约束)。 |
  | campaign\_type | string | 否 | 计划类型，详见[计划类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#计划类型)。  默认是CAMPAIGN\_TYPE\_DISPLAY。 |
  | sync\_flow\_resource\_searchad | string | 否 | 同时同步投放搜索广告网络。  YES：展示广告网络同时投放到搜索广告网络。  NO：只投放展示广告网络。  计划类型是展示广告或者商品广告时，同时投放受角色和白名单控制。 |

  - <strong>请求示例</strong>

    POST /ads/v1/promotion/campaign/create HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization：Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "campaign_name": "创建商品广告计划-0606004",
        "daily_budget": 8000,
        "product_type": "WEB",
        "campaign_type": "CAMPAIGN_TYPE_SHOPPING",
        "sync_flow_resource_searchad": "YES"
    }
    ```
  - <strong>响应字段</strong>

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码，200成功，其他失败。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 计划ID。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | campaign\_id | string | 计划ID。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": 200,
        "data": {
            "campaign_id": "35003379"
        }
    }
    ```
