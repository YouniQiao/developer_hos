---
title: "使用鸿蒙电脑版DevEco Studio ASCF助手开发"
original_url: /docs/dev/atomic-dev/ascf/ascf-development-process/ascf-bitfun
format: md
upstream_id: dev/atomic-dev/ascf/ascf-development-process/ascf-bitfun
last_sync: 2026-06-07
sync_hash: 09f08db9
---
ASCF开发助手推出了适配鸿蒙电脑版DevEco Studio的版本，旨在为元服务（HarmonyOS元服务）开发者提供高效、便捷的一站式开发体验。该助手集成了项目创建、代码转换、热更新，调试等核心功能。

## 环境要求

为保证功能正常运行，PC系统及ASCF版本要求如下：

* 鸿蒙PC系统版本：HarmonyOS 6及以上。
* ASCF Toolkit：1.0.16及以上。
* ASCF助手：1.0.9及以上。

## 安装使用

1. 申请[鸿蒙电脑版DevEco Studio](https://developer.huawei.com/consumer/cn/activity/developerbeta/deveco-studio-preview)体验名额。

   ![](./img/15b97138.png)

   当前鸿蒙电脑版DevEco Studio处于测试阶段，申请通过后即可下载体验。
2. 下载[ASCF助手](https://h5hosting-drcn.dbankcdn.cn/cch5/wallet/ascf-cn/ascf-plugin-bitfun/ascf-plugin-bitfun.bfx)。
3. 点击左侧面板中的插件面板，点击“+”号选择插件，选择下载的ASCF助手进行添加。
4. 在侧边栏出现元服务图标![](./img/cf9869ce.png "点击放大")即安装成功。

   ![](./img/b252bcaf.png "点击放大")

   ![](./img/ef5311cb.png)

## 新建/导入项目

### 新建项目

1. 点击新建项目按钮，打开新建项目页。

   ![](./img/c2f441db.png "点击放大")
2. 按提示配置项目信息并创建项目。

   参考[ASCF助手配置项目信息](/docs/dev/atomic-dev/ascf/ascf-development-process/ascf-assistant#新建项目)。
3. 签名。

   构建元服务需要先配置好签名，可以使用自动签名或手动方式完成签名，详情请参见[签名](/docs/tools/coding-debug/ide-signing)。

   ![](./img/c30919b8.png)

   ![](./img/64580f66.png)

### 导入ASCF项目

参考[导入ASCF项目](/docs/dev/atomic-dev/ascf/ascf-development-process/ascf-assistant#导入ascf项目)。

## 转换小程序项目为ASCF项目

1. 打开新建的ASCF项目，删除其中的ascf/ascf\_src目录。
2. 点击转换按钮，选择小程序项目。

   ![](./img/31ee8e0d.png "点击放大")

   ![](./img/3875baf1.png)

## 开发指导

在开发过程中，ASCF开发助手支持以下特性，能够帮助开发者更便捷、高效地开发元服务。

* ASCF开发助手支持一键创建页面、组件。

  通过在目录文件下右键，选择一键创建页面，即可快速生成页面所需的文件。
* 一键生成元服务图标。

  详细请参考[元服务图标生成工具](/docs/dev/atomic-dev/ascf/ascf-development-process/ascf-assistant#元服务图标生成工具)。

## 编译元服务

### 预览器

鸿蒙电脑版DevEco Studio支持在PC上运行元服务，无需额外的设备链接。需要先在系统设置中打开无线调试，然后重启ide。

![](./img/36a9bde5.png "点击放大")

![](./img/1dafdfcd.png)

可以点击鸿蒙电脑版DevEco Studio下方运行按钮，编译元服务。

![](./img/291dc485.png)

## 功能按钮介绍

同[功能按钮介绍](/docs/dev/atomic-dev/ascf/ascf-development-process/ascf-assistant#功能按钮介绍)。

## 元服务图标生成工具

同[元服务图标生成工具](/docs/dev/atomic-dev/ascf/ascf-development-process/ascf-assistant#元服务图标生成工具)。

## 开发者主页

同[开发者主页](/docs/dev/atomic-dev/ascf/ascf-development-process/ascf-assistant#开发者主页)。

## 鸿蒙电脑版DevEco Studio顶部搜索框命令

按下快捷鍵Ctrl + Shift + A如图所示，可以执行ASCF相关的命令。

![](./img/9b8f766a.png)

### 插件内置命令

同[ASCF插件内置命令](/docs/dev/atomic-dev/ascf/ascf-development-process/ascf-assistant#插件内置命令)。

## 插件配置

可通过点击左上角图标![](./img/45a68b19.png "点击放大")选择“设置” -&gt; 在搜索设置中输入ascf，可设置ASCF助手插件的行为。插件配置同[ASCF插件配置](/docs/dev/atomic-dev/ascf/ascf-development-process/ascf-assistant#插件配置)。

![](./img/fecc841c.jpeg)

## 功能限制说明

在鸿蒙电脑版 DevEco Studio上，存在以下限制：

* 暂不支持视图层调试（webview调试）。
* 暂不支持swc编译。
* 暂不支持全局安装ASCF命令行。
* 暂不支持中英文切换。
* 暂不支持ASCF接口、组件语法提示和代码补全。
* 暂不支持缓存。
