---
displayed_sidebar: appDevSidebar
title: "应用内通话消息在设备重启后的首次锁屏状态问题"
original_url: /docs/dev/app-dev/application-services/push-kit-guide/push-faq/push-faq-6
format: md
upstream_id: dev/app-dev/application-services/push-kit-guide/push-faq/push-faq-6
last_sync: 2026-06-07
sync_hash: eea4d3b8
---
当终端处于设备重启后的首次锁屏状态时，应用子进程可能会因数据区加密而导致访问失败，进而出现业务无法正常执行的情况。请您在开发时适配此种场景，进行相关异常保护。
