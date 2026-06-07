---
title: "ohpm cache clean错误码"
displayed_sidebar: ohpmSidebar
original_url: /docs/tools/ohpm/errorcode/ide-ohpm-cache-errorcode
format: md
---


# ohpm cache clean错误码

## 00601001 缓存子命令为空

<strong>错误信息</strong>

Cache Subcommand Is Empty.

<strong>错误描述</strong>

缓存子命令为空。

<strong>可能原因</strong>

缓存子命令缺失或子命令不正确。

<strong>处理步骤</strong>

检查输入的子命令格式，确保输入正确的缓存子命令 ohpm cache clean。

## 00601002 缓存子命令不支持

<strong>错误信息</strong>

Cache Subcommand Not Support.

<strong>错误描述</strong>

不支持缓存子命令。

<strong>可能原因</strong>

输入的命令不支持配置Cache子命令。

<strong>处理步骤</strong>

确认可配置Cache子命令的命令列表（如 clean 或 -h）。

## 00601003 缓存包无效

<strong>错误信息</strong>

Invalid Cache Package.

<strong>错误描述</strong>

缓存包无效。

<strong>可能原因</strong>

因缺少依赖等，导致缓存包不完整/无效。

<strong>处理步骤</strong>

1. 执行ohpm cache clean清理缓存，然后执行ohpm install安装依赖。
2. 检查ohpmrc文件中registry配置是否正确。