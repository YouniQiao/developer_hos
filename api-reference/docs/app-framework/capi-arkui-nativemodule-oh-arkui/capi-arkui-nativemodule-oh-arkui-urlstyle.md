---
title: "OH_ArkUI_UrlStyle"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-urlstyle"
catalog: "harmonyos-references"
content_hash: "afcd01feb42c"
synced_at: "2026-08-29T18:15:50.985023"
---

# OH_ArkUI_UrlStyle

```
typedef struct OH_ArkUI_UrlStyle OH_ArkUI_UrlStyle
```

#### 概述

定义链接样式，用于为属性字符串中的文本设置可点击的URL链接效果，适用于需要在文本内容中嵌入可交互链接的场景，可提升文本的交互性和用户体验。

调用[OH_ArkUI_UrlStyle_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_urlstyle_create)接口创建链接样式对象。

调用[OH_ArkUI_UrlStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_urlstyle_destroy)接口销毁链接样式对象。

创建链接样式对象后，调用[OH_ArkUI_UrlStyle_SetUrl](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_urlstyle_seturl)接口设置链接地址。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
