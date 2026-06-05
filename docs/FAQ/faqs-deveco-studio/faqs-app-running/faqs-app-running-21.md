---
format: md
title: "模拟器应用运行时崩溃退出"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-running-21
---


**问题现象**

应用在模拟器启动调试或运行过程中异常退出。

**解决措施**

1. 模拟器与真机存在差异，确保使用模拟器支持的场景和规格能力。如果应用在模拟器中运行时崩溃，可能是由于代码中使用了模拟器不支持的功能。如果异常代码段实现的功能不是调试的目标功能，可以采取以下方式规避问题：
   * 采用try-catch语句捕获异常。
   * 首先判断设备是否为模拟器（参见[在应用中如何区分真机和模拟器](https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-running-28)）。针对模拟器的调试场景，使用if语句跳过异常代码段。
2. 如果应用中使用了三方so库，需要提供对应于模拟器的x86或ARM版本。
