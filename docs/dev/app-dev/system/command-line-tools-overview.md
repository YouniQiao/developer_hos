---
title: "SDK命令行工具简介"
original_url: /docs/dev/app-dev/system/command-line-tools-overview
format: md
upstream_id: dev/app-dev/system/command-line-tools-overview
last_sync: 2026-06-07
sync_hash: a56289e4
---
当前SDK中包含了开发者在开发应用过程中需要使用的多种工具，可以实现日志查看、应用安装、启动测试等功能。

## 命令行工具获取

* 通过SDK获取相关工具。其中SDK已嵌入[DevEco Studio](/docs/tools/coding-debug/ide-software-install)中，无需额外下载配置。SDK位于DevEco Studio的安装位置下的sdk目录中。
* 通过[Command Line Tools](/docs/tools/cli-tools/ide-commandline-get)工具中的sdk文件夹获取相关工具。

如需获取最新版本工具，请更新DevEco Studio或Command Line Tools。

![](./img/fc0c83c5.png)

各命令行工具存放位置有差异，详见各工具文档介绍。

## 常用工具列表

| 命令 | 说明 |
| --- | --- |
| [hdc](/docs/dev/app-dev/system/hdc) | 用于与设备进行交互调试、数据传输、查看日志等操作。 |
| [aa](/docs/dev/app-dev/system/aa-tool) | Ability助手用于启动应用和测试用例，提供应用调试和测试功能，如启动组件、强制停止进程、打印组件信息等。 |
| [bm](/docs/dev/app-dev/system/bm-tool) | 实现应用安装、卸载、更新、查询，提供基本的安装包调试能力。 |
| [hilog](/docs/dev/app-dev/system/hilog) | 用于打印日志，记录用户操作和系统运行状态。 |
| [打包工具](/docs/dev/app-dev/system/packing-tool) | 用于在程序编译完成后，对编译出的文件等进行打包，以供安装发布。 |
| [拆包工具](/docs/dev/app-dev/system/unpacking-tool) | 支持通过命令行方式将HAP、HSP、App等文件解压成文件夹。提供Java接口对HAP、HSP、App等文件进行解析。 |
