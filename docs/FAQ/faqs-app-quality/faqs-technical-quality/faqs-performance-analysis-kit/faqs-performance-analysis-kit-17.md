---
format: md
title: "如何用hdc命令将本地文件发送至远端设备"
original_url: /docs/FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-17
upstream_id: FAQ/faqs-app-quality/faqs-technical-quality/faqs-performance-analysis-kit/faqs-performance-analysis-kit-17
last_sync: 2026-06-07
sync_hash: 1cb0fe37
upstream_hash: fcfd1f415ff2
---

从本地向远端设备发送文件，命令格式如下：

```
hdc file send local remote
```

local 表示本地待发送的文件路径，remote 表示远程待接收的文件路径。

使用方法：

```
hdc file send E:\example.txt /data/local/tmp/example.txt
```

**参考链接**

[hdc-文件相关命令](/docs/dev/app-dev/system/hdc#文件传输)
