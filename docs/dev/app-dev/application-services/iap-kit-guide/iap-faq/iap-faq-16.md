---
displayed_sidebar: appDevSidebar
title: "在沙盒环境进行测试，但是实际需要真实支付是为什么？"
original_url: /docs/dev/app-dev/application-services/iap-kit-guide/iap-faq/iap-faq-16
format: md
upstream_id: dev/app-dev/application-services/iap-kit-guide/iap-faq/iap-faq-16
last_sync: 2026-06-07
sync_hash: 54bc4dbc
---
有可能是debug包切换为release包之后，手机进程缓存没有失效导致。切换debug包和release包后，要保证进程缓存失效，比如锁屏5分钟或者重启。
