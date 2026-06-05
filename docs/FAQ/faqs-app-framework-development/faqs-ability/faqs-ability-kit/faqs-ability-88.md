---
format: md
title: "app.json5文件与工程级build-profile.json5文件的区别"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-ability-88
---

使用场景和优先级存在差异。

* app.json5 文件用于定义应用的全局配置信息，包括 Bundle 名称、开发厂商和版本号等。如果在应用中使用 app.json5 文件进行全局配置，这些配置会被 build-profile.json5 文件中相同包名的配置覆盖。
* 工程级 build-profile.json5 文件主要用于定义构建和部署相关的配置，包括应用的包名、版本号等元数据。如果 app.json5 文件中定义了与 build-profile.json5 文件中相同的包名配置项，那么 build-profile.json5 文件中的配置项会覆盖 app.json5 文件中的配置项。

建议以工程级 build-profile.json5 文件中的配置为主。在构建和部署过程中，系统会优先使用工程级 build-profile.json5 文件中的配置信息。

**参考链接**

[app.json5配置文件标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-configuration-file#配置文件标签)
