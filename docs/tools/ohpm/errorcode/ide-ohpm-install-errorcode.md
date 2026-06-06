---
title: "ohpm install错误码"
displayed_sidebar: ohpmSidebar
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/ide-ohpm-install-errorcode
format: md
---


# ohpm install错误码

## 00604001 无匹配版本

<strong>错误信息</strong>

No Match.

<strong>错误描述</strong>

无匹配版本。

<strong>可能原因</strong>

从服务器获取的ohpm版本号和oh-package.json5中配置的版本号不匹配。

<strong>处理步骤</strong>

检查包的可用版本，确保指定的版本存在，修改oh-package.json5中ohpm版本号。

## 00604002 安装HAR包失败

<strong>错误信息</strong>

Install Pkg To Local Failed.

<strong>错误描述</strong>

安装本地包HAR失败。

<strong>可能原因</strong>

* 本地包或依赖的远程包不存在。
* 安装目录权限不足或磁盘空间不足。

<strong>处理步骤</strong>

* 查看本地包的依赖配置是否正确。
* 尝试写入权限的目录下进行操作，或清理磁盘后进行操作。

## 00604003 本地安装HSP包失败

<strong>错误信息</strong>

Install Local Hsp Failed.

<strong>错误描述</strong>

安装本地HSP包失败。

<strong>可能原因</strong>

* 安装本地HSP包失败，路径下缺少.hsp和.har 文件。
* 检查HSP包内的信息是否完整。

<strong>处理步骤</strong>

通过DevEco Studio生成一个新的TGZ包，通过对比，排查本地HSP包缺失的信息。

## 00604004 未找到HSP文件

<strong>错误信息</strong>

Not FoundHsp File By Registry Tgz.

<strong>错误描述</strong>

未找到HSP文件。

<strong>可能原因</strong>

无法从HSP包中找到.hsp文件。

<strong>处理步骤</strong>

检查HSP包，确保包含.hsp 文件。

## 00604005 依赖的包名无效

<strong>错误信息</strong>

Invalid CliInput Pkg .

<strong>错误描述</strong>

依赖的包名无效。

<strong>可能原因</strong>

从中心仓/私仓中未获取的依赖包名。

<strong>处理步骤</strong>

在中心仓或私仓搜索包名，确保输入包名正确。

## 00604006 依赖项中包名与实际包名不一致

<strong>错误信息</strong>

Inconsistent Dep Names.

<strong>错误描述</strong>

依赖名称不一致。

<strong>可能原因</strong>

工程级build-profile.json5文件中[useNormalizedOHMUrl](./ide-hvigor-build-profile-app.md#section13181758123312)或 .ohpmrc文件中[enforce\_dependency\_key](./ide-ohpmrc.md#section920325116547)设置为true后，ohpm会校验配置的本地依赖名称与其对应的包名是否一致，若不一致会导致命令执行失败。

<strong>处理步骤</strong>

检查依赖项列表，确保所有依赖项中包名与实际包名一致。

## 00604007 必选字段为空错误

<strong>错误信息</strong>

Field IS Empty Error.

<strong>错误描述</strong>

Field必选字段为空错误。

<strong>可能原因</strong>

oh-package.json5中必填字段未填。

<strong>处理步骤</strong>

检查oh-package.json5中必填字段，确保其包含有效值。

## 00604008 未找到最大的依赖版本

<strong>错误信息</strong>

Internal Program Error.

<strong>错误描述</strong>

未找到最大版本。

<strong>可能原因</strong>

有多个依赖版本时，未找到最大版本。

<strong>处理步骤</strong>

检查包依赖关系，确保没有依赖包冲突或不兼容的情况。具体请参考[模块内依赖版本冲突](./ide-ohpmrc.md#section1623415477574)。

## 00633001 在命令行中指定的路径不存在

<strong>错误信息</strong>

Target Path UnExist Error.

<strong>错误描述</strong>

在命令行中指定的路径不存在。

<strong>可能原因</strong>

当使用--target\_path选项时，指定的target\_path不存在或不正确错误。

<strong>处理步骤</strong>

检查命令行，确保目标路径存在并且正确，更多说明请参考[target\_path](./ide-ohpm-install.md#section79331822125611)。

## 00622020 输入的parameterFile文件或地址不存在

<strong>错误信息</strong>

Option Specified Parameter File Not Found.

<strong>错误描述</strong>

parameterFile未找到。

<strong>可能原因</strong>

配置的parameterFile文件或地址不存在错误。

<strong>处理步骤</strong>

检查和确保parameterFile文件路径正确。

## 00638002 包名不规范

<strong>错误信息</strong>

Invalid Group Option.

<strong>错误描述</strong>

包名不规范。

<strong>可能原因</strong>

包名的第一个字符必须是小写字母（a-z），且只能包含小写字母（a-z）、数字（0-9）、中划线（-）和下划线（\_），长度不超过36个字符。

<strong>处理步骤</strong>

检查包名，确保正确。