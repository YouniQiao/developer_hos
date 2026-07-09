---
title: "@ohos.app.ability.VpnExtensionAbility (三方VPN能力)"
upstream_id: "harmonyos-references/js-apis-vpnextensionability"
catalog: "harmonyos-references"
content_hash: "0f8295611b67"
synced_at: "2026-07-09T00:59:28.278377"
---

# @ohos.app.ability.VpnExtensionAbility (三方VPN能力)

VpnExtensionAbility模块提供三方VPN相关能力，提供三方VPN创建、销毁等生命周期回调。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { VpnExtensionAbility } from '@kit.NetworkKit';
```

#### 属性

系统能力：SystemCapability.Ability.AbilityRuntime.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [VpnExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-vpnextensioncontext) | 否 | 否 | VpnExtension的上下文环境，继承自ExtensionContext。 |

#### VpnExtensionAbility.onCreate

onCreate(want: Want): void

在启动三方VPN进行初始化时回调。

![](./img/note_3.0-zh-cn.png) 建议配对调用[onDestroy](#vpnextensionabilityondestroy)监听三方VPN的销毁，执行资源清理等操作。

系统能力： SystemCapability.Ability.AbilityRuntime.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want) | 是 | 指示要启动的信息。 |

示例：

```
import { VpnExtensionAbility } from '@kit.NetworkKit';
import { Want } from '@kit.AbilityKit';

class MyVpnExtAbility extends VpnExtensionAbility {
    onCreate(want: Want) {
       console.info('MyVpnExtAbility onCreate');
    }
}
```

#### VpnExtensionAbility.onDestroy

onDestroy(): void

VpnExtensionAbility生命周期回调，在销毁时回调，执行资源清理等操作。

系统能力： SystemCapability.Ability.AbilityRuntime.Core

示例：

```
import { VpnExtensionAbility } from '@kit.NetworkKit';

class MyVpnExtAbility extends VpnExtensionAbility {
    onDestroy() {
       console.info('MyVpnExtAbility onDestroy');
    }
}
```
