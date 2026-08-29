---
title: "OH_AVSession_AVQueueItem"
upstream_id: "harmonyos-references/capi-ohavsession-oh-avsession-avqueueitem"
catalog: "harmonyos-references"
content_hash: "a8e57e615e8e"
synced_at: "2026-08-29T18:17:27.930898"
---

# OH_AVSession_AVQueueItem

```
typedef struct OH_AVSession_AVQueueItem {...} OH_AVSession_AVQueueItem
```

#### 概述

音视频队列元素的定义。

起始版本： 23

相关模块： [OHAVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession)

所在头文件： [native_avqueueitem.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avqueueitem-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t itemId | 资源ID。 |
| [OH_AVSession_AVMediaDescription](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession-oh-avsession-avmediadescription) *description | 媒体项信息。 |
