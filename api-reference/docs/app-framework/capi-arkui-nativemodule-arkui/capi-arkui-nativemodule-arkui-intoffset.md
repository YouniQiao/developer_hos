---
title: "ArkUI_IntOffset"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-intoffset"
catalog: "harmonyos-references"
content_hash: "e11bf1067239"
synced_at: "2026-09-24T18:52:36.018759"
---

# ArkUI_IntOffset

```
typedef struct {...} ArkUI_IntOffset
```

#### 概述

偏移量，用于描述当前组件相对于父组件的位置。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [common_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-common-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int32_t x | 水平方向的偏移量，单位为px。x为正数时组件向右偏移，为负数时向左偏移。 |
| int32_t y | 竖直方向的偏移量，单位为px。y为正数时组件向下偏移，为负数时向上偏移。 |
