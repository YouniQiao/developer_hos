---
title: "查询智能分包列表"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/ads-cxzhinengfenbaoliebiao-0000001926859329
format: md
upstream_id: monetize/promotion/ads-cxzhinengfenbaoliebiao-0000001926859329
last_sync: 2026-06-07
sync_hash: c862022e
---
# 查询智能分包列表

【简介】通过此接口可以查询智能分包列表

<strong>请求地址</strong>

https://ads.cloud.huawei.com/ads/v1/tools/channel\_package/intelligent\_sub\_package/query

<strong>请求方法</strong>

<strong>GET</strong>

<strong>请求参数</strong>

|  |  |  |  |
| --- | --- | --- | --- |
| <strong>参数名称</strong> | <strong>类型</strong> | <strong>是否必选</strong> | <strong>描述</strong> |
| advertiser\_id | long | 否 | 广告主ID，当登录授权的华为账号为如下场景时此字段必填：  1）授权账号关联的是经理账户；  2）授权账号关联的是服务商账户；  3）授权账号关联了多个子客账户。 |
| package\_name | string | 否 | 应用包名 |
| page | integer | 否 | 搜索页码， 默认为1  取值范围1~10000 |
| page\_size | integer | 否 | 一页展示数量，默认为10  取值范围 10~50 |

<strong>请求示例</strong>

```
GET ads/v1/tools/channel_package/intelligent_sub_package/query HTTP/1.1
Accept:application/json
Content-Type:application/json
Authorization:Bearer CgB6e3x9ERGComr9dENxZX22iBk+mLuf1yGtQVPUjPJUMrstfKlqpdXk+kfHU9J8ZJ/soYIZHZzT446GeSYumluQuhsK7jvz4kz1Bkms4CLI/rE=
 
{
"package_name": "cn.flytalk.shudu"，
"page"："1",
"page_size"："50"
}
```

<strong>响应字段</strong>

|  |  |  |
| --- | --- | --- |
| <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
| code | string | 返回码 |
| message | string | 返回描述 |
| data | Struct1[] | 智能分包分页列表 |

data(Struct1)定义

|  |  |  |
| --- | --- | --- |
| <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
| total | integer | 智能分包总条数 |
| intelligent\_package\_infos | Struct2[] | 智能分包列表 |

Struct2定义

|  |  |  |
| --- | --- | --- |
| <strong>参数名称</strong> | <strong>类型</strong> | <strong>描述</strong> |
| channel\_pkg\_number | string | 智能分包渠道号 |
| channel\_pkg\_name | string | 智能分包渠道名 |
| package\_name | string | 应用包名 |

<strong>应答示例</strong>

```
HTTPS/1.1 200 OK
{
    "code": "200",
    "data": {
        "total": 2,
        "data": [
            {
                "channel_pkg_number": "87652659",
                "channel_pkg_name": "fdsdd",
                "package_name": "com.uzero.baimiao"
            },
            {
                "channel_pkg_number": "87527971",
                "channel_pkg_name": "1pt新建智能分包渠道",
                "package_name": "com.uzero.baimiao"
            }
        ]
    }
}
```
