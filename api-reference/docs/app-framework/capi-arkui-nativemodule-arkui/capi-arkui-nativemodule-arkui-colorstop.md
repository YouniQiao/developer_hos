---
title: "ArkUI_ColorStop"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-colorstop"
catalog: "harmonyos-references"
content_hash: "6bf60619cc58"
synced_at: "2026-07-28T16:49:33.213498"
---

# ArkUI_ColorStop

```
typedef struct {...} ArkUI_ColorStop
```

#### 概述

定义渐变色结构，用于配置组件的渐变效果，支持通过颜色数组与位置数组组合定义多种渐变样式。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| const uint32_t* colors | 颜色数组，与stops数组成对对应，每个颜色对应一个渐变位置，数组长度必须与size一致。 |
| float* stops | 位置数组，取值范围为0.0~1.0，表示渐变色的位置偏移，数组长度必须与size一致。 |
| int size | 数组长度，colors和stops数组的实际元素个数。 |
