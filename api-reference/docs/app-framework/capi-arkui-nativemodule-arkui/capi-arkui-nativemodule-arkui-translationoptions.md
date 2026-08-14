---
title: "ArkUI_TranslationOptions"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-translationoptions"
catalog: "harmonyos-references"
content_hash: "fb52c71d9916"
synced_at: "2026-08-14T15:53:38.800885"
---

# ArkUI_TranslationOptions

```
typedef struct {...} ArkUI_TranslationOptions
```

#### 概述

定义组件转场时平移效果的配置选项，用于设置组件在转场过程中横向、纵向和深度方向的平移距离。

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [native_type_visual.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-visual-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float x | 横向的平移距离，单位为vp。 |
| float y | 纵向的平移距离，单位为vp。 |
| float z | 深度方向的平移距离，单位为vp。 |
