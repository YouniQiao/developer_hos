---
displayed_sidebar: appDevSidebar
title: "开发准备"
original_url: /docs/dev/app-dev/graphics/graphics-accelerate-assetdownload-prepare
format: md
upstream_id: dev/app-dev/graphics/graphics-accelerate-assetdownload-prepare
last_sync: 2026-06-07
sync_hash: b7e6ad14
---
请先参考[应用开发准备](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-overview)完成基本准备工作，再继续以下开发准备项。

## 配置网络权限

在“src/main/module.json5”的requestPermissions层级中添加网络权限。

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
