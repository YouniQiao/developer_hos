---
title: "VpnExtensionContext"
upstream_id: "harmonyos-references/js-apis-inner-application-vpnextensioncontext"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:52.611742"
---

# VpnExtensionContext

VpnExtensionContext是VpnExtensionAbility的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)。

VpnExtensionContext可直接作为VpnExtension的上下文环境，提供允许访问特定于VpnExtensionAbility的资源的能力。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 11开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { VpnExtensionAbility } from '@kit.NetworkKit';
```

#### 使用说明

通过VpnExtensionAbility子类实例来获取。

```
import { VpnExtensionAbility, vpnExtension } from '@kit.NetworkKit';
import { Want } from '@kit.AbilityKit';

export default class MyVpnExtAbility extends VpnExtensionAbility {
  private vpnServerIp: string = 'xxx.xxx.x.x';
  private tunIp: string = 'x.x.x.x';
  private blockedAppName: string = 'xxxx';

  onCreate(want: Want) {
    let VpnConnection: vpnExtension.VpnConnection = vpnExtension.createVpnConnection(this.context);
    console.info("vpn createVpnConnection: " + JSON.stringify(VpnConnection));
  }
}
```

#### VpnExtensionAbility

三方VPN拓展能力。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

模型约束：此接口仅可在Stage模型下使用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [VpnExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-vpnextensioncontext) | 否 | 否 | 指定context。 |

#### [h2]onCreate

onCreate(want: Want): void

拓展VPN启动初始化的时候进行回调。

![](./img/note_3.0-zh-cn.png) 建议配对调用[onDestroy](#ondestroy)监听拓展VPN的销毁，及时执行资源清理等操作。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

模型约束：此接口仅可在Stage模型下使用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want) | 是 | 指示要启动的信息。 |

#### [h2]onDestroy

onDestroy(): void

拓展VPN销毁之前进行回调。

系统能力：SystemCapability.Ability.AbilityRuntime.Core

模型约束：此接口仅可在Stage模型下使用。
