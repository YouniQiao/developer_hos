---
title: "Interface (ControlCenterQuery)"
upstream_id: "harmonyos-references/arkts-apis-camera-controlcenterquery"
catalog: "harmonyos-references"
content_hash: "f95b174ac179"
synced_at: "2026-07-09T01:00:21.625520"
---

# Interface (ControlCenterQuery)

控制中心类，用于查询是否支持相机控制器。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 本Interface首批接口从API version 20开始支持。

#### 导入模块

```
import { camera } from '@kit.CameraKit';
```

#### isControlCenterSupported20+

isControlCenterSupported(): boolean

查询是否支持相机控制器。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 返回是否支持相机控制器。true表示支持，false表示不支持。 |

示例：

```
function isControlCenterSupported(videoSession: camera.VideoSession): boolean {
    let isSupported: boolean = videoSession.isControlCenterSupported();
    return isSupported;
}
```

#### getSupportedEffectTypes20+

getSupportedEffectTypes(): Array<ControlCenterEffectType>

查询相机控制器支持的效果类型。

元服务API： 从API version 20开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

返回值：

| 类型 | 说明 |
| --- | --- |
| Array | 支持的效果类型。 |

示例：

```
function getSupportedEffectTypes(videoSession: camera.VideoSession): Array<camera.ControlCenterEffectType> {
    let effectTypes: Array<camera.ControlCenterEffectType> = [];
    effectTypes = videoSession.getSupportedEffectTypes();
    return effectTypes;
}
```
