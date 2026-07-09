---
title: "HiDebug_StackFrame"
upstream_id: "harmonyos-references/capi-hidebug-hidebug-stackframe"
catalog: "harmonyos-references"
content_hash: "6412fc32c3b2"
synced_at: "2026-07-09T01:00:05.250329"
---

# HiDebug_StackFrame

```
typedef struct HiDebug_StackFrame {...} HiDebug_StackFrame
```

#### 概述

栈帧内容的定义。该结构体用于表示调试时的栈帧信息，支持获取当前栈的类型以及对应的js栈帧或Native栈帧内容，帮助开发者进行问题定位和调试分析。

起始版本： 20

相关模块： [HiDebug](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug)

所在头文件： [hidebug_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [HiDebug_StackFrameType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-type-h#hidebug_stackframetype) type | 当前栈的类型。 |
| struct [HiDebug_JsStackFrame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-jsstackframe) js | 由[HiDebug_JsStackFrame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-jsstackframe)定义的js栈帧内容。 |
| struct [HiDebug_NativeStackFrame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-nativestackframe) native | 由[HiDebug_NativeStackFrame](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-hidebug-nativestackframe)定义的native栈帧内容。 |
