---
title: "声明式UI描述"
original_url: /docs/dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-declarative-ui-description
format: md
upstream_id: dev/app-dev/application-framework/arkui/arkts-ui-development/arkts-ui-paradigm-basic-syntax/arkts-declarative-ui-description
last_sync: 2026-06-07
sync_hash: 8dde4328
upstream_hash: 9828b4f25e23
---

ArkTS以声明方式组合和扩展组件来描述应用程序的UI，同时还提供了基本的属性、事件和子组件配置方法，帮助开发者实现应用交互逻辑。

## 创建组件

根据组件构造方法的不同，创建组件包含有参数和无参数两种方式。

![](./img/d3cb766b.png)

创建组件不需要使用new关键字。

### 无参数

如果组件接口定义中不包含必选构造参数，则组件后面的“()”不需要配置任何内容。例如：Divider组件不包含构造参数。

```
Column() {
  // ...
  Divider()
  // ...
}
```


<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L48-L55" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


### 有参数

如果组件接口定义包含构造参数，则在组件后的“()”中配置相应参数。

* Image组件的必选参数src。

  ```
  Image('https://xyz/test.jpg')
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L57-L59" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* Text组件的非必选参数content。

  ```
  // string类型的参数
  Text('test')
  // $r形式引入应用资源，可应用于多语言场景
  Text($r('app.string.title_value'))
  // 无参数形式
  Text()
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L61-L68" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 变量或表达式可以用于参数赋值，表达式结果类型必须符合参数要求。

  例如，设置变量或表达式来构造Image和Text组件的参数。

  ```
  Image(this.imagePath)
  // 此处需要替换为开发者所需的正确url
  Image('https://' + this.imageUrl)
  Text(`count: ${this.count}`)
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L70-L75" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


## 配置属性

属性方法以“.”链式调用配置组件样式和其他属性，建议每个属性方法单独一行。

* 配置Text组件的字体大小。

  ```
  Text('test')
    .fontSize(12)
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L77-L80" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 配置组件的多个属性。

  ```
  Image('test.jpg')
    .alt('error.jpg')
    .width(100)
    .height(100)
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L82-L87" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 除了直接传递常量参数，还可以传递变量或表达式。

  ```
  Text('hello')
    .fontSize(this.fontSize)
  Image('test.jpg')
    .width(this.count % 2 === 0 ? 100 : 200)
    .height(this.offsetNum + 100)
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L89-L95" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 对于系统组件，ArkUI还为其属性预定义了一些枚举类型供开发者调用，枚举类型可以作为参数传递，但必须满足参数类型要求。

  例如，可以按以下方式配置Text组件的颜色和字体样式。

  ```
  Text('hello')
    .fontSize(20)
    .fontColor(Color.Red)
    .fontWeight(FontWeight.Bold)
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L97-L102" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


## 配置事件

事件方法以“.”链式调用的方式配置系统组件支持的事件，建议每个事件方法单独写一行。

* 使用箭头函数配置组件的事件方法。

  ```
  Button('Click me')
    .onClick(() => {
      this.myText = 'ArkUI';
    })
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L104-L109" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 使用箭头函数表达式配置组件的事件方法，要求使用“() => \{...\}”，以确保函数与组件绑定，同时符合ArkTS语法规范。

  ```
  Button('add counter')
    .onClick(() => {
      this.counter += 2;
    })
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L111-L116" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 使用组件的成员函数配置组件的事件方法，需要bind this。ArkTS语法不建议使用成员函数配合bind this来配置组件的事件方法。

  ```
    myClickHandler(): void {
      this.counter += 2;
    }

  // ···
     Button('add counter')
       .onClick(this.myClickHandler.bind(this))
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L30-L121" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 使用声明的箭头函数时可以直接调用，不需要bind this。

  ```
    fn = () => {
      hilog.info(0x0000, 'Declarative UI Description', `counter: ${this.counter}`);
      this.counter++;
    };

  // ···
     Button('add counter')
       .onClick(this.fn)
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L37-L126" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>


![](./img/e80020ab.png)

箭头函数内部的this是词法作用域，由上下文确定。匿名函数可能会出现this指向不明确的问题，因此在ArkTS中不允许使用。

## 配置子组件

如果组件支持子组件配置，则需在尾随闭包"\{...\}"中为组件添加子组件的UI描述。Column、Row、Stack、Grid、List等组件都是容器组件。

* 以下是简单的Column组件配置子组件的示例。

  ```
  Column() {
    Text('Hello')
      .fontSize(100)
    Divider()
    Text(this.myText)
      .fontSize(100)
      .fontColor(Color.Red)
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L128-L138" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>

* 容器组件均支持子组件配置，可以实现相对复杂的多级嵌套。

  ```
  Column() {
    Row() {
      Image('test1.jpg')
        .width(100)
        .height(100)
      Button('click +1')
        .onClick(() => {
          hilog.info(0x0000, 'Declarative UI Description', '+1 clicked!');
        })
    }
  }
  ```

  

<div class="source-link-wrapper"><a href="https://gitcode.com/HarmonyOS_Samples/guide-snippets/blob/HarmonyOS-feature-20260402/ArkUISample/DeclarativeUIDescription/entry/src/main/ets/pages/Index.ets#L140-L153" target="_blank" rel="noopener noreferrer" class="source-link"><svg class="source-link-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">\<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /\>\<polyline points="15 3 21 3 21 9" /\>\<line x1="10" y1="14" x2="21" y2="3" /\></svg> 查看源码：Index.ets</a></div>
