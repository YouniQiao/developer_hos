---
title: "EmbeddedUIExtensionAbility"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/embeddeduiextensionability
---

## 概述

[EmbeddedUIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-embeddeduiextensionability)是EMBEDDED\_UI类型的[ExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-extensionability)组件，提供了跨进程界面嵌入的能力。

EmbeddedUIExtensionAbility需要和[EmbeddedComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-embedded-component)一起配合使用，开发者可以在[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)的页面中通过EmbeddedComponent嵌入本应用的EmbeddedUIExtensionAbility提供的UI。EmbeddedUIExtensionAbility在独立进程中运行，完成其页面的布局和渲染，与UIAbility数据不互通，适用于有进程隔离诉求的模块化开发场景。

在下面的示例中，UIAbility运行在主进程，其中包含多个EmbeddedComponent。每个EmbeddedComponent对应一个EmbeddedUIExtensionAbility。多个EmbeddedUIExtensionAbility可以分别用于实现办公软件中的文档、表格、演示文件。

**图1** EmbeddedUIExtensionAbility示意图

![](./img/47c713fa.png)

## 约束限制

当前EmbeddedUIExtensionAbility和EmbeddedComponent仅支持在拥有多进程配置的设备上使用，目前支持多进程配置的设备有2in1与Tablet。

## 生命周期

[EmbeddedUIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-embeddeduiextensionability)提供了onCreate、onSessionCreate、onSessionDestroy、onForeground、onBackground和onDestroy生命周期回调，根据需要重写对应的回调方法。以下生命周期回调均继承自[UIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensionability)。

* **onCreate**：当EmbeddedUIExtensionAbility创建时回调，执行初始化业务逻辑操作。
* **onSessionCreate**：当EmbeddedUIExtensionAbility界面内容对象创建后调用。
* **onSessionDestroy**：当EmbeddedUIExtensionAbility界面内容对象销毁后调用。
* **onForeground**：当EmbeddedUIExtensionAbility从后台转到前台时触发。
* **onBackground**：当EmbeddedUIExtensionAbility从前台转到后台时触发。
* **onDestroy**：当EmbeddedUIExtensionAbility销毁时回调，可以执行资源清理等操作。

![](./img/5dcead96.png)

EmbeddedComponent只能在UIAbility中使用，且被拉起的EmbeddedUIExtensionAbility需与UIAbility属于同一应用。

EmbeddedUIExtensionAbility支持应用分身，被拉起的EmbeddedUIExtensionAbility与UIAbility属于同一分身应用。

EmbeddedUIExtensionAbility通过[UIExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiextensioncontext)和[UIExtensionContentSession](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensioncontentsession)提供相关能力。本文描述中称被启动的EmbeddedUIExtensionAbility为提供方，称启动EmbeddedUIExtensionAbility的EmbeddedComponent组件为使用方。

## 开发EmbeddedUIExtensionAbility提供方

开发者在实现一个[EmbeddedUIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-embeddeduiextensionability)提供方时，需要在DevEco Studio工程中手动新建一个EmbeddedUIExtensionAbility，具体步骤如下。

1. 在工程Module对应的ets目录下，右键选择“New > Directory”，新建一个目录并命名为embeddeduiextability。
2. 在embeddeduiextability目录，右键选择“New > File”，新建一个.ets文件并命名为EmbeddedUIExtAbility.ets。
3. 打开EmbeddedUIExtAbility.ets文件，导入EmbeddedUIExtensionAbility的依赖包，自定义类继承EmbeddedUIExtensionAbility并实现onCreate、onSessionCreate、onSessionDestroy、onForeground、onBackground和onDestroy生命周期回调。

   ```
   import { EmbeddedUIExtensionAbility, UIExtensionContentSession, Want } from '@kit.AbilityKit';

   const TAG: string = '[EmbeddedUIExtAbility]';

   export default class EmbeddedUIExtAbility extends EmbeddedUIExtensionAbility {
     onCreate() {
       console.info(TAG, `onCreate`);
     }

     onForeground() {
       console.info(TAG, `onForeground`);
     }

     onBackground() {
       console.info(TAG, `onBackground`);
     }

     onDestroy() {
       console.info(TAG, `onDestroy`);
     }

     onSessionCreate(want: Want, session: UIExtensionContentSession) {
       console.info(TAG, `onSessionCreate, want: ${JSON.stringify(want)}`);
       let param: Record<string, UIExtensionContentSession> = {
         'session': session
       };
       let storage: LocalStorage = new LocalStorage(param);
       session.loadContent('pages/extension', storage);
     }

     onSessionDestroy(session: UIExtensionContentSession) {
       console.info(TAG, `onSessionDestroy`);
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EmbeddedUIExtensionAbility/entry/src/main/ets/embeddeduiextability/EmbeddedUIExtAbility.ets#L16-L55" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：EmbeddedUIExtAbility.ets</a></div>

4. EmbeddedUIExtensionAbility的onSessionCreate中加载了入口页面文件pages/extension.ets内容如下：

   ```
   import { UIExtensionContentSession } from '@kit.AbilityKit';

   @Entry()
   @Component
   struct Extension {
     @State message: string = 'EmbeddedUIExtensionAbility Index';
     localStorage: LocalStorage | undefined = this.getUIContext().getSharedLocalStorage();
     private session: UIExtensionContentSession | undefined = this.localStorage?.get<UIExtensionContentSession>('session');

     build() {
       Column() {
         Text(this.message)
           .fontSize(20)
           .fontWeight(FontWeight.Bold)
         Button('terminateSelfWithResult').fontSize(20).onClick(() => {
           this.session?.terminateSelfWithResult({
             resultCode: 1,
             want: {
               bundleName: 'com.samples.embeddeduiextensionability',
               abilityName: 'ExampleEmbeddedAbility'
             }});
         })
       }.width('100%').height('100%')
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EmbeddedUIExtensionAbility/entry/src/main/ets/pages/Extension.ets#L16-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Extension.ets</a></div>

5. 在工程Module对应的[module.json5配置文件](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file)中注册EmbeddedUIExtensionAbility，type标签需要设置为“embeddedUI”，srcEntry标签表示当前EmbeddedUIExtensionAbility组件所对应的代码路径。

   ```
   {
     "module": {
       // ···
       "extensionAbilities": [
       // ···
         {
           "name": "EmbeddedUIExtAbility",
           "icon": "$media:startIcon",
           "description": "EmbeddedUIExtAbility",
           "type": "embeddedUI",
           "srcEntry": "./ets/embeddeduiextability/EmbeddedUIExtAbility.ets"
         }
       ]
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EmbeddedUIExtensionAbility/entry/src/main/module.json5#L15-L78" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：module.json5</a></div>


## 开发EmbeddedUIExtensionAbility使用方

开发者可以在[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)的页面中通过[EmbeddedComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-embedded-component)容器加载自己应用内的[EmbeddedUIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-embeddeduiextensionability)。此外，EmbeddedUIExtensionAbility在[want](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-want).parameters中新增了两个字段ohos.extension.processMode.hostSpecified和ohos.extension.processMode.hostInstance。

* ohos.extension.processMode.hostSpecified控制非首次启动的EmbeddedUIExtensionAbility是否运行在同[UIExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiextensionability)的进程中，参数是进程名称。例如，"ohos.extension.processMode.hostSpecified"： "com.ohos.inentexecutedemo:embeddedUI"。
* ohos.extension.processMode.hostInstance控制启动的EmbeddedUIExtensionAbility是否按照独立进程启动，传入false时，按照UIExtensionAbility的进程模型启动，入参true的时候，不管被拉起的UIExtensionAbility配置的是什么进程模型，都会新增一个进程，例如，"ohos.extension.processMode.hostInstance": "true"。

ohos.extension.processMode.hostSpecified和ohos.extension.processMode.hostInstance同时配置时，hostSpecified优先，会运行在指定的进程中。

如在首页文件：pages/Index.ets中添加如下内容：

```
import { Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

@Entry
@Component
struct BasicClass {
  @State message: string = 'Message: ';
  private want: Want = {
    bundleName: 'com.samples.embeddeduiextensionability',
    abilityName: 'EmbeddedUIExtAbility',
    parameters: {
      'ohos.extension.processMode.hostInstance': 'true'
    }
  };

  build() {
    Row() {
      Column() {
        Text(this.message).fontSize(30)
        EmbeddedComponent(this.want, EmbeddedType.EMBEDDED_UI_EXTENSION)
          .width('100%')
          .height('90%')
          .onTerminated((info: TerminationInfo) => {
            this.message = 'Termination: code = ' + info.code + ', want = ' + JSON.stringify(info.want);
          })
          .onError((error: BusinessError) => {
            this.message = 'Error: code = ' + error.code;
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/Ability/EmbeddedUIExtensionAbility/entry/src/main/ets/pages/BasicClass.ets#L16-L51" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：BasicClass.ets</a></div>
