---
title: "OH_AudioSuite_SpaceRenderExtensionParams"
upstream_id: "harmonyos-references/capi-ohaudiosuite-oh-audiosuite-spacerenderextensionparams"
catalog: "harmonyos-references"
content_hash: "458915338711"
synced_at: "2026-08-29T18:17:22.655194"
---

# OH_AudioSuite_SpaceRenderExtensionParams

```
struct OH_AudioSuite_SpaceRenderExtensionParams {...}
```

#### 概述

定义空间渲染效果节点扩展模式配置参数。

起始版本： 23

相关模块： [OHAudioSuite](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-ohaudiosuite)

所在头文件： [native_audio_suite_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-audio-suite-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float extRadius | 扩展半径，表示声音源的空间扩散范围。取值越大，声音的空间扩散范围越宽广。取值范围为[1.0, 5.0]，单位为米（m）。 |
| int32_t extAngle | 扩展角度，表示声音源在水平面上的扩散角度范围。取值越大，声音的扩散角度越宽。取值范围为(0, 360)，单位为度（°）。 |
