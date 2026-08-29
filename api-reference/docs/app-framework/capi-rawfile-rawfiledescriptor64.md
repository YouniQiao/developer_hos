---
title: "RawFileDescriptor64"
upstream_id: "harmonyos-references/capi-rawfile-rawfiledescriptor64"
catalog: "harmonyos-references"
content_hash: "53f2489d0940"
synced_at: "2026-08-29T18:16:17.111668"
---

# RawFileDescriptor64

```
typedef struct {...} RawFileDescriptor64
```

#### 概述

提供rawfile文件描述符信息，包含rawfile的文件描述符、在HAP包中的起始位置和文件长度。支持2GB以上的大文件。

通过[OH_ResourceManager_GetRawFileDescriptor64](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_getrawfiledescriptor64)获取，使用完后须调用[OH_ResourceManager_ReleaseRawFileDescriptor64](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_releaserawfiledescriptor64)释放文件描述符资源。

起始版本： 11

相关模块： [rawfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile)

所在头文件： [raw_file.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int fd | rawfile文件描述符。 |
| int64_t start | rawfile文件在HAP包中的起始位置，单位为Byte。 |
| int64_t length | rawfile文件的长度，单位为Byte。 |
