---
title: "attach启动调试"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-debug-arkts-attach
format: md
upstream_id: tools/coding-debug/ide-debug-arkts-attach
last_sync: 2026-06-07
sync_hash: 64c96e4f
---
# attach启动调试

开发者也可以通过将调试程序attach到已运行的应用进行调试。

Attach Debugger和Debug的区别在于，Attach Debugger to Process可以先运行应用/元服务，然后再启动调试，或者直接启动设备上已安装的应用/元服务进行调试；而Debug是直接运行应用/元服务后立即启动调试。

#### 前提条件

当前设备上被attach的应用代码和本地代码一致，且已提前进行构建生成必要的sourceMap文件。

#### 使用约束

attach不支持的场景：

* 本地无源码。
* bundleName不匹配，将出现提示“The selected process does not match the bundlename of the current project!”，但不阻塞调试过程。

  ![](./img/zh-cn_image_0000002602186431.png)

#### 操作步骤

1. 在工具栏中，选择调试的设备，并单击<strong>Attach Debugger to Process</strong>![](./img/zh-cn_image_0000002602186435.png)启动调试。

   ![](./img/zh-cn_image_0000002602186433.png)
2. 选择要调试的应用进程，若应用bundleName与当前工程不一致，则需勾选Show all process。

   ![](./img/zh-cn_image_0000002571387266.png)

   ![](./img/note_3.0-zh-cn.png)

   正常情况下，attach调试仅支持debug签名的应用，从DevEco Studio 6.0.2 Beta1版本开始，PC/2in1上的应用，如果使用了release签名并且配置了ohos.permission.kernel.ALLOW\_DEBUG权限，也支持被attach调试。
3. 选择需要使用的调试配置，或者使用默认配置。

   ![](./img/zh-cn_image_0000002571387256.png)
4. 选择需要调试的Debug type，若选择已创建的Run/Debug configuration进行attach调试，此时Debug type不可改变，只可在Run/Debug configuration界面修改。

   ![](./img/zh-cn_image_0000002571546892.png)

   ![](./img/zh-cn_image_0000002602186429.png)
5. 点击<strong>OK</strong>开始attach调试。

   ![](./img/zh-cn_image_0000002571546896.png)
