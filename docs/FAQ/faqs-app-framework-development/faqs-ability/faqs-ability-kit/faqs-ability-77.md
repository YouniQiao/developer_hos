---
format: md
title: "应用、元服务和卡片是什么关系"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-77
---


元服务是一种应用，没有图标，支持免安装启动。

应用和元服务不能共享包名，必须分别打包；元服务和应用之间是独立的，也不能共享 entry 模块。

应用和元服务都可以拥有卡片。

元服务的卡片在手机上表现为桌面卡片。长按桌面上已添加的任意卡片，如图库、备忘录，在弹出的菜单中选择“卡片中心”，进入卡片中心页面，可以找到卡片并添加到桌面。
