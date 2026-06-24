---
title: "OH_CM_CredentialDetailList"
upstream_id: "harmonyos-references/capi-certmanagertype-oh-cm-credentialdetaillist"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:41.877891"
---

# OH_CM_CredentialDetailList

```
typedef struct {...} OH_CM_CredentialDetailList
```

#### 概述

定义证书凭据详情列表的结构体类型。

起始版本： 22

相关模块： [CertManagerType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-certmanagertype)

所在头文件： [cm_native_type.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-cm-native-type-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint32_t credentialCount | 表示证书凭据详情的个数。 |
| [OH_CM_Credential](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-certmanagertype-oh-cm-credential) *credential | 表示证书凭据详情列表。 |
