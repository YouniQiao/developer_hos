---
title: "FG_Mat4x4"
upstream_id: "harmonyos-references/_f_g___mat4x4"
catalog: "harmonyos-references"
content_hash: "9a3425da9784"
synced_at: "2026-07-09T01:01:07.633425"
---

# FG_Mat4x4

#### 概述

此结构体描述列主序4x4矩阵。列主序是指在连续的线性内存地址中，优先按列遍历矩阵元素。

起始版本： 5.0.0(12)

相关模块： [GraphicsAccelerate](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/_graphics_accelerate)

所在头文件： [frame_generation_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/frame__generation__base_8h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| float [data](#data) [16U] | 4x4列主序矩阵元素值组成的一维数组： | a11 a12 a13 a14 | | a21 a22 a23 a24 | | a31 a32 a33 a34 | | a41 a42 a43 a44 | data[16] = {a11, a21, a31, a41, a12, a22, a32, a42, a13, a23, a33, a43, a14, a24, a34, a44} |

#### 结构体成员变量说明

#### [h2]data

```
float FG_Mat4x4::data[16U]
```
 描述

4x4列主序矩阵元素值组成的一维数组：

```
     | a11 a12 a13 a14 |
A  = | a21 a22 a23 a24 |
     | a31 a32 a33 a34 |
     | a41 a42 a43 a44 |
data[16] = {a11, a21, a31, a41, a12, a22, a32, a42, a13, a23, a33, a43, a14, a24, a34, a44}
```
