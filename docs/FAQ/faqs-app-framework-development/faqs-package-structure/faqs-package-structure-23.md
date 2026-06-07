---
format: md
title: "从HAP的拆包中，如何区分是HAR和HSP"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-23
---


HAP包拆包只能在module.json文件的dependencies字段看到引用的HSP模块名，看不到引用的HAR。HAR在编译时已打包在HAP包里，而HSP是单独成包的。.app文件安装时，HSP与HAP处于同一级别。

**参考链接**

[HAP](/docs/dev/app-dev/getting-started/dev-fundamentals/hap-package)、[HAR](/docs/dev/app-dev/getting-started/dev-fundamentals/har-package)、[HSP](/docs/dev/app-dev/getting-started/dev-fundamentals/in-app-hsp)
