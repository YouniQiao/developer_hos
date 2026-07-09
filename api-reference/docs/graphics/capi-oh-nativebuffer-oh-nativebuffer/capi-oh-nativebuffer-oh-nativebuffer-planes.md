---
title: "OH_NativeBuffer_Planes"
upstream_id: "harmonyos-references/capi-oh-nativebuffer-oh-nativebuffer-planes"
catalog: "harmonyos-references"
content_hash: "79269d616482"
synced_at: "2026-07-09T01:01:00.031677"
---

# OH_NativeBuffer_Planes

```
typedef struct OH_NativeBuffer_Planes {...} OH_NativeBuffer_Planes
```

#### 概述

OH_NativeBuffer的图像平面格式信息。

起始版本： 12

相关模块： [OH_NativeBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer)

所在头文件： [native_buffer.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-buffer-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t planeCount | 不同平面的数量。 |
| [OH_NativeBuffer_Plane](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-nativebuffer-oh-nativebuffer-plane) planes[4] | 图像平面格式信息数组。 |
