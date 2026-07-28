---
title: "OH_Archive_StreamInfo"
upstream_id: "harmonyos-references/capi-archive-oh-archive-streaminfo"
catalog: "harmonyos-references"
content_hash: "2dfb9ddb801d"
synced_at: "2026-07-28T16:50:04.779565"
---

# OH_Archive_StreamInfo

```
typedef struct {...} OH_Archive_StreamInfo
```

#### 概述

流式压缩/解压缩信息结构体。

起始版本： 26.0.0

相关模块： [Archive](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-archive)

所在头文件： [oh_archive.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-archive-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint64_t totalInSize | 压缩/解压缩前输入数据大小，单位为bytes。 **起始版本：** 26.0.0 |
| uint64_t totalOutSize | 压缩/解压缩后输出数据大小，单位为bytes。 **起始版本：** 26.0.0 |
| uint32_t checksum | 未压缩数据的校验和。当[OH_Archive_StreamChecksumAlg](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-archive-h#oh_archive_streamchecksumalg)设置为OH_ARCHIVE_NO_CHECKSUM时，checksum为0。 **起始版本：** 26.0.0 |
