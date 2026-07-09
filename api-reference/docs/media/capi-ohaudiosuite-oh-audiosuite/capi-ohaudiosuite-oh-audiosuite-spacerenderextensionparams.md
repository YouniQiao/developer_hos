---
title: "OH_AudioSuite_SpaceRenderExtensionParams"
upstream_id: "harmonyos-references/capi-ohaudiosuite-oh-audiosuite-spacerenderextensionparams"
catalog: "harmonyos-references"
content_hash: "e38893a3f86b"
synced_at: "2026-07-09T01:00:12.259706"
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
| float extRadius | 扩展半径。取值范围为[1.0, 5.0]，单位为米。 |
| int32_t extAngle | 扩展角度。取值范围为(0, 360)，单位为度。 |
