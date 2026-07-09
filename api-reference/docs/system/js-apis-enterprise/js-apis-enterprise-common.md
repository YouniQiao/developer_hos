---
title: "@ohos.enterprise.common（Enterprise公共模块）"
upstream_id: "harmonyos-references/js-apis-enterprise-common"
catalog: "harmonyos-references"
content_hash: "dab917cb0bf3"
synced_at: "2026-07-09T00:59:51.422737"
---

# @ohos.enterprise.common（Enterprise公共模块）

本模块提供MDM Kit中常用公共能力的纯类型定义，包含枚举类型和数据结构。本模块仅导出类型声明，不包含具体实现逻辑或可执行代码。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 22开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

本模块接口仅可在Stage模型下使用。

#### 导入模块

```
import { common } from '@kit.MDMKit';
```

#### ManagedPolicy

企业设备管控策略。

系统能力： SystemCapability.Customization.EnterpriseDeviceManager

| 名称 | 值 | 说明 |
| --- | --- | --- |
| DEFAULT | 0 | 默认，无管控策略。 |
| DISALLOW | 1 | 禁用。 |
| FORCE_OPEN | 2 | 强制开启。 |

#### ApplicationInstance

应用的实例数据。

该接口目前在[addUserNonStopApps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-applicationmanager#applicationmanageraddusernonstopapps22)、[removeUserNonStopApps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-applicationmanager#applicationmanagerremoveusernonstopapps22)、[addFreezeExemptedApps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-applicationmanager#applicationmanageraddfreezeexemptedapps22)、[removeFreezeExemptedApps](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-applicationmanager#applicationmanagerremovefreezeexemptedapps22)接口中作为入参使用。

系统能力： SystemCapability.Customization.EnterpriseDeviceManager

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| appIdentifier | string | 否 | 否 | 应用[唯一标识符](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager-bundleinfo#signatureinfo)，可以通过接口[bundleManager.getBundleInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetbundleinfo14-2)获取bundleInfo.signatureInfo.appIdentifier。 |
| accountId | number | 否 | 否 | 用户ID。取值范围：大于等于0的整数。 accountId可以通过[getOsAccountLocalId](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-osaccount#getosaccountlocalid9-1)接口获取。 |
| appIndex | number | 否 | 否 | 应用分身索引。取值范围：大于等于0的整数。 appIndex可以通过[getAppCloneIdentity](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bundlemanager#bundlemanagergetappcloneidentity14)接口获取。 |

#### InstallationResult

应用安装结果。

该对象目前在[EnterpriseAdminExtensionAbility.onMarketAppInstallResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterpriseadminextensionability#onmarketappinstallresult22)作为回调入参使用。

系统能力： SystemCapability.Customization.EnterpriseDeviceManager

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| result | [Result](#result) | 否 | 否 | 应用安装结果码。 |
| message | string | 否 | 否 | 应用安装结果消息。 |

#### Result

应用安装结果码。

系统能力： SystemCapability.Customization.EnterpriseDeviceManager

| 名称 | 值 | 说明 |
| --- | --- | --- |
| SUCCESS | 0 | 应用安装成功。 |
| FAIL | -1 | 应用安装失败。 |

#### EnterpriseAdminExtensionContext23+

type EnterpriseAdminExtensionContext = _EnterpriseAdminExtensionContext.default

EnterpriseAdminExtensionContext是[EnterpriseAdminExtensionAbility](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterpriseadminextensionability)的上下文环境，继承自[ExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-extensioncontext)。

系统能力: SystemCapability.Customization.EnterpriseDeviceManager

模型约束：此接口仅可在Stage模型下使用。

| 类型 | 说明 |
| --- | --- |
| _EnterpriseAdminExtensionContext.default | EnterpriseAdminExtensionAbility组件的上下文[EnterpriseAdminExtensionContext](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-application-enterpriseadminextensioncontext)。 |

#### StartupScene24+

开机向导完成场景。端侧系统在首次切换子用户完成（仅限PC）、OTA升级完成、首次开机完成开机向导时会通过[onStartupGuideCompleted](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterpriseadminextensionability#onstartupguidecompleted24)回调接口通知设备管理应用。

系统能力： SystemCapability.Customization.EnterpriseDeviceManager

模型约束：此接口仅可在Stage模型下使用。

| 名称 | 值 | 说明 |
| --- | --- | --- |
| USER_SETUP | 0 | 子用户被首次切换并完成其开机向导场景（仅限PC）。后续再次切换该子用户不会触发回调。 |
| OTA | 1 | OTA升级完成场景。 |
| DEVICE_PROVISION | 2 | 首次开机完成开机向导场景。 |

#### PolicyChangedEvent

策略变更事件。

该接口目前在[onAdminPolicyChanged](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterpriseadminextensionability#onadminpolicychanged)接口中作为回调入参使用。

起始版本： 26.0.0

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Customization.EnterpriseDeviceManager

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| bundleName | string | 否 | 否 | 应用包名。 |
| functionName | string | 否 | 否 | 接口名称。例如调用[setPasswordPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-securitymanager#securitymanagersetpasswordpolicy)接口时，该字段返回值为setPasswordPolicy。 |
| parameters | string | 否 | 否 | 调用接口时传入的参数值（不包含admin参数），JSON格式字符串。例如调用[setPasswordPolicy](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-enterprise-securitymanager#securitymanagersetpasswordpolicy)接口，该字段返回值为{"policy":{"complexityRegex":"^(?=.*[a-zA-Z])(?=.*\\d).{8},$","validityPeriod":1808309786000,"additionalDescription":"至少8个字符，且包含数字和字母。"}}。 |
| time | number | 否 | 否 | 调用接口的时间戳，单位：ms。 |
