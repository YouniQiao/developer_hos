---
title: "素材管理"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-asset1-0000001286182150
format: md
---

# 素材管理

您通过本接口可以创建素材。

- <strong>请求地址</strong>：请根据您的就近区域进行选择

  亚非拉：https://ads-dra.cloud.huawei.com/ads/v1/tools/creative\_asset/create

  俄罗斯：https://ads-drru.cloud.huawei.ru/ads/v1/tools/creative\_asset/create

  欧洲：https://ads-dre.cloud.huawei.com/ads/v1/tools/creative\_asset/create
- <strong>请求方法</strong>：<strong>POST</strong>
- <strong>请求参数：</strong>

  |  |  |  |  |
  | --- | --- | --- | --- |
  | <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
  | file\_token | string | 是 | 文件上传凭证，详见[获取文件上传凭证](https://developer.huawei.com/consumer/cn/doc/promotion/marketing-api-tool-asset5-0000001338581865)。 |
  | file | File | 是 | 文件内容。  注：文件上限为50M。 |
  | asset\_name | string | 是 | 素材名称，不为空且长度不超过100，不能包含”’”,”\”,”\\{”,”\\}”,”%”,”\*”,”^”,”#”,”&lt;”,”&gt;”,”|”特殊字符。 |

  - <strong>请求示例</strong>

    POST /ads/v1/tools/creative\_asset/create HTTP/1.1

    Authorization: Bearer CgB6e3x9WmvjRED4oEpChndEzELFo/CcaUyxxxTbKnDciaQMnM59aSSguBKTmEqGJvxaKYX/qCOUjFfhxp8A=

    User-Agent: PostmanRuntime/7.28.0

    Accept: \*/\*

    Postman-Token: 032e598f-e98d-4dec-b494-3ef3ec7d8286

    Host: ads.cloud.huawei.com

    Accept-Encoding: gzip, deflate, br

    Connection: keep-alive

    Content-Type: multipart/form-data; boundary=--------------------------389074203870453821482777

    Content-Length: 3994

    ----------------------------389074203870453821482777

    Content-Disposition: form-data; name="file\_token"

    336d4422a0323695abbeb1630387ac963eabb14xxxa75ccffac0d3944aa7437bd81ec399a84e

    ----------------------------389074203870453821482777

    Content-Disposition: form-data; name="asset\_name"

    asset\_name

    ----------------------------389074203870453821482777

    Content-Disposition: form-data; name="file"; filename="225-150.jpg"

    &lt;225-150.jpg&gt;

    ----------------------------389074203870453821482777--
  - 响应字段

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | code | string | 返回码。 |
    | message | string | 返回描述。 |
    | data | Struct1 | 素材信息。 |

    data(Struct1)定义

    |  |  |  |
    | --- | --- | --- |
    | <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
    | url | string | 素材URL。 |
    | asset\_id | long | 素材ID。 |
  - <strong>应答示例</strong>

    HTTPS/1.1 200 OK

    ```
    {
        "code": "200",
        "message": null,
        "data": {
            "url": "https://pps-channel-test-cn.obs.cn-north-3.myhwclouds.com/dl/pps/202005261409548ddb6d169aa749f3abb07f198csample.png",
            "asset_id": 10001017
        }
    }
    ```
