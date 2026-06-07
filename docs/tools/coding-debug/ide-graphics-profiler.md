---
title: "GPU帧捕获工具：Graphics Profiler抓帧入口"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-graphics-profiler
format: md
---


# GPU帧捕获工具：Graphics Profiler抓帧入口

Graphics Profiler（图形性能调优）是专为GPU分析和优化提供的一种调试分析解决方案，可帮助OpenGL ES游戏或Vulkan游戏提升性能，分析绘制和计算问题。从DevEco Studio 6.0.0 Beta1版本开始，提供Graphics Profiler工具的抓帧入口，该工具用于对HarmonyOS手机设备进行调试，需使用调试证书。

#### 操作步骤

1. 将需要分析的使用OpenGL ES或Vulkan API接口开发的应用推送到设备，并确认应用完成安装。
2. 在DevEco Studio顶部菜单栏中点击View &gt; Tool Windows &gt; Graphics Profiler进入帧捕获页面。
3. 在帧捕获页面，可配置Ref All Resources和Verify Buffer Access两个参数，配置完成后点击Launch APP拉起应用。
   * Ref All Resources：默认关闭，在打开此选项后，抓帧时捕获所有活动资源，无论抓取的这一帧是否使用活动资源，都保存在Trace中。
   * Verify Buffer Access：默认关闭，设置校验Buffer是否可以访问。

   此处为可选配置，不配置也可直接点击Launch APP拉起应用。

   ![](./img/zh-cn_image_0000002602066657.png)
4. 在帧捕获界面拉起应用，成功建立连接后，Capture按钮点亮。设置抓帧数量，点击Capture按钮，等待帧捕获完成。
   * Scope：不可修改，默认为Frame。
   * Count：抓帧数量设置，范围为1-10帧。

   ![](./img/zh-cn_image_0000002571387540.png)
5. 当抓帧完成，在下方显示界面中选择一条捕获帧，点击![](./img/zh-cn_image_0000002571547174.png)按钮，可自动打开Graphics Profiler工具解析捕获帧信息。

   ![](./img/zh-cn_image_0000002571387542.png "点击放大")

   ![](./img/note_3.0-zh-cn.png)

   * 抓帧文件名格式为：[应用包名] \_ [抓帧时间] \_frame [帧号].rdc。
   * Graphics Profiler工具一次只能解析一个rdc文件。
6. 若首次使用，需根据界面提示下载Graphics Profiler执行工具，并在菜单栏<strong>File &gt; Settings</strong>（macOS为<strong>DevEco Studio &gt; Preferences/Settings</strong>） <strong>&gt; Tools &gt; Graphics Profiler</strong>中配置工具路径。默认路径为：工具安装路径/frame\_profiler/FrameProfiler.exe（macOS中为工具安装路径/Contents/MacOS/FrameProfiler）。

   ![](./img/zh-cn_image_0000002602066655.png)
