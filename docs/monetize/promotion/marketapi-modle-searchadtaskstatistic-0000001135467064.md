---
title: "SearchAdTaskStatistic"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-searchadtaskstatistic-0000001135467064
format: md
---

# SearchAdTaskStatistic

| 参数名称 | 必选(M)/可选(O) | 类型 | 参数说明 |
| --- | --- | --- | --- |
| statDate | O | String(16) | 统计日期。 |
| taskId | O | String(32) | 任务ID。 |
| subTaskId | O | String | 子任务ID。 |
| region | O | String | 任务投放区域，ISO国家码。 |
| searchkey | O | String | 搜索词。 |
| matchKey | O | String | 与搜索词匹配的投放词，由开发者在推广任务中设置。 |
| matchType | O | String | 匹配方式。  取值范围：   - 0：精确匹配 - 1：自动匹配 - 2：广泛匹配 |
| cost | O | Double | 消耗金额。 |
| show | O | Long | 服务端展示量。  默认返回0。 |
| exposure | O | Integer(64) | 展示量。 |
| download | O | Integer(64) | 下载量。 |
| downloadRate | O | Double | 下载率。  计算方法为“下载量/展示量”。 |
| downloadAverageCost | O | Double | 下载均价。  计算方法为“消耗金额/下载量”。 |
| rank | O | Double | 搜索排名。计算方法为“排名总和/下载量”。 |
