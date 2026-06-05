---
format: md
title: "如何使用AbilityStage的生命周期函数"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ability-2
---

DevEco Studio默认工程未包含AbilityStage。若需使用AbilityStage功能，可手动创建AbilityStage文件。具体步骤如下：

1. 在工程Module对应的ets目录下，右键选择“New > Directory”，新建一个目录，命名为myabilitystage。
2. 在myabilitystage目录中，右键选择“New > ArkTS File”，新建一个文件并命名为MyAbilityStage.ets。
3. 打开MyAbilityStage.ets文件，导入AbilityStage的依赖包，自定义类继承AbilityStage并添加所需的生命周期回调。示例中添加了onCreate()生命周期回调。

   ```
   import { AbilityStage, Want } from '@kit.AbilityKit';

   export default class MyAbilityStage extends AbilityStage {
     onCreate(): void {
       // When the HAP of the application is first loaded, initialize the operation for the module
     }

     onAcceptWant(want: Want): string {
       // Triggered only when UIAbility is configured in specified startup mode
       return 'MyAbilityStage';
     }
   }
   ```
4. 在[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file)中，通过配置 srcEntry 参数来指定模块对应的代码路径，以作为HAP加载的入口。

   ```
   {
     "module": {
       "name": "entry",
       "type": "entry",
       "srcEntry": "./ets/myabilitystage/MyAbilityStage.ets",
       // ...
     }
   }
   ```

[AbilityStage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage)拥有[onCreate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage#oncreate)、[onDestroy()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage#ondestroy12)生命周期回调和[onAcceptWant()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage#onacceptwant)、[onConfigurationUpdate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage#onconfigurationupdate)、[onMemoryLevel()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage#onmemorylevel)事件回调等。
