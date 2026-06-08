---
title: "UserGroupDetail"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/marketapi-modle-usergroupdetail-0000001181946379
format: md
upstream_id: monetize/promotion/marketapi-modle-usergroupdetail-0000001181946379
last_sync: 2026-06-07
sync_hash: 6542e069
---
# UserGroupDetail

| 参数 | 必选(M)/可选(O) | 类型 | 描述 |
| --- | --- | --- | --- |
| userGroupInfo | O | [UserGroupInfo](/docs/monetize/promotion/marketapi-modle-usergroupinfos-0000001181826461) | 定向信息。 |
| relatedTaskIds | O | List&lt;Long&gt; | 定向关联任务ID列表。 |
| condition | O | String | 标签列表。  仅标签定向时有值。  内容参考字段[Condition](/docs/monetize/promotion/marketapi-modle-condition-0000001181946369)，要求JSON格式。 |
| computeExpression | O | [ComputeExpression](/docs/monetize/promotion/marketapi-modle-computeexpression-0000001181826451) | 交并差表达式。  仅在交并差计算定向有值。 |
