---
format: md
title: "项目工程中怎样配置Native的版本"
original_url: /docs/FAQ/faqs-deveco-studio/faqs-compiling-and-building/faqs-compiling-and-building-55
---


在工程级build-profile.json5的app.products中如下进行配置：

```
"products": [
  {
    "name": "default",
    "signingConfig": "default",
    "compatibleSdkVersion": "5.0.5(17)",
    "targetSdkVersion": "5.0.5(17)",
    "runtimeOS": "HarmonyOS",
  }
],
```
