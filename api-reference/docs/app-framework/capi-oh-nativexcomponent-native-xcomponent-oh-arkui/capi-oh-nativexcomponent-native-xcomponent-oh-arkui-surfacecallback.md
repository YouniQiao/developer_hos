---
title: "OH_ArkUI_SurfaceCallback"
upstream_id: "harmonyos-references/capi-oh-nativexcomponent-native-xcomponent-oh-arkui-surfacecallback"
catalog: "harmonyos-references"
content_hash: "40e970e4a04a"
synced_at: "2026-07-28T16:49:31.934246"
---

# OH_ArkUI_SurfaceCallback

```
typedef struct OH_ArkUI_SurfaceCallback OH_ArkUI_SurfaceCallback
```

#### 概述

定义Surface生命周期回调结构体。当XComponent的Surface创建、销毁或尺寸发生变化时，会触发对应的回调。开发者可在回调中获取Surface指针并执行自定义渲染（如OpenGL ES渲染、Vulkan渲染或视频解码渲染等场景）。

起始版本： 19

相关模块： [OH_NativeXComponent Native XComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativexcomponent-native-xcomponent)

所在头文件： [native_interface_xcomponent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-xcomponent-h)
