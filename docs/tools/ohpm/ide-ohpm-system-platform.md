---
title: "ohpm概述"
displayed_sidebar: ohpmSidebar
original_url: /docs/tools/ohpm/ide-ohpm-system-platform
format: md
upstream_id: tools/ohpm/ide-ohpm-system-platform
last_sync: 2026-06-07
sync_hash: 53dae660
---
# ohpm概述

## 什么是 ohpm

OHPM（OpenHarmony Package Manager）是 OpenHarmony 三方库的官方包管理工具，为开发者提供三方库的检索、安装、发布与管理能力。它由三个部分组成：

| 组成部分 | 说明 |
| --- | --- |
| **ohpm-cli（命令行工具）** | 核心，提供包的安装、卸载、发布、搜索等全部包管理功能 |
| **OpenHarmony 三方库中心仓（registry）** | 存储三方库及其元数据的远程仓库，地址 `https://ohpm.openharmony.cn/ohpm` |
| **中心仓网站（website）** | 用于检索、查看三方库信息，管理个人配置的 Web 控制台 |

## 环境要求

ohpm-cli 基于 Node.js 构建，使用前需满足以下条件：

<strong>Node.js：</strong>16.x 及以上版本，请提前安装。

<strong>操作系统与文件系统：</strong>

ohpm 通过软链接（符号链接）构建依赖关系，不同系统的要求如下：

| 系统 | 要求 |
| --- | --- |
| **Windows** | 文件系统须为 NTFS（默认满足）；源码依赖时，依赖模块与被依赖模块须在同一盘符，不支持跨盘符依赖 |
| **macOS** | 文件系统须为 APFS（默认满足）；若挂载 FAT32/exFAT 等不支持符号链接的文件系统，无法在其上创建软链接 |
| **Linux** | EXT4、Btrfs、XFS、ZFS 等常见文件系统均满足；较老或不支持符号链接的文件系统可能异常 |

## 安装 ohpm-cli

1. 下载 ohpm 工具包，[点击链接获取](https://ohpm.openharmony.cn/#/cn/help/download)
2. 解压后进入 `ohpm/bin` 目录，在命令行中执行 init 命令完成安装
3. 验证安装：

```bash
ohpm -v
```

终端输出版本号即表示安装成功。

若需在任意目录使用 ohpm，请将 `ohpm/bin` 路径添加到系统环境变量 `PATH` 中。

## 快速上手：安装依赖

### 从中心仓安装三方库

在工程根目录的 `oh-package.json5` 中声明依赖：

```json5
"dependencies": {
   "@ohos/crypto-js": "2.0.1"
}
```

然后执行：

```bash
ohpm install
```

依赖将下载到当前目录的 `oh_modules/` 下。

也可以直接通过命令行安装并自动写入 `oh-package.json5`：

```bash
ohpm install @ohos/crypto-js
```

### 引用本地文件夹

在 `oh-package.json5` 中配置：

```json5
"dependencies": {
   "my-module": "file:../my-module"
}
```

```bash
ohpm install
```

### 引用本地 .har 包

```json5
"dependencies": {
   "mylib": "file:./mylib.har"
}
```

```bash
ohpm install
```

## 在项目中使用三方库

依赖安装到 `oh_modules/` 后，在代码中直接 import 即可：

```ts
import { CryptoJS } from '@ohos/crypto-js'

var hash = CryptoJS.MD5("123456")
```
