---
format: md
title: "如何处理include <stddef.h>编译报错"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-59
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-59
last_sync: 2026-06-07
sync_hash: 0c24d9e3
---
**问题现象**

C语言代码中包含\<stddef.h\>时编译报错：

lib/clang/15.0.4/include/stddef. h:74:24: error: typedef redefinition with different types ('unsigned short" vs 'unsigned int")typedef*WCHAR\_TYPE* \_ wchar\_t;… 10/native/sysroot/us/include/aarch64-linux-ohos/bits/alltypes.h:15:18: note: previous definition is here typedef unsigned wchar\_t。

**解决措施**

在CMakeLists.txt中删除TARGET\_COMPILE\_OPTIONS内的参数-fshort-wchar。
