---
format: md
title: "fileIo.open读取应用沙盒路径失败"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-local-data-and-files/faqs-core-file-kit/faqs-local-file-manager-29
---


**问题现象**

获取到demo中的歌曲path，将其转换为uri发送给另一个app。通过context获取应用文件的应用沙箱路径后，将其传入fileIo.open时发现报错。

**解决措施**

进行文件共享时， 获取当前应用的uid/gid，使用fileIo.chown修改文件属主，将uid和gid更改为应用的。
