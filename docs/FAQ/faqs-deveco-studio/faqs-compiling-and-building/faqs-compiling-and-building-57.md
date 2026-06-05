---
format: md
title: "怎样在编译配置中设置excludes文件"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-compiling-and-building-57
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
