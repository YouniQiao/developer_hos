---
title: "Interface (AutoExposureQuery)"
upstream_id: "harmonyos-references/arkts-apis-camera-autoexposurequery"
catalog: "harmonyos-references"
content_hash: "74fd34df49bb"
synced_at: "2026-07-09T01:00:21.176488"
---

# Interface (AutoExposureQuery)

针对设备的自动曝光特性提供了一系列查询功能。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 12开始支持。
- 本模块接口在API version 12发生兼容变更，保留了内层元素的起始版本信息，会出现外层元素@since版本号大于内层元素的情况，不影响接口使用。

#### 导入模块

```
import { camera } from '@kit.CameraKit';
```

#### isExposureModeSupported11+

isExposureModeSupported(aeMode: ExposureMode): boolean

检测曝光模式是否支持。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aeMode | [ExposureMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-e#exposuremode) | 是 | 曝光模式。传参为null或者undefined，作为0处理，曝光锁定。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 获取是否支持曝光模式，true为支持，false为不支持。接口调用失败会抛出相应错误码并返回undefined，错误码类型[CameraErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-e#cameraerrorcode)。 |

错误码：

以下错误码的详细介绍请参见[Camera错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

function isExposureModeSupported(photoSession: camera.PhotoSession): boolean {
  let isSupported: boolean = false;
  try {
    isSupported = photoSession.isExposureModeSupported(camera.ExposureMode.EXPOSURE_MODE_LOCKED);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The isExposureModeSupported call failed. error code: ${err.code}`);
  }
  return isSupported;
}
```

#### getExposureBiasRange11+

getExposureBiasRange(): Array<number>

查询曝光补偿范围。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| Array | 获取补偿范围的数组。接口调用失败会返回相应错误码，错误码类型[CameraErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-e#cameraerrorcode)。 |

错误码：

以下错误码的详细介绍请参见[Camera错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

function getExposureBiasRange(photoSession: camera.PhotoSession): Array<number> {
  let biasRangeArray: Array<number> = [];
  try {
    biasRangeArray = photoSession.getExposureBiasRange();
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The getExposureBiasRange call failed. error code: ${err.code}`);
  }
  return biasRangeArray;
}
```

#### isExposureMeteringModeSupported24+

isExposureMeteringModeSupported(aeMeteringMode: ExposureMeteringMode): boolean

检测是否支持指定的曝光测光模式。

元服务API： 从API version 24开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| aeMeteringMode | [ExposureMeteringMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-e#exposuremeteringmode24) | 是 | 曝光测光模式。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 是否支持曝光测光模式。true表示支持，false表示不支持 |

错误码：

以下错误码的详细介绍请参见[Camera错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

function isExposureMeteringModeSupported(photoSession: camera.PhotoSession, aeMeteringMode: camera.ExposureMeteringMode): boolean {
  let isSupported: boolean = false;
  try {
    isSupported = photoSession.isExposureMeteringModeSupported(aeMeteringMode);
  } catch (error) {
    // 失败返回错误码error.code并处理。
    let err = error as BusinessError;
    console.error(`The isExposureMeteringModeSupported call failed. error code: ${err.code}`);
  }
  return isSupported;
}
```
