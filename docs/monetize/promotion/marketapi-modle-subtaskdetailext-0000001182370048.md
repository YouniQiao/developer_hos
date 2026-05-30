---
title: "SubTaskDetailExt"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-subtaskdetailext-0000001182370048
---
# SubTaskDetailExt

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| subTaskId | O | Long | 子任务ID。 |
| subTaskName | O | String | 子任务名称。 |
| subTaskPrice | O | Double | 子任务出价。  取值范围：[2-10000] |
| subTaskStatus | O | String | 子任务状态。  取值范围：   - ON：启用 - DELETE：删除 - SUSPEND：停用 - OFF：停用 |
| subTaskUserGroupId | O | String | 子任务对应的定向ID。 |
| subTaskFollowAppId | O | String | 影子跟随应用ID。 |
| subTaskFollowAppName | O | String | 影子跟随应用名称。 |
| subTaskKey | O | String | 子任务搜索词。 |
| subTaskKeyMatchType | O | String | 字词匹配方式。  取值范围：   - ACCURATE：精确匹配 - FUZZY：广泛匹配 |
| subTaskRtaId | O | String | RTA ID。 |
| conversionBehaviorId | O | String | 转化目标行为ID。 |
| conversionExcludeBehaviorId | O | String | 排除目标行为ID。 |
| subTaskPricingType | O | String | 子任务计费类型。 |
| mediumResourceId | O | Long | 合约资源ID。 |
| position | O | Integer | 资源推广位。  只有合约任务类型可以返回。 |
| scheduleId | O | Long | 资源排期ID。 |
| startTime | O | String | 合约任务的投放开始日期。 |
| endTime | O | String | 合约任务的投放结束日期。 |
| taskId | O | Long | 任务ID。 |
