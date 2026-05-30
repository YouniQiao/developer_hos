---
title: "调试获取报表接口"
displayed_sidebar: monetizationSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_get-report-0000001431229318
---


#### 功能介绍

此接口用于获取数据报表，向媒体按天提供曝光、点击、收益等统计数据。

#### 接口原型

|  |  |
| --- | --- |
| 承载协议 | HTTPS POST |
| 接口方向 | 开发者服务器->应用市场服务端 |
| 接口URL | https://connect-api.cloud.huawei.com/api/mas/v1/media/report/query |
| 数据格式 | 请求消息：Content-Type: application/json  响应消息：Content-Type: application/json |

#### 请求参数

#### Header

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| client\_id | M | `String` | 客户端ID，获取方法请参见[创建API客户端](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-Guides/agcapi-getstarted-0000001111845114#section103mcpsimp)。 |
| Authorization | M | `String` | 认证信息，格式为"Authorization: Bearer ***"access\_token的获取方式请参见[获取Token](https://developer.huawei.com/consumer/cn/doc/development/AppGallery-connect-References/agcapi-obtain_token-0000001158365043)。 |

#### Body

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| requestId | M | `String` | 请求ID，长度32位，符合的正则匹配表达式为"^[A-Za-z0-9]+$"。 |
| apiVersion | M | `String` | API版本号。  预留字段，当前请传入**1**。 |
| timeSwitch | O | integer(32) | 时间维度。  取值范围：   * 1：按天统计 * 2：按小时统计   默认值：1 |
| startDate | M | `String` | 开始日期。  格式：   * 按天统计：*yyyymmdd* * 按小时统计：*yyyy-mm-dd HH:MM:SS*   示例：   * 按天统计：20230525 * 按小时统计：2023-05-25 00:00:00   **说明：**   * **timeSwitch**字段为**1**时（即按天统计的报表），开始时间和结束时间跨度不超过30天。 * **timeSwitch**字段为**2**时（即按小时统计的报表），开始时间和结束时间跨度不超过7天。 |
| endDate | M | `String` | 截止日期。  格式逻辑与**startDate**字段一致。 |
| mediaInfo | M | Iist< [ReportMediaInfo](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_reportmediainfo-0000001430913778)> | 媒体信息。 |

#### 请求示例

```
POST https://connect-api.cloud.huawei.com/api/mas/v1/media/report/query
Authorization: Bearer ********
client_id: *******
{
    "requestId": "1231232***46757",
    "apiVersion": "1",
    "timeSwitch": 2,
    "startDate":"2023-05-25 00:00:00",
    "endDate":"2023-05-25 01:00:00",
    "mediaInfo": [{
            "mediaPkgName":"xxx.com.huawei",
            "slotIds": [
                "CAOpUUHGd89",
                "F1iZagcgUb",
                "YTjixlaMDY7",
                "aMLhDhgOmU8",
                "c3tcoXKZFc6"
            ],
            "channelIds":
                "**********",
                "**********"
            ]
        }]
}
```

#### 响应参数

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| rtnCode | M | `Integer` | 返回码。  具体返回码请参见[报表接口错误码](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_error-code-0000001263223153#section414716403407)。 |
| rtnDesc | M | `String` | 返回描述。 |
| requestId | M | `String` | 请求参数原值返回。 |
| reportInfos | M | Iist< [MediaReportInfo](https://developer.huawei.com/consumer/cn/doc/monetize/agd_pro_api_if_mediareportinfo-0000001481190353)> | 报表信息。 |

#### 响应示例

```
{
    "requestId": "123123214324325****435466546757",
    "rtnCode": 0,
    "reportInfos": [
        {
            "clickAmount": "10",
            "date": "20221016",
            "ecpm": 9.66,
            "estimatedBenefits": "9.69",
            "impression": "1003",
            "mediaName": "阅读",
            "slotIds": "xxx",
            "mediaPkgName": "xxx.com.huawei",
            "slotName": "测试-多条快卡",
            "channelId": "xxx"
        }
    ]
}
```
