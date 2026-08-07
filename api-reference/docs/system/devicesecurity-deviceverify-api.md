---
title: "DeviceVerify（应用设备状态检测）"
upstream_id: "harmonyos-references/devicesecurity-deviceverify-api"
catalog: "harmonyos-references"
content_hash: "89b4812f4bf2"
synced_at: "2026-08-07T15:57:44.755233"
---

# DeviceVerify（应用设备状态检测）

本模块提供应用设备状态检测能力，对应用在某台设备上的使用状态进行管理和检测，用于判断应用是否在该设备上首次安装，或在该设备上用户是否已获取了优惠券等的状态检测，以支撑业务进行新用户营销活动。

起始版本： 5.0.0(12)

#### 导入模块

```
import { deviceCertificate } from '@kit.DeviceSecurityKit';
```

#### deviceCertificate.getDeviceToken

getDeviceToken(): Promise<string>

获取本设备的DeviceToken。使用Promise异步回调。

![](./img/caution_3.0-zh-cn.png) 该接口涉及端云协同，需要联网等耗时操作，因此不要在UI线程中执行，避免阻塞UI线程。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.2(14)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Security.DeviceCertificate

起始版本： 5.0.0(12)

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回本设备的DeviceToken。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-devicesecurity-deviceverify)。

| 错误码ID | 错误信息 |
| --- | --- |
| [201](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-devicesecurity-deviceverify#section201-权限校验失败) | has no permission. |
| [1003300005](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-devicesecurity-deviceverify#section1003300005-内部异常) | internal error. Possible causes: 1. IPC communication failed; 2. Memory operation error; 3. Access device certificate failed. |
| [1003300006](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-devicesecurity-deviceverify#section1003300006-访问云端服务器异常) | access cloud server fail. |

示例：

```
import { deviceCertificate } from '@kit.DeviceSecurityKit';
import { BusinessError} from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

const TAG = "DeviceCertificateJsTest";

// 请求deviceToken，并处理结果
try {
  deviceCertificate.getDeviceToken().then((token) => {
    hilog.info(0x0000, TAG, 'Succeeded in executing getDeviceToken');
    // 开发者处理deviceToken
  }).catch((err: BusinessError) => {
    hilog.error(0x0000, TAG, 'getDeviceToken failed!  %{public}d %{public}s', err.code, err.message);
  });
} catch (err) {
  let error: BusinessError = err as BusinessError;
  hilog.error(0x0000, TAG, 'getDeviceToken failed!  %{public}d %{public}s', error.code, error.message);
}
```
