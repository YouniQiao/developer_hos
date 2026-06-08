---
displayed_sidebar: appDevSidebar
title: "游戏资源加速ExtensionAbility方法中使用static静态变量为什么不生效"
original_url: /docs/dev/app-dev/graphics/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-4
format: md
upstream_id: dev/app-dev/graphics/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-4
last_sync: 2026-06-07
sync_hash: 68ceb176
---
资源加速ExtensionAbility的进程可能会切换，避免在ExtensionAbility方法使用应用自身的上下文变量，例如类成员变量、全局static静态变量。

若想在资源加速ExtensionAbility方法中共享变量，应使用[数据持久化技术](/docs/dev/app-dev/application-framework/arkdata/app-data-persistence/app-data-persistence-overview)，在不同方法中共享变量。
