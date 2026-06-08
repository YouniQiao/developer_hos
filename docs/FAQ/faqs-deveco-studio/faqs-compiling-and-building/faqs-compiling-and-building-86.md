---
format: md
title: "编译打包CPU架构设置"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-86
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-86
last_sync: 2026-06-07
sync_hash: f30648c7
---
**问题描述**

在编译打包时，若需移除v7a，可以参考以下配置文档。

**解决方案**

可参考 [bm工具](/docs/dev/app-dev/system/bm-tool)

```
"externalNativeOptions": {
  "path": "./src/main/cpp/CMakeLists.txt",
  //CMake configuration file, providing CMake build scripts
  "arguments": "",
  //Optional compilation parameters passed to CMake
  "abiFilters": [
    "x86_64",
    "arm64-v8a"
  ],
  //Used to set up the local ABI compilation environment
  "cppFlags": ""
  //Set optional parameters for the C++ compiler
},
```
