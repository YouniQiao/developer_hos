---
title: "JSVM_CallbackStruct*"
upstream_id: "harmonyos-references/capi-jsvm-jsvm-callbackstruct8h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:54:04.357902"
---

# JSVM_CallbackStruct*

```
typedef JSVM_CallbackStruct* JSVM_Callback
```

#### 概述

用户提供的native函数的函数指针类型，这些函数通过JSVM-API接口暴露给JavaScript。

使用场景： 在Native层实现JavaScript可调用的函数时使用，适用于JSVM扩展开发场景。

解决的问题： 定义标准化的函数指针类型，便于将C/C++函数暴露给JavaScript环境。

功能特点： 提供类型安全的函数指针定义，支持Native与JavaScript的交互。

系统能力： SystemCapability.ArkCompiler.JSVM

起始版本： 11

相关模块： [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

所在头文件： [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)
