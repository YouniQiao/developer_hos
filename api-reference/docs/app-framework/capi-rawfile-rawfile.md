---
title: "RawFile"
upstream_id: "harmonyos-references/capi-rawfile-rawfile"
catalog: "harmonyos-references"
content_hash: "ae1d6b50a94c"
synced_at: "2026-08-29T18:16:17.171507"
---

# RawFile

```
typedef struct RawFile RawFile
```

#### 概述

RawFile表示一个已打开的rawfile对象。通过[OH_ResourceManager_OpenRawFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_openrawfile)函数获取，使用完后须调用[OH_ResourceManager_CloseRawFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h#oh_resourcemanager_closerawfile)关闭并释放。

起始版本： 8

相关模块： [rawfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile)

所在头文件： [raw_file.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h)
