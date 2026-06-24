---
title: "OH_PrivacyProtectInfo"
upstream_id: "harmonyos-references/capi-avscreencapture-oh-privacyprotectinfo"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:40.602353"
---

# OH_PrivacyProtectInfo

```
typedef struct {...} OH_PrivacyProtectInfo
```

#### 概述

隐私保护信息结构体。

起始版本： 24

相关模块： [AVScreenCapture](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-avscreencapture)

所在头文件： [native_avscreen_capture_base.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-native-avscreen-capture-base-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| bool systemWindowProtection | 是否开启系统窗口隐私保护。true表示开启隐私保护，false表示关闭隐私保护。 **起始版本：** 24 |
| bool sensitiveAppProtection | 是否开启敏感应用的隐私保护。true表示开启隐私保护，false表示关闭隐私保护。 **起始版本：** 24 |
