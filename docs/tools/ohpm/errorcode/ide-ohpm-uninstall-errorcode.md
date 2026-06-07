---
title: "ohpm uninstall错误码"
displayed_sidebar: ohpmSidebar
original_url: /docs/tools/ohpm/errorcode/ide-ohpm-uninstall-errorcode
format: md
---


# ohpm uninstall错误码

## 00605001 未配置包名称

<strong>错误信息</strong>

No Pkg.

<strong>错误描述</strong>

uninstall时未配置包名称。

<strong>可能原因</strong>

卸载不存在的依赖包。

<strong>处理步骤</strong>

根据oh-package.json5文件中配置的依赖进行卸载，确认卸载的依赖包在文件中已配置。

## 00605002 配置版本号错误

<strong>错误信息</strong>

Has Version.

<strong>错误描述</strong>

配置版本号。

<strong>可能原因</strong>

执行卸载命令时，配置包版本号。

<strong>处理步骤</strong>

执行卸载命令时，不配置包版本号。

## 00617301 从本地文件夹获取源代码包时失败

<strong>错误信息</strong>

Fetch Source Code Failed.

<strong>错误描述</strong>

从本地文件夹获取源代码包时失败。

<strong>可能原因</strong>

指定的路径不存在，导致无法获取源代码包。

<strong>处理步骤</strong>

检查路径，确保路径存在且正确。