---
displayed_sidebar: appDevSidebar
title: "代码签名信息查询场景"
original_url: https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/devicesecurity-audit-acquirecodesign-arkts
format: md
---


从6.1.1(24)开始，新增提供文件代码签名信息查询接口，可以获取设备上已签名的文件签名信息。

## 场景介绍

签名信息包括：应用ID、签发组织证书链、签名摘要、签名时间戳、签名使用的Hash算法。通过[acquireCodeSign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api#acquirecodesign)接口，应用可以获取代码签名信息，辅助应用判断运行代码的完整性和安全性，从而有效防止恶意软件的运行，提升设备安全防护能力。

## 约束和限制

1. 当前能力仅支持2in1设备。
2. 调用[acquireCodeSign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api#acquirecodesign)接口的应用程序需要具备读取目标代码签名文件的权限。

## 业务流程

![](./img/7570fa95.png)

**流程说明：**

1. 用户在hap应用上调用文件代码签名信息查询接口[acquireCodeSign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api#acquirecodesign)。
2. [acquireCodeSign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api#acquirecodesign)接口同步返回应用所传入的文件对应的代码签名信息。

## 接口说明

接口如下表，更多接口及使用方法请参见[API参考](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api#acquirecodesign)。

| 接口名 | 描述 |
| --- | --- |
| [acquireCodeSign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api#acquirecodesign)(path: string): string | 获取输入的文件路径的代码签名信息。 |

## 开发步骤

![](./img/6256677e.png)

在开发准备过程中，需要申请权限：ohos.permission.QUERY\_AUDIT\_EVENT，只允许清单内的企业类应用申请该权限，申请方式请参考：[申请使用企业类应用可用权限](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-enterprise-apps)。

1. 导入Device Security Kit模块及相关公共模块。

   ```
   import { securityAudit } from '@kit.DeviceSecurityKit';
   import { BusinessError} from '@kit.BasicServicesKit';
   import { hilog } from '@kit.PerformanceAnalysisKit';
   ```
2. 开发者调用[acquireCodeSign](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/devicesecurity-securityaudit-api#acquirecodesign)接口，获取所传入的文件对应的代码签名信息。

   ```
   const TAG = "SecurityAuditJsTest";
   let path = 'test';
   try {
     hilog.info(0x0000, TAG, 'acquireCodeSign begin.');
     const result = securityAudit.acquireCodeSign(path);
     hilog.info(0x0000, TAG, 'Succeeded in queryCodeSign.');
   } catch (err) {
     let e: BusinessError = err as BusinessError;
     hilog.error(0x0000, TAG, 'acquireCodeSign failed: %{public}d %{public}s', e.code, e.message);
   }
   ```
