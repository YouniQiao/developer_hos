---
title: "ohpm update错误码"
displayed_sidebar: ohpmSidebar
---

# ohpm update错误码

## 00606001 执行命令时带版本号

<strong>错误信息</strong>

Has Version.

<strong>错误描述</strong>

update时带版本号。

<strong>可能原因</strong>

执行ohpm update时带版本号。

<strong>处理步骤</strong>

更新命令中不应包含版本号，仅指定包名。

## 00606002 执行tag-filter命令时使用非标准的正则

<strong>错误信息</strong>

Tag Filter Non Standard Regex.

<strong>错误描述</strong>

tag-filter命令使用非标准正则。

<strong>可能原因</strong>

执行ohpm update --tag-filter &lt;regex&gt;命令时，使用非标准正则。

<strong>处理步骤</strong>

检查和修改为标准正则。