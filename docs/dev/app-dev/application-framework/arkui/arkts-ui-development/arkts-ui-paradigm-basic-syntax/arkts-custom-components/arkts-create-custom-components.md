---
title: "创建自定义组件"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-create-custom-components
format: md
---


在ArkUI中，UI显示的内容均为组件，由框架直接提供的称为系统组件，由开发者定义的称为自定义组件。进行UI界面开发时，不仅要组合使用系统组件，还需考虑代码的可复用性、业务逻辑与UI的分离，以及后续版本的演进等因素。因此，将UI和部分业务逻辑封装成自定义组件是不可或缺的能力。

自定义组件具有以下特点：

* 可组合：允许开发者组合使用系统组件及其属性和方法。
* 可重用：自定义组件可以被其他组件重用，并作为不同的实例在不同的父组件或容器中使用。
* 数据驱动UI更新：通过状态变量的改变，来驱动UI的刷新。

![](./img/b8c129dc.png)

从API version 24开始，可通过在应用工程的[module.json5配置文件](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file)中配置[metadata标签](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file#metadata标签)来使能自定义组件支持跨[Ability](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-ability)迁移。具体配置方式为：新增[name](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file#metadata标签)为"enableCustomComponentCrossAbility"，[value](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file#metadata标签)为"true"。因为自定义组件提供的是UI能力，所以这里的Ability也特指[UIAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-app-ability-uiability)。具体示例参考[自定义组件支持跨Ability迁移](#自定义组件支持跨ability迁移)。

## 自定义组件的基本用法

以下示例展示了自定义组件的基本用法。

```
@Component
struct HelloComponent {
  @State message: string = 'Hello, World!';

  build() {
    // HelloComponent自定义组件组合系统组件Row和Text
    Row() {
      Text(this.message)
        .onClick(() => {
          // 状态变量message的改变驱动UI刷新，UI从'Hello, World!'刷新为'Hello, ArkUI!'
          this.message = 'Hello, ArkUI!';
        })
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/ParentComponent.ets#L15-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ParentComponent.ets</a></div>


![](./img/d645bcce.png)

如果在其他文件中引用自定义组件，需要使用export关键字导出组件，并在使用的页面import该自定义组件。

可以在其他自定义组件的build()函数中多次创建HelloComponent，以实现自定义组件的重用。

```
@Entry
@Component
struct ParentComponent {
  build() {
    Column() {
      // 多次创建HelloComponent，实现自定义组件的重用
      Text('ArkUI message')
      HelloComponent({ message: 'Hello World!' })
      Divider()
      HelloComponent({ message: 'Hello ArkTS!' })
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/ParentComponent.ets#L33-L47" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ParentComponent.ets</a></div>


要完全理解上面的示例，需要了解自定义组件的以下概念定义，本文将在后面的小节中介绍：

* [自定义组件的基本结构](#自定义组件的基本结构)
* [成员函数/变量](#成员函数变量)
* [自定义组件的参数规定](#自定义组件的参数规定)
* [build()函数实现规则](#build函数实现规则)
* [自定义组件通用样式](#自定义组件通用样式)

## 自定义组件的基本结构

### struct

自定义组件基于struct实现，struct + 自定义组件名 + \{...\}的组合构成自定义组件，不能有继承关系。对于struct的实例化，可以省略new。

![](./img/cd73a20e.png)

自定义组件名、类名、函数名不得与系统组件名重复。

### @Entry

@Entry装饰的自定义组件将作为[UI页面](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-set-navigation-routing/arkts-router-to-navigation#页面结构)的入口。在单个UI页面中，仅允许存在一个由@Entry装饰的自定义组件作为页面的入口。

![](./img/a38af0e2.png)

从API version 9开始，该装饰器支持在ArkTS卡片中使用。

从API version 10开始，@Entry可以接受一个可选的[LocalStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-state-management#localstorage9)参数或者一个可选的EntryOptions10+参数。

从API version 11开始，该装饰器支持在元服务中使用。

```
@Entry
@Component
struct MyComponent {
  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/Entry.ets#L15-L33" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Entry.ets</a></div>


**EntryOptions10+**

命名路由跳转选项。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| routeName | string | 否 | 是 | 表示作为命名路由页面的名字。 |
| storage | [LocalStorage](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage) | 否 | 是 | 页面级的UI状态存储。当未传入时，框架会创建一个新的LocalStorage实例作为默认值。 |
| useSharedStorage12+ | boolean | 否 | 是 | 是否使用[loadContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage#loadcontent9)传入的LocalStorage实例对象。默认值false。true：使用共享的[LocalStorage](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage)实例对象。false：不使用共享的[LocalStorage](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage)实例对象。 |

![](./img/5d9f2479.png)

当useSharedStorage设置为true且storage已赋值时，useSharedStorage的值优先级更高。

```
@Entry({ routeName: 'myPage' })
@Component
struct MyComponent {
  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/RouteName.ets#L15-L33" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：RouteName.ets</a></div>


### @Component

@Component装饰的struct为V1自定义组件，可以使用[状态管理V1版本](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#状态管理v1)装饰器的能力。

![](./img/2b051c37.png)

从API version 9开始，该装饰器支持在ArkTS卡片中使用。

从API version 11开始，@Component可以接受一个[ComponentOptions参数](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-parameter#componentoptions)。

从API version 11开始，该装饰器支持在元服务中使用。

```
@Component
struct MyComponent {
  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/Component.ets#L16-L33" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Component.ets</a></div>


### @ComponentV2

@ComponentV2装饰的struct为V2自定义组件，可以使用[状态管理V2版本](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview#状态管理v2)装饰器的能力。

![](./img/0cb4624d.png)

@ComponentV2装饰器从API version 12开始支持。

从API version 12开始，该装饰器支持在元服务中使用。

从API version 23开始，该装饰器支持在ArkTS卡片中使用。

和[@Component装饰器](#component)一样，@ComponentV2装饰器用于装饰自定义组件：

* 在@ComponentV2装饰的自定义组件中，开发者仅可以使用全新的状态变量装饰器，包括[@Local](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-local)、[@Param](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-param)、[@Once](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-once)、[@Event](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-event)、[@Provider](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer)、[@Consumer](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v2/arkts-v2-manage-component-state/arkts-new-provider-and-consumer)等。
* @ComponentV2装饰的自定义组件暂不支持[LocalStorage](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-v1/arkts-v1-application-state-management/arkts-localstorage)等现有自定义组件的能力。
* 无法同时使用@ComponentV2与@Component装饰同一个struct结构。
* @ComponentV2支持一个可选的[ComponentOptions参数](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-custom-component-parameter#componentoptions)，来实现[组件冻结功能](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-freeze/arkts-custom-components-freezev2)。
* 一个简单的@ComponentV2装饰的自定义组件应具有以下部分：

  ```
  @Entry
  @ComponentV2 // 装饰器
  struct ComponentV2Test { // struct声明的数据结构
    @Local message: string = 'Hello World';
    build() { // build定义的UI
      RelativeContainer() {
        Text(this.message)
          .id('HelloWorld')
          // $r('app.float.page_text_font_size')需要替换为开发者所需的资源文件;
          .fontSize($r('app.float.page_text_font_size'))
          .fontWeight(FontWeight.Bold)
          .alignRules({
            center: { anchor: '__container__', align: VerticalAlign.Center },
            middle: { anchor: '__container__', align: HorizontalAlign.Center }
          })
          .onClick(() => {
            this.message = 'Welcome';
          })
      }
      .height('100%')
      .width('100%')
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/wrapbuilder/entry/src/main/ets/pages/PageComponentV2.ets#L20-L44" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：PageComponentV2.ets</a></div>


除非特别说明，@ComponentV2装饰的自定义组件将与@Component装饰的自定义组件保持相同的行为。

### build()函数

build()函数用于定义自定义组件的声明式UI描述，自定义组件必须定义build()函数。

```
@Component
struct MyComponent {
  build() {
    // ...
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/BuildFunction.ets#L16-L33" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：BuildFunction.ets</a></div>


### @Reusable

@Reusable装饰V1自定义组件，使得该自定义组件具有被复用的能力。详细请参考：[@Reusable装饰器：组件复用](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-reusable#使用场景)。

![](./img/89f35f2e.png)

从API version 10开始，该装饰器支持在ArkTS卡片中使用。

```
@Reusable
@Component
struct MyComponent {
  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/Reusable.ets#L16-L34" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Reusable.ets</a></div>


### @ReusableV2

@ReusableV2装饰V2自定义组件，使得该自定义组件具有被复用的能力。详细请参考：[@ReusableV2装饰器：V2组件复用](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-custom-components/arkts-component-reusable/arkts-new-reusablev2#使用场景)。

![](./img/162cfc23.png)

从API version 18开始，该装饰器支持在元服务中使用。

```
@ReusableV2
@ComponentV2
struct MyComponent {
  // ...
}
```

## 成员函数/变量

自定义组件除了必须要实现build()函数外，还可以实现其他成员函数，成员函数具有以下约束：

* 自定义组件的成员函数仅能从组件内部访问，且不建议声明为静态函数。

自定义组件可以包含成员变量，成员变量具有以下约束：

* 自定义组件的成员变量仅能从组件内部访问，且不建议声明为静态变量。
* 自定义组件的成员变量本地初始化有些是可选的，有些是必选的。具体是否需要本地初始化，是否需要从父组件通过参数传递初始化子组件的成员变量，请参考[状态管理](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-overview)。

## 自定义组件的参数规定

以下示例展示了如何在build方法里创建自定义组件，并在创建自定义组件的过程中，根据装饰器的规则来初始化自定义组件的参数。

```
@Component
struct MyComponent {
  countDownFrom: number = 0;
  color: Color = Color.Blue;

  build() {
    Column() {
      Text(`${this.countDownFrom}`)
        .backgroundColor(this.color)
    }
  }
}

@Entry
@Component
struct ParentComponent {
  private someColor: Color = Color.Pink;

  build() {
    Column() {
      // 创建MyComponent实例，并将创建MyComponent成员变量countDownFrom初始化为10，将成员变量color初始化为this.someColor
      MyComponent({ countDownFrom: 10, color: this.someColor })
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/ParameterSpecification.ets#L15-L42" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ParameterSpecification.ets</a></div>


以下示例代码将父组件中的函数传递给子组件，并在子组件中调用。

```
@Entry
@Component
struct Parent {
  @State cnt: number = 0;
  submit: () => void = () => {
    this.cnt++;
  };

  build() {
    Column() {
      Text(`${this.cnt}`)
      // 父组件中的函数传递给子组件
      Son({ submitArrow: this.submit })
    }
  }
}

@Component
struct Son {
  submitArrow?: () => void;

  build() {
    Row() {
      Button('add')
        .width(80)
        .onClick(() => {
          if (this.submitArrow) {
            this.submitArrow()
          }
        })
    }
    .height(56)
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/ParentFunction.ets#L15-L50" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ParentFunction.ets</a></div>


## build()函数实现规则

所有在build()函数中声明的语句统称为UI描述，UI描述需要遵循以下规则：

* @Entry装饰的自定义组件，其build()函数下的根节点唯一且必要，且必须为容器组件，其中ForEach禁止作为根节点。

  @Component装饰的自定义组件，其build()函数下的根节点唯一且必要，可以为非容器组件，其中ForEach禁止作为根节点。

  ```
  @Entry
  @Component
  struct MyComponent {
    build() {
      // 根节点唯一且必要，必须为容器组件
      Row() {
        ChildComponent()
      }
    }
  }

  @Component
  struct ChildComponent {
    build() {
      // 根节点唯一且必要，可为非容器组件
      // 请将$r('app.media.startIcon')替换为实际资源文件
      Image($r('app.media.startIcon'))
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/MyComponentBuild.ets#L15-L36" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MyComponentBuild.ets</a></div>

* 不允许声明本地变量，反例如下。

  ```
  build() {
    // 反例：不允许声明本地变量
    let num: number = 1;
  }
  ```
* 不允许在UI描述里直接使用console.info，但允许在方法或者函数里使用，反例如下。

  ```
  build() {
    // 反例：不允许console.info
    console.info('print debug log');
  }
  ```
* 不允许创建本地的作用域，反例如下。

  ```
  build() {
    // 反例：不允许本地作用域
    {
      // ...
    }
  }
  ```
* 不允许调用非@Builder装饰的方法。但允许将此类方法的返回值作为系统组件的参数使用。示例如下。

  ```
  @Component
  struct ParentComponent {
    doSomeCalculations() {
    }
    build() {
      Column() {
        // 反例：不能调用没有用@Builder装饰的方法
        this.doSomeCalculations();
      }
    }
  }
  ```

  ```
  @Component
  struct ParentComponent {
    calcTextValue(): string {
      return 'Hello World';
    }

    @Builder
    doSomeRender() {
      Text(`Hello World`)
    }

    build() {
      Column() {
        // 正例：可以调用
        this.doSomeRender()
        // 正例：参数可以为调用TS方法的返回值
        Text(this.calcTextValue())
      }
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/BuilderMethod.ets#L16-L38" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：BuilderMethod.ets</a></div>

* 不允许使用switch语法，当需要使用条件判断时，请使用[if](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-rendering-control/arkts-rendering-control-ifelse)。示例如下。

  ```
  build() {
    Column() {
      // 反例：不允许使用switch语法
      switch (expression) {
        case 1:
          Text('...')
          break;
        case 2:
          Image('...')
          break;
        default:
          Text('...')
          break;
      }
    }
  }
  ```

  ```
  build() {
    Column() {
      // 正例：使用if
      if (this.expression == 1) {
        Text('...')
      } else if (this.expression == 2) {
        Image('...')
      } else {
        Text('...')
      }
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/If.ets#L20-L34" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：If.ets</a></div>

* 不允许使用表达式，请使用if组件，示例如下。

  ```
  build() {
    Column() {
      // 反例：不允许使用表达式
      (this.aVar > 10) ? Text('...') : Image('...')
    }
  }
  ```

  ```
  build() {
    Column() {
      // 正例：使用if判断
      if (this.aVar > 10) {
        Text('...')
      } else {
        Image('...')
      }
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/ModuleComponent.ets#L20-L32" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ModuleComponent.ets</a></div>

* 不允许直接改变状态变量，反例如下。

  ```
  @Component
  struct MyComponent {
    @State textColor: Color = Color.Yellow;
    @State columnColor: Color = Color.Green;
    @State count: number = 1;
    build() {
      Column() {
        // 应避免直接在Text组件内改变count的值
        Text(`${this.count++}`)
          .width(50)
          .height(50)
          .fontColor(this.textColor)
          .onClick(() => {
            this.columnColor = Color.Red;
          })
        Button("change textColor").onClick(() =>{
          this.textColor = Color.Pink;
        })
      }
      .backgroundColor(this.columnColor)
    }
  }
  ```

  在ArkUI状态管理中，状态驱动UI更新。

  ![](./img/69886bb3.png)

  所以，不能在自定义组件的build()或@Builder方法里直接改变状态变量，这可能会造成循环渲染的风险。Text('$\{this.count++\}')在全量更新或最小化更新会产生不同的影响：

  + 全量更新（API8及以前版本）： ArkUI可能会陷入一个无限的重渲染的循环里，因为Text组件的每一次渲染都会改变应用的状态，就会再引起下一轮渲染的开启。 当 this.columnColor 更改时，都会执行整个build构建函数，因此，Text($\{this.count++\})绑定的文本也会更改，每次重新渲染Text($\{this.count++\})，又会使this.count状态变量更新，导致新一轮的build执行，从而陷入无限循环。
  + 最小化更新（API9及以上版本）：当this.columnColor更新时，仅Column组件更新，Text组件不会更新。只有当this.textColor更改时，会去更新整个Text组件，其所有属性函数都会执行，所以会看到Text($\{this.count++\})自增。因为目前UI以组件为单位进行更新，如果组件上某一个属性发生改变，会更新整个的组件。所以整体的更新链路是：this.textColor = Color.Pink ->Text组件整个更新->this.count++ ->Text组件整个更新。值得注意的是，这种写法在初次渲染时会导致Text组件渲染两次，影响性能。

  build函数中更改应用状态的行为可能比上面的示例更加隐蔽，例如：

  + 在@Builder，[@Extend](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-extend)或[@Styles](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-extend-components/arkts-style)方法内改变状态变量 。
  + 在计算参数时调用函数中改变应用状态变量，例如 Text('$\{this.calcLabel()\}')。
  + 对当前数组做出修改，sort()改变了数组this.arr，随后的filter方法会返回一个新的数组。

    ```
    // 反例
    @State arr : Array<...> = [ ... ];
    ForEach(this.arr.sort().filter(...),
      item => {
      // ...
    })
    ```

    ```
    // 正确的执行方式为：filter返回一个新数组，后面的sort方法才不会改变原数组this.arr
    ForEach(this.arr.filter((item, index) => index >= 2).sort(),
      (item: number) => {
        // ...
      });
    ```

  该问题可以参考[常见问题：build函数中更改状态变量导致appfreeze](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-state-management-faq/arkts-state-management-faq-inner-component#build函数中更改状态变量导致appfreeze)。

## 自定义组件通用样式

自定义组件通过“.”链式调用设置通用样式。

```
@Component
struct ChildComponent {
  build() {
    Button(`Hello World`)
  }
}

@Entry
@Component
struct MyComponent {
  build() {
    Row() {
      // 属性设置给ChildComponent而不是ChildComponent中的Button
      ChildComponent()
        .width(200)
        .height(300)
        .backgroundColor(Color.Red)
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/MyComponentStyle.ets#L15-L36" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MyComponentStyle.ets</a></div>


![](./img/c1252fe9.png)

ArkUI给自定义组件设置样式时，相当于给ChildComponent套了一个不可见的容器组件，这些样式是设置在容器组件上，而非直接设置给ChildComponent的Button组件。渲染结果显示，背景颜色红色并没有直接设置到Button上，而是设置在Button所在的不可见容器组件上。

## 自定义组件支持跨Ability迁移

API version 24前，自定义组件不支持跨Ability迁移，自定义组件实例在跨Ability后，改变自定义组件的状态变量将无法触发UI组件刷新。需要注意，在系统升级API version 24之前，即使在module.json5配置了"enableCustomComponentCrossAbility"为"true"，该能力也不会生效。

API version 24开始，可在应用工程的module.json5配置文件中配置metadata标签来使能自定义组件支持跨Ability迁移。具体配置方式如下。

```
"metadata": [
  {
    "name": "enableCustomComponentCrossAbility",
    "value": "true"
  }
]
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/EnableCustomComponentCrossAbility/entry/src/main/module.json5#L58-L65" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：module.json5</a></div>


需要注意：

1. 不建议在原Ability的onBackground阶段异步修改迁移组件中的状态变量，此时状态变量可以被赋值，但无法触发关联组件的刷新。
2. 仅支持组件树上的自定义组件迁移。对于未挂载在组件树上的自定义组件将不支持迁移。例如使用[OH\_ArkUI\_GetNodeHandleFromNapiValue](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-node-napi-h)获取[ArkUI\_NodeHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-arkui-nativemodule-arkui-node8h)场景中，如果OH\_ArkUI\_GetNodeHandleFromNapiValue接收的参数为[ComponentContent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-componentcontent)，获取到的ArkUI\_NodeHandle为ComponentContent下子树的第一个[FrameNode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-arkui-framenode)节点，中间跳过的自定义组件将不会在组件树上，不支持迁移。

```
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

const DOMAIN = 0x0000;

export default class EntryAbility extends UIAbility {
  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
        return;
      }
      hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');
    });
  }

  onBackground(): void {
    // 不建议在onBackground阶段异步修改迁移组件中的状态变量
    hilog.info(DOMAIN, 'testTag', '%{public}s', 'Ability onBackground');
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/EnableCustomComponentCrossAbility/entry/src/main/ets/entryability/EntryAbility.ets#L15-L38" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：EntryAbility.ets</a></div>


在下面的示例中：

1. 点击Button('add node to tree')，创建BuilderNode节点挂载到NodeContainer下。
2. 点击Button('remove node from tree')，将BuilderNode节点从NodeContainer上移除。
3. 点击Button('start new ability')，拉起ExtraAbility。
4. 点击ExtraIndex内的Button('add node to tree')，将BuilderNode节点重新挂载到ExtraIndex内的NodeContainer下。
   * 自定义组件ComponentUnderBuilderNode在被挂载到新的Ability下时，会通知切换Ability的自定义组件更新其所属的Ability实例ID。
   * 点击自定义组件ComponentUnderBuilderNode内Button('change message')，改变状态变量message的值，触发@Watch('messageUpdate') 回调和UI刷新。

下面的示例包含了创建新的Ability流程，具体示例可参考[starAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-uiabilitycontext#startability)。

```
import { MyNodeController } from './MyNodeController';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { common, Want } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

const DOMAIN = 0x0000;

@Entry
@Component
struct Index {
  private nodeController: MyNodeController = new MyNodeController();

  startNewAbility() {
    const want: Want = {
      bundleName: 'com.example.enablecustomcomponentcrossability',
      abilityName: 'ExtraAbility'
    };

    try {
      const context = this.getUIContext()?.getHostContext() as common.UIAbilityContext;
      context.startAbility(want, (err: BusinessError) => {
        if (err.code) {
          hilog.error(DOMAIN, 'testTag', `startAbility failed, code is ${err.code}, message is ${err.message}`);
          return;
        }
        hilog.info(DOMAIN, 'testTag', 'startAbility succeed');
      });
    } catch (err) {
      hilog.error(DOMAIN, 'testTag',
        `startAbility failed, code is ${(err as BusinessError).code}, message is ${(err as BusinessError).message}`);
    }
  }

  build() {
    Column({ space: 10 }) {
      Text('Index')
      // 创建globalBuilderNode，并将globalBuilderNode下的节点挂在NodeContainer的占位节点下
      Button('add node to tree').width(200).onClick(() => {
        this.nodeController.addBuilderNode();
      })
      // 从NodeContainer的占位节点下移除globalBuilderNode下的节点
      Button('remove node from tree').width(200).onClick(() => {
        this.nodeController.removeBuilderNode();
      })
      // 拉起新的Ability
      Button('start new ability').width(200).onClick(() => {
        this.startNewAbility();
      })
      NodeContainer(this.nodeController).backgroundColor('#FFEEF0')
    }
    .width('100%')
    .height('100%')
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/EnableCustomComponentCrossAbility/entry/src/main/ets/pages/Index.ets#L15-L70" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


```
import { BuilderNode, FrameNode, NodeController } from '@kit.ArkUI';
import { hilog } from '@kit.PerformanceAnalysisKit';

const DOMAIN = 0x0000;

let globalBuilderNode: BuilderNode<[]> | undefined = undefined;

export class MyNodeController extends NodeController {
  private rootNode: FrameNode | null = null;
  private uiContext: UIContext | null = null;

  makeNode(uiContext: UIContext): FrameNode | null {
    this.rootNode = new FrameNode(uiContext);
    this.uiContext = uiContext;
    return this.rootNode;
  }

  addBuilderNode(): void {
    if (!globalBuilderNode && this.uiContext) {
      globalBuilderNode = new BuilderNode(this.uiContext);
      globalBuilderNode.build(wrapBuilder<[]>(buildComponent), undefined);
    }
    if (this.rootNode && globalBuilderNode) {
      this.rootNode.appendChild(globalBuilderNode.getFrameNode());
    }
  }

  removeBuilderNode(): void {
    if (this.rootNode && globalBuilderNode) {
      this.rootNode.removeChild(globalBuilderNode.getFrameNode());
    }
  }

  disposeNode(): void {
    if (this.rootNode && globalBuilderNode) {
      globalBuilderNode.dispose();
      globalBuilderNode = undefined;
    }
  }
}

@Builder
function buildComponent() {
  Column() {
    ComponentUnderBuilderNode()
  }
}

@Component
struct ComponentUnderBuilderNode {
  @State @Watch('messageUpdate') message: string = 'hello';

  messageUpdate() {
    hilog.info(DOMAIN, 'testTag', `ComponentUnderBuilderNode message change ${this.message}`);
  }

  build() {
    Column() {
      Text(`message: ${this.message}`)
      // 改变message的值，触发@Watch('messageUpdate')回调和Text组件的刷新
      Button('change message').onClick(() => {
        this.message += ' world';
      })
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/EnableCustomComponentCrossAbility/entry/src/main/ets/pages/MyNodeController.ets#L15-L82" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：MyNodeController.ets</a></div>


```
import { UIAbility } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';

const DOMAIN = 0x0000;

export default class ExtraAbility extends UIAbility {

  onWindowStageCreate(windowStage: window.WindowStage): void {
    windowStage.loadContent('pages/ExtraIndex', (err) => {
      if (err.code) {
        // ExtraIndex加载失败，输出报错信息
        hilog.error(DOMAIN, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err));
        return;
      }
      hilog.info(DOMAIN, 'testTag', 'Succeeded in loading the content.');
    });
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/EnableCustomComponentCrossAbility/entry/src/main/ets/extraability/ExtraAbility.ets#L15-L34" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ExtraAbility.ets</a></div>


```
import { MyNodeController } from './MyNodeController';

@Entry
@Component
struct ExtraIndex {
  private nodeController: MyNodeController = new MyNodeController();

  build() {
    Column({ space: 10 }) {
      Text('ExtraIndex')
      // 将globalBuilderNode下的节点挂在NodeContainer的占位节点下
      Button('add node to tree').width(200).onClick(() => {
        this.nodeController.addBuilderNode();
      })
      // 从NodeContainer的占位节点下移除globalBuilderNode下的节点
      Button('remove node from tree').width(200).onClick(() => {
        this.nodeController.removeBuilderNode();
      })
      // 销毁globalBuilderNode下的节点
      Button('dispose node').width(200).onClick(() => {
        this.nodeController.disposeNode();
      })
      NodeContainer(this.nodeController).backgroundColor('#FFEEF0')
    }
    .width('100%')
    .height('100%')
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/EnableCustomComponentCrossAbility/entry/src/main/ets/pages/ExtraIndex.ets#L15-L44" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：ExtraIndex.ets</a></div>


## 限制条件

### V1自定义组件不支持静态代码块

静态代码块用于初始化静态属性。

* 在@Component或@CustomDialog装饰的自定义组件中编写静态代码块时，该代码不会被执行。从API version 22开始，添加对静态代码块的校验，编译期告警提示静态代码块不生效。

  ```
  @Component
  struct MyComponent {
    static a: string = '';
    // 静态代码块不生效，a的值仍为空字符串''
    static {
      this.a = 'hello world';
    }
    // ...
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/StaticCodeV1.ets#L16-L37" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：StaticCodeV1.ets</a></div>

* 在@ComponentV2装饰的自定义组件中支持使用。

  ```
  @ComponentV2
  struct MyComponent {
    static a: string = '';
    // 静态代码块生效，a的值变为'hello world'
    static {
      this.a = 'hello world';
    }
    // ...
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/createCustomComponents/entry/src/main/ets/component/StaticCodeV2.ets#L16-L36" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：StaticCodeV2.ets</a></div>


### @Component与@ComponentV2混用

在将@Component装饰的自定义组件与@ComponentV2装饰的自定义组件混合使用时，可参考[状态管理V1和V2混用场景](/docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-state-management/arkts-v1-v2-guide/v1v2-mixing)。
