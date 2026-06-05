---
title: "ohpm version错误码"
displayed_sidebar: ohpmSidebar
format: md
---


# ohpm version错误码

## 00607001 参数无效

<strong>错误信息</strong>

Invalid Version Arg.

<strong>错误描述</strong>

参数无效。

<strong>可能原因</strong>

ohpm version命令后配置的参数无效。

<strong>处理步骤</strong>

检查配置的参数，确保参数正确。

## 00607002 版本号无效

<strong>错误信息</strong>

Invalid Origin Version.

<strong>错误描述</strong>

版本号无效。

<strong>可能原因</strong>

配置的版本号无效。

<strong>处理步骤</strong>

修改oh-package.json5文件中的version字段，确保其为有效版本。

## 00607003 版本号未配置

<strong>错误信息</strong>

Not Exist.

<strong>错误描述</strong>

版本不存在。

<strong>可能原因</strong>

未配置依赖包的版本号。

<strong>处理步骤</strong>

在oh-package.json5文件中添加version字段，并填写有效值。

## 00607004 版本号无变化

<strong>错误信息</strong>

No Change.

<strong>错误描述</strong>

无变化。

<strong>可能原因</strong>

版本未更改。

<strong>处理步骤</strong>

检查依赖包的版本号，确保其与当前版本不同。

## 00607005 命令执行错误

<strong>错误信息</strong>

Forbidden Opt.

<strong>错误描述</strong>

禁止的操作。

<strong>可能原因</strong>

执行ohpm version时未配置参数。

<strong>处理步骤</strong>

检查和确保命令格式为 ohpm version [options] [&lt;newversion&gt; | major | minor | patch]。