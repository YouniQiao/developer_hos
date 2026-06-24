---
title: "VkNativeBufferPropertiesOHOS"
upstream_id: "harmonyos-references/capi-vulkan-vknativebufferpropertiesohos"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:54:06.234919"
---

# VkNativeBufferPropertiesOHOS

```
typedef struct VkNativeBufferPropertiesOHOS {...} VkNativeBufferPropertiesOHOS
```

#### 概述

包含了NativeBuffer的属性。

起始版本： 10

相关模块： [Vulkan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan)

所在头文件： [vulkan_ohos.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-ohos-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型。 |
| void* pNext | 下一级结构体指针。 |
| VkDeviceSize allocationSize | 占用的内存大小。 |
| uint32_t memoryTypeBits | 内存类型。 |
