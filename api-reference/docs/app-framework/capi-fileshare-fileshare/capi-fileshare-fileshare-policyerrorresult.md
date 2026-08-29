---
title: "FileShare_PolicyErrorResult"
upstream_id: "harmonyos-references/capi-fileshare-fileshare-policyerrorresult"
catalog: "harmonyos-references"
content_hash: "82b1861205cb"
synced_at: "2026-08-29T18:16:09.523113"
---

# FileShare_PolicyErrorResult

```
typedef struct FileShare_PolicyErrorResult {...} FileShare_PolicyErrorResult
```

#### 概述

授予或激活权限失败的URI策略结果，用于记录失败URI、错误码和失败原因。

起始版本： 12

相关模块： [fileShare](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-fileshare)

所在头文件： [oh_file_share.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-file-share-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char *uri | 授予或激活权限失败的URI。 |
| [FileShare_PolicyErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-file-share-h#fileshare_policyerrorcode) code | 授予或激活权限失败的URI对应的错误码。 |
| char *message | 授予或激活权限失败的URI对应的原因，由系统管理，无需手动释放。 |
