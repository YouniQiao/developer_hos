---
title: "MediaKeySystem"
upstream_id: "harmonyos-references/capi-drm-mediakeysystem"
catalog: "harmonyos-references"
content_hash: "6b5c16b83b3e"
synced_at: "2026-08-29T18:17:34.000031"
---

# MediaKeySystem

```
typedef struct MediaKeySystem MediaKeySystem
```

#### 概述

MediaKeySystem结构，用于表示一个媒体密钥系统实例。MediaKeySystem提供数字版权保护能力，负责DRM插件配置管理、设备证书管理、统计信息获取、内容保护级别查询以及创建MediaKeySession等功能。通过OH_MediaKeySystem_Create接口创建实例，通过OH_MediaKeySystem_Destroy接口销毁实例。

起始版本： 11

相关模块： [Drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm)

所在头文件： [native_drm_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h)
