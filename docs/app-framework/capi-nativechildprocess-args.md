---
title: "NativeChildProcess_Args"
upstream_id: "harmonyos-references/capi-nativechildprocess-args"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:46:59.772272"
---

# NativeChildProcess_Args

```
typedef struct {...} NativeChildProcess_Args
```

#### 概述

传递给子进程的参数。

起始版本： 13

相关模块： [ChildProcess](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-childprocess)

所在头文件： [native_child_process.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-child-process-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* entryParams | 入口参数，大小不能超过150KB。 |
| struct [NativeChildProcess_FdList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativechildprocess-fdlist) fdList | 传递给子进程的文件描述符信息列表。 |
