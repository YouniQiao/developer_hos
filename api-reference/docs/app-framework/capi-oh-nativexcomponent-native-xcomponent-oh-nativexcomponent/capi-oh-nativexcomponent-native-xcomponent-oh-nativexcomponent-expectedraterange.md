---
title: "OH_NativeXComponent_ExpectedRateRange"
upstream_id: "harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-nativexcomponent-expectedraterange"
catalog: "harmonyos-references"
content_hash: "31edd2fe3588"
synced_at: "2026-07-28T16:49:31.570044"
---

# OH_NativeXComponent_ExpectedRateRange

```
typedef struct {...} OH_NativeXComponent_ExpectedRateRange
```

#### 概述

定义期望帧率范围。该结构体用于设置XComponent的帧率范围，支持在高性能渲染场景下进行精确的帧率控制，帮助平衡画面流畅度与功耗。

起始版本： 11

相关模块： [OH_NativeXComponent Native XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent)

所在头文件： [native_interface_xcomponent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t min | 期望帧率范围最小值。单位为帧/秒。取值范围：[0, +∞)。需满足 min = min。 |
| int32_t expected | 期望帧率。单位为帧/秒。取值范围：[0, +∞)，且应在[min, max]范围内。 |
