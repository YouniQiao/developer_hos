---
format: md
title: "如何解决混淆之后的静态引用异常问题"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-93
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-93
last_sync: 2026-06-07
sync_hash: 747a32f4
upstream_hash: 9d29359faa3f
---

**问题描述**

import静态加载的时候如果引用的是index文件的，那是不是会一次性将index文件内的内容全部加载？另外如果静态引用时是引用的具体路径，一旦组件混淆了，具体路径就没了，变为混淆后的路径，这个问题怎么解决？有没有什么加载引用的优化方式？

**解决方案**

是的，会一次性将index文件内的内容全部加载，可以使用动态导入来代替静态引用，动态导入允许在运行时动态加载模块，而不是在编译时静态加载。这样可以在代码混淆后仍然保留正确的模块路径。

**参考链接**

[动态加载](/docs/dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import)
