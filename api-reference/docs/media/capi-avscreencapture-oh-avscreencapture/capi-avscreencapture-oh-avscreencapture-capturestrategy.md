---
title: "OH_AVScreenCapture_CaptureStrategy"
upstream_id: "harmonyos-references/capi-avscreencapture-oh-avscreencapture-capturestrategy"
catalog: "harmonyos-references"
content_hash: "f95b4f5411bf"
synced_at: "2026-07-28T16:52:01.510819"
---

# OH_AVScreenCapture_CaptureStrategy

```
typedef struct OH_AVScreenCapture_CaptureStrategy OH_AVScreenCapture_CaptureStrategy
```

#### 概述

通过OH_AVScreenCapture_CaptureStrategy设置录屏策略。用于配置录屏行为，如录制内容范围、输出格式、性能参数等。支持配置录屏参数、调整录制质量、管理录制资源等。

录屏策略需在录屏启动之前通过OH_AVScreenCapture_SetCaptureStrategy接口设置，录屏启动后设置将不生效。

支持开发者根据业务需求灵活配置录屏捕获行为，适用于需要定制录屏策略的场景，可提升录屏功能的适用性和可控性。

起始版本： 20

相关模块： [AVScreenCapture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture)

所在头文件： [native_avscreen_capture_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h)
