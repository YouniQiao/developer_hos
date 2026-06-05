---
format: md
title: "生成签名时报错删除 .p12 文件目录下的 material 文件夹，重新应用自动签名"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-80
---


**问题描述**

点击生成签名时出现错误：

![](./img/2b8476a2.png)**解决方案：**

可以通过签名界面提供的profile文件（\*.p7b）或Certpath文件（\*.cer）对应的签名文件路径，删除本地的material文件夹，然后重新启动DevEco Studio进行签名。
