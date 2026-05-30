---
title: "SubTaskDetail"
displayed_sidebar: promotionSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-modle-subtaskdetail-0000001181826459
---
# SubTaskDetail

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| subTaskId | M | String | 子任务ID。  创建时不存在该属性，修改/查询时修改该属性。 |
| subTaskName | O | String | 子任务名称。 |
| subTaskStatus | O | String | 子任务状态。 |
| subTaskPrice | O | Double | 子任务出价。  单位：元 |
| subTaskUserGroupId | O | String | 子任务对应的定向ID。  只能选择已启动定向。  说明：  定向ID请从[新增标签定向](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-addtag-0000001181826407)或者[查询定向列表](https://developer.huawei.com/consumer/cn/doc/promotion/marketapi-querytaglist-0000001181946327)接口中获取。 |
| subTaskfollowAppId | O | String | 子任务影子跟随应用ID。  查询任务详情时展示该字段。 |
| subTaskFollowAppName | O | String | 子任务影子跟随应用名称。  修改影子投放子任务时使用该字段。 |
| subTaskKey | O | String | 子任务搜索词。 |
| subTaskKeyMatchType | O | String | 字词匹配方式。  取值范围：   - ACCURATE：精确匹配 - FUZZY：广泛匹配 |
| subTaskRtaId | O | String | RTA ID。 |
| conversionBehaviorId | O | String | 归因目标ID。  格式为数字，1代表激活，7代表注册。 |
| conversionExcludeBehaviorId | O | String | 排除目标行为ID。  本字段需开通白名单，请联系华为运营。 |
