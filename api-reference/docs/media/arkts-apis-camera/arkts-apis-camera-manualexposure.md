---
title: "Interface (ManualExposure)"
upstream_id: "harmonyos-references/arkts-apis-camera-manualexposure"
catalog: "harmonyos-references"
content_hash: "ad699ec34cba"
synced_at: "2026-07-09T01:00:22.006241"
---

# Interface (ManualExposure)

ManualExposure继承自[ManualExposureQuery](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-manualexposurequery)。

手动曝光对象。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 24开始支持。

#### 导入模块

```
import { camera } from '@kit.CameraKit';
```

#### getExposureDuration24+

getExposureDuration(): number

获取当前曝光时长值。

元服务API： 从API version 24开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 当前曝光时长值。单位：微秒。 |

错误码：

以下错误码的详细介绍请参见[Camera错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400102 | Operation not allowed, session or inputdevice maybe abnormal. |
| 7400103 | Session not config. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

function getExposureDuration(photoSession: camera.PhotoSession): number {
  let exposureDuration: number = 0;
  try {
    exposureDuration = photoSession.getExposureDuration();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The getExposureDuration call failed. error code: ${err.code}`);
  }
  return exposureDuration;
}
```

#### setExposureDuration24+

setExposureDuration(exposureDuration: number): void

设置曝光时长值。

仅在[ExposureMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-e#exposuremode).EXPOSURE_MODE_MANUAL 手动曝光模式下设置生效。

元服务API： 从API version 24开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| exposureDuration | number | 是 | 曝光时长值。单位：微秒。 |

错误码：

以下错误码的详细介绍请参见[Camera错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

function setExposureDuration(photoSession: camera.PhotoSession, exposureDuration: number): void {
  try {
    photoSession.setExposureDuration(exposureDuration);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The setExposureDuration call failed. error code: ${err.code}`);
  }
}
```
