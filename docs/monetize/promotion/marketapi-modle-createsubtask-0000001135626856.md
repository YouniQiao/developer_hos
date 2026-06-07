---
title: "CreateSubTask"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-createsubtask-0000001135626856
format: md
---

# CreateSubTask

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| subTaskName | M | String | 子任务名称。 |
| subTaskStatus | O | String | 子任务状态。 |
| subTaskPrice | M | double | 子任务出价，单位元。 |
| subTaskUserGroupId | O | String | 子任务对应的定向ID，只能选择已启动定向。  说明：  定向ID请从[新增标签定向](/docs/monetize/promotion/marketapi-addtag-0000001181826407)或者[查询定向列表](/docs/monetize/promotion/marketapi-querytaglist-0000001181946327)接口中获取。 |
| subTaskFollowAppName | O | String | 影子跟随应用名称。 |
| subTaskKey | O | String | 子任务搜索词。 |
| subTaskKeyMatchType | O | String | 字词匹配方式。   - ACCURATE：精确匹配 - FUZZY：广泛匹配 |
| subTaskRtaId | O | String | RTAID。 |
| conversionBehaviorId | O | String | 归因目标ID。格式为数字，1代表激活，7代表注册。 |
| conversionExcludeBehaviorId | O | String | 排除目标行为ID。  本字段需开通白名单，请联系华为运营。 |
