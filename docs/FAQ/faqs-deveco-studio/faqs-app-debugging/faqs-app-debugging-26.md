---
format: md
title: "如何使用DevEco Studio进行C/C++代码断点调试"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-app-debugging/faqs-app-debugging-26
upstream_id: FAQ/faqs-deveco-studio/faqs-app-debugging/faqs-app-debugging-26
last_sync: 2026-06-07
sync_hash: 89d577f5
---
**问题现象**

在DevEco Studio上的C/C++代码处打断点，调试运行时断点不生效。

**可能原因**

DevEco Studio进行ArkTS/JS + Native混合调试时需要配置DevEco Studio的调试模式。

**解决措施**

选择配置项：Run/Debug Configurations > Debugger > Dual(ArkTS/JS + Native)

![](./img/8cf0e3c0.png "点击放大")
