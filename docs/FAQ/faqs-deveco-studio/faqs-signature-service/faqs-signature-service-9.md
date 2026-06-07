---
format: md
title: "签名后生成的material目录是干什么用的"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-signature-service/faqs-signature-service-9
---


**问题描述**

通过DevEco Studio上的Generate key and csr工具生成p12和csr文件时，会同时生成一个material文件夹。这个material文件夹用于存储签名应用所需的辅助文件。在签名应用时，这些文件可能需要被引用，因此建议保留该文件夹以确保签名过程顺利进行。

**解决措施**

material是DevEco Studio生成的文件，用于加密用户的密码。cer和p12是签名工具所需的签名材料。material和签名材料之间不是一一对应的关系。
