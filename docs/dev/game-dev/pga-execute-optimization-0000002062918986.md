---
title: "执行PGA优化"
original_url: /docs/dev/game-dev/pga-execute-optimization-0000002062918986
format: md
upstream_id: dev/game-dev/pga-execute-optimization-0000002062918986
last_sync: 2026-06-07
sync_hash: 9fa1a6d4
---
PGA内部使用了自研的毕昇编译器，可以在开发态就将IL格式的DLL文件（C#源码的中间产物）转换成更为高效的目标架构本地代码，从而改善程序运行时的性能与功耗，解锁游戏体验。

将IL格式的DLL文件转换成架构相关本地代码的流程如下：

![](./img/071011b1.png)
