---
format: md
title: "点击服务卡片如何跳转至指定的页面"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-form-kit/faqs-form-1
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-form-kit/faqs-form-1
last_sync: 2026-06-07
sync_hash: e2335b44
---
配置卡片事件，指定目标UIAbility进行跳转。

* 如果应用不在后台，可以在目标UIAbility的onWindowStageCreate()中调用loadContent加载指定的页面。
* 如果应用已在后台，可在目标UIAbility的onNewWant()中调用loadContent加载指定页面。

**参考链接**

[启动UIAbility的指定页面](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/stage-model-application-components/uiability/uiability-intra-device-interaction#启动uiability的指定页面)
