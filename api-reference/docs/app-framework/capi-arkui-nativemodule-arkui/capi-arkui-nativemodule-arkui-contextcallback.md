---
title: "ArkUI_ContextCallback"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-contextcallback"
catalog: "harmonyos-references"
content_hash: "8382e600f979"
synced_at: "2026-07-28T16:49:32.913748"
---

# ArkUI_ContextCallback

```
typedef struct {...} ArkUI_ContextCallback
```

#### 概述

事件回调类型，用于定义回调函数及其用户自定义数据。使用该类型的接口触发回调时，会调用callback，并将userData作为参数传入。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| void* userData | 用户自定义数据，在回调时作为参数传入。 |

#### [h2]成员函数

| 名称 | 描述 |
| --- | --- |
| [void (*callback)(void* userData)](#callback) | 事件触发时执行的回调函数，调用时会传入userData指向的用户自定义数据。 |

#### 成员函数说明

#### [h2]callback()

```
void (*callback)(void* userData)
```
 描述：

事件触发时执行的回调函数，无返回值。触发该回调时，会将userData指向的用户自定义数据作为参数传入，用于执行自定义处理逻辑。具体触发时机由使用该类型的接口定义。
