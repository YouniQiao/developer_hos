---
title: "ArkUI_PickerIndicatorDivider"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-pickerindicatordivider"
catalog: "harmonyos-references"
content_hash: "9c5a2caa365f"
synced_at: "2026-07-28T16:49:47.846752"
---

# ArkUI_PickerIndicatorDivider

```
typedef struct {...} ArkUI_PickerIndicatorDivider
```

#### 概述

用于定义分割线样式指示器的样式参数，支持自定义分割线的线宽、颜色以及与容器侧边的距离，适用于需要美化Picker控件分割线外观的场景。开发者可通过配置该结构体实现个性化分割线效果，提升UI界面的美观度和用户体验。

起始版本： 23

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [picker.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h)

相关示例： [native_type_sample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeType/native_type_sample)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float strokeWidth | 分割线的线宽。 默认值：0 单位：vp 取值范围：[0, 选中项高度的一半（即20vp）]。 小于0时设置失败，大于选中项高度的一半时使用默认值0。不支持百分比类型。 |
| uint32_t dividerColor | 分割线的颜色。 默认值：0（表示全透明颜色，分割线不可见） 格式要求：0xARGB格式，例如**0xFF1122FF**。未设置颜色时使用默认值。 |
| float startMargin | 分割线与Picker容器侧边起始端的距离。 默认值：0 单位：vp 取值范围：startMargin与endMargin之和不得超过Picker容器的宽度。 小于0时设置失败。startMargin与endMargin之和超过容器宽度时使用默认值0。不支持百分比类型。 |
| float endMargin | 分割线与Picker容器侧边结束端的距离。 默认值：0 单位：vp 取值范围：startMargin与endMargin之和不得超过Picker容器的宽度。 小于0时设置失败。startMargin与endMargin之和超过容器宽度时使用默认值0。不支持百分比类型。 |
