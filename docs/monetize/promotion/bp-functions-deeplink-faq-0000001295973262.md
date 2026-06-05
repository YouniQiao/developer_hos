---
title: "FAQ"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-deeplink-faq-0000001295973262
format: md
---

# FAQ

## 客户端查询延迟Deeplink对手机设备是否有要求，是否仅支持华为手机？

对手机设备没有要求，调起延迟Deeplink的应用需要从华为应用市场下载，从其他地方下载无效。

## 延迟Deeplink两种查询方式，响应时间和TPS分别是多少？

- 客户端查询：建议TPS：1，时延：20ms。
- API查询：建议TPS：2000，TP95：50ms。

## 快应用是否支持延迟Deeplink？

快应用即开即用，不涉及APP安装，因此不支持延迟Deeplink功能。

## 客户端第一次读取归因后，第二次读取是否还能获取到归因信息?

客户端在现网环境读取一次后，第二次读取到的信息是空，联调测试覆盖安装测试包。第二次测试如果没有清理应用市场缓存，可以读取到。

## 查询延迟Deeplink方式有哪些，查询时效是多久？

有[客户端查询](https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-deeplink-inquire-client-0000001348653289)和[API接口查询](https://developer.huawei.com/consumer/cn/doc/promotion/bp-functions-deeplink-inquire-api-0000001296132894)两种查询方式，查询时效均是7天。

## 调试延迟Deeplink功能时，除核心配置校验外，还需关注哪些关键事项？

除核心配置校验外，需重点确保任务预算充足，避免预算不足导致测试阶段推广位无法正常曝光，进而影响延迟Deeplink跳转效果的验证。建议任务预算不少于500，且账户预算不少于1000。
