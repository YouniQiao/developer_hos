---
format: md
title: "编译报错“Cannot resolved import statement”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-140
---


**错误描述**

在编译过程中，提示“Cannot resolved import statement”错误信息。

**可能原因**

导入文件时，大小写不一致会导致问题（导入到单个文件夹时，默认寻址小写 “index.ets”文件，但该文件夹下仅存在大写“index.ets”文件）。

![](./img/6e9faf42.png)

**解决措施**

检查import文件的大小写。
