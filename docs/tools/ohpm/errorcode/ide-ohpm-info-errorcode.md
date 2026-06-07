---
title: "ohpm info错误码"
displayed_sidebar: ohpmSidebar
original_url: /docs/tools/ohpm/errorcode/ide-ohpm-info-errorcode
format: md
---


# ohpm info错误码

## 00639001 获取包失败

<strong>错误信息</strong>

Package Not Found Error.

<strong>错误描述</strong>

包未找到错误。

<strong>可能原因</strong>

在中心仓或私仓未找到相应的包。

<strong>处理步骤</strong>

检查包名称，确保在中心仓或私仓中存在。

## 00639002 包名称为空

<strong>错误信息</strong>

Package Name Is Empty Error.

<strong>错误描述</strong>

包名称为空错误。

<strong>可能原因</strong>

执行命令时未配置包名。

<strong>处理步骤</strong>

填写有效的包名称。

## 00639003 配置Field不支持的字段

<strong>错误信息</strong>

UnSupport Field Error.

<strong>错误描述</strong>

不支持的字段错误。

<strong>可能原因</strong>

命令中配置field不支持的字段。

<strong>处理步骤</strong>

检查和输入field支持的字段，如“keywords”、“dependencies”、"latest"等。

## 00639004 PageNum页码错误

<strong>错误信息</strong>

Invalid PageNum Error.

<strong>错误描述</strong>

无效的页码错误。

<strong>可能原因</strong>

配置的PageNum值超出有效范围。

<strong>处理步骤</strong>

检查页码范围，确保其在[1, 10000]有效范围内。

## 00639005 PageSize无效错误

<strong>错误信息</strong>

Invalid PageSize Error.

<strong>错误描述</strong>

无效的页面大小错误。

<strong>可能原因</strong>

配置的PageSize值超出有效范围。

<strong>处理步骤</strong>

检查PageSize值，确保其在[1, 500]有效范围内。