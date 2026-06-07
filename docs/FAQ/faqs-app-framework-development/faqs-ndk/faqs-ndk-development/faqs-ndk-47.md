---
format: md
title: "Native侧如何打印char指针"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ndk/faqs-ndk-development/faqs-ndk-47
---


引入hilog库后直接打印。打印时需要加\{public\}。

OH\_LOG\_INFO(LOG\_APP, “%\{public\}s”,path); //可正常打印

OH\_LOG\_INFO(LOG\_APP, “%s”,path); //不可正常打印

示例代码如下：

```
char *path = "abc";
OH_LOG_INFO(LOG_APP, "path: %{public}s", path);
```
