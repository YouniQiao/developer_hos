---
displayed_sidebar: appDevSidebar
title: "是否可以申请长时任务，在游戏前台下载资源包过程中切后台时免冻结并继续下载资源包"
original_url: /docs/dev/app-dev/graphics/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-9
format: md
---


可以。

游戏可以申请[dataTransfer类型的长时任务](/docs/dev/app-dev/application-framework/background-task-kit/continuous-task)，在游戏前台切后台后，游戏可以保持免冻结并继续下载资源包。
