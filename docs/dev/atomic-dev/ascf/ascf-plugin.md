---
title: "获取ASCF插件"
original_url: /docs/dev/atomic-dev/ascf/ascf-plugin
format: md
upstream_id: dev/atomic-dev/ascf/ascf-plugin
last_sync: 2026-06-07
sync_hash: aa784fa1
---
## 在DevEco Studio中使用

### 获取方式

1. 单击[链接下载](https://developer.huawei.com/consumer/cn/download/)，下载ASCF Plugin。
2. 在DevEco Studio中，手动安装插件。

   在DevEco Studio顶部菜单栏中选择“**File** &gt; **Setting**”。在打开的设置框中，选择“**Plugins**”。在“**Plugins**”页签中，点击“顶部的齿轮![](./img/3857aa05.png) &gt; **Install Plugin from Disk...** ”，将插件手动安装到DevEco Studio中。

   ![](./img/2f3a5d56.png)

   请直接安装下载的zip文件，不要解压后安装。MacOS用户如果使用Safari浏览器下载，请关闭自动解压缩功能。

ASCF框架版本发布的新增特性及变更说明请查阅[版本变更说明](/docs/dev/atomic-dev/ascf/ascf-release-note/release-note-ascf-runtime)。

### 自动升级ASCF Plugin

ASCF Plugin新版本发布后，支持自动检查版本并提示升级，请确保能够正常访问互联网。

### 升级已有项目的ASCF运行时版本

修改entry/oh-package.json5中的"@atomicservice/ascfapi": "^1.0.0"为最新的已发布ohpm中的@atomicservice/ascfapi版本。

### 升级已有项目的ASCF Toolkit版本

**场景1**：当前为1.0.1版本，升级到1.0.2版本：

请手动修改hvigor/hvigor-config.json5的dependencies设置为"@atomicservice/ascf-toolkit-hvigor-plugin": "~1.0.2"。

**场景2**：在beta版本阶段，当前为1.0.1版本，升级到1.0.1-beta.1版本：

请手动修改hvigor/hvigor-config.json5的dependencies设置为"@atomicservice/ascf-toolkit-hvigor-plugin": "~1.0.1-beta.1"。

## 在VS Code中使用

### 获取方式

在VSCode中，点击“扩展”，在应用商店搜索“ASCF Assistant”并选择安装。

![](./img/abddfc12.png)

在侧边栏出现元服务图标![](./img/2a9783cb.png)即安装成功。

![](./img/a04f04bf.png)

### 支持的设备

| 平台 | OS版本 | SDK版本 | ASCF工具链版本 | 快应用加载器版本 |
| --- | --- | --- | --- | --- |
| HarmonyOS | HarmonyOS 4及以下 | HMSCore 6.11.0.300及以上 | 1.0.15及以上 | 16.0.1及以上 |
| HarmonyOS | HarmonyOS 5.0及以上 | ASCF 1.0.0及以上 | 1.0.0及以上 | 不涉及 |

在HarmonyOS 4及以下设备中需要使用快应用加载器调试运行。使用ASCF开发助手运行会自动安装快应用加载器，也可以[手动下载快应用加载器](/docs/dev/atomic-dev/ascf/faqs-ascf-toolkit/faqs-quickapp-loader-manual-installation)安装。

使用华为快应用加载器调试快应用的方法参见[华为快应用加载器使用指导](https://developer.huawei.com/consumer/cn/doc/quickApp-Guides/quickapp-loader-user-guide-0000001115925960)。

快应用加载器安装后，支持手动加载元服务app包运行。

![](./img/ac4b2936.png "点击放大")

支持关闭管控规则，临时放通域名管控和敏感权限管控，方便本地调试，通过“进入快应用加载器 &gt;右上角![](./img/492c4d7e.jpg "点击放大") &gt; 设置 &gt; 豁免管控”选择开启后关闭管控规则 。

![](./img/fc0019bb.png "点击放大")
