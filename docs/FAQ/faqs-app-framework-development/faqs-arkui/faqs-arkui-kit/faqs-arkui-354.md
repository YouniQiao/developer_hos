---
format: md
title: "如何在系统深色模式下使用getColorSync(resource)返回深色颜色值"
original_url: /docs/FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-354
upstream_id: FAQ/faqs-app-framework-development/faqs-arkui/faqs-arkui-kit/faqs-arkui-354
last_sync: 2026-06-07
sync_hash: 83257618
---
目前有两种方案可供参考：

1. 传递资源ID。

   ```
   this.getUIContext().getHostContext()?.resourceManager.getColorSync($r('app.color.xxx').id);
   ```
2. 在配置了dark限定词目录的包的module.json5文件中添加配置。

   ```
   "metadata": [
     {
       "name": "ContextResourceConfigLoadFromParentTemp",
       "value": "true"
     }
   ],
   ```
