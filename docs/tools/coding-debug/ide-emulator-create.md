---
title: "创建模拟器"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-emulator-create
format: md
upstream_id: tools/coding-debug/ide-emulator-create
last_sync: 2026-06-07
sync_hash: e28a2826
---
# 创建模拟器

有网络环境可参考以下步骤创建模拟器，如果是无网络环境，请查看[离线部署模拟器](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-no-network)。

![](./img/note_3.0-zh-cn.png)

在macOS中，您可能在活动监视器中发现模拟器进程占用的内存超过设置的内存。实际上，活动监视器中的<strong>Memory</strong>并不代表模拟器进程实际使用的物理内存，更多详情请参考[macOS上活动监视器中显示模拟器内存偏高](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-running-23)。

#### 使用预置的模拟器

从DevEco Studio 6.1.0 Beta2版本开始，如果本地没有模拟器，DevEco Studio会预置模拟器，开发者无需创建即可快速使用。

![](./img/note_3.0-zh-cn.png)

该功能仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）。

![](./img/zh-cn_image_0000002602184865.png)

在设备选择框中，选择预置的模拟器并点击运行按钮![](./img/zh-cn_image_0000002602184855.png)后，根据界面提示下载镜像，或点击菜单栏<strong>Tools &gt; Device Manager</strong> &gt;![](./img/zh-cn_image_0000002571545316.png)下载镜像后，即可快捷使用模拟器。

![](./img/zh-cn_image_0000002571385686.png)

#### 创建新的模拟器

1. 点击菜单栏的<strong>Tools &gt; Device Manager</strong>，点击右下角的<strong>Edit</strong>设置模拟器实例的存储路径<strong>Local Emulator Location</strong>，Mac默认存储在~/.Huawei/Emulator/deployed下，Windows默认存储在C:\Users\xxx\AppData\Local\Huawei\Emulator\deployed下。

   ![](./img/zh-cn_image_0000002602184863.png "点击放大")
2. 在<strong>Local Emulator</strong>页签中，单击右下角的<strong>New Emulator</strong>按钮，创建一个模拟器。

   在模拟器配置界面，可以选择一个默认的设备模板，首次使用时请点击设备右侧的![](./img/zh-cn_image_0000002571545304.png)下载模拟器镜像，您也可以在该界面更新或删除不同设备的模拟器镜像。

   单击<strong>Edit</strong>可以设置镜像文件的存储路径。macOS默认存储在~/Library/Huawei/Sdk下，Windows默认存储在C:\Users\xxx\AppData\Local\Huawei\Sdk下。

   ![](./img/note_3.0-zh-cn.png)

   如果配置界面显示异常，例如设备列表为空等，可先关闭DevEco Studio，并进入~/Library/Huawei（Windows路径为C:\Users\xxx\AppData\Local\Huawei）目录，删除DevEcoStudiox.x文件夹（如DevEcoStudio6.0，具体文件夹名称和安装的DevEco Studio版本相关）以清理缓存。

   ![](./img/zh-cn_image_0000002571545328.png)
3. 单击<strong>Next</strong>，设置设备相关的参数。
   * <strong>Name</strong>：设置模拟器的名称。
   * <strong>Screen Profile</strong>：从DevEco Studio 6.0.0 Beta1版本开始，部分设备支持选择预置的机型配置或自定义屏幕配置，具体支持的设备请参考[自定义屏幕配置](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-emulator-customize-screen-configuration)。可点击下拉框选择预置的机型配置，也可点击<strong>Customize</strong>自定义配置，在自定义配置的情况下可以对屏幕尺寸、分辨率和DPI进行修改，取值范围参考界面提示。
     + <strong>Screen size：</strong>屏幕的对角线长度，单位为inch。
     + <strong>Resolution</strong>：分辨率，包括宽度和高度，单位为px。
     + <strong>DPI</strong>：像素密度，DPI 越高，UI组件占用的像素点越多，从而提供更精细的显示效果。
   * <strong>Boot options</strong>：模拟器启动方式。从DevEco Studio 6.1.0 Beta1版本开始支持。
     + <strong>Cold boot</strong>：以开机启动的方式重新启动。
     + <strong>Quick boot</strong>：启动时加载上次关闭时保存的快照，启动后会恢复至上次关闭时的状态。
   * <strong>Memory</strong>：设置模拟器的内存。
   * <strong>Storage</strong>：设置模拟器的存储空间。

   确认所有参数后，点击<strong>Finish</strong>创建模拟器。

   ![](./img/zh-cn_image_0000002602184861.png)
4. 启动模拟器，有两种方式。
   * 从DevEco Studio 6.1.0 Beta2版本开始，创建后的模拟器会展示在设备列表中（最多10个），选择模拟器后，点击运行按钮![](./img/zh-cn_image_0000002571545332.png)，即可一键完成启动模拟器、编译构建、推包运行操作。

     ![](./img/zh-cn_image_0000002602184849.png)
   * 在设备管理器页面，单击![](./img/zh-cn_image_0000002571545330.png)启动模拟器。

     ![](./img/zh-cn_image_0000002571545326.png "点击放大")
5. 单击DevEco Studio的<strong>Run &gt; Run'模块名称'</strong>或![](./img/zh-cn_image_0000002571385678.png)。

   ![](./img/zh-cn_image_0000002602184867.png)
6. DevEco Studio会启动应用/元服务的编译构建与推包，完成后应用/元服务即可运行在模拟器上。

   ![](./img/zh-cn_image_0000002602184841.png)
