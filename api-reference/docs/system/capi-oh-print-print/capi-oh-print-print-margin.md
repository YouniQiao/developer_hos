---
title: "Print_Margin"
upstream_id: "harmonyos-references/capi-oh-print-print-margin"
catalog: "harmonyos-references"
content_hash: "c246d48583c7"
synced_at: "2026-08-29T18:16:59.867740"
---

# Print_Margin

```
typedef struct {...} Print_Margin
```

#### 概述

Print_Margin用于表示打印页面的边距信息，支持设置左、上、右、下四个方向的边距，控制可打印内容区域。适用于需要在打印时精确控制内容与纸张边缘距离的场景，通过合理配置边距可以避免内容溢出或被裁剪。

起始版本： 12

相关模块： [OH_Print](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-print)

所在头文件： [ohprint.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohprint-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t leftMargin | 左边距，单位：毫米。取值原则：大于0。 |
| uint32_t topMargin | 上边距，单位：毫米。取值原则：大于0。 |
| uint32_t rightMargin | 右边距，单位：毫米。取值原则：大于0。 |
| uint32_t bottomMargin | 下边距，单位：毫米。取值原则：大于0。 |
