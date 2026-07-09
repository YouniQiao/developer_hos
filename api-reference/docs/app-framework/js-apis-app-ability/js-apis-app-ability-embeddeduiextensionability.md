---
title: "@ohos.app.ability.EmbeddedUIExtensionAbility (支持跨进程界面嵌入的ExtensionAbility组件)"
upstream_id: "harmonyos-references/js-apis-app-ability-embeddeduiextensionability"
catalog: "harmonyos-references"
content_hash: "cc8182bad540"
synced_at: "2026-07-09T00:57:04.301613"
---

# @ohos.app.ability.EmbeddedUIExtensionAbility (支持跨进程界面嵌入的ExtensionAbility组件)

EmbeddedUIExtensionAbility为开发者提供了跨进程界面嵌入的能力，继承自[UIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensionability)。

开发者通过实现EmbeddedUIExtensionAbility，为本应用提供跨进程界面嵌入能力。例如，开发者可以在[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)的页面中通过[EmbeddedComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-embedded-component)嵌入本应用的EmbeddedUIExtensionAbility提供的界面。

各类Ability的继承关系详见[继承关系说明](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-ability#ability的继承关系说明)。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 12 开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { EmbeddedUIExtensionAbility } from '@kit.AbilityKit';
```

#### EmbeddedUIExtensionAbility

EmbeddedUIExtensionAbility为开发者提供了跨进程界面嵌入的能力，继承自[UIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensionability)。

目前EmbeddedUIExtensionAbility只能被同应用的UIAbility拉起。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

设备行为差异：

- 从API version 12开始，该接口在Tablet中可正常调用，在其他设备类型中无法被启动。
- 从API version 13开始，该接口在PC/2in1、Tablet中可正常调用，在其他设备类型中无法被启动。
- 从API version 23开始，该接口在PC/2in1、Tablet、Car中可正常调用，在其他设备类型中无法被启动。
