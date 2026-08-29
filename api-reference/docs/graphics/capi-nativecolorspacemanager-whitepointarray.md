---
title: "WhitePointArray"
upstream_id: "harmonyos-references/capi-nativecolorspacemanager-whitepointarray"
catalog: "harmonyos-references"
content_hash: "1e323ef1510a"
synced_at: "2026-08-29T18:17:57.553954"
---

# WhitePointArray

```
typedef struct {...} WhitePointArray
```

#### 概述

提供白点数组结构体，白点是在当前色域中表示白色的坐标。

起始版本： 13

相关模块： [NativeColorSpaceManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-nativecolorspacemanager)

所在头文件： [native_color_space_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-color-space-manager-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float arr[2] | 表示白点坐标数组。arr[0]表示x坐标，arr[1]表示y坐标，用于在色域空间中精确定义白色基准点，影响色域的显示效果和颜色准确性。 |
