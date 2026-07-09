---
title: "VkNativeBufferOHOS"
upstream_id: "harmonyos-references/capi-vulkan-vknativebufferohos"
catalog: "harmonyos-references"
content_hash: "ad3df75756bc"
synced_at: "2026-07-09T01:01:49.383282"
---

# VkNativeBufferOHOS

```
typedef struct VkNativeBufferOHOS {...} VkNativeBufferOHOS
```

#### 概述

包含本地显存的参数。

起始版本： 10

相关模块： [Vulkan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan)

所在头文件： [vulkan_ohos.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-ohos-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型。 |
| const void* pNext | 下一级结构体指针，pNext为空或者下一级结构体指针。 |
| struct [OHBufferHandle*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-ohbufferhandle) handle | 显存句柄。 |
