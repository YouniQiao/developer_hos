---
title: "JSVM_CallbackStruct"
upstream_id: "harmonyos-references/capi-jsvm-jsvm-callbackstruct"
catalog: "harmonyos-references"
content_hash: "db7c2273d962"
synced_at: "2026-07-09T01:01:46.574275"
---

# JSVM_CallbackStruct

```
typedef struct {...} JSVM_CallbackStruct
```

#### 概述

用户提供的Native回调函数的指针和数据，这些函数通过JSVM-API接口暴露给JavaScript。

使用场景： 在Native层实现JavaScript可调用的函数，将C/C++函数封装为JavaScript回调，实现Native与JavaScript之间的双向交互。

功能特点： 支持传递自定义数据到回调函数，提供标准的回调函数签名，跨语言调用的基础设施。

系统能力： SystemCapability.ArkCompiler.JSVM

起始版本： 11

相关模块： [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

所在头文件： [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| void* data | 用户提供的Native回调函数的数据。 |

#### [h2]成员函数

| 名称 | 描述 |
| --- | --- |
| [JSVM_Value(JSVM_CDECL* callback)(JSVM_Env env, JSVM_CallbackInfo info)](#callback) | 用户提供的Native回调函数的指针。 |

#### 成员函数说明

#### [h2]callback()

```
JSVM_Value(JSVM_CDECL* callback)(JSVM_Env env, JSVM_CallbackInfo info)
```
 描述

用户提供的Native回调函数的指针。
