---
format: md
title: "编译报错“Duplicated files found in module entry. This may cause unexpected errors at runtime”"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-107
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-107
last_sync: 2026-06-07
sync_hash: a5fcf98e
---
**问题现象**

编译构建时，报错“Duplicated files found in module entry. This may cause unexpected errors at runtime”。

![](./img/82a49284.png "点击放大")

**解决措施**

该报错是从不同的包中收集到了相同名称的so包，导致so包冲突，可在模块级build-profile.json5文件中添加enableOverride字段并设置true。更多内容可参考[模块级build-profile.json5文件](/docs/tools/coding-debug/ide-hvigor-build-profile)。

```
"buildOption": {
  "nativeLib": {
    "filter": {
      "enableOverride": true
    }
  }
},
```
