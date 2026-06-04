---
title: "@Once：初始化同步一次"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-once
---

想要实现仅从外部初始化一次且不接受后续同步变化的能力，可以使用@Once装饰器搭配@Param装饰器。

阅读本文档前，请先阅读[@Param](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-param)。

![](./img/7c8723f9.png)

从API version 12开始，在@ComponentV2装饰的自定义组件中支持使用@Once装饰器。

从API version 12开始，该装饰器支持在元服务中使用。

从API version 23开始，该装饰器支持在ArkTS卡片中使用。

## 概述

@Once装饰器在变量初始化时接受外部传入值进行初始化，后续数据源更改不会同步给子组件：

* @Once必须搭配@Param使用，单独使用或搭配其他装饰器使用都是不允许的。
* @Once不影响@Param的观测能力，仅针对数据源的变化做拦截。
* @Once与@Param装饰变量的先后顺序不影响使用功能。
* @Once与@Param搭配使用时，可以在本地修改@Param变量的值。

## 装饰器使用规则说明

@Once装饰器作为辅助装饰器，本身没有装饰类型要求和变量观察能力。

| @Once变量装饰器 | 说明 |
| --- | --- |
| 装饰器参数 | 无。 |
| 使用条件 | 无法单独使用，必须配合@Param装饰器使用。 |

## 限制条件

* @Once仅在[@ComponentV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-custom-components#componentv2)装饰的自定义组件中与@Param搭配使用。

  ```
  @ComponentV2
  struct MyComponent {
    @Param @Once onceParam: string = 'onceParam'; // 正确用法
    @Once onceStr: string = 'Once'; // 错误用法，@Once无法单独使用
    @Local @Once onceLocal: string = 'onceLocal'; // 错误用法，@Once不能与@Local一起使用
  // ···
  }
  @Component
  struct Index {
    @Once @Param onceParam: string = 'onceParam'; // 错误用法
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/ArktsNewOnce/entry/src/main/ets/pages/MyComponent.ets#L29-L57" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MyComponent.ets</a></div>

* @Once与@Param的先后顺序无关，可以写成@Param @Once也可以写成@Once @Param。

  ```
  @ComponentV2
  struct MyComponent {
  // ···
    @Param @Once param1: number = 0;
    @Once @Param param2: number = 0;
  // ···
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/ArktsNewOnce/entry/src/main/ets/pages/MyComponent.ets#L30-L58" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MyComponent.ets</a></div>


## 使用场景

### 变量仅初始化同步一次

@Once用于期望变量仅初始化同步数据源一次，之后不再继续同步变化的场景。

```
@ComponentV2
struct ChildComponent {
  // @Once装饰的onceParam仅初始化同步一次
  @Param @Once onceParam: string = '';

  build() {
    Column() {
      Text(`onceParam: ${this.onceParam}`)
    }
  }
}

@Entry
@ComponentV2
struct MyComponent {
  // ...
  @Local message: string = 'Hello World';

  build() {
    Column() {
      Text(`Parent message: ${this.message}`)
      Button('change message')
        .onClick(() => {
          this.message = 'Hello Tomorrow';
        })
      ChildComponent({ onceParam: this.message })
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/ArktsNewOnce/entry/src/main/ets/pages/MyComponent.ets#L16-L59" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：MyComponent.ets</a></div>


### 本地修改@Param变量

当@Once与@Param结合使用时，可以解除@Param无法在本地修改的限制，并能够触发UI刷新。此时，使用@Param和@Once的效果类似于[@Local](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-local)，但@Param和@Once还能接收外部传入的初始值。

```
@ObservedV2
class Info {
  @Trace name: string;
  constructor(name: string) {
    this.name = name;
  }
}
@ComponentV2
struct Child {
  // @Once与@Param结合使用时，可以在本地修改，并能够触发UI刷新
  @Param @Once onceParamNum: number = 0;
  @Param @Once @Require onceParamInfo: Info;

  build() {
    Column() {
      Text(`Child onceParamNum: ${this.onceParamNum}`)
      Text(`Child onceParamInfo: ${this.onceParamInfo.name}`)
      Button('changeOnceParamNum')
        .onClick(() => {
          this.onceParamNum++;
        })
      Button('changeParamInfo')
        .onClick(() => {
          this.onceParamInfo = new Info('Cindy');
        })
    }
  }
}
@Entry
@ComponentV2
struct Index {
  @Local localNum: number = 10;
  @Local localInfo: Info = new Info('Tom');

  build() {
    Column() {
      Text(`Parent localNum: ${this.localNum}`)
      Text(`Parent localInfo: ${this.localInfo.name}`)
      Button('changeLocalNum')
        .onClick(() => {
          this.localNum++;
        })
      Button('changeLocalInfo')
        .onClick(() => {
          this.localInfo = new Info('Cindy');
        })
      Child({
        onceParamNum: this.localNum,
        onceParamInfo: this.localInfo
      })
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/ArktsNewOnce/entry/src/main/ets/pages/Index.ets#L16-L69" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：Index.ets</a></div>
