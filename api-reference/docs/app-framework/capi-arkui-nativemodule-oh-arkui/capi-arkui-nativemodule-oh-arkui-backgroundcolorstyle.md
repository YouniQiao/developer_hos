---
title: "OH_ArkUI_BackgroundColorStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle"
catalog: "harmonyos-references"
content_hash: "73025225518c"
synced_at: "2026-07-09T00:58:45.459089"
---

# OH_ArkUI_BackgroundColorStyle

```
typedef struct OH_ArkUI_BackgroundColorStyle OH_ArkUI_BackgroundColorStyle
```

#### 概述

定义背景颜色样式。

可以通过[OH_ArkUI_BackgroundColorStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_create)接口创建对应的背景颜色样式对象。

可以通过[OH_ArkUI_BackgroundColorStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_destroy)接口销毁背景颜色样式对象。

对象创建后通过[OH_ArkUI_BackgroundColorStyle_SetColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_setcolor)和[OH_ArkUI_BackgroundColorStyle_SetRadius](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_setradius)接口设置背景颜色和圆角。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
