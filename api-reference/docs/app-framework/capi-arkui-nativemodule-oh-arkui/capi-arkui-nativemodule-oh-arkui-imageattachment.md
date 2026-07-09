---
title: "OH_ArkUI_ImageAttachment"
upstream_id: "harmonyos-references/capi-arkui-nativemodule-oh-arkui-imageattachment"
catalog: "harmonyos-references"
content_hash: "591ccf8df117"
synced_at: "2026-07-09T00:58:44.868390"
---

# OH_ArkUI_ImageAttachment

```
typedef struct OH_ArkUI_ImageAttachment OH_ArkUI_ImageAttachment
```

#### 概述

定义图片样式对象。

可以通过[OH_ArkUI_ImageAttachment_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_create)接口创建对应的图片样式对象。

可以通过[OH_ArkUI_ImageAttachment_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_destroy)接口销毁图片样式对象。

对象创建后通过OH_ArkUI_ImageAttachment_SetXXX系列接口设置生效的具体样式，例如通过[OH_ArkUI_ImageAttachment_SetPixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h#oh_arkui_imageattachment_setpixelmap)设置图片源。

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

所在头文件： [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h)
