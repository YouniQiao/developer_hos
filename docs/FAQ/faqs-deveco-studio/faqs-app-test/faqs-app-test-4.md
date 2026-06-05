---
format: md
title: "出现“container is not running”错误"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-test-4
---

**问题现象**

在HarmonyOS设备上运行命令“hdc -n shell param set persist.ace.testmode.enabled 1”时，出现错误提示“container is not running”。

![](./img/6c8c0914.png)

**解决措施**

在DevEco Studio中运行一个测试用例，推包到设备上，然后运行命令hdc -n shell param set persist.ace.testmode.enabled 1。

![](./img/4235fd80.png)
