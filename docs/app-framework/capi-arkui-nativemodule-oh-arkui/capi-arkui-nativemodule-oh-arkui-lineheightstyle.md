---
title: "OH_ArkUI_LineHeightStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineheightstyle"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:49:55.643572"
---

# OH_ArkUI_LineHeightStyle

```
typedef struct OH_ArkUI_LineHeightStyle OH_ArkUI_LineHeightStyle
```

#### 概述

定义行高样式。

可以通过[OH_ArkUI_LineHeightStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_lineheightstyle_create)接口创建对应的行高样式对象。

可以通过[OH_ArkUI_LineHeightStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_lineheightstyle_destroy)接口销毁行高样式对象。

对象创建后可以通过[OH_ArkUI_LineHeightStyle_SetLineHeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_lineheightstyle_setlineheight)接口设置具体的固定行高值。

从API版本26.0.0开始，对象创建后可以通过[OH_ArkUI_LineHeightStyle_SetLineHeightMultiple](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_lineheightstyle_setlineheightmultiple)接口设置具体的行高的倍数值。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
