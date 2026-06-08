---
title: "ohpm unpublish错误码"
displayed_sidebar: ohpmSidebar
original_url: /docs/tools/ohpm/errorcode/ide-ohpm-unpublish-errorcode
format: md
upstream_id: tools/ohpm/errorcode/ide-ohpm-unpublish-errorcode
last_sync: 2026-06-07
sync_hash: 1593ffcf
---
# ohpm unpublish错误码

## 00610001 执行下架命令时未指定版本号

<strong>错误信息</strong>

Delete All Version Pkg Not Force.

<strong>错误描述</strong>

未强制下架不同版本的包。

<strong>可能原因</strong>

下架时未指定版本号，且未使用强制下架。

<strong>处理步骤</strong>

如果未指定版本，默认下架三方库的所有版本，并且需要加上 -f 配置参数。