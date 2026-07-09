---
title: "CloudDisk_DisplayNameInfo"
upstream_id: "harmonyos-references/capi-clouddisk-clouddisk-displaynameinfo"
catalog: "harmonyos-references"
content_hash: "11e9c24dadc0"
synced_at: "2026-07-09T00:59:01.426151"
---

# CloudDisk_DisplayNameInfo

```
typedef struct CloudDisk_DisplayNameInfo {...} CloudDisk_DisplayNameInfo
```

#### 概述

定义同步根路径的显示名称信息。

起始版本： 21

相关模块： [CloudDisk](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-clouddisk)

所在头文件： [oh_cloud_disk_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-cloud-disk-manager-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t displayNameResId | 应用同步根路径显示名称对应的静态资源ID。 |
| char *customAlias | 自定义的别名，不能包含字符：\/*?<>|:"，以及不能以"."、".."和纯空格作为完整名称。 |
| size_t customAliasLength | 自定义别名的长度，范围：[0, 255]。 |
