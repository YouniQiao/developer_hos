# 初识ArkTS语言

ArkTS是HarmonyOS应用开发的主力语言，它在TypeScript（简称TS）的基础上做了进一步扩展，保持了TS的基本风格，同时通过规范定义强化开发期静态检查和分析，提升程序执行稳定性和性能；同时匹配了HarmonyOS的ArkUI框架，扩展了声明式UI、状态管理等相应的能力，让开发者以更简洁、更自然的方式开发跨端应用。


## ArkTS与TypeScript的关系

了解ArkTS之前，可以先了解下ArkTS、TypeScript和JavaScript之间的关系：
* TypeScript是JavaScript的超集，它扩展了JavaScript的语法，通过在JavaScript的基础上添加静态类型定义构建而成，是一个开源的编程语言。
* ArkTS兼容TypeScript语言，拓展了声明式UI、状态管理、并发任务等能力，可以认为是TypeScript的超集。

<img src={require('./img/arkts-ts.png').default} width="800" />

ArkTS通过规范约束了TypeScript中过于灵活而影响开发正确性或者给运行时带来不必要额外开销的特性：
* 强制使用静态类型：静态类型是ArkTS最重要的特性之一。如果使用静态类型，那么程序中变量的类型就是确定的。同时，由于所有类型在程序实际运行前都是已知的，编译器可以验证代码的正确性，从而减少运行时的类型检查，有助于性能提升。
* 禁止在运行时改变对象布局：为实现最大性能，ArkTS要求在程序执行期间不能更改对象布局。
* 限制运算符语义：为获得更好的性能并鼓励开发者编写更清晰的代码，ArkTS限制了一些运算符的语义。比如，一元加法运算符只能作用于数字，不能用于其他类型的变量。
* 不支持结构化类型Structural Typing：对Structural Typing的支持需要在语言、编译器和运行时进行大量的考虑和仔细的实现，当前ArkTS不支持该特性。后续根据实际场景的需求和反馈，ArkTS可能将会考虑支持该特性。

ArkTS在TypeScript语言的基础功能之上提供了基础类库和容器类库，提供包括高精度浮点运算、二进制Buffer、XML生成解析转换和多种容器库等能力，协助开发者简化开发工作，提升开发效率。同时针对TypeScript/JavaScript并发能力支持有限的问题，ArkTS对并发编程API和能力进行了增强，提供了TaskPool和Worker两种并发API供开发者选择。另外，ArkTS进一步提出了Sendable的概念来支持对象在并发实例间的引用传递，提升ArkTS对象在并发实例间的通信性能。

## ArkUI支持

ArkUI是HarmonyOS为应用开发提供的UI开发框架，为了确保应用开发的最佳体验，ArkTS提供对UI开发框架ArkUI的声明式语法和其他特性的支持，主要包括：
* 声明式语法：ArkTS定义了声明式UI描述、自定义组件和动态扩展UI元素的能力，再配合ArkUI开发框架中的系统组件及其相关的事件方法、属性方法等共同构成了UI开发的主体。
* 状态管理：ArkTS提供了多维度的状态管理机制。在UI开发框架中，与UI相关联的数据可以在组件内使用，也可以在不同组件层级间传递，比如父子组件之间、爷孙组件之间，还可以在应用全局范围内传递或跨设备传递。另外，从数据的传递形式来看，可分为只读的单向传递和可变更的双向传递。开发者可以灵活地利用这些能力来实现数据和UI的联动。
* 渲染控制：ArkTS提供了渲染控制的能力。条件渲染可根据应用的不同状态，渲染对应状态下的UI内容。循环渲染可从数据源中迭代获取数据，并在每次迭代过程中创建相应的组件。数据懒加载从数据源中按需迭代数据，并在每次迭代过程中创建相应的组件。

一个简单的ArkTS界面示例：
```ts

@Entry
@Component
struct HelloWorld {
  @State message: string = 'Hello, ArkTS!';

  build() {
    Column() {
      Text(this.message)
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
    }
  }
}

```


其中，
* @Entry 和 @Component：声明这是一个入口组件。
* @State message: string = 'Hello, ArkTS!';：声明一个名为message的状态变量，初始值为'Hello, ArkTS!'。
* build()：构建UI界面的方法。
* Column()：垂直布局容器。
* Text(this.message)：显示文本内容，内容绑定到message状态变量。
* .fontSize(30) 和 .fontWeight(FontWeight.Bold)：设置文本样式。

上述代码运行效果如下所示。
<img src={require('./img/arkts-ui.png').default} width="400" />

## 未来演进

<img src={require('./img/arkts-evolution.png').default} width="800" />

未来，ArkTS会结合应用开发/运行的需求持续演进，逐步提供并行和并发能力增强、系统类型增强、分布式开发范式等更多特性。