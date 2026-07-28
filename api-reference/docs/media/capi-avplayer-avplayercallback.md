---
title: "AVPlayerCallback"
upstream_id: "harmonyos-references/capi-avplayer-avplayercallback"
catalog: "harmonyos-references"
content_hash: "d4873b65a164"
synced_at: "2026-07-28T16:52:00.050621"
---

# AVPlayerCallback

```
typedef struct AVPlayerCallback {...} AVPlayerCallback
```

#### 概述

AVPlayerCallback是AVPlayer的回调管理结构体，包含了播放过程信息OH_AVPlayerOnInfo和错误信息OH_AVPlayerOnError的回调函数指针。应用需注册此实例结构体到OH_AVPlayer实例中，并对回调上报的信息进行处理，保证AVPlayer的正常运行。通过注册这些回调，开发者可以实时监控AVPlayer的播放状态、获取播放过程信息（如缓冲进度、播放位置等）和错误事件，及时响应和处理播放过程中的各种事件，适用于需要对播放流程进行细粒度控制（Fine-grained Control）和监控的场景。

起始版本： 11

废弃版本： 12

替代接口： [OH_AVPlayerOnInfoCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avplayer-base-h#oh_avplayeroninfocallback)或[OH_AVPlayerOnErrorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avplayer-base-h#oh_avplayeronerrorcallback)。

相关模块： [AVPlayer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avplayer)

所在头文件： [avplayer_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avplayer-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| OH_AVPlayerOnInfo onInfo | 监控AVPlayer过程信息，需注册此回调到AVPlayer实例中使用，详细内容参考[OH_AVPlayerOnInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avplayer-base-h#oh_avplayeroninfo)。 **起始版本：** 11 **废弃版本：** 12 **替代接口：** [OH_AVPlayerOnInfoCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avplayer-base-h#oh_avplayeroninfocallback) |
| OH_AVPlayerOnError onError | 监控AVPlayer操作错误，需注册此回调到AVPlayer实例中使用。回调签名为OH_AVPlayerOnError。回调参数信息请参考[OH_AVPlayerOnError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avplayer-base-h#oh_avplayeronerror)。 **起始版本：** 11 **废弃版本：** 12 **替代接口：** [OH_AVPlayerOnErrorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avplayer-base-h#oh_avplayeronerrorcallback) |
