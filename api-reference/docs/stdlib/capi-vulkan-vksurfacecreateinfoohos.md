---
title: "VkSurfaceCreateInfoOHOS"
upstream_id: "harmonyos-references/capi-vulkan-vksurfacecreateinfoohos"
catalog: "harmonyos-references"
content_hash: "49cbcfe0de5c"
synced_at: "2026-07-09T01:01:49.285630"
---

# VkSurfaceCreateInfoOHOS

```
typedef struct VkSurfaceCreateInfoOHOS {...} VkSurfaceCreateInfoOHOS
```

#### 概述

包含创建Vulkan Surface时必要的参数。

起始版本： 10

相关模块： [Vulkan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan)

所在头文件： [vulkan_ohos.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-ohos-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型，值必须为VK_STRUCTURE_TYPE_SURFACE_CREATE_INFO_OHOS。 |
| const void* pNext | 下一级结构体指针，值必须为空。 |
| VkSurfaceCreateFlagsOHOS flags | 预留的标志类型参数，值必须为0。 |
| [OHNativeWindow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-nativewindow)* window | OHNativeWindow指针。 |
