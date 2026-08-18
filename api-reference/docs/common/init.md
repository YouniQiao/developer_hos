---
title: "Init"
upstream_id: "harmonyos-references/init"
catalog: "harmonyos-references"
content_hash: "30c54d7fe19e"
synced_at: "2026-08-18T15:35:12.195321"
---

# Init

#### 概述

提供系统能力查询接口。

通过读取系统能力参数文件，返回指定的某个系统能力是否被支持。

起始版本： 8

#### 文件汇总

| 名称 | 描述 |
| --- | --- |
| [syscap_ndk.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap__ndk_8h) | 查询单个系统能力是否被支持的API。 **引用文件**： **库**：libdeviceinfo_ndk.z.so |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [canIUse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/syscap__ndk_8h#caniuse) (const char *cap) | 查询指定的系统能力是否被支持。 系统能力（SystemCapability，简称SysCap），指操作系统中每一个相对独立的特性。不同的设备对应不同的系统能力集，每个系统能力对应一个或多个API。开发者可根据系统能力来判断是否可以使用某接口。 |
