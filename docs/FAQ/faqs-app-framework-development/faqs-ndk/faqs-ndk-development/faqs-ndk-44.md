---
format: md
title: "Native侧如何引入头文件deviceinfo.h"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-44
upstream_id: FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-44
last_sync: 2026-06-07
sync_hash: a7577df2
---
**问题现象：**

在C++文件中，参照官方指导文档，引入#include "deviceinfo.h"头文件后，编译时仍提示无法找到该头文件，日志提示未链接deviceinfo库。

**解决措施：**

当前public SDK中不包含deviceinfo.h头文件，该头文件仅在full SDK中才可以使用，并且需要在CMakeLists.txt导入libdeviceinfo\_ndk.z.so 库才能找到该头文件。方法如下：

```
# CMakeLists.txt
# ...
target_link_libraries(cpplib PUBLIC libace_napi.z.so libdeviceinfo_ndk.z.so)
```
