---
title: "OH_NativeXComponent_ExpectedRateRange"
upstream_id: "harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-nativexcomponent-expectedraterange"
catalog: "harmonyos-references"
content_hash: "1053b0be3a7a"
synced_at: "2026-07-09T00:58:41.357811"
---

# OH_NativeXComponent_ExpectedRateRange

```
typedef struct {...} OH_NativeXComponent_ExpectedRateRange
```

#### 概述

定义期望帧率范围。

起始版本： 11

相关模块： [OH_NativeXComponent Native XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent)

所在头文件： [native_interface_xcomponent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t min | 期望帧率范围最小值。单位为帧/秒。 |
| int32_t max | 期望帧率范围最大值。单位为帧/秒。 |
| int32_t expected | 期望帧率。单位为帧/秒。 |
