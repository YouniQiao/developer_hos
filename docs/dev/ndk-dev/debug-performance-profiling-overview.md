---
title: "调试和性能分析概述"
original_url: /docs/dev/ndk-dev/debug-performance-profiling-overview
format: md
upstream_id: dev/ndk-dev/debug-performance-profiling-overview
last_sync: 2026-06-07
sync_hash: 3d8f61a3
---
通过NDK开发C/C++程序不可避免会遇到Native程序常见的异常、性能等问题，NDK随包提供了常用的调试调优工具，方便开发者定位问题。

* 已提供如下方式进行调试和性能分析：

  + [C/C++内存错误检测](/docs/tools/coding-debug/ide-asan)
  + 通过DevEco Studio调试
    - [1.C/C++反向调试](/docs/tools/coding-debug/ide-debug-native-reverse)
    - [2.使用真机进行调试](/docs/tools/coding-debug/ide-debug-device)

      ![](./img/e876eafc.png)

      在[使用真机进行调试](/docs/tools/coding-debug/ide-debug-device)中，如果本地编译设备so文件的源码路径和当前配置的C++源码路径不一致，可以参考[三方源码调试](/docs/tools/coding-debug/ide-source-code-debugging)
