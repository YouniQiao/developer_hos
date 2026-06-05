---
format: md
title: "如何解决编译报错“Cannot add xxxx items to index”的问题"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-131
---

**问题现象**

编译报错“Cannot add xxxx items to index”。

**问题原因**

被编译文件中某函数内部有大量object literal, array literal和string，导致item的数量超过了上限（65536）。

**解决方案**

排查相关文件，将存在上述原因的函数进行拆分。
