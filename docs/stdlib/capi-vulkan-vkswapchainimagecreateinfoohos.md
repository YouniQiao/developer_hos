---
title: "VkSwapchainImageCreateInfoOHOS"
upstream_id: "harmonyos-references/capi-vulkan-vkswapchainimagecreateinfoohos"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:54:06.050449"
---

# VkSwapchainImageCreateInfoOHOS

```
typedef struct VkSwapchainImageCreateInfoOHOS {...} VkSwapchainImageCreateInfoOHOS
```

#### 概述

包含创建Image时必要的参数。

起始版本： 10

废弃版本： 23

相关模块： [Vulkan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan)

所在头文件： [vulkan_ohos.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-ohos-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型。 |
| const void* pNext | 下一级结构体指针，pNext为空或者下一级结构体指针。 |
| VkSwapchainImageUsageFlagsOHOS usage | 交换链图像的使用标志。 |
