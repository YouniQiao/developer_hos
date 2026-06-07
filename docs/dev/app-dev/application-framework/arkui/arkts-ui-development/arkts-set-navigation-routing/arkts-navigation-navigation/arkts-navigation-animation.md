---
title: "Navigation转场动画"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-navigation-navigation/arkts-navigation-animation
format: md
---


[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)存在默认转场动画，此外也提供了自定义转场和共享元素转场能力。

## 系统默认转场

系统提供了多种默认转场类型，可以通过[NavDestination.systemTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#systemtransition14)接口实现，具体示例请参考[设置指定的NavDestination系统转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#示例3设置指定的navdestination系统转场)。

![](./img/b70d4504.png)

* NavDestination的默认转场动画使用[弹簧曲线](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-use-animation/arkts-animation-curve/arkts-spring-curve)，其时长与物理曲线参数有关，而且不同设备上的默认动画不同，因此默认转场动画时长不可控，不建议与业务耦合，若需要监听动画结束，建议使用[自定义转场](#自定义转场)。
* [Dialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#navdestinationmode枚举说明11)类型的NavDestination默认无转场动画；从API version 13开始，Dialog类型的NavDestination默认存在系统转场动画。

默认转场动画支持关闭，有两种方式：

* 全局关闭。

  Navigation可以通过NavPathStack提供的[disableAnimation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#disableanimation11)接口，关闭或打开当前Navigation的所有转场动画。

  ```
  pageStack: NavPathStack = new NavPathStack();

  aboutToAppear(): void {
    this.pageStack.disableAnimation(true);
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NavigationSample/entry/src/main/ets/pages/navigation/template1/PageAnimated.ets#L34-L40" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PageAnimated.ets</a></div>

* 单次关闭。

  NavPathStack中提供的[pushPath](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#pushpath10)、[pop](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#pop10)、[replacePath](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#replacepath11)等接口可以设置animated参数，该参数用于设置是否有转场动画。需要单次关闭转场动画，可以将animated置为false，设置后不影响下次转场动画。

## 自定义转场

Navigation提供了两种自定义转场接口：Navigation自定义转场、NavDestination自定义转场。

* Navigation自定义转场动画由[customNavContentTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#customnavcontenttransition11)事件提供，适用于控制Navigation内所有页面的场景，统一转场动画效果。步骤如下，具体示例代码请参考[设置可交互转场动画](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#示例3设置可交互转场动画)。

  1. 实现一个自定义转场动画工具类CustomNavigationUtils，通过一个Map管理各页面的自定义动画对象CustomTransition。页面在创建时注册其自定义转场动画对象，在销毁时取消注册。
  2. 实现一个转场协议对象[NavigationAnimatedTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#navigationanimatedtransition11)。其中，transition属性为自定义转场动画的具体实现，开发者需在此实现自己的转场动画逻辑，系统在转场开始时会调用此方法。timeout属性表示转场结束的超时时间，默认为1000ms。onTransitionEnd为转场结束时的回调。
  3. 调用customNavContentTransition方法并返回实现的转场协议对象，若返回undefined，则使用系统默认转场。
* NavDestination支持自定义转场动画，适用于控制单个页面的转场效果。通过设置[customTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#customtransition15)属性即可实现单个页面的自定义转场效果。步骤如下，示例代码请参考[设置NavDestination自定义转场](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#示例2设置navdestination自定义转场)。

  1. 实现[NavDestination的转场代理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#navdestinationtransitiondelegate15)，针对不同的堆栈操作类型返回自定义的转场协议对象[NavDestinationTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#navdestinationtransition15)。其中，event是必填参数，需在此处实现自定义转场动画的逻辑，onTransitionEnd、duration、curve与delay为可选参数，分别对应动画结束后的回调、动画持续时间、动画曲线类型与开始前的延时。如果在转场代理中返回多个转场协议对象，这些动画效果将逐层叠加。
  2. 通过调用NavDestination组件的customTransition属性，并传入上述实现的转场代理，完成自定义转场的设置。

![](./img/e6c084eb.png)

同时使用[customNavContentTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#customnavcontenttransition11)和[customTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navdestination#customtransition15)时，customNavContentTransition优先级更高。

## 共享元素转场

NavDestination之间切换时可以通过[geometryTransition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-transition-animation-geometrytransition#geometrytransition)实现共享元素转场，示例如下。配置了共享元素转场的页面，同时需要关闭系统默认的转场动画，否则默认动画会与共享元素动画叠加，导致效果异常。

1. 为需要实现共享元素转场的组件添加geometryTransition属性，id参数必须在两个NavDestination之间保持一致。

   ```
   // 起始页配置共享元素id
   NavDestination() {
     Column() {
       // ...
       // 请将$r('app.media.startIcon')替换为实际资源文件
       Image($r('app.media.startIcon'))
         .geometryTransition('sharedId')
         .width(100)
         .height(100)
     }
   }.title('FromPage')
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NavigationSample/entry/src/main/ets/pages/navigation/template1/GeometryTransition.ets#L21-L48" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：GeometryTransition.ets</a></div>


   ```
   // 目的页配置共享元素id
   NavDestination() {
     Column() {
       // 请将$r('app.media.startIcon')替换为实际资源文件
       Image($r('app.media.startIcon'))
         .geometryTransition('sharedId')
         .width(200)
         .height(200)
     }
   }
   .title('ToPage')
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NavigationSample/entry/src/main/ets/pages/navigation/template1/GeometryTransition.ets#L57-L69" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：GeometryTransition.ets</a></div>

2. 将页面路由的操作，放到[animateTo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-uicontext-uicontext#animateto)动画闭包中，配置对应的动画参数以及关闭系统默认的转场。

   ```
   NavDestination() {
     Column() {
       // $r('app.string.ToPage')需要开发者替换为实际的资源文件，资源文件中的value值为“跳转到目的页”

       Button($r('app.string.ToPage'))
         .width('80%')
         .height(40)
         .margin(20)
         .onClick(() => {
           this.getUIContext()?.animateTo({ duration: 1000 }, () => {
             this.navPathStack.pushPath({ name: 'ToPage' }, false)
           });
         })
       // ...
     }
   }.title('FromPage')
   ```

   

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/NavigationSample/entry/src/main/ets/pages/navigation/template1/GeometryTransition.ets#L23-L47" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：GeometryTransition.ets</a></div>
