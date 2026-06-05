---
format: md
title: "如何将像素点保存到图片文件"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-file-manager-7
---


**问题现象**

将像素点信息保存成图片文件的方法如下：先将像素点信息转换为imageSource，再将imageSource保存为图片文件。

**解决措施**

1. 将imageSource通过packToData方法转换为JPEG图片格式。
2. 使用文件管理模块将数据保存到沙箱。

**参考链接**

[图片处理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-image)，[文件管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs)
