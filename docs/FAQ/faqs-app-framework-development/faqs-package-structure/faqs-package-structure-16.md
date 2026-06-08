---
format: md
title: "是否允许HAR的循环依赖"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-16
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-16
last_sync: 2026-06-07
sync_hash: 3327dfda
---
不允许循环依赖。可以把公共部分放到一个共享包中，或者使用[HAR模块间动态import依赖解耦](/docs/dev/app-dev/application-framework/arkts/arkts-runtime/arkts-runtime-module/arkts-dynamic-import#har模块间动态import依赖解耦)。
