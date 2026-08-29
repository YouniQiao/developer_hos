---
title: "NativeChildProcess_Args"
upstream_id: "harmonyos-references/capi-nativechildprocess-args"
catalog: "harmonyos-references"
content_hash: "319d4d1a98ec"
synced_at: "2026-08-29T18:12:09.413461"
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
| char* entryParams | 传递给子进程入口函数的参数字符串。entryParams通过IPC传输，IPC传输的数据量最大为200KB（详见[约束与限制](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ipc-rpc-overview#约束与限制)），其中部分由系统占用，建议entryParams传入数据量不超过150KB，否则可能导致创建子进程失败。 |
| struct [NativeChildProcess_FdList](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativechildprocess-fdlist) fdList | 传递给子进程的文件描述符信息列表，文件描述符记录个数不能超过16个。子进程可通过这些文件描述符与主进程进行通信。 |
