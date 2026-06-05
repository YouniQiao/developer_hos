---
format: md
title: "文件路径fd和internal的区别是什么"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-local-file-manager-23
---


1. fd：//\<资源句柄\> 用于标识媒体文件，适用于播放资源文件。
2. internal：//cache 用于上传下载文件的本地存储路径，是应用的私有目录。
3. file：//用于应用沙箱和媒体库中的文件，后续可通过@ohos.file.fs进行 open、read、write 等操作，实现文件分享。
