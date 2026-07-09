---
title: "Rcp_CertificateAuthority"
upstream_id: "harmonyos-references/_rcp___certificate_authority"
catalog: "harmonyos-references"
content_hash: "ec7240ed9e11"
synced_at: "2026-07-09T00:59:33.298917"
---

# Rcp_CertificateAuthority

#### 概述

用于验证远程服务器标识的证书颁发机构（CA）。

起始版本： 5.0.0(12)

相关模块： [RemoteCommunication](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/remote-communication-overview)

所在头文件： [rcp.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/rcp_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char * [content](#content) | 用于验证对等的证书颁发机构证书捆绑包。应采用PEM格式。 |
| char * [filePath](#filepath) | 用于验证对等方的证书颁发机构证书文件的路径。文件应为PEM格式。 |
| char * [folderPath](#folderpath) | 包含用于验证对等项的多个CA证书的目录的路径。 此目录中的文件应为PEM格式。 文件必须以主题名称的哈希和扩展名“.0”命名。 |

#### 结构体成员变量说明

#### [h2]content

```
char* Rcp_CertificateAuthority::content
```
 描述

用于验证对等的证书颁发机构证书捆绑包。它应采用PEM格式。

#### [h2]filePath

```
char* Rcp_CertificateAuthority::filePath
```
 描述

用于验证对等方的证书颁发机构证书文件的路径。文件应为PEM格式。

#### [h2]folderPath

```
char* Rcp_CertificateAuthority::folderPath
```
 描述

包含用于验证对等项的多个CA证书的目录的路径。 此目录中的文件应为PEM格式。

文件必须以主题名称的哈希和扩展名“.0”命名。
