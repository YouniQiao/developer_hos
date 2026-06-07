---
format: md
title: "软件包格式异常"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-signature-service/faqs-signature-service-15
---


**问题现象**

1. 打包签名提示“**find zip central directory failed**”错误。
2. 打包签名提示“**ERROR - hap-sign-tool: error: cd end offset not equals to eocd offset,maybe this is a zip64 file**”错误。

**可能原因**

待签名的HAP/APP包不是zip格式，当前SDK的签名工具只支持zip格式HAP/APP包签名。

**常见错误场景**

HAP包文件大小超过4G或HAP包内条目数（包括文件和目录）超过65535，超出了zip格式上限，打包成了zip64格式。

**解决措施**

减少HAP包大小，减少HAP包的文件和目录数目。
