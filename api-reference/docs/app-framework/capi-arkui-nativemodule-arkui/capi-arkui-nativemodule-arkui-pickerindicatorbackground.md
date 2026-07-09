---
title: "ArkUI_PickerIndicatorBackground"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-pickerindicatorbackground"
catalog: "harmonyos-references"
content_hash: "91e7babf2b6b"
synced_at: "2026-07-09T00:58:47.867220"
---

# ArkUI_PickerIndicatorBackground

```
typedef struct {...} ArkUI_PickerIndicatorBackground
```

#### 概述

背景样式指示器的样式参数。

起始版本： 23

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h)

相关示例： [native_type_sample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeType/native_type_sample)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t backgroundColor | 选中项背景的颜色。 默认值：0 取值范围：0xARGB格式，例如**0xFF1122FF**。 |
| float topLeftRadius | 左上角圆角半径。 默认值：0 单位：vp 取值范围：取选中项的宽和高之中较小的边长为x，最大不超过x的一半。当取值小于0时，设置背景样式指示器的样式参数失败；当取值大于最大值时，使用最大值。 |
| float topRightRadius | 右上角圆角半径。 默认值：0 单位：vp 取值范围：取选中项的宽和高之中较小的边长为x，最大不超过x的一半。当取值小于0时，设置背景样式指示器的样式参数失败；当取值大于最大值时，使用最大值。 |
| float bottomLeftRadius | 左下角圆角半径。 默认值：0 单位：vp 取值范围：取选中项的宽和高之中较小的边长为x，最大不超过x的一半。当取值小于0时，设置背景样式指示器的样式参数失败；当取值大于最大值时，使用最大值。 |
| float bottomRightRadius | 右下角圆角半径。 默认值：0 单位：vp 取值范围：取选中项的宽和高之中较小的边长为x，最大不超过x的一半。当取值小于0时，设置背景样式指示器的样式参数失败；当取值大于最大值时，使用最大值。 |
