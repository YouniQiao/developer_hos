---
title: "ArkUI_NativeModule"
upstream_id: "harmonyos-references/capi-arkui-nativemodule"
catalog: "harmonyos-references"
content_hash: "c6186b9293b2"
synced_at: "2026-08-29T18:15:36.147986"
---

# ArkUI_NativeModule

#### 概述

提供ArkUI在Native侧接入和管理页面交互的能力，适用于使用NDK构建UI、处理输入事件、绑定手势、执行动画和管理节点树等场景。

提供ArkUI在Native侧的基础输入事件能力。更多详细介绍请参考[绑定基础输入事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-bind-input-events)。

提供ArkUI在Native侧的通用拖拽及主动发起拖拽能力。更多详细介绍请参考[绑定拖拽事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-drag-event)。

提供ArkUI在Native侧的通用按键事件能力。详细介绍请参考[绑定基础输入事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-bind-input-events#按键事件)。

提供ArkUI在Native侧注册手势回调的能力。详细介绍请参考[绑定手势事件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-bind-gesture-events)。

提供ArkUI在Native侧使用动画回调的能力。详细介绍请参考[使用动画](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-use-animation)。

提供ArkUI在Native侧的UI能力，如UI组件创建、销毁、树节点操作、属性设置、事件监听等。详细介绍请参考[接入ArkTS页面](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ndk-access-the-arkts-page)。

上述能力适用于Native侧接入ArkTS页面并处理输入事件、拖拽、手势、动画和UI节点管理的场景，可帮助开发者在Native模块中完成ArkUI页面交互处理和组件树管理。

起始版本： 12

#### 文件汇总

| 名称 | 描述 |
| --- | --- |
| [common_attributes.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-common-attributes-h) | 提供NativeModule通用属性和事件的类型定义。 |
| [embedded_component.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-embedded-component-h) | EmbeddedComponent组件相关的结构体和方法定义。 |
| [image.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-h) | 为NativeNode API提供Image节点类型定义。 |
| [image_animator.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-animator-h) | 为NativeNode API提供ImageAnimator节点类型定义。 |
| [layout.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-layout-h) | 定义布局相关的枚举和接口。 |
| [custom_attributes.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-node-attributes-custom-attributes-h) | 为NativeNode API提供自定义组件的测量、布局和绘制事件类型定义，用于注册和处理测量、布局以及内容层、前景层和浮层的绘制事件。 |
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
| [native_interface_focus.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-focus-h) | 定义焦点管理的相关接口，主要用于主动转移焦点、管理焦点转移的默认行为以及控制焦点激活态。 |
| [native_key_event.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-key-event-h) | 提供NativeKeyEvent相关接口定义。 |
| [native_material.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-material-h) | 提供ArkUI在Native侧的沉浸式材质类型和API声明。 |
| [native_node.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-h) | 提供NativeNode接口的类型定义。 |
| [native_node_napi.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-napi-h) | 提供将ArkTS侧的FrameNode转换为ArkUI_NodeHandle的方式。 |
| [native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-h) | 提供NativeModule公共的类型定义。 |
| [native_type_visual.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-type-visual-h) | 提供NativeModule视觉相关的类型定义。 |
| [text.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-h) | 定义Text相关的枚举和接口，用于配置文本样式、控制跑马灯效果、实现文本实体识别以及管理文本控制器等功能。适用于需要自定义文本显示效果、实现动态文本交互、识别文本中特殊实体（如地址、电话号码）以及精确控制文本字体粗细等场景。通过这些配置接口，开发者可以灵活控制文本组件的显示效果和交互行为，提升用户体验。 |
| [text_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-common-h) | 定义文本类组件通用的枚举和接口，涵盖文本对齐、装饰线样式、复制粘贴、溢出处理、断行策略、菜单定制等多种能力，适用于文本输入框、文本显示等场景，帮助开发者灵活控制文本样式与交互行为，降低开发复杂度。 |
| [text_input.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-input-h) | 定义TextInput相关的枚举。支持多种输入类型配置（包括文本、数字、密码、邮箱、电话号码等）、清除按钮样式定制、自动填充内容类型设置和输入框风格选择，适用于登录注册、表单填写、搜索输入等需要用户交互输入的场景，帮助开发者快速实现符合业务需求的单行文本输入功能。 |
| [text_area.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-text-area-h) | 定义TextArea相关的枚举类型。TextArea组件用于接收多行文本输入，枚举值用于指定不同的输入类型，会影响输入内容的验证规则，例如支持基本输入、纯数字、电话号码、邮箱地址、验证码等模式。开发者可根据表单类型选择合适的枚举值，系统将自动提供对应的内容验证，从而优化用户输入体验并确保数据格式的正确性。 |
| [image_span.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-image-span-h) | 定义ImageSpan相关的枚举，用于在富文本中嵌入图片并控制图片与文本的对齐方式。支持多种对齐模式，适用于图文混排场景，可实现图片与文本的精确对齐，提升富文本的展示效果。 |
| [progress.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-progress-h) | 定义Progress相关的枚举和接口，支持线性、环形、圆形、胶囊等多种进度条类型，并提供线性进度条样式选项的自定义能力（平滑动效、扫光效果、宽度、圆角），适用于需要展示任务进度、加载状态等场景，帮助开发者快速实现多样化的进度展示和交互反馈。 |
| [rich_editor.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-rich-editor-h) | 定义RichEditor相关的枚举和接口。 |
| [custom_span.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-custom-span-h) | 定义CustomSpan相关的结构体和接口，用于实现自定义绘制Span的精确尺寸测量、布局排版和绘制效果。支持开发者在富文本编辑器、聊天应用、文档应用等场景中实现图文混排、表情内嵌、自定义标记等功能，提供灵活的自定义绘制Span能力，帮助开发者提升开发效率，实现更丰富的文本排版效果。 |
| [picker.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-picker-h) | 为NativeNode API提供Picker节点类型定义。 |
| [button.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-button-h) | 为NativeNode API提供Button节点类型定义。 |
| [checkbox.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-checkbox-h) | 为NativeNode API提供Checkbox节点类型定义。 |
| [slider.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-slider-h) | 为NativeNode API提供Slider节点类型定义。 |
| [styled_string.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-styled-string-h) | 提供ArkUI在Native侧的属性字符串能力。 |
| [xcomponent.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-xcomponent-h) | XComponent组件的枚举类型定义。 |
| [error_code.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-error-code-h) | 定义ArkUI Native API的错误码枚举值。 |
