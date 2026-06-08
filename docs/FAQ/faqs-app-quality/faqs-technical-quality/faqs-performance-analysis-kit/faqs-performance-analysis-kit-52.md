---
format: md
title: "如何通过hdc命令唤醒设备和查看屏幕状态"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-52
upstream_id: FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-52
last_sync: 2026-06-07
sync_hash: 1a2cf09d
upstream_hash: c9c112f091b6
---

唤醒设备：hdc shell power-shell wakeup。

查看屏幕状态：hdc shell hidumper -s 3301 -a

查询手机IMEI：首先，进入fastboot模式（hdc target boot bootloader），然后使用fastboot命令查询（fastboot oem get-psid）。
