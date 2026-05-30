---
title: "绑定定向包"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-targeting5-0000001338263145
---
# 绑定定向包

您通过本接口可以绑定定向包。

- <strong>约束</strong>：
  - 满足下面条件的定向包才能支持绑定定向包：
    1. 采买模式：竞价
    2. 计划类型：展示广告
    3. 资源类型：展示广告网络
    4. 推广产品：网页、应用、快应用
  - 推广目的是应用促活 定向包的App安装定向app\_install\_struct必须为true。
  - 推广目的是应用下载 定向包的App安装定向not\_app\_install\_struct必须为true。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/targeting\_package/bind

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/targeting\_package/bind

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/targeting\_package/bind
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | advertiser\_id | long | 否 | 广告主ID，对于经理账户或您的多个广告主账户共用一个华为账号，此字段必填。 |
  | targeting\_id | long | 是 | 定向包ID。 |
  | adgroup\_id | long | 是 | 任务ID。 |

  - <strong>请求示例</strong>

    POST ads/v1/tools/targeting\_package/bind

    HTTP/1.1

    Accept:application/json

    Content-Type:application/json

    Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=

    ```
    {
        "advertiser_id": "504216955008382592",
        "targeting_id": "90084638",
        "adgroup_id": "46064075"
    }
    ```
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200"
    }
    ```
