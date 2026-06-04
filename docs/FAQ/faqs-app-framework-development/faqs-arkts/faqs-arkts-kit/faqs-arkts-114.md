---
title: "混淆后的映射文件具体在哪个路径下"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkts-114
---

1. obfuscation.txt：打包后放置混淆规则的 consumer-rules.txt 文件。

   目录：build/default/intermediates/obfuscation/default/obfuscation.txt
2. nameCache.json：记录源码名称混淆映射关系的文件。

   目录：build/default/cache/default@CompileArkTS/esmodule/release/obfuscation/nameCache.json
3. 混淆后的d.ets和js文件。

   目录：build/default/intermediates/loader\_out/default/...
4. sourceMaps.json：关联编译后的代码和源码，通过行列号映射。

   目录：build/default/cache/default@CompileArkTS/esmodule/release/sourceMaps.json

**参考链接：**

[ArkGuard混淆原理及功能](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/source-obfuscation)
