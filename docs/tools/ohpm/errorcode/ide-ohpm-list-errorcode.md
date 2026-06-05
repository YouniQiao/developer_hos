---
title: "ohpm list错误码"
displayed_sidebar: ohpmSidebar
format: md
---


# ohpm list错误码

## 00622014 parameterFile配置问题

<strong>错误信息</strong>

Parameter File Not Config Error.

<strong>错误描述</strong>

参数文件未配置。

<strong>可能原因</strong>

parameterFile配置问题。

<strong>处理步骤</strong>

检查和确保parameterFile配置正确，具体修改可参考[parameterFile](./ide-oh-package-json5.md#section122411462820)。

## 00608001 包未找到

<strong>错误信息</strong>

Pkg Not Found.

<strong>错误描述</strong>

包未找到。

<strong>可能原因</strong>

目录中不存在oh-package.json5文件。

<strong>处理步骤</strong>

确保当前目录下存在oh-package.json5文件。

## 00618005 存在循环依赖

<strong>错误信息</strong>

Invalid Dependency.

<strong>错误描述</strong>

无效依赖。

<strong>可能原因</strong>

存在循环依赖，如ma@1.0.0 -&gt; mb@1.0.0 -&gt; mc@1.0.0 -&gt; ma@1.0.0。

<strong>处理步骤</strong>

检查依赖配置，确保无循环依赖。