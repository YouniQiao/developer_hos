---
title: "编译报错“There are some dependency names that are inconsistent with the actual package names”"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-144
---

**错误描述**

依赖名称与包名称不匹配。

**可能原因**

依赖名称与依赖包中oh-package.json5文件的name字段不一致。

![](./img/efd13ba3.png)

**解决措施**

将依赖名修改为依赖包在oh-package.json5中定义的name。
