---
title: "HiAppEvent_AppEventInfo"
upstream_id: "harmonyos-references/capi-hiappevent-hiappevent-appeventinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:48.228810"
---

# HiAppEvent_AppEventInfo

```
typedef struct HiAppEvent_AppEventInfo {...} HiAppEvent_AppEventInfo
```

#### 概述

单个事件信息，包含事件领域、事件名称、事件类型和事件携带的用json格式字符串表示的自定义参数列表。

起始版本： 12

相关模块： [HiAppEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent)

所在头文件： [hiappevent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const char* domain | 事件领域。表示事件所属的业务领域或功能模块，用于事件分类和管理。 |
| const char* name | 事件名称。与domain配合使用唯一标识具体的事件。 |
| enum [EventType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-hiappevent-h#eventtype) type | 事件类型。 |
| const char* params | json格式字符串类型的事件参数列表。 |
