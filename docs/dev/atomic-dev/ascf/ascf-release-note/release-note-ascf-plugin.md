---
title: "ASCF Plugin"
original_url: /docs/dev/atomic-dev/ascf/ascf-release-note/release-note-ascf-plugin
format: md
upstream_id: dev/atomic-dev/ascf/ascf-release-note/release-note-ascf-plugin
last_sync: 2026-06-07
sync_hash: abcdae20
---
## 1.0.4.305

**发布日期**：2026/4/30

该版本新增和增强特性如下所示：

新增行业模板功能，支持开发者通过行业模板快速创建元服务项目。

## 1.0.4.304

**发布日期**：2025/12/4

该版本新增和增强特性如下所示：

1. 新增[使用ASCF调试器](/docs/dev/atomic-dev/ascf/ascf-development-process/debug-ascf-code)功能，支持DevEco Studio内开启调试。
2. 优化热重载体验，识别设备连接状态。

## 1.0.4.303

**发布日期**：2025/09/29

该版本新增和增强特性如下所示：

1. 优化热重载体验，开启按钮更明显。
2. 兼容DevEco Studio 6.0及以下版本。

## 1.0.4.300

**发布日期**：2025/07/18

该版本新增和增强特性如下所示：

1. 优化导入体验，导入过程提示更加明确。
2. 新增基于真机的热重载能力，提供DevEco Studio内一键式切换热重载模式。
3. 更新模板工程中ASCF Toolkit Hvigor Plugin依赖版本号为1.0.6。

## 1.0.4.200

**发布日期**：2025/05/30

该版本新增和增强特性如下所示：

新增基于真机的热重载能力，提供DevEco Studio内一键式切换热重载模式。

## 1.0.3.200

**发布日期**：2025/04/30

该版本新增和增强特性如下所示：

优化导入体验，导入过程提示更加明确。

## 1.0.2.300

**发布日期**：2025/03/26

该版本新增和增强特性如下所示：

1. 优化了HXML文件的代码编辑能力。
2. ASCF转换器新增了高级配置项，可以通过填写参数来启用相应的功能，当前支持的参数包括：

   * --logging=[level]

     用于控制日志最低打印级别，level可取值为["debug" | "info" | "warn" | "error"]，默认级别为"info"。
   * --notaddtodo

     用于控制在转换后的源码中，不支持的接口处不添加注释。
3. 新增了ASCF Demos工程模板，该模板提供了ASCF框架下组件、接口、开放能力等使用方法展示。

   要新建ASCF Demos工程，可在DevEco Studio顶部菜单栏中选择“**File** &gt; **New **&gt;** Create Project**”。在打开的模板窗口中选择“**Atomic Service**”，选中**ASCF Demos**模板，然后单击**Next**。

## 1.0.1.300

**发布日期**：2024/12/31

该版本新增和增强特性如下所示：

1. 新增HXML文件语法高亮功能。
2. 新增分包配置后自动提示sync功能。
3. 优化模板工程，默认预置常用必要权限。

## 1.0.0.300

**发布日期**：2024/11/19

插件首版本发布，该版本新增和增强特性如下所示：

1. 支持创建ASCF项目元服务。
2. 支持导入转换小程序为ASCF项目。
3. 支持编译ASCF项目。
