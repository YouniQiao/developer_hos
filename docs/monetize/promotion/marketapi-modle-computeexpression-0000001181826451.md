---
title: "ComputeExpression"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-computeexpression-0000001181826451
format: md
---

# ComputeExpression

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| included\_audiences | M | List&lt;String&gt; | 包含定向包ID列表 |
| included\_expression | M | String | 多个包含定向包之间计算关系，枚举值为：   - AND - OR |
| excluded\_audiences | O | List&lt;String&gt; | 排除定向包ID列表 |
| excluded\_expression | O | String | 多个排除定向包之间计算关系，枚举值为：   - AND - OR |
