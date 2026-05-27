---
title: "ohpm publish错误码"
displayed_sidebar: ohpmSidebar
---

# ohpm publish错误码

## 00609001 依赖声明缺失

<strong>错误信息</strong>

Dep Statements Missing.

<strong>错误描述</strong>

依赖声明缺失。

<strong>可能原因</strong>

在oh-package.json5的dependencies/dynamicDependencies未声明。

<strong>处理步骤</strong>

确保导入的依赖项在oh-package.json5文件的 "dependencies" 或 "dynamicDependencies" 中声明，具体可参考[ensure\_dependency\_include](./ide-ohpmrc.md#section1291814578276)。

## 00609002 私钥路径不存在

<strong>错误信息</strong>

Key Path Is Empty Or NotFound.

<strong>错误描述</strong>

私钥路径为空或未找到。

<strong>可能原因</strong>

在.ohpmrc文件中没有配置私钥路径。

<strong>处理步骤</strong>

在.ohpmrc文件中配置有效的私钥路径。

## 00609003 私钥文件不存在

<strong>错误信息</strong>

Private Key File Not Exist.

<strong>错误描述</strong>

私钥文件不存在。

<strong>可能原因</strong>

.ohpmrc文件中配置的私钥路径不存在或错误。

<strong>处理步骤</strong>

检查.ohpmrc文件中的私钥路径配置，确保私钥文件存在。

## 00609004 私钥文件路径错误

<strong>错误信息</strong>

Key Path Is DirError.

<strong>错误描述</strong>

私钥路径错误。

<strong>可能原因</strong>

私钥路径文件错误。

<strong>处理步骤</strong>

确保.ohpmrc中配置的私钥文件路径指向私钥文件。

## 00609005 发布ID为空

<strong>错误信息</strong>

Publish Id Is Empty.

<strong>错误描述</strong>

发布ID为空。

<strong>可能原因</strong>

未在.ohpmrc文件配置publish\_id字段。

<strong>处理步骤</strong>

在.ohpmrc文件中配置publish\_id。

## 00609006 私钥文件内容为空

<strong>错误信息</strong>

Private Key Content Is Empty.

<strong>错误描述</strong>

私钥文件内容为空。

<strong>可能原因</strong>

私钥文件内容为空。

<strong>处理步骤</strong>

重新生成私钥文件。

## 00609007 不支持的私钥

<strong>错误信息</strong>

Not Support PrivateKey.

<strong>错误描述</strong>

不支持的私钥。

<strong>可能原因</strong>

未配置使用非空密码加密的私钥。

<strong>处理步骤</strong>

在.ohpmrc文件中配置加密的私钥密码。

## 00609009 HSP文件为空

<strong>错误信息</strong>

Hsp File Is Empty.

<strong>错误描述</strong>

HSP文件为空。

<strong>可能原因</strong>

HSP文件内容为空。

<strong>处理步骤</strong>

确保HSP文件包含有效内容。

## 00609010 tgz文件无效

<strong>错误信息</strong>

Invalid Tgz File.

<strong>错误描述</strong>

无效的TGZ文件。

<strong>可能原因</strong>

路径对应的文件中未包含.hsp文件。

<strong>处理步骤</strong>

检查tgz文件路径，确保路径对应的文件中包含.hsp文件。

## 00609011 构建tgz元数据失败

<strong>错误信息</strong>

Build Tgz Metadata Failed.

<strong>错误描述</strong>

构建tgz元数据失败。

<strong>可能原因</strong>

字段信息配置问题。

<strong>处理步骤</strong>

检查包oh-package.json5的配置，确保各字段配置正确。

## 00609012 依赖包被锁定

<strong>错误信息</strong>

Pkg Is Locked.

<strong>错误描述</strong>

依赖包被锁定。

<strong>可能原因</strong>

三次上传失败，依赖包被锁定。

<strong>处理步骤</strong>

等待一段时间后重试，再上传。

## 00609013 超出最大长度限制

<strong>错误信息</strong>

Over Maximum Length Error.

<strong>错误描述</strong>

超出最大长度限制。

<strong>可能原因</strong>

配置的name、email、url值的长度超过了最大限制。

<strong>处理步骤</strong>

检查值的长度，确保其在允许的范围内。name长度范围为[1,128]，email长度范围为[1，64]，url长度范围为[1，256]。

## 00609014 解析源文件失败

<strong>错误信息</strong>

Parse Source File Error.

<strong>错误描述</strong>

解析源文件失败。

<strong>可能原因</strong>

.ohpmrc配置文件格式不正确。

<strong>处理步骤</strong>

检查和确认配置文件的内容和格式，确保正确。

## 00609015 未配置兼容性字段

<strong>错误信息</strong>

Check Compatibility Field Error.

<strong>错误描述</strong>

检查兼容性字段失败。

<strong>可能原因</strong>

oh-package.json5文件中未配置兼容性字段。

<strong>处理步骤</strong>

确保oh-package.json5文件中配置了必要的兼容性检测字段。

## 00640001 系统错误

<strong>错误信息</strong>

System Error.

<strong>错误描述</strong>

系统错误。

<strong>可能原因</strong>

系统错误，例如内存错误等。

<strong>处理步骤</strong>

检查日志文件，寻找错误信息定位根源。