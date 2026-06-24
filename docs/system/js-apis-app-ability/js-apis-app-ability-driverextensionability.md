---
title: "@ohos.app.ability.DriverExtensionAbility (驱动程序扩展能力)"
upstream_id: "harmonyos-references/js-apis-app-ability-driverextensionability"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:30.058396"
---

# @ohos.app.ability.DriverExtensionAbility (驱动程序扩展能力)

DriverExtensionAbility模块提供驱动相关扩展能力，提供驱动创建、销毁、连接、断开等生命周期回调。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
```

#### DriverExtensionAbility

#### [h2]属性

DriverExtensionAbility类，包含驱动生命周期回调的定义。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [DriverExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-driverextensioncontext) | 否 | 否 | DriverExtension的上下文环境，继承自ExtensionContext。 |

#### [h2]onInit

onInit(want: Want): void

Extension生命周期回调，在创建时回调，执行初始化业务逻辑操作。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want) | 是 | 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。 |

示例：

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { Want } from '@kit.AbilityKit';

class DriverExt extends DriverExtensionAbility {
  onInit(want : Want) {
    console.info(`onInit, want: ${want.abilityName}`);
  }
}
```

#### [h2]onRelease

onRelease(): void

Extension生命周期回调，在销毁时回调，执行资源清理等操作。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

示例：

```
class DriverExt extends DriverExtensionAbility {
  onRelease() {
    console.info('onRelease');
  }
}
```

#### [h2]onConnect

onConnect(want: Want): rpc.RemoteObject | Promise<rpc.RemoteObject>

Extension生命周期回调，会在[onCreate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage#oncreate)之后回调。返回一个[RemoteObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-rpc#remoteobject)对象，用于客户端和服务端进行通信。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want) | 是 | 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| rpc.[RemoteObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-rpc#remoteobject) | Promise | 一个RemoteObject对象，用于客户端和服务端进行通信；或一个Promise对象，返回用于通信的RemoteObject对象。 |

示例：

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class StubTest extends rpc.RemoteObject{
    constructor(des : string) {
        super(des);
    }
    onRemoteMessageRequest(code : number, data : rpc.MessageSequence, reply : rpc.MessageSequence, option : rpc.MessageOption) {
      // 必须重写此接口
      return true;
    }
}
class DriverExt extends DriverExtensionAbility {
  onConnect(want : Want) {
    console.info(`onConnect , want: ${want.abilityName}`);
    return new StubTest('test');
  }
}
```
 如果生成返回值[RemoteObject](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-rpc#remoteobject)依赖一个异步接口，可以使用异步生命周期：

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { rpc } from '@kit.IPCKit';
import { Want } from '@kit.AbilityKit';

class StubTest extends rpc.RemoteObject{
    constructor(des : string) {
        super(des);
    }
    onRemoteMessageRequest(code : number, data : rpc.MessageSequence, reply : rpc.MessageSequence, option : rpc.MessageOption) {
      // 必须重写此接口
      return true;
    }
}
async function getDescriptor() {
    // 调用异步函数...
    return "asyncTest";
}
class DriverExt extends DriverExtensionAbility {
  async onConnect(want : Want) {
    console.info(`onConnect , want: ${want.abilityName}`);
    let descriptor = await getDescriptor();
    return new StubTest(descriptor);
  }
}
```

#### [h2]onDisconnect

onDisconnect(want: Want): void | Promise<void>

Extension的生命周期回调，客户端执行断开连接服务时回调。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want) | 是 | 当前Extension相关的Want类型信息，包括ability名称、bundle名称等。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| void | Promise | 返回值为空；或一个Promise对象，无返回结果。 |

示例：

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { Want } from '@kit.AbilityKit';

class DriverExt extends DriverExtensionAbility {
  onDisconnect(want : Want) {
    console.info(`onDisconnect, want: ${want.abilityName}`);
  }
}
```
 在执行完onDisconnect生命周期回调后，应用可能会退出，从而可能导致onDisconnect中的异步函数未能正确执行，比如异步写入数据库。可以使用异步生命周期，以确保异步onDisconnect完成后再继续后续的生命周期。

```
import { DriverExtensionAbility } from '@kit.DriverDevelopmentKit';
import { Want } from '@kit.AbilityKit';

class DriverExt extends DriverExtensionAbility {
  async onDisconnect(want : Want) {
    console.info(`onDisconnect, want: ${want.abilityName}`);
    // 调用异步函数...
  }
}
```

#### [h2]onDump

onDump(params: Array<string>): Array<string>

转储客户端信息时调用，建议不要转储敏感信息。

模型约束：此接口仅在Stage模型下使用。

系统能力：SystemCapability.Driver.ExternalDevice

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| params | Array | 是 | 表示命令形式的参数。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Array | 一个string类型的数组，用于转存客户端信息。 |

示例：

```
class DriverExt extends DriverExtensionAbility {
    onDump(params : Array<string>) {
        console.info(`dump, params: ${JSON.stringify(params)}`);
        return ['params'];
    }
}
```

#### DriverExtensionContext

type DriverExtensionContext = _DriverExtensionContext;

DriverExtensionAbility的上下文环境。

系统能力：SystemCapability.Driver.ExternalDevice

| 类型 | 说明 |
| --- | --- |
| _DriverExtensionContext | DriverExtensionAbility的上下文环境，继承自ExtensionContext，其具体使用方法可参考[DriverExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-driverextensioncontext)。 |
