---
title: "使用Laya引擎概述"
original_url: https://developer.huawei.com/consumer/cn/doc/games-guides/games-laya-introduction-0000002290745125
---

本文主要介绍基于Laya架构的游戏适配HarmonyOS 5.0及以上系统的适配方案。

## 适配原理

Laya引擎适配HarmonyOS 5.0及以上系统的工作主要集中在 C++ Engine，C++ APIs，Native Platform（Open Harmony平台）等模块以及三方库适配上。

引擎适配主要模块和原理参见下表：

| 模块 | HarmonyOS适配工作 |
| --- | --- |
| 核心C++代码的适配 | * C++层引擎音频、视频、文件系统等模块增加鸿蒙原生平台实现代码。 * 使用HarmonyOS NDK重新编译。 |
| 依赖的部分三方开源库的适配 | 使用HarmonyOS NDK重新编译。 |
| 对接的系统接口的HarmonyOS适配 | * HarmonyOS NDK提供了C++的系统接口，可在C++层直接调用。 * HarmonyOS NDK只提供了JS的系统接口，使用HarmonyOS的NAPI框架对接。 |
| JS引擎的适配 | HarmonyOS使用V8引擎执行JS脚本，主要工作是使用HarmonyOS NDK重新编译V8库。 |

## 适配流程

Laya游戏适配HarmonyOS 5.0及以上系统的流程如下：

| 序号 | 操作 | 说明 |
| --- | --- | --- |
| 1 | [适配准备](https://developer.huawei.com/consumer/cn/doc/games-guides/games-laya-preparation-0000002290574301) | 为了顺利适配HarmonyOS 5.0及以上系统，您需提前做好一些准备工作。 |
| 2 | [游戏适配](https://developer.huawei.com/consumer/cn/doc/games-guides/games-laya-works-0000002348716069) | 包括游戏代码适配、系统能力适配在内的适配工作。 |
| 3 | [三方库适配](https://developer.huawei.com/consumer/cn/doc/games-guides/games-laya-adapt-third-library-0000002255894096) | 将游戏内的三方库针对HarmonyOS 5.0及以上系统进行编译。 |
| 4 | [构建发布工程](https://developer.huawei.com/consumer/cn/doc/games-guides/games-laya-release-0000002290574305) | 在Laya引擎中构建出游戏的HarmonyOS 5.0及以上工程。 |
| 5 | [运行调试](https://developer.huawei.com/consumer/cn/doc/games-guides/games-laya-run-0000002290527397) | 运行并调试游戏的功能和性能，并前往AppGallery Connect提交上架申请。 |
