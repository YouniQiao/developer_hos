---
title: "DRM_PsshInfo"
upstream_id: "harmonyos-references/capi-drm-drm-psshinfo"
catalog: "harmonyos-references"
content_hash: "8bcae40bc34f"
synced_at: "2026-08-29T18:17:33.971319"
---

# DRM_PsshInfo

```
typedef struct DRM_PsshInfo {...} DRM_PsshInfo
```

#### 概述

DRM内容保护系统专用头（Protection System Specific Header）信息。

起始版本： 11

相关模块： [Drm](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-drm)

所在头文件： [native_drm_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-drm-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| uint8_t uuid[DRM_UUID_LEN] | DRM系统的UUID（通用唯一标识符），用于唯一标识一个DRM内容保护系统。UUID长度为16字节，由DRM解决方案提供商分配。 |
| int32_t dataLen | PSSH数据的长度，表示data数组中有效数据的字节数。单位为字节（Byte），取值范围为[0, MAX_PSSH_DATA_LEN]。 |
| uint8_t data[MAX_PSSH_DATA_LEN] | PSSH数据，包含DRM系统特定的初始化数据。数据格式通常包含密钥ID、内容ID等信息。数组长度由MAX_PSSH_DATA_LEN宏定义。 |
