---
title: "VkExternalFormatOHOS"
upstream_id: "harmonyos-references/capi-vulkan-vkexternalformatohos"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:54:06.456998"
---

# VkExternalFormatOHOS

```
typedef struct VkExternalFormatOHOS {...} VkExternalFormatOHOS
```

#### 概述

表示外部定义的格式标识符。

起始版本： 10

相关模块： [Vulkan](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan)

所在头文件： [vulkan_ohos.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-vulkan-ohos-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| VkStructureType sType | 结构体类型，值必须为VK_STRUCTURE_TYPE_EXTERNAL_FORMAT_OHOS。 |
| void* pNext | pNext为空或者下一级结构体指针。 |
| uint64_t externalFormat | 外部定义的格式标识符。 |
