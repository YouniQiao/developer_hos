---
title: "VkImportNativeBufferInfoOHOS"
upstream_id: "harmonyos-references/capi-vulkan-vkimportnativebufferinfoohos"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:54:06.332332"
---

# VkImportNativeBufferInfoOHOS

```
typedef struct VkImportNativeBufferInfoOHOS {...} VkImportNativeBufferInfoOHOS
```

#### 概述

包含了OH_NativeBuffer结构体的指针。

起始版本： 10

相关模块： [Vulkan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan)

所在头文件： [vulkan_ohos.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-ohos-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型。 |
| const void* pNext | 下一级结构体指针。 |
| struct [OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-oh-nativebuffer)* buffer | OH_NativeBuffer结构体的指针。 |
