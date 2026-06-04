---
displayed_sidebar: appDevSidebar
title: "集成了游戏资源加速ExtensionAbility方法，未配置网络权限，导致功能未生效"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/graphics-accelerate-assetdownload-faq-3
---

未配置网络权限将出现如下异常日志：

```
ohos.permission.INTERNET check failed
```

请开发者在“src/main/module.json5”的requestPermissions层级中添加网络权限。

```
{
  "module": {
    // ...
    "requestPermissions": [
      {
        "name": "ohos.permission.INTERNET"
      }
    ]
  }
}
```
