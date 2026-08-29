---
title: "fileShare"
upstream_id: "harmonyos-references/capi-fileshare"
catalog: "harmonyos-references"
content_hash: "8166f0d5e933"
synced_at: "2026-08-29T18:16:08.633222"
---

# fileShare

#### 概述

此模块提供文件分享功能，支持将公共目录文件的统一资源标识符（URI）授权给其他应用程序，使其他应用可按授权访问对应文件或目录。该模块适用于跨应用文件共享场景，通过URI授权机制管理文件访问权限。

起始版本： 12

#### 文件汇总

| 名称 | 描述 |
| --- | --- |
| [oh_file_share.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-file-share-h) | 提供基于URI的文件及目录持久化授权、取消持久化授权、权限激活、权限查询等方法，适用于跨应用文件共享场景。持久化授权用于保存访问策略，权限激活用于使已持久化的权限生效。 |
