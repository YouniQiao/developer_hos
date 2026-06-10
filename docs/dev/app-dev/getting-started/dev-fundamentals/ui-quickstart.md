---
title: "声明式 UI 起步"
---

ArkUI（方舟UI框架）是 HarmonyOS 的 UI 开发框架，提供组件、布局、动画、交互事件等完整能力。推荐使用**声明式开发范式**构建 UI——你只需描述"界面应该是什么样"，框架自动处理渲染和更新。

## 核心概念

### 组件

组件是 UI 的最小构建单元。HarmonyOS 提供了丰富的内置组件：

| 类别 | 常用组件 |
|---|---|
| 基础组件 | `Text`、`Button`、`Image`、`TextInput` |
| 容器组件 | `Column`、`Row`、`Stack`、`Flex`、`Grid` |
| 列表组件 | `List`、`Grid`、`WaterFlow` |
| 导航组件 | `Navigation`、`NavDestination`、`Tabs` |
| 交互组件 | `Dialog`、`Menu`、`Popup` |

### 状态管理

声明式 UI 的核心是**数据驱动**：修改状态变量，UI 自动刷新。

```ts
@State count: number = 0

build() {
  Column() {
    Text(`点击次数：${this.count}`)
    Button('+1').onClick(() => { this.count++ })
  }
}
```

常用状态装饰器：

| 装饰器 | 作用 |
|---|---|
| `@State` | 组件内部状态，变化时触发 UI 刷新 |
| `@Prop` | 父组件传递给子组件，单向同步 |
| `@Link` | 父组件传递给子组件，双向同步 |
| `@Provide` / `@Consume` | 跨组件层级共享状态 |

### 布局

声明式布局通过容器组件嵌套实现，无需手写 CSS：

```ts
Column() {            // 垂直排列
  Row() {             // 水平排列
    Text('左侧')
    Text('右侧')
  }
  .width('100%')
  .justifyContent(FlexAlign.SpaceBetween)

  Grid() {            // 网格布局
    // GridItem 子项...
  }
  .columnsTemplate('1fr 1fr 1fr')
}
```

## 下一步

- 继续阅读上一个 [ArkTS 语言速览](./arkts-quickstart)
- 动手实践：[创建第一个应用](../quick-start/start-with-ets-stage)
- 深入学习：[ArkUI 完整指南](/docs/dev/app-dev/application-framework/arkui/arkui-overview)
