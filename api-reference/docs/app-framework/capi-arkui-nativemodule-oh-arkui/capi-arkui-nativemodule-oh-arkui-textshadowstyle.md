---
title: "OH_ArkUI_TextShadowStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-textshadowstyle"
catalog: "harmonyos-references"
content_hash: "4dbdc5570b1f"
synced_at: "2026-08-29T18:15:50.686744"
---

# OH_ArkUI_TextShadowStyle

```
typedef struct OH_ArkUI_TextShadowStyle OH_ArkUI_TextShadowStyle
```

#### 概述

定义文本阴影样式，文本阴影样式包含阴影偏移、模糊半径、颜色等属性，用于为文本添加阴影效果，如标题文字突出显示、深色背景下的文字增强等。

调用[OH_ArkUI_TextShadowStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textshadowstyle_create)接口创建文本阴影样式对象。

调用[OH_ArkUI_TextShadowStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textshadowstyle_destroy)接口销毁文本阴影样式对象。

创建文本阴影样式对象后，调用[OH_ArkUI_TextShadowStyle_SetTextShadow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textshadowstyle_settextshadow)接口设置文本阴影的具体样式。

调用[OH_ArkUI_TextShadowStyle_GetTextShadow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textshadowstyle_gettextshadow)接口获取已设置的文本阴影样式。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
