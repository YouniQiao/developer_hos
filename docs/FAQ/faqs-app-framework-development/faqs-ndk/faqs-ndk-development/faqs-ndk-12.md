---
format: md
title: "如何在Native侧添加debug版本声明"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-12
upstream_id: FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-12
last_sync: 2026-06-07
sync_hash: 18d4fa3c
---
**问题详情**

尝试过在需要编译的库的build-profile.json5文件中，buildOptionSet字段中添加 \{ "name": "debug", "externalNativeOptions": \{ "arguments": "-DDEBUG=1" \} \} 或在buildOption.externalNativeOptions.arguments字段中设置"-DDEBUG=1"， 在使用debug模式运行时均不会执行#ifdef DEBUG中的语句。

**解决措施**

1.CMakeLists.txt文件中增加如下语句：

```
if(CMAKE_BUILD_TYPE STREQUAL Debug)
    add_definitions(-D_DEBUG)
endif()
```

2.C++文件中增加如下代码：

```
#include "napi/native_api.h"
#include "hilog/log.h"
#define LOG_TAG "Pure"

static napi_value DefDebug(napi_env env, napi_callback_info info) {
#ifdef _DEBUG
    OH_LOG_INFO(LOG_APP, "debug enter Project");
#else
    OH_LOG_INFO(LOG_APP, "release enter Project");
#endif
    return nullptr;
}
```
