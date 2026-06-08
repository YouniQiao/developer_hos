---
format: md
title: "执行报告用例的其中一个步骤，在视频中动效为什么只录了一半"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-app-special-test/faqs-scenario-based-performance-test/faqs-scenario-based-performance-test-1
upstream_id: FAQ/faqs-deveco-testing/faqs-app-special-test/faqs-scenario-based-performance-test/faqs-scenario-based-performance-test-1
last_sync: 2026-06-07
sync_hash: 08b00843
---
启动App的步骤中，App在打开到一半时视频就结束了，没有加载完成的录屏部分。

上一步操作的动效时间较长，如果在动效未结束时就返回结果并开始下一步操作，会导致录屏中步骤不完整。可以在create\_tag方法中添加wait\_time参数，等待指定时间以采集并分析这段时间的数据。
