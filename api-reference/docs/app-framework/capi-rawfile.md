---
title: "rawfile"
upstream_id: "harmonyos-references/capi-rawfile"
catalog: "harmonyos-references"
content_hash: "27b4498f3815"
synced_at: "2026-08-29T18:16:16.245348"
---

# rawfile

#### 概述

通过rawfile模块，开发者可以在Native层访问rawfile目录或目录下的资源文件，包括遍历、打开、读取、定位和关闭等。

遍历目录：打开rawfile目录，获取目录下的文件列表，遍历文件名称，支持多级目录遍历。

读取文件：打开rawfile文件，读取文件内容，定位文件读写位置，获取文件大小和当前偏移量，获取文件描述符，支持2GB以上的大文件。

起始版本： 8

#### 文件汇总

| 名称 | 描述 |
| --- | --- |
| [raw_file_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-manager-h) | 通过本模块可以创建、释放NativeResourceManager对象，以及打开rawfile文件和目录。 |
| [raw_dir.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-dir-h) | 提供rawfile目录操作相关的函数，包括遍历目录、获取文件数量、获取文件名称、关闭目录等功能。 |
| [raw_file.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-raw-file-h) | 提供操作rawfile文件的能力，包括读取文件、获取文件长度、获取偏移位置、调整偏移位置、获取文件描述符，以及关闭文件描述符等。 |
