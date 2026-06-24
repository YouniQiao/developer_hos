---
title: "CloudDisk_PathInfo"
upstream_id: "harmonyos-references/capi-clouddisk-clouddisk-pathinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:16.047925"
---

# CloudDisk_PathInfo

```
typedef struct CloudDisk_PathInfo {...} CloudDisk_PathInfo
typedef struct CloudDisk_PathInfo CloudDisk_FieldInfo
typedef struct CloudDisk_PathInfo CloudDisk_SyncFolderPath
```

#### 概述

文件路径信息。

起始版本： 21

相关模块： [CloudDisk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk)

所在头文件： [oh_cloud_disk_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-cloud-disk-manager-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char *value | 文件的路径，以'\0'字符结尾。 |
| size_t length | 文件路径的长度，不包括结尾的'\0'字符。 |
