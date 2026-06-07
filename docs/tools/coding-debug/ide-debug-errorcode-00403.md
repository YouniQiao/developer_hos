---
title: "调试失败错误码"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-debug-errorcode-00403
format: md
---


# 调试失败错误码

#### 00403001 离线日志解析失败

<strong>错误信息</strong>

Failed to parse the HiLog file: XXX.

<strong>错误描述</strong>

离线日志解析失败。

<strong>可能原因</strong>

离线日志解析失败。

<strong>处理步骤</strong>

重新选择离线日志。

#### 00403003 应用堆栈解析出现错误

<strong>错误信息</strong>

应用堆栈解析相关报错，具体报错视情况而定。

<strong>错误描述</strong>

应用堆栈解析出现错误。

<strong>可能原因</strong>

根据报错提示信息来查找原因，具体参考处理步骤。

<strong>处理步骤</strong>

参考[Release应用堆栈解析相关错误提示及解决措施](`https://`developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-app-debugging-17)。

#### 00403028 应用程序意外退出

<strong>错误信息</strong>

App have been shutdown unexpectedly.

<strong>错误描述</strong>

应用程序意外退出。

<strong>可能原因</strong>

应用程序意外退出，因此调试服务也退出。

<strong>处理步骤</strong>

重新启动调试。

#### 00403029 sourceMaps.map文件内容为空

<strong>错误信息</strong>

The JSON content is empty when the sourceMaps.map file is read.

<strong>错误描述</strong>

读取sourceMaps.map文件时，JSON内容为空。

<strong>可能原因</strong>

sourceMaps.map文件内容为空。

<strong>处理步骤</strong>

点击菜单栏<strong>Build &gt; Clean Project</strong>清理缓存后重试。

#### 00403030 连接WebSocket失败

<strong>错误信息</strong>

Failed to connect to the WebSocket. Restart the debugging. If the problem persists, restart DevEco Studio and start debugging again.

<strong>错误描述</strong>

无法连接到WebSocket。请重新启动调试。如果问题仍然存在，请重启DevEco Studio并重新启动调试。

<strong>可能原因</strong>

1. 连接WebSocket失败。
2. 如果是2in1设备，可能是应用开启了应用加速服务。

<strong>处理步骤</strong>

1. 请重新启动调试。如果问题仍然存在，请重启DevEco Studio并重新启动调试。
2. 如果是2in1设备，请在设备的<strong>设置 &gt; 应用加速服务</strong>中，查看应用是否开启了应用加速服务，并关闭应用的加速服务。

#### 00403031 进程pid无效

<strong>错误信息</strong>

The process has invalid pid.

<strong>错误描述</strong>

进程pid无效。

<strong>可能原因</strong>

获取进程pid失败。

<strong>处理步骤</strong>

请重新启动调试。

#### 00403032 连接调试服务器失败

<strong>错误信息</strong>

Failed to connect to the debug server. Try again. If the issue persists, collect logs and choose Help &gt; Contact Support for assistance.

<strong>错误描述</strong>

无法连接到调试服务器。请重试。如果问题仍然存在，请收集日志并选择“帮助”&gt;“联系支持”以获取帮助。

<strong>可能原因</strong>

连接panda server失败。

<strong>处理步骤</strong>

请重试。如果问题仍然存在，请收集日志并选择“帮助”&gt;“联系支持”以获取帮助。

#### 00403033 获取ROM镜像版本失败

<strong>错误信息</strong>

Failed to obtain the ROM image version.

<strong>错误描述</strong>

获取ROM镜像版本失败。

<strong>可能原因</strong>

设备连接异常。

<strong>处理步骤</strong>

重新连接设备，或者执行hdc kill -r重启hdc后再重试。

#### 00403043 预览器启动失败

<strong>错误信息</strong>

Failed to start the Previewer. Try again. If the issue persists, collect logs and choose Help &gt; Contact Support for assistance.

<strong>错误描述</strong>

预览器启动失败。请重试。如果问题仍然存在，请收集日志并选择“帮助”&gt;“联系支持”以获取帮助。

<strong>可能原因</strong>

预览调试启动失败。

<strong>处理步骤</strong>

请重试。如果问题仍然存在，请收集日志并选择“帮助”&gt;“联系支持”以获取帮助。

#### 00403044 仿真器启动失败

<strong>错误信息</strong>

Failed to start the simulator. Try again. If the issue persists, collect logs and choose Help &gt; Contact Support for assistance.

<strong>错误描述</strong>

仿真器启动失败。请重试。如果问题仍然存在，请收集日志并选择“帮助”&gt;“联系支持”以获取帮助。

<strong>可能原因</strong>

仿真器启动失败。

<strong>处理步骤</strong>

请重试。如果问题仍然存在，请收集日志并选择“帮助”&gt;“联系支持”以获取帮助。

#### 00403045 编译失败

<strong>错误信息</strong>

Compilation failed.

<strong>错误描述</strong>

编译失败。

<strong>可能原因</strong>

编译失败。

<strong>处理步骤</strong>

点击菜单栏<strong>Build &gt; Clean Project</strong>清理缓存后重试。

#### 00403046 找不到Jerry适配器文件

<strong>错误信息</strong>

Jerry adapter file not found.

<strong>错误描述</strong>

找不到Jerry适配器文件。

<strong>可能原因</strong>

安装目录下找不到Jerry适配器文件。

<strong>处理步骤</strong>

在官网上重新[下载DevEco Studio](`https://`developer.huawei.com/consumer/cn/download/deveco-studio)。

#### 00403047 node路径无效

<strong>错误信息</strong>

Node path is invalid.

<strong>错误描述</strong>

Node路径无效。

<strong>可能原因</strong>

无法获取node路径。

<strong>处理步骤</strong>

检查DevEco Studio安装目录的tools目录下是否存在node工具，如果不存在，在官网上重新[下载DevEco Studio](`https://`developer.huawei.com/consumer/cn/download/deveco-studio)。

#### 00403048 无法启动webpack

<strong>错误信息</strong>

Unable to start webpack.

<strong>错误描述</strong>

无法启动webpack。

<strong>可能原因</strong>

webpack服务启动失败。

<strong>处理步骤</strong>

点击菜单栏<strong>Build &gt; Clean Project</strong>清理缓存后重试，如果未解决，重启DevEco Studio。

#### 00403049 预览插件未完全安装

<strong>错误信息</strong>

The Previewer plugin not fully installed. Please verify.

<strong>错误描述</strong>

预览插件未完全安装。请确认。

<strong>可能原因</strong>

预览插件未完全安装。

<strong>处理步骤</strong>

在官网上重新[下载DevEco Studio](`https://`developer.huawei.com/consumer/cn/download/deveco-studio)。

#### 00403050 Jerry适配器无法连接到服务器

<strong>错误信息</strong>

Jerry Adapter fails to connect to the engine.

<strong>错误描述</strong>

Jerry适配器无法连接到服务器。

<strong>可能原因</strong>

Jerry调试连接失败。

<strong>处理步骤</strong>

点击菜单栏<strong>Build &gt; Clean Project</strong>清理缓存后重试，如果未解决，重启DevEco Studio。

#### 00403051 Jerry调试引擎异常停止

<strong>错误信息</strong>

Adapter server or engine stopped abnormally.

<strong>错误描述</strong>

Jerry调试引擎异常停止。

<strong>可能原因</strong>

Jerry调试引擎异常停止。

<strong>处理步骤</strong>

点击菜单栏<strong>Build &gt; Clean Project</strong>清理缓存后重试，如果未解决，重启DevEco Studio。
