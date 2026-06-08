---
title: "接口更新说明"
displayed_sidebar: promotionSidebar
original_url: /docs/monetize/promotion/market-changing-history-0000001195355715
format: md
upstream_id: monetize/promotion/market-changing-history-0000001195355715
last_sync: 2026-06-07
sync_hash: db3b69fd
---
# 接口更新说明

| 版本号 | 发布时间 | 更新说明 |
| --- | --- | --- |
| 14.0 | 2024-02-22 | API新增支持私有人群上传 |
| 13.5.1 | 2023-12-21 | [查询账户余额](/docs/monetize/promotion/marketapi-querybalance-0000001135626846)、[查询账户消耗明细](/docs/monetize/promotion/marketapi-balancedetail-0000001181826443)接口修改<strong>customerId</strong>字段使用场景，实现此接口支持直客团队账户分账号查询数据。    [查询推广任务统计报表](/docs/monetize/promotion/marketapi-adreport-0000001181826445)、[查询推广子任务统计报表](/docs/monetize/promotion/marketapi-adsubtaskreport-0000001200757735)、[查询搜索类推广任务统计报表](/docs/monetize/promotion/marketapi-searchadreport-0000001181946363)接口新增<strong>customerId</strong>字段，实现此接口支持直客团队账户分账号查询数据。 |
| 12.4.1 | 2022-08-15 | 推广任务的相关接口新增<strong>trafficScenarios、</strong> <strong>deliverySwitch</strong>字段。    推广任务的相关接口<strong>taskType、</strong> <strong>deliveryMode、deliveryPrice</strong>、<strong>subTaskPrice</strong>、<strong>mediaChannel</strong>字段取值范围调整。  由于<strong>taskType</strong>字段取值范围调整较大，原榜单推荐、开机必备推荐、桌面推荐、视频流的创建推广任务接口说明删除，新增精选推荐、全域推荐的创建推广任务接口说明。 |
| 12.2.1 | 2022-06-01 | 删除  删除搜索任务管理下的新增关键词和删除关键词2个接口。 |
| 12.1.1 | 2022-03-24 | - 新增[lookalike类型人群定向创建](/docs/monetize/promotion/marketapi-createlookalike-0000001210922474)、[lookalike类型人群定向修改](/docs/monetize/promotion/marketapi-reviselookalike-0000001211082436)接口。 - 创建和查询投放任务，支持HA归因监测。 |
| 12.0.1 | 2021-02-15 | - 新增[查询日预算和次日预算](/docs/monetize/promotion/marketapi-dailybudget-query-0000001192788600)、[修改日预算和次日预算](/docs/monetize/promotion/marketapi-dailybudget-revise-0000001237788539)接口。 |
| 11.6.1 | 2021-12-28 | - 新增[修改任务创意状态](/docs/monetize/promotion/marketapi-creative-revise-0000001179767396)、[查询任务创意状态](/docs/monetize/promotion/marketapi-creative-querydetail-0000001179448922)、[查询任务创意规格](/docs/monetize/promotion/marketapi-creative-queryspecifications-0000001225162261)。 - 新增[批量创建子任务](/docs/monetize/promotion/marketapi-adsubtask-batchcreate-0000001225258453)、[批量修改子任务](/docs/monetize/promotion/marketapi-subtask-batchrevise-0000001180098798)、[批量修改子任务状态](/docs/monetize/promotion/marketapi-subtask-batchdelete-0000001180258734)、[批量查询子任务列表](/docs/monetize/promotion/marketapi-subtask-batchquery-0000001179940260)。 |
| 11.5.1 | 2021-11-16 | - 新增[批量修改RTAID](/docs/monetize/promotion/marketapi-rtaid-0000001166348418)和[批量修改非搜索词子任务出价](/docs/monetize/promotion/marketapi-subtaskprice-0000001168593906)。 - 新增<strong>20810017</strong>错误码。      - 新增子任务新增<strong>subTaskFollowAppName</strong>字段，可配置影子跟随应用名称。 - [查询关键词列表](/docs/monetize/promotion/marketapi-querykeywords-0000001181946353) 新增subTaskId字段，支持子任务。 - [批量修改搜索关键词出价](/docs/monetize/promotion/marketapi-searchkeywordprice-0000001135467046) 新增subTaskId字段，支持子任务。 - [查询推广任务统计报表](/docs/monetize/promotion/marketapi-adreport-0000001181826445) 返回数据中新增[conversions](/docs/monetize/promotion/marketapi-modle-adtaskstatistic-0000001135467056#ZH-CN_TOPIC_0000001741282924__p870313019488)字段支持查询转化数据。 - [查询搜索类推广任务统计报表](/docs/monetize/promotion/marketapi-searchadreport-0000001181946363) 新增<strong>subTaskIds</strong>字段，支持子任务查询。 |
| 11.4.2 | 2021-10-12 | 新增[查询推广任务统计报表](/docs/monetize/promotion/marketapi-adreport-0000001181826445)。 |
| 11.3.2 | 2021-08-24 | 新增创建和管理推广任务接口。 |
| 10.5.1 | 2020-04-18 | 首次发布Marketing API接口。 |
