---
title: "HiDebug_Backtrace_Object__*"
upstream_id: "harmonyos-references/capi-hidebug-hidebug-backtrace-object--8h"
catalog: "harmonyos-references"
content_hash: "57f79a769213"
synced_at: "2026-07-09T01:00:05.276114"
---

# HiDebug_Backtrace_Object__*

```
typedef struct HiDebug_Backtrace_Object__* HiDebug_Backtrace_Object
```

#### 概述

用于栈回溯及栈解析的对象。该对象封装了栈回溯所需的上下文信息，包括调用栈地址、线程状态等数据，通过相关接口可获取详细的栈帧信息和符号解析结果。该对象通过HiDebug相关接口创建，使用后需要调用对应的销毁接口释放资源。

起始版本： 20

相关模块： [HiDebug](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug)

所在头文件： [hidebug_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hidebug-type-h)
