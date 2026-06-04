---
title: "如何处理include <stddef.h>编译报错"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-59
---

**问题现象**

C语言代码中包含<stddef.h>时编译报错：

lib/clang/15.0.4/include/stddef. h:74:24: error: typedef redefinition with different types ('unsigned short" vs 'unsigned int")typedef*WCHAR\_TYPE* \_ wchar\_t;… 10/native/sysroot/us/include/aarch64-linux-ohos/bits/alltypes.h:15:18: note: previous definition is here typedef unsigned wchar\_t。

**解决措施**

在CMakeLists.txt中删除TARGET\_COMPILE\_OPTIONS内的参数-fshort-wchar。
