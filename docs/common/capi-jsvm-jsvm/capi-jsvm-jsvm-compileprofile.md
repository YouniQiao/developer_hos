---
title: "JSVM_CompileProfile"
upstream_id: "harmonyos-references/capi-jsvm-jsvm-compileprofile"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:54:04.352343"
---

# JSVM_CompileProfile

```
typedef const struct {...} JSVM_CompileProfile
```

#### 概述

与JSVM_COMPILE_COMPILE_PROFILE一起传递的编译采样文件。

使用场景： 用于应用二次启动时的预编译优化，可提升应用启动速度和运行性能。适用于需要优化启动性能的应用场景。

系统能力： SystemCapability.ArkCompiler.JSVM

起始版本： 12

相关模块： [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

所在头文件： [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int *profile | 编译采样文件的指针。 |
| size_t length | 编译采样文件的大小。 |
