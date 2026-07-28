---
title: "fast_solver_polynomial.h"
upstream_id: "harmonyos-references/fast-kit-fast-solver-polynomial-8h"
catalog: "harmonyos-references"
content_hash: "8ed9f0fe6a90"
synced_at: "2026-07-28T16:51:03.225957"
---

# fast_solver_polynomial.h

#### 概述

多项式零点求解器相关数据结构及函数定义。

引用文件： <FASTKit/fast_solver_polynomial.h>

库： libfast_solver.so

系统能力： SystemCapability.FAST.Core

起始版本： 26.0.0

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

#### 汇总

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [FAST_Poly](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-poly) | 定义稀疏格式多项式的数据结构。 |

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [FAST_Poly](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-poly) [FAST_Poly](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_poly) | 定义稀疏格式多项式的数据结构。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_PolyRoot_ComputeRoots](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_polyroot_computeroots) (const [FAST_Poly](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-poly) *poly, const size_t maxRootCount, double *root, size_t *rootCount) | 计算多项式的给定数量的实根。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_PolyRoot_ComputeSingle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_polyroot_computesingle) (const [FAST_Poly](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-poly) *poly, double *root) | 计算多项式的单个主导(绝对值最大)实根。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_PolyRoot_ComputeRootIntervals](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_polyroot_computerootintervals) (const [FAST_Poly](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit--fast-poly) *poly, const size_t maxRootCount, double *leftBoundary, double *rightBoundary, size_t *rootCount) | 计算多项式给定数量实根的隔离区间。 |
