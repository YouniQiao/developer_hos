---
title: "ohpm convert错误码"
displayed_sidebar: ohpmSidebar
format: md
---


# ohpm convert错误码

## 00636001 无子目录

<strong>错误信息</strong>

No Subdirectories.

<strong>错误描述</strong>

无子目录。

<strong>可能原因</strong>

本地node\_modules目录下无子目录。

<strong>处理步骤</strong>

检查node\_modules目录，确保存在有效的子目录。

## 00636002 未找到artifactType属性

<strong>错误信息</strong>

Not Found Attribute Name.

<strong>错误描述</strong>

未找到属性名称。

<strong>可能原因</strong>

在package.json配置文件中未找到artifactType属性。

<strong>处理步骤</strong>

检查属性名称，确保其存在。

## 00636003 RuleType无效

<strong>错误信息</strong>

Invalid Rule Type.

<strong>错误描述</strong>

无效的规则类型。

<strong>可能原因</strong>

在验证配置时，未找到 attrName属性对应的ruleType规则。

<strong>处理步骤</strong>

检查规则类型，确保其存在验证配置中。

## 00636004 未找到package.json文件

<strong>错误信息</strong>

Not Found Constants.PackageJson.

<strong>错误描述</strong>

未找到package.json文件。

<strong>可能原因</strong>

指定的规则类型在验证配置中不存在。

<strong>处理步骤</strong>

检查目录路径，确保npm包中package.json文件存在。

## 00636005 包转换失败

<strong>错误信息</strong>

Convert Package Failed.

<strong>错误描述</strong>

包转换失败。

<strong>可能原因</strong>

npm包中package.json配置文件字段缺失。

<strong>处理步骤</strong>

检查npm包中package.json配置文件字段存在，且取值符合要求。具体字段说明请参考[oh-package.json5](./ide-oh-package-json5.md#zh-cn_topic_0000001792256137_oh-packagejson5-字段说明)。

## 00636006 Node\_modules目录配置错误

<strong>错误信息</strong>

Configure Node Modules Error.

<strong>错误描述</strong>

node\_modules配置错误。

<strong>可能原因</strong>

使用本地模式转换时，node\_modules目录配置错误。

<strong>处理步骤</strong>

配置正确的node\_modules目录，确保转换顺利进行。