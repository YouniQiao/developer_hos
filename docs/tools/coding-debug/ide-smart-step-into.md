---
title: "智能步入"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-smart-step-into
format: md
upstream_id: tools/coding-debug/ide-smart-step-into
last_sync: 2026-06-07
sync_hash: 0edab1c7
upstream_hash: 71cd8fd6b22c
---

# 智能步入

进行C++调试时，当前代码行有多个函数调用时，开发者可以使用Smart Step Into功能![](./img/zh-cn_image_0000002571546500.png)直接Step Into到其中某一个函数的实现中。

#### 操作步骤

通过点击调试窗口“entry-Native”调试器下的Debugger窗格中的按钮![](./img/zh-cn_image_0000002571386862.png)（或使用快捷键<strong>Shift+F7</strong>）触发Smart Step Into功能后，DevEco Studio会将当前代码中可以进行跳转的函数进行高亮显示。

![](./img/zh-cn_image_0000002602065981.png "点击放大")

开发者点击需要跳转的函数，程序会运行到目标函数的实现内。

![](./img/note_3.0-zh-cn.png)

已经执行完毕的函数不会高亮显示。
