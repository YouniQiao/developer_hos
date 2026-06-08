---
format: md
title: "如何实现在不使用UIAbility的情况下，能够模块化管理代码，并且各个模块之间可以相互路由跳转"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-27
upstream_id: FAQ/faqs-app-framework-development/faqs-package-structure/faqs-package-structure-27
last_sync: 2026-06-07
sync_hash: 5c11396d
---
采用HSP进行模块管理，可以实现页面间的跳转。无需导入包即可完成跳转，具体方式如下：

方式一：所有跳转到HSP内的页面需要使用特定格式：@bundle:包名（bundleName）/模块名（moduleName）/路径/页面所在的文件名（不加.ets后缀）。

方式二：正常entry内模块路由跳转：pages/页面所在的文件名（不加 .ets后缀）。

* 跳转到HSP页面使用方式一。
* HSP跳转到entry页面使用方式二。
* HSP跳转至HSP页面使用方式一。

**参考链接**

[HSP](/docs/dev/app-dev/getting-started/dev-fundamentals/in-app-hsp)
