---
title: "内存泄漏的定位日志为什么是乱码"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-stability-basic-quality-test-2
---

系统自动抓取的调用栈文件（memleak native --[process\_name]--[pid]--[timestamp].txt）无法直接在DevEco Studio中打开。需要将文件后缀名修改为.nas，然后使用DevEco Studio-Profiler-打开并分析。
