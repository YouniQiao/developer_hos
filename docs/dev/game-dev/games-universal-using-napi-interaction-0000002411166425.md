---
title: "Node-API跨语言调用"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-universal-using-napi-interaction-0000002411166425
format: md
---


HarmonyOS Node-API是基于Node.js 12.x LTS的[Node-API](https://nodejs.org/docs/latest-v12.x/api/n-api.html)规范扩展开发的机制，为开发者提供了ArkTS/JS与C/C++模块之间的交互能力。它提供了一组稳定的、跨平台的API，可以在不同的操作系统上使用。

一般情况下HarmonyOS应用开发使用ArkTS/JS语言，但部分场景由于性能、效率等要求，比如游戏、物理模拟等，需要依赖使用现有的C/C++库。Node-API规范封装了I/O、CPU密集型、OS底层等能力并对外暴露C接口，使用C/C++模块的注册机制，向ArkTS/JS对象上挂载属性和方法的方式来实现ArkTS/JS和C/C++的交互。主要场景如下：

* 系统可以将框架层丰富的模块功能通过Node-API的模块注册机制对外暴露ArkTS/JS的接口，将C/C++的能力开放给应用的ArkTS/JS层。
* 应用开发者也可以选择将一些对性能、底层系统调用有要求的核心功能用C/C++封装实现，再通过ArkTS/JS接口使用，提高应用本身的执行效率。

了解更多Node-API跨语言调用内容请参见[使用Node-API实现跨语言交互](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/using-napi-interaction-with-cpp)。更多实践案例请参见[跨语言调用复杂参数传递](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-complex-type-pass)和[Native侧子线程与UI主线程通信](https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-native-sub-main-comm)。
