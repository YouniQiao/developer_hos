---
format: md
title: "如何获取文件的扩展名"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-40
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-40
last_sync: 2026-06-07
sync_hash: 82c13d6b
---
可以使用[fileIo.listFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileiolistfile)接口获取文件夹目录下的文件列表，该接口的返回值为文件名称数组，通过获取到的文件名进行字符串的处理来获取文件的扩展名。例如，可通过字符串的lastIndexOf()方法定位最后一个点号位置，再用substring()截取扩展名部分。
