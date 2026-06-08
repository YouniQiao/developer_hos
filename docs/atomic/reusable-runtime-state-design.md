---
title: "方案设计"
original_url: /docs/dev/atomic-dev/reusable-runtime-state/reusable-runtime-state-design
format: md
upstream_id: dev/atomic-dev/reusable-runtime-state/reusable-runtime-state-design
last_sync: 2026-06-07
sync_hash: b4d906dd
---
运行态可分可合开发，不需要将元服务相同的功能代码复用到应用中，所以建议应用和元服务可以创建不同的工程进行开发。应用/元服务需要通过系统提供的嵌入式运行元服务的能力，实现将元服务的页面嵌入到应用/元服务中运行，完成对元服务的功能复用。

![](./img/6e38043c.png "点击放大")
