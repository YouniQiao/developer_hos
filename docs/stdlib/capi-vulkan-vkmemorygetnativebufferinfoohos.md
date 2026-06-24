---
title: "VkMemoryGetNativeBufferInfoOHOS"
upstream_id: "harmonyos-references/capi-vulkan-vkmemorygetnativebufferinfoohos"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:54:06.444010"
---

# VkMemoryGetNativeBufferInfoOHOS

```
typedef struct VkMemoryGetNativeBufferInfoOHOS {...} VkMemoryGetNativeBufferInfoOHOS
```

#### 概述

用于从Vulkan内存中获取OH_NativeBuffer。

起始版本： 10

相关模块： [Vulkan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan)

所在头文件： [vulkan_ohos.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-ohos-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型，值必须为VK_STRUCTURE_TYPE_MEMORY_GET_NATIVE_BUFFER_INFO_OHOS。 |
| const void* pNext | 下一级结构体指针，值必须为空。 |
| VkDeviceMemory memory | VkDeviceMemory对象，值必须为一个有效的VkDeviceMemory对象。 |
