---
title: "OH_CartesianPosition"
upstream_id: "harmonyos-references/capi-core-oh-cartesianposition"
catalog: "harmonyos-references"
content_hash: "3df8558d2cd0"
synced_at: "2026-07-09T01:00:16.386872"
---

# OH_CartesianPosition

```
typedef struct OH_CartesianPosition {...} OH_CartesianPosition
```

#### 概述

表示对象声源在笛卡尔坐标系（Cartesian coordinate system）中的位置。笛卡尔坐标系使用x、y、z轴定义三维空间中的位置。

起始版本： 26.0.0

相关模块： [Core](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-core)

所在头文件： [native_audio_vivid.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-vivid-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float x | 对象声源在笛卡尔坐标系中的归一化（Normalization，将数值按比例转换到指定范围内）X坐标，表示左/右维度。 取值范围为[-1.0, 1.0]。 |
| float y | 对象声源在笛卡尔坐标系中的归一化Y坐标，表示前/后维度。 取值范围为[-1.0, 1.0]。 |
| float z | 对象声源在笛卡尔坐标系中的归一化Z坐标，表示上/下维度。 取值范围为[-1.0, 1.0]。 |
