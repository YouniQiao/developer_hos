---
title: "Interface (MacroQuery)"
upstream_id: "harmonyos-references/arkts-apis-camera-macroquery"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:11.773242"
---

# Interface (MacroQuery)

提供查询设备是否支持相机微距拍摄的方法。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 19开始支持。

#### 导入模块

```
import { camera } from '@kit.CameraKit';
```

#### isMacroSupported19+

isMacroSupported(): boolean

检测当前状态下是否支持微距能力，需要在CaptureSession调用[commitConfig](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-session#commitconfig11)之后进行调用。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 返回是否支持微距能力。true表示支持，false表示不支持。 |

示例：

```
function isMacroSupported(photoSession: camera.PhotoSession): boolean {
  let isSupported: boolean = photoSession.isMacroSupported();
  return isSupported;
}
```
