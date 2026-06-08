---
format: md
title: "多个UIAbility是运行在一个进程还是多个进程中？三方应用是否支持应用运行在多个进程下？主进程结束了，会影响子进程的运行吗"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-34
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-34
last_sync: 2026-06-07
sync_hash: 4417c5ef
upstream_hash: 76e2d93dda27
---

**PC/2in1设备**

* 不同模块的UIAbility运行在不同的进程中。
* 多个进程相互独立，其他进程的退出不会影响当前进程。

**其他设备**

* 多个UIAbility运行在同一个进程中。
* 三方应用的UIAbility不支持多进程运行，而Extension则运行在独立的进程中。
* 手机设备上的UIAbility均运行在单个进程中，不包含子进程。

**参考链接**

[进程模型](/docs/dev/app-dev/application-framework/ability-kit/stage-model-development/process-model-stage)
