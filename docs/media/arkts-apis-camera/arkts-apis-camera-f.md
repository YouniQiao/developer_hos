---
title: "Functions"
upstream_id: "harmonyos-references/arkts-apis-camera-f"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:52:10.010384"
---

# Functions

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 10开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { camera } from '@kit.CameraKit';
```

#### camera.getCameraManager

getCameraManager(context: Context): CameraManager

获取相机管理器实例，同步返回结果。

元服务API： 从API version 19开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Multimedia.Camera.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| context | [Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context) | 是 | 应用上下文。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| [CameraManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-camera-cameramanager) | 相机管理器。 |

错误码：

以下错误码的详细介绍请参见[Camera错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-camera)。

| 错误码ID | 错误信息 |
| --- | --- |
| 7400101 | Parameter missing or parameter type incorrect. |
| 7400201 | Camera service fatal error. |

示例：

```
import { common } from '@kit.AbilityKit';
import { BusinessError } from '@kit.BasicServicesKit';

function getCameraManager(context: common.BaseContext): camera.CameraManager | undefined {
  let cameraManager: camera.CameraManager | undefined = undefined;
  try {
    cameraManager = camera.getCameraManager(context);
  } catch (error) {
    let err = error as BusinessError;
    console.error(`The getCameraManager call failed. error code: ${err.code}`);
  }
  return cameraManager;
}
```
