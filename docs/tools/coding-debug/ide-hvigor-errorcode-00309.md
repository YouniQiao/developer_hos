---
title: "ArkTS编译错误码"
displayed_sidebar: toolsSidebar
original_url: /docs/tools/coding-debug/ide-hvigor-errorcode-00309
format: md
upstream_id: tools/coding-debug/ide-hvigor-errorcode-00309
last_sync: 2026-06-07
sync_hash: f3d677a6
---
# ArkTS编译错误码

#### 00309001 禁止使用相对路径导入模块以外的文件

<strong>错误信息</strong>

Cannot import files outside of the current module using relative paths. Import statement: XXX. At file: YYY.

<strong>错误描述</strong>

禁止使用相对路径方式导入当前模块以外的文件。

<strong>可能原因</strong>

在当前模块中使用相对路径方式导入了模块外的文件YYY。

<strong>处理步骤</strong>

检查当前模块，确保没有使用相对路径方式导入模块外文件YYY。

#### 00309002 在import语句中避免使用绝对路径

<strong>错误信息</strong>

Avoid absolute paths in imports. Import statement: XXX. At file: YYY.

<strong>错误描述</strong>

在import语句中避免使用绝对路径。

<strong>可能原因</strong>

在文件YYY的import语句XXX中使用了绝对路径。

<strong>处理步骤</strong>

检查import语句XXX，确保没有使用绝对路径方式导入文件。

#### 00309003 无法解析import语句

<strong>错误信息</strong>

Cannot resolve import statement XXX.

<strong>错误描述</strong>

无法解析import语句XXX。

<strong>可能原因</strong>

* 在开启大小写敏感时（即工程级build-profile.json5的caseSensitiveCheck设置为true），import的文件夹中只包含Index.ets或Index.ts（大写I），当前import文件夹仅支持index.ets或index.ts（小写i）。
* 在开启大小写敏感时，import的文件和实际的文件名大小写不一致。

<strong>处理步骤</strong>

* 将import文件夹改为import具体的文件，如果要import文件夹，确保文件夹中存在index.ets或index.ts（小写i）。
* 确保import的文件和实际的文件名大小写一致。
