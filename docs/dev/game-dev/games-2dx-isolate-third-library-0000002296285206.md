---
title: "隔离三方SDK代码"
original_url: /docs/dev/game-dev/games-2dx-isolate-third-library-0000002296285206
format: md
---


由于当前部分游戏常用的SDK不支持在HarmonyOS 5.0及以上系统上运行，因此适配HarmonyOS 5.0及以上系统的第一步是进行SDK隔离（拆分），去掉不支持的SDK。

按照语言可以分为几个类别：

* C/C++语言
  + 有源码的SDK，请参考[三方库适配](/docs/dev/game-dev/games-2dx-adapt-third-library-0000002290527381)，编译后即可正常使用，无需拆分。
  + 闭源SDK，联系华为技术支持统一跟踪推动HarmonyOS 5.0及以上的系统的适配，代码先隔离。

* JS/TS语言
  + 有源码的SDK，请参考[开发共享包](/docs/dev/app-dev/getting-started/dev-fundamentals/application-package-overview)，将其改造成HAR/HSP使用，无需拆分。
  + 闭源SDK，联系华为技术支持统一跟踪推动HarmonyOS 5.0及以上的系统的适配，代码先隔离。
* 其他SDK（Java）
  + 联系华为技术支持统一跟踪推动HarmonyOS 5.0及以上的系统的适配，代码先隔离。
