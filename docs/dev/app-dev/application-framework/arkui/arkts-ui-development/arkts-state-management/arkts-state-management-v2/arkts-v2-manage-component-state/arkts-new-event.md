---
title: "@Event装饰器：规范组件输出"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-event
---

为了实现子组件向父组件要求更新@Param装饰变量的能力，开发者可以使用@Event装饰器。使用@Event装饰回调方法是一种规范，表明子组件需要传入更新数据源的回调。

@Event主要配合@Param实现数据的双向同步。在阅读本文档前，建议提前阅读：[@Param](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-param)。

![](./img/48409ceb.png)

从API version 12开始，在@ComponentV2装饰的自定义组件中支持使用@Event装饰器。

从API version 12开始，该装饰器支持在元服务中使用。

从API version 23开始，该装饰器支持在ArkTS卡片中使用。

## 概述

由于@Param装饰的变量在本地无法更改，使用@Event装饰器装饰回调方法并调用，可以实现更新数据源的变量，再通过[@Local](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-new-local)的同步机制，将修改同步回@Param装饰的变量，以此达到主动更新@Param装饰变量的效果。

@Event用于装饰组件对外输出的方法：

* @Event装饰的回调方法中参数以及返回值由开发者决定。
* @Event装饰非回调类型的变量不会生效。当@Event没有初始化时，会自动生成一个空的函数作为默认回调。
* 当@Event未被外部初始化，但本地有默认值时，会使用本地默认的函数进行处理。

@Param标志着组件的输入，表明该变量受父组件影响，而@Event标志着组件的输出，可以通过该方法影响父组件。使用@Event装饰回调方法是一种规范，表明该回调作为自定义组件的输出。父组件需要判断是否提供对应方法用于子组件更改@Param变量的数据源。

## 装饰器说明

| @Event属性装饰器 | 说明 |
| --- | --- |
| 装饰器参数 | 无。 |
| 允许装饰的变量类型 | 回调方法，例如()=>void、(x:number)=>boolean等。回调方法是否含有参数以及返回值由开发者决定。 |
| 允许传入的函数类型 | 箭头函数。 |

## 限制条件

* @Event只能用在[@ComponentV2](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-create-custom-components#componentv2)装饰的自定义组件中。当装饰非方法类型的变量时，不会有任何作用。

  ```
  @ComponentV2
  struct Index {
    @Event changeFactory: () => void = () => {}; // 正确用法
    @Event message: string = 'abcd'; // 错误用法，装饰非函数类型变量，@Event无作用
  }
  @Component
  struct Index {
    @Event changeFactory: () => void = () => {}; // 错误用法，编译时报错
  }
  ```

## 使用场景

### 更改父组件中变量

使用@Event可以更改父组件中变量，当该变量作为子组件@Param变量的数据源时，该变化会同步回子组件的@Param变量。

```
@Entry
@ComponentV2
struct Index {
  @Local title: string = 'Title One';
  @Local fontColor: Color = Color.Red;

  build() {
    Column() {
      Child({
        title: this.title,
        fontColor: this.fontColor,
        changeFactory: (type: number) => {
          if (type == 1) {
            this.title = 'Title One';
            this.fontColor = Color.Red;
          } else if (type == 2) {
            this.title = 'Title Two';
            this.fontColor = Color.Green;
          }
        }
      })
    }
  }
}

@ComponentV2
struct Child {
  @Param title: string = '';
  @Param fontColor: Color = Color.Black;
  @Event changeFactory: (x: number) => void = (x: number) => {};

  build() {
    Column() {
      Text(`${this.title}`)
        .fontColor(this.fontColor)
      // 使用changeFactory更改父组件中的变量type
      Button('change to Title Two')
        .onClick(() => {
          this.changeFactory(2);
        })
      Button('change to Title One')
        .onClick(() => {
          this.changeFactory(1);
        })
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/EventDecorator/entry/src/main/ets/pages/EventDecoratorTest1.ets#L15-L62" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：EventDecoratorTest1.ets</a></div>


值得注意的是，使用@Event修改父组件的值是立刻生效的，但从父组件将变化同步回子组件的过程是异步的，即在调用完@Event的方法后，子组件内的值不会立刻变化。这是因为@Event将子组件值实际的变化能力交由父组件处理，在父组件实际决定如何处理后，将最终值在渲染之前同步回子组件。

```
import { hilog } from '@kit.PerformanceAnalysisKit';
const TAG = '[Sample_EventDecorator]';
const DOMAIN = 0xF811;
@ComponentV2
struct Child2 {
  @Param index: number = 0;
  @Event changeIndex: (val: number) => void;

  build() {
    Column() {
      Text(`Child index: ${this.index}`)
        .onClick(() => {
          this.changeIndex(20);
          // 输出子组件this.index，验证调用@Event后值不会立即同步回子组件
          hilog.info(DOMAIN, TAG, `after changeIndex ${this.index}`);
        })
    }
  }
}
@Entry
@ComponentV2
struct Index2 {
  @Local index: number = 0;

  build() {
    Column() {
      Child2({
        index: this.index,
        changeIndex: (val: number) => {
          this.index = val;
          // 输出父组件的index，用于对比子组件侧日志
          hilog.info(DOMAIN, TAG, `in changeIndex ${this.index}`);
        }
      })
    }
  }
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/EventDecorator/entry/src/main/ets/pages/EventDecoratorTest2.ets#L15-L51" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg> 查看源码：EventDecoratorTest2.ets</a></div>


在上面的示例中，点击文字触发@Event函数事件改变子组件的值，打印出的日志为：

```
in changeIndex 20
after changeIndex 0
```

这表明在调用changeIndex之后，父组件中index的值已经变化，但子组件中的index值还没有同步变化。
