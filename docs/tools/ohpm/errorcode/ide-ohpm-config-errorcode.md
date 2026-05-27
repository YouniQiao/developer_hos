---
title: "ohpm config错误码"
displayed_sidebar: ohpmSidebar
---

# ohpm config错误码

## 00602001 未配置子命令

<strong>错误信息</strong>

Config Subcommand Is Empty.

<strong>错误描述</strong>

Config子命令为空。

<strong>可能原因</strong>

执行ohpm config命令时，未配置子命令。

<strong>处理步骤</strong>

确认ohpm config可用的子命令，配置子命令后再执行。

## 00602002 配置的子命令不支持

<strong>错误信息</strong>

Config Subcommand Not Support.

<strong>错误描述</strong>

Config配置的子命令不支持。

<strong>可能原因</strong>

ohpm config配置的子命令不支持。

<strong>处理步骤</strong>

确认ohpm config可用的子命令后再配置。

## 00602003 set命令参数缺失

<strong>错误信息</strong>

Config Set Command Param Error.

<strong>错误描述</strong>

set命令参数错误。

<strong>可能原因</strong>

执行ohpm config set命令时，未配置&lt;key&gt; &lt;value&gt;参数。

<strong>处理步骤</strong>

确保命令输入格式为"ohpm config set &lt;key&gt; &lt;value&gt;"。

## 00602004 get命令参数错误

<strong>错误信息</strong>

Config Get Command Param Error.

<strong>错误描述</strong>

get命令参数错误。

<strong>可能原因</strong>

输入ohpm config get &lt;value&gt;命令，不可直接获取value，需要通过key获取。

<strong>处理步骤</strong>

确保命令输入格式为"ohpm config get &lt;key&gt;"。

## 00602005 delete命令参数错误

<strong>错误信息</strong>

Config Delete Command Param Error.

<strong>错误描述</strong>

delete命令参数错误。

<strong>可能原因</strong>

输入ohpm config delete命令。

<strong>处理步骤</strong>

确保命令输入格式为"ohpm config delete &lt;key&gt;"。

## 00602006 list参数无效

<strong>错误信息</strong>

Config List Command Param Error.

<strong>错误描述</strong>

list参数无效。

<strong>可能原因</strong>

输入的list参数无效，如ohpm config list adsy。

<strong>处理步骤</strong>

确保命令输入格式为"ohpm config list [-j|--json]"。

## 00602007 获取受保护的键名

<strong>错误信息</strong>

Protected Key.

<strong>错误描述</strong>

键名被保护。

<strong>可能原因</strong>

获取以下划线开头的键名。

<strong>处理步骤</strong>

以下划线开头键名受保护（如\_auth=readWriteToken），不允许访问。详情可参考[如何配置AccessToken](./ide-ohpmrc.md#section613915915011)。

## 00602008 键不存在

<strong>错误信息</strong>

Key Not Exist.

<strong>错误描述</strong>

键不存在。

<strong>可能原因</strong>

删除用户级目录下ohpmrc文件中指定的键值时，key不存在。

<strong>处理步骤</strong>

运行"ohpm config list"查看所有可用的配置键，再执行"ohpm config delete &lt;key&gt;"。

## 00602009 重复加载配置

<strong>错误信息</strong>

Repeat Load Configuration.

<strong>错误描述</strong>

重复加载配置。

<strong>可能原因</strong>

ohpm重复加载参数和配置。

<strong>处理步骤</strong>

关闭ohpm命令，重新加载一次。

## 00602010 保存时未加载配置文件

<strong>错误信息</strong>

Not Loaded When Saving.

<strong>错误描述</strong>

保存时未加载配置文件。

<strong>可能原因</strong>

保存时未加载配置文件。

<strong>处理步骤</strong>

加载完成后再保存配置。

## 00602011 设置时未加载配置的数据

<strong>错误信息</strong>

Not Loaded When Setting.

<strong>错误描述</strong>

未加载配置即设置。

<strong>可能原因</strong>

在设置值之前未加载配置。

<strong>处理步骤</strong>

加载完成后再配置参数。

## 00602012 Encrypt命令参数错误

<strong>错误信息</strong>

Config Encrypt Command Param Error.

<strong>错误描述</strong>

Encrypt命令参数配置错误。

<strong>可能原因</strong>

执行ohpm config encrypt命令，未配置加密组件路径。

<strong>处理步骤</strong>

检查和确保命令格式为"ohpm config encrypt --crypto\_path &lt;string&gt;"。

## 00602013 加密组件路径为空

<strong>错误信息</strong>

Crypto Path Is Empty.

<strong>错误描述</strong>

加密路径为空。

<strong>可能原因</strong>

执行ohpm config encrypt --crypto\_path命令。

<strong>处理步骤</strong>

检查和确保命令格式为"ohpm config encrypt --crypto\_path &lt;string&gt;"。

## 00602014 加密组件路径错误

<strong>错误信息</strong>

Crypto Component Not Directory.

<strong>错误描述</strong>

加密组件路径错误。

<strong>可能原因</strong>

执行ohpm config encrypt --crypto\_path &lt;string&gt;，string为实际存在的文件，不是目标路径。

<strong>处理步骤</strong>

检查当前加密路径是否为目标路径。

## 00602015 无效的加密组件

<strong>错误信息</strong>

Invalid Crypto Component.

<strong>错误描述</strong>

无效的加密组件。

<strong>可能原因</strong>

生成的加密组件的key无效。

<strong>处理步骤</strong>

运行命令ohpm config encrypt --crypto\_path &lt;string&gt;生成有效的加密组件目录，确保指定的路径符合加密组件的要求。

## 00602016 加密路径未配置

<strong>错误信息</strong>

Crypto Path Not Configured.

<strong>错误描述</strong>

加密路径配置不正确。

<strong>可能原因</strong>

crypto\_path内容格式不正确。

<strong>处理步骤</strong>

检查.ohpmrc文件中crypto\_path确保正确配置，确保crypto\_path的格式正确。