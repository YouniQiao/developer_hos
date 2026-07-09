---
title: "NativeChildProcess_FdList"
upstream_id: "harmonyos-references/capi-nativechildprocess-fdlist"
catalog: "harmonyos-references"
content_hash: "65b553571946"
synced_at: "2026-07-09T00:57:13.228982"
---

# NativeChildProcess_FdList

```
typedef struct NativeChildProcess_FdList {...} NativeChildProcess_FdList
```

#### 概述

传递给子进程的文件描述符信息列表，文件描述符记录个数不能超过16个。

起始版本： 13

相关模块： [ChildProcess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-childprocess)

所在头文件： [native_child_process.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| struct [NativeChildProcess_Fd](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativechildprocess-fd)* head | 子进程文件描述符记录链表中的第一个记录。 |
