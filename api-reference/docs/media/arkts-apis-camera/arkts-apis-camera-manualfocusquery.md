---
title: "Interface (ManualFocusQuery)"
upstream_id: "harmonyos-references/arkts-apis-camera-manualfocusquery"
catalog: "harmonyos-references"
content_hash: "0e0165e6b29d"
synced_at: "2026-07-09T01:00:22.266574"
---

# Interface (ManualFocusQuery)

手动对焦查询对象。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 24开始支持。

#### 导入模块

```
import { camera } from '@kit.CameraKit';
```

#### isFocusDistanceSupported24+

isFocusDistanceSupported(): boolean

检测是否支持设置对焦距离。

元服务API： 从API version 24开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 表示是否支持对焦距离。返回true表示支持，返回false表示不支持。 |

错误码：

以下错误码的详细介绍请参见[Camera错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400103 | Session not config, only throw in session usage. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

function isFocusDistanceSupported(photoSession: camera.PhotoSession): boolean {
  let isSupported = false;
  try {
    isSupported = photoSession.isFocusDistanceSupported();
  } catch (error) {
    let err = error as BusinessError;
    console.error(`The isFocusDistanceSupported call failed. error code: ${err.code}`);
  }
  return isSupported;
}
```
