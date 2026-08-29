---
title: "OH_ArkUI_TextStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle"
catalog: "harmonyos-references"
content_hash: "13e87286680a"
synced_at: "2026-08-29T18:15:50.508939"
---

# OH_ArkUI_TextStyle

```
typedef struct OH_ArkUI_TextStyle OH_ArkUI_TextStyle
```

#### 概述

定义文本字体样式，用于设置文本的字体颜色、大小、样式等属性，适用于需要自定义文本显示效果的场景。

调用[OH_ArkUI_TextStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textstyle_create)接口创建文本字体样式对象。

调用[OH_ArkUI_TextStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textstyle_destroy)接口销毁文本字体样式对象。销毁后不应再调用OH_ArkUI_TextStyle_SetXXX系列接口。

对象创建成功后，调用OH_ArkUI_TextStyle_SetXXX系列接口设置具体样式；若创建失败则不可调用SetXXX系列接口。例如，调用[OH_ArkUI_TextStyle_SetFontColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textstyle_setfontcolor)设置字体颜色。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
