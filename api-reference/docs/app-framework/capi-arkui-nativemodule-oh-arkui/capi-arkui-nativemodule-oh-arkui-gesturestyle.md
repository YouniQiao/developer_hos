---
title: "OH_ArkUI_GestureStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-gesturestyle"
catalog: "harmonyos-references"
content_hash: "5f401879d396"
synced_at: "2026-07-09T00:58:45.117256"
---

# OH_ArkUI_GestureStyle

```
typedef struct OH_ArkUI_GestureStyle OH_ArkUI_GestureStyle
```

#### 概述

定义事件手势样式。

可以通过[OH_ArkUI_GestureStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_gesturestyle_create)接口创建对应的事件手势样式对象。

可以通过[OH_ArkUI_GestureStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_gesturestyle_destroy)接口销毁事件手势样式对象。

对象创建后通过OH_ArkUI_GestureStyle_RegisterOnXXXCallback系列接口注册具体的事件回调，例如通过[OH_ArkUI_GestureStyle_RegisterOnClickCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_gesturestyle_registeronclickcallback)注册点击事件回调。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
