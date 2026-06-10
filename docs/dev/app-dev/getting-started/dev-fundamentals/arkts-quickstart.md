---
title: "ArkTS 语言速览"
---

ArkTS 是 HarmonyOS 应用开发的官方高级语言，在 [TypeScript](https://www.typescriptlang.org/) 基础上扩展而来，保持了 TS 的基本风格，同时通过规范定义强化静态检查，提升代码健壮性和执行性能。

## 核心特性

- **TypeScript 超集**：兼容 TS 语法，如果你有 TS/JS 基础，上手几乎没有障碍。从 TS 迁移时的差异见[适配规则](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/typescript-to-arkts-migration-guide)。
- **声明式 UI**：ArkTS 与 ArkUI 框架深度结合，用声明式语法描述界面，数据驱动 UI 自动更新。
- **并发支持**：提供 [TaskPool](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/taskpool-introduction) 和 [Worker](/docs/dev/app-dev/application-framework/arkts/arkts-concurrency/multithread-concurrency/worker-introduction) 两种并发 API，以及 Sendable 对象机制，解决 TS/JS 并发能力不足的问题。
- **丰富的基础类库**：内置高精度浮点运算、二进制 Buffer、XML 解析、容器库等能力。

## 一个简单的 ArkTS 组件

```ts
@Entry
@Component
struct HelloPage {
  @State message: string = 'Hello HarmonyOS'

  build() {
    Column() {
      Text(this.message)
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
      Button('点击切换')
        .onClick(() => {
          this.message = '你好，鸿蒙！'
        })
    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
  }
}
```

这段代码展示了 ArkTS 的核心模式：

| 概念 | 说明 |
|---|---|
| `@Entry` | 标记为应用入口页面 |
| `@Component` | 声明一个自定义组件 |
| `@State` | 状态变量，值变化时 UI 自动刷新 |
| `build()` | 声明 UI 结构，描述界面长什么样 |
| `Column` / `Text` / `Button` | 系统内置组件 |

## 编译与运行

ArkTS 由方舟编译运行时（ArkCompiler）处理：编译工具链将源码转为方舟字节码（`.abc`），运行时在设备侧执行。整个编译过程集成在 DevEco Studio 中，无需额外配置。

## 下一步

- 继续阅读[声明式 UI 起步](./ui-quickstart)，了解如何用 ArkTS 构建界面
- 深入学习：[ArkTS 完整指南](/docs/dev/app-dev/application-framework/arkts/arkts-overview)
