---
title: "hiai_helper.h"
upstream_id: "harmonyos-references/cannkit-hiai-helper-8h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:55.240122"
---

# hiai_helper.h

#### 概述

查询CANN Kit版本以及检查模型支持情况的接口。

引用文件： <CANNKit/hiai_helper.h>

库： libhiai_foundation.so

系统能力： SystemCapability.AI.HiAIFoundation

起始版本： 4.1.0(11)

相关模块： [CANN](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit)

#### 汇总

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [HiAI_Compatibility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_compatibility) { HIAI_COMPATIBILITY_COMPATIBLE = 0, HIAI_COMPATIBILITY_INCOMPATIBLE = 1 } | 编译后模型兼容性结果。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| const char * [HMS_HiAI_GetVersion](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiai_getversion) (void) | 获取CANN Kit版本号，返回值为一个字符串，其格式遵循hiaiversion A1A2A3.X1X2X3.Y1Y2Y3.Z1Z2Z3规范。其中X1字段用于标识NPU支持状态。若X1为0，则表示不支持NPU；若X1为非0，则表示支持NPU。 |
| [HiAI_Compatibility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_compatibility) [HMS_HiAICompatibility_CheckFromFile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaicompatibility_checkfromfile) (const char *file) | 查询编译后储存在文件中的模型的兼容性。 若发生不兼容情况，建议重新编译模型。 |
| [HiAI_Compatibility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hiai_compatibility) [HMS_HiAICompatibility_CheckFromBuffer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/cannkit#hms_hiaicompatibility_checkfrombuffer) (const void *data, size_t size) | 查询编译后储存在内存中的模型的兼容性。 若发生不兼容情况，建议重新编译模型。 |
