---
format: md
title: "如何在多设备情况下使用hdc"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-48
upstream_id: FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-48
last_sync: 2026-06-07
sync_hash: 8f5b3a2c
---
**问题场景**

启动模拟器并连接真机，然后调用hdc命令获取udid。此时仅打印一条模拟器的udid。

**解决措施**

多设备环境下执行hdc shell会失败，需要指定设备执行hdc -t xx shell。否则，会报错。
