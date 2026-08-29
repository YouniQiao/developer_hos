---
title: "ArkTS API错误码"
upstream_id: "harmonyos-references/weather-service-error-code"
catalog: "harmonyos-references"
content_hash: "89d46e846e55"
synced_at: "2026-08-29T18:18:37.585417"
---

# ArkTS API错误码

![](./img/note_3.0-zh-cn.png) 以下仅介绍本模块特有错误码，通用错误码请参考[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)说明文档。

#### 1011900001 未开通天气服务

错误信息

Capability is not configured.

错误描述

未开通天气服务。

可能原因

1、未开通天气服务。

2、应用签名配置不正确。

处理步骤

1、确认用户已开通天气服务。

2、参考[配置签名信息](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview#配置签名信息)的流程，确认应用签名配置正确。

3、通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。

#### 1011900002 天气数据缺失

错误信息

The requested longitude and latitude grid point lacks data.

错误描述

天气数据缺失。

可能原因

提供的经纬度位置非陆地区域。

处理步骤

1、可以利用搜索引擎检查经纬度数据是否是陆地区域。

2、通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。

#### 1011900003 网络错误

错误信息

Network error.

错误描述

网络错误。

可能原因

网络未连接。

处理步骤

1、检查网络配置。

2、通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。

#### 1011900004 系统内部错误

错误信息

System error.

错误描述

系统内部错误。

可能原因

1、使用[weatherService.getWeather(request)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/weather-service-weatherservice#weatherservicegetweather)接口获取天气信息时，无法自动获取到Context信息。

2、连接服务失败或其他内部错误。

处理步骤

1、使用[weatherService.getWeatherWithContext(context, request)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/weather-service-weatherservice#weatherservicegetweatherwithcontext)接口替换[weatherService.getWeather(request)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/weather-service-weatherservice#weatherservicegetweather)接口，主动传入Context信息。

2、通过[在线提单](https://developer.huawei.com/consumer/cn/support/feedback/#/)提交问题，华为支持人员会及时处理。
