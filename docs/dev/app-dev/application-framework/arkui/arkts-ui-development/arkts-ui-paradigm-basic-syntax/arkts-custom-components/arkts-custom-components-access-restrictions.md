---
title: "自定义组件成员属性访问限定符使用限制"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-custom-components-access-restrictions
format: md
---


在状态管理V1版本中，完成自定义组件封装后，调用方难以明确知晓应传入哪些变量作为组件的输入参数。当组件开发者不希望状态变量被外部初始化时，可以使用private限定符来限制当前变量不允许被外部初始化。外部初始化也需要遵循装饰器自身的规则，具体规则见[使用限制](#使用限制)。

ArkTS会对自定义组件的成员变量使用的访问限定符private/public/protected进行校验，当不按规范使用访问限定符private/public/protected时，会产生对应的日志信息。

在阅读本文档前，建议提前阅读：[状态管理概述](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview)。

![](./img/55d77673.png)

从API version 12开始，支持自定义组件成员属性访问限定符使用限制的规则。

## 使用限制

* [@State](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state)/[@Prop](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop)/[@Provide](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume)/[@BuilderParam](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam)/常规成员变量(不涉及更新的普通变量)的初始化规则为可以被外部初始化，也可以使用本地值进行初始化。当组件开发者不希望当前变量被外部初始化时，可以使用private进行修饰，在这种情况下，错误进行外部初始化会有编译告警日志提示。
* [@StorageLink](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storagelink)/[@StorageProp](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-appstorage#storageprop)/[@LocalStorageLink](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstoragelink)/[@LocalStorageProp](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage#localstorageprop)/[@Consume](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume)变量的初始化规则为不可以被外部初始化，当组件开发者希望当前变量被外部初始化而使用public修饰时，与装饰器本身的初始化规则不符，会有编译告警日志提示。
* [@Link](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-link)/[@ObjectLink](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-observed-and-objectlink)变量的初始化规则为必须被外部初始化，禁止本地初始化。当组件开发者使用private对变量进行修饰时，与装饰器本身的初始化规则不符，会有编译告警日志提示。
* 由于struct没有继承能力，上述所有的这些变量使用protected修饰时，会有编译告警日志提示。
* [@Require](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-require)含义是当前被@Require装饰的变量必须被外部初始化，当@Require和private同时装饰[@State](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-state)/[@Prop](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-prop)/[@Provide](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-component-state-management/arkts-provide-and-consume)/[@BuilderParam](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-builderparam)/常规成员变量(不涉及更新的普通变量)时，它们的含义是自相矛盾的，会有编译告警日志提示。

## 使用场景

1. 当成员变量被private访问限定符和@State/@Prop/@Provide/@BuilderParam装饰器同时修饰，并且通过父组件进行初始化赋值，ArkTS会进行校验并产生告警日志。

   【反例】

   ```
   @Entry
   @Component
   struct LinkErrorAccessRestrictions {
     @Builder
     buildTest() {
       Text('Parent builder')
     }

     build() {
       Column() {
         LinkErrorComponentChild({
           stateValue: 'Hello',
           propValue: 'Hello',
           provideValue: 'Hello',
           builderValue: this.buildTest,
           regularValue: 'Hello'
         })
       }
       .width('100%')
     }
   }

   @Component
   struct LinkErrorComponentChild {
     // 此处使用private修饰符时会出现告警日志
     @State private stateValue: string = 'Hello';
     // 此处使用private修饰符时会出现告警日志
     @Prop private propValue: string = 'Hello';
     // 此处使用private修饰符时会出现告警日志
     @Provide private provideValue: string = 'Hello';
     // 此处使用private修饰符时会出现告警日志
     @BuilderParam private builderValue: () => void = this.buildTest;
     // 此处使用private修饰符时会出现告警日志
     private regularValue: string = 'Hello';

     @Builder
     buildTest() {
       Text('Child builder')
     }

     build() {
       Column() {
         Text('Hello')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/Restrictions/entry/src/main/ets/pages/linkWithPrivate/LlinkWithPrivateErrorCase.ets#L16-L66" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：LlinkWithPrivateErrorCase.ets</a></div>


   编译告警日志如下：

   ```
   Property 'stateValue' is private and can not be initialized through the component constructor.
   Property 'propValue' is private and can not be initialized through the component constructor.
   Property 'provideValue' is private and can not be initialized through the component constructor.
   Property 'builderValue' is private and can not be initialized through the component constructor.
   Property 'regularValue' is private and can not be initialized through the component constructor.
   ```

   【正例】

   ```
   @Entry
   @Component
   struct LinkAccessRestrictions {
     @Builder
     buildTest() {
       Text('Parent builder')
     }

     build() {
       Column() {
         LinkComponentChild({
           stateValue: 'Hello',
           propValue: 'Hello',
           provideValue: 'Hello',
           builderValue: this.buildTest,
           regularValue: 'Hello'
         })
       }
       .width('100%')
     }
   }

   @Component
   struct LinkComponentChild {
     @State stateValue: string = 'Hello';
     @Prop propValue: string = 'Hello';
     @Provide provideValue: string = 'Hello';
     @BuilderParam builderValue: () => void = this.buildTest;
     regularValue: string = 'Hello';

     @Builder
     buildTest() {
       Text('Child builder')
     }

     build() {
       Column() {
         Text('Hello')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/Restrictions/entry/src/main/ets/pages/linkWithPrivate/LlinkWithPrivateCorrectCase.ets#L16-L61" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：LlinkWithPrivateCorrectCase.ets</a></div>

2. 当成员变量被public访问限定符和@StorageLink/@StorageProp/@LocalStorageLink/@LocalStorageProp/@Consume装饰器同时修饰时，ArkTS会进行校验并产生告警日志。

   【反例】

   ```
   @Entry
   @Component
   struct PublicErrorAccessRestrictions {
     @Provide consumeValue: string = 'Hello';

     build() {
       Column() {
         PublicErrorComponentChild()
       }
       .width('100%')
     }
   }

   @Component
   struct PublicErrorComponentChild {
     // 此处使用public修饰符时会出现告警日志
     @LocalStorageProp('sessionLocalProp') public localPropValue: string = 'Hello';
     // 此处使用public修饰符时会出现告警日志
     @LocalStorageLink('sessionLocalLink') public localLinkValue: string = 'Hello';
     // 此处使用public修饰符时会出现告警日志
     @StorageProp('sessionProp') public storagePropValue: string = 'Hello';
     // 此处使用public修饰符时会出现告警日志
     @StorageLink('sessionLink') public storageLinkValue: string = 'Hello';
     // 此处使用public修饰符时会出现告警日志
     @Consume public consumeValue: string;

     build() {
       Column() {
         Text('Hello')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/Restrictions/entry/src/main/ets/pages/publicWithStorageProp/PublicWithStoragePropErrorCase.ets#L16-L52" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PublicWithStoragePropErrorCase.ets</a></div>


   编译告警日志如下：

   ```
   Property 'localPropValue' can not be decorated with both '@LocalStorageProp' and public.
   Property 'localLinkValue' can not be decorated with both '@LocalStorageLink' and public.
   Property 'storagePropValue' can not be decorated with both '@StorageProp' and public.
   Property 'storageLinkValue' can not be decorated with both '@StorageLink' and public.
   Property 'consumeValue' can not be decorated with both '@Consume' and public.
   ```

   【正例】

   ```
   @Entry
   @Component
   struct PublicCorrectAccessRestrictions {
     @Provide consumeValue: string = 'Hello';

     build() {
       Column() {
         PublicCorrectComponentChild()
       }
       .width('100%')
     }
   }

   @Component
   struct PublicCorrectComponentChild {
     @LocalStorageProp('sessionLocalProp') localPropValue: string = 'Hello';
     @LocalStorageLink('sessionLocalLink') localLinkValue: string = 'Hello';
     @StorageProp('sessionProp') storagePropValue: string = 'Hello';
     @StorageLink('sessionLink') storageLinkValue: string = 'Hello';
     @Consume consumeValue: string;

     build() {
       Column() {
         Text('Hello')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/Restrictions/entry/src/main/ets/pages/publicWithStorageProp/PublicWithStoragePropCorrectCase.ets#L16-L47" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PublicWithStoragePropCorrectCase.ets</a></div>

3. 当成员变量被private访问限定符和@Link/@ObjectLink装饰器同时修饰时，ArkTS会进行校验并产生告警日志。

   【反例】

   ```
   @Entry
   @Component
   struct PrivateWithLinkErrorAccessRestrictions {
     @State linkValue: string = 'Hello';
     @State objectLinkValue: PrivateErrorComponentObj = new PrivateErrorComponentObj();

     build() {
       Column() {
         PrivateWithLinkErrorComponentChild({ linkValue: this.linkValue, objectLinkValue: this.objectLinkValue })
       }
       .width('100%')
     }
   }

   @Observed
   class PrivateErrorComponentObj {
     public count: number = 0;
   }

   @Component
   struct PrivateWithLinkErrorComponentChild {
     // 此处使用private修饰符时会出现告警日志
     @Link private linkValue: string;
     // 此处使用private修饰符时会出现告警日志
     @ObjectLink private objectLinkValue: PrivateErrorComponentObj;

     build() {
       Column() {
         Text('Hello')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/Restrictions/entry/src/main/ets/pages/privateWithLink/PrivateWithLinkEerrorCase.ets#L16-L52" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PrivateWithLinkEerrorCase.ets</a></div>


   编译告警日志如下：

   ```
   Property 'linkValue' can not be decorated with both '@Link' and private.
   Property 'objectLinkValue' can not be decorated with both '@ObjectLink' and private.
   ```

   【正例】

   ```
   @Entry
   @Component
   struct PrivateWithLinkAccessRestrictions {
     @State linkValue: string = 'Hello';
     @State objectLinkValue: PrivateComponentObj = new PrivateComponentObj();

     build() {
       Column() {
         PrivateWithLinkComponentChild({ linkValue: this.linkValue, objectLinkValue: this.objectLinkValue })
       }
       .width('100%')
     }
   }

   @Observed
   class PrivateComponentObj {
     public count: number = 0;
   }

   @Component
   struct PrivateWithLinkComponentChild {
     @Link linkValue: string;
     @ObjectLink objectLinkValue: PrivateComponentObj;

     build() {
       Column() {
         Text('Hello')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/Restrictions/entry/src/main/ets/pages/privateWithLink/PrivateWithLinkCorrectCase.ets#L16-L50" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PrivateWithLinkCorrectCase.ets</a></div>

4. 当成员变量被protected访问限定符修饰时，ArkTS会进行校验并产生告警日志。

   【反例】

   ```
   @Entry
   @Component
   struct ProtectedErrorAccessRestrictions {
     build() {
       Column() {
         ProtectedErrorComponentChild({ regularValue: 'Hello' })
       }
       .width('100%')
     }
   }

   @Component
   struct ProtectedErrorComponentChild {
     // 此处使用protected修饰符时会出现告警日志
     protected regularValue: string = 'Hello';

     build() {
       Column() {
         Text('Hello')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/Restrictions/entry/src/main/ets/pages/protectedInStruct/ProtectedInStructErrorCase.ets#L16-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ProtectedInStructErrorCase.ets</a></div>


   编译告警日志如下：

   ```
   The member attributes of a struct can not be protected.
   ```

   【正例】

   ```
   @Entry
   @Component
   struct ProtectedCorrectAccessRestrictions {
     build() {
       Column() {
         ProtectedCorrectComponentChild({ regularValue: 'Hello' })
       }
       .width('100%')
     }
   }

   @Component
   struct ProtectedCorrectComponentChild {
     regularValue: string = 'Hello';

     build() {
       Column() {
         Text('Hello')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/Restrictions/entry/src/main/ets/pages/protectedInStruct/ProtectedInStructCorrectCase.ets#L16-L41" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ProtectedInStructCorrectCase.ets</a></div>

5. 当成员变量被private访问限定符、@Require和@State/@Prop/@Provide/@BuilderParam装饰器同时修饰时，ArkTS会进行校验并产生告警日志。

   【反例】

   ```
   @Entry
   @Component
   struct PrivateErrorAccessRestrictions {
     build() {
       Column() {
         PrivateErrorComponentChild({ propValue: 'Hello' })
       }
       .width('100%')
     }
   }

   @Component
   struct PrivateErrorComponentChild {
     // 此处使用private修饰符时会出现告警日志
     @Require @Prop private propValue: string = 'Hello';

     build() {
       Column() {
         Text('Hello')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/Restrictions/entry/src/main/ets/pages/privateWithRequire/PrivateWithRequireErrorCase.ets#L16-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PrivateWithRequireErrorCase.ets</a></div>


   编译告警日志如下：

   ```
   Property 'propValue' can not be decorated with both '@Require' and private.
   Property 'propValue' is private and can not be initialized through the component constructor.
   ```

   【正例】

   ```
   @Entry
   @Component
   struct PrivateCorrectAccessRestrictions {
     build() {
       Column() {
         PrivateCorrectComponentChild({ propValue: 'Hello' })
       }
       .width('100%')
     }
   }

   @Component
   struct PrivateCorrectComponentChild {
     @Require @Prop propValue: string = 'Hello';

     build() {
       Column() {
         Text('Hello')
           .fontSize(50)
           .fontWeight(FontWeight.Bold)
       }
     }
   }
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/Restrictions/entry/src/main/ets/pages/privateWithRequire/PrivateWithRequireCorrectCase.ets#L16-L41" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PrivateWithRequireCorrectCase.ets</a></div>
