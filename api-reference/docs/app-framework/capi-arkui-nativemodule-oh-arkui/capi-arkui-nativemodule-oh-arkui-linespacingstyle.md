---
title: "OH_ArkUI_LineSpacingStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-linespacingstyle"
catalog: "harmonyos-references"
content_hash: "fad51caa5f6e"
synced_at: "2026-08-29T18:15:50.827965"
---

# OH_ArkUI_LineSpacingStyle

```
typedef struct OH_ArkUI_LineSpacingStyle OH_ArkUI_LineSpacingStyle
```

#### 概述

定义行间距样式，用于设置文本行之间的间距，可提升文本可读性和视觉效果。适用于电子书阅读器、新闻资讯类应用、长文档编辑等需要精细控制多行文本排版行间距的场景。

调用[OH_ArkUI_LineSpacingStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_linespacingstyle_create)接口创建行间距样式对象，行间距默认值为0，行间距是否只在行间生效默认为false。

调用[OH_ArkUI_LineSpacingStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_linespacingstyle_destroy)接口销毁行间距样式对象。

对象创建成功后，调用[OH_ArkUI_LineSpacingStyle_SetLineSpacing](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_linespacingstyle_setlinespacing)接口设置行间距值（取值范围及约束详见该接口说明）。

调用[OH_ArkUI_LineSpacingStyle_SetOnlyBetweenLines](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_linespacingstyle_setonlybetweenlines)接口设置行间距是否只在行间生效（取值规则详见该接口说明）。

起始版本： 26.0.0

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
