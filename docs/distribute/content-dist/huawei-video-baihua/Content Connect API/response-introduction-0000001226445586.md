---
title: "响应码说明"
displayed_sidebar: contentDistSidebar
original_url: /docs/distribute/content-dist/huawei-video-baihua/Content Connect API/response-introduction-0000001226445586
format: md
---


# 响应码说明

<strong>公共错误码</strong>

|  |  |
| --- | --- |
| 错误码 | 错误码描述 |
| 0 | 成功。 |
| 1 | 参数非法，参数格式错误或缺少必要参数。 |
| 2 | 接口鉴权不合法,含时间戳校验不通过。 |
| 3 | 服务器忙需稍后重试，服务器内部异常。 |
| 4 | 接口频繁访问。 |
| 5 | 数据库异常。 |

<strong>HTTP</strong> <strong>响应码</strong>

|  |  |
| --- | --- |
| 错误码 | 错误码描述 |
| 200 | 操作成功。 |
| 400 | 参数错误。 |
| 401 | AccessToken认证失败。 |
| 403 | 没有权限访问。 |
| 404 | 请求的url path错误。 |
| 406 | Content Type非法。 |
| 503 | 服务繁忙。 |