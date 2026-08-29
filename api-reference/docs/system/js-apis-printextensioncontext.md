---
title: "PrintExtensionContext"
upstream_id: "harmonyos-references/js-apis-printextensioncontext"
catalog: "harmonyos-references"
content_hash: "c6ab7b8b1f75"
synced_at: "2026-08-29T18:16:55.524830"
---

# PrintExtensionContext

PrintExtensionContext是PrintExtensionAbility的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)。

PrintExtensionContext可直接作为PrintExtensionAbility的上下文环境，用于在打印扩展开发场景中获取和管理打印相关资源，以完成打印任务相关操作。关于PrintExtensionContext的设计逻辑与可访问资源，请参见[PrintExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-printextensionability)与[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)。

![](./img/note_3.0-zh-cn.png)

- 本模块接口仅可在Stage模型下使用。
- **起始版本：** 26.0.0

#### 导入模块

```
import { PrintExtensionAbility } from '@kit.BasicServicesKit';
```

#### 使用说明

通过PrintExtensionAbility子类实例获取PrintExtensionContext。

```
import { PrintExtensionAbility } from '@kit.BasicServicesKit';
import { Want } from '@kit.AbilityKit';

export default class PrintExtension extends PrintExtensionAbility {

  onCreate(want: Want) {
    let context = this.context; // 获取PrintExtensionContext，后续可通过context访问打印相关资源
  }
}
```
