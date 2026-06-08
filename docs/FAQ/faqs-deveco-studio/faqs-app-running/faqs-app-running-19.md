---
format: md
title: "DevEco Studio修改文件后点击run，一直没成功跑起来，run按钮一直处于禁用状态（Mac环境）"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-app-running/faqs-app-running-19
upstream_id: FAQ/faqs-deveco-studio/faqs-app-running/faqs-app-running-19
last_sync: 2026-06-07
sync_hash: d4546596
---
**问题描述**

DevEco Studio修改文件后点击run，一直没成功跑起来，run按钮一直处于禁用状态（Mac环境）

**可能原因**

hdc在该MAC地址上默认使用IPv6协议，而Java不支持IPv6，默认使用IPv4协议，因此网口接收到了数据，但协议层无法解析数据。

**解决方案**

1. 给DevEco Studio配置走ipv4协议，Help -> Edit Custom VM Options...
2. 添加-Djava.net.preferIPv4Stack=true
