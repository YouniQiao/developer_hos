---
title: "否定词绑定计划或任务"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-keywords4-0000001338532793
format: md
---

# 否定词绑定计划或任务

您通过本接口可以将否定词对计划和任务进行绑定。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/promotion/keywords/bind

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/promotion/keywords/bind

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/promotion/keywords/bind
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | association\_object\_level | string | 是 | 否定词关联对象类型，详见[否定词关联对象所属类型](/docs/monetize/promotion/marketing-api-appendix1-0000001174597591#section131282713013)。 |
  | association\_objects | string[] | 是 | 关联对象的id列表，计划id或者任务id。 |
  | keywords | Struct1[] | 是 | 否定词列表。 |

  keywords(Struct1)定义

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | keyword\_name | string | 是 | 否定词名称。 |

  - <strong>请求示例</strong>

    POST /ads/v1/promotion/keywords/bind

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "association_object_level": "KEYWORD_ASSOCIATION_OBJECT_LEVEL_ADGROUP",
        "association_objects": [
            "503222231”,”408293224"
        ],
        "keywords": [
            {
                "keyword": "测试否定关键词绑定任务"
            }
        ]
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1[] | 成功响应数据列表，失败不返回。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | association\_object | string | 关联对象的id列表，计划id或者任务id。 |
    | keyword\_ids | long[] | 关键词ID。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200"
    }
    ```
