---
title: "汇编调试"
displayed_sidebar: toolsSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-debug-native-disassembly
format: md
---


# 汇编调试

DevEco Studio支持查看汇编和汇编代码调试，此外，当程序中断到没有源码的位置时（如step into到一个没有调试信息的函数中），DevEco Studio会打开汇编视图，让您了解程序当前停住的地址及对应的汇编代码。

#### 汇编视图

在某一个堆栈处右键，在弹出菜单中选择“<strong>Disassemble Frame</strong>”，可以查看该栈帧对应的汇编代码。

![](./img/zh-cn_image_0000002571547182.png)

支持在汇编视图中展示源码、函数名，可以跳转到对应源代码，汇编视图如下：

![](./img/zh-cn_image_0000002602066663.png)

#### 汇编断点

可以在汇编视图设置断点，程序运行到对应地址时中断。

![](./img/zh-cn_image_0000002571547184.png)

#### 单步调试

汇编视图下，单步按钮默认以汇编指令级别进行单步调试。

![](./img/zh-cn_image_0000002602186715.png)
