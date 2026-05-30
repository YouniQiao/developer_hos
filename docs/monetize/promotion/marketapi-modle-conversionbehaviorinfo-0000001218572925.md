---
title: "ConversionBehaviorInfo"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-conversionbehaviorinfo-0000001218572925
---
# ConversionBehaviorInfo

| 字段 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| conversionBehaviorId | O | String | 转化行为ID。  取值范围：   - -1：支持多归因转化数据回传前历史数据。 - 1：激活应用，历史首次激活应用。 - 2：启动应用。 - 3：次日留存，次日仍然使用应用。 - 31：2日留存，用户激活应用起的第3天启动应用。 - 32：3日留存，用户激活应用起的第4天启动应用。 - 33：4日留存，用户激活应用起的第5天启动应用。 - 34：5日留存，用户激活应用起的第6天启动应用。 - 35：6日留存，用户激活应用起的第7天启动应用。 - 36：7日留存，用户激活应用起的第8天启动应用。 - 37：14日留存，用户激活应用起的第15天启动应用。 - 4：首次付费，在应用内发生付费行为，按自然日对用户去重。 - 41：每次付费，在应用内发生付费行为，计入全部回传量，不做去重。 - 5：提交表单，在应用内提交表单。 - 6：授信，发生应用内的授信行为。 - 7：注册，注册应用或服务。 - 9：线索收集页面访问，用户在线索留资界面的访问行为。 - 10：老客激活，流失用户再次激活。 - 14：申请，申请服务。 - 18：下单，购物清单正式生成订单。 - 21：预约，预约商品、内容或服务。 - 101：关键行为1，自定义关键行为1。 - 102：关键行为2，自定义关键行为2。 - 1001：平台首日ROI。 - 1002：平台激活。 - 1003：下载。 |
| conversionCount | O | Long | 转化次数。 |
| conversionRate | O | Double | 转化率。 |
| conversionAvgPrice | O | Double | 转化均价。 |
| payMoney | O | Double | 付费金额。 |
