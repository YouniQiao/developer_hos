---
title: "ohpm dist-tags错误码"
displayed_sidebar: ohpmSidebar
---

# ohpm dist-tags错误码

## 00623001 tag标签无效

<strong>错误信息</strong>

Tag Invalid Error.

<strong>错误描述</strong>

标签无效。

<strong>可能原因</strong>

tag标签格式不符合要求。

<strong>处理步骤</strong>

检查tag标签格式，确保其符合规范。具体请参考[ohpm dist-tags](./ide-ohpm-dist-tags.md)。

## 00623003 list命令错误

<strong>错误信息</strong>

List Command Param Error.

<strong>错误描述</strong>

list命令参数错误。

<strong>可能原因</strong>

ohpm dist-tags list命令配置错误。

<strong>处理步骤</strong>

确保输入的命令为 "ohpm dist-tags list [&lt;@group&gt;/]&lt;pkg&gt;"。

## 00623004 命令参数配置错误

<strong>错误信息</strong>

SubCommand Param Error.

<strong>错误描述</strong>

子命令参数错误。

<strong>可能原因</strong>

命令行中缺少&lt;pkg&gt;、&lt;tag&gt;参数。

<strong>处理步骤</strong>

检查和确保输入的命令中带有&lt;pkg&gt;和&lt;tag&gt;参数。

## 00623005 未配置发布仓库地址

<strong>错误信息</strong>

Publish Registry Empty Error.

<strong>错误描述</strong>

发布仓库地址为空错误。

<strong>可能原因</strong>

未设置发布的仓库地址。

<strong>处理步骤</strong>

使用命令ohpm config set publish\_registry &lt;r&gt; 设置发布仓库地址。

## 00623006 未配置版本号

<strong>错误信息</strong>

Version Empty Error.

<strong>错误描述</strong>

版本为空错误。

<strong>可能原因</strong>

命令中未填写版本号。

<strong>处理步骤</strong>

检查和添加正确的三方库版本号。

## 00623007 未配置子命令

<strong>错误信息</strong>

Subcommand Is Empty.

<strong>错误描述</strong>

子命令为空错误。

<strong>可能原因</strong>

ohpm dist-tags命令配置时，缺少子命令。

<strong>处理步骤</strong>

确认和配置ohpm dist-tags可用的子命令（add、remove、 update、 list）。

## 00623008 子命令不支持

<strong>错误信息</strong>

Subcommand Not Support.

<strong>错误描述</strong>

子命令不支持。

<strong>可能原因</strong>

使用了不支持的子命令。

<strong>处理步骤</strong>

确认和配置ohpm dist-tags可用的子命令（add、remove、 update、 list）。