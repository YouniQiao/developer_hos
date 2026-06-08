---
title: "添加交互响应"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview
format: md
upstream_id: dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview
last_sync: 2026-06-07
sync_hash: 0cbeb4b0
---
ArkUI框架提供了丰富的接口，用于处理用户通过不同外设生成的基础输入事件，同时提供了高级接口封装，以响应用户归一化的交互行为，如手势、拖拽、焦点等。

相较于基础输入事件，应优先采用手势处理用户交互，因为手势作为用户交互的识别结果，能够屏蔽不同基础事件的差异。例如，点击操作既可通过手指触控实现，也可通过鼠标点击完成，应用程序只需对接一个[TapGesture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-gestures-tapgesture)即可在各类输入设备上支持点击交互。

[交互基础机制说明](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles)：交互处理的基本概念和原理。

[输入设备与事件](/docs/dev/app-dev/application-framework/arkts-interaction-development-guide-raw-input-event)：不同的输入设备会产生哪些基础输入事件，以及如何处理它们。

[添加手势响应](/docs/dev/app-dev/application-framework/arkts-interaction-development-guide-support-gesture)：处理归一化手势交互。

[支持统一拖拽](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event)：了解如何适配统一拖拽。

[支持焦点处理](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event)：了解如何控制和管理界面中的组件焦点。

通过以下链接了解使用NDK开发UI界面时，如何为组件添加交互响应：

* [绑定基础输入事件](/docs/dev/app-dev/application-framework/ndk-bind-input-events)：通过NDK为组件添加基础输入事件响应。
* [绑定手势事件](/docs/dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-add-event/ndk-bind-gesture-events)：通过NDK为组件添加手势交互。
* [绑定拖拽事件](/docs/dev/app-dev/application-framework/arkui/arkts-use-ndk/arkts-add-event/ndk-drag-event)：通过NDK为组件支持统一拖拽。

* **[交互响应概述](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-capability-overview)**
* **[交互基础机制说明](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles)**
* **[输入设备与事件](/docs/dev/app-dev/application-framework/arkts-interaction-development-guide-raw-input-event)**
* **[添加手势响应](/docs/dev/app-dev/application-framework/arkts-interaction-development-guide-support-gesture)**
* **[支持统一拖拽](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event)**
* **[支持焦点处理](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event)**
