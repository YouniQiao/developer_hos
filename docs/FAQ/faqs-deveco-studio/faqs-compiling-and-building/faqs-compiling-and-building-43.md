---
format: md
title: "无法调试，DevEco Studio提示“ The target can not be empty. Check the build-profile.json5 file of the project root directory and make sure the targets of the modules in configuration is set to specified product: default in applyToProducts.”"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-43
---


**问题现象**

![](./img/e9df95b0.png "点击放大")

**问题分析**

报该错误，可能是build-profile.json5文件中未添加“targets”配置，Module Target下为空，工程同步失败。

![](./img/7d232c5c.png)

**解决措施**

需要在模块级build-profile.json5文件中添加“targets”配置，点击“Sync Now”，待完成同步后，即可解决该问题（确保工程同步成功）。具体配置如图所示：

![](./img/042283a0.png "点击放大")
