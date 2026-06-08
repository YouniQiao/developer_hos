---
title: "点击操作响应快"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-quick-response-for-click-0403
format: md
upstream_id: tools/coding-debug/ide-quick-response-for-click-0403
last_sync: 2026-06-07
sync_hash: 383a957c
---
# 点击操作响应快

#### 规则详情

应用内点击操作响应时延应≤ 100ms；时间起点：点击离手；时间终点：界面发生变化。

#### 检测逻辑

* 开始时间：点击离手，如图标记1；关键字：H:DispatchTouchEvent，其中type=1。
* 结束时间：泳道开始时间，如图标记2。

  如图展示的是H:ABILITY\_OR\_PAGE\_SWITCH泳道，其他转场泳道标记如下：

  H:APP\_TRANSITION\_FROM\_OTHER\_APP

  H:APP\_TRANSITION\_TO\_OTHER\_APP

  H:APP\_SWIPER\_NO\_ANIMATION\_SWITCH

  H:APP\_TABS\_NO\_ANIMATION\_SWITCH

  H:APP\_TABS\_FLING
* 备注：由于trace的响应时延小于用户实际感知的时延，所以目前点击类算法会补偿20ms。

![](./img/zh-cn_image_0000002602066329.png)

#### 计算逻辑

时延=结束时间 - 开始时间，小于等于100ms。
