---
title: "OH_NativeXComponent_ExpectedRateRange"
upstream_id: "harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-nativexcomponent-expectedraterange"
catalog: "harmonyos-references"
content_hash: "a14ec0886276"
synced_at: "2026-08-29T18:15:46.411853"
---

# OH_NativeXComponent_ExpectedRateRange

```
typedef struct {...} OH_NativeXComponent_ExpectedRateRange
```

#### 概述

定义期望帧率范围，用于设置XComponent渲染时的期望帧率区间，适用于需要对动画或渲染帧率进行精确控制的场景，可帮助在画面流畅度与功耗之间取得平衡。

起始版本： 11

相关模块： [OH_NativeXComponent Native XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent)

所在头文件： [native_interface_xcomponent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t min | 期望帧率范围最小值。取值需大于等于0且小于等于max。单位为帧/秒。传入无效值时不生效。取值范围：[0, +∞)。需满足 min = min。 |
| int32_t expected | 期望帧率。取值需满足 min ≤ expected ≤ max。单位为帧/秒。取值范围：[0, +∞)，且应在[min, max]范围内。 |
