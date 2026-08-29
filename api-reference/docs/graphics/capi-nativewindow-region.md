---
title: "Region"
upstream_id: "harmonyos-references/capi-nativewindow-region"
catalog: "harmonyos-references"
content_hash: "ca1e6e251821"
synced_at: "2026-08-29T18:17:59.017356"
---

# Region

```
typedef struct Region {...} Region
```

#### 概述

表示本地窗口OHNativeWindow需要更新内容的矩形区域（脏区）。

起始版本： 8

相关模块： [NativeWindow](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativewindow)

所在头文件： [external_window.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-external-window-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Rect](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativewindow-rect)* rects | 如果rects是空指针nullptr，默认Buffer大小为脏区。 |
| int32_t rectNumber | 如果rectNumber为0，默认Buffer大小为脏区。 |
