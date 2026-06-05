---
format: md
title: "如何实现应用的屏幕自动旋转"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-arkui-374
---


1. 在module.json5添加属性"orientation": "auto\_rotation"。

   如下所示：

   ```
   "abilities": [
     {
       "name": "EntryAbility",
       "srcEntry": "./ets/entryability/EntryAbility.ets",
       "description": "$string:EntryAbility_desc",
       "icon": "$media:icon",
       "label": "$string:EntryAbility_label",
       "startWindowIcon": "$media:startIcon",
       "startWindowBackground": "$color:start_window_background",
       "exported": true,
       "skills": [
         // ...
       ],
       "orientation": "auto_rotation", // Rotate with the sensor
     }
   ],
   ```
2. 打开手机自动旋转功能，操作步骤：进入手机控制中心 > 关闭旋转锁定。

**参考链接**

[abilities标签](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/module-configuration-file#abilities标签)
