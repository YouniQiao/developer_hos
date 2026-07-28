---
title: "aip_retrieval_record.h"
upstream_id: "harmonyos-references/dataaugmentation-aip-retrieval-record"
catalog: "harmonyos-references"
content_hash: "120abe0434d8"
synced_at: "2026-07-28T16:50:06.222360"
---

# aip_retrieval_record.h

#### 概述

提供与检索结果相关的接口。

检索结果（OH_Retrieval_Record）是知识检索操作的返回数据，包含从知识库中检索到的字段和字段取值。检索结果由多个数据库bucket数组（OH_Retrieval_RecordItem）组成，每个bucket数组对应一条匹配的记录，其中包含该记录各字段的名称和值。

适用于需要从知识库中获取相关信息并进行展示的应用场景，例如：知识问答系统中获取检索结果、智能推荐中提取匹配记录等。

引用文件： #include "dataaugmentation/retrieval/aip_retrieval_record.h"

库： libretrieval_ndk.so

系统能力： SystemCapability.DataAugmentation.Retrieval

起始版本： 6.0.0(20)

相关模块： [Retrieval](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval)

#### 汇总

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [OH_Retrieval_Record](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_record) [OH_Retrieval_Record](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_record) | 定义检索结果，包含检索知识库得到的字段和字段取值。 |
| typedef struct [OH_Retrieval_RecordItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_recorditem) [OH_Retrieval_RecordItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_recorditem) | 定义检索结果中的数据库bucket数组。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| int [OH_Retrieval_DestroyRecord](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_destroyrecord) ([OH_Retrieval_Record](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_record) *record) | 销毁通过检索接口[OH_Retrieval_Retrieve](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_retrieve)获得的检索结果。 |
| int [OH_Retrieval_GetRecordLength](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_getrecordlength) (const [OH_Retrieval_Record](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_record) *record, uint32_t *length) | 获取检索结果[OH_Retrieval_Record](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_record)中的数据库bucket数组长度。 |
| int [OH_Retrieval_GetRecordItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_getrecorditem) (const [OH_Retrieval_Record](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_record) *record, uint32_t index, const [OH_Retrieval_RecordItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_recorditem) **item) | 获取检索结果[OH_Retrieval_Record](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_record)中的数据库bucket数组。 |
| int [OH_Retrieval_GetItemSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_getitemsize) (const [OH_Retrieval_RecordItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_recorditem) *items, const char *fieldName, size_t *size) | 获取数据库bucket数组[OH_Retrieval_RecordItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_recorditem)中指定字段的值的size。size值包含结束符。 |
| int [OH_Retrieval_GetItemText](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_getitemtext) (const [OH_Retrieval_RecordItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_recorditem) *items, const char *fieldName, char *value, size_t size) | 获取数据库bucket数组[OH_Retrieval_RecordItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/dataaugmentation-capi-retrieval#oh_retrieval_recorditem)中指定字段的值。 |
