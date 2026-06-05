---
format: md
title: "编译报错“The required attribute module-srcPath is missing”"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-137
---


**错误描述**

缺少必需属性：module-srcPath。

**可能原因**

build-profile.json5文件中缺少模块的相对路径，具体表现为module-srcPath字段缺失。

![](./img/1a5562a5.png)

**解决措施**

进入项目根目录下的build-profile.json5文件，确保module下srcPath字段存在且非空。
