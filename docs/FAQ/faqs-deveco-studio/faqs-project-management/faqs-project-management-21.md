---
format: md
title: "工程中存在多处-Wunused-command-line-argument告警，影响查看有效日志"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-project-management/faqs-project-management-21
upstream_id: FAQ/faqs-deveco-studio/faqs-project-management/faqs-project-management-21
last_sync: 2026-06-07
sync_hash: 1bde5c81
---
**问题描述**

```
clang: warning: argument unused during compilation: ‘–gcc-toolchain=C:/Users/username/AppData/Local/Huawei/Sdk/openharmony/9/native/llvm’ [-Wunused-command-line-argument]；
```

在API 9版本的clang编译器中，编译每个文件时都会出现warning。当前可以通过添加-Wno-unused-command-line-argument选项来屏蔽这些警告，但工程较多时，是否有一种方法可以全局屏蔽此警告？

**解决方案**

根据 clang 提示，这个告警是由-Werror和-Wunused-command-line-argument告警选项触发的。可能是代码中存在不支持的变量语法。可以通过配置-Wno-unused-command-line-argument关闭该检查项，或者将 SDK 升级到 API 11。
