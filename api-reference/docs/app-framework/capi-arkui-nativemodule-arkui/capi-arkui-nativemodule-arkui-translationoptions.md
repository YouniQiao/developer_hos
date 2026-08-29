---
title: "ArkUI_TranslationOptions"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-arkui-translationoptions"
catalog: "harmonyos-references"
content_hash: "ed6b02f3973c"
synced_at: "2026-08-29T18:15:48.099710"
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
| float x | 横向的平移距离，单位为vp。取值原则：正值表示向右平移，负值表示向左平移，0表示不平移。默认值：0 |
| float y | 纵向的平移距离，单位为vp。取值原则：正值表示向下平移，负值表示向上平移，0表示不平移。默认值：0 |
| float z | 深度方向的平移距离，单位为vp。取值原则：正值表示向靠近观察者方向平移，负值表示向远离观察者方向平移，0表示不平移。z轴方向移动时由于观察点位置不变，z的值接近观察点组件会有放大效果，远离则缩小。默认值：0 |
