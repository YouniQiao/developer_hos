---
format: md
title: "HarmonyOS是否限制App进程fork子进程，是否允许app里自带的可执行文件运行（fork+exec）执行，并通过ptrace方式读取自身进程？这种方式以后是否会限制并禁止"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-112
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-112
last_sync: 2026-06-07
sync_hash: 7e65a51e
---
**解决方案**

系统限制普通应用直接进行Fork进程操作；手机产品不允许普通应用直接创建进程。
