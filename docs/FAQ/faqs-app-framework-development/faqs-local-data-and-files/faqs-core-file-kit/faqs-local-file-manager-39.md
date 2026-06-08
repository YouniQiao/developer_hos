---
format: md
title: "fileIo.write返回的长度和本身content长度不一致"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-39
upstream_id: FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-39
last_sync: 2026-06-07
sync_hash: 1a71244b
---
fileIo.write返回的是实际写入的数据长度，单位字节。String.length返回的是字符串的长度，两者返回的单位不一样，所以在比较长度时也是不一致的。String.length返回UTF-16编码单元数，当字符串包含非ASCII字符时，其字节长度可能大于该值（如中文通常占3字节）。

参考文档：[fileIo.write](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#write)
