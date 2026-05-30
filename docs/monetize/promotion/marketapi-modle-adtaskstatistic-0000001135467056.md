---
title: "AdTaskStatistic"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-adtaskstatistic-0000001135467056
---
# AdTaskStatistic

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| statDate | O | String(16) | 统计日期。 |
| taskId | O | Long | 推广任务ID。 |
| region | O | String | 任务投放区域，ISO国家码。 |
| channel | O | String | 渠道号。 |
| cost | O | Double | 消耗金额。  <strong>说明：</strong>API接口不区分现金和赠送金等，字段返回的是统一消耗。 |
| show | O | Long | 服务端展示量。  默认值：0 |
| exposure | O | Integer(64) | 展示量。  <strong>说明：</strong>此字段的展示量与投放平台上的展示量是对应的。 |
| click | O | Integer(64) | 点击量。 |
| clickRate | O | Double | 点击率。  计算方法为“点击量/展示量”。 |
| download | O | Integer(64) | 下载量。 |
| downloadRate | O | Double | 下载率。  计算方法为“下载量/展示量”。 |
| downloadAverageCost | O | Double | 下载均价。  计算方法为“消耗金额/下载量”。 |
| conversions | O | List&lt;[ConversionBehaviorInfo](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-conversionbehaviorinfo-0000001218572925)&gt; | 多归因转化数据。  如果没有消耗，此字段不返回任何信息。 |
| physChannelPkgId | O | String | 物理渠道包ID。 |
