---
format: md
title: "如何控制编译过程的cpu使用"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-60
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-60
last_sync: 2026-06-07
sync_hash: 130e4c4e
---
在模块级 build-profile.json5 的 buildOption.arguments 中添加相关配置，指定 CMake 编译参数。示例如下：

```
{
  "buildOption": {
    "arguments": [
      "-DCMAKE_BUILD_PARALLEL_LEVEL=2",
      "-DCMAKE_LINK_PARALLEL_LEVEL=2"
    ]
  }
}
```

此配置指定编译和链接分别使用 2 个处理器。

```
"buildOption": {
  "externalNativeOptions": {
    "path": "../cpp/CMakeLists.txt",
    "arguments": "-DCMAKE_JOB_POOL_COMPILE:STRING=compile -DCMAKE_JOB_POOL_LINK:STRING=link -DCMAKE_JOB_POOLS:STRING=compile=2;link=2",
    "cppFlags": "",
    "abiFilters": [
      "x86_64",
      "arm64-v8a"
    ]
  }
},
```
