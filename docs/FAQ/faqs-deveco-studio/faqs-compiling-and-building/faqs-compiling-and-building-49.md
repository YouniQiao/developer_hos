---
format: md
title: "如何解决SDK与镜像不匹配导致abc文件无法正常运行的问题"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-49
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-49
last_sync: 2026-06-07
sync_hash: 5715b7ca
---
**问题现象**

当SDK版本与镜像版本不匹配时，应用将会闪退并出现jscrash错误，同时hilog中会记录相关日志。

**解决措施**

现象的根本原因是SDK工具与镜像版本不匹配。建议使用匹配的SDK和镜像版本。

查看SDK版本方法：

在工程目录下的 local.properties 文件中获取 SDK 路径，执行 \{hwsdk.dir\}/openharmony/11/ets/build-tools/ets-loader/bin/ark/build-win/bin/es2abc.exe --bc-version 查看 SDK 版本号，以检验 SDK 与镜像版本是否匹配。
