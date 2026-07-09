---
title: "fast_collections_hashmap.h"
upstream_id: "harmonyos-references/fast-kit-fast-collections-hashmap-8h"
catalog: "harmonyos-references"
content_hash: "c3a8b483f6af"
synced_at: "2026-07-09T00:59:46.344165"
---

# fast_collections_hashmap.h

#### 概述

哈希表相关数据结构及函数定义。

引用文件： <FASTKit/fast_collections_hashmap.h>

库： libfast_collections.so

系统能力： SystemCapability.FAST.Core

起始版本： 26.0.0

相关模块： [FAST](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast)

#### 汇总

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef void* [FAST_HashmapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmaphandle) | 哈希表的句柄。 |
| typedef void* [FAST_HashmapKeyPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapkeyptr) | 哈希表键指针。 |
| typedef void* [FAST_HashmapValuePtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapvalueptr) | 哈希表的值指针。 |
| typedef uint64_t(* [HMS_FAST_Hashmap_HashFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_hashfunc)) (const [FAST_HashmapKeyPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapkeyptr) key) | 自定义的哈希值计算函数。 |
| typedef int32_t(* [HMS_FAST_Hashmap_KeyEqualFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_keyequalfunc)) (const [FAST_HashmapKeyPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapkeyptr) leftKey, const [FAST_HashmapKeyPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapkeyptr) rightKey) | 自定义的键比较函数。 |
| typedef int32_t(* [HMS_FAST_Hashmap_HookFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_hookfunc)) (const [FAST_HashmapKeyPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapkeyptr) key, [FAST_HashmapValuePtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapvalueptr) value, void* context) | 自定义的通用回调函数形式。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Hashmap_Create](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_create) ([FAST_HashmapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmaphandle)* handle, [HMS_FAST_Hashmap_HashFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_hashfunc) hasher, [HMS_FAST_Hashmap_KeyEqualFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_keyequalfunc) equaler) | 创建哈希表实例。 |
| void [HMS_FAST_Hashmap_Destroy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_destroy) ([FAST_HashmapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmaphandle) handle) | 销毁哈希表实例。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Hashmap_Insert](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_insert) ([FAST_HashmapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmaphandle) handle, const [FAST_HashmapKeyPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapkeyptr) key, const [FAST_HashmapValuePtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapvalueptr) value, [FAST_HashmapValuePtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapvalueptr)* originValue) | 将给定的键值对插入哈希表中，如果键已经存在，则使用value覆写原有的值，并将原有值的地址保存在originValue中。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Hashmap_Find](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_find) ([FAST_HashmapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmaphandle) handle, const [FAST_HashmapKeyPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapkeyptr) key, [FAST_HashmapValuePtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapvalueptr)* value) | 检索与给定键关联的值，并将对应的值保存在value中。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Hashmap_Erase](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_erase) ([FAST_HashmapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmaphandle) handle, const [FAST_HashmapKeyPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapkeyptr) key, [FAST_HashmapKeyPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapkeyptr)* originKey, [FAST_HashmapValuePtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapvalueptr)* originValue) | 在给定哈希表中删除输入的键，并将键/值对应的地址保存在originKey和originValue中。 |
| [FAST_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_errorcode-1) [HMS_FAST_Hashmap_TryInsert](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_tryinsert) ([FAST_HashmapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmaphandle) handle, const [FAST_HashmapKeyPtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapkeyptr) key, const [FAST_HashmapValuePtr](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmapvalueptr) value) | 将给定的键值对插入哈希表中，如果键已经存在、则不做操作。 |
| size_t [HMS_FAST_Hashmap_Size](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_size) ([FAST_HashmapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmaphandle) handle) | 返回哈希表中的元素个数。 |
| void [HMS_FAST_Hashmap_Clear](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_clear) ([FAST_HashmapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmaphandle) handle) | 从哈希表中删除所有元素。 |
| size_t [HMS_FAST_Hashmap_EraseIf](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_eraseif) ([FAST_HashmapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmaphandle) handle, [HMS_FAST_Hashmap_HookFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_hookfunc) condFunc, void* condCtx, [HMS_FAST_Hashmap_HookFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_hookfunc) freeFunc, void* freeCtx) | 删除哈希表中符合输入条件的所有元素，并使用自定义的方式释放其内存。 |
| void [HMS_FAST_Hashmap_Traverse](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_traverse) ([FAST_HashmapHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#fast_hashmaphandle) handle, [HMS_FAST_Hashmap_HookFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_hookfunc) condFunc, void* condCtx, [HMS_FAST_Hashmap_HookFunc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/fast-kit-fast#hms_fast_hashmap_hookfunc) workFunc, void* workCtx) | 遍历哈希表，将所有符合输入条件的键值对按开发者给定的方式修改。 |
