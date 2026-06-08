---
format: md
title: "打包体积大如何配置优化包体积问题"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-100
upstream_id: FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-100
last_sync: 2026-06-07
sync_hash: 4a95683f
---
**问题描述**

程序包当前打包后的体积为16MB，远超预期。

**解决措施**

1.首先查看打包的类型，debug编译打包含有调试信息相对于release包的体积较大。可以通过配置"strip": true来去除so中的debug信息减小so体积。该配置需要配置在hap和hsp模块，release和debug模式下都可以[配置CPP](/docs/tools/coding-debug/ide-hvigor-cpp) :

```
"nativeLib": {
  "debugSymbol": {
    // This configuration can be used to execute strip on the cpp compiled product so, removing debugging information and symbol tables from so
    "strip": true,
    // Execute strip
    "exclude": []
    //Execute strip filtering regular expression rules
  }
},
```

2. DevEco Studio默认在打包应用时不压缩so库文件。配置so压缩选项后，DevEco Studio会以压缩形式打包so库文件，从而减小应用包的大小。在应用模块配置文件module.json5中，将compressNativeLibs字段的值设置为true，然后重新编译和打包应用。

```
{
  "module": {
    // ...
    "compressNativeLibs": true // Package libs library in compressed storage format
  }
}
```
