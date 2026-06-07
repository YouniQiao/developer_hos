---
title: "BatchAddSubTaskAM"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-batchaddsubtask-0000001228012377
format: md
---

# BatchAddSubTaskAM

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| subTaskName | M | String | 子任务名称。 |
| subTaskPrice | M | Double | 子任务出价。  取值范围：[2,2000]  单位：元 |
| taskId | M | Long | 任务ID。 |
| conversionBehaviorId | O | String | 转化目标。  任务计费类型为OCPD时，此字段必填。  取值范围：   - 1：激活应用，历史首次激活应用。 - 2：启动应用。 - 3：次日留存，次日仍然使用应用。 - 4：付费，在应用内发生付费行为。 - 5：提交表单，在应用内提交表单。 - 6：授信，发生应用内的授信行为。 - 7：注册，注册应用或服务。 - 9：线索收集页面访问，用户在线索留资界面的访问行为。 - 10：老客激活，流失用户再次激活。 - 14：申请，申请服务。 - 18：下单，购物清单正式生成订单。 - 21：预约，预约商品、内容或服务。 - 101：关键行为1，自定义关键行为1。 - 102：关键行为2，自定义关键行为2。 |
| conversionExcludeBehaviorId | O | String | 排除行为。  本字段需开通白名单，请联系华为运营。 |
| subTaskFollowAppName | O | String | 被追随应用名称。  任务投放模式为影子投放时，此字段必填。 |
| subTaskRtaId | O | String | RTA ID。  RTA推广任务，此字段必填。 |
| subTaskKey | O | String | 搜索词。  任务类型为应用搜索时，此字段必填。 |
| subTaskKeyMatchType | O | String | 匹配方式。  任务类型为应用搜索时，此字段必填。  取值范围：   - ACCURATE：精确匹配 - FUZZY：广泛匹配 |
| subTaskUserGroupId | O | String | 人群包ID。  人群定向投放任务时，此字段必填。 |
