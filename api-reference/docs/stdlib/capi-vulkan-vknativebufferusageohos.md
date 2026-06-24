---
title: "VkNativeBufferUsageOHOS"
upstream_id: "harmonyos-references/capi-vulkan-vknativebufferusageohos"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:54:06.225049"
---

# VkNativeBufferUsageOHOS

```
typedef struct VkNativeBufferUsageOHOS {...} VkNativeBufferUsageOHOS
```

#### 概述

提供HarmonyOS NativeBuffer用途的说明。

起始版本： 10

相关模块： [Vulkan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan)

所在头文件： [vulkan_ohos.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-ohos-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型，值必须为VK_STRUCTURE_TYPE_NATIVE_BUFFER_USAGE_OHOS。 |
| void* pNext | 下一级结构体指针。 |
| uint64_t OHOSNativeBufferUsage | NativeBuffer的用途说明。 |
