---
title: "deviceDetection (设备硬件一致性检测)"
upstream_id: "harmonyos-references/servicesupport-api-devicedetection"
catalog: "harmonyos-references"
content_hash: "be082e8c70f7"
synced_at: "2026-08-14T15:54:53.737899"
---

# deviceDetection (设备硬件一致性检测)

本模块提供终端设备核心部件的正品检测服务，包括屏幕、电池和主板的一致性检测。

起始版本： 26.0.0

#### 导入模块

```
import { BusinessError } from "@kit.BasicServicesKit";
import { deviceDetection } from "@kit.ServiceSupportKit";
```

#### deviceDetection.getDeviceComponentVerificationDetails

getDeviceComponentVerificationDetails(): Promise<DeviceComponentVerificationResult>

获取设备硬件一致性校验结果。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

需要权限： ohos.permission.DETECT_DEVICE

系统能力： SystemCapability.HiViewDFX.DeviceDetection

起始版本： 26.0.0

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回硬件一致性校验结果。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-service-support-kit)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. |
| 1029600001 | Insufficient memory. |
| 1029600101 | Service exception. |
| 1029600301 | Network error. |
| 1029600302 | Smart Diagnosis privacy statement not accepted. |

示例：

```
import { BusinessError } from "@kit.BasicServicesKit";
import { deviceDetection } from "@kit.ServiceSupportKit";

// 创建初始化结果对象
let result: deviceDetection.DeviceComponentVerificationResult = {
  componentDetails: []
};
try {
  // 接收一致性检测结果
  result = await deviceDetection.getDeviceComponentVerificationDetails();
} catch (error) {
  // 捕获异常
  const err: BusinessError = error as BusinessError;
  console.error('enter into getDeviceComponentVerificationDetails catch, code is: ' + err.code + ' message is: ' + err.message);
}
```

#### DeviceComponentVerificationResult

设备硬件一致性校验结果。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.HiViewDFX.DeviceDetection

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| componentDetails | [ComponentVerificationDetail](#componentverificationdetail)[] | 否 | 否 | 各硬件校验详情。 |

#### ComponentVerificationDetail

硬件校验结果详细信息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.HiViewDFX.DeviceDetection

起始版本： 26.0.0

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| componentType | [ComponentType](#componenttype) | 否 | 否 | 硬件类型。 |
| resultType | [ResultType](#resulttype) | 否 | 否 | 校验结果。 |

#### ComponentType

一致性校验硬件类型枚举。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.HiViewDFX.DeviceDetection

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| MOTHERBOARD | 'MOTHERBOARD' | 硬件类型：主板。 |
| BATTERY | 'BATTERY' | 硬件类型：电池。 |
| SCREEN | 'SCREEN' | 硬件类型：屏幕。 |

#### ResultType

一致性校验结果枚举。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.HiViewDFX.DeviceDetection

起始版本： 26.0.0

| 名称 | 值 | 说明 |
| --- | --- | --- |
| PASS | 0 | 硬件一致性校验通过。 |
| FAIL | 1 | 硬件一致性校验不通过。 |
| NO_DATA | 2 | 校验系统无当前硬件数据。 |
| UNSURE | 3 | 校验结果无法确定。 |
