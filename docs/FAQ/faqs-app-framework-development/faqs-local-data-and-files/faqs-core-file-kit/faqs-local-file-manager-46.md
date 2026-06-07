---
format: md
title: "解决冷启动picker选择器无权限问题"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-46
---


在APP冷启动后，由于没有uri的读取权限，可以通过保存草稿操作将对应的文件复制到沙箱路径下，然后在冷启动时获取这些文件。

**参考链接**

[fileIo.copyFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-file-fs#fileiocopyfile)

[应用沙箱目录](/docs/dev/app-dev/application-framework/core-file-kit/app-file/app-sandbox-directory)
