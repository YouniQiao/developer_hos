---
title: "OH_NativeBundle_ModuleMetadata"
upstream_id: "harmonyos-references/capi-native-bundle-oh-nativebundle-modulemetadata"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:47:00.117383"
---

# OH_NativeBundle_ModuleMetadata

```
typedef struct OH_NativeBundle_ModuleMetadata {...} OH_NativeBundle_ModuleMetadata
```

#### 概述

模块元数据的信息。

起始版本： 20

相关模块： [Native_Bundle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-bundle)

所在头文件： [native_interface_bundle.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-bundle-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* moduleName | 模块名称。 |
| [OH_NativeBundle_Metadata*](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-bundle-oh-nativebundle-metadata) metadataArray | 模块的元数据数组。 |
| size_t metadataArraySize | 模块的元数据数组大小。 |
