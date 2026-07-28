---
title: "button.h"
upstream_id: "harmonyos-references/capi-button-h"
catalog: "harmonyos-references"
content_hash: "20b990ed499c"
synced_at: "2026-07-28T16:49:23.656009"
---

# button.h

#### 概述

为NativeNode API提供Button节点类型定义。

引用文件： <arkui/node_attributes/button.h>

库： libace_ndk.z.so

系统能力： SystemCapability.ArkUI.ArkUI.Full

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

相关示例： [NativeTypeSample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeTypeSample)

#### 汇总

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkUI_ButtonType](#arkui_buttontype) | ArkUI_ButtonType | 定义按钮样式枚举值。 |

#### 枚举类型说明

#### [h2]ArkUI_ButtonType

```
enum ArkUI_ButtonType
```
 描述：

定义按钮样式枚举值。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_BUTTON_TYPE_NORMAL = 0 | 普通按钮，默认不带圆角。 |
| ARKUI_BUTTON_TYPE_CAPSULE = 1 | 胶囊型按钮，圆角默认为高度的一半。 |
| ARKUI_BUTTON_TYPE_CIRCLE = 2 | 圆形按钮。 |
| ARKUI_BUTTON_ROUNDED_RECTANGLE = 8 | 圆角矩形按钮。 **起始版本：** 19 |
