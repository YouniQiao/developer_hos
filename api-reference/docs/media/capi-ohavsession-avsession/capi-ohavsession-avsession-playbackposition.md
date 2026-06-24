---
title: "AVSession_PlaybackPosition"
upstream_id: "harmonyos-references/capi-ohavsession-avsession-playbackposition"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:09.026311"
---

# AVSession_PlaybackPosition

```
typedef struct AVSession_PlaybackPosition {...} AVSession_PlaybackPosition
```

#### 概述

媒体播放位置的相关属性。

起始版本： 13

相关模块： [OHAVSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohavsession)

所在头文件： [native_avplaybackstate.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avplaybackstate-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int64_t elapsedTime | 已用时间，单位毫秒（ms）。 |
| int64_t updateTime | 更新时间，单位毫秒（ms）。 |
