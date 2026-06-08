---
format: md
title: "trace采集功能如何使用"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-app-special-test/faqs-performance-indicator-monitoring-test/faqs-performance-indicator-monitoring-test-1
upstream_id: FAQ/faqs-deveco-testing/faqs-app-special-test/faqs-performance-indicator-monitoring-test/faqs-performance-indicator-monitoring-test-1
last_sync: 2026-06-07
sync_hash: cee6833c
---
点击“开始采集”后，用户可以随时点击“trace采集”按钮进行trace采集。由于trace文件较大，采集时会占用设备内存作为日志缓冲区，因此每次采集固定为30秒，单次任务只保留最近10个trace文件。使用时请注意工具提示，避免因采集次数超过限制而导致早期文件被删除。

若需要完整的操作trace，推荐使用场景化性能测试服务。该服务支持通过编写脚本来自定义操作场景，评估应用性能。测试报告中可获取详细的trace文件、CPU使用率和应用内存占用数据。
