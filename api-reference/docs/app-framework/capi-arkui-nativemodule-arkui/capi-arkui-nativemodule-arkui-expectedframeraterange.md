---
title: "ArkUI_ExpectedFrameRateRange"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-expectedframeraterange"
catalog: "harmonyos-references"
content_hash: "a60bee4b253f"
synced_at: "2026-07-28T16:49:27.767013"
---

# ArkUI_ExpectedFrameRateRange

```
typedef struct {...} ArkUI_ExpectedFrameRateRange
```

#### 概述

设置动画的期望帧率。该结构体通过min、max和expected三个字段定义帧率范围，系统尽可能满足期望帧率。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_animate.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-animate-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t min | 期望的最小帧率，单位为帧/秒（fps）。取值原则：min需小于等于max，且min需小于等于expected。取值需满足min
