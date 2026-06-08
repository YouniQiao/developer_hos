---
format: md
title: "怎样在编译配置中设置excludes文件"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-57
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-57
last_sync: 2026-06-07
sync_hash: 63ceab53
---
在模块级build-profile.json5中如下进行配置：

```
"nativeLib": {
  "debugSymbol": {
    "strip": true,
    "exclude": [
      "**/3.so"
    ]
  }
},
```
