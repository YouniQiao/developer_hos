---
title: "Interface (AutoDeviceSwitchQuery)"
upstream_id: "harmonyos-references/arkts-apis-camera-autodeviceswitchquery"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:10.449407"
---

# Interface (AutoDeviceSwitchQuery)

自动切换镜头查询类，用于查询设备是否支持自动切换镜头。

[自动切换镜头能力](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/camera-auto-switch)仅支持折叠屏设备使用，如需使能该能力请参考[enableAutoDeviceSwitch](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-autodeviceswitch#enableautodeviceswitch13)。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 13开始支持。

#### 导入模块

```
import { camera } from '@kit.CameraKit';
```

#### isAutoDeviceSwitchSupported13+

isAutoDeviceSwitchSupported(): boolean

查询设备是否支持自动切换镜头能力。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 是否支持自动切换镜头，true为支持，false为不支持。 |

错误码：

以下错误码的详细介绍请参见[Camera错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. 适用版本：13-17 |

示例：

```
// 本示例用于查询折叠屏设备是否支持自动切换相机镜头。
// 当示例代码返回true时，可继续使用enableAutoDeviceSwitch使能自动切换摄像头能力。
function isAutoDeviceSwitchSupported(session: camera.PhotoSession): boolean {
  let isSupported = false;
  isSupported = session.isAutoDeviceSwitchSupported();
  return isSupported;
}
```
