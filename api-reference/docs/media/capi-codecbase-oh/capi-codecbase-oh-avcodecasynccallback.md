---
title: "OH_AVCodecAsyncCallback"
upstream_id: "harmonyos-references/capi-codecbase-oh-avcodecasynccallback"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:03.633411"
---

# OH_AVCodecAsyncCallback

```
typedef struct OH_AVCodecAsyncCallback {...} OH_AVCodecAsyncCallback
```

#### 概述

OH_AVCodec中所有异步回调函数指针的集合。将该结构体的实例注册到OH_AVCodec实例中，并处理回调上报的信息，以保证OH_AVCodec的正常运行。

起始版本： 9

废弃版本： 11

替代接口： [OH_AVCodecCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase-oh-avcodeccallback)

相关模块： [CodecBase](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase)

所在头文件： [native_avcodec_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [OH_AVCodecOnError](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#oh_avcodeconerror) onError | 监控编解码器操作错误。 |
| [OH_AVCodecOnStreamChanged](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#oh_avcodeconstreamchanged) onStreamChanged | 监控编解码器流变化。 |
| [OH_AVCodecOnNeedInputData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#oh_avcodeconneedinputdata) onNeedInputData | 监控编解码器需要输入数据。 |
| [OH_AVCodecOnNewOutputData](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#oh_avcodeconnewoutputdata) onNeedOutputData | 监控编解码器已生成输出数据。 |
