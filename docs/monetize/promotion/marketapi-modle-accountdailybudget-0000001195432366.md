---
title: "AccountDailyBudget"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-accountdailybudget-0000001195432366
format: md
---

# AccountDailyBudget

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| userId | M | String | 用户ID。 |
| currency | M | String | 账户币种。枚举值如下：   - CNY：人民币 - EUR：欧元 - USD：美元 - JPY：日元 - GBP：英镑 |
| todayBudget | M | Double | 账户日预算，  注意：  修改后的日预算最低为账户为：账户已消耗金额\*105%。 |
| nextDayBudget | M | Double | 账户次日预算。 |
| cost | M | Double | 账户当日已消耗预算。 |
| nextDaySwitch | M | Integer | 账户次日预算设置开关。   - 0：关闭 - 1：开启 |
