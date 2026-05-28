---
title: "权限错误码"
displayed_sidebar: toolsSidebar
---

# 权限错误码

#### 00307001 创建或写文件失败

<strong>错误信息</strong>

EPERM: operation not permitted,create XXX failed.

<strong>错误描述</strong>

创建或写文件XXX失败。

<strong>可能原因</strong>

缺少创建或写文件的权限。

<strong>处理步骤</strong>

确保用户具有创建文件、写文件的权限。

#### 00307003 HSP依赖包的bundleType不正确

<strong>错误信息</strong>

The currentBundleType is shared, but the Package XXX bundleType is not shared.

<strong>错误描述</strong>

当前的bundleType为shared，但是包XXX的bundleType不是shared。

<strong>可能原因</strong>

当前工程app.json5中的bundleType设置为shared，但是依赖包的bundleType不是shared。

<strong>处理步骤</strong>

移除依赖包XXX。

#### 00307005 文件被占用

<strong>错误信息</strong>

The file is occupied.

<strong>错误描述</strong>

文件被占用导致构建进程无法对文件进行操作。

<strong>可能原因</strong>

工程中的文件被其他进程占用或保护（如杀毒软件、加密软件等），导致DevEco Studio工具中的进程无法获取相应文件的权限。

<strong>处理步骤</strong>

1. 排查报错文件是否被其他进程占用，工程目录、DevEco Studio的安装目录是否有特殊的权限控制。
2. 可尝试将杀毒软件临时关闭来验证报错是否由杀毒软件导致。
