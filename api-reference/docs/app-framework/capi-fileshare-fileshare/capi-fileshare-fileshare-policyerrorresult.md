---
title: "FileShare_PolicyErrorResult"
upstream_id: "harmonyos-references/capi-fileshare-fileshare-policyerrorresult"
catalog: "harmonyos-references"
content_hash: "7a5b643287ed"
synced_at: "2026-07-09T00:59:01.188427"
---

# FileShare_PolicyErrorResult

```
typedef struct FileShare_PolicyErrorResult {...} FileShare_PolicyErrorResult
```

#### 概述

授予或使能权限失败的URI策略结果。

起始版本： 12

相关模块： [fileShare](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-fileshare)

所在头文件： [oh_file_share.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-file-share-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| char *uri | 授予或使能策略失败的URI。 |
| [FileShare_PolicyErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-file-share-h#fileshare_policyerrorcode) code | 授予或使能策略失败的URI对应的错误码。 |
| char *message | 授予或使能策略失败的URI对应的原因。 |
