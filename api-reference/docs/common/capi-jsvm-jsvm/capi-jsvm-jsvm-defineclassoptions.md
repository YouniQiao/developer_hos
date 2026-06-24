---
title: "JSVM_DefineClassOptions"
upstream_id: "harmonyos-references/capi-jsvm-jsvm-defineclassoptions"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:54:03.484803"
---

# JSVM_DefineClassOptions

```
typedef struct {...} JSVM_DefineClassOptions
```

#### 概述

定义Class的选项。

系统能力： SystemCapability.ArkCompiler.JSVM

起始版本： 18

相关模块： [JSVM](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm)

所在头文件： [jsvm_types.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [JSVM_DefineClassOptionsId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-jsvm-types-h#jsvm_defineclassoptionsid) id | 定义Class的选项ID。 |
| content | id对应的定义Class选项值联合体。 |
| content.ptr | 指向定义Class选项值的指针。 |
| content.num | 存储整数类型的定义Class选项值。 |
| content.boolean | 存储布尔类型的定义Class选项值。 |
