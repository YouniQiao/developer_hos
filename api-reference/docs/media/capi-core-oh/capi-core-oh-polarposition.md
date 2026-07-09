---
title: "OH_PolarPosition"
upstream_id: "harmonyos-references/capi-core-oh-polarposition"
catalog: "harmonyos-references"
content_hash: "66c9eb140b83"
synced_at: "2026-07-09T01:00:16.464423"
---

# OH_PolarPosition

```
typedef struct OH_PolarPosition {...} OH_PolarPosition
```

#### 概述

表示极坐标系（polar coordinate system，也叫球坐标系）中的位置。极坐标系使用方位角、俯仰角和距离定义对象声源在三维空间中的位置。

起始版本： 26.0.0

相关模块： [Core](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core)

所在头文件： [native_audio_vivid.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-vivid-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float azimuth | 极坐标系下对象声源所在位置的方位角。 取值范围为[-180.0, 180.0]，其中0.0表示正前方，90.0表示左侧，-90.0表示右侧，-180.0或180.0表示正后方。 |
| float elevation | 极坐标系下对象声源所在位置的俯仰角。 取值范围为[-90.0, 90.0]，其中0.0表示水平，90.0表示正上方，-90.0表示正下方。 |
| float distance | 极坐标系下对象声源所在位置的归一化距离。 取值范围为[0.0, 1.0]。 |
