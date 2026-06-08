---
title: "堆栈可视化"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-debug-native-parallel-stacks
format: md
upstream_id: tools/coding-debug/ide-debug-native-parallel-stacks
last_sync: 2026-06-07
sync_hash: db053752
---
# 堆栈可视化

在native调试窗口中，点击<strong>Layout Settings</strong>![](./img/zh-cn_image_0000002571546762.png)，勾选<strong>Parallel Stacks</strong>，打开并行栈视图。

![](./img/zh-cn_image_0000002571546760.png)

在程序停下时，并行栈视图可以同时展示多个线程的调用栈信息，合并重复调用栈，帮助您更好地理解程序的并发执行情况，以及发现潜在的多线程问题。

![](./img/zh-cn_image_0000002602186293.png)

#### 调用栈跳转

您可以在视图上对某一个调用栈双击来跳转到对应堆栈，Frames页签中会随之跳转，此时可以查看该堆栈的变量等信息。

#### 线程信息查看

在多个线程合并的位置处悬停鼠标，可以显示这些线程的具体信息。

![](./img/zh-cn_image_0000002602186295.png)
