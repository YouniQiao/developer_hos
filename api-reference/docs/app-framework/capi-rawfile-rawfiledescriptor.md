---
title: "RawFileDescriptor"
upstream_id: "harmonyos-references/capi-rawfile-rawfiledescriptor"
catalog: "harmonyos-references"
content_hash: "3c4150b7aef2"
synced_at: "2026-08-29T18:16:17.090137"
---

# RawFileDescriptor

```
typedef struct {...} RawFileDescriptor
```

#### 概述

提供rawfile文件描述符信息，包含rawfile的文件描述符、在HAP包中的起始位置和文件长度。

通过[OH_ResourceManager_GetRawFileDescriptorData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_getrawfiledescriptordata)获取，使用完后须调用[OH_ResourceManager_ReleaseRawFileDescriptorData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_releaserawfiledescriptordata)释放文件描述符资源。

起始版本： 8

相关模块： [rawfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile)

所在头文件： [raw_file.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int fd | rawfile文件描述符。 |
| long start | rawfile文件在HAP包中的起始位置，单位为Byte。 |
| long length | rawfile文件的长度，单位为Byte。 |
