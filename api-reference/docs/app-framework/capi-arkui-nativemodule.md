---
title: "ArkUI_NativeModule"
upstream_id: "harmonyos-references/capi-arkui-nativemodule"
catalog: "harmonyos-references"
content_hash: "bef284f5f20e"
synced_at: "2026-07-28T16:49:16.092707"
---

# ArkUI_NativeModule

#### 概述

提供ArkUI在Native侧接入和管理页面交互的能力，适用于使用NDK构建UI、处理输入事件、绑定手势、执行动画和管理节点树等场景。

提供ArkUI在Native侧的基础输入事件能力。更多详细介绍请参考[绑定基础输入事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-bind-input-events)。

提供ArkUI在Native侧的通用拖拽及主动发起拖拽能力。更多详细介绍请参考[绑定拖拽事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-drag-event)。

提供ArkUI在Native侧的通用按键事件能力。详细介绍请参考[绑定基础输入事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-bind-input-events#按键事件)。

提供ArkUI在Native侧的手势识别、手势事件处理及手势回调等能力。详细介绍请参考[绑定手势事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-bind-gesture-events)。

提供ArkUI在Native侧的动画创建、控制及回调等能力。详细介绍请参考[使用动画](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-use-animation)。

提供ArkUI在Native侧的UI能力，如UI组件创建、销毁、树节点操作、属性设置、事件监听等。详细介绍请参考[接入ArkTS页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-access-the-arkts-page)。

上述能力适用于在Native侧处理输入事件、拖拽、手势、动画和UI组件操作等场景，可用于完成ArkUI页面交互处理和组件树管理。

起始版本： 12

#### 文件汇总

| 名称 | 描述 |
| --- | --- |
| [common_attributes.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-common-attributes-h) | 提供NativeModule通用属性和事件的类型定义。 |
| [embedded_component.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-embedded-component-h) | EmbeddedComponent组件相关的结构体和方法定义。 |
| [image.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-h) | 为NativeNode API提供Image节点类型定义。 |
| [image_animator.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-animator-h) | 为NativeNode API提供ImageAnimator节点类型定义。 |
| [layout.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-layout-h) | 定义布局相关的枚举和接口。 |
| [custom_attributes.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-node-attributes-custom-attributes-h) | 为NativeNode API提供自定义节点事件定义。 |
| [grid.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-grid-h) | 定义Grid组件的枚举和接口。 |
| [list.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-list-h) | 定义List组件的枚举和接口。 |
| [navigation_router.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-navigation-router-h) | 定义Navigation或Router组件的枚举和接口。 |
| [scroll.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-scroll-h) | 定义Scroll组件相关的枚举。 |
| [swiper.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-swiper-h) | 定义Swiper组件的枚举和接口。 |
| [water_flow.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-water-flow-h) | 定义WaterFlow组件的枚举和接口。 |
| [drag_and_drop.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drag-and-drop-h) | 提供NativeDrag相关接口定义。 |
| [drawable_descriptor.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drawable-descriptor-h) | 提供NativeDrawableDescriptor接口的类型定义。 |
| [native_animate.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-animate-h) | 提供ArkUI在Native侧的动画接口定义集合。 |
| [native_dialog.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-dialog-h) | 提供ArkUI在Native侧的自定义弹窗接口定义集合。 |
| [native_gesture.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-gesture-h) | 提供NativeGesture接口的类型定义。 |
| [native_interface.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-h) | 提供NativeModule接口的统一入口函数。 |
| [native_interface_focus.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-focus-h) | 定义焦点管理的相关接口，用于主动转移焦点、控制焦点转移默认行为和焦点激活态。 |
| [native_key_event.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-key-event-h) | 提供NativeKeyEvent相关接口定义。 |
| [native_material.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-material-h) | 提供ArkUI在Native侧的沉浸式材质类型和API声明。 |
| [native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h) | 提供NativeNode接口的类型定义。 |
| [native_node_napi.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-napi-h) | 提供将ArkTS侧的FrameNode转换为ArkUI_NodeHandle的方式。 |
| [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h) | 提供NativeModule公共的类型定义。 |
| [text.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h) | 定义Text相关的枚举和接口。 |
| [text_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h) | 定义文本类组件通用的枚举和接口。 |
| [text_input.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-input-h) | 定义TextInput相关的枚举和接口。 |
| [text_area.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-area-h) | 定义TextArea相关的枚举和接口。 |
| [image_span.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-span-h) | 定义ImageSpan相关的枚举和接口。 |
| [progress.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-progress-h) | 定义Progress相关的枚举和接口。 |
| [rich_editor.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h) | 定义RichEditor相关的枚举和接口。 |
| [custom_span.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-custom-span-h) | 定义CustomSpan相关的枚举和接口。 |
| [picker.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h) | 为NativeNode API提供Picker节点类型定义。 |
| [button.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-button-h) | 为NativeNode API提供Button节点类型定义。 |
| [checkbox.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-checkbox-h) | 为NativeNode API提供Checkbox节点类型定义。 |
| [slider.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-slider-h) | 为NativeNode API提供Slider节点类型定义。 |
| [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h) | 提供ArkUI在Native侧的属性字符串能力。 |
| [xcomponent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-xcomponent-h) | XComponent组件的枚举类型定义。 |
