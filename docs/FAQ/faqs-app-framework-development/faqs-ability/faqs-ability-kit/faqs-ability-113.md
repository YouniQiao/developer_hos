---
format: md
title: "HarmonyOS提供了两种页面加载方式，两者有何区别，怎么选择"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-113
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-113
last_sync: 2026-06-07
sync_hash: 12611f7d
---
**问题描述**

HarmonyOS提供了两种页面加载方式，一种是一个UIAbility绑定多个页面，页面之间可以实现跳转；另一种是一个 UIAbility 绑定一个页面，通过跳转 UIAbility 实现页面加载。请问这两种方式有什么区别？一般怎么做选择？

**解决方案**

区别：

一个UIAbility绑定多个page页面：资源占用较少，切换速度快，Page之间的跳转轻量，适用于频繁切换的场景。

一个UIAbility绑定一个page页面：资源占用较高，切换速度较慢，适用于需要独立生命周期管理的复杂业务逻辑。

选择建议

1. 功能模块化且频繁切换：
   * 选择一个UIAbility绑定多个Page页面。
   * 适用于导航栏切换、Tab页切换等场景。
2. 独立功能且生命周期管理复杂：
   * 选择一个UIAbility绑定一个Page页面。
   * 适用于独立功能模块和复杂业务逻辑等场景。
