---
format: md
title: "如何禁用窗口的全屏显示功能"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-69
upstream_id: FAQ/faqs-app-framework-development/faqs-ability/faqs-ability-kit/faqs-ability-69
last_sync: 2026-06-07
sync_hash: 1248ed95
---
在module.json5文件中配置abilities的supportWindowMode字段，用于指定窗口显示模式。

fullscreen表示支持全屏显示，split表示支持分屏显示，floating表示支持窗口化显示。

参考代码如下：

```
"abilities": [
  {
    "name": "EntryAbility",
    "srcEntry": "./ets/entryability/EntryAbility.ets",
    "description": "$string:EntryAbility_desc",
    "icon": "$media:icon",
    "label": "$string:EntryAbility_label",
    "startWindowIcon": "$media:icon",
    "startWindowBackground": "$color:start_window_background",
    "exported": true,
    "supportWindowMode": ["split", "floating"],
    "skills": [
      {
        "entities": [
          "entity.system.home"
        ],
        "actions": [
          "ohos.want.action.home"
        ]
      }
    ]
  }
],
```

**参考链接**

[abilities标签](/docs/dev/app-dev/getting-started/dev-fundamentals/module-configuration-file#abilities标签)
