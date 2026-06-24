---
title: "ResourceManager_Configuration"
upstream_id: "harmonyos-references/capi-resourcemanager-resourcemanager-configuration"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:24.290929"
---

# ResourceManager_Configuration

```
typedef struct ResourceManager_Configuration {...} ResourceManager_Configuration
```

#### 概述

设备状态的枚举。

起始版本： 12

相关模块： [resourcemanager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-resourcemanager)

所在头文件： [resmgr_common.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-resmgr-common-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| ResourceManager_Direction direction | 表示屏幕方向。 |
| char* locale | 表示语言文字国家地区，如zh-Hans-CN。 |
| ResourceManager_DeviceType deviceType | 表示设备类型。 |
| ScreenDensity screenDensity | 表示屏幕密度。 |
| ResourceManager_ColorMode colorMode | 表示颜色模式。 |
| uint32_t mcc | 表示移动国家码。 |
| uint32_t mnc | 表示移动网络码。 |
| uint32_t reserved[20] | 保留属性。 |
