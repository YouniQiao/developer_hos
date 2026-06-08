---
title: "ohpm命令公共错误码"
displayed_sidebar: ohpmSidebar
original_url: /docs/tools/ohpm/commands/ide-ohpm-errorcode-universal
format: md
upstream_id: tools/ohpm/commands/ide-ohpm-errorcode-universal
last_sync: 2026-06-07
sync_hash: b765a3f0
---
# ohpm命令公共错误码

## 00617101 获取包信息失败

<strong>错误信息</strong>

Fetch Pkg Info Failed.

<strong>错误描述</strong>

获取包信息失败。

<strong>可能原因</strong>

执行ohpm list、ohpm info、ohpm install命令时，包名或版本号不匹配，从中心仓和私仓获取不到相关信息。

<strong>处理步骤</strong>

在中心仓和私仓搜索包名/版本号，确保可以跟仓中匹配。

## 00608001 oh-package.json5文件不存在

<strong>错误信息</strong>

Pkg Not Found.

<strong>错误描述</strong>

找不到三方库。

<strong>可能原因</strong>

工程目录下不存在oh-package.json5文件。

<strong>处理步骤</strong>

确保工程目录下存在oh-package.json5文件，再执行命令。

## 00608002 文件不存在

<strong>错误信息</strong>

File Not Found.

<strong>错误描述</strong>

文件不存在。

<strong>可能原因</strong>

在指定目录下未找到文件。

<strong>处理步骤</strong>

确认目录下存在文件后再执行命令。

## 00608003 读取文件时发生错误

<strong>错误信息</strong>

File Read Error.

<strong>错误描述</strong>

读取文件时发生错误。

<strong>可能原因</strong>

读取配置等文件失败。

<strong>处理步骤</strong>

查看是否被占用后，重新读取。

## 00670002 路径大小写敏感错误

<strong>错误信息</strong>

Path Case Sensitivity Error.

<strong>错误描述</strong>

路径大小写敏感错误。

<strong>可能原因</strong>

工程中文件的配置路径和文件的实际路径大小写不一致。

<strong>处理步骤</strong>

修改工程中配置的文件路径，使其与文件的实际路径一致；或者设置.ohpmrc文件中的case\_sensitive\_check为false，不检测文件路径大小写。更多请参考[case\_sensitive\_check](./ide-ohpmrc.md#section2045412394117)。