---
displayed_sidebar: appDevSidebar
title: "管理AR会话（C/C++）"
original_url: /docs/dev/app-dev/graphics/ar-engine-kit-guide/arsession/arengine-c-arsession
format: md
---


本章节给出了关键开发步骤，完整代码可以参考[示例代码](https://gitcode.com/harmonyos_samples/arengine_-sample-code_-clientdemo_cpp)。

## 约束与限制

从5.0.0(12)开始，管理AR会话支持部分Phone、部分Tablet设备。并且从6.1.0(23)版本开始，新增支持TV设备。请参考[硬件要求](/docs/dev/app-dev/graphics/arengine-preparations#硬件要求)判断设备是否支持。

## 引入AR Engine

1. 引入头文件。

   ```
   #include "ar/ar_engine_core.h"
   ```
2. 编写CMakeLists.txt。

   ```
   find_library(
       # Sets the name of the path variable.
       arengine-lib
       # Specifies the name of the NDK library that
       # you want CMake to locate.
       libarengine_ndk.z.so
   )

   target_link_libraries(entry PUBLIC
       ${arengine-lib}
   )
   ```

## 创建AR会话

应用开始时，调用[HMS\_AREngine\_ARSession\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_create)函数创建一个AR会话。

```
AREngine_ARSession *arSession = nullptr;
HMS_AREngine_ARSession_Create(nullptr, nullptr, &arSession);
```

## 自定义配置AR会话

创建一个[AREngine\_ARConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#arengine_arconfig)对象来配置当前AR会话。如缺省，则使用默认配置，具体配置可参考[HMS\_AREngine\_ARConfig\_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arconfig_create)。

```
// 创建一个拥有合理默认配置的配置对象。
AREngine_ARConfig *arConfig = nullptr;
HMS_AREngine_ARConfig_Create(arSession, &arConfig);

// 此处配置arConfig。

// 配置AREngine_ARSession会话。
HMS_AREngine_ARSession_Configure(arSession, arConfig);

// 释放指定的配置对象的内存空间。
HMS_AREngine_ARConfig_Destroy(arConfig);
```

具体可配置项，请参考[AR Engine API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine)。

## 销毁AR会话

应用结束时，调用[HMS\_AREngine\_ARSession\_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arengine-capi-arengine#hms_arengine_arsession_destroy)函数销毁当前的AR会话。

```
HMS_AREngine_ARSession_Destroy(arSession);
```
