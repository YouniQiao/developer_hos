---
format: md
title: "在HAP中调用createModuleContext方法获取的Context是什么层级"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-25
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-25
last_sync: 2026-06-07
sync_hash: 3ef27c4f
---
1. createModuleContext获取的是基类Context，主要用于根据不同的模块名获取相应的Context，这些Context分别指向不同的HSP。
2. HSP是一个动态共享包，包含静态资源，但本身没有上下文概念。因此，需要通过创建Context来获取资源或Module的信息。
3. createModuleContext获取的是模块级的Context，不是ApplicationContext。

**参考链接**

[应用上下文Context](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/application-context-stage)
