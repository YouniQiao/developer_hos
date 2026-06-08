---
format: md
title: "Profiler录制Allocation没有Native信息"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-profiler/faqs-profiler-5
upstream_id: FAQ/faqs-deveco-studio/faqs-profiler/faqs-profiler-5
last_sync: 2026-06-07
sync_hash: 2d510aa7
---
**解决措施**

取消勾选Run > Edit Configurations > Diagnostics 内的Address Sanitizer、Thread Sanitizer、Hardware-Assisted Address Sanitizer选项重新运行应用录制即可。

![](./img/d7c8ffd0.png)

![](./img/8d88df99.png)
