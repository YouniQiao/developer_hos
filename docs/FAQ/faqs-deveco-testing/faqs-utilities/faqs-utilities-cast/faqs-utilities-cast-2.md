---
format: md
title: "设备投屏时，投屏卡顿如何处理"
original_url: /docs/FAQ/faqs-deveco-testing/faqs-utilities/faqs-utilities-cast/faqs-utilities-cast-2
upstream_id: FAQ/faqs-deveco-testing/faqs-utilities/faqs-utilities-cast/faqs-utilities-cast-2
last_sync: 2026-06-07
sync_hash: e3149443
---
1. 设备内置的UITest框架可能存在性能问题，建议刷机至最新版本后，再尝试设备投屏。
2. 当前PC上的hdc通道占用过多，请退出客户端，停止所有本地hdc进程，然后重启客户端再使用。
