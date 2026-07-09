---
title: "@hms.utilityApplication.screenTimeGuard.TimeGuardExtensionAbility（屏幕时间守护扩展Ability）"
upstream_id: "harmonyos-references/screentimeguard-timeguardextensionability"
catalog: "harmonyos-references"
content_hash: "f2f2dc02bc5a"
synced_at: "2026-07-09T01:01:39.321342"
---

# @hms.utilityApplication.screenTimeGuard.TimeGuardExtensionAbility（屏幕时间守护扩展Ability）

#### 模块概述

TimeGuardExtensionAbility为屏幕时间守护扩展Ability，继承自[ExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-extensionability)。为管控应用提供在守护策略生效和结束、获取授权和撤销授权场景下的生命周期回调。开发者通过定义该回调函数，可以在上述场景中执行特定逻辑。

TimeGuardExtensionAbility为轻量级的独立子进程，不允许唤醒主进程。

起始版本： 6.0.0(20)

#### 导入模块

```
import { TimeGuardExtensionAbility } from '@kit.ScreenTimeGuardKit';
```

#### 属性

模型约束： 属性仅可在Stage模型下使用。

系统能力： SystemCapability.ScreenTimeGuard.GuardService

起始版本： 6.0.0(20)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| context | [TimeGuardExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/screentimeguard-timeguardextensioncontext) | 否 | 否 | TimeGuardExtensionAbility的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)。 |

#### onStart

onStart(strategyName: string): Promise<void>

当管控应用启动守护策略时，系统将自动触发此回调函数，开发者可在回调函数中执行自己的业务逻辑。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ScreenTimeGuard.GuardService

起始版本： 6.0.0(20)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| strategyName | string | 是 | 启动的守护策略名称。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

示例：

```
import { TimeGuardExtensionAbility } from '@kit.ScreenTimeGuardKit';

let index = 0; // 用于自增操作

function asyncIncrement(): Promise<void> {
  // index自增的异步操作
  return new Promise<void>((resolve) => {
    index++;
    resolve();
  });
}

export default class EntryAbility extends TimeGuardExtensionAbility {
  async onStart(strategyName: string): Promise<void> {
    // strategyName表示启动的守护策略名称
    // 开发者可在回调中处理自己的业务逻辑，本示例代码只执行index自增逻辑
    await asyncIncrement();
    console.info('test --- onStart:', strategyName, index);
  }
}
```

#### onStop

onStop(strategyName: string): Promise<void>

当管控应用停止守护策略时，系统将自动触发此回调函数，开发者可在回调函数中执行自己的业务逻辑。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ScreenTimeGuard.GuardService

起始版本： 6.0.0(20)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| strategyName | string | 是 | 停止的守护策略名称。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

示例：

```
import { TimeGuardExtensionAbility } from '@kit.ScreenTimeGuardKit';

let index = 0; // 用于自增操作

function asyncIncrement(): Promise<void> {
  // index自增的异步操作
  return new Promise<void>((resolve) => {
    index++;
    resolve();
  });
}

export default class EntryAbility extends TimeGuardExtensionAbility {
  async onStop(strategyName: string): Promise<void> {
    // strategyName表示停止的守护策略名称
    // 开发者可在回调中处理自己的业务逻辑，本示例代码只执行index自增逻辑
    await asyncIncrement();
    console.info('test --- onStop:', strategyName, index);
  }
}
```

#### onUserAuthSwitchOn

onUserAuthSwitchOn(): Promise<void>

当用户在“健康使用设备”中授予管控应用权限时，系统将自动触发此回调函数，开发者可在回调函数中执行自己的业务逻辑。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ScreenTimeGuard.GuardService

起始版本： 6.0.0(20)

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

示例：

```
import { TimeGuardExtensionAbility } from '@kit.ScreenTimeGuardKit';

let index = 0; // 用于自增操作

function asyncIncrement(): Promise<void> {
  // index自增的异步操作
  return new Promise<void>((resolve) => {
    index++;
    resolve();
  });
}

export default class EntryAbility extends TimeGuardExtensionAbility {
  async onUserAuthSwitchOn(): Promise<void> {
    // 开发者可在回调中处理自己的业务逻辑，本示例代码只执行index自增逻辑
    await asyncIncrement();
    console.info('test --- onUserAuthSwitchOn:', index);
  }
}
```

#### onUserAuthSwitchOff

onUserAuthSwitchOff(): Promise<void>

当用户在“健康使用设备”中撤销管控应用授权时，系统将自动触发此回调函数，开发者可在回调函数中执行自己的业务逻辑。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.ScreenTimeGuard.GuardService

起始版本： 6.0.0(20)

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，无返回结果。 |

示例：

```
import { TimeGuardExtensionAbility } from '@kit.ScreenTimeGuardKit';

let index = 0; // 用于自增操作

function asyncIncrement(): Promise<void> {
  // index自增的异步操作
  return new Promise<void>((resolve) => {
    index++;
    resolve();
  });
}

export default class EntryAbility extends TimeGuardExtensionAbility {
  async onUserAuthSwitchOff(): Promise<void> {
    // 开发者可在回调中处理自己的业务逻辑，本示例代码只执行index自增逻辑
    await asyncIncrement();
    console.info('test --- onUserAuthSwitchOff:', index);
  }
}
```
