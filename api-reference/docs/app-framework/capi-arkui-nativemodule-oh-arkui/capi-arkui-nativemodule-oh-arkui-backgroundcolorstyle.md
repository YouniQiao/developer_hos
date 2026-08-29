---
title: "OH_ArkUI_BackgroundColorStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-backgroundcolorstyle"
catalog: "harmonyos-references"
content_hash: "4d7c9ca87c95"
synced_at: "2026-08-29T18:15:51.075328"
---

# OH_ArkUI_BackgroundColorStyle

```
typedef struct OH_ArkUI_BackgroundColorStyle OH_ArkUI_BackgroundColorStyle
```

#### 概述

定义背景颜色样式，支持自定义背景颜色和圆角半径，适用于为属性字符串设置背景高亮效果，例如搜索结果高亮、重点文本标记、标签式文本展示等场景，可提升文本的视觉层次和可辨识度。

调用[OH_ArkUI_BackgroundColorStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_create)接口创建背景颜色样式对象。

对象创建后，调用[OH_ArkUI_BackgroundColorStyle_SetColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_setcolor)和[OH_ArkUI_BackgroundColorStyle_SetRadius](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_setradius)接口设置背景颜色和圆角半径。

调用[OH_ArkUI_BackgroundColorStyle_GetColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_getcolor)和[OH_ArkUI_BackgroundColorStyle_GetRadius](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_getradius)接口获取背景颜色和圆角半径。

使用完毕后，调用[OH_ArkUI_BackgroundColorStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_backgroundcolorstyle_destroy)接口销毁背景颜色样式对象。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
