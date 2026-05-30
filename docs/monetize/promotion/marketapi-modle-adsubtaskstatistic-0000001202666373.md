---
title: "AdSubTaskStatistic"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-adsubtaskstatistic-0000001202666373
---
# AdSubTaskStatistic

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| statDate | O | String(16) | 统计日期。 |
| taskId | O | Long | 推广任务ID。 |
| subTaskId | O | String | 推广子任务ID。  没有子任务时，subTaskId默认为-1。  说明：  通投子任务ID为主任务ID后加0000。 |
| region | O | String | 任务投放区域，ISO国家码。 |
| channel | O | String | 渠道号。 |
| cost | O | Double | 消耗金额。 |
| show | O | Long | 服务端展示量。  默认值：0 |
| exposure | O | Integer(64) | 展示量。 |
| click | O | Integer(64) | 点击量。 |
| clickRate | O | Double | 点击率。  计算方法为“点击量/展示量”。 |
| download | O | Integer(64) | 下载量。 |
| downloadRate | O | Double | 下载率。  计算方法为“下载量/展示量”。 |
| downloadAverageCost | O | Double | 下载均价。  计算方法为“消耗金额/下载量”。 |
| conversions | O | List&lt;[ConversionBehaviorInfo](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-conversionbehaviorinfo-0000001218572925)&gt; | 多归因转化数据。  如果没有消耗，此字段不返回任何信息。 |
