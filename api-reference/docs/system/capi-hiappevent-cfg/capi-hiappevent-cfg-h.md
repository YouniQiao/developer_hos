---
title: "hiappevent_cfg.h"
upstream_id: "harmonyos-references/capi-hiappevent-cfg-h"
catalog: "harmonyos-references"
content_hash: "a2f9f4885605"
synced_at: "2026-07-09T01:00:03.549293"
---

# hiappevent_cfg.h

#### 概述

定义事件打点配置函数的所有配置项名称。如果开发者想要对应用事件打点功能进行配置，可以直接使用配置项常量。

引用文件： <hiappevent/hiappevent_cfg.h>

库： libhiappevent_ndk.z.so

系统能力： SystemCapability.HiviewDFX.HiAppEvent

起始版本： 8

相关模块： [HiAppEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent)

#### 汇总

#### [h2]宏定义

| 名称 | 描述 |
| --- | --- |
| [DISABLE](#disable) "disable" | 事件打点开关。默认值为false。true：关闭打点功能，false：开启打点功能。 **起始版本：** 8 |
| [MAX_STORAGE](#max_storage) "max_storage" | 事件文件目录存储配额大小。默认值为“10M”（MB）。 **起始版本：** 8 |

#### 宏定义说明

#### [h2]DISABLE

```
#define DISABLE "disable"
```
 描述

事件打点开关。默认值为false。true：关闭打点功能，false：不关闭打点功能。

起始版本： 8

#### [h2]MAX_STORAGE

```
#define MAX_STORAGE "max_storage"
```
 描述

事件文件目录存储配额大小。默认值为“10M”。

起始版本： 8
