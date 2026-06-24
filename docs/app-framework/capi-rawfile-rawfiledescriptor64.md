---
title: "RawFileDescriptor64"
upstream_id: "harmonyos-references/capi-rawfile-rawfiledescriptor64"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:24.001523"
---

# RawFileDescriptor64

```
typedef struct {...} RawFileDescriptor64
```

#### 概述

提供较大rawfile文件描述符信息。RawFileDescriptor64是[OH_ResourceManager_GetRawFileDescriptor64](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_getrawfiledescriptor64)的输出参数,涵盖了rawfile文件的文件描述符以及在HAP包中的起始位置和长度。

起始版本： 11

相关模块： [rawfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile)

所在头文件： [raw_file.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int fd | rawfile文件描述符，单位为int。 |
| int64_t start | rawfile在HAP包中的起始位置，单位为int64_t。 |
| int64_t length | rawfile在HAP包中的长度，单位为int64_t。 |
