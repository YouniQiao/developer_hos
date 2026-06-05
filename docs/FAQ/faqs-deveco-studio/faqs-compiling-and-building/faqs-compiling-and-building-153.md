---
format: md
title: "编译报错“This project is in the FA model and does not allow for external dependencies.”"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-153
---

**错误描述**

FA模型项目不得依赖外部项目模块。

**可能原因**

在FA模型项目中，build-profile.json5文件的srcPath字段引用了外部项目模块。

![](./img/f8e99835.png)

**解决措施**

在项目根目录的build-profile.json5文件中，移除srcPath字段依赖的外部项目模块。
