---
title: "@ohos.InputMethodExtensionContext (InputMethodExtensionContext)"
upstream_id: "harmonyos-references/js-apis-inputmethod-extension-context"
catalog: "harmonyos-references"
content_hash: "f1078e0bb486"
synced_at: "2026-07-09T00:59:03.896955"
---

# @ohos.InputMethodExtensionContext (InputMethodExtensionContext)

InputMethodExtensionContext模块是InputMethodExtensionAbility的上下文环境，继承于ExtensionContext，提供InputMethodExtensionAbility具有的能力和接口，包括启动、停止、绑定、解绑Ability。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { InputMethodExtensionContext } from '@kit.IMEKit';
```

#### 使用说明

在使用InputMethodExtensionContext的功能前，需要通过InputMethodExtensionAbility子类实例获取。

```
import { InputMethodExtensionAbility, InputMethodExtensionContext } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';

class InputMethodExtAbility extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    console.info('onCreate, want:' + want.abilityName);
  }
}
```

#### InputMethodExtensionContext.destroy

destroy(callback: AsyncCallback<void>): void;

销毁输入法应用。使用callback异步回调。

系统能力： SystemCapability.MiscServices.InputMethodFramework

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| callback | AsyncCallback | 是 | 回调函数。当销毁输入法应用成功时，err为undefined；否则为错误对象。 |

示例：

```
import { InputMethodExtensionAbility, InputMethodExtensionContext } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

class InputMethodExtAbility extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    console.info('onCreate, want:' + want.abilityName);
  }

  onDestroy() {
    this.context.destroy((err: BusinessError) => {
      if (err) {
        console.error(`Failed to destroy context, err code = ${err.code}`);
        return;
      }
      console.info('Succeeded in destroying context.');
    });
  }
}
```

#### InputMethodExtensionContext.destroy

destroy(): Promise<void>;

销毁输入法应用。使用Promise异步回调。

系统能力： SystemCapability.MiscServices.InputMethodFramework

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | 无返回结果的Promise对象。 |

示例：

```
import { InputMethodExtensionAbility, InputMethodExtensionContext } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

class InputMethodExtAbility extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    console.info('onCreate, want:' + want.abilityName);
  }

  onDestroy() {
    this.context.destroy().then(() => {
      console.info('Succeed in destroying context.');
    }).catch((err: BusinessError)=>{
      console.error(`Failed to destroy context, err code = ${err.code}`);
    });
  }
}
```

#### InputMethodExtensionContext.startAbility12+

startAbility(want: Want): Promise<void>;

拉起目标应用。使用Promise异步回调。

系统能力： SystemCapability.MiscServices.InputMethodFramework

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| want | [Want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want) | 是 | 用于指定目标应用的Want类型信息，包括ability名称、bundle名称等。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | 无返回结果的Promise对象。 |

错误码：

以下错误码的详细介绍请参见[输入法框架错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-inputmethod-framework)，[元能力子系统错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-ability)，[通用错误码说明文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed. |
| 16000001 | The specified ability does not exist. |
| 16000002 | Incorrect ability type. |
| 16000004 | Cannot start an invisible component. |
| 16000005 | The specified process does not have the permission. |
| 16000006 | Cross-user operations are not allowed. |
| 16000008 | The crowdtesting application expires. |
| 16000009 | An ability cannot be started or stopped in Wukong mode. |
| 16000010 | The call with the continuation and prepare continuation flag is forbidden. |
| 16000011 | The context does not exist. |
| 16000012 | The application is controlled. |
| 16000013 | The application is controlled by EDM. |
| 16000019 | No matching ability is found. |
| 16000050 | Internal error. |
| 16000053 | The ability is not on the top of the UI. |
| 16000055 | Installation-free timed out. |
| 16000061 | Operation not supported. |
| 16200001 | The caller has been released. |
| 16000069 | The extension cannot start the third party application. |
| 16000070 | The extension cannot start the service. |

示例：

```
import { InputMethodExtensionAbility, InputMethodExtensionContext } from '@kit.IMEKit';
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

class InputMethodExtAbility extends InputMethodExtensionAbility {
  onCreate(want: Want): void {
    const context: InputMethodExtensionContext = this.context;
    const targetWant: Want = {
      bundleName: "com.example.aafwk.test",
      abilityName: "com.example.aafwk.test.TwoAbility"
    };

    context.startAbility(targetWant)
      .then(() => console.info('startAbility success'))
      .catch((err: BusinessError) => {
        console.error(`StartAbility failed. Code: ${err.code}, Message: ${err.message}`);
      });
  }

  onDestroy() {
    this.context.destroy().then(() => {
      console.info('Succeed in destroying context.');
    }).catch((err: BusinessError) => {
      console.error(`Failed to destroy context, err code = ${err.code}`);
    });
  }
}
```
