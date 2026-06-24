---
title: "OH_AudioObjectPosition"
upstream_id: "harmonyos-references/capi-core-oh-audioobjectposition"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:05.043321"
---

# OH_AudioObjectPosition

```
typedef struct OH_AudioObjectPosition {...} OH_AudioObjectPosition
```

#### 概述

表示音频对象声源在三维空间中的位置。该位置可以用笛卡尔坐标或极坐标表示。

起始版本： 26.0.0

相关模块： [Core](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core)

所在头文件： [native_audio_vivid.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-vivid-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| bool isCartesian | 对象声源是否使用笛卡尔坐标表示。 true表示使用笛卡尔坐标，false表示不使用笛卡尔坐标系，使用极坐标系。 |
| union { [OH_CartesianPosition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-cartesianposition) cartesian; [OH_PolarPosition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core-oh-polarposition) polar; } pos | 包含笛卡尔坐标或极坐标位置数据的联合体。 cartesian：笛卡尔坐标表示的位置。 polar：极坐标表示的位置。 |
