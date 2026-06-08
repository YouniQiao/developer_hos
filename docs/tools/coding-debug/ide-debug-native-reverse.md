---
title: "反向调试"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-debug-native-reverse
format: md
upstream_id: tools/coding-debug/ide-debug-native-reverse
last_sync: 2026-06-07
sync_hash: 7b228e68
---
# 反向调试

针对C/C++开发场景，DevEco Studio在提供基础调试能力的基础上，同时提供反向调试能力，帮助开发者更好地理解代码和更迅速定位问题。

反向调试是指在调试过程中可以回退到历史行和历史断点，查看历史调试信息，包括线程、堆栈和变量信息。支持的调试操作为：

* 进入/退出反向调试模式
* 反向Step Over回退到历史行
* 反向Resume执行到历史断点
* 在程序执行历史的记录点上查看全局、静态、局部变量值

#### 前提条件

在<strong>File &gt; Settings</strong>（macOS为<strong>DevEco Studio &gt; Preferences/Settings</strong>） <strong>&gt; Build,Execution,Deployment &gt; Debugger &gt; C++ Debugger</strong>设置界面，勾选<strong>Enable time travel debug</strong>开启C++反向调试开关。

![](./img/zh-cn_image_0000002602065963.png)

#### 操作步骤

1. 设置断点，进入调试模式。
2. 开启反向调试开关后，在Debugger中会出现反向调试相关按钮。

   ![](./img/zh-cn_image_0000002602186017.png)

   需要查看历史调试信息时，点击“Open Time Travel Debug”按钮![](./img/zh-cn_image_0000002571386852.png)进入反向调试模式，您可以在此模式下进行调试。

   ![](./img/zh-cn_image_0000002602186023.png)

   其中，操作按钮说明如下：

   * ![](./img/zh-cn_image_0000002571386858.png)：退出反向调试模式。
   * ![](./img/zh-cn_image_0000002571546490.png)：切换当前高亮行到下一个历史断点，并显示断点相关信息。
   * ![](./img/zh-cn_image_0000002571546486.png)：切换当前高亮行到上一个历史断点，并显示断点相关信息。
   * ![](./img/zh-cn_image_0000002602065967.png)：切换当前高亮行到下一个历史行，并显示历史行相关信息。
   * ![](./img/zh-cn_image_0000002571386856.png)：切换当前高亮行到上一个历史行，并显示历史行相关信息。

![](./img/note_3.0-zh-cn.png)

某些功能在反向调试模式下无法使用，此时会根据您的行为进行对应提示。
