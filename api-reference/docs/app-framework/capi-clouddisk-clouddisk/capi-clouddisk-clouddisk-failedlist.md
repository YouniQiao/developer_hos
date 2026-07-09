---
title: "CloudDisk_FailedList"
upstream_id: "harmonyos-references/capi-clouddisk-clouddisk-failedlist"
catalog: "harmonyos-references"
content_hash: "800e986838f7"
synced_at: "2026-07-09T00:59:01.539333"
---

# CloudDisk_FailedList

```
typedef struct CloudDisk_FailedList {...} CloudDisk_FailedList
```

#### 概述

同步操作中失败的文件列表信息。该结构包含文件路径信息以及失败的具体错误原因。

起始版本： 21

相关模块： [CloudDisk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk)

所在头文件： [oh_cloud_disk_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-cloud-disk-manager-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [CloudDisk_PathInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk-clouddisk-pathinfo) pathInfo | 失败文件的绝对路径信息。 |
| [CloudDisk_ErrorReason](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-cloud-disk-manager-h#clouddisk_errorreason) errorReason | 文件同步失败的原因。 |
