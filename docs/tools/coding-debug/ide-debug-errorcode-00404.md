---
title: "hdc命令失败错误码"
displayed_sidebar: toolsSidebar
---

# hdc命令失败错误码

#### 00404035 安装hap包超时

<strong>错误信息</strong>

Install hap timeout.

<strong>错误描述</strong>

安装hap包超时。

<strong>可能原因</strong>

设备连接异常或者hdc服务异常。

<strong>处理步骤</strong>

重新拔插下设备，或者执行hdc kill -r命令再重新运行。

#### 00404036 删除临时目录超时

<strong>错误信息</strong>

Remove Directory Timeout: XXX.

<strong>错误描述</strong>

删除临时目录超时。

<strong>可能原因</strong>

设备连接异常或者hdc服务异常。

<strong>处理步骤</strong>

重新拔插下设备，或者执行hdc kill -r命令再重新运行。

#### 00404037 创建临时目录超时

<strong>错误信息</strong>

Create Directory Timeout.

<strong>错误描述</strong>

创建临时目录超时。

<strong>可能原因</strong>

设备连接异常或者hdc服务异常。

<strong>处理步骤</strong>

重新拔插下设备，或者执行hdc kill -r命令再重新运行。

#### 00404038 构建打包信息为空

<strong>错误信息</strong>

Build package info list is empty.

<strong>错误描述</strong>

构建打包信息为空。

<strong>可能原因</strong>

构建没有正确打包生成应用信息。

<strong>处理步骤</strong>

点击菜单栏<strong>Build &gt; Clean Project</strong>清理缓存后重试。

#### 00404039 创建临时目录失败

<strong>错误信息</strong>

Failed to create temporary directory during hap push operation.

<strong>错误描述</strong>

创建临时目录失败。

<strong>可能原因</strong>

设备连接异常或者hdc服务异常。

<strong>处理步骤</strong>

重新拔插下设备，或者执行hdc kill -r命令再重新运行。

#### 00404040 推包超时

<strong>错误信息</strong>

Push Hap Timeout.

<strong>错误描述</strong>

推包超时。

<strong>可能原因</strong>

数据连接线非原装数据线导致传输速率不高，或者hdc服务异常。

<strong>处理步骤</strong>

换原装数据线，或者执行hdc kill -r命令再重新运行。

#### 00404041 不支持方舟native模块加载异常信息增强

<strong>错误信息</strong>

Start ability failed:The current device version does not support enhance error info. Update device version or deselect the Enhanced Error Info.

<strong>错误描述</strong>

启动ability失败，不支持方舟native模块加载异常信息增强，请升级设备系统或者取消勾选方舟native模块加载异常信息增强功能。

<strong>可能原因</strong>

当前设备系统版本不支持方舟native模块加载异常信息增强。

<strong>处理步骤</strong>

请升级设备系统，或者在运行/调试配置面板取消勾选方舟native模块加载异常信息增强功能。

#### 00404042 不支持方舟多线程检测

<strong>错误信息</strong>

The current device version does not support multi thread check. Update device version or deselect the Multi Thread Check.

<strong>错误描述</strong>

不支持方舟多线程检测，请升级设备系统或者取消勾选方舟多线程检测功能。

<strong>可能原因</strong>

当前设备系统版本不支持方舟多线程检测。

<strong>处理步骤</strong>

请升级设备系统，或者在运行/调试配置面板取消勾选方舟多线程检测功能。

#### 00404053 不支持等待调试功能

<strong>错误信息</strong>

The current device version does not support the waiting for debugging capability. Update or upgrade the device version.

<strong>错误描述</strong>

当前设备系统版本不支持等待调试功能，请升级设备系统版本。

<strong>可能原因</strong>

当前设备系统版本不支持等待调试功能。

<strong>处理步骤</strong>

请升级当前设备系统版本。

#### 00404054 等待调试命令执行超时

<strong>错误信息</strong>

Waiting for the debug command times out.

<strong>错误描述</strong>

等待调试命令执行超时。

<strong>可能原因</strong>

设备连接异常或者hdc服务异常。

<strong>处理步骤</strong>

重新拔插下设备，或者执行hdc kill -r命令再重试。

#### 00404055 应用没安装或者不是debug签名

<strong>错误信息</strong>

This app is not installed or not signed with a debug signature.

<strong>错误描述</strong>

应用没安装或者不是debug签名。

<strong>可能原因</strong>

1. 通过命令设置应用进入等待调试模式失败，应用没安装或者不是debug签名；
2. 设备连接异常，执行命令失败。

<strong>处理步骤</strong>

1. 检查应用是否已安装，应用签名是否使用debug签名；
2. 检查设备连接是否正常，可以尝试拔插设备重新连接，再重新启动等待调试。
