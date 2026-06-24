---
title: "telephony_data.h"
upstream_id: "harmonyos-references/capi-telephony-data-h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:05.217086"
---

# telephony_data.h

#### 概述

为电话蜂窝数据定义C接口。

引用文件： <telephony/cellular_data/telephony_data.h>

库： libtelephony_data.so

系统能力： SystemCapability.Telephony.CellularData

起始版本： 13

相关模块： [Telephony](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-telephony)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [int32_t OH_Telephony_GetDefaultCellularDataSlotId(void)](#oh_telephony_getdefaultcellulardataslotid) | 获取默认移动数据的SIM卡接口。 |

#### 函数说明

#### [h2]OH_Telephony_GetDefaultCellularDataSlotId()

```
int32_t OH_Telephony_GetDefaultCellularDataSlotId(void)
```
 描述

获取默认移动数据的SIM卡接口。

系统能力： SystemCapability.Telephony.CellularData

起始版本： 13

返回：

| 类型 | 说明 |
| --- | --- |
| int32_t | 默认移动数据的SIM卡接口 (0 表示卡槽1, 1 表示卡槽2)。 |
