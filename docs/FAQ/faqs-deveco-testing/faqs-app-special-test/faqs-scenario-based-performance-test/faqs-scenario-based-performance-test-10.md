---
format: md
title: "卡顿率指标是怎么定义的"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-app-special-test/faqs-scenario-based-performance-test/faqs-scenario-based-performance-test-10
upstream_id: FAQ/faqs-deveco-testing/faqs-app-special-test/faqs-scenario-based-performance-test/faqs-scenario-based-performance-test-10
last_sync: 2026-06-07
sync_hash: 02c9fb58
---
卡顿率是指在一段动效区间内累计的丢帧时长，用于评估整个动效时段的画面流畅度。卡顿率的值是累计丢帧时长与动效时长的比值，单位为ms/s。

单帧丢帧时长等于实际上屏时间减去期望上屏时间。上屏时间可在trace图形子系统的present线程中查看，取泳道结束点。

![](./img/a7cf01d8.png "点击放大")
