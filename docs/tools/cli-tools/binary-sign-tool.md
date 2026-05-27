---
title: "二进制签名工具"
displayed_sidebar: cliToolsSidebar
---

# 二进制签名工具

Binary Sign Tool（二进制签名工具），用于对二进制文件进行代码签名，支持通过命令行的方式对标准ELF文件进行代码签名或打印已签名ELF的权限、证书信息。

## 命令行工具获取

* 支持运行在Linux平台的工具：下载最新的[Command Line Tools](./command-line-tools-overview.md)，可以在SDK库openHarmony/toolchains/lib中找到，文件名为binary-sign-tool。
* 支持运行在HarmonyOS PC/2in1平台的工具：从应用商店下载安装DevBox软件，无需额外配置，即可在终端窗口中执行binary-sign-tool命令。
* 支持运行在Java平台的工具：下载API 24及以上版本的[Command Line Tools](./command-line-tools-overview.md)，可以在SDK库openHarmony/toolchains/lib中找到，文件名为binary-sign-tool.jar。此工具运行要求JDK 8及以上版本。

## 二进制签名工具命令列表

| 命令 | 描述 |
| --- | --- |
| help | 帮助命令，用于查询工具支持的命令信息。 |
| sign | 二进制文件签名。 |
| display-sign | 打印文件签名证书信息。 |

## 帮助命令（help）

```
# Java版本命令实例：
java -jar binary-sign-tool.jar -help

# C++版本命令实例：
binary-sign-tool -help
```

## 签名命令（sign）

<strong>命令参数列表</strong>

| 参数 | 参数说明 |
| --- | --- |
| -keyAlias | 密钥别名，必填项，不区分大小写。 |
| -keyPwd | 密钥口令，可选项。 |
| -appCertFile | 签名证书文件（证书链，顺序为实体证书-中间CA证书-根证书），必填项。 |
| -profileFile | 签名后的Provision Profile文件名，p7b格式，可选项。 |
| -profileSigned | 指示profile文件是否带有签名，1表示有签名，0表示没有签名，默认为1。可选项。 |
| -signAlg | 签名算法，必填项，包括SHA256withECDSA或SHA384withECDSA。 |
| -keystoreFile | 密钥库文件，非自签名模式时为必填项。 |
| -keystorePwd | 密钥库口令，可选项。 |
| -inFile | 输入的原始elf文件，必填项。 |
| -outFile | 输出签名后文件，必填项。 |
| -moduleFile | 权限module.json文件，可选项。 |
| -selfSign | 是否本机自签名模式，1表示自签名，0表示证书签名，默认为0，可选项。 |

<strong>示例</strong>：

```
# 1. 使用证书对二进制文件签名
# Java版本命令实例：
java -jar binary-sign-tool.jar sign -keyAlias "oh-app1-key-v1" -signAlg "SHA256withECDSA" -appCertFile "app1.pem" -profileFile "app1-profile.p7b" -profileSigned "1" -inFile "unsigned-elf" -keystoreFile "ohtest.p12" -outFile "signed-elf" -keyPwd "123456" -keystorePwd "123456" -moduleFile "module.json"

# C++版本命令实例：
binary-sign-tool sign -keyAlias "oh-app1-key-v1" -signAlg "SHA256withECDSA" -appCertFile "app1.pem" -profileFile "app1-profile.p7b" -profileSigned "1" -inFile "unsigned-elf" -keystoreFile "ohtest.p12" -outFile "signed-elf" -keyPwd "123456" -keystorePwd "123456" -moduleFile "module.json"

# 2. 自签名模式对二进制文件签名
# Java版本命令实例：
java -jar binary-sign-tool.jar sign -inFile "unsigned-elf" -outFile "signed-elf" -selfSign "1"

# C++版本命令实例：
binary-sign-tool sign -inFile "unsigned-elf" -outFile "signed-elf" -selfSign "1"

# 执行结果
write code sign data success.
```

## 打印签名证书信息命令（display-sign）

<strong>命令参数列表</strong>

| 参数 | 参数说明 |
| --- | --- |
| -inFile | 输入的elf文件，必填项。 |

<strong>示例</strong>：

```
# Java版本命令实例：
java -jar binary-sign-tool.jar display-sign -inFile "signed-elf"

# C++版本命令实例：
binary-sign-tool display-sign -inFile "signed-elf"

# 执行结果
# 权限信息输出
# 1. 无权限信息
permission is not found
# 2. 输出权限信息
# 签名信息输出
# 1. 无代码签名
code signature is not found
# 2. 自签名模式
code signature is self-sign
# 3. 输出签名证书
```

## 错误信息

### FILE\_NOT\_FOUND

<strong>错误描述</strong>

执行命令，报错提示：ERROR - FILE\_NOT\_FOUND, code: -102. Details: The 'HarmonyOS.p12' file does not exist or the path is invalid, parameter name '-keystoreFile'

<strong>可能原因</strong>

输入文件不存在或路径不正确。

<strong>处理步骤</strong>

检查输入文件路径或文件名是否正确。

### COMMAND\_PARAM\_ERROR

<strong>错误描述</strong>

执行命令，报错提示：ERROR - COMMAND\_PARAM\_ERROR, code: -107. Details: 'generate-cert' Parameters error, Param key - value must in pairs

<strong>可能原因</strong>

1. 粘贴命令时，多粘贴了一段内容，导致出现COMMAND\_PARAM\_ERROR错误。
2. 填写命令时，如果最后一个参数的value值未填写，将导致COMMAND\_PARAM\_ERROR错误。

<strong>处理步骤</strong>

检查并修正命令中的多余或错误部分。

### KEY\_PASSWORD\_ERROR

<strong>错误描述</strong>

执行命令，报错提示：ERROR - KEY\_PASSWORD\_ERROR, code: -114. Details: 'oh-app1-key-v1' keypair password error

<strong>可能原因</strong>

当密钥对密码错误时，会导致KEY\_PASSWORD\_ERROR错误。

<strong>处理步骤</strong>

检查命令中的密码参数是否正确。确保访问不同密钥库时，填写各自的密钥对密码。

### NOT\_SUPPORT\_ERROR

<strong>错误描述</strong>

执行命令，报错提示：ERROR - NOT\_SUPPORT\_ERROR, code: -104. Details: Not support file: ./HarmonyOS.p12

<strong>可能原因</strong>

填写错误的密钥库文件类型会导致NOT\_SUPPORT\_ERROR错误。

<strong>处理步骤</strong>

确保密钥库文件的后缀为 .p12。

### KEY\_ALIAS\_ERROR

<strong>错误描述</strong>

执行命令，报错提示：ERROR - KEY\_ALIAS\_ERROR, code: -109. Details: 'XXX' key alias already exists and cannot be generated repeatedly

<strong>可能原因</strong>

密钥库中已存在该别名的密钥对，将导致KEY\_ALIAS\_ERROR错误。

<strong>处理步骤</strong>

替换需要生成密钥对的别名为其他名称。

### SIGN\_ERROR

<strong>错误描述</strong>

执行命令后，报错提示：ERROR - SIGN\_ERROR, code: -105. Details: No certificates configured for sign

<strong>可能原因</strong>

签名密钥与实体证书不匹配。

<strong>处理步骤</strong>

1. 检查keyAlias密钥是否使用正确。
2. 检查appCertFile是否使用正确，确保密钥与证书匹配。