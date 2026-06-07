---
format: md
title: "如何解决编译报错“Could not resolve 'xxx' from”，但'xxx'目录存在的问题"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-120
---


**问题现象**

编译报错：“Could not resolve 'xxx' from”，但'xxx'目录存在，目录下存在Index文件。

**问题原因**

在引用目录时，编译时自动拼接小写的index文件，而目录中是大写的Index文件，在编译大小写敏感时，找不到index文件，则报错。

**解决措施**

在引用'xxx'目录时，明确写明引用到'xxx/Index'文件。
