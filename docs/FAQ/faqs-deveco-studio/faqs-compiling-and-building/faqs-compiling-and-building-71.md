---
format: md
title: "如何解决DevEco Studio编译hsp和闭源har包的时候，生成声明文件时emit的耗时过长导致编译慢的问题"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-71
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-71
last_sync: 2026-06-07
sync_hash: 04260954
---
![](./img/5f0573e5.png)

注：此方法为临时规避方案，后续将修复该问题，建议仅在阻塞时使用。

用于减少编译HSP和闭源HAR包时生成声明文件的耗时。

修改 ets\_checker.js 文件（文件路径：SDK路径\default\base\ets\build-tools\ets-loader\lib\ets\_checker.js），编辑 processBuildHap 函数。

1. 生成 sourceFile，在遍历文件时生成声明文件。

   ![](./img/5d7953dc.png "点击放大")
2. 修改 getEmitOutput 函数，将其改为 getFileEmitOutput 函数，以获取声明文件。

   ![](./img/da5e8091.png "点击放大")
