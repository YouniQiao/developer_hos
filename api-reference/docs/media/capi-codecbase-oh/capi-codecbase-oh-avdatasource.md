---
title: "OH_AVDataSource"
upstream_id: "harmonyos-references/capi-codecbase-oh-avdatasource"
catalog: "harmonyos-references"
content_hash: "6dc124d31690"
synced_at: "2026-07-09T01:00:15.667730"
---

# OH_AVDataSource

```
typedef struct OH_AVDataSource {...} OH_AVDataSource
```

#### 概述

用户自定义数据源。

起始版本： 12

相关模块： [CodecBase](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-codecbase)

所在头文件： [native_avcodec_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| int64_t size | 数据源的总大小。 |
| [OH_AVDataSourceReadAt](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avcodec-base-h#oh_avdatasourcereadat) readAt | 数据源的数据回调。 |
