---
displayed_sidebar: appDevSidebar
title: "集成游戏资源加速ExtensionAbility方法，未配置游戏资源加速ExtensionAbility组件类型信息，导致功能未生效"
original_url: /docs/dev/app-dev/graphics/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-2
format: md
upstream_id: dev/app-dev/graphics/graphics-accelerate-kit-guide/graphics-accelerate-faq/graphics-accelerate-assetdownload-faq/graphics-accelerate-assetdownload-faq-2
last_sync: 2026-06-07
sync_hash: cf626778
upstream_hash: b710143fe24b
---

未配置游戏资源加速ExtensionAbility组件类型信息将出现如下异常日志：

```
bundle[xxx] do not have Asset Acceleration Extension Ability.
```

请开发者在“src/main/module.json5”的extensionAbilities层级中添加资源加速ExtensionAbility信息。

```
"extensionAbilities": [
  {
    "name": "AssetAccelExtAbility", // 游戏资源加速ExtensionAbility组件的名称。
    "srcEntry": "./ets/extensionability/AssetAccelExtAbility.ets", // 游戏资源加速ExtensionAbility组件所对应的代码路径。
    "type": "assetAcceleration"
  }
]
```
