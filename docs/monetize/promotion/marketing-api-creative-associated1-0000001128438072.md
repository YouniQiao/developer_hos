---
title: "查询创意关联信息列表"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-creative-associated1-0000001128438072
format: md
---

# 查询创意关联信息列表

您通过本接口查询创意关联数据，查询结果按照创建的时间倒序排列。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  <strong>亚非拉：</strong>https://ads-dra.cloud.huawei.com/openapi/v2/promotion/creative/basic\_information/query

  <strong>俄罗斯 :</strong> https://ads-drru.cloud.huawei.ru/openapi/v2/promotion/creative/basic\_information/query

  <strong>欧洲：</strong>https://ads-dre.cloud.huawei.com/openapi/v2/promotion/creative/basic\_information/query
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | --- | --- | --- | --- |
  | is\_abroad | Boolean | 是 | 是否为非中国大陆账户，取值为：  true为海外账户：非中国大陆账户  false：为中国大陆账户。 |
  | page\_num | integer | 否 | 搜索页码  默认值1  取值范围1~1000。 |
  | page\_size | integer | 否 | 每页展示的数据条数  默认值20  取值范围 1~1000。 |
  | campaign\_ids | string[] | 否 | 计划ID，用于查询该计划下的创意列表。 |
  | adgroup\_ids | string[] | 否 | 任务ID，用于查询该任务下的创意列表。 |
  | creative\_ids | string[] | 否 | 创意ID，用于查询指定的创意信息。 |
- <strong>请求示例</strong>

  POST /openapi/v2/promotion/creative/basic\_information/query HTTP/1.1

  Accept:application/json

  Content-Type:application/json

  Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

  \\{

  "is\_abroad": true,

  "page\_num": 1,

  "page\_size": 10,

  "adgroup\_ids":["50028149","50028148"]

  \\}
- <strong>响应字段</strong>

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | --- | --- | --- | --- |
  | code | string | 是 | 返回码。 |
  | message | string | 是 | 返回描述。 |
  | data | Struct1 | 否 | 创意关联信息列表。 |

  data(Struct1)参数

  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | --- | --- | --- | --- |
  | total\_num | integer | 是 | 总条数。 |
  | list | Struct2[] | 否 | 创意关联信息列表。 |

  list(Struct2)参数

  | 参数名称 | 类型 | 是否必选 | 描述 |
  | --- | --- | --- | --- |
  | creative\_name | string | 是 | 创意名称。 |
  | creative\_id | long | 是 | 创意ID。 |
  | adgroup\_id | long | 是 | 任务ID。 |
  | adgroup\_name | string | 是 | 任务名称。 |
  | campaign\_id | string | 是 | 计划ID。 |
  | campaign\_name | string | 是 | 计划名称。 |
  | package\_name | string | 否 | 应用包名。 |
  | creative\_status | string | 是 | 创意操作状态，详见[计划/任务/创意操作状态](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-appendix1-0000001174597591#section9341472176)。 |
  | store\_app\_id | string | 否 | 应用市场ID。 |
- <strong>应答示例</strong>

  HTTPS/1.1 200 OK

  ```
  {
  "code": "0",
  "message": "OK",
  "data": {
  "total_num": 1,
  "list": [
  {
  "creative_name": "ads",
  "creative_id": "100001",
  "adgroup_name": "ads",
  "adgroup_id": "100001",
  "campaign_id": "100001",
  "campaign_name": "ads",
  "package_name": "com.ohmgames.cheatandrun.huawei",
  "creative_status": "OPERATION_STATUS_ENABLE"，
  ” market_app_id": "C10172343"
  }
  ]
  }
  }
  ```
