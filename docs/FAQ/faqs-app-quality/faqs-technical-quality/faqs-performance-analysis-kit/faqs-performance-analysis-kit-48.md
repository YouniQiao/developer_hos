---
format: md
title: "如何在多设备情况下使用hdc"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-performance-analysis-kit-48
---

**问题场景**

启动模拟器并连接真机，然后调用hdc命令获取udid。此时仅打印一条模拟器的udid。

**解决措施**

多设备环境下执行hdc shell会失败，需要指定设备执行hdc -t xx shell。否则，会报错。
