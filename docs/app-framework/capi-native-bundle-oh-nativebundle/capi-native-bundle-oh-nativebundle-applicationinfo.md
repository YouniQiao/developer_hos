---
title: "OH_NativeBundle_ApplicationInfo"
upstream_id: "harmonyos-references/capi-native-bundle-oh-nativebundle-applicationinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:46:59.778596"
---

# OH_NativeBundle_ApplicationInfo

```
typedef struct {...} OH_NativeBundle_ApplicationInfo
```

#### 概述

应用包信息数据结构，包含应用包名和应用指纹信息。

起始版本： 9

相关模块： [Native_Bundle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-bundle)

所在头文件： [native_interface_bundle.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-interface-bundle-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char* bundleName | 应用包名。 |
| char* fingerprint | 应用的指纹信息，由签名证书通过SHA-256算法计算哈希值生成。使用的签名证书发生变化时，该字段也会发生变化。 |
