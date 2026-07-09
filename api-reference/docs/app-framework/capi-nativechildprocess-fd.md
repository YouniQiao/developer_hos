---
title: "NativeChildProcess_Fd"
upstream_id: "harmonyos-references/capi-nativechildprocess-fd"
catalog: "harmonyos-references"
content_hash: "c521e96c3f1a"
synced_at: "2026-07-09T00:57:13.113480"
---

# NativeChildProcess_Fd

```
typedef struct {...} NativeChildProcess_Fd
```

#### 概述

传递给子进程的文件描述符信息。

起始版本： 13

相关模块： [ChildProcess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-childprocess)

所在头文件： [native_child_process.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* fdName | 文件描述符的键，最大长度为20字符。 |
| int32_t fd | 文件描述符的值。 |
| struct [NativeChildProcess_Fd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativechildprocess-fd)* next | 下一个文件描述记录指针。 |
