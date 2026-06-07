---
title: "ohpm dependency-check错误码"
displayed_sidebar: ohpmSidebar
original_url: /docs/tools/ohpm/errorcode/ide-ohpm-dependency-check-errorcode
format: md
---


# ohpm dependency-check错误码

## 00680001 更新信息查询失败

<strong>错误信息</strong>

querying update information from remote repository failed

<strong>错误描述</strong>

更新信息查询失败。

<strong>可能原因</strong>

执行ohpm dependency-check命令时，中心仓或私仓的地址错误。

<strong>处理步骤</strong>

检查中心仓或私仓的地址，确保正确。

## 00680002 指定模块下不存在oh-package.json5文件

<strong>错误信息</strong>

Specified module path or json file not exist

<strong>错误描述</strong>

查询更新信息时，指定的模块路径不存在或指定的模块下没有oh-package.json5文件。

<strong>可能原因</strong>

指定的模块不正确，或者模块下缺少oh-package.json5文件。

<strong>处理步骤</strong>

确认模块名称正确，以及配置oh-package.json5文件。

## 00680003 指定包查询失败

<strong>错误信息</strong>

When no module is specified, querying update information for a specified package is not supported

<strong>错误描述</strong>

当没有指定任何模块时，不支持查询指定包的更新信息。

<strong>可能原因</strong>

仅指定三方库名称，未指定模块或工程。

<strong>处理步骤</strong>

确保填写正确的模块/工程名称、三方库名称。