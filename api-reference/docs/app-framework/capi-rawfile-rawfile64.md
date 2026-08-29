---
title: "RawFile64"
upstream_id: "harmonyos-references/capi-rawfile-rawfile64"
catalog: "harmonyos-references"
content_hash: "f615e4511d49"
synced_at: "2026-08-29T18:16:17.327750"
---

# RawFile64

```
typedef struct RawFile64 RawFile64
```

#### 概述

RawFile64表示一个已打开的rawfile对象，用于访问2GB及以上的大文件。通过[OH_ResourceManager_OpenRawFile64](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_openrawfile64)函数获取，使用完后须调用[OH_ResourceManager_CloseRawFile64](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_closerawfile64)关闭并释放。

起始版本： 11

相关模块： [rawfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile)

所在头文件： [raw_file.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h)
