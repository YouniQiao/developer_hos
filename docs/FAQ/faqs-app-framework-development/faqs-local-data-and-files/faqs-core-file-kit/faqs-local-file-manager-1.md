---
format: md
title: "如何使用Zip模块解压项目目录rawfile中的文件至应用的沙箱目录中"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-1
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-1
last_sync: 2026-06-07
sync_hash: 95055e87
---
1. 使用getRawFileContent接口获取 rawfile 中的文件内容，以字节数组形式返回。
2. 通过context对象获取应用的沙箱目录。
3. 使用file.write接口将rawfile的字节数组写入沙箱目录。
4. 使用zlib.decompressfile接口解压保存在沙箱目录中的文件。

注意：由于RawFile目录受系统保护，直接使用fileio.copyFile可能导致权限错误，请使用本文描述的字节流方式操作。

**参考链接**

[getRawFileContent接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-resource-manager#getrawfilecontent9)，[获取应用沙箱目录](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#使用说明)，[fileIo.write接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileiowrite)，[zlib.decompressFile接口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-zlib#zlibdecompressfile9)
