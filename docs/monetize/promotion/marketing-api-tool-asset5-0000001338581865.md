---
title: "获取文件上传凭证"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketing-api-tool-asset5-0000001338581865
format: md
---

# 获取文件上传凭证

您通过本接口可以获取文件上传凭证。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/file/token/query

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/file/token/query

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/file/token/query
- <strong>请求方法</strong>：<strong>GET</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |

  - <strong>请求示例</strong>

    GET /ads/v1/tools/file/token/query HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": "494008260362282880"
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 上传身份标识，5分钟有效期。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | file\_token | string | 上传身份标识，5分钟有效期。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "data": {
            "file_token": "a294d4e03e44c3539031f29632dcae47"
        }
    }
    ```
