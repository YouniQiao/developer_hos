---
title: "rich_editor.h"
upstream_id: "harmonyos-references/capi-rich-editor-h"
catalog: "harmonyos-references"
content_hash: "4ee094d26285"
synced_at: "2026-07-28T16:49:24.851809"
---

# rich_editor.h

#### 概述

定义RichEditor相关的枚举和接口。

引用文件： <arkui/node_attributes/rich_editor.h>

库： libace_ndk.z.so

系统能力： SystemCapability.ArkUI.ArkUI.Full

起始版本： 24

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

相关示例： [native_type_sample](https://gitcode.com/openharmony/applications_app_samples/tree/master/code/DocsSample/ArkUISample/NativeType/native_type_sample)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions) | OH_ArkUI_TextEditorSelectionMenuOptions | 定义文本编辑器的文本选择菜单选项。 |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions) | OH_ArkUI_TextEditorPlaceholderOptions | 定义文本编辑器无输入时的提示文本选项。 |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller) | OH_ArkUI_TextEditorStyledStringController | 定义文本编辑器的属性字符串控制器。 |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle) | OH_ArkUI_TextEditorParagraphStyle | 定义文本编辑器的段落样式。 |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle) | OH_ArkUI_TextEditorTextStyle | 定义文本编辑器的文本样式。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [OH_ArkUI_HapticFeedbackMode](#oh_arkui_hapticfeedbackmode) | OH_ArkUI_HapticFeedbackMode | 震动效果类型枚举。 |
| [OH_ArkUI_TextEditorSpanType](#oh_arkui_texteditorspantype) | OH_ArkUI_TextEditorSpanType | 自定义文本选择菜单span类型枚举。 |
| [OH_ArkUI_TextEditorResponseType](#oh_arkui_texteditorresponsetype) | OH_ArkUI_TextEditorResponseType | 自定义文本选择菜单响应类型枚举。 |
| [OH_ArkUI_TextMenuType](#oh_arkui_textmenutype) | OH_ArkUI_TextMenuType | 文本菜单类型枚举。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions* OH_ArkUI_TextEditorPlaceholderOptions_Create()](#oh_arkui_texteditorplaceholderoptions_create) | 创建一个无输入时的提示文本的选项对象。当该对象不再使用时，请调用[OH_ArkUI_TextEditorPlaceholderOptions_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorplaceholderoptions_destroy)销毁。 |
| [void OH_ArkUI_TextEditorPlaceholderOptions_Destroy(OH_ArkUI_TextEditorPlaceholderOptions* options)](#oh_arkui_texteditorplaceholderoptions_destroy) | 销毁无输入时的提示文本的选项对象。 |
| [OH_ArkUI_TextEditorStyledStringController* OH_ArkUI_TextEditorStyledStringController_Create()](#oh_arkui_texteditorstyledstringcontroller_create) | 为文本编辑器创建一个属性字符串控制器对象。当该对象不再使用时，请调用[OH_ArkUI_TextEditorStyledStringController_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorstyledstringcontroller_destroy)销毁。 |
| [void OH_ArkUI_TextEditorStyledStringController_Destroy(OH_ArkUI_TextEditorStyledStringController* controller)](#oh_arkui_texteditorstyledstringcontroller_destroy) | 销毁属性字符串控制器。 |
| [OH_ArkUI_TextEditorParagraphStyle* OH_ArkUI_TextEditorParagraphStyle_Create()](#oh_arkui_texteditorparagraphstyle_create) | 为文本编辑器创建一个段落样式对象。当该对象不再使用时，请调用[OH_ArkUI_TextEditorParagraphStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorparagraphstyle_destroy)销毁。 |
| [void OH_ArkUI_TextEditorParagraphStyle_Destroy(OH_ArkUI_TextEditorParagraphStyle* style)](#oh_arkui_texteditorparagraphstyle_destroy) | 销毁段落样式对象。 |
| [OH_ArkUI_TextEditorTextStyle* OH_ArkUI_TextEditorTextStyle_Create()](#oh_arkui_texteditortextstyle_create) | 创建一个文本样式对象。当该对象不再使用时，请调用[OH_ArkUI_TextEditorTextStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditortextstyle_destroy)销毁。 |
| [void OH_ArkUI_TextEditorTextStyle_Destroy(OH_ArkUI_TextEditorTextStyle* style)](#oh_arkui_texteditortextstyle_destroy) | 销毁文本样式对象。 |
| [OH_ArkUI_TextEditorSelectionMenuOptions* OH_ArkUI_TextEditorSelectionMenuOptions_Create()](#oh_arkui_texteditorselectionmenuoptions_create) | 创建一个文本编辑器文本选择菜单选项对象。当该对象不再使用时，请调用[OH_ArkUI_TextEditorSelectionMenuOptions_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorselectionmenuoptions_destroy)销毁。 |
| [void OH_ArkUI_TextEditorSelectionMenuOptions_Destroy(OH_ArkUI_TextEditorSelectionMenuOptions* options)](#oh_arkui_texteditorselectionmenuoptions_destroy) | 销毁文本编辑器文本选择菜单选项对象。 |

#### 枚举类型说明

#### [h2]OH_ArkUI_HapticFeedbackMode

```
enum OH_ArkUI_HapticFeedbackMode
```
 描述

震动效果类型枚举。

起始版本： 24

| 枚举项 | 描述 |
| --- | --- |
| OH_ARKUI_HAPTIC_FEEDBACK_MODE_DISABLED = 0 | 无震动效果。 |
| OH_ARKUI_HAPTIC_FEEDBACK_MODE_ENABLED = 1 | 有震动效果。 |
| OH_ARKUI_HAPTIC_FEEDBACK_MODE_AUTO = 2 | 跟随系统的震动效果。 |

#### [h2]OH_ArkUI_TextEditorSpanType

```
enum OH_ArkUI_TextEditorSpanType
```
 描述

自定义文本选择菜单span类型枚举。

起始版本： 24

| 枚举项 | 描述 |
| --- | --- |
| OH_ARKUI_TEXT_EDITOR_SPAN_TYPE_TEXT = 0 | 文本span。 |
| OH_ARKUI_TEXT_EDITOR_SPAN_TYPE_IMAGE = 1 | 图片span。 |
| OH_ARKUI_TEXT_EDITOR_SPAN_TYPE_MIXED = 2 | 混合span。 |
| OH_ARKUI_TEXT_EDITOR_SPAN_TYPE_BUILDER = 3 | 自定义布局span。 |
| OH_ARKUI_TEXT_EDITOR_SPAN_TYPE_DEFAULT = 4 | 默认span。 |

#### [h2]OH_ArkUI_TextEditorResponseType

```
enum OH_ArkUI_TextEditorResponseType
```
 描述

自定义文本选择菜单响应类型枚举。

起始版本： 24

| 枚举项 | 描述 |
| --- | --- |
| OH_ARKUI_TEXT_EDITOR_RESPONSE_TYPE_RIGHT_CLICK = 0 | 通过鼠标右键触发菜单弹出。 |
| OH_ARKUI_TEXT_EDITOR_RESPONSE_TYPE_LONG_PRESS = 1 | 通过长按触发菜单弹出。 |
| OH_ARKUI_TEXT_EDITOR_RESPONSE_TYPE_SELECT = 2 | 通过鼠标选中触发菜单弹出。 |
| OH_ARKUI_TEXT_EDITOR_RESPONSE_TYPE_DEFAULT = 3 | 默认响应类型。 |

#### [h2]OH_ArkUI_TextMenuType

```
enum OH_ArkUI_TextMenuType
```
 描述

文本菜单类型枚举。

起始版本： 24

| 枚举项 | 描述 |
| --- | --- |
| OH_ARKUI_TEXT_EDITOR_SELECTION_MENU = 0 | 文本选择菜单。 |
| OH_ARKUI_TEXT_EDITOR_PREVIEW_MENU = 1 | 预览菜单。 |

#### 函数说明

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_Create()

```
OH_ArkUI_TextEditorPlaceholderOptions* OH_ArkUI_TextEditorPlaceholderOptions_Create()
```
 描述

创建一个无输入时的提示文本的选项对象。当该对象不再使用时，请调用[OH_ArkUI_TextEditorPlaceholderOptions_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorplaceholderoptions_destroy)销毁。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions) | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_Destroy()

```
void OH_ArkUI_TextEditorPlaceholderOptions_Destroy(OH_ArkUI_TextEditorPlaceholderOptions* options)
```
 描述

销毁无输入时的提示文本的选项对象。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_Create()

```
OH_ArkUI_TextEditorStyledStringController* OH_ArkUI_TextEditorStyledStringController_Create()
```
 描述

为文本编辑器创建一个属性字符串控制器对象。当该对象不再使用时，请调用[OH_ArkUI_TextEditorStyledStringController_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorstyledstringcontroller_destroy)销毁。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller) | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_Destroy()

```
void OH_ArkUI_TextEditorStyledStringController_Destroy(OH_ArkUI_TextEditorStyledStringController* controller)
```
 描述

销毁属性字符串控制器。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_Create()

```
OH_ArkUI_TextEditorParagraphStyle* OH_ArkUI_TextEditorParagraphStyle_Create()
```
 描述

为文本编辑器创建一个段落样式对象。当该对象不再使用时，请调用[OH_ArkUI_TextEditorParagraphStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorparagraphstyle_destroy)销毁。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle) | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_Destroy()

```
void OH_ArkUI_TextEditorParagraphStyle_Destroy(OH_ArkUI_TextEditorParagraphStyle* style)
```
 描述

销毁段落样式对象。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_Create()

```
OH_ArkUI_TextEditorTextStyle* OH_ArkUI_TextEditorTextStyle_Create()
```
 描述

创建一个文本样式对象。当该对象不再使用时，请调用[OH_ArkUI_TextEditorTextStyle_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditortextstyle_destroy)销毁。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle) | 指向[OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)对象的指针。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_Destroy()

```
void OH_ArkUI_TextEditorTextStyle_Destroy(OH_ArkUI_TextEditorTextStyle* style)
```
 描述

销毁文本样式对象。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | 指向[OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)对象的指针。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_Create()

```
OH_ArkUI_TextEditorSelectionMenuOptions* OH_ArkUI_TextEditorSelectionMenuOptions_Create()
```
 描述

创建一个文本编辑器文本选择菜单选项对象。当该对象不再使用时，请调用[OH_ArkUI_TextEditorSelectionMenuOptions_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorselectionmenuoptions_destroy)销毁。

起始版本： 24

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions) | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_Destroy()

```
void OH_ArkUI_TextEditorSelectionMenuOptions_Destroy(OH_ArkUI_TextEditorSelectionMenuOptions* options)
```
 描述

销毁文本编辑器文本选择菜单选项对象。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
