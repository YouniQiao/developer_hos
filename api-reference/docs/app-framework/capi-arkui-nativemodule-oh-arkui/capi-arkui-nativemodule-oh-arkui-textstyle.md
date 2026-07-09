---
title: "OH_ArkUI_TextStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-textstyle"
catalog: "harmonyos-references"
content_hash: "d4723284afa1"
synced_at: "2026-07-09T00:58:44.938779"
---

# OH_ArkUI_TextStyle

```
typedef struct OH_ArkUI_TextStyle OH_ArkUI_TextStyle
```

#### 概述

定义文本字体样式。

可以通过[OH_ArkUI_TextStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textstyle_create)接口创建对应的文本字体样式对象。

可以通过[OH_ArkUI_TextStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textstyle_destroy)接口销毁文本字体样式对象。

对象创建后通过OH_ArkUI_TextStyle_SetXXX系列接口设置生效的具体样式，例如通过[OH_ArkUI_TextStyle_SetFontColor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_textstyle_setfontcolor)设置字体颜色。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
