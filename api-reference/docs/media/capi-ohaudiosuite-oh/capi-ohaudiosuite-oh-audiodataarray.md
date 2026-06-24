---
title: "OH_AudioDataArray"
upstream_id: "harmonyos-references/capi-ohaudiosuite-oh-audiodataarray"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:59.435949"
---

# OH_AudioDataArray

```
typedef struct {...} OH_AudioDataArray
```

#### 概述

定义多路输出渲染接口的输入数据描述。当管线中存在多输出效果节点时，通过多输出渲染接口获取处理过后的音频数据。

起始版本： 22

相关模块： [OHAudioSuite](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudiosuite)

所在头文件： [native_audio_suite_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| void **audioDataArray | 需要输出的音频数据地址。 |
| int32_t arraySize | 音频数组大小。 |
| int32_t requestFrameSize | audioDataArray数组中地址的内存大小（单位为字节），应确保每个地址均具有requestFrameSize字节个大小。 |
