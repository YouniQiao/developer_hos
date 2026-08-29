---
title: "RawDir"
upstream_id: "harmonyos-references/capi-rawfile-rawdir"
catalog: "harmonyos-references"
content_hash: "c22de1415585"
synced_at: "2026-08-29T18:16:17.097868"
---

# RawDir

```
typedef struct RawDir RawDir
```

#### 概述

RawDir表示一个已打开的rawfile目录对象，可用于遍历目录和目录下文件。通过[OH_ResourceManager_OpenRawDir](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h#oh_resourcemanager_openrawdir)函数获取，使用完后须调用[OH_ResourceManager_CloseRawDir](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-dir-h#oh_resourcemanager_closerawdir)关闭并释放。

起始版本： 8

相关模块： [rawfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rawfile)

所在头文件： [raw_dir.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-dir-h)
