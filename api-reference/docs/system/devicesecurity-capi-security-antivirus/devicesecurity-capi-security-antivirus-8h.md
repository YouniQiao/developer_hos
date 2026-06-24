---
title: "security_antivirus.h"
upstream_id: "harmonyos-references/devicesecurity-capi-security-antivirus-8h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:50:36.648864"
---

# security_antivirus.h

#### 概述

文件中定义了与病毒防护服务管理相关的函数。

引用文件： <DeviceSecurityKit/security_antivirus.h>

库： libsecurityantivirus_ndk.z.so

系统能力： SystemCapability.Security.SecurityAntivirus

起始版本： 6.0.0(20)

相关模块： [SecurityAntivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus)

#### 汇总

#### [h2]结构体

| 名称 | 描述 |
| --- | --- |
| struct [SecurityAntivirus_Antivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityantivirus) | 定义病毒防护服务应用信息，包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID。 |

#### [h2]枚举

| 名称 | 描述 |
| --- | --- |
| [SecurityAntivirus_ErrCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus#securityantivirus_errcode){ SECURITY_ANTIVIRUS_SUCCESS = 0, SECURITY_ANTIVIRUS_PERMISSION_NOT_GRANTED = 201, SECURITY_ANTIVIRUS_PARAM_INVALID = 1019900001, SECURITY_ANTIVIRUS_NO_REGISTER = 1019900002, SECURITY_ANTIVIRUS_INNER_ERROR = 1019900003 } | 定义病毒防护服务管理错误码。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| SecurityAntivirus_ErrCode [HMS_SecurityAntivirus_RegisterAntivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus#hms_securityantivirus_registerantivirus)(const char* bundleName) | 三方EDR应用向HarmonyOS安全防护服务注册。 |
| SecurityAntivirus_ErrCode [HMS_SecurityAntivirus_UnregisterAntivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus#hms_securityantivirus_unregisterantivirus)(const char* bundleName) | 三方EDR应用从HarmonyOS安全防护服务注销。 |
| SecurityAntivirus_ErrCode [HMS_SecurityAntivirus_UpdateAntivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus#hms_securityantivirus_updateantivirus)(const [SecurityAntivirus_Antivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityantivirus)* antivirus) | 三方EDR应用向HarmonyOS安全防护服务更新信息，包含包名、当前版本号、上次更新时间、病毒防护开关状态、用户ID。 |
| SecurityAntivirus_ErrCode [HMS_SecurityAntivirus_QueryAntivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus#hms_securityantivirus_queryantivirus)([SecurityAntivirus_Antivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityantivirus)** list, uint32_t* length) | 零信任应用向HarmonyOS安全防护服务查询当前所有三方EDR注册信息。 |
| SecurityAntivirus_ErrCode [HMS_SecurityAntivirus_QueryPreinstalledAntivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus#hms_securityantivirus_querypreinstalledantivirus)([SecurityAntivirus_Antivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-structs-securityantivirus)** list, uint32_t* length) | MDM应用向HarmonyOS安全防护服务查询所有用户的防病毒功能状态。 |
| SecurityAntivirus_ErrCode [HMS_SecurityAntivirus_EnablePreinstalledAntivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus#hms_securityantivirus_enablepreinstalledantivirus)(void) | MDM应用启用HarmonyOS安全防护服务所有用户的防病毒功能。 |
| SecurityAntivirus_ErrCode [HMS_SecurityAntivirus_DisablePreinstalledAntivirus](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus#hms_securityantivirus_disablepreinstalledantivirus)(void) | MDM应用禁用HarmonyOS安全防护服务所有用户的防病毒功能。 |
| SecurityAntivirus_ErrCode [HMS_SecurityAntivirus_EnablePreinstalledAntivirusByAccount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus#hms_securityantivirus_enablepreinstalledantivirusbyaccount)(int32_t accountId) | MDM应用启用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。 |
| SecurityAntivirus_ErrCode [HMS_SecurityAntivirus_DisablePreinstalledAntivirusByAccount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-capi-securityantivirus#hms_securityantivirus_disablepreinstalledantivirusbyaccount)(int32_t accountId) | MDM应用禁用HarmonyOS安全防护服务中用户ID为accountId的防病毒功能。 |
