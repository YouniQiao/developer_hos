---
title: "依赖错误码"
displayed_sidebar: toolsSidebar
format: md
---


# 依赖错误码

#### 00301001 SDK中找不到签名工具

<strong>错误信息</strong>

No HAP signing tool found in the SDK.

<strong>错误描述</strong>

SDK中找不到签名工具。

<strong>可能原因</strong>

SDK中缺少签名工具。

<strong>处理步骤</strong>

根据报错信息检查对应目录下是否存在签名工具，如果不存在，在官网上重新下载[DevEco Studio](`https://`developer.huawei.com/consumer/cn/download/deveco-studio)。

#### 00301002 SDK版本过低

<strong>错误信息</strong>

The SDK version configured for the current project is too low.

<strong>错误描述</strong>

SDK版本过低。

<strong>可能原因</strong>

使用的SDK版本过低。

<strong>处理步骤</strong>

在官网上下载新版本的[DevEco Studio](`https://`developer.huawei.com/consumer/cn/download/deveco-studio)。

#### 00301003 SDK版本错误

<strong>错误信息</strong>

Unsupported SDK version for using AOT compiling. Current SDK version is XXX, but the lowest SDK version which support AOT compiling is XXX.

<strong>错误描述</strong>

当前SDK版本不支持AOT编译模式。

<strong>可能原因</strong>

使用的SDK版本过低。

<strong>处理步骤</strong>

在官网上下载新版本的[DevEco Studio](`https://`developer.huawei.com/consumer/cn/download/deveco-studio)。

#### 00301004 SDK版本错误

<strong>错误信息</strong>

Current version of SDK has a bug when using AOT compiling. The compiling will continue with AOT compiling function disabled. Current SDK version is XXX, but the lowest fixed SDK version is XXX.

<strong>错误描述</strong>

当前SDK版本不支持AOT编译模式。

<strong>可能原因</strong>

使用的SDK版本过低。

<strong>处理步骤</strong>

在官网上下载新版本的[DevEco Studio](`https://`developer.huawei.com/consumer/cn/download/deveco-studio)。

#### 00301005 API版本低于12时不支持字节码har

<strong>错误信息</strong>

byteCodeHar not supported when below API version 12.

<strong>错误描述</strong>

API版本低于12时不支持字节码har。

<strong>可能原因</strong>

API版本低于12时不支持字节码har。

<strong>处理步骤</strong>

确保工程级build-profile.json5中的compileSdkVersion、compatibleSdkVersion不低于API 12。

#### 00301006 HSP中找不到oh-package.json5文件

<strong>错误信息</strong>

The oh-package.json5 file cannot be found in the remote HSP XXX. Check whether the oh-package.json5 file exists in YYY.

<strong>错误描述</strong>

在HSP XXX中找不到oh-package.json5文件。

<strong>可能原因</strong>

HSP包损坏。

<strong>处理步骤</strong>

检查目录YYY下的HSP包中是否存在oh-package.json5文件，如果不存在说明包已经损坏，需要重新下载或联系作者。

#### 00301007 HSP中找不到.hsp文件

<strong>错误信息</strong>

Cannot find the .hsp file in the remote HSP. Check whether the .hsp file exists in the XXX directory.

<strong>错误描述</strong>

在HSP中找不到.hsp文件。

<strong>可能原因</strong>

HSP包损坏。

<strong>处理步骤</strong>

检查XXX下的HSP包是否存在.hsp文件，如果不存在说明包已损坏，需要重新下载或联系作者。

#### 00301009 本地依赖无效

<strong>错误信息</strong>

The local dependency below in module XXX invalid. It may cause an ohpm install error when being integrated.

<strong>错误描述</strong>

模块XXX下的本地依赖无效，在集成时可能会导致ohpm安装错误。

<strong>可能原因</strong>

模块配置的本地依赖不在当前模块目录下。

<strong>处理步骤</strong>

确保在模块级oh-package.json5的dependencies和dynamicDependencies下配置的本地依赖都在本模块目录下。

#### 00301010 useNormalizedOHMUrl不一致

<strong>错误信息</strong>

The useNormalizedOHMUrl settings of packages XXX and the project useNormalizedOHMUrl:XXX do not match.

<strong>错误描述</strong>

包XXX的useNormalizedOHMUrl属性值与工程中useNormalizedOHMUrl属性值不一致。

<strong>可能原因</strong>

工程级build-profile.json5中的useNormalizedOHMUrl与包XXX的useNormalizedOHMUrl属性值不同。

<strong>处理步骤</strong>

1. 将报错的依赖包的工程级build-profile.json5中的useNormalizedOHMUrl修改为与当前工程一致，重新生成依赖包并替换(useNormalizedOHMUrl缺省默认值为false)。
2. 如果与工程不一致的依赖包较多，建议修改工程的工程级build-profile.json5中的useNormalizedOHMUrl值以及替换其他的不一致的依赖包。
