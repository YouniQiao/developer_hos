---
title: "native_type.h"
upstream_id: "harmonyos-references/capi-native-type-h"
catalog: "harmonyos-references"
content_hash: "433733bfa58c"
synced_at: "2026-08-24T15:40:52.342134"
---

# native_type.h

#### 概述

提供NativeModule公共的类型定义。

引用文件： <arkui/native_type.h>

库： libace_ndk.z.so

系统能力： SystemCapability.ArkUI.ArkUI.Full

起始版本： 12

相关模块： [ArkUI_NativeModule](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule)

相关示例： [NativeTypeSample](https://gitcode.com/HarmonyOS_Samples/guide-snippets/tree/master/ArkUISample/NativeTypeSample)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkUI_Node](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node-descriptor) | - | 定义ArkUI Native组件实例对象，供ArkUI_NodeHandle指针在Native接口中标识和传递组件实例。 |
| [ArkUI_ContextCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-contextcallback) | ArkUI_ContextCallback | 事件回调类型，用于定义回调函数及其用户自定义数据。使用该类型的接口触发回调时，会调用callback，并将userData作为参数传入。 |
| [ArkUI_NumberValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-numbervalue) | ArkUI_NumberValue | ArkUI 在 Native 侧使用的数字类型，用于通过统一类型承载浮点、有符号整型和无符号整型数值。 |
| [ArkUI_ColorStop](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-colorstop) | ArkUI_ColorStop | 定义渐变色结构，用于配置组件的渐变效果，支持通过颜色数组与位置数组组合定义多种渐变样式。 |
| [ArkUI_Rect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rect) | ArkUI_Rect | 定义遮罩屏蔽区域的范围结构体。 |
| [ArkUI_IntSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-intsize) | ArkUI_IntSize | 尺寸类型，用于描述组件的宽高。 |
| [ArkUI_IntOffset](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-intoffset) | ArkUI_IntOffset | 偏移量，用于描述当前组件相对于父组件的位置。 |
| [ArkUI_NativeDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog) | - | 提供ArkUI在Native侧的自定义弹窗控制器对象定义。 |
| [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint) | ArkUI_LayoutConstraint | 布局约束，用于组件布局时进行尺寸范围限制。支持设置最小尺寸和最大尺寸约束，约束值为非负浮点数，在组件布局时，系统会根据约束值限定组件的最终尺寸范围，确保布局结果符合约束条件。适用于自定义布局容器时控制子组件的尺寸范围，如瀑布流布局中限制图片卡片的高度、网格布局中限制单元格尺寸，以及需要限制组件尺寸上下限的场景，如图片展示组件限制最大宽度防止拉伸、响应式布局中限制最小尺寸保证可读性。防止组件尺寸超出预期范围，实现更精确的布局控制，提高布局的可预测性和稳定性，增强界面的可控性。 |
| [ArkUI_DrawContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawcontext) | ArkUI_DrawContext | 定义组件绘制上下文类型结构，用于在自定义组件绘制过程中提供绘制上下文信息，可获取用于绘制的Canvas指针和可绘制区域大小。 |
| [ArkUI_Node*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) | ArkUI_NodeHandle | 定义 ArkUI Native 组件实例对象指针，用于在 ArkUI Native 接口中标识和传递组件实例，例如创建、挂载、移除或销毁组件节点。 |
| [ArkUI_NativeDialog*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nativedialog8h) | ArkUI_NativeDialogHandle | 定义ArkUI在Native侧的自定义弹窗控制器对象指针。 |
| [ArkUI_GestureCollectInterceptInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-gesturecollectinterceptinfo) | ArkUI_GestureCollectInterceptInfo | 定义手势收集拦截信息。 |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem) | ArkUI_ListItemSwipeActionItem | 定义ListItemSwipeActionOption方法内Item的配置信息。 |
| [ArkUI_ListItemSwipeActionOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionoption) | ArkUI_ListItemSwipeActionOption | 定义ListItemSwipeActionOption方法的配置信息。 |
| [ArkUI_Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-context) | ArkUI_Context | ArkUI native UI 的上下文实例对象，用于表示组件所在页面的 UIContext。其指针类型为 [ArkUI_ContextHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-context8h)，开发者可通过 [OH_ArkUI_GetContextByNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_getcontextbynode) 获取对应上下文，并将其作为拖拽操作、动画、UI 任务调度等接口的上下文入参。 |
| [ArkUI_Context*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-context8h) | ArkUI_ContextHandle | ArkUI 在 Native 侧的上下文实例对象指针，用于表示组件所在页面的 UIContext。开发者可通过[OH_ArkUI_GetContextByNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h#oh_arkui_getcontextbynode)或[OH_ArkUI_GetContextFromNapiValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-napi-h#oh_arkui_getcontextfromnapivalue)获取该指针，并将其作为 UI 任务调度、动画、焦点控制等接口的上下文入参。 |
| [ArkUI_NodeContent*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-nodecontent8h) | ArkUI_NodeContentHandle | 定义ArkUI_NodeContent在Native侧的实例对象指针，用于在Native接口中引用和传递NodeContent实例。 |
| [ArkUI_CustomProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-customproperty) | ArkUI_CustomProperty | 定义自定义属性的ArkUI_CustomProperty结构体信息，用于表示组件的自定义属性。通过相关接口，可以为ArkUI组件添加、移除、获取自定义属性，并获取自定义属性的字符串值。 |
| [ArkUI_HostWindowInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-hostwindowinfo) | ArkUI_HostWindowInfo | 定义窗口属性的HostWindowInfo类信息。 |
| [ArkUI_ActiveChildrenInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo) | ArkUI_ActiveChildrenInfo | 定义ArkUI_ActiveChildrenInfo结构体，用于保存内部活跃状态为true的FrameNode子节点信息，支持查询子节点数量和按下标获取子节点。该结构体实例由OH_ArkUI_NodeUtils_GetActiveChildrenInfo生成，使用完毕后必须调用OH_ArkUI_ActiveChildrenInfo_Destroy销毁。 |
| [ArkUI_CrossLanguageOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-crosslanguageoption) | ArkUI_CrossLanguageOption | 定义跨语言配置项，用于配置目标节点的跨语言访问能力，例如是否允许跨语言修改属性；从API version 26.0.0开始，还可配置节点树跨语言操作状态。 |
| [ArkUI_AccessibilityState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilitystate) | ArkUI_AccessibilityState | 定义组件无障碍状态。 |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue) | ArkUI_AccessibilityValue | 定义组件无障碍信息值。 |
| [ArkUI_SystemFontStyleEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-systemfontstyleevent) | ArkUI_SystemFontStyleEvent | 系统字体样式变更事件定义，用于在系统字体大小或字体粗细发生变化时，向已注册的系统字体样式变更回调传递事件信息。 |
| [ArkUI_SelectionOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-selectionoptions) | ArkUI_SelectionOptions | 定义ArkUI中选择操作的配置选项，适用于应用内需要进行选择交互的场景，为开发者提供选择行为的定制能力。 |
| [ArkUI_ContentTransitionEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-contenttransitioneffect) | ArkUI_ContentTransitionEffect | 内容过渡效果。 |
| [ArkUI_SelectedDragPreviewStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselecteddragpreviewstyle) | ArkUI_SelectedDragPreviewStyle | 定义选中状态下文本拖拽预览样式，适用于需要在文本拖拽过程中展示选中状态预览效果的场景，可提升用户的拖拽交互体验。 |
| [OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions) | OH_ArkUI_LinearGradientOptions | 定义线性渐变效果选项，用于描述UI组件的线性颜色渐变配置，支持设置渐变方向、角度和颜色配置，帮助开发者实现灵活的线性渐变效果，提升UI视觉呈现能力，适用于需要为组件应用线性渐变样式的场景 |
| [OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions) | OH_ArkUI_RadialGradientOptions | 定义径向渐变选项，适用于UI组件中实现径向渐变效果的场景，可帮助开发者丰富界面的视觉层次。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkUI_CopyOptions](#arkui_copyoptions) | ArkUI_CopyOptions | 定义文本复制粘贴模式枚举值。 |
| [ArkUI_AccessibilityCheckedState](#arkui_accessibilitycheckedstate) | ArkUI_AccessibilityCheckedState | 定义无障碍复选框状态类型枚举值。 |
| [ArkUI_AccessibilityActionType](#arkui_accessibilityactiontype) | ArkUI_AccessibilityActionType | 定义无障碍操作类型。 |
| [ArkUI_BorderStyle](#arkui_borderstyle) | ArkUI_BorderStyle | 边框线条样式枚举值。 |
| [ArkUI_AccessibilityMode](#arkui_accessibilitymode) | ArkUI_AccessibilityMode | 定义无障碍辅助服务模式。 |
| [ArkUI_AdaptiveColor](#arkui_adaptivecolor) | ArkUI_AdaptiveColor | 定义取色模式。 |
| [ArkUI_ColorMode](#arkui_colormode) | ArkUI_ColorMode | 定义深浅色模式。 |
| [ArkUI_SystemColorMode](#arkui_systemcolormode) | ArkUI_SystemColorMode | 定义系统深浅色模式。 |
| [ArkUI_LengthMetricUnit](#arkui_lengthmetricunit) | ArkUI_LengthMetricUnit | 定义组件的单位模式。 |
| [ArkUI_ListItemSwipeActionState](#arkui_listitemswipeactionstate) | ArkUI_ListItemSwipeActionState | 定义[Listitem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem#listitem10)组件[swipeAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem#swipeaction9)方法的显隐模式。 |
| [ArkUI_ListItemSwipeEdgeEffect](#arkui_listitemswipeedgeeffect) | ArkUI_ListItemSwipeEdgeEffect | 定义[Listitem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem#listitem10)组件[swipeAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem#swipeaction9)方法的滚动模式。 |
| [ArkUI_ListItemSwipeActionDirection](#arkui_listitemswipeactiondirection) | ArkUI_ListItemSwipeActionDirection | ListItem划出菜单的展开方向。 |
| [ArkUI_SafeAreaType](#arkui_safeareatype) | ArkUI_SafeAreaType | 定义扩展安全区域的枚举值。 |
| [ArkUI_KeyboardAvoidMode](#arkui_keyboardavoidmode) | ArkUI_KeyboardAvoidMode | 键盘避让模式。 |
| [ArkUI_HoverModeAreaType](#arkui_hovermodeareatype) | ArkUI_HoverModeAreaType | 悬停态显示区域。 |
| [ArkUI_ExpandMode](#arkui_expandmode) | ArkUI_ExpandMode | 定义子节点展开模式枚举值。 |
| [ArkUI_FocusWrapMode](#arkui_focuswrapmode) | ArkUI_FocusWrapMode | 组件走焦换行规则。 |
| [ArkUI_ItemFillPolicy](#arkui_itemfillpolicy) | ArkUI_ItemFillPolicy | 为不同响应式断点规格指定列数。 |
| [ArkUI_EdgeDirection](#arkui_edgedirection) | ArkUI_EdgeDirection | 定义矩形边方向。 |
| [ArkUI_CornerDirection](#arkui_cornerdirection) | ArkUI_CornerDirection | 定义角度方向。 |
| [ArkUI_MenuPolicy](#arkui_menupolicy) | ArkUI_MenuPolicy | 菜单弹出策略。 |
| [ArkUI_RenderStrategy](#arkui_renderstrategy) | ArkUI_RenderStrategy | 定义组件绘制圆角的模式。 |
| [OH_ArkUI_CrossLanguageOperatingStatus](#oh_arkui_crosslanguageoperatingstatus) | OH_ArkUI_CrossLanguageOperatingStatus | 跨语言配置项的节点树操作状态。 |
| [OH_ArkUI_NodeMountPolicy](#oh_arkui_nodemountpolicy) | OH_ArkUI_NodeMountPolicy | 子节点挂载策略类型枚举。 |

#### [h2]函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [ArkUI_LayoutConstraint* OH_ArkUI_LayoutConstraint_Create()](#oh_arkui_layoutconstraint_create) | - | 创建布局约束。 |
| [ArkUI_LayoutConstraint* OH_ArkUI_LayoutConstraint_Copy(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_copy) | - | 布局约束深拷贝。 |
| [void* OH_ArkUI_LayoutConstraint_Dispose(ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_dispose) | - | 销毁布局约束指针。 |
| [int32_t OH_ArkUI_LayoutConstraint_GetMaxWidth(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getmaxwidth) | - | 通过布局约束获取最大宽度，单位为px。 |
| [int32_t OH_ArkUI_LayoutConstraint_GetMinWidth(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getminwidth) | - | 通过布局约束获取最小宽度，单位为px。 |
| [int32_t OH_ArkUI_LayoutConstraint_GetMaxHeight(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getmaxheight) | - | 通过布局约束获取最大高度，单位为px。 |
| [int32_t OH_ArkUI_LayoutConstraint_GetMinHeight(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getminheight) | - | 通过布局约束获取最小高度，单位为px。 |
| [int32_t OH_ArkUI_LayoutConstraint_GetPercentReferenceWidth(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getpercentreferencewidth) | - | 通过布局约束获取宽度百分比基准。 |
| [int32_t OH_ArkUI_LayoutConstraint_GetPercentReferenceHeight(const ArkUI_LayoutConstraint* Constraint)](#oh_arkui_layoutconstraint_getpercentreferenceheight) | - | 通过布局约束获取高度百分比基准。 |
| [void OH_ArkUI_LayoutConstraint_SetMaxWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setmaxwidth) | - | 设置最大宽度。 |
| [void OH_ArkUI_LayoutConstraint_SetMinWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setminwidth) | - | 设置最小宽度。 |
| [void OH_ArkUI_LayoutConstraint_SetMaxHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setmaxheight) | - | 设置最大高度。 |
| [void OH_ArkUI_LayoutConstraint_SetMinHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setminheight) | - | 设置最小高度。 |
| [void OH_ArkUI_LayoutConstraint_SetPercentReferenceWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setpercentreferencewidth) | - | 设置宽度百分比基准。 |
| [void OH_ArkUI_LayoutConstraint_SetPercentReferenceHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)](#oh_arkui_layoutconstraint_setpercentreferenceheight) | - | 设置高度百分比基准。 |
| [void* OH_ArkUI_DrawContext_GetCanvas(ArkUI_DrawContext* context)](#oh_arkui_drawcontext_getcanvas) | - | 获取绘制canvas指针，可以转换为图形库的OH_Drawing_Canvas指针进行绘制。 |
| [ArkUI_IntSize OH_ArkUI_DrawContext_GetSize(ArkUI_DrawContext* context)](#oh_arkui_drawcontext_getsize) | - | 获取可绘制区域大小。 |
| [void OH_ArkUI_SwiperDigitIndicator_SetFontWeight(ArkUI_SwiperDigitIndicator *indicator, ArkUI_FontWeight fontWeight)](#oh_arkui_swiperdigitindicator_setfontweight) | - | 设置Swiper组件数字导航指示器字体粗细属性。 |
| [ArkUI_FontWeight OH_ArkUI_SwiperDigitIndicator_GetFontWeight(ArkUI_SwiperDigitIndicator* indicator)](#oh_arkui_swiperdigitindicator_getfontweight) | - | 获取Swiper组件数字导航指示器字体粗细属性。 |
| [void OH_ArkUI_SwiperDigitIndicator_SetSelectedFontWeight(ArkUI_SwiperDigitIndicator *indicator, ArkUI_FontWeight selectedFontWeight)](#oh_arkui_swiperdigitindicator_setselectedfontweight) | - | 设置被选中Swiper组件数字导航指示器字体粗细属性。 |
| [ArkUI_FontWeight OH_ArkUI_SwiperDigitIndicator_GetSelectedFontWeight(ArkUI_SwiperDigitIndicator* indicator)](#oh_arkui_swiperdigitindicator_getselectedfontweight) | - | 获取被选中Swiper组件数字导航指示器字体粗细属性。 |
| [ArkUI_ListItemSwipeActionItem* OH_ArkUI_ListItemSwipeActionItem_Create()](#oh_arkui_listitemswipeactionitem_create) | - | 创建ListItemSwipeActionItem接口设置的配置项。 |
| [void OH_ArkUI_ListItemSwipeActionItem_Dispose(ArkUI_ListItemSwipeActionItem* item)](#oh_arkui_listitemswipeactionitem_dispose) | - | 销毁ListItemSwipeActionItem实例。 |
| [void OH_ArkUI_ListItemSwipeActionItem_SetContent(ArkUI_ListItemSwipeActionItem* item, ArkUI_NodeHandle node)](#oh_arkui_listitemswipeactionitem_setcontent) | - | 设置ListItemSwipeActionItem的布局内容。 |
| [void OH_ArkUI_ListItemSwipeActionItem_SetActionAreaDistance(ArkUI_ListItemSwipeActionItem* item, float distance)](#oh_arkui_listitemswipeactionitem_setactionareadistance) | - | 设置组件长距离滑动删除距离阈值。 |
| [float OH_ArkUI_ListItemSwipeActionItem_GetActionAreaDistance(ArkUI_ListItemSwipeActionItem* item)](#oh_arkui_listitemswipeactionitem_getactionareadistance) | - | 获取组件长距离滑动删除距离阈值。 |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionArea(ArkUI_ListItemSwipeActionItem* item, void (*callback)())](#oh_arkui_listitemswipeactionitem_setonenteractionarea) | - | 设置滑动条目进入删除区域时调用的事件。 |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionAreaWithUserData (ArkUI_ListItemSwipeActionItem* item,void* userData, void (*callback)(void* userData))](#oh_arkui_listitemswipeactionitem_setonenteractionareawithuserdata) | - | 设置滑动条目进入删除区域时调用的事件，回调事件会传入用户自定义数据。 |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnAction(ArkUI_ListItemSwipeActionItem* item, void (*callback)())](#oh_arkui_listitemswipeactionitem_setonaction) | - | 设置组件进入长距删除区后删除ListItem时调用的事件。 |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnActionWithUserData(ArkUI_ListItemSwipeActionItem* item,void* userData, void (*callback)(void* userData))](#oh_arkui_listitemswipeactionitem_setonactionwithuserdata) | - | 设置组件进入长距删除区后删除ListItem时调用的事件，回调事件会传入用户自定义数据。 |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionArea(ArkUI_ListItemSwipeActionItem* item, void (*callback)())](#oh_arkui_listitemswipeactionitem_setonexitactionarea) | - | 设置滑动条目退出删除区域时调用的事件。 |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionAreaWithUserData (ArkUI_ListItemSwipeActionItem* item,void* userData, void (*callback)(void* userData))](#oh_arkui_listitemswipeactionitem_setonexitactionareawithuserdata) | - | 设置滑动条目退出删除区域时调用的事件，回调事件会传入用户自定义数据。 |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnStateChange (ArkUI_ListItemSwipeActionItem* item,void (*callback)(ArkUI_ListItemSwipeActionState swipeActionState))](#oh_arkui_listitemswipeactionitem_setonstatechange) | - | 设置列表项滑动状态变化时候触发的事件。 |
| [void OH_ArkUI_ListItemSwipeActionItem_SetOnStateChangeWithUserData (ArkUI_ListItemSwipeActionItem* item,void* userData, void (*callback)(ArkUI_ListItemSwipeActionState swipeActionState, void* userData))](#oh_arkui_listitemswipeactionitem_setonstatechangewithuserdata) | - | 设置列表项滑动状态变化时候触发的事件，回调事件会传入用户自定义数据。 |
| [ArkUI_ListItemSwipeActionOption* OH_ArkUI_ListItemSwipeActionOption_Create()](#oh_arkui_listitemswipeactionoption_create) | - | 创建ListItemSwipeActionOption接口设置的配置项。 |
| [void OH_ArkUI_ListItemSwipeActionOption_Dispose(ArkUI_ListItemSwipeActionOption* option)](#oh_arkui_listitemswipeactionoption_dispose) | - | 销毁ListItemSwipeActionOption实例。 |
| [void OH_ArkUI_ListItemSwipeActionOption_SetStart(ArkUI_ListItemSwipeActionOption* option, ArkUI_ListItemSwipeActionItem* item)](#oh_arkui_listitemswipeactionoption_setstart) | - | 设置ListItemSwipeActionItem的左侧（垂直布局）或上方（横向布局）布局内容。 |
| [void OH_ArkUI_ListItemSwipeActionOption_SetEnd(ArkUI_ListItemSwipeActionOption* option, ArkUI_ListItemSwipeActionItem* item)](#oh_arkui_listitemswipeactionoption_setend) | - | 设置ListItemSwipeActionItem的右侧（垂直布局）或下方（横向布局）布局内容。 |
| [void OH_ArkUI_ListItemSwipeActionOption_SetEdgeEffect(ArkUI_ListItemSwipeActionOption* option, ArkUI_ListItemSwipeEdgeEffect edgeEffect)](#oh_arkui_listitemswipeactionoption_setedgeeffect) | - | 设置边缘滑动效果。 |
| [int32_t OH_ArkUI_ListItemSwipeActionOption_GetEdgeEffect(ArkUI_ListItemSwipeActionOption* option)](#oh_arkui_listitemswipeactionoption_getedgeeffect) | - | 获取边缘滑动效果。 |
| [void OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChange(ArkUI_ListItemSwipeActionOption* option, void (*callback)(float offset))](#oh_arkui_listitemswipeactionoption_setonoffsetchange) | - | 滑动操作偏移量更改时调用的事件。 |
| [void OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChangeWithUserData (ArkUI_ListItemSwipeActionOption* option, void* userData, void (*callback)(float offset, void* userData))](#oh_arkui_listitemswipeactionoption_setonoffsetchangewithuserdata) | - | 滑动操作偏移量更改时调用的事件，回调事件会传入用户自定义数据。 |
| [int32_t OH_ArkUI_ListItemSwipeAction_Expand(ArkUI_NodeHandle node, ArkUI_ListItemSwipeActionDirection direction)](#oh_arkui_listitemswipeaction_expand) | - | 展开指定ListItem的划出菜单。 |
| [int32_t OH_ArkUI_ListItemSwipeAction_Collapse(ArkUI_NodeHandle node)](#oh_arkui_listitemswipeaction_collapse) | - | 收起指定ListItem的划出菜单。 |
| [ArkUI_AccessibilityState* OH_ArkUI_AccessibilityState_Create(void)](#oh_arkui_accessibilitystate_create) | - | 创建无障碍状态。 |
| [void OH_ArkUI_AccessibilityState_Dispose(ArkUI_AccessibilityState* state)](#oh_arkui_accessibilitystate_dispose) | - | 销毁无障碍状态指针。 |
| [void OH_ArkUI_AccessibilityState_SetDisabled(ArkUI_AccessibilityState* state, int32_t isDisabled)](#oh_arkui_accessibilitystate_setdisabled) | - | 设置无障碍状态是否禁用。 |
| [int32_t OH_ArkUI_AccessibilityState_IsDisabled(ArkUI_AccessibilityState* state)](#oh_arkui_accessibilitystate_isdisabled) | - | 获取无障碍状态是否禁用。 |
| [void OH_ArkUI_AccessibilityState_SetSelected(ArkUI_AccessibilityState* state, int32_t isSelected)](#oh_arkui_accessibilitystate_setselected) | - | 设置无障碍状态是否选中。 |
| [int32_t OH_ArkUI_AccessibilityState_IsSelected(ArkUI_AccessibilityState* state)](#oh_arkui_accessibilitystate_isselected) | - | 获取无障碍状态是否选中。 |
| [void OH_ArkUI_AccessibilityState_SetCheckedState(ArkUI_AccessibilityState* state, int32_t checkedState)](#oh_arkui_accessibilitystate_setcheckedstate) | - | 设置无障碍状态复选框状态。 |
| [int32_t OH_ArkUI_AccessibilityState_GetCheckedState(ArkUI_AccessibilityState* state)](#oh_arkui_accessibilitystate_getcheckedstate) | - | 获取无障碍状态复选框状态。 |
| [ArkUI_AccessibilityValue* OH_ArkUI_AccessibilityValue_Create(void)](#oh_arkui_accessibilityvalue_create) | - | 创建无障碍信息。 |
| [void OH_ArkUI_AccessibilityValue_Dispose(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_dispose) | - | 销毁无障碍信息指针。 |
| [void OH_ArkUI_AccessibilityValue_SetMin(ArkUI_AccessibilityValue* value, int32_t min)](#oh_arkui_accessibilityvalue_setmin) | - | 设置无障碍最小值信息。 |
| [int32_t OH_ArkUI_AccessibilityValue_GetMin(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getmin) | - | 获取无障碍最小值信息。 |
| [void OH_ArkUI_AccessibilityValue_SetMax(ArkUI_AccessibilityValue* value, int32_t max)](#oh_arkui_accessibilityvalue_setmax) | - | 设置无障碍最大值信息。 |
| [int32_t OH_ArkUI_AccessibilityValue_GetMax(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getmax) | - | 获取无障碍最大值信息。 |
| [void OH_ArkUI_AccessibilityValue_SetCurrent(ArkUI_AccessibilityValue* value, int32_t current)](#oh_arkui_accessibilityvalue_setcurrent) | - | 设置无障碍当前值信息。 |
| [int32_t OH_ArkUI_AccessibilityValue_GetCurrent(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getcurrent) | - | 获取无障碍当前值信息。 |
| [void OH_ArkUI_AccessibilityValue_SetRangeMin(ArkUI_AccessibilityValue* value, int32_t rangeMin)](#oh_arkui_accessibilityvalue_setrangemin) | - | 设置范围组件的无障碍最小值信息。 |
| [int32_t OH_ArkUI_AccessibilityValue_GetRangeMin(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getrangemin) | - | 获取范围组件的无障碍最小值信息。 |
| [void OH_ArkUI_AccessibilityValue_SetRangeMax(ArkUI_AccessibilityValue* value, int32_t rangeMax)](#oh_arkui_accessibilityvalue_setrangemax) | - | 设置范围组件的无障碍最大值信息。 |
| [int32_t OH_ArkUI_AccessibilityValue_GetRangeMax(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getrangemax) | - | 获取范围组件的无障碍最大值信息。 |
| [void OH_ArkUI_AccessibilityValue_SetRangeCurrent(ArkUI_AccessibilityValue* value, int32_t rangeCurrent)](#oh_arkui_accessibilityvalue_setrangecurrent) | - | 用于设置范围组件的无障碍当前值信息。 |
| [int32_t OH_ArkUI_AccessibilityValue_GetRangeCurrent(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_getrangecurrent) | - | 用于获取范围组件的无障碍当前值信息。 |
| [void OH_ArkUI_AccessibilityValue_SetText(ArkUI_AccessibilityValue* value, const char* text)](#oh_arkui_accessibilityvalue_settext) | - | 设置无障碍文本描述信息。 |
| [const char* OH_ArkUI_AccessibilityValue_GetText(ArkUI_AccessibilityValue* value)](#oh_arkui_accessibilityvalue_gettext) | - | 获取无障碍文本描述信息。 |
| [void OH_ArkUI_CustomProperty_Destroy(ArkUI_CustomProperty* handle)](#oh_arkui_customproperty_destroy) | - | 销毁CustomProperty实例。 |
| [const char* OH_ArkUI_CustomProperty_GetStringValue(ArkUI_CustomProperty* handle)](#oh_arkui_customproperty_getstringvalue) | - | 获取自定义属性value信息。 |
| [const char* OH_ArkUI_HostWindowInfo_GetName(ArkUI_HostWindowInfo* info)](#oh_arkui_hostwindowinfo_getname) | - | 获取HostWindowInfo对象中的窗口名称。 |
| [void OH_ArkUI_HostWindowInfo_Destroy(ArkUI_HostWindowInfo* info)](#oh_arkui_hostwindowinfo_destroy) | - | 销毁HostWindowInfo对象。 |
| [void OH_ArkUI_ActiveChildrenInfo_Destroy(ArkUI_ActiveChildrenInfo* handle)](#oh_arkui_activechildreninfo_destroy) | - | 销毁ArkUI_ActiveChildrenInfo实例，释放获取活跃子节点信息时分配的资源。 |
| [ArkUI_NodeHandle OH_ArkUI_ActiveChildrenInfo_GetNodeByIndex(ArkUI_ActiveChildrenInfo* handle, int32_t index)](#oh_arkui_activechildreninfo_getnodebyindex) | - | 获取ArkUI_ActiveChildrenInfo结构体中下标为index的子节点，适用于按下标遍历活跃子节点。 |
| [int32_t OH_ArkUI_ActiveChildrenInfo_GetCount(ArkUI_ActiveChildrenInfo* handle)](#oh_arkui_activechildreninfo_getcount) | - | 获取ArkUI_ActiveChildrenInfo结构体内的子节点数量，适用于遍历活跃子节点前确定数量。 |
| [ArkUI_CrossLanguageOption* OH_ArkUI_CrossLanguageOption_Create(void)](#oh_arkui_crosslanguageoption_create) | - | 创建跨语言配置项实例。 |
| [void OH_ArkUI_CrossLanguageOption_Destroy(ArkUI_CrossLanguageOption* option)](#oh_arkui_crosslanguageoption_destroy) | - | 销毁跨语言配置项实例。 |
| [void OH_ArkUI_CrossLanguageOption_SetAttributeSettingStatus(ArkUI_CrossLanguageOption* option, bool enabled)](#oh_arkui_crosslanguageoption_setattributesettingstatus) | - | 设置配置项中是否允许跨语言修改属性。 |
| [bool OH_ArkUI_CrossLanguageOption_GetAttributeSettingStatus(ArkUI_CrossLanguageOption* option)](#oh_arkui_crosslanguageoption_getattributesettingstatus) | - | 获取配置项中是否允许跨语言修改属性。 |
| [void OH_ArkUI_CrossLanguageOption_SetTreeOperatingStatus(ArkUI_CrossLanguageOption* option, OH_ArkUI_CrossLanguageOperatingStatus status)](#oh_arkui_crosslanguageoption_settreeoperatingstatus) | - | 设置跨语言配置项的节点树操作状态。 |
| [OH_ArkUI_CrossLanguageOperatingStatus OH_ArkUI_CrossLanguageOption_GetTreeOperatingStatus(ArkUI_CrossLanguageOption* option)](#oh_arkui_crosslanguageoption_gettreeoperatingstatus) | - | 获取跨语言配置项的节点树操作状态。 |
| [ArkUI_ContentTransitionEffect* OH_ArkUI_ContentTransitionEffect_Create(int32_t type)](#oh_arkui_contenttransitioneffect_create) | - | 创建ContentTransitionEffect属性对象。 |
| [ArkUI_SelectionOptions* OH_ArkUI_SelectionOptions_Create()](#oh_arkui_selectionoptions_create) | - | 创建选择选项。 |
| [void OH_ArkUI_SelectionOptions_Dispose(ArkUI_SelectionOptions* options)](#oh_arkui_selectionoptions_dispose) | - | 释放选择选项对象。 |
| [void OH_ArkUI_SelectionOptions_SetMenuPolicy(ArkUI_SelectionOptions* options, ArkUI_MenuPolicy menuPolicy)](#oh_arkui_selectionoptions_setmenupolicy) | - | 设置选择选项的菜单弹出策略。 |
| [ArkUI_MenuPolicy OH_ArkUI_SelectionOptions_GetMenuPolicy(ArkUI_SelectionOptions* options)](#oh_arkui_selectionoptions_getmenupolicy) | - | 获取选择选项的菜单弹出策略。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetContent(ArkUI_TextMenuItem* item, const char* content)](#oh_arkui_textmenuitem_setcontent) | - | 设置文本菜单项标题。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetContent(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_textmenuitem_getcontent) | - | 获取文本菜单项标题。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetIcon(ArkUI_TextMenuItem* item, const char* icon)](#oh_arkui_textmenuitem_seticon) | - | 设置文本菜单项图标路径。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetIcon(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_textmenuitem_geticon) | - | 获取文本菜单项图标路径。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetLabelInfo(ArkUI_TextMenuItem* item, const char* labelInfo)](#oh_arkui_textmenuitem_setlabelinfo) | - | 设置文本菜单项快捷键提示，例如“复制”菜单项的快捷键提示可以设置为“Ctrl+C”。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetLabelInfo(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_textmenuitem_getlabelinfo) | - | 获取文本菜单项快捷键提示，例如“复制”菜单项的快捷键提示一般为“Ctrl+C”。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetId(ArkUI_TextMenuItem* item, int32_t id)](#oh_arkui_textmenuitem_setid) | - | 设置文本菜单项id。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetId(const ArkUI_TextMenuItem* item, int32_t* id)](#oh_arkui_textmenuitem_getid) | - | 获取文本菜单项id。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_GetSize(ArkUI_TextMenuItemArray* items, int32_t* size)](#oh_arkui_textmenuitemarray_getsize) | - | 获取文本菜单项数组大小。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_GetItem(ArkUI_TextMenuItemArray* items, int32_t index, ArkUI_TextMenuItem** item)](#oh_arkui_textmenuitemarray_getitem) | - | 获取文本菜单项数组中指定索引位置的文本菜单项。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Insert(ArkUI_TextMenuItemArray* items, ArkUI_TextMenuItem* item, int32_t index)](#oh_arkui_textmenuitemarray_insert) | - | 在文本菜单项数组中指定索引位置插入一个文本菜单项。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Erase(ArkUI_TextMenuItemArray* items, int32_t index)](#oh_arkui_textmenuitemarray_erase) | - | 删除文本菜单项数组中指定索引位置的文本菜单项。 |
| [ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Clear(ArkUI_TextMenuItemArray* items)](#oh_arkui_textmenuitemarray_clear) | - | 清除文本菜单项数组中所有的文本菜单项。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnCreateMenuCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextCreateMenuCallback cb)](#oh_arkui_texteditmenuoptions_registeroncreatemenucallback) | - | 注册文本菜单创建事件回调函数。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnPrepareMenuCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextPrepareMenuCallback cb)](#oh_arkui_texteditmenuoptions_registeronpreparemenucallback) | - | 注册文本菜单准备事件回调函数。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnMenuItemClickCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextMenuItemClickCallback cb)](#oh_arkui_texteditmenuoptions_registeronmenuitemclickcallback) | - | 注册文本菜单项点击事件回调函数。 |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetSpanType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextSpanType textSpanType)](#oh_arkui_textselectionmenuoptions_setspantype) | - | 设置自定义文本选择菜单的文本识别类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetSpanType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextSpanType* spanType)](#oh_arkui_textselectionmenuoptions_getspantype) | - | 获取自定义文本选择菜单的文本识别类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetContentNode(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_NodeHandle node)](#oh_arkui_textselectionmenuoptions_setcontentnode) | - | 设置自定义文本选择菜单的内容节点。 |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetContentNode(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_NodeHandle* node)](#oh_arkui_textselectionmenuoptions_getcontentnode) | - | 获取自定义文本选择菜单的内容节点。 |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetResponseType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextResponseType responseType)](#oh_arkui_textselectionmenuoptions_setresponsetype) | - | 设置自定义文本选择菜单的响应类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetResponseType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextResponseType* responseType)](#oh_arkui_textselectionmenuoptions_getresponsetype) | - | 获取自定义文本选择菜单的响应类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuShowCallback(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, void* userData, void (*callback)(int32_t start, int32_t end, void* userData))](#oh_arkui_textselectionmenuoptions_registeronmenushowcallback) | - | 注册自定义文本选择菜单显示事件回调。 |
| [ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuHideCallback(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, void* userData, void (*callback)(int32_t start, int32_t end, void* userData))](#oh_arkui_textselectionmenuoptions_registeronmenuhidecallback) | - | 注册自定义文本选择菜单隐藏事件回调。 |
| [ArkUI_ErrorCode OH_ArkUI_PickerIndicatorStyle_ConfigureBackground(ArkUI_PickerIndicatorStyle* style, ArkUI_PickerIndicatorBackground* background)](#oh_arkui_pickerindicatorstyle_configurebackground) | - | 设置背景样式参数，此接口仅当选择器选中项样式枚举类型为[ARKUI_PICKER_INDICATOR_BACKGROUND](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h#arkui_pickerindicatortype)时生效。 |
| [ArkUI_ErrorCode OH_ArkUI_PickerIndicatorStyle_ConfigureDivider(ArkUI_PickerIndicatorStyle* style, ArkUI_PickerIndicatorDivider* divider)](#oh_arkui_pickerindicatorstyle_configuredivider) | - | 设置分割线样式参数，此接口仅当选择器选中项样式枚举类型为[ARKUI_PICKER_INDICATOR_DIVIDER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h#arkui_pickerindicatortype)时生效。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetTextDecorationType(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationType type)](#oh_arkui_decorationstyleoptions_settextdecorationtype) | - | 设置装饰线样式的装饰类型。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetTextDecorationType(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationType* type)](#oh_arkui_decorationstyleoptions_gettextdecorationtype) | - | 获取装饰线样式的装饰类型。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetColor(OH_ArkUI_DecorationStyleOptions* options, uint32_t color)](#oh_arkui_decorationstyleoptions_setcolor) | - | 设置装饰线的颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetColor(OH_ArkUI_DecorationStyleOptions* options, uint32_t* color)](#oh_arkui_decorationstyleoptions_getcolor) | - | 获取装饰线的颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetTextDecorationStyle(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationStyle style)](#oh_arkui_decorationstyleoptions_settextdecorationstyle) | - | 设置装饰线的样式。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetTextDecorationStyle(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationStyle* style)](#oh_arkui_decorationstyleoptions_gettextdecorationstyle) | - | 获取装饰线的样式。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetThicknessScale(OH_ArkUI_DecorationStyleOptions* options, float thicknessScale)](#oh_arkui_decorationstyleoptions_setthicknessscale) | - | 设置装饰线的粗细缩放比例。 |
| [ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetThicknessScale(OH_ArkUI_DecorationStyleOptions* options, float* thicknessScale)](#oh_arkui_decorationstyleoptions_getthicknessscale) | - | 获取装饰线的粗细缩放比例。 |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetTypes(OH_ArkUI_TextDataDetectorConfig* config, const ArkUI_TextDataDetectorType* types, int32_t length)](#oh_arkui_textdatadetectorconfig_settypes) | - | 设置文本实体识别配置的类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetTypes(OH_ArkUI_TextDataDetectorConfig* config, ArkUI_TextDataDetectorType* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_textdatadetectorconfig_gettypes) | - | 获取文本实体识别配置的类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_RegisterOnDetectResultUpdateCallback(OH_ArkUI_TextDataDetectorConfig* config, void* userData, void (*callback)(const char* result, int32_t length, void* userData))](#oh_arkui_textdatadetectorconfig_registerondetectresultupdatecallback) | - | 设置文本实体识别结果更新回调。 |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetColor(OH_ArkUI_TextDataDetectorConfig* config, uint32_t color)](#oh_arkui_textdatadetectorconfig_setcolor) | - | 设置识别内容的颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetColor(OH_ArkUI_TextDataDetectorConfig* config, uint32_t* color)](#oh_arkui_textdatadetectorconfig_getcolor) | - | 获取识别内容的颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetDecorationStyleOptions(OH_ArkUI_TextDataDetectorConfig* config, OH_ArkUI_DecorationStyleOptions* decoration)](#oh_arkui_textdatadetectorconfig_setdecorationstyleoptions) | - | 设置识别内容的装饰样式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetDecorationStyleOptions(OH_ArkUI_TextDataDetectorConfig* config, OH_ArkUI_DecorationStyleOptions* decoration)](#oh_arkui_textdatadetectorconfig_getdecorationstyleoptions) | - | 获取识别内容的装饰样式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetEnablePreviewMenu(OH_ArkUI_TextDataDetectorConfig* config, bool enablePreviewMenu)](#oh_arkui_textdatadetectorconfig_setenablepreviewmenu) | - | 设置长按识别内容时是否显示预览菜单。 |
| [ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetEnablePreviewMenu(OH_ArkUI_TextDataDetectorConfig* config, bool* enablePreviewMenu)](#oh_arkui_textdatadetectorconfig_getenablepreviewmenu) | - | 获取长按识别内容时是否显示预览菜单。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetValue(OH_ArkUI_TextEditorPlaceholderOptions* options, const char* value)](#oh_arkui_texteditorplaceholderoptions_setvalue) | - | 设置无输入时的提示文本选项的提示文字。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetValue(OH_ArkUI_TextEditorPlaceholderOptions* options, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_texteditorplaceholderoptions_getvalue) | - | 获取无输入时的提示文本选项的提示文字。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontSize(OH_ArkUI_TextEditorPlaceholderOptions* options, float fontSize)](#oh_arkui_texteditorplaceholderoptions_setfontsize) | - | 设置无输入时的提示文本选项的字体大小。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontSize(OH_ArkUI_TextEditorPlaceholderOptions* options, float* fontSize)](#oh_arkui_texteditorplaceholderoptions_getfontsize) | - | 获取无输入时的提示文本选项的字体大小。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontWeight(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t fontWeight)](#oh_arkui_texteditorplaceholderoptions_setfontweight) | - | 设置无输入时的提示文本选项的字体粗细。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontWeight(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t* fontWeight)](#oh_arkui_texteditorplaceholderoptions_getfontweight) | - | 获取无输入时的提示文本选项的字体粗细。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontFamily(OH_ArkUI_TextEditorPlaceholderOptions* options, const char* fontFamily)](#oh_arkui_texteditorplaceholderoptions_setfontfamily) | - | 设置无输入时的提示文本选项的字体家族。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontFamily(OH_ArkUI_TextEditorPlaceholderOptions* options, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_texteditorplaceholderoptions_getfontfamily) | - | 获取无输入时的提示文本选项的字体家族。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontStyle(OH_ArkUI_TextEditorPlaceholderOptions* options, ArkUI_FontStyle fontStyle)](#oh_arkui_texteditorplaceholderoptions_setfontstyle) | - | 设置无输入时的提示文本选项的字体样式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontStyle(OH_ArkUI_TextEditorPlaceholderOptions* options, ArkUI_FontStyle* fontStyle)](#oh_arkui_texteditorplaceholderoptions_getfontstyle) | - | 获取无输入时的提示文本选项的字体样式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontColor(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t fontColor)](#oh_arkui_texteditorplaceholderoptions_setfontcolor) | - | 设置无输入时的提示文本选项的字体颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontColor(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t* fontColor)](#oh_arkui_texteditorplaceholderoptions_getfontcolor) | - | 获取无输入时的提示文本选项的字体颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetCaretOffset(OH_ArkUI_TextEditorStyledStringController* controller, int32_t caretOffset)](#oh_arkui_texteditorstyledstringcontroller_setcaretoffset) | - | 通过属性字符串控制器设置光标偏移量。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetCaretOffset(OH_ArkUI_TextEditorStyledStringController* controller, int32_t* caretOffset)](#oh_arkui_texteditorstyledstringcontroller_getcaretoffset) | - | 通过属性字符串控制器获取光标索引位置。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetSelection(OH_ArkUI_TextEditorStyledStringController* controller, uint32_t start, uint32_t end, ArkUI_MenuPolicy menuPolicy)](#oh_arkui_texteditorstyledstringcontroller_setselection) | - | 通过属性字符串控制器设置选中区域。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_IsEditing(OH_ArkUI_TextEditorStyledStringController* controller, bool* isEditing)](#oh_arkui_texteditorstyledstringcontroller_isediting) | - | 通过属性字符串控制器获取文本编辑器的编辑状态。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_StopEditing(OH_ArkUI_TextEditorStyledStringController* controller)](#oh_arkui_texteditorstyledstringcontroller_stopediting) | - | 通过属性字符串控制器退出文本编辑器的编辑状态。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetPreviewText(OH_ArkUI_TextEditorStyledStringController* controller, uint32_t* offset, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_texteditorstyledstringcontroller_getpreviewtext) | - | 通过属性字符串控制器获取预上屏文本内容。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetCaretRect(OH_ArkUI_TextEditorStyledStringController* controller, ArkUI_Rect* rect)](#oh_arkui_texteditorstyledstringcontroller_getcaretrect) | - | 通过属性字符串控制器获取光标矩形区域。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_DeleteBackward(OH_ArkUI_TextEditorStyledStringController* controller)](#oh_arkui_texteditorstyledstringcontroller_deletebackward) | - | 通过属性字符串控制器删除字符。没有内容被选中时，删除当前光标位置前的1个字符。有内容被选中时，删除选中内容。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextAlignment align)](#oh_arkui_texteditorparagraphstyle_settextalign) | - | 设置段落样式中的文本对齐方式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextAlignment* align)](#oh_arkui_texteditorparagraphstyle_gettextalign) | - | 获取段落样式中的文本对齐方式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginPixelMap(OH_ArkUI_TextEditorParagraphStyle* style, struct OH_PixelmapNative* pixelmap)](#oh_arkui_texteditorparagraphstyle_setleadingmarginpixelmap) | - | 设置段落样式中段落缩进的像素图。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginPixelMap(OH_ArkUI_TextEditorParagraphStyle* style, struct OH_PixelmapNative** pixelmap)](#oh_arkui_texteditorparagraphstyle_getleadingmarginpixelmap) | - | 获取段落样式中段落缩进的像素图。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginWidth(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t width)](#oh_arkui_texteditorparagraphstyle_setleadingmarginwidth) | - | 设置段落样式中段落缩进的宽度。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginWidth(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* width)](#oh_arkui_texteditorparagraphstyle_getleadingmarginwidth) | - | 获取段落样式中段落缩进的宽度。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginHeight(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t height)](#oh_arkui_texteditorparagraphstyle_setleadingmarginheight) | - | 设置段落样式中段落缩进的高度。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginHeight(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* height)](#oh_arkui_texteditorparagraphstyle_getleadingmarginheight) | - | 获取段落样式中段落缩进的高度。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetWordBreak(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_WordBreak wordBreak)](#oh_arkui_texteditorparagraphstyle_setwordbreak) | - | 设置段落样式的断字方式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetWordBreak(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_WordBreak* wordBreak)](#oh_arkui_texteditorparagraphstyle_getwordbreak) | - | 获取段落样式的断字方式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLineBreakStrategy(OH_ArkUI_TextEditorParagraphStyle* style, OH_ArkUI_LineBreakStrategy lineBreakStrategy)](#oh_arkui_texteditorparagraphstyle_setlinebreakstrategy) | - | 设置段落样式的换行策略。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLineBreakStrategy(OH_ArkUI_TextEditorParagraphStyle* style, OH_ArkUI_LineBreakStrategy* lineBreakStrategy)](#oh_arkui_texteditorparagraphstyle_getlinebreakstrategy) | - | 获取段落样式的换行策略。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetParagraphSpacing(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t paragraphSpacing)](#oh_arkui_texteditorparagraphstyle_setparagraphspacing) | - | 设置段落样式的段落间距。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetParagraphSpacing(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* paragraphSpacing)](#oh_arkui_texteditorparagraphstyle_getparagraphspacing) | - | 获取段落样式的段落间距。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextVerticalAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextVerticalAlignment verticalAlignment)](#oh_arkui_texteditorparagraphstyle_settextverticalalign) | - | 设置段落样式的文本垂直对齐方式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextVerticalAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextVerticalAlignment* verticalAlignment)](#oh_arkui_texteditorparagraphstyle_gettextverticalalign) | - | 获取段落样式的文本垂直对齐方式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextDirection(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextDirection textDirection)](#oh_arkui_texteditorparagraphstyle_settextdirection) | - | 设置段落样式的文本方向。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextDirection(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextDirection* textDirection)](#oh_arkui_texteditorparagraphstyle_gettextdirection) | - | 获取段落样式的文本方向。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetTypingParagraphStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorParagraphStyle* style)](#oh_arkui_texteditorstyledstringcontroller_settypingparagraphstyle) | - | 通过属性字符串控制器设置预设段落样式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t color)](#oh_arkui_texteditortextstyle_setfontcolor) | - | 设置文本样式的字体颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t* color)](#oh_arkui_texteditortextstyle_getfontcolor) | - | 获取文本样式的字体颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontSize(OH_ArkUI_TextEditorTextStyle* style, float size)](#oh_arkui_texteditortextstyle_setfontsize) | - | 设置文本样式的字体大小。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontSize(OH_ArkUI_TextEditorTextStyle* style, float* size)](#oh_arkui_texteditortextstyle_getfontsize) | - | 获取文本样式的字体大小。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontStyle(OH_ArkUI_TextEditorTextStyle* style, ArkUI_FontStyle fontStyle)](#oh_arkui_texteditortextstyle_setfontstyle) | - | 设置文本样式的字体样式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontStyle(OH_ArkUI_TextEditorTextStyle* style, ArkUI_FontStyle* fontStyle)](#oh_arkui_texteditortextstyle_getfontstyle) | - | 获取文本样式的字体样式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontWeight(OH_ArkUI_TextEditorTextStyle* style, uint32_t fontWeight)](#oh_arkui_texteditortextstyle_setfontweight) | - | 设置文本样式的字体粗细。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontWeight(OH_ArkUI_TextEditorTextStyle* style, uint32_t* fontWeight)](#oh_arkui_texteditortextstyle_getfontweight) | - | 获取文本样式的字体粗细。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontFamily(OH_ArkUI_TextEditorTextStyle* style, const char* fontFamily)](#oh_arkui_texteditortextstyle_setfontfamily) | - | 设置文本样式的字体家族。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontFamily(OH_ArkUI_TextEditorTextStyle* style, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_texteditortextstyle_getfontfamily) | - | 获取文本样式的字体家族。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetDecoration(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_DecorationStyleOptions* options)](#oh_arkui_texteditortextstyle_setdecoration) | - | 设置文本样式的文本装饰选项。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetDecoration(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_DecorationStyleOptions* options)](#oh_arkui_texteditortextstyle_getdecoration) | - | 获取文本样式的文本装饰选项。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextShadows(OH_ArkUI_TextEditorTextStyle* style, const OH_ArkUI_ShadowOptions** options, int32_t length)](#oh_arkui_texteditortextstyle_settextshadows) | - | 设置文本样式的文本阴影选项。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextShadows(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_ShadowOptions** shadowOptions, uint32_t shadowOptionsSize, uint32_t* writeLength)](#oh_arkui_texteditortextstyle_gettextshadows) | - | 获取文本样式的文本阴影选项。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetLineHeight(OH_ArkUI_TextEditorTextStyle* style, int32_t lineHeight)](#oh_arkui_texteditortextstyle_setlineheight) | - | 设置文本样式的文本行高。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetLineHeight(OH_ArkUI_TextEditorTextStyle* style, int32_t* lineHeight)](#oh_arkui_texteditortextstyle_getlineheight) | - | 获取文本样式的文本行高。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetLetterSpacing(OH_ArkUI_TextEditorTextStyle* style, int32_t letterSpacing)](#oh_arkui_texteditortextstyle_setletterspacing) | - | 设置文本样式的字符间距。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetLetterSpacing(OH_ArkUI_TextEditorTextStyle* style, int32_t* letterSpacing)](#oh_arkui_texteditortextstyle_getletterspacing) | - | 获取文本样式的字符间距。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontFeature(OH_ArkUI_TextEditorTextStyle* style, const char* fontFeature)](#oh_arkui_texteditortextstyle_setfontfeature) | - | 设置文本样式的文字特性效果，比如数字等宽的特性。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontFeature(OH_ArkUI_TextEditorTextStyle* style, char* buffer, int32_t bufferSize, int32_t* writeLength)](#oh_arkui_texteditortextstyle_getfontfeature) | - | 获取文本样式的文字特性效果，比如数字等宽的特性。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetHalfLeading(OH_ArkUI_TextEditorTextStyle* style, bool halfLeading)](#oh_arkui_texteditortextstyle_sethalfleading) | - | 设置文本样式中文本是否将行间距平分至行的顶部与底部。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetHalfLeading(OH_ArkUI_TextEditorTextStyle* style, bool* halfLeading)](#oh_arkui_texteditortextstyle_gethalfleading) | - | 获取文本样式中文本是否将行间距平分至行的顶部与底部。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextBackgroundColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t color)](#oh_arkui_texteditortextstyle_settextbackgroundcolor) | - | 设置文本样式中的文本背景颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextBackgroundColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t* color)](#oh_arkui_texteditortextstyle_gettextbackgroundcolor) | - | 获取文本样式中的文本背景颜色。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextBackgroundRadius(OH_ArkUI_TextEditorTextStyle* style, float topLeft, float topRight, float bottomLeft, float bottomRight)](#oh_arkui_texteditortextstyle_settextbackgroundradius) | - | 设置文本样式中文本背景的圆角半径。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextBackgroundRadius(OH_ArkUI_TextEditorTextStyle* style, float* topLeft, float* topRight, float* bottomLeft, float* bottomRight)](#oh_arkui_texteditortextstyle_gettextbackgroundradius) | - | 获取文本样式中文本背景的圆角半径。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetTypingStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorTextStyle* style)](#oh_arkui_texteditorstyledstringcontroller_settypingstyle) | - | 通过属性字符串控制器设置预设输入样式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetTypingStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorTextStyle* style)](#oh_arkui_texteditorstyledstringcontroller_gettypingstyle) | - | 通过属性字符串控制器获取预设输入样式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetSpanType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorSpanType textEditorSpanType)](#oh_arkui_texteditorselectionmenuoptions_setspantype) | - | 设置文本编辑器中文本选择菜单的span的类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetSpanType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorSpanType* textEditorSpanType)](#oh_arkui_texteditorselectionmenuoptions_getspantype) | - | 获取文本编辑器中文本选择菜单的span的类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetContentNode(OH_ArkUI_TextEditorSelectionMenuOptions* options, ArkUI_NodeHandle node)](#oh_arkui_texteditorselectionmenuoptions_setcontentnode) | - | 设置文本编辑器中文本选择菜单的内容节点。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetContentNode(OH_ArkUI_TextEditorSelectionMenuOptions* options, ArkUI_NodeHandle* node)](#oh_arkui_texteditorselectionmenuoptions_getcontentnode) | - | 获取文本编辑器中文本选择菜单的内容节点。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetResponseType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorResponseType responseType)](#oh_arkui_texteditorselectionmenuoptions_setresponsetype) | - | 设置文本编辑器中文本选择菜单的响应类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetResponseType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorResponseType* responseType)](#oh_arkui_texteditorselectionmenuoptions_getresponsetype) | - | 获取文本编辑器中文本选择菜单的响应类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetMenuType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextMenuType menuType)](#oh_arkui_texteditorselectionmenuoptions_setmenutype) | - | 设置文本编辑器中文本选择菜单的类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetMenuType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextMenuType* menuType)](#oh_arkui_texteditorselectionmenuoptions_getmenutype) | - | 获取文本编辑器中文本选择菜单的类型。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuShowCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(int32_t start, int32_t end, void* callbackUserData))](#oh_arkui_texteditorselectionmenuoptions_registeronmenushowcallback) | - | 设置文本选择菜单显示时触发的事件。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuHideCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(int32_t start, int32_t end, void* callbackUserData))](#oh_arkui_texteditorselectionmenuoptions_registeronmenuhidecallback) | - | 设置文本选择菜单隐藏时触发的事件。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuAppearCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(int32_t start, int32_t end, void* callbackUserData))](#oh_arkui_texteditorselectionmenuoptions_registeronmenuappearcallback) | - | 设置文本选择菜单出现时触发的事件。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuDisappearCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(void* callbackUserData))](#oh_arkui_texteditorselectionmenuoptions_registeronmenudisappearcallback) | - | 设置文本选择菜单消失时触发的事件。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetHapticFeedbackMode(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_HapticFeedbackMode mode)](#oh_arkui_texteditorselectionmenuoptions_sethapticfeedbackmode) | - | 设置文本编辑器中文本选择菜单的触觉反馈模式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetHapticFeedbackMode(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_HapticFeedbackMode* mode)](#oh_arkui_texteditorselectionmenuoptions_gethapticfeedbackmode) | - | 获取文本编辑器中文本选择菜单的触觉反馈模式。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_CloseSelectionMenu(OH_ArkUI_TextEditorStyledStringController* controller)](#oh_arkui_texteditorstyledstringcontroller_closeselectionmenu) | - | 关闭文本编辑器属性字符串控制器的文本选择菜单。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetSelection(const OH_ArkUI_TextEditorStyledStringController* controller, uint32_t* start, uint32_t* end)](#oh_arkui_texteditorstyledstringcontroller_getselection) | - | 通过属性字符串控制器获取选中区域。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetStyledString(const OH_ArkUI_TextEditorStyledStringController* controller, const ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_texteditorstyledstringcontroller_setstyledstring) | - | 通过属性字符串控制器设置显示的属性字符串。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetStyledString(const OH_ArkUI_TextEditorStyledStringController* controller, ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_texteditorstyledstringcontroller_getstyledstring) | - | 通过属性字符串控制器获取显示的属性字符串。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetStyledPlaceholder(const OH_ArkUI_TextEditorStyledStringController* controller, const ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_texteditorstyledstringcontroller_setstyledplaceholder) | - | 通过属性字符串控制器设置属性字符串样式的提示文本。 |
| [ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_ScrollToVisible(const OH_ArkUI_TextEditorStyledStringController* controller, int32_t start, int32_t end)](#oh_arkui_texteditorstyledstringcontroller_scrolltovisible) | - | 通过属性字符串控制器使指定起始索引至结束索引范围内的内容滚动至可视区域。 |
| [ArkUI_ErrorCode OH_ArkUI_TextController_SetStyledString(OH_ArkUI_TextController* controller, ArkUI_StyledString_Descriptor* descriptor)](#oh_arkui_textcontroller_setstyledstring) | - | 设置文本组件的属性字符串。 |
| [OH_ArkUI_LinearGradientOptions* OH_ArkUI_LinearGradientOptions_Create()](#oh_arkui_lineargradientoptions_create) | - | 创建线性渐变效果选项对象。 |
| [void OH_ArkUI_LinearGradientOptions_Destroy(OH_ArkUI_LinearGradientOptions* options)](#oh_arkui_lineargradientoptions_destroy) | - | 销毁线性渐变效果选项对象。 |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetAngle(OH_ArkUI_LinearGradientOptions* options, float angle)](#oh_arkui_lineargradientoptions_setangle) | - | 设置线性渐变效果选项的角度。 |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetAngle(const OH_ArkUI_LinearGradientOptions* options, float* angle)](#oh_arkui_lineargradientoptions_getangle) | - | 获取线性渐变效果选项的角度。 |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetDirection(OH_ArkUI_LinearGradientOptions* options, ArkUI_LinearGradientDirection direction)](#oh_arkui_lineargradientoptions_setdirection) | - | 设置线性渐变选项的方向。 |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetDirection(const OH_ArkUI_LinearGradientOptions* options, ArkUI_LinearGradientDirection* direction)](#oh_arkui_lineargradientoptions_getdirection) | - | 获取线性渐变选项的方向。 |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetRepeating(OH_ArkUI_LinearGradientOptions* options, bool repeating)](#oh_arkui_lineargradientoptions_setrepeating) | - | 设置颜色是否在线性渐变选项中重复。 |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetRepeating(const OH_ArkUI_LinearGradientOptions* options, bool* repeating)](#oh_arkui_lineargradientoptions_getrepeating) | - | 获取线性渐变选项中颜色是否重复。 |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetColorStop(OH_ArkUI_LinearGradientOptions* options, const uint32_t* colors, const float* stops, int32_t colorsAndStopsSize)](#oh_arkui_lineargradientoptions_setcolorstop) | - | 设置线性渐变选项的颜色停止点。 |
| [ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetColorStop(const OH_ArkUI_LinearGradientOptions* options, uint32_t* colors, float* stops, int32_t colorsAndStopsSize, int32_t* writeLength)](#oh_arkui_lineargradientoptions_getcolorstop) | - | 获取线性渐变选项的颜色停止点。 |
| [OH_ArkUI_RadialGradientOptions* OH_ArkUI_RadialGradientOptions_Create()](#oh_arkui_radialgradientoptions_create) | - | 创建一个径向渐变选项对象。 |
| [void OH_ArkUI_RadialGradientOptions_Destroy(OH_ArkUI_RadialGradientOptions* options)](#oh_arkui_radialgradientoptions_destroy) | - | 销毁一个径向渐变选项对象。 |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetCenterX(OH_ArkUI_RadialGradientOptions* options, float centerX)](#oh_arkui_radialgradientoptions_setcenterx) | - | 设置径向渐变选项中心点的X坐标。 |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetCenterX(const OH_ArkUI_RadialGradientOptions* options, float* centerX)](#oh_arkui_radialgradientoptions_getcenterx) | - | 获取径向渐变选项的中心点的X坐标。 |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetCenterY(OH_ArkUI_RadialGradientOptions* options, float centerY)](#oh_arkui_radialgradientoptions_setcentery) | - | 设置径向渐变选项中心点的Y坐标。 |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetCenterY(const OH_ArkUI_RadialGradientOptions* options, float* centerY)](#oh_arkui_radialgradientoptions_getcentery) | - | 获取径向渐变选项的中心点的Y坐标。 |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetRadius(OH_ArkUI_RadialGradientOptions* options, float radius)](#oh_arkui_radialgradientoptions_setradius) | - | 设置径向渐变选项的半径。 |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetRadius(const OH_ArkUI_RadialGradientOptions* options, float* radius)](#oh_arkui_radialgradientoptions_getradius) | - | 获取径向渐变选项的半径。 |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetRepeating(OH_ArkUI_RadialGradientOptions* options, bool repeating)](#oh_arkui_radialgradientoptions_setrepeating) | - | 设置径向渐变选项中颜色是否重复。 |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetRepeating(const OH_ArkUI_RadialGradientOptions* options, bool* repeating)](#oh_arkui_radialgradientoptions_getrepeating) | - | 获取径向渐变选项中颜色是否重复的设置。 |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetColorStop(OH_ArkUI_RadialGradientOptions* options, const uint32_t* colors, const float* stops, int32_t colorsAndStopsSize)](#oh_arkui_radialgradientoptions_setcolorstop) | - | 设置径向渐变选项的颜色停止点。 |
| [ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetColorStop(const OH_ArkUI_RadialGradientOptions* options, uint32_t* colors, float* stops, int32_t colorsAndStopsSize, int32_t* writeLength)](#oh_arkui_radialgradientoptions_getcolorstop) | - | 获取径向渐变选项的颜色停止点。 |

#### 枚举类型说明

#### [h2]ArkUI_CopyOptions

```
enum ArkUI_CopyOptions
```
 描述：

定义文本复制粘贴模式枚举值。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_COPY_OPTIONS_NONE = 0 | 不支持复制。 |
| ARKUI_COPY_OPTIONS_IN_APP = 1 | 支持应用内复制。 |
| ARKUI_COPY_OPTIONS_LOCAL_DEVICE = 2 | 支持设备内复制。 |
| ARKUI_COPY_OPTIONS_CROSS_DEVICE = 3 | 支持跨设备复制。 |

#### [h2]ArkUI_AccessibilityCheckedState

```
enum ArkUI_AccessibilityCheckedState
```
 描述：

定义无障碍复选框状态类型枚举值。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_ACCESSIBILITY_UNCHECKED = 0 | 复选框未被选中。 |
| ARKUI_ACCESSIBILITY_CHECKED = 1 | 复选框被选中。 |

#### [h2]ArkUI_AccessibilityActionType

```
enum ArkUI_AccessibilityActionType
```
 描述：

定义无障碍操作类型。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_ACCESSIBILITY_ACTION_CLICK = 1 描述：

边框线条样式枚举值。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_BORDER_STYLE_SOLID = 0 | 显示为一条实线，该值为默认值。 |
| ARKUI_BORDER_STYLE_DASHED = 1 | 显示为一系列短的方形虚线。 |
| ARKUI_BORDER_STYLE_DOTTED = 2 | 显示为一系列圆点。 |

#### [h2]ArkUI_AccessibilityMode

```
enum ArkUI_AccessibilityMode
```
 描述：

定义无障碍辅助服务模式。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_ACCESSIBILITY_MODE_AUTO = 0 | 根据组件不同会转换为“enabled”或者“disabled”。 |
| ARKUI_ACCESSIBILITY_MODE_ENABLED = 1 | 当前组件可被无障碍辅助服务所识别。 |
| ARKUI_ACCESSIBILITY_MODE_DISABLED = 2 | 当前组件不可被无障碍辅助服务所识别。 |
| ARKUI_ACCESSIBILITY_MODE_DISABLED_FOR_DESCENDANTS = 3 | 当前组件及其所有子组件不可被无障碍辅助服务所识别。 |

#### [h2]ArkUI_AdaptiveColor

```
enum ArkUI_AdaptiveColor
```
 描述：

定义取色模式。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_ADAPTIVE_COLOR_DEFAULT = 0 | 不使用取色模糊。 |
| ARKUI_ADAPTIVE_COLOR_AVERAGE = 1 | 使用取色模糊。 |

#### [h2]ArkUI_ColorMode

```
enum ArkUI_ColorMode
```
 描述：

定义深浅色模式。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_COLOR_MODE_SYSTEM = 0 | 跟随系统深浅色模式。 |
| ARKUI_COLOR_MODE_LIGHT = 1 | 固定使用浅色模式。 |
| ARKUI_COLOR_MODE_DARK = 2 | 固定使用深色模式。 |

#### [h2]ArkUI_SystemColorMode

```
enum ArkUI_SystemColorMode
```
 描述：

定义系统深浅色模式。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_SYSTEM_COLOR_MODE_LIGHT = 0 | 浅色模式。 |
| ARKUI_SYSTEM_COLOR_MODE_DARK = 1 | 深色模式。 |

#### [h2]ArkUI_LengthMetricUnit

```
enum ArkUI_LengthMetricUnit
```
 描述：

定义组件的单位模式。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_LENGTH_METRIC_UNIT_DEFAULT = -1 | 默认，字体类单位为fp，非字体类单位为vp。 |
| ARKUI_LENGTH_METRIC_UNIT_PX = 0 | 单位为px。 |
| ARKUI_LENGTH_METRIC_UNIT_VP = 1 | 单位为vp。 |
| ARKUI_LENGTH_METRIC_UNIT_FP = 2 | 单位为fp。 |

#### [h2]ArkUI_ListItemSwipeActionState

```
enum ArkUI_ListItemSwipeActionState
```
 描述：

定义[Listitem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem#listitem10)组件[SwipeAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem#swipeaction9)方法的显隐模式，默认值为ARKUI_LIST_ITEM_SWIPE_ACTION_STATE_COLLAPSED。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_LIST_ITEM_SWIPE_ACTION_STATE_COLLAPSED = 0 | 收起状态，当ListItem与主轴方向相反滑动时操作项处于隐藏状态。 |
| ARKUI_LIST_ITEM_SWIPE_ACTION_STATE_EXPANDED = 1 | 展开状态，当ListItem与主轴方向相反滑动时操作项处于显示状态。 |
| ARKUI_LIST_ITEM_SWIPE_ACTION_STATE_ACTIONING = 2 | 长距离状态，当ListItem进入长距删除区后删除ListItem的状态。 |

#### [h2]ArkUI_ListItemSwipeEdgeEffect

```
enum ArkUI_ListItemSwipeEdgeEffect
```
 描述：

定义Listitem组件[swipeAction](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem#swipeaction9)方法的滚动模式，默认值为ARKUI_LIST_ITEM_SWIPE_EDGE_EFFECT_SPRING。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_LIST_ITEM_SWIPE_EDGE_EFFECT_SPRING = 0 | ListItem划动距离超过划出组件大小后可以继续划动。 |
| ARKUI_LIST_ITEM_SWIPE_EDGE_EFFECT_NONE = 1 | ListItem划动距离不能超过划出组件大小。 |

#### [h2]ArkUI_ListItemSwipeActionDirection

```
enum ArkUI_ListItemSwipeActionDirection
```
 描述：

ListItem划出菜单的展开方向。

起始版本： 21

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_LIST_ITEM_SWIPE_ACTION_DIRECTION_START = 0 | 当列表方向是垂直方向时，LTR模式下表示ListItem的左边，RTL模式下表示ListItem的右边。当列表是水平方向时，表示ListItem的上边。 |
| ARKUI_LIST_ITEM_SWIPE_ACTION_DIRECTION_END = 1 | 当列表方向是垂直方向时，LTR模式下表示ListItem的右边，RTL模式下表示ListItem的左边。当列表是水平方向时，表示ListItem的下边。 |

#### [h2]ArkUI_CrownSensitivity

```
enum ArkUI_CrownSensitivity
```
 描述：

定义表冠灵敏度枚举值。

起始版本： 26.0.0

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_CROWN_SENSITIVITY_LOW = 0 | 低灵敏度。 |
| ARKUI_CROWN_SENSITIVITY_MEDIUM = 1 | 中等灵敏度。 |
| ARKUI_CROWN_SENSITIVITY_HIGH = 2 | 高灵敏度。 |

#### [h2]ArkUI_SafeAreaType

```
enum ArkUI_SafeAreaType
```
 描述：

定义扩展安全区域的枚举值。

起始版本： 12

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_SAFE_AREA_TYPE_SYSTEM = 1 | 系统默认非安全区域，包括状态栏、导航栏，该值为默认值。 |
| ARKUI_SAFE_AREA_TYPE_CUTOUT = 1 描述：

键盘避让模式。

起始版本： 15

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_KEYBOARD_AVOID_MODE_DEFAULT = 0 | 默认避让软键盘并在到达极限高度之后进行高度压缩。 |
| ARKUI_KEYBOARD_AVOID_MODE_NONE = 1 | 不避让键盘。 |

#### [h2]ArkUI_HoverModeAreaType

```
enum ArkUI_HoverModeAreaType
```
 描述：

悬停态显示区域。

起始版本： 15

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_HOVER_MODE_AREA_TYPE_TOP = 0 | 上半屏。 |
| ARKUI_HOVER_MODE_AREA_TYPE_BOTTOM = 1 | 下半屏。 |

#### [h2]ArkUI_ExpandMode

```
enum ArkUI_ExpandMode
```
 描述：

定义子节点展开模式枚举值。

起始版本： 15

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_NOT_EXPAND = 0 | 不展开。 |
| ARKUI_EXPAND = 1 | 展开。 |
| ARKUI_LAZY_EXPAND = 2 | 懒展开，按需展开当前节点的子节点，节点展开条件可以参考[LazyForEach：数据懒加载](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-rendering-control-lazyforeach)。 |

#### [h2]ArkUI_FocusWrapMode

```
enum ArkUI_FocusWrapMode
```
 描述：

组件走焦换行规则。Grid、List组件默认值为ARKUI_FOCUS_WRAP_MODE_DEFAULT。

起始版本： 20

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_FOCUS_WRAP_MODE_DEFAULT = 0 | 默认规则，使用方向键走焦不换行。 |
| ARKUI_FOCUS_WRAP_WITH_ARROW = 1 | 使用方向键走焦自动换行。 |

#### [h2]ArkUI_ItemFillPolicy

```
enum ArkUI_ItemFillPolicy
```
 描述：

为不同响应式[断点规格](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-grid-layout#栅格容器断点)指定列数。

起始版本： 22

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_ITEMFILLPOLICY_NONE = -1 | 没有设置响应式断点规格。 |
| ARKUI_ITEMFILLPOLICY_DEFAULT = 0 | 针对List和Swiper组件：在组件宽度属于sm及更小的断点区间时显示1列，属于md断点区间时显示2列，属于lg及更大的断点区间时显示3列。 针对Grid和WaterFlow组件：在组件宽度属于sm及更小的断点区间时显示2列，属于md断点区间时显示3列，属于lg及更大的断点区间时显示5列。 |
| ARKUI_ITEMFILLPOLICY_SM1MD2LG3 = 1 | 在组件宽度属于sm及更小的断点区间时显示1列，属于md断点区间时显示2列，属于lg及更大的断点区间时显示3列。 |
| ARKUI_ITEMFILLPOLICY_SM2MD3LG5 = 2 | 在组件宽度属于sm及更小的断点区间时显示2列，属于md断点区间时显示3列，属于lg及更大的断点区间时显示5列。 |

#### [h2]ArkUI_EdgeDirection

```
enum ArkUI_EdgeDirection
```
 描述：

定义矩形边方向。

起始版本： 20

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_EDGE_DIRECTION_ALL = 0 | 设置四个方向的内容。 |
| ARKUI_EDGE_DIRECTION_LEFT = 1 描述：

定义角度方向。

起始版本： 20

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_CORNER_DIRECTION_ALL = 0 | 设置四个角度方向的内容。 |
| ARKUI_CORNER_DIRECTION_TOP_LEFT = 1 描述：

菜单弹出策略。

起始版本： 23

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_MENU_POLICY_DEFAULT = 0 | 根据底层默认逻辑确定是否弹出菜单。 |
| ARKUI_MENU_POLICY_HIDE = 1 | 不弹出菜单。 |
| ARKUI_MENU_POLICY_SHOW = 2 | 弹出菜单。 |

#### [h2]ArkUI_RenderStrategy

```
enum ArkUI_RenderStrategy
```
 描述：

定义组件绘制圆角的模式。

起始版本： 23

| 枚举项 | 描述 |
| --- | --- |
| ARKUI_RENDERSTRATEGY_FAST = 0 | 在线绘制模式。 |
| ARKUI_RENDERSTRATEGY_OFFSCREEN = 1 | 离屏绘制模式。 |

#### [h2]OH_ArkUI_CrossLanguageOperatingStatus

```
enum OH_ArkUI_CrossLanguageOperatingStatus
```
 描述

跨语言配置项的节点树操作状态。

起始版本： 26.0.0

| 枚举项 | 描述 |
| --- | --- |
| OH_ARKUI_TREE_OPERATING_STATUS_UNDEFINED = 0 | 未定义，节点树操作状态的初始值。处于此状态的节点不支持跨语言节点树操作。 |
| OH_ARKUI_TREE_OPERATING_STATUS_ENABLE = 1 | 启用，表示当该配置项应用到节点时，节点的节点树操作状态将被启用。 |
| OH_ARKUI_TREE_OPERATING_STATUS_DISABLE = 2 | 禁用，表示当该配置项应用到节点时，节点的节点树操作状态将被禁用。 |

#### [h2]OH_ArkUI_NodeMountPolicy

```
enum OH_ArkUI_NodeMountPolicy
```
 描述

子节点挂载策略类型枚举。

起始版本： 26.0.0

| 枚举项 | 描述 |
| --- | --- |
| OH_ARKUI_NODE_MOUNT_POLICY_SINGLE_IF_RENDER_NODE = 0 | 如果需要将[RenderNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-rendernode)作为子节点挂载，此RenderNode必须是唯一子节点。 |
| OH_ARKUI_NODE_MOUNT_POLICY_MIXED = 1 | 允许同时挂载多个[typeNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode#typenode12)与RenderNode。 |

#### 函数说明

#### [h2]OH_ArkUI_LayoutConstraint_Create()

```
ArkUI_LayoutConstraint* OH_ArkUI_LayoutConstraint_Create()
```
 描述：

创建布局约束。创建的布局约束指针需在使用完毕后调用[OH_ArkUI_LayoutConstraint_Dispose](#oh_arkui_layoutconstraint_dispose)释放，未释放会导致内存泄漏。

起始版本： 12

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* | 创建布局约束的指针。 |

#### [h2]OH_ArkUI_LayoutConstraint_Copy()

```
ArkUI_LayoutConstraint* OH_ArkUI_LayoutConstraint_Copy(const ArkUI_LayoutConstraint* Constraint)
```
 描述：

布局约束深拷贝。深拷贝返回的新布局约束指针与原指针相互独立，需在使用完毕后分别调用[OH_ArkUI_LayoutConstraint_Dispose](#oh_arkui_layoutconstraint_dispose)释放。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* | 新的布局约束指针。 |

#### [h2]OH_ArkUI_LayoutConstraint_Dispose()

```
void* OH_ArkUI_LayoutConstraint_Dispose(ArkUI_LayoutConstraint* Constraint)
```
 描述：

销毁布局约束指针。必须与[OH_ArkUI_LayoutConstraint_Create](#oh_arkui_layoutconstraint_create)或[OH_ArkUI_LayoutConstraint_Copy](#oh_arkui_layoutconstraint_copy)配对使用，每个布局约束指针只能销毁一次，销毁后不应再使用该指针。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| void* | 空指针。 |

#### [h2]OH_ArkUI_LayoutConstraint_GetMaxWidth()

```
int32_t OH_ArkUI_LayoutConstraint_GetMaxWidth(const ArkUI_LayoutConstraint* Constraint)
```
 描述：

通过布局约束获取最大宽度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 最大宽度，单位为px。 |

#### [h2]OH_ArkUI_LayoutConstraint_GetMinWidth()

```
int32_t OH_ArkUI_LayoutConstraint_GetMinWidth(const ArkUI_LayoutConstraint* Constraint)
```
 描述：

通过布局约束获取最小宽度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 最小宽度，单位为px。 |

#### [h2]OH_ArkUI_LayoutConstraint_GetMaxHeight()

```
int32_t OH_ArkUI_LayoutConstraint_GetMaxHeight(const ArkUI_LayoutConstraint* Constraint)
```
 描述：

通过布局约束获取最大高度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 最大高度，单位为px。 |

#### [h2]OH_ArkUI_LayoutConstraint_GetMinHeight()

```
int32_t OH_ArkUI_LayoutConstraint_GetMinHeight(const ArkUI_LayoutConstraint* Constraint)
```
 描述：

通过布局约束获取最小高度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 最小高度，单位为px。 |

#### [h2]OH_ArkUI_LayoutConstraint_GetPercentReferenceWidth()

```
int32_t OH_ArkUI_LayoutConstraint_GetPercentReferenceWidth(const ArkUI_LayoutConstraint* Constraint)
```
 描述：

通过布局约束获取宽度百分比基准。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 宽度百分比基准。 |

#### [h2]OH_ArkUI_LayoutConstraint_GetPercentReferenceHeight()

```
int32_t OH_ArkUI_LayoutConstraint_GetPercentReferenceHeight(const ArkUI_LayoutConstraint* Constraint)
```
 描述：

通过布局约束获取高度百分比基准。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 高度百分比基准。 |

#### [h2]OH_ArkUI_LayoutConstraint_SetMaxWidth()

```
void OH_ArkUI_LayoutConstraint_SetMaxWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)
```
 描述：

设置最大宽度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |
| int32_t value | 最大宽度，单位为px，取值范围：[0, +∞)。 |

#### [h2]OH_ArkUI_LayoutConstraint_SetMinWidth()

```
void OH_ArkUI_LayoutConstraint_SetMinWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)
```
 描述：

设置最小宽度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |
| int32_t value | 最小宽度，单位为px，取值范围：[0, +∞)。 |

#### [h2]OH_ArkUI_LayoutConstraint_SetMaxHeight()

```
void OH_ArkUI_LayoutConstraint_SetMaxHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)
```
 描述：

设置最大高度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |
| int32_t value | 最大高度，单位为px，取值范围：[0, +∞)。 |

#### [h2]OH_ArkUI_LayoutConstraint_SetMinHeight()

```
void OH_ArkUI_LayoutConstraint_SetMinHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)
```
 描述：

设置最小高度。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |
| int32_t value | 最小高度，单位为px，取值范围：[0, +∞)。 |

#### [h2]OH_ArkUI_LayoutConstraint_SetPercentReferenceWidth()

```
void OH_ArkUI_LayoutConstraint_SetPercentReferenceWidth(ArkUI_LayoutConstraint* Constraint, int32_t value)
```
 描述：

设置宽度百分比基准。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |
| int32_t value | 宽度百分比基准，取值范围：[0, +∞)。 |

#### [h2]OH_ArkUI_LayoutConstraint_SetPercentReferenceHeight()

```
void OH_ArkUI_LayoutConstraint_SetPercentReferenceHeight(ArkUI_LayoutConstraint* Constraint, int32_t value)
```
 描述：

设置高度百分比基准。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_LayoutConstraint](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-layoutconstraint)* Constraint | 布局约束的指针。 |
| int32_t value | 高度百分比基准，取值范围：[0, +∞)。 |

#### [h2]OH_ArkUI_DrawContext_GetCanvas()

```
void* OH_ArkUI_DrawContext_GetCanvas(ArkUI_DrawContext* context)
```
 描述：

获取绘制canvas指针，可以转换为图形库的[OH_Drawing_Canvas](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawing-oh-drawing-canvas)指针进行绘制。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_DrawContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawcontext)* context | 绘制上下文。 |

返回：

| 类型 | 说明 |
| --- | --- |
| void* | 用于绘制的canvas指针。 |

#### [h2]OH_ArkUI_DrawContext_GetSize()

```
ArkUI_IntSize OH_ArkUI_DrawContext_GetSize(ArkUI_DrawContext* context)
```
 描述：

获取可绘制区域大小。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_DrawContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-drawcontext)* context | 绘制上下文。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_IntSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-intsize) | 可绘制区域大小。 |

#### [h2]OH_ArkUI_SwiperDigitIndicator_SetFontWeight()

```
void OH_ArkUI_SwiperDigitIndicator_SetFontWeight(ArkUI_SwiperDigitIndicator *indicator, ArkUI_FontWeight fontWeight)
```
 描述：

设置Swiper组件数字导航指示器字体粗细属性。

起始版本： 19

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_SwiperDigitIndicator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-swiperdigitindicator) *indicator | 数字导航指示器对象指针。 |
| [ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight) fontWeight | 字体粗细样式[ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight)。 |

#### [h2]OH_ArkUI_SwiperDigitIndicator_GetFontWeight()

```
ArkUI_FontWeight OH_ArkUI_SwiperDigitIndicator_GetFontWeight(ArkUI_SwiperDigitIndicator* indicator)
```
 描述：

获取Swiper组件数字导航指示器字体粗细属性。

起始版本： 19

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_SwiperDigitIndicator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-swiperdigitindicator)* indicator | 数字导航指示器对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight) | 字体粗细样式[ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight)。 |

#### [h2]OH_ArkUI_SwiperDigitIndicator_SetSelectedFontWeight()

```
void OH_ArkUI_SwiperDigitIndicator_SetSelectedFontWeight(ArkUI_SwiperDigitIndicator *indicator, ArkUI_FontWeight selectedFontWeight)
```
 描述：

设置被选中Swiper组件数字导航指示器字体粗细属性。

起始版本： 19

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_SwiperDigitIndicator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-swiperdigitindicator) *indicator | 数字导航指示器对象指针。 |
| [ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight) selectedFontWeight | 字体粗细样式[ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight)。 |

#### [h2]OH_ArkUI_SwiperDigitIndicator_GetSelectedFontWeight()

```
ArkUI_FontWeight OH_ArkUI_SwiperDigitIndicator_GetSelectedFontWeight(ArkUI_SwiperDigitIndicator* indicator)
```
 描述：

获取被选中Swiper组件数字导航指示器字体粗细属性。

起始版本： 19

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_SwiperDigitIndicator](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-swiperdigitindicator)* indicator | 数字导航指示器对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight) | 字体粗细样式[ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight)。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_Create()

```
ArkUI_ListItemSwipeActionItem* OH_ArkUI_ListItemSwipeActionItem_Create()
```
 描述：

创建ListItemSwipeActionItem接口设置的配置项。

起始版本： 12

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* | ListItemSwipeActionItem配置项实例。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_Dispose()

```
void OH_ArkUI_ListItemSwipeActionItem_Dispose(ArkUI_ListItemSwipeActionItem* item)
```
 描述：

销毁ListItemSwipeActionItem实例。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | 要销毁的ListItemSwipeActionItem实例。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_SetContent()

```
void OH_ArkUI_ListItemSwipeActionItem_SetContent(ArkUI_ListItemSwipeActionItem* item, ArkUI_NodeHandle node)
```
 描述：

设置ListItemSwipeActionItem的布局内容。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | ListItemSwipeActionItem实例。 |
| [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node | 布局信息。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_SetActionAreaDistance()

```
void OH_ArkUI_ListItemSwipeActionItem_SetActionAreaDistance(ArkUI_ListItemSwipeActionItem* item, float distance)
```
 描述：

设置组件长距离滑动删除距离阈值。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | ListItemSwipeActionItem实例。 |
| float distance | 组件长距离滑动删除距离阈值，单位vp。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_GetActionAreaDistance()

```
float OH_ArkUI_ListItemSwipeActionItem_GetActionAreaDistance(ArkUI_ListItemSwipeActionItem* item)
```
 描述：

获取组件长距离滑动删除距离阈值。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | ListItemSwipeActionItem实例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| float | 组件长距离滑动删除距离阈值，单位vp，异常时返回值：0。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionArea()

```
void OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionArea(ArkUI_ListItemSwipeActionItem* item, void (*callback)())
```
 描述：

设置滑动条目进入删除区域时调用的事件。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | ListItemSwipeActionItem实例。 |
| void (*callback)() | 回调事件。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionAreaWithUserData()

```
void OH_ArkUI_ListItemSwipeActionItem_SetOnEnterActionAreaWithUserData(ArkUI_ListItemSwipeActionItem* item,void* userData, void (*callback)(void* userData))
```
 描述：

设置滑动条目进入删除区域时调用的事件，回调事件会传入用户自定义数据。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | ListItemSwipeActionItem实例。 |
| void* userData | 用户自定义数据。 |
| void (*callback)(void* userData) | 回调事件。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_SetOnAction()

```
void OH_ArkUI_ListItemSwipeActionItem_SetOnAction(ArkUI_ListItemSwipeActionItem* item, void (*callback)())
```
 描述：

设置组件进入长距删除区后删除[ListItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem)时调用的事件。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | ListItemSwipeActionItem实例。 |
| void (*callback)() | 回调事件。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_SetOnActionWithUserData()

```
void OH_ArkUI_ListItemSwipeActionItem_SetOnActionWithUserData(ArkUI_ListItemSwipeActionItem* item,void* userData, void (*callback)(void* userData))
```
 描述：

设置组件进入长距删除区后删除ListItem时调用的事件，回调事件会传入用户自定义数据。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | ListItemSwipeActionItem实例。 |
| void* userData | 用户自定义数据。 |
| void (*callback)(void* userData) | 回调事件。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionArea()

```
void OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionArea(ArkUI_ListItemSwipeActionItem* item, void (*callback)())
```
 描述：

设置滑动条目退出删除区域时调用的事件。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | ListItemSwipeActionItem实例。 |
| void (*callback)() | 回调事件。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionAreaWithUserData()

```
void OH_ArkUI_ListItemSwipeActionItem_SetOnExitActionAreaWithUserData(ArkUI_ListItemSwipeActionItem* item,void* userData, void (*callback)(void* userData))
```
 描述：

设置滑动条目退出删除区域时调用的事件，回调事件会传入用户自定义数据。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | ListItemSwipeActionItem实例。 |
| void* userData | 用户自定义数据。 |
| void (*callback)(void* userData) | 回调事件。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_SetOnStateChange()

```
void OH_ArkUI_ListItemSwipeActionItem_SetOnStateChange(ArkUI_ListItemSwipeActionItem* item,void (*callback)(ArkUI_ListItemSwipeActionState swipeActionState))
```
 描述：

设置列表项滑动状态变化时候触发的事件。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | ListItemSwipeActionItem实例。 |
| void (*callback)(ArkUI_ListItemSwipeActionState swipeActionState) | 回调事件。传入参数为swipeActionState，表示列表项滑动状态。 |

#### [h2]OH_ArkUI_ListItemSwipeActionItem_SetOnStateChangeWithUserData()

```
void OH_ArkUI_ListItemSwipeActionItem_SetOnStateChangeWithUserData(ArkUI_ListItemSwipeActionItem* item,void* userData, void (*callback)(ArkUI_ListItemSwipeActionState swipeActionState, void* userData))
```
 描述：

设置列表项滑动状态变化时候触发的事件，回调事件会传入用户自定义数据。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | ListItemSwipeActionItem实例。 |
| void* userData | 用户自定义数据。 |
| callback | 回调事件。传入参数为swipeActionState，表示列表项滑动状态。 |

#### [h2]OH_ArkUI_ListItemSwipeActionOption_Create()

```
ArkUI_ListItemSwipeActionOption* OH_ArkUI_ListItemSwipeActionOption_Create()
```
 描述：

创建ListItemSwipeActionOption接口设置的配置项。

起始版本： 12

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ListItemSwipeActionOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionoption)* | ListItemSwipeActionOption配置项实例。 |

#### [h2]OH_ArkUI_ListItemSwipeActionOption_Dispose()

```
void OH_ArkUI_ListItemSwipeActionOption_Dispose(ArkUI_ListItemSwipeActionOption* option)
```
 描述：

销毁ListItemSwipeActionOption实例。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionoption)* option | 要销毁的ListItemSwipeActionOption实例。 |

#### [h2]OH_ArkUI_ListItemSwipeActionOption_SetStart()

```
void OH_ArkUI_ListItemSwipeActionOption_SetStart(ArkUI_ListItemSwipeActionOption* option, ArkUI_ListItemSwipeActionItem* item)
```
 描述：

设置ListItemSwipeActionItem的左侧（垂直布局）或上方（横向布局）布局内容。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionoption)* option | ListItemSwipeActionOption实例。 |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | 布局信息。 |

#### [h2]OH_ArkUI_ListItemSwipeActionOption_SetEnd()

```
void OH_ArkUI_ListItemSwipeActionOption_SetEnd(ArkUI_ListItemSwipeActionOption* option,ArkUI_ListItemSwipeActionItem* item)
```
 描述：

设置ListItemSwipeActionItem的右侧（垂直布局）或下方（横向布局）布局内容。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionoption)* option | ListItemSwipeActionOption实例。 |
| [ArkUI_ListItemSwipeActionItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionitem)* item | 布局信息。 |

#### [h2]OH_ArkUI_ListItemSwipeActionOption_SetEdgeEffect()

```
void OH_ArkUI_ListItemSwipeActionOption_SetEdgeEffect(ArkUI_ListItemSwipeActionOption* option,ArkUI_ListItemSwipeEdgeEffect edgeEffect)
```
 描述：

设置边缘滑动效果。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionoption)* option | ListItemSwipeActionOption实例。 |
| [ArkUI_ListItemSwipeEdgeEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_listitemswipeedgeeffect) edgeEffect | 边缘滑动效果。 |

#### [h2]OH_ArkUI_ListItemSwipeActionOption_GetEdgeEffect()

```
int32_t OH_ArkUI_ListItemSwipeActionOption_GetEdgeEffect(ArkUI_ListItemSwipeActionOption* option)
```
 描述：

获取边缘滑动效果。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionoption)* option | ListItemSwipeActionOption实例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 边缘滑动效果。默认返回值：[ARKUI_LIST_ITEM_SWIPE_EDGE_EFFECT_SPRING](#arkui_listitemswipeedgeeffect)。 |

#### [h2]OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChange()

```
void OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChange(ArkUI_ListItemSwipeActionOption* option,void (*callback)(float offset))
```
 描述：

滑动操作偏移量更改时调用的事件。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionoption)* option | ListItemSwipeActionOption实例。 |
| callback | 回调事件。offset 滑动偏移量，单位vp。 |

#### [h2]OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChangeWithUserData()

```
void OH_ArkUI_ListItemSwipeActionOption_SetOnOffsetChangeWithUserData(ArkUI_ListItemSwipeActionOption* option,void* userData, void (*callback)(float offset, void* userData))
```
 描述：

滑动操作偏移量更改时调用的事件，回调事件会传入用户自定义数据。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ListItemSwipeActionOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-listitemswipeactionoption)* option | ListItemSwipeActionOption实例。 |
| void* userData | 用户自定义数据。 |
| callback | 回调事件。offset 滑动偏移量，单位vp。 |

#### [h2]OH_ArkUI_ListItemSwipeAction_Expand()

```
int32_t OH_ArkUI_ListItemSwipeAction_Expand(ArkUI_NodeHandle node, ArkUI_ListItemSwipeActionDirection direction)
```
 描述：

展开指定ListItem的划出菜单。

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node | ListItem节点对象。 |
| [ArkUI_ListItemSwipeActionDirection](#arkui_listitemswipeactiondirection) direction | ListItem划出菜单的展开方向。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 错误码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 传入的节点对象类型错误。 [ARKUI_ERROR_CODE_NODE_NOT_ON_MAIN_TREE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 传入的节点未挂载到组件树上。 |

![](./img/note_3.0-zh-cn.png)

- 如果List组件NODE_LIST_CACHED_COUNT属性设置显示预加载ListItem，List显示区域外已预加载完成的ListItem支持展开，否则List显示区域外节点不支持展开。

#### [h2]OH_ArkUI_ListItemSwipeAction_Collapse()

```
int32_t OH_ArkUI_ListItemSwipeAction_Collapse(ArkUI_NodeHandle node)
```
 描述：

收起指定ListItem的划出菜单。

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node | ListItem节点对象。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 错误码。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 [ARKUI_ERROR_CODE_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 传入的节点对象类型错误。 [ARKUI_ERROR_CODE_NODE_NOT_ON_MAIN_TREE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 传入的节点未挂载到组件树上。 |

#### [h2]OH_ArkUI_AccessibilityState_Create()

```
ArkUI_AccessibilityState* OH_ArkUI_AccessibilityState_Create(void)
```
 描述：

创建无障碍状态。

起始版本： 12

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_AccessibilityState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilitystate)* | 无障碍状态对象指针。如果对象返回空指针，表示创建失败，失败的可能原因是应用地址空间满。 |

#### [h2]OH_ArkUI_AccessibilityState_Dispose()

```
void OH_ArkUI_AccessibilityState_Dispose(ArkUI_AccessibilityState* state)
```
 描述：

销毁无障碍状态指针。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilitystate)* state | 无障碍状态对象指针。 |

#### [h2]OH_ArkUI_AccessibilityState_SetDisabled()

```
void OH_ArkUI_AccessibilityState_SetDisabled(ArkUI_AccessibilityState* state, int32_t isDisabled)
```
 描述：

设置无障碍状态是否禁用。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilitystate)* state | 无障碍状态对象指针。 |
| int32_t isDisabled | 无障碍状态是否禁用， 1表示禁用，0表示不禁用，默认为0。 |

#### [h2]OH_ArkUI_AccessibilityState_IsDisabled()

```
int32_t OH_ArkUI_AccessibilityState_IsDisabled(ArkUI_AccessibilityState* state)
```
 描述：

获取无障碍状态是否禁用。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilitystate)* state | 无障碍状态对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 是否禁用， 1表示禁用，0表示未禁用，默认为0; 若state为空，返回默认值。 |

#### [h2]OH_ArkUI_AccessibilityState_SetSelected()

```
void OH_ArkUI_AccessibilityState_SetSelected(ArkUI_AccessibilityState* state, int32_t isSelected)
```
 描述：

设置无障碍状态是否选中。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilitystate)* state | 无障碍状态对象指针。 |
| int32_t isSelected | 是否被选中， 1表示选中，0表示未选中，默认为0。 |

#### [h2]OH_ArkUI_AccessibilityState_IsSelected()

```
int32_t OH_ArkUI_AccessibilityState_IsSelected(ArkUI_AccessibilityState* state)
```
 描述：

获取无障碍状态是否选中。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilitystate)* state | 无障碍状态对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 是否被选中， 1表示选中，0表示未选中，默认为0; 若state为空，返回默认值。 |

#### [h2]OH_ArkUI_AccessibilityState_SetCheckedState()

```
void OH_ArkUI_AccessibilityState_SetCheckedState(ArkUI_AccessibilityState* state, int32_t checkedState)
```
 描述：

设置无障碍状态复选框状态。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilitystate)* state | 无障碍状态对象指针。 |
| int32_t checkedState | 复选框状态，参数类型[ArkUI_AccessibilityCheckedState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_accessibilitycheckedstate), 默认值：ARKUI_ACCESSIBILITY_UNCHECKED。 |

#### [h2]OH_ArkUI_AccessibilityState_GetCheckedState()

```
int32_t OH_ArkUI_AccessibilityState_GetCheckedState(ArkUI_AccessibilityState* state)
```
 描述：

获取无障碍状态复选框状态。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilitystate)* state | 无障碍状态对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 复选框状态，参数类型[ArkUI_AccessibilityCheckedState](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_accessibilitycheckedstate), 默认值：ARKUI_ACCESSIBILITY_UNCHECKED; 若函数参数异常，返回默认值。 |

#### [h2]OH_ArkUI_AccessibilityValue_Create()

```
ArkUI_AccessibilityValue* OH_ArkUI_AccessibilityValue_Create(void)
```
 描述：

创建无障碍信息。

起始版本： 12

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* | 无障碍信息对象指针。 |

#### [h2]OH_ArkUI_AccessibilityValue_Dispose()

```
void OH_ArkUI_AccessibilityValue_Dispose(ArkUI_AccessibilityValue* value)
```
 描述：

销毁无障碍信息指针。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 无障碍信息对象指针。 |

#### [h2]OH_ArkUI_AccessibilityValue_SetMin()

```
void OH_ArkUI_AccessibilityValue_SetMin(ArkUI_AccessibilityValue* value, int32_t min)
```
 描述：

设置无障碍最小值信息。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 无障碍信息对象指针。 |
| int32_t min | 基于范围组件的最小值, 默认为-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_GetMin()

```
int32_t OH_ArkUI_AccessibilityValue_GetMin(ArkUI_AccessibilityValue* value)
```
 描述：

获取无障碍最小值信息。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 无障碍信息对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 基于范围组件的最小值, 默认为-1; 若函数参数异常，返回-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_SetMax()

```
void OH_ArkUI_AccessibilityValue_SetMax(ArkUI_AccessibilityValue* value, int32_t max)
```
 描述：

设置无障碍最大值信息。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 无障碍信息对象指针。 |
| int32_t max | 基于范围组件的最大值, 默认为-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_GetMax()

```
int32_t OH_ArkUI_AccessibilityValue_GetMax(ArkUI_AccessibilityValue* value)
```
 描述：

获取无障碍最大值信息。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 无障碍信息对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 基于范围组件的最大值, 默认为-1; 若函数参数异常，返回-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_SetCurrent()

```
void OH_ArkUI_AccessibilityValue_SetCurrent(ArkUI_AccessibilityValue* value, int32_t current)
```
 描述：

设置无障碍当前值信息。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 无障碍信息对象指针。 |
| int32_t current | 基于范围组件的当前值, 默认为-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_GetCurrent()

```
int32_t OH_ArkUI_AccessibilityValue_GetCurrent(ArkUI_AccessibilityValue* value)
```
 描述：

获取无障碍当前值信息。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 无障碍信息对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 基于范围组件的当前值, 默认为-1; 若函数参数异常，返回-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_SetRangeMin()

```
void OH_ArkUI_AccessibilityValue_SetRangeMin(ArkUI_AccessibilityValue* value, int32_t rangeMin)
```
 描述：

设置范围组件的无障碍最小值信息。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 需要设置最小值的范围组件无障碍信息对象指针。 |
| int32_t rangeMin | 基于范围组件的最小值, 默认为-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_GetRangeMin()

```
int32_t OH_ArkUI_AccessibilityValue_GetRangeMin(ArkUI_AccessibilityValue* value)
```
 描述：

获取范围组件的无障碍最小值信息。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 需要获取最小值的范围组件无障碍信息对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 基于范围组件的最小值, 默认为-1; 若函数参数异常，返回-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_SetRangeMax()

```
void OH_ArkUI_AccessibilityValue_SetRangeMax(ArkUI_AccessibilityValue* value, int32_t rangeMax)
```
 描述：

设置范围组件的无障碍最大值信息。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 需要设置最大值的范围组件无障碍信息对象指针。 |
| int32_t rangeMax | 基于范围组件的最大值, 默认为-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_GetRangeMax()

```
int32_t OH_ArkUI_AccessibilityValue_GetRangeMax(ArkUI_AccessibilityValue* value)
```
 描述：

获取范围组件的无障碍最大值信息。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 需要获取最小值的范围组件无障碍信息对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 基于范围组件的最大值, 默认为-1; 若函数参数异常，返回-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_SetRangeCurrent()

```
void OH_ArkUI_AccessibilityValue_SetRangeCurrent(ArkUI_AccessibilityValue* value, int32_t rangeCurrent)
```
 描述：

用于设置范围组件的无障碍当前值信息。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 需要设置当前值的范围组件无障碍信息对象指针。 |
| int32_t rangeCurrent | 基于范围组件的当前值, 默认为-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_GetRangeCurrent()

```
int32_t OH_ArkUI_AccessibilityValue_GetRangeCurrent(ArkUI_AccessibilityValue* value)
```
 描述：

用于获取范围组件的无障碍当前值信息。

起始版本： 18

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 需要获取当前值的范围组件无障碍信息对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 基于范围组件的当前值, 默认为-1; 若函数参数异常，返回-1。 |

#### [h2]OH_ArkUI_AccessibilityValue_SetText()

```
void OH_ArkUI_AccessibilityValue_SetText(ArkUI_AccessibilityValue* value, const char* text)
```
 描述：

设置无障碍文本描述信息。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 无障碍信息对象指针。 |
| const char* text | 组件的文本描述信息, 默认为空字符串。 |

#### [h2]OH_ArkUI_AccessibilityValue_GetText()

```
const char* OH_ArkUI_AccessibilityValue_GetText(ArkUI_AccessibilityValue* value)
```
 描述：

获取无障碍文本描述信息。

起始版本： 12

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_AccessibilityValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-accessibilityvalue)* value | 无障碍信息对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| const char* | 组件的文本描述信息, 默认为空字符串; 若函数参数异常，返回空指针。 |

#### [h2]OH_ArkUI_CustomProperty_Destroy()

```
void OH_ArkUI_CustomProperty_Destroy(ArkUI_CustomProperty* handle)
```
 描述：

销毁[ArkUI_CustomProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-customproperty)实例。

起始版本： 14

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_CustomProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-customproperty)* handle | 要销毁的实例。 |

#### [h2]OH_ArkUI_CustomProperty_GetStringValue()

```
const char* OH_ArkUI_CustomProperty_GetStringValue(ArkUI_CustomProperty* handle)
```
 描述：

获取自定义属性对象的value信息。

起始版本： 14

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_CustomProperty](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-customproperty)* handle | 自定义属性对象指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| const char* | 自定义属性对象的value信息。 |

#### [h2]OH_ArkUI_HostWindowInfo_GetName()

```
const char* OH_ArkUI_HostWindowInfo_GetName(ArkUI_HostWindowInfo* info)
```
 描述：

获取[ArkUI_HostWindowInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-hostwindowinfo)对象中的窗口名称。

起始版本： 15

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_HostWindowInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-hostwindowinfo)* info | HostWindowInfo对象。 |

返回：

| 类型 | 说明 |
| --- | --- |
| const char* | [ArkUI_HostWindowInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-hostwindowinfo)对象中的窗口名称。 |

#### [h2]OH_ArkUI_HostWindowInfo_Destroy()

```
void OH_ArkUI_HostWindowInfo_Destroy(ArkUI_HostWindowInfo* info)
```
 描述：

销毁[ArkUI_HostWindowInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-hostwindowinfo)对象。

起始版本： 15

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_HostWindowInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-hostwindowinfo)* info | 要销毁的[ArkUI_HostWindowInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-hostwindowinfo)对象。 |

#### [h2]OH_ArkUI_ActiveChildrenInfo_Destroy()

```
void OH_ArkUI_ActiveChildrenInfo_Destroy(ArkUI_ActiveChildrenInfo* handle)
```
 描述：

销毁[ArkUI_ActiveChildrenInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo)实例，释放获取活跃子节点信息时分配的资源。

起始版本： 14

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ActiveChildrenInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo)* handle | 要销毁的[ArkUI_ActiveChildrenInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo)实例。 |

#### [h2]OH_ArkUI_ActiveChildrenInfo_GetNodeByIndex()

```
ArkUI_NodeHandle OH_ArkUI_ActiveChildrenInfo_GetNodeByIndex(ArkUI_ActiveChildrenInfo* handle, int32_t index)
```
 描述：

获取[ArkUI_ActiveChildrenInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo)结构体中下标为index的子节点，适用于按下标遍历活跃子节点。

起始版本： 14

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ActiveChildrenInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo)* handle | 要获取信息的[ArkUI_ActiveChildrenInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo)实例。 |
| int32_t index | 子节点的下标。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) | 下标对应的子节点指针，异常时返回nullptr。 |

#### [h2]OH_ArkUI_ActiveChildrenInfo_GetCount()

```
int32_t OH_ArkUI_ActiveChildrenInfo_GetCount(ArkUI_ActiveChildrenInfo* handle)
```
 描述：

获取[ArkUI_ActiveChildrenInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo)结构体内的子节点数量，适用于遍历活跃子节点前确定数量。

起始版本： 14

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_ActiveChildrenInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo)* handle | 要获取信息的[ArkUI_ActiveChildrenInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-activechildreninfo)实例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 子节点数量，默认值0. |

#### [h2]OH_ArkUI_CrossLanguageOption_Create()

```
ArkUI_CrossLanguageOption* OH_ArkUI_CrossLanguageOption_Create(void)
```
 描述：

创建跨语言配置项实例。

起始版本： 15

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_CrossLanguageOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-crosslanguageoption)* | 返回跨语言实例。如果对象返回空指针，则表示创建失败，失败的原因可能是地址空间已满。 |

#### [h2]OH_ArkUI_CrossLanguageOption_Destroy()

```
void OH_ArkUI_CrossLanguageOption_Destroy(ArkUI_CrossLanguageOption* option)
```
 描述：

销毁跨语言配置项实例。

起始版本： 15

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_CrossLanguageOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-crosslanguageoption)* option | 要销毁的跨语言配置项实例。 |

#### [h2]OH_ArkUI_CrossLanguageOption_SetAttributeSettingStatus()

```
void OH_ArkUI_CrossLanguageOption_SetAttributeSettingStatus(ArkUI_CrossLanguageOption* option, bool enabled)
```
 描述：

设置配置项中是否允许跨语言修改属性。

起始版本： 15

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_CrossLanguageOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-crosslanguageoption)* option | 跨语言配置项实例。 |
| bool enabled | 是否允许跨语言修改属性。true表示允许跨语言修改属性，false表示不允许跨语言修改属性，默认值：false。 |

#### [h2]OH_ArkUI_CrossLanguageOption_GetAttributeSettingStatus()

```
bool OH_ArkUI_CrossLanguageOption_GetAttributeSettingStatus(ArkUI_CrossLanguageOption* option)
```
 描述：

获取配置项中是否允许跨语言修改属性。

起始版本： 15

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_CrossLanguageOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-crosslanguageoption)* option | 跨语言配置项实例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| bool | 是否允许跨语言修改属性。true表示允许跨语言修改属性，false表示不允许跨语言修改属性。 |

#### [h2]OH_ArkUI_CrossLanguageOption_SetTreeOperatingStatus()

```
void OH_ArkUI_CrossLanguageOption_SetTreeOperatingStatus(ArkUI_CrossLanguageOption* option, OH_ArkUI_CrossLanguageOperatingStatus status)
```
 描述：

设置跨语言配置项的节点树操作状态。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_CrossLanguageOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-crosslanguageoption)* option | 跨语言配置项实例。 |
| [OH_ArkUI_CrossLanguageOperatingStatus](#oh_arkui_crosslanguageoperatingstatus) status | 需要设置的节点树操作状态。 默认值：OH_ARKUI_TREE_OPERATING_STATUS_UNDEFINED。 |

#### [h2]OH_ArkUI_CrossLanguageOption_GetTreeOperatingStatus()

```
OH_ArkUI_CrossLanguageOperatingStatus OH_ArkUI_CrossLanguageOption_GetTreeOperatingStatus(ArkUI_CrossLanguageOption* option)
```
 描述：

获取跨语言配置项的节点树操作状态。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_CrossLanguageOption](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-crosslanguageoption)* option | 跨语言配置项实例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_CrossLanguageOperatingStatus](#oh_arkui_crosslanguageoperatingstatus) | 跨语言配置项的节点树操作状态。 |

#### [h2]OH_ArkUI_ContentTransitionEffect_Create()

```
ArkUI_ContentTransitionEffect* OH_ArkUI_ContentTransitionEffect_Create(int32_t type)
```
 描述：

创建ContentTransitionEffect属性对象。

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| int32_t type | 指定动效的转场方式。值为0表示无动效转场，值为1时表示淡入淡出动效转场。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ContentTransitionEffect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-contenttransitioneffect)* | 指向ContentTransitionEffect对象的指针。 |

#### [h2]OH_ArkUI_SelectionOptions_Create()

```
ArkUI_SelectionOptions* OH_ArkUI_SelectionOptions_Create()
```
 描述：

创建选择选项。

起始版本： 23

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_SelectionOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-selectionoptions)* | 指向选择选项对象的指针。 |

#### [h2]OH_ArkUI_SelectionOptions_Dispose()

```
void OH_ArkUI_SelectionOptions_Dispose(ArkUI_SelectionOptions* options)
```
 描述：

释放选择选项对象。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_SelectionOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-selectionoptions)* options | 指向待释放的选择选项对象的指针。 |

#### [h2]OH_ArkUI_SelectionOptions_SetMenuPolicy()

```
void OH_ArkUI_SelectionOptions_SetMenuPolicy(ArkUI_SelectionOptions* options, ArkUI_MenuPolicy menuPolicy)
```
 描述：

设置选择选项的菜单弹出策略。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_SelectionOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-selectionoptions)* options | 指向选择选项对象的指针。 |
| [ArkUI_MenuPolicy](#arkui_menupolicy) menuPolicy | 菜单弹出策略。 |

#### [h2]OH_ArkUI_SelectionOptions_GetMenuPolicy()

```
ArkUI_MenuPolicy  OH_ArkUI_SelectionOptions_GetMenuPolicy(ArkUI_SelectionOptions* options)
```
 描述：

获取选择选项的菜单弹出策略。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_SelectionOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-selectionoptions)* options | 指向选择选项对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_MenuPolicy](#arkui_menupolicy) | 菜单弹出策略。 |

#### [h2]OH_ArkUI_TextMenuItem_SetContent()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetContent(ArkUI_TextMenuItem* item, const char* content)
```
 描述

设置文本菜单项标题。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitem)* item | 指向ArkUI_TextMenuItem对象的指针。 |
| const char* content | 文本菜单项标题，默认为空字符串。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItem_GetContent()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetContent(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取文本菜单项标题。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_TextMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitem)* item | 指向ArkUI_TextMenuItem对象的指针。 |
| char* buffer | 缓冲区，由开发者创建分配内存，用于存储文本菜单项标题信息。 |
| int32_t bufferSize | 缓冲区大小。 |
| int32_t* writeLength | 返回值为[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)时表示实际写入缓冲区的长度。 返回值为[ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)时表示字符串完整写入缓冲区所需要的最小长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 缓冲区大小不足。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItem_SetIcon()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetIcon(ArkUI_TextMenuItem* item, const char* icon)
```
 描述

设置文本菜单项图标路径。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitem)* item | 指向ArkUI_TextMenuItem对象的指针。 |
| const char* icon | 文本菜单项图标路径，默认空字符串。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItem_GetIcon()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetIcon(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取文本菜单项图标路径。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_TextMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitem)* item | 指向ArkUI_TextMenuItem对象的指针。 |
| char* buffer | 缓冲区，由开发者创建分配内存，用于存储文本菜单项图标路径信息。 |
| int32_t bufferSize | 缓冲区大小。 |
| int32_t* writeLength | 返回值为[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)时表示实际写入缓冲区的长度。 返回值为[ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)时表示字符串完整写入缓冲区所需要的最小长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 缓冲区大小不足。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItem_SetLabelInfo()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetLabelInfo(ArkUI_TextMenuItem* item, const char* labelInfo)
```
 描述

设置文本菜单项快捷键提示，例如“复制”菜单项的快捷键提示可以设置为“Ctrl+C”。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitem)* item | 指向ArkUI_TextMenuItem对象的指针。 |
| const char* labelInfo | 文本菜单项快捷键提示，默认空字符串。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItem_GetLabelInfo()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetLabelInfo(const ArkUI_TextMenuItem* item, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取文本菜单项快捷键提示，例如“复制”菜单项的快捷键提示一般为“Ctrl+C”。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_TextMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitem)* item | 指向ArkUI_TextMenuItem对象的指针。 |
| char* buffer | 缓冲区，由开发者创建分配内存，用于存储文本菜单项快捷键提示信息。 |
| int32_t bufferSize | 缓冲区大小。 |
| int32_t* writeLength | 返回值为[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)时表示实际写入缓冲区的长度。 返回值为[ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)时表示字符串完整写入缓冲区所需要的最小长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 缓冲区大小不足。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItem_SetId()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_SetId(ArkUI_TextMenuItem* item, int32_t id)
```
 描述

设置文本菜单项id。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitem)* item | 指向ArkUI_TextMenuItem对象的指针。 |
| int32_t id | 文本菜单项id。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItem_GetId()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItem_GetId(const ArkUI_TextMenuItem* item, int32_t* id)
```
 描述

获取文本菜单项id。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| const [ArkUI_TextMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitem)* item | 指向ArkUI_TextMenuItem对象的指针。 |
| int32_t* id | 文本菜单项id。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItemArray_GetSize()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_GetSize(ArkUI_TextMenuItemArray* items, int32_t* size)
```
 描述

获取文本菜单项数组大小。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextMenuItemArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitemarray)* items | 指向ArkUI_TextMenuItemArray对象的指针。 |
| int32_t* size | 文本菜单项数组大小。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItemArray_GetItem()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_GetItem(ArkUI_TextMenuItemArray* items, int32_t index, ArkUI_TextMenuItem** item)
```
 描述

获取文本菜单项数组中指定索引位置的文本菜单项。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextMenuItemArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitemarray)* items | 指向ArkUI_TextMenuItemArray对象的指针。 |
| int32_t index | 指定索引位置。 |
| [ArkUI_TextMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitem)** item | 指向ArkUI_TextMenuItem对象的二级指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItemArray_Insert()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Insert(ArkUI_TextMenuItemArray* items, ArkUI_TextMenuItem* item, int32_t index)
```
 描述

在文本菜单项数组中指定索引位置插入一个文本菜单项。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextMenuItemArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitemarray)* items | 指向ArkUI_TextMenuItemArray对象的指针。 |
| [ArkUI_TextMenuItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitem)* item | 指向ArkUI_TextMenuItem对象的指针。 |
| int32_t index | 要插入文本菜单项的索引位置。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItemArray_Erase()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Erase(ArkUI_TextMenuItemArray* items, int32_t index)
```
 描述

删除文本菜单项数组中指定索引位置的文本菜单项。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextMenuItemArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitemarray)* items | 指向ArkUI_TextMenuItemArray对象的指针。 |
| int32_t index | 要删除的文本菜单项索引位置。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextMenuItemArray_Clear()

```
ArkUI_ErrorCode OH_ArkUI_TextMenuItemArray_Clear(ArkUI_TextMenuItemArray* items)
```
 描述

清除文本菜单项数组中所有的文本菜单项。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextMenuItemArray](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textmenuitemarray)* items | 指向ArkUI_TextMenuItemArray对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextEditMenuOptions_RegisterOnCreateMenuCallback()

```
ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnCreateMenuCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextCreateMenuCallback cb)
```
 描述

注册文本菜单创建事件回调函数。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextEditMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-texteditmenuoptions)* editMenuOptions | 指向ArkUI_TextEditMenuOptions对象的指针。 |
| void* userData | 用户自定义数据。 |
| [ArkUI_TextCreateMenuCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textcreatemenucallback) cb | 文本菜单创建事件回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextEditMenuOptions_RegisterOnPrepareMenuCallback()

```
ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnPrepareMenuCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextPrepareMenuCallback cb)
```
 描述

注册文本菜单准备事件回调函数。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextEditMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-texteditmenuoptions)* editMenuOptions | 指向ArkUI_TextEditMenuOptions对象的指针。 |
| void* userData | 用户自定义数据。 |
| [ArkUI_TextPrepareMenuCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textpreparemenucallback) cb | 文本菜单准备事件回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextEditMenuOptions_RegisterOnMenuItemClickCallback()

```
ArkUI_ErrorCode OH_ArkUI_TextEditMenuOptions_RegisterOnMenuItemClickCallback(ArkUI_TextEditMenuOptions* editMenuOptions, void* userData, ArkUI_TextMenuItemClickCallback cb)
```
 描述

注册文本菜单项点击事件回调函数。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextEditMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-texteditmenuoptions)* editMenuOptions | 指向ArkUI_TextEditMenuOptions对象的指针。 |
| void* userData | 用户自定义数据。 |
| [ArkUI_TextMenuItemClickCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textmenuitemclickcallback) cb | 文本菜单项点击事件回调函数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextSelectionMenuOptions_SetSpanType()

```
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetSpanType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextSpanType textSpanType)
```
 描述

设置自定义文本选择菜单的文本识别类型。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselectionmenuoptions)* selectionMenuOptions | 指向ArkUI_TextSelectionMenuOptions对象的指针。 |
| [ArkUI_TextSpanType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textspantype) textSpanType | 自定义文本选择菜单的文本识别类型。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextSelectionMenuOptions_GetSpanType()

```
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetSpanType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextSpanType* spanType)
```
 描述

获取自定义文本选择菜单的文本识别类型。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselectionmenuoptions)* selectionMenuOptions | 指向ArkUI_TextSelectionMenuOptions对象的指针。 |
| [ArkUI_TextSpanType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textspantype)* spanType | 自定义文本选择菜单的文本识别类型。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextSelectionMenuOptions_SetContentNode()

```
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetContentNode(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_NodeHandle node)
```
 描述

设置自定义文本选择菜单的内容节点。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselectionmenuoptions)* selectionMenuOptions | 指向ArkUI_TextSelectionMenuOptions对象的指针。 |
| [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node | 自定义文本选择菜单的内容节点。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextSelectionMenuOptions_GetContentNode()

```
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetContentNode(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_NodeHandle* node)
```
 描述

获取自定义文本选择菜单的内容节点。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselectionmenuoptions)* selectionMenuOptions | 指向ArkUI_TextSelectionMenuOptions对象的指针。 |
| [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h)* node | 自定义文本选择菜单的内容节点。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextSelectionMenuOptions_SetResponseType()

```
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_SetResponseType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextResponseType responseType)
```
 描述

设置自定义文本选择菜单的响应类型。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselectionmenuoptions)* selectionMenuOptions | 指向ArkUI_TextSelectionMenuOptions对象的指针。 |
| [ArkUI_TextResponseType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textresponsetype) responseType | 自定义文本选择菜单的响应类型。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextSelectionMenuOptions_GetResponseType()

```
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_GetResponseType(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, ArkUI_TextResponseType* responseType)
```
 描述

获取自定义文本选择菜单的响应类型。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselectionmenuoptions)* selectionMenuOptions | 指向ArkUI_TextSelectionMenuOptions对象的指针。 |
| [ArkUI_TextResponseType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textresponsetype)* responseType | 自定义文本选择菜单的响应类型。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuShowCallback()

```
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuShowCallback(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, void* userData, void (*callback)(int32_t start, int32_t end, void* userData))
```
 描述

注册自定义文本选择菜单显示事件回调。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselectionmenuoptions)* selectionMenuOptions | 指向ArkUI_TextSelectionMenuOptions对象的指针。 |
| void* userData | 用户自定义数据，取任意值。设置后，会通过callback回调回传回来。 |
| void (*callback)(int32_t start, int32_t end, void* userData) | 自定义文本选择菜单显示事件回调。 start：选中文本的起始位置。 end：选中文本的结束位置。 userData：用户自定义数据，对应OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuShowCallback接口的入参userData。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuHideCallback()

```
ArkUI_ErrorCode OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuHideCallback(ArkUI_TextSelectionMenuOptions* selectionMenuOptions, void* userData, void (*callback)(int32_t start, int32_t end, void* userData))
```
 描述

注册自定义文本选择菜单隐藏事件回调。

起始版本： 22

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_TextSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselectionmenuoptions)* selectionMenuOptions | 指向ArkUI_TextSelectionMenuOptions对象的指针。 |
| void* userData | 用户自定义数据，取任意值。设置后，会通过callback回调回传回来。 |
| void (*callback)(int32_t start, int32_t end, void* userData) | 自定义文本选择菜单隐藏事件回调。 start：选中文本的起始位置。 end：选中文本的结束位置。 userData：用户自定义数据，对应OH_ArkUI_TextSelectionMenuOptions_RegisterOnMenuHideCallback接口的入参userData。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_SelectedDragPreviewStyle_Create()

```
ArkUI_SelectedDragPreviewStyle* OH_ArkUI_SelectedDragPreviewStyle_Create();
```
 描述

创建选中状态下拖拽文本预览样式对象。

起始版本： 23

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_SelectedDragPreviewStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselecteddragpreviewstyle)* | 指向ArkUI_SelectedDragPreviewStyle对象的指针。 |

#### [h2]OH_ArkUI_SelectedDragPreviewStyle_Dispose()

```
void OH_ArkUI_SelectedDragPreviewStyle_Dispose(ArkUI_SelectedDragPreviewStyle* config)
```
 描述

销毁选中状态下拖拽文本预览样式对象。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_SelectedDragPreviewStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselecteddragpreviewstyle)* config | 指向ArkUI_SelectedDragPreviewStyle对象的指针。 |

#### [h2]OH_ArkUI_SelectedDragPreviewStyle_SetColor()

```
void  OH_ArkUI_SelectedDragPreviewStyle_SetColor(ArkUI_SelectedDragPreviewStyle* config, uint32_t color);
```
 描述

设置选中态拖拽文本预览样式的背景色。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_SelectedDragPreviewStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselecteddragpreviewstyle)* config | 指向ArkUI_SelectedDragPreviewStyle对象的指针。 |
| uint32_t color | 选中态拖拽文本预览样式的背景，格式为RGBA。 |

#### [h2]OH_ArkUI_SelectedDragPreviewStyle_GetColor()

```
uint32_t OH_ArkUI_SelectedDragPreviewStyle_GetColor(ArkUI_SelectedDragPreviewStyle* config)
```
 描述

获取选中态拖拽文本预览样式的背景色。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_SelectedDragPreviewStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-textselecteddragpreviewstyle)* config | 指向ArkUI_SelectedDragPreviewStyle对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| uint32_t | 选中态拖拽文本预览样式的背景，格式为RGBA。 |

#### [h2]OH_ArkUI_DecorationStyleOptions_SetTextDecorationType()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetTextDecorationType(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationType type)
```
 描述

设置装饰线样式的装饰类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* options | 指向[OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)对象的指针。 |
| [ArkUI_TextDecorationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdecorationtype) type | 装饰类型[ArkUI_TextDecorationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdecorationtype)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_DecorationStyleOptions_GetTextDecorationType()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetTextDecorationType(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationType* type)
```
 描述

获取装饰线样式的装饰类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* options | 指向[OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)对象的指针。 |
| [ArkUI_TextDecorationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdecorationtype)* type | 装饰类型[ArkUI_TextDecorationType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdecorationtype)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_DecorationStyleOptions_SetColor()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetColor(OH_ArkUI_DecorationStyleOptions* options, uint32_t color)
```
 描述

设置装饰线的颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* options | 指向[OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)对象的指针。 |
| uint32_t color | 装饰线的颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_DecorationStyleOptions_GetColor()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetColor(OH_ArkUI_DecorationStyleOptions* options, uint32_t* color)
```
 描述

获取装饰线的颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* options | 指向[OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)对象的指针。 |
| uint32_t* color | 装饰线的颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_DecorationStyleOptions_SetTextDecorationStyle()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetTextDecorationStyle(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationStyle style)
```
 描述

设置装饰线的样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* options | 指向[OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)对象的指针。 |
| [ArkUI_TextDecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdecorationstyle) style | 装饰线的样式[ArkUI_TextDecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdecorationstyle)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_DecorationStyleOptions_GetTextDecorationStyle()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetTextDecorationStyle(OH_ArkUI_DecorationStyleOptions* options, ArkUI_TextDecorationStyle* style)
```
 描述

获取装饰线的样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* options | 指向[OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)对象的指针。 |
| [ArkUI_TextDecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdecorationstyle)* style | 装饰线的样式[ArkUI_TextDecorationStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdecorationstyle)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_DecorationStyleOptions_SetThicknessScale()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_SetThicknessScale(OH_ArkUI_DecorationStyleOptions* options, float thicknessScale)
```
 描述

设置装饰线的粗细缩放比例。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* options | 指向[OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)对象的指针。 |
| float thicknessScale | 装饰线的粗细缩放比例。取值范围为[0, +∞)。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_DecorationStyleOptions_GetThicknessScale()

```
ArkUI_ErrorCode OH_ArkUI_DecorationStyleOptions_GetThicknessScale(OH_ArkUI_DecorationStyleOptions* options, float* thicknessScale)
```
 描述

获取装饰线的粗细缩放比例。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* options | 指向[OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)对象的指针。 |
| float* thicknessScale | 装饰线的粗细缩放比例。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextDataDetectorConfig_SetTypes()

```
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetTypes(OH_ArkUI_TextDataDetectorConfig* config, const ArkUI_TextDataDetectorType* types, int32_t length)
```
 描述

设置文本实体识别配置的类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)* config | 指向[OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)对象的指针。 |
| [const ArkUI_TextDataDetectorType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_textdatadetectortype)* types | 文本实体识别配置的类型，取值为[ArkUI_TextDataDetectorType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_textdatadetectortype)枚举。 |
| int32_t length | 类型的数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextDataDetectorConfig_GetTypes()

```
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetTypes(OH_ArkUI_TextDataDetectorConfig* config, ArkUI_TextDataDetectorType* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取文本实体识别配置的类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)* config | 指向[OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)对象的指针。 |
| [ArkUI_TextDataDetectorType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_textdatadetectortype)* buffer | 指向类型数组的缓冲区指针。 |
| int32_t bufferSize | 开发者为类型预留的缓冲区最多可以写入的类型的数量。 |
| int32_t* writeLength | 实际写入缓冲区的类型的数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若bufferSize小于writeLength，返回[ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextDataDetectorConfig_RegisterOnDetectResultUpdateCallback()

```
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_RegisterOnDetectResultUpdateCallback(OH_ArkUI_TextDataDetectorConfig* config, void* userData, void (*callback)(const char* result, int32_t length, void* userData))
```
 描述

设置文本实体识别结果更新回调。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)* config | 指向[OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)对象的指针。 |
| void* userData | 用户数据。 |
| void (*callback)(const char* result, int32_t length, void* userData) | 识别结果更新回调。result 识别到的文本实体内容。length 选中文本的结束位置。userData 用户自定义数据，对应OH_ArkUI_TextDataDetectorConfig_RegisterOnDetectResultUpdateCallback接口的入参userData。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextDataDetectorConfig_SetColor()

```
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetColor(OH_ArkUI_TextDataDetectorConfig* config, uint32_t color)
```
 描述

设置识别内容的颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)* config | 指向[OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)对象的指针。 |
| uint32_t color | 识别内容的颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextDataDetectorConfig_GetColor()

```
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetColor(OH_ArkUI_TextDataDetectorConfig* config, uint32_t* color)
```
 描述

获取识别内容的颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)* config | 指向[OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)对象的指针。 |
| uint32_t* color | 识别内容的颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextDataDetectorConfig_SetDecorationStyleOptions()

```
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetDecorationStyleOptions(OH_ArkUI_TextDataDetectorConfig* config, OH_ArkUI_DecorationStyleOptions* decoration)
```
 描述

设置识别内容的装饰样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)* config | 指向[OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)对象的指针。 |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* decoration | 识别内容的装饰样式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextDataDetectorConfig_GetDecorationStyleOptions()

```
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetDecorationStyleOptions(OH_ArkUI_TextDataDetectorConfig* config, OH_ArkUI_DecorationStyleOptions* decoration)
```
 描述

获取识别内容的装饰样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)* config | 指向[OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)对象的指针。 |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* decoration | 识别内容的装饰样式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextDataDetectorConfig_SetEnablePreviewMenu()

```
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_SetEnablePreviewMenu(OH_ArkUI_TextDataDetectorConfig* config, bool enablePreviewMenu)
```
 描述

设置长按识别内容时是否显示预览菜单。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)* config | 指向[OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)对象的指针。 |
| bool enablePreviewMenu | 长按识别内容时是否显示预览菜单。true表示启用预览菜单，false表示不启用预览菜单。默认值为false。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextDataDetectorConfig_GetEnablePreviewMenu()

```
ArkUI_ErrorCode OH_ArkUI_TextDataDetectorConfig_GetEnablePreviewMenu(OH_ArkUI_TextDataDetectorConfig* config, bool* enablePreviewMenu)
```
 描述

获取长按识别内容时是否显示预览菜单。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)* config | 指向[OH_ArkUI_TextDataDetectorConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textdatadetectorconfig)对象的指针。 |
| bool* enablePreviewMenu | 长按识别内容时是否显示预览菜单。true表示显示预览菜单，false表示不显示预览菜单。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_SetValue()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetValue(OH_ArkUI_TextEditorPlaceholderOptions* options, const char* value)
```
 描述

设置无输入时的提示文本选项的提示文字。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| const char* value | 提示文字。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_GetValue()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetValue(OH_ArkUI_TextEditorPlaceholderOptions* options, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取无输入时的提示文本选项的提示文字。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| char* buffer | 提示文字写入内存的缓冲区，内存空间需由开发者分配。 |
| int32_t bufferSize | 缓冲区最多可写入的字符的数量。 |
| int32_t* writeLength | 实际表示写入缓冲区的字符的数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 错误码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若节点、缓冲区或writeLength为空，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若bufferSize小于writeLength，返回[ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_SetFontSize()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontSize(OH_ArkUI_TextEditorPlaceholderOptions* options, float fontSize)
```
 描述

设置无输入时的提示文本选项的字体大小。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| float fontSize | 字体大小，单位为fp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_GetFontSize()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontSize(OH_ArkUI_TextEditorPlaceholderOptions* options, float* fontSize)
```
 描述

获取无输入时的提示文本选项的字体大小。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| float* fontSize | 字体大小，单位为fp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_SetFontWeight()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontWeight(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t fontWeight)
```
 描述

设置无输入时的提示文本选项的字体粗细。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| uint32_t fontWeight | 字体粗细。取值为[ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight)中的枚举值，默认值为ARKUI_FONT_WEIGHT_W400。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_GetFontWeight()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontWeight(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t* fontWeight)
```
 描述

获取无输入时的提示文本选项的字体粗细。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| uint32_t* fontWeight | 字体粗细。取值为[ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight)中的枚举值，默认值为ARKUI_FONT_WEIGHT_W400。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_SetFontFamily()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontFamily(OH_ArkUI_TextEditorPlaceholderOptions* options, const char* fontFamily)
```
 描述

设置无输入时的提示文本选项的字体家族。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| const char* fontFamily | 字体家族。存放待设置的字体名称，不同字体名称通过逗号拼接。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_GetFontFamily()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontFamily(OH_ArkUI_TextEditorPlaceholderOptions* options, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取无输入时的提示文本选项的字体家族。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| char* buffer | 字体家族写入内存的缓冲区，内存空间需由开发者分配。 |
| int32_t bufferSize | 缓冲区最多可写入的字符的数量。 |
| int32_t* writeLength | 实际写入缓冲区的字符的数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 错误码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若节点、缓冲区或writeLength为空，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若bufferSize小于writeLength，返回[ARKUI_ERROR_CODE_BUFFER_SIZE_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_SetFontStyle()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontStyle(OH_ArkUI_TextEditorPlaceholderOptions* options, ArkUI_FontStyle fontStyle)
```
 描述

设置无输入时的提示文本选项的字体样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| [ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontstyle) fontStyle | 字体样式。取值为[ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontstyle)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_GetFontStyle()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontStyle(OH_ArkUI_TextEditorPlaceholderOptions* options, ArkUI_FontStyle* fontStyle)
```
 描述

获取无输入时的提示文本选项的字体样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| [ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontstyle)* fontStyle | 字体样式。取值为[ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontstyle)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_SetFontColor()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_SetFontColor(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t fontColor)
```
 描述

设置无输入时的提示文本选项的字体颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| uint32_t fontColor | 字体颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorPlaceholderOptions_GetFontColor()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorPlaceholderOptions_GetFontColor(OH_ArkUI_TextEditorPlaceholderOptions* options, uint32_t* fontColor)
```
 描述

获取无输入时的提示文本选项的字体颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)* options | 指向[OH_ArkUI_TextEditorPlaceholderOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorplaceholderoptions)对象的指针。 |
| uint32_t* fontColor | 字体颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_SetCaretOffset()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetCaretOffset(OH_ArkUI_TextEditorStyledStringController* controller, int32_t caretOffset)
```
 描述

通过属性字符串控制器设置光标偏移量。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| int32_t caretOffset | 索引位置。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_GetCaretOffset()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetCaretOffset(OH_ArkUI_TextEditorStyledStringController* controller, int32_t* caretOffset)
```
 描述

通过属性字符串控制器获取光标索引位置。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| int32_t* caretOffset | 索引位置。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_SetSelection()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetSelection(OH_ArkUI_TextEditorStyledStringController* controller, uint32_t start, uint32_t end, ArkUI_MenuPolicy menuPolicy)
```
 描述

通过属性字符串控制器设置选中区域。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| uint32_t start | 选中区域的起始位置。 |
| uint32_t end | 选中区域的结束位置。 |
| [ArkUI_MenuPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_menupolicy) menuPolicy | 选区内菜单弹出的策略。取值为[ArkUI_MenuPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h#arkui_menupolicy)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_IsEditing()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_IsEditing(OH_ArkUI_TextEditorStyledStringController* controller, bool* isEditing)
```
 描述

通过属性字符串控制器获取文本编辑器的编辑状态。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| bool* isEditing | 编辑状态。true表示是编辑态，false表示不是编辑态。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_StopEditing()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_StopEditing(OH_ArkUI_TextEditorStyledStringController* controller)
```
 描述

通过属性字符串控制器退出文本编辑器的编辑状态。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_GetPreviewText()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetPreviewText(OH_ArkUI_TextEditorStyledStringController* controller, uint32_t* offset, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

通过属性字符串控制器获取预上屏文本内容。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| uint32_t* offset | 预上屏文本位置。 |
| char* buffer | 预上屏文本内容写入内存的缓冲区，内存空间需由开发者分配。 |
| int32_t bufferSize | 缓冲区最多可写入的字符的数量。 |
| int32_t* writeLength | 实际写入缓冲区的字符的数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_GetCaretRect()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetCaretRect(OH_ArkUI_TextEditorStyledStringController* controller, ArkUI_Rect* rect)
```
 描述

通过属性字符串控制器获取光标矩形区域。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| [ArkUI_Rect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rect)* rect | 光标区域信息。取值为[ArkUI_Rect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-rect)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_DeleteBackward()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_DeleteBackward(OH_ArkUI_TextEditorStyledStringController* controller)
```
 描述

通过属性字符串控制器删除字符。没有内容被选中时，删除当前光标位置前的1个字符。有内容被选中时，删除选中内容。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_SetTextAlign()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextAlignment align)
```
 描述

设置段落样式中的文本对齐方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [ArkUI_TextAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textalignment) align | 文本对齐方式。取值为[ArkUI_TextAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textalignment)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_GetTextAlign()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextAlignment* align)
```
 描述

获取段落样式中的文本对齐方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [ArkUI_TextAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textalignment)* align | 文本对齐方式。取值为[ArkUI_TextAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textalignment)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginPixelMap()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginPixelMap(OH_ArkUI_TextEditorParagraphStyle* style, struct OH_PixelmapNative* pixelmap)
```
 描述

设置段落样式中段落缩进的像素图。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [struct OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmapnative)* pixelmap | 段落缩进的像素图。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginPixelMap()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginPixelMap(OH_ArkUI_TextEditorParagraphStyle* style, struct OH_PixelmapNative** pixelmap)
```
 描述

获取段落样式中段落缩进的像素图。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [struct OH_PixelmapNative](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-nativemodule-oh-pixelmapnative)** pixelmap | 段落缩进的像素图。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginWidth()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginWidth(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t width)
```
 描述

设置段落样式中段落缩进的宽度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| uint32_t width | 段落缩进的宽度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginWidth()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginWidth(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* width)
```
 描述

获取段落样式中段落缩进的宽度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| uint32_t* width | 段落缩进的宽度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginHeight()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLeadingMarginHeight(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t height)
```
 描述

设置段落样式中段落缩进的高度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| uint32_t height | 段落缩进的高度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginHeight()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLeadingMarginHeight(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* height)
```
 描述

获取段落样式中段落缩进的高度。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| uint32_t* height | 段落缩进的高度，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_SetWordBreak()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetWordBreak(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_WordBreak wordBreak)
```
 描述

设置段落样式的断字方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [ArkUI_WordBreak](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_wordbreak) wordBreak | 断字方式。取值为[ArkUI_WordBreak](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_wordbreak)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_GetWordBreak()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetWordBreak(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_WordBreak* wordBreak)
```
 描述

获取段落样式的断字方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [ArkUI_WordBreak](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_wordbreak)* wordBreak | 断字方式。取值为[ArkUI_WordBreak](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_wordbreak)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_SetLineBreakStrategy()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetLineBreakStrategy(OH_ArkUI_TextEditorParagraphStyle* style, OH_ArkUI_LineBreakStrategy lineBreakStrategy)
```
 描述

设置段落样式的换行策略。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [OH_ArkUI_LineBreakStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#oh_arkui_linebreakstrategy) lineBreakStrategy | 换行策略。取值为[OH_ArkUI_LineBreakStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#oh_arkui_linebreakstrategy)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_GetLineBreakStrategy()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetLineBreakStrategy(OH_ArkUI_TextEditorParagraphStyle* style, OH_ArkUI_LineBreakStrategy* lineBreakStrategy)
```
 描述

获取段落样式的换行策略。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [OH_ArkUI_LineBreakStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#oh_arkui_linebreakstrategy)* lineBreakStrategy | 换行策略。取值为[OH_ArkUI_LineBreakStrategy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#oh_arkui_linebreakstrategy)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_SetParagraphSpacing()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetParagraphSpacing(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t paragraphSpacing)
```
 描述

设置段落样式的段落间距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| uint32_t paragraphSpacing | 段落间距，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_GetParagraphSpacing()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetParagraphSpacing(OH_ArkUI_TextEditorParagraphStyle* style, uint32_t* paragraphSpacing)
```
 描述

获取段落样式的段落间距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| uint32_t* paragraphSpacing | 段落间距，单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_SetTextVerticalAlign()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextVerticalAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextVerticalAlignment verticalAlignment)
```
 描述

设置段落样式的文本垂直对齐方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [ArkUI_TextVerticalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textverticalalignment) verticalAlignment | 文本垂直对齐方式。取值为[ArkUI_TextVerticalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textverticalalignment)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_GetTextVerticalAlign()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextVerticalAlign(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextVerticalAlignment* verticalAlignment)
```
 描述

获取段落样式的文本垂直对齐方式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [ArkUI_TextVerticalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textverticalalignment)* verticalAlignment | 文本垂直对齐方式。取值为[ArkUI_TextVerticalAlignment](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textverticalalignment)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_SetTextDirection()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_SetTextDirection(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextDirection textDirection)
```
 描述

设置段落样式的文本方向。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdirection) textDirection | 文本方向。取值为[ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdirection)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorParagraphStyle_GetTextDirection()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorParagraphStyle_GetTextDirection(OH_ArkUI_TextEditorParagraphStyle* style, ArkUI_TextDirection* textDirection)
```
 描述

获取段落样式的文本方向。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 指向[OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)对象的指针。 |
| [ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdirection)* textDirection | 文本方向。取值为[ArkUI_TextDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h#arkui_textdirection)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_SetTypingParagraphStyle()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetTypingParagraphStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorParagraphStyle* style)
```
 描述

通过属性字符串控制器设置预设段落样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| [OH_ArkUI_TextEditorParagraphStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorparagraphstyle)* style | 预设段落样式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetFontColor()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t color)
```
 描述

设置文本样式的字体颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| uint32_t color | 字体颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetFontColor()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t* color)
```
 描述

获取文本样式的字体颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| uint32_t* color | 字体颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetFontSize()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontSize(OH_ArkUI_TextEditorTextStyle* style, float size)
```
 描述

设置文本样式的字体大小。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| float size | 字体大小，单位为fp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetFontSize()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontSize(OH_ArkUI_TextEditorTextStyle* style, float* size)
```
 描述

获取文本样式的字体大小。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| float* size | 字体大小，单位为fp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetFontStyle()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontStyle(OH_ArkUI_TextEditorTextStyle* style, ArkUI_FontStyle fontStyle)
```
 描述

设置文本样式的字体样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| [ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontstyle) fontStyle | 字体样式。取值为[ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontstyle)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetFontStyle()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontStyle(OH_ArkUI_TextEditorTextStyle* style, ArkUI_FontStyle* fontStyle)
```
 描述

获取文本样式的字体样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| [ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontstyle)* fontStyle | 字体样式。取值为[ArkUI_FontStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontstyle)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetFontWeight()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontWeight(OH_ArkUI_TextEditorTextStyle* style, uint32_t fontWeight)
```
 描述

设置文本样式的字体粗细。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| uint32_t fontWeight | 字体粗细。取值为[ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight)中的枚举值，默认值为ARKUI_FONT_WEIGHT_W400。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetFontWeight()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontWeight(OH_ArkUI_TextEditorTextStyle* style, uint32_t* fontWeight)
```
 描述

获取文本样式的字体粗细。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| uint32_t* fontWeight | 字体粗细。取值为[ArkUI_FontWeight](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h#arkui_fontweight)中的枚举值，默认值为ARKUI_FONT_WEIGHT_W400。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetFontFamily()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontFamily(OH_ArkUI_TextEditorTextStyle* style, const char* fontFamily)
```
 描述

设置文本样式的字体家族。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| const char* fontFamily | 字体家族。存放待设置的字体名称，不同字体名称通过逗号拼接。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetFontFamily()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontFamily(OH_ArkUI_TextEditorTextStyle* style, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取文本样式的字体家族。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| char* buffer | 字体家族内容写入内存的缓冲区，内存空间需由开发者分配。 |
| int32_t bufferSize | 缓冲区最多可写入的字符的数量。 |
| int32_t* writeLength | 实际写入缓冲区的字符的数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetDecoration()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetDecoration(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_DecorationStyleOptions* options)
```
 描述

设置文本样式的文本装饰选项。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* options | 指向[OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetDecoration()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetDecoration(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_DecorationStyleOptions* options)
```
 描述

获取文本样式的文本装饰选项。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| [OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)* options | 指向[OH_ArkUI_DecorationStyleOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-decorationstyleoptions)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetTextShadows()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextShadows(OH_ArkUI_TextEditorTextStyle* style, const OH_ArkUI_ShadowOptions** options, int32_t length)
```
 描述

设置文本样式的文本阴影选项。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| [const OH_ArkUI_ShadowOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-shadowoptions)** options | 文本阴影选项。 |
| int32_t length | 文本阴影选项的长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetTextShadows()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextShadows(OH_ArkUI_TextEditorTextStyle* style, OH_ArkUI_ShadowOptions** shadowOptions, uint32_t shadowOptionsSize, uint32_t* writeLength)
```
 描述

获取文本样式的文本阴影选项。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| [OH_ArkUI_ShadowOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-shadowoptions)** shadowOptions | 文本阴影选项。 |
| uint32_t shadowOptionsSize | 阴影选项的缓冲区大小。 |
| uint32_t* writeLength | 文本样式中实际的文本阴影选项数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetLineHeight()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetLineHeight(OH_ArkUI_TextEditorTextStyle* style, int32_t lineHeight)
```
 描述

设置文本样式的文本行高。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| int32_t lineHeight | 文本行高。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetLineHeight()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetLineHeight(OH_ArkUI_TextEditorTextStyle* style, int32_t* lineHeight)
```
 描述

获取文本样式的文本行高。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| int32_t* lineHeight | 文本行高。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetLetterSpacing()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetLetterSpacing(OH_ArkUI_TextEditorTextStyle* style, int32_t letterSpacing)
```
 描述

设置文本样式的字符间距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| int32_t letterSpacing | 字符间距。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetLetterSpacing()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetLetterSpacing(OH_ArkUI_TextEditorTextStyle* style, int32_t* letterSpacing)
```
 描述

获取文本样式的字符间距。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| int32_t* letterSpacing | 字符间距。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetFontFeature()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetFontFeature(OH_ArkUI_TextEditorTextStyle* style, const char* fontFeature)
```
 描述

设置文本样式的文字特性效果，比如数字等宽的特性。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| const char* fontFeature | 字体特性。存放待设置的字体特性，多个特性通过逗号拼接。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetFontFeature()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetFontFeature(OH_ArkUI_TextEditorTextStyle* style, char* buffer, int32_t bufferSize, int32_t* writeLength)
```
 描述

获取文本样式的文字特性效果，比如数字等宽的特性。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| char* buffer | 字体特性内容写入内存的缓冲区，内存空间需由开发者分配。 |
| int32_t bufferSize | 缓冲区最多可写入的字符的数量。 |
| int32_t* writeLength | 实际表示写入缓冲区的字符的数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetHalfLeading()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetHalfLeading(OH_ArkUI_TextEditorTextStyle* style, bool halfLeading)
```
 描述

设置文本样式中文本是否将行间距平分至行的顶部与底部。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| bool halfLeading | 文本是否将行间距平分至行的顶部与底部。 true表示将行间距平分至行的顶部与底部，false表示不将行间距平分至行的顶部与底部。默认值为false。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetHalfLeading()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetHalfLeading(OH_ArkUI_TextEditorTextStyle* style, bool* halfLeading)
```
 描述

获取文本样式中文本是否将行间距平分至行的顶部与底部。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| bool* halfLeading | 文本是否将行间距平分至行的顶部与底部。 true表示将行间距平分至行的顶部与底部，false表示不将行间距平分至行的顶部与底部。默认值为false。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetTextBackgroundColor()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextBackgroundColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t color)
```
 描述

设置文本样式中的文本背景颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| uint32_t color | 文本背景颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetTextBackgroundColor()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextBackgroundColor(OH_ArkUI_TextEditorTextStyle* style, uint32_t* color)
```
 描述

获取文本样式中的文本背景颜色。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| uint32_t* color | 文本背景颜色，0xARGB格式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_SetTextBackgroundRadius()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_SetTextBackgroundRadius(OH_ArkUI_TextEditorTextStyle* style, float topLeft, float topRight, float bottomLeft, float bottomRight)
```
 描述

设置文本样式中文本背景的圆角半径。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| float topLeft | 文本背景左上角的圆角半径。单位为vp。 |
| float topRight | 文本背景右上角的圆角半径。单位为vp。 |
| float bottomLeft | 文本背景左下角的圆角半径。单位为vp。 |
| float bottomRight | 文本背景右下角的圆角半径。单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorTextStyle_GetTextBackgroundRadius()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorTextStyle_GetTextBackgroundRadius(OH_ArkUI_TextEditorTextStyle* style, float* topLeft, float* topRight, float* bottomLeft, float* bottomRight)
```
 描述

获取文本样式中文本背景的圆角半径。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | TextEditor组件文本样式。 |
| float* topLeft | 文本背景左上角的圆角半径。单位为vp。 |
| float* topRight | 文本背景右上角的圆角半径。单位为vp。 |
| float* bottomLeft | 文本背景左下角的圆角半径。单位为vp。 |
| float* bottomRight | 文本背景右下角的圆角半径。单位为vp。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_SetTypingStyle()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetTypingStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorTextStyle* style)
```
 描述

通过属性字符串控制器设置预设输入样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | 预设输入样式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_GetTypingStyle()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetTypingStyle(OH_ArkUI_TextEditorStyledStringController* controller, OH_ArkUI_TextEditorTextStyle* style)
```
 描述

通过属性字符串控制器获取预设输入样式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| [OH_ArkUI_TextEditorTextStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditortextstyle)* style | 预设输入样式。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_SetSpanType()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetSpanType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorSpanType textEditorSpanType)
```
 描述

设置文本编辑器中文本选择菜单的span的类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| [OH_ArkUI_TextEditorSpanType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorspantype) textEditorSpanType | span的类型。取值为[OH_ArkUI_TextEditorSpanType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorspantype)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_GetSpanType()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetSpanType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorSpanType* textEditorSpanType)
```
 描述

获取文本编辑器中文本选择菜单的span的类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| [OH_ArkUI_TextEditorSpanType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorspantype)* textEditorSpanType | span的类型。取值为[OH_ArkUI_TextEditorSpanType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorspantype)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_SetContentNode()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetContentNode(OH_ArkUI_TextEditorSelectionMenuOptions* options, ArkUI_NodeHandle node)
```
 描述

设置文本编辑器中文本选择菜单的内容节点。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h) node | 内容节点。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_GetContentNode()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetContentNode(OH_ArkUI_TextEditorSelectionMenuOptions* options, ArkUI_NodeHandle* node)
```
 描述

获取文本编辑器中文本选择菜单的内容节点。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| [ArkUI_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h)* node | 内容节点。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_SetResponseType()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetResponseType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorResponseType responseType)
```
 描述

设置文本编辑器中文本选择菜单的响应类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| [OH_ArkUI_TextEditorResponseType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorresponsetype) responseType | 响应类型。取值为[OH_ArkUI_TextEditorResponseType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorresponsetype)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_GetResponseType()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetResponseType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextEditorResponseType* responseType)
```
 描述

获取文本编辑器中文本选择菜单的响应类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| [OH_ArkUI_TextEditorResponseType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorresponsetype)* responseType | 响应类型。取值为[OH_ArkUI_TextEditorResponseType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_texteditorresponsetype)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_SetMenuType()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetMenuType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextMenuType menuType)
```
 描述

设置文本编辑器中文本选择菜单的类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| [OH_ArkUI_TextMenuType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_textmenutype) menuType | 菜单类型。取值为[OH_ArkUI_TextMenuType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_textmenutype)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_GetMenuType()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetMenuType(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_TextMenuType* menuType)
```
 描述

获取文本编辑器中文本选择菜单的类型。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| [OH_ArkUI_TextMenuType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_textmenutype)* menuType | 菜单类型。取值为[OH_ArkUI_TextMenuType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_textmenutype)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuShowCallback()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuShowCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(int32_t start, int32_t end, void* callbackUserData))
```
 描述

设置文本选择菜单显示时触发的事件。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| void* userData | 用户数据。 |
| void (*callback)(int32_t start, int32_t end, void* callbackUserData) | 菜单显示的回调函数。start 选中内容的起始偏移量。end 选中内容的结束偏移量。callbackUserData 用户数据。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuHideCallback()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuHideCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(int32_t start, int32_t end, void* callbackUserData))
```
 描述

设置文本选择菜单隐藏时触发的事件。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| void* userData | 用户数据。 |
| void (*callback)(int32_t start, int32_t end, void* callbackUserData) | 菜单隐藏的回调函数。start 选中内容的起始偏移量。end 选中内容的结束偏移量。callbackUserData 用户数据。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuAppearCallback()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuAppearCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(int32_t start, int32_t end, void* callbackUserData))
```
 描述

设置文本选择菜单出现时触发的事件。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| void* userData | 用户数据。 |
| void (*callback)(int32_t start, int32_t end, void* callbackUserData) | 菜单出现的回调函数。start 选中内容的起始偏移量。end 选中内容的结束偏移量。callbackUserData 用户数据。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuDisappearCallback()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_RegisterOnMenuDisappearCallback(OH_ArkUI_TextEditorSelectionMenuOptions* options, void* userData, void (*callback)(void* callbackUserData))
```
 描述

设置文本选择菜单消失时触发的事件。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| void* userData | 用户数据。 |
| void (*callback)(void* callbackUserData) | 菜单消失的回调函数。callbackUserData 用户数据。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_SetHapticFeedbackMode()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_SetHapticFeedbackMode(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_HapticFeedbackMode mode)
```
 描述

设置文本编辑器中文本选择菜单的触觉反馈模式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| [OH_ArkUI_HapticFeedbackMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_hapticfeedbackmode) mode | 触觉反馈模式。取值为[OH_ArkUI_HapticFeedbackMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_hapticfeedbackmode)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorSelectionMenuOptions_GetHapticFeedbackMode()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorSelectionMenuOptions_GetHapticFeedbackMode(OH_ArkUI_TextEditorSelectionMenuOptions* options, OH_ArkUI_HapticFeedbackMode* mode)
```
 描述

获取文本编辑器中文本选择菜单的触觉反馈模式。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)* options | 指向[OH_ArkUI_TextEditorSelectionMenuOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorselectionmenuoptions)对象的指针。 |
| [OH_ArkUI_HapticFeedbackMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_hapticfeedbackmode)* mode | 触觉反馈模式。取值为[OH_ArkUI_HapticFeedbackMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h#oh_arkui_hapticfeedbackmode)中的枚举。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_CloseSelectionMenu()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_CloseSelectionMenu(OH_ArkUI_TextEditorStyledStringController* controller)
```
 描述

关闭文本编辑器属性字符串控制器的文本选择菜单。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_GetSelection()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetSelection(const OH_ArkUI_TextEditorStyledStringController* controller, uint32_t* start, uint32_t* end)
```
 描述

通过属性字符串控制器获取选中区域。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| uint32_t* start | 选中区域的起始位置。 |
| uint32_t* end | 选中区域的结束位置。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_SetStyledString()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetStyledString(const OH_ArkUI_TextEditorStyledStringController* controller, const ArkUI_StyledString_Descriptor* descriptor)
```
 描述

通过属性字符串控制器设置显示的属性字符串。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_GetStyledString()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_GetStyledString(const OH_ArkUI_TextEditorStyledStringController* controller, ArkUI_StyledString_Descriptor* descriptor)
```
 描述

通过属性字符串控制器获取显示的属性字符串。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_SetStyledPlaceholder()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_SetStyledPlaceholder(const OH_ArkUI_TextEditorStyledStringController* controller, const ArkUI_StyledString_Descriptor* descriptor)
```
 描述

通过属性字符串控制器设置属性字符串样式的提示文本。

起始版本： 24

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| const [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_TextEditorStyledStringController_ScrollToVisible()

```
ArkUI_ErrorCode OH_ArkUI_TextEditorStyledStringController_ScrollToVisible(const OH_ArkUI_TextEditorStyledStringController* controller, int32_t start, int32_t end)
```
 描述

通过属性字符串控制器使指定起始索引至结束索引范围内的内容滚动至可视区域。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)* controller | 指向[OH_ArkUI_TextEditorStyledStringController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-texteditorstyledstringcontroller)对象的指针。 |
| int32_t start | 起始内容索引值。 起始索引应小于等于结束索引，否则接口调用无效。取值范围[0, TextEditor组件内容总长度]，起始索引小于0视为0，大于总长度视为总长度。 |
| int32_t end | 结束内容索引值。 结束索引应大于等于起始索引，否则接口调用无效。取值范围[0, TextEditor组件内容总长度]，结束索引小于0视为0，大于总长度视为总长度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果码。 若操作成功，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 若参数异常，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_PickerIndicatorStyle_ConfigureBackground()

```
ArkUI_ErrorCode OH_ArkUI_PickerIndicatorStyle_ConfigureBackground(ArkUI_PickerIndicatorStyle* style, ArkUI_PickerIndicatorBackground* background)
```
 描述

设置背景样式参数，此接口仅当选择器选中项样式枚举类型为[ARKUI_PICKER_INDICATOR_BACKGROUND](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h#arkui_pickerindicatortype)时生效。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_PickerIndicatorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-pickerindicatorstyle)* style | 选中项指示器样式[ArkUI_PickerIndicatorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-pickerindicatorstyle)的实例。 |
| [ArkUI_PickerIndicatorBackground](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-pickerindicatorbackground)* background | 背景样式参数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_PickerIndicatorStyle_ConfigureDivider()

```
ArkUI_ErrorCode OH_ArkUI_PickerIndicatorStyle_ConfigureDivider(ArkUI_PickerIndicatorStyle* style, ArkUI_PickerIndicatorDivider* divider)
```
 描述

设置分割线样式参数，此接口仅当选择器选中项样式枚举类型为[ARKUI_PICKER_INDICATOR_DIVIDER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h#arkui_pickerindicatortype)时生效。

起始版本： 23

参数：

| 参数项 | 描述 |
| --- | --- |
| [ArkUI_PickerIndicatorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-pickerindicatorstyle)* style | 选中项指示器样式[ArkUI_PickerIndicatorStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-pickerindicatorstyle)的实例。 |
| [ArkUI_PickerIndicatorDivider](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-pickerindicatordivider)* divider | 分割线样式参数。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_TextController_SetStyledString()

```
ArkUI_ErrorCode OH_ArkUI_TextController_SetStyledString(OH_ArkUI_TextController* controller, ArkUI_StyledString_Descriptor* descriptor)
```
 描述

设置文本组件的属性字符串。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_TextController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textcontroller)* controller | 指向[OH_ArkUI_TextController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-textcontroller)对象的指针。 |
| [ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)* descriptor | 指向[ArkUI_StyledString_Descriptor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-styledstring-descriptor)对象的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 返回结果。 [ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 成功。 [ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) 函数参数异常。 |

#### [h2]OH_ArkUI_LinearGradientOptions_Create()

```
OH_ArkUI_LinearGradientOptions* OH_ArkUI_LinearGradientOptions_Create()
```
 描述

创建线性渐变效果选项对象。

起始版本： 26.0.0

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_LinearGradientOptions*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions) | 指向[OH_ArkUI_LinearGradientOptions*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)的指针。 |

#### [h2]OH_ArkUI_LinearGradientOptions_Destroy()

```
void OH_ArkUI_LinearGradientOptions_Destroy(OH_ArkUI_LinearGradientOptions* options)
```
 描述

销毁线性渐变效果选项对象。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)* options | 指向[OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)对象的指针。 |

#### [h2]OH_ArkUI_LinearGradientOptions_SetAngle()

```
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetAngle(OH_ArkUI_LinearGradientOptions* options, float angle)
```
 描述

设置线性渐变效果选项的角度。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)* options | 指向[OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)对象的指针。 |
| float angle | 线性渐变效果选项的角度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_LinearGradientOptions_GetAngle()

```
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetAngle(const OH_ArkUI_LinearGradientOptions* options, float* angle)
```
 描述

获取线性渐变效果选项的角度。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)* options | 指向[OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)对象的指针。 |
| float* angle | 线性渐变效果选项的角度。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_LinearGradientOptions_SetDirection()

```
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetDirection(OH_ArkUI_LinearGradientOptions* options, ArkUI_LinearGradientDirection direction)
```
 描述

设置线性渐变选项的方向。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)* options | 指向[OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)对象的指针。 |
| [ArkUI_LinearGradientDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-visual-h#arkui_lineargradientdirection) direction | 线性渐变选项的方向。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_LinearGradientOptions_GetDirection()

```
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetDirection(const OH_ArkUI_LinearGradientOptions* options, ArkUI_LinearGradientDirection* direction)
```
 描述

获取线性渐变选项的方向。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| const [OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)* options | 指向[OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)对象的指针。 |
| [ArkUI_LinearGradientDirection](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-visual-h#arkui_lineargradientdirection)* direction | 线性渐变选项的方向。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_LinearGradientOptions_SetRepeating()

```
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetRepeating(OH_ArkUI_LinearGradientOptions* options, bool repeating)
```
 描述

设置颜色是否在线性渐变选项中重复。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)* options | 指向[OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)对象的指针。 |
| bool repeating | 颜色是否在线性渐变选项中重复，false表示不重复着色，true表示重复着色。默认值：false。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_LinearGradientOptions_GetRepeating()

```
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetRepeating(const OH_ArkUI_LinearGradientOptions* options, bool* repeating)
```
 描述

查询线性渐变选项中颜色是否重复。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [const OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)* options | 指向[OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)对象的指针。 |
| bool* repeating | 指向线性渐变选项中颜色是否重复的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_LinearGradientOptions_SetColorStop()

```
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_SetColorStop(OH_ArkUI_LinearGradientOptions* options, const uint32_t* colors, const float* stops, int32_t colorsAndStopsSize)
```
 描述

设置线性渐变选项的颜色停止点。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)* options | 指向[OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)对象的指针。 |
| const uint32_t* colors | 指向颜色数组的指针。 |
| const float* stops | 指向颜色停止点数组的指针。 |
| int32_t colorsAndStopsSize | 颜色和颜色停止点中的元素数量。颜色和颜色停止点的元素数量必须相同。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_LinearGradientOptions_GetColorStop()

```
ArkUI_ErrorCode OH_ArkUI_LinearGradientOptions_GetColorStop(const OH_ArkUI_LinearGradientOptions* options, uint32_t* colors, float* stops, int32_t colorsAndStopsSize, int32_t* writeLength)
```
 描述

获取线性渐变选项的颜色停止点。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [const OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)* options | 指向[OH_ArkUI_LinearGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-lineargradientoptions)对象的指针。 |
| uint32_t* colors | 指向颜色数组的指针。 |
| float* stops | 指向颜色停止点数组的指针。 |
| int32_t colorsAndStopsSize | 颜色和颜色停止点中的元素数量。颜色和颜色停止点的元素数量必须相同。 |
| int32_t* writeLength | 实际写入的颜色及颜色停止点数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_RadialGradientOptions_Create()

```
OH_ArkUI_RadialGradientOptions* OH_ArkUI_RadialGradientOptions_Create()
```
 描述

创建一个径向渐变选项对象。

起始版本： 26.0.0

返回：

| 类型 | 说明 |
| --- | --- |
| [OH_ArkUI_RadialGradientOptions*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions) | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |

#### [h2]OH_ArkUI_RadialGradientOptions_Destroy()

```
void OH_ArkUI_RadialGradientOptions_Destroy(OH_ArkUI_RadialGradientOptions* options)
```
 描述

销毁一个径向渐变选项对象。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)* options | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |

#### [h2]OH_ArkUI_RadialGradientOptions_SetCenterX()

```
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetCenterX(OH_ArkUI_RadialGradientOptions* options, float centerX)
```
 描述

设置径向渐变选项中心点的X坐标。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)* options | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |
| float centerX | 径向渐变选项中心点的X坐标。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_RadialGradientOptions_GetCenterX()

```
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetCenterX(const OH_ArkUI_RadialGradientOptions* options, float* centerX)
```
 描述

获取径向渐变选项中心点的X坐标。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [const OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)* options | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |
| float* centerX | 指向径向渐变选项中心点的X坐标。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_RadialGradientOptions_SetCenterY()

```
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetCenterY(OH_ArkUI_RadialGradientOptions* options, float centerY)
```
 描述

设置径向渐变选项中心点的Y坐标。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)* options | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |
| float centerY | 径向渐变选项中心点的Y坐标。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_RadialGradientOptions_GetCenterY()

```
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetCenterY(const OH_ArkUI_RadialGradientOptions* options, float* centerY)
```
 描述

获取径向渐变选项中心点的Y坐标。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [const OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)* options | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |
| float* centerY | 指向径向渐变选项中心点的Y坐标。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_RadialGradientOptions_SetRadius()

```
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetRadius(OH_ArkUI_RadialGradientOptions* options, float radius)
```
 描述

设置径向渐变选项的半径。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)* options | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |
| float radius | 径向渐变选项的半径。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_RadialGradientOptions_GetRadius()

```
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetRadius(const OH_ArkUI_RadialGradientOptions* options, float* radius)
```
 描述

获取径向渐变选项的半径。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [const OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)* options | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |
| float* radius | 指向径向渐变选项的半径的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_RadialGradientOptions_SetRepeating()

```
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetRepeating(OH_ArkUI_RadialGradientOptions* options, bool repeating)
```
 描述

设置径向渐变选项中颜色是否重复。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)* options | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |
| bool repeating | 径向渐变选项中颜色是否重复，false表示不重复着色，true表示重复着色。默认值：false。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_RadialGradientOptions_GetRepeating()

```
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetRepeating(const OH_ArkUI_RadialGradientOptions* options, bool* repeating)
```
 描述

查询径向渐变选项中颜色是否重复。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [const OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)* options | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |
| bool* repeating | 指向径向渐变选项中颜色是否重复的指针。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_RadialGradientOptions_SetColorStop()

```
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_SetColorStop(OH_ArkUI_RadialGradientOptions* options, const uint32_t* colors, const float* stops, int32_t colorsAndStopsSize)
```
 描述

设置径向渐变选项的颜色停止点。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)* options | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |
| const uint32_t* colors | 指向颜色数组的指针。 |
| const float* stops | 指向颜色停止点数组的指针。 |
| int32_t colorsAndStopsSize | 颜色和颜色停止点中的元素数量。颜色和颜色停止点的元素数量必须相同。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |

#### [h2]OH_ArkUI_RadialGradientOptions_GetColorStop()

```
ArkUI_ErrorCode OH_ArkUI_RadialGradientOptions_GetColorStop(const OH_ArkUI_RadialGradientOptions* options, uint32_t* colors, float* stops, int32_t colorsAndStopsSize, int32_t* writeLength)
```
 描述

获取径向渐变选项的颜色停止点。

起始版本： 26.0.0

参数：

| 参数项 | 描述 |
| --- | --- |
| [const OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)* options | 指向[OH_ArkUI_RadialGradientOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-oh-arkui-radialgradientoptions)对象的指针。 |
| uint32_t* colors | 指向颜色数组的缓冲区指针。 |
| float* stops | 指向颜色停止点数组的指针。 |
| int32_t colorsAndStopsSize | 颜色和颜色停止点中的元素数量。颜色和颜色停止点的元素数量必须相同。 |
| int32_t* writeLength | 实际写入的颜色停止点数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [ArkUI_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode) | 操作结果码。 操作成功时，返回[ARKUI_ERROR_CODE_NO_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 参数异常时，返回[ARKUI_ERROR_CODE_PARAM_INVALID](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h#arkui_errorcode)。 |
