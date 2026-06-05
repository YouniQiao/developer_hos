---
title: "获取/设置环境变量"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/subscribe-system-environment-variable-changes
format: md
---


环境变量涵盖了所有可能影响应用运行时的环境配置信息，包括应用可指定的内部环境变量（字体大小、外观、语言等）和应用可感知的外部环境变量（屏幕方向等）。

通常条件下，环境变量会跟随系统设置变化。

## 使用场景

| 场景 | 说明 | 约束限制 | 场景举例 |
| --- | --- | --- | --- |
| [获取环境变量](#获取环境变量) | 开发者可以使用[getConfigurationSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getconfigurationsync10)主动获取当前环境变量，包括深浅色模式、屏幕方向、语言地区、屏幕密度、设备类型等。 | 当前仅支持同步获取，使用方式参考[ResourceManager.getConfigurationSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getconfigurationsync10)。 | 应用运行过程中，可以主动获取当前应用深浅色模式，以更新用户界面显示。 |
| [设置环境变量](#设置环境变量) | 当前仅支持应用自定义字体大小、深浅色、语言。  - [设置字体大小](#设置字体大小)  - [设置深浅色模式](#设置深浅色模式)  - [设置应用语言](#设置应用语言) | 当应用设置环境变量后，应用将无法通过订阅感知到对应的环境变量在系统中的变化。 | 应用自定义字体大小，以提升用户体验。 |
| [订阅环境变量](#订阅环境变量) | 通过订阅环境变量，及时感知系统环境变化 。支持订阅的环境变量包括语言、深浅色、屏幕方向等，详见[Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-configuration)。 | - 如果开发者将环境变量配置为不跟随系统变化（即[configuration标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file#configuration标签)中的对应字段取值为“nonFollowSystem”），应用将无法通过订阅感知对应的环境变量在系统中的变化。  - 应用订阅环境变量后，当应用处于后台时，环境变量发生变更，应用将无法实时收到订阅通知。相关通知推送会被延迟处理，待应用切换回前台时，才会收到订阅通知。 | 当用户旋转设备屏幕时，应用可以通过订阅环境变量感知环境变化重新布局用户界面，以适应屏幕方向和尺寸。 |

## 获取环境变量

开发者可以使用[getConfigurationSync](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getconfigurationsync10)主动获取当前[环境变量](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#configuration)，包括深浅色模式、屏幕方向、语言地区、屏幕密度、设备类型等，对应用程序作出相应处理，提供更好的用户体验。

```
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const DOMAIN_NUMBER = 0xF811;
const TAG = '[EnvAbility0]';

export default class EnvAbility0 extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    try {
      let value = this.context.resourceManager.getConfigurationSync();
      // 屏幕方向
      let direction = value.direction;
      // 语言文字国家地区
      let locale = value.locale;
    } catch (error) {
      hilog.error(DOMAIN_NUMBER, TAG, 'getConfigurationSync error is ' + error);
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EnvConfig/entry/src/main/ets/EnvAbility/EnvAbility0.ets#L15-L35" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnvAbility0.ets</a></div>


## 设置环境变量

支持应用自定义的环境变量包括[字体大小](#设置字体大小)、[深浅色模式](#设置深浅色模式)、[应用语言](#设置应用语言)，其他环境变量（例如屏幕方向等）均不支持直接设置。

### 设置字体大小

应用字体大小默认不跟随系统变化，开发者可以通过将[configuration标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file#configuration标签)中fontSizeScale的值配置为followSystem，使得应用字体大小跟随系统变化。

开发者可以使用[setFontSizeScale](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-applicationcontext#applicationcontextsetfontsizescale13)设置应用字体大小。设置后，应用字体将不跟随系统变化，不再支持订阅系统字体大小变化。

```
import { UIAbility } from '@kit.AbilityKit';
import { window } from '@kit.ArkUI';

export default class EnvAbility1 extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        return;
      }
    });
    let applicationContext = this.context.getApplicationContext();
    applicationContext.setFontSizeScale(2);
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EnvConfig/entry/src/main/ets/EnvAbility/EnvAbility1.ets#L15-L30" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnvAbility1.ets</a></div>


### 设置深浅色模式

应用深浅色模式默认跟随系统。开发者可以设置应用或组件的深浅色模式。设置后，不再支持订阅系统的深浅色模式变化。

配置生效的优先级为：UIAbility/UIExtensionAbility的深浅色模式 > 应用的深浅色模式 > 系统的深浅色模式。

* **设置应用的深浅色模式：** 使用ApplicationContext的[setColorMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-applicationcontext#applicationcontextsetcolormode11)接口，可以设置应用深浅色模式。

  ```
  import { UIAbility, ConfigurationConstant } from '@kit.AbilityKit';
  import { hilog } from '@kit.PerformanceAnalysisKit';
  import { window } from '@kit.ArkUI';

  export default class EnvAbility2 extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
      windowStage.loadContent('pages/Index', (err, data) => {
        if (err.code) {
          hilog.error(0x0000, 'testTag', 'Failed to load the content.');
          return;
        }
        let applicationContext = this.context.getApplicationContext();
        applicationContext.setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_DARK);
      });
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EnvConfig/entry/src/main/ets/EnvAbility/EnvAbility2.ets#L15-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnvAbility2.ets</a></div>

* **设置UIAbility的深浅色模式：** 使用UIAbilityContext的[setColorMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#setcolormode18)，可以设置UIAbility的深浅色模式。

  ```
  import { UIAbility, ConfigurationConstant } from '@kit.AbilityKit';
  import { hilog } from '@kit.PerformanceAnalysisKit';
  import { window } from '@kit.ArkUI';

  export default class EnvAbility3 extends UIAbility {
    onWindowStageCreate(windowStage: window.WindowStage) {
      windowStage.loadContent('pages/Index', (err, data) => {
        if (err.code) {
          hilog.error(0x0000, 'testTag', 'Failed to load the content.');
          return;
        }
        let uiAbilityContext = this.context;
        uiAbilityContext.setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_DARK);
      });
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EnvConfig/entry/src/main/ets/EnvAbility/EnvAbility3.ets#L15-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnvAbility3.ets</a></div>

* **设置UIExtensionAbility的深浅色模式：** 使用UIExtensionContext的[setColorMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiextensioncontext#setcolormode18)，可以设置UIExtensionAbility的深浅色模式。

  ```
  // UIExtensionAbility不支持三方应用直接继承，故以派生类ShareExtensionAbility举例说明。
  import { ShareExtensionAbility, ConfigurationConstant } from '@kit.AbilityKit';

  export default class EnvAbility4 extends ShareExtensionAbility {
    onForeground() {
      let uiExtensionContext = this.context;
      uiExtensionContext.setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_DARK);
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EnvConfig/entry/src/main/ets/EnvAbility/EnvAbility4.ets#L15-L31" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnvAbility4.ets</a></div>


### 设置应用语言

应用语言默认跟随系统语言变化。开发者可以使用[setLanguage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-applicationcontext#applicationcontextsetlanguage11)设置应用语言。设置后，不再支持订阅系统语言变化。

```
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

export default class EnvAbility5 extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage) {
    windowStage.loadContent('pages/Index', (err, data) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content.');
        return;
      }
      let applicationContext = this.context.getApplicationContext();
      applicationContext.setLanguage('zh-cn');
    });
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EnvConfig/entry/src/main/ets/EnvAbility/EnvAbility5.ets#L15-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnvAbility5.ets</a></div>


## 订阅环境变量

系统配置的变化通常由“设置”中的选项或“控制中心”中的图标触发。订阅环境变量变化，可以使应用程序更加智能地响应系统环境变化，从而提供更好的用户体验。查看当前支持订阅变化的环境变量，参见[Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-configuration)。

基于当前的应用模型，可以通过以下几种方式来实现订阅环境变量的变化。

* [使用ApplicationContext订阅回调](#使用applicationcontext订阅回调)
* [在AbilityStage组件管理器中订阅回调](#在abilitystage组件管理器中订阅回调)
* [在UIAbility组件中订阅回调](#在uiability组件中订阅回调)
* [在ExtensionAbility组件中订阅回调](#在extensionability组件中订阅回调)

### 使用ApplicationContext订阅回调

[ApplicationContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-applicationcontext)提供了注册回调函数以订阅环境变量的变化，并且可以通过调用相应的方法来撤销该回调。这有助于在资源不再需要时释放相关资源，从而提高系统的可靠性和性能。

1. 使用[on](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-applicationcontext#applicationcontextonenvironment)方法，应用程序可以通过在非应用组件模块中订阅环境变量的变化来动态响应这些变化。例如，使用该方法在页面中监测系统语言的变化。

   ```
   import { common, EnvironmentCallback, Configuration } from '@kit.AbilityKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   import { BusinessError } from '@kit.BasicServicesKit';

   const TAG: string = '[EnvAbilityPage6]';
   const DOMAIN_NUMBER: number = 0xFF00;

   @Entry
   @Component
   struct EnvAbilityPage6 {
     private context = this.getUIContext().getHostContext() as common.UIAbilityContext;
     private callbackId: number = 0; // 注册订阅系统环境变化的ID

     subscribeConfigurationUpdate(): void {
       let systemLanguage: string | undefined = this.context.config.language; // 获取系统当前语言

       // 1.获取ApplicationContext
       let applicationContext = this.context.getApplicationContext();

       // 2.通过applicationContext订阅环境变量变化
       let environmentCallback: EnvironmentCallback = {
         onConfigurationUpdated(newConfig: Configuration) {
           hilog.info(DOMAIN_NUMBER, TAG, `onConfigurationUpdated systemLanguage is ${systemLanguage}, newConfig: ${JSON.stringify(newConfig)}`);
           if (systemLanguage !== newConfig.language) {
             hilog.info(DOMAIN_NUMBER, TAG, `systemLanguage from ${systemLanguage} changed to ${newConfig.language}`);
             systemLanguage = newConfig.language; // 将变化之后的系统语言保存，作为下一次变化前的系统语言
           }
         },
         onMemoryLevel(level) {
           hilog.info(DOMAIN_NUMBER, TAG, `onMemoryLevel level: ${level}`);
         }
       }
       try {
         this.callbackId = applicationContext.on('environment', environmentCallback);
       } catch (err) {
         let code = (err as BusinessError).code;
         let message = (err as BusinessError).message;
         hilog.error(DOMAIN_NUMBER, TAG, `Failed to register applicationContext. Code is ${code}, message is ${message}`);
       }
     }

     // 页面展示
     build() {
       // ...
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EnvConfig/entry/src/main/ets/pages/EnvAbilityPage6.ets#L15-L62" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnvAbilityPage6.ets</a></div>

2. 在资源使用完成之后，可以通过调用[off](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-applicationcontext#applicationcontextoffenvironment-1)方法释放相关资源。

   ```
   import { common } from '@kit.AbilityKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   import { BusinessError } from '@kit.BasicServicesKit';

   const TAG: string = '[EnvAbilityPage7]';
   const DOMAIN_NUMBER: number = 0xFF00;

   @Entry
   @Component
   struct EnvAbilityPage7 {
     private context = this.getUIContext().getHostContext() as common.UIAbilityContext;
     private callbackId: number = 0; // 注册订阅系统环境变化的ID

     unsubscribeConfigurationUpdate() {
       let applicationContext = this.context.getApplicationContext();
       try {
         applicationContext.off('environment', this.callbackId);
       } catch (err) {
         let code = (err as BusinessError).code;
         let message = (err as BusinessError).message;
         hilog.error(DOMAIN_NUMBER, TAG, `Failed to unregister applicationContext. Code is ${code}, message is ${message}`);
       }
     }

     // 页面展示
     build() {
       // ...
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EnvConfig/entry/src/main/ets/pages/EnvAbilityPage7.ets#L15-L45" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnvAbilityPage7.ets</a></div>


### 在AbilityStage组件管理器中订阅回调

使用[AbilityStage.onConfigurationUpdate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage#onconfigurationupdate)回调方法订阅环境变量的变化。当环境变量发生变化时，会调用该回调方法。在该方法中，通过[Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-configuration)对象获取最新的环境变量信息。可以进行相应的界面适配等操作，从而提高系统的灵活性和可维护性。

![](./img/a6f8e750.png)

* DevEco Studio默认工程中未自动生成[AbilityStage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage)，AbilityStage文件的创建参见[AbilityStage开发步骤](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/abilitystage#开发步骤)。
* 当使用回调方法订阅系统环境变量的变化时，该回调方法会随着AbilityStage的生命周期而存在，在Module销毁时一并销毁。

例如，在[AbilityStage.onConfigurationUpdate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-abilitystage#onconfigurationupdate)回调方法中实现监测系统语言的变化。

```
import { AbilityStage, Configuration } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[EnvAbilityStage]';
const DOMAIN_NUMBER: number = 0xFF00;

let systemLanguage: string | undefined; // 系统当前语言

export default class EnvAbilityStage extends AbilityStage {
  onCreate(): void {
    systemLanguage = this.context.config.language; // Module首次加载时，获取系统当前语言
    hilog.info(DOMAIN_NUMBER, TAG, `systemLanguage is ${systemLanguage}`);
  }

  onConfigurationUpdate(newConfig: Configuration): void {
    hilog.info(DOMAIN_NUMBER, TAG, `onConfigurationUpdate, language: ${newConfig.language}`);
    hilog.info(DOMAIN_NUMBER, TAG, `onConfigurationUpdated systemLanguage is ${systemLanguage}, newConfig: ${JSON.stringify(newConfig)}`);

    if (systemLanguage !== newConfig.language) {
      hilog.info(DOMAIN_NUMBER, TAG, `systemLanguage from ${systemLanguage} changed to ${newConfig.language}`);
      systemLanguage = newConfig.language; // 将变化之后的系统语言保存，作为下一次变化前的系统语言
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EnvConfig/entry/src/main/ets/EnvAbilityStage/EnvAbilityStage.ets#L15-L40" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnvAbilityStage.ets</a></div>


### 在UIAbility组件中订阅回调

[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)组件提供了[UIAbility.onConfigurationUpdate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-ability#abilityonconfigurationupdate)回调方法用于订阅环境变量的变化。当环境变量发生变化时，会调用该回调方法。在该方法中，通过[Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-configuration)对象获取最新的环境变量信息，而无需重启UIAbility。

![](./img/975189e1.png)

* 当应用通过回调方法订阅环境变量变化时，该订阅会随着所在UIAbility的生命周期持续有效。一旦UIAbility被销毁，之前注册的所有回调订阅将自动失效，同时应用将不会再收到订阅的回调信息。
* 如果使用该接口监听屏幕方向变化，需要在module.json5配置文件的[abilities标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#abilities标签)中将orientation字段配置为auto\_rotation。

例如，在[onConfigurationUpdate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-ability#abilityonconfigurationupdate)回调方法中实现监测系统语言的变化。

```
import { AbilityConstant, Configuration, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[EnvAbility9]';
const DOMAIN_NUMBER: number = 0xFF00;

let systemLanguage: string | undefined; // 系统当前语言

export default class EnvAbility9 extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    systemLanguage = this.context.config.language; // UIAbility实例首次加载时，获取系统当前语言
    hilog.info(DOMAIN_NUMBER, TAG, `systemLanguage is ${systemLanguage}`);
  }

  onConfigurationUpdate(newConfig: Configuration): void {
    hilog.info(DOMAIN_NUMBER, TAG, `onConfigurationUpdated systemLanguage is ${systemLanguage}, newConfig: ${JSON.stringify(newConfig)}`);

    if (systemLanguage !== newConfig.language) {
      hilog.info(DOMAIN_NUMBER, TAG, `systemLanguage from ${systemLanguage} changed to ${newConfig.language}`);
      systemLanguage = newConfig.language; // 将变化之后的系统语言保存，作为下一次变化前的系统语言
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EnvConfig/entry/src/main/ets/EnvAbility/EnvAbility9.ets#L15-L39" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnvAbility9.ets</a></div>


### 在ExtensionAbility组件中订阅回调

[ExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-extensionability)组件提供了[onConfigurationUpdate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-ability#abilityonconfigurationupdate)回调方法用于订阅环境变量的变化。当环境变量发生变化时，会调用该回调方法。在该方法中，通过[Configuration](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-configuration)对象获取最新的环境变量信息。

![](./img/c39666bb.png)

当应用通过回调方法订阅环境变量变化时，该订阅会随着所在ExtensionAbility的生命周期持续有效。一旦ExtensionAbility被销毁，之前注册的所有回调订阅将自动失效，同时应用将不会再收到订阅的回调信息。

以[FormExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formextensionability)为例说明。例如，在[onConfigurationUpdate()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-form-formextensionability#formextensionabilityonconfigurationupdate)回调方法中实现环境变量的变化。

```
import { FormExtensionAbility } from '@kit.FormKit';
import { Configuration } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG: string = '[EnvFormExtensionAbility]';
const DOMAIN_NUMBER: number = 0xFF00;

export default class EnvFormExtensionAbility extends FormExtensionAbility {
  onConfigurationUpdate(newConfig: Configuration) {
    hilog.info(DOMAIN_NUMBER, TAG, 'onConfigurationUpdate: ' + JSON.stringify(newConfig));
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EnvConfig/entry/src/main/ets/EnvFormExtensionAbility/EnvFormExtensionAbility.ets#L15-L28" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EnvFormExtensionAbility.ets</a></div>
