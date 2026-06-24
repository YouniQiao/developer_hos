---
title: "@ohos.screenshot (屏幕截图)"
upstream_id: "harmonyos-references/js-apis-screenshot"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:47:31.083852"
---

# @ohos.screenshot (屏幕截图)

本模块提供屏幕截图的能力。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 12开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { screenshot } from '@kit.ArkUI';
```

#### Rect

表示截取图像的区域。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.WindowManager.WindowManager.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| left | number | 否 | 否 | 表示截取图像区域的左边界，单位为px，该参数应为整数。 |
| top | number | 否 | 否 | 表示截取图像区域的上边界，单位为px，该参数应为整数。 |
| width | number | 否 | 否 | 表示截取图像区域的宽度，单位为px，该参数应为整数。 |
| height | number | 否 | 否 | 表示截取图像区域的高度，单位为px，该参数应为整数。 |

#### CaptureOption14+

设置截取图像的信息。

系统能力： SystemCapability.WindowManager.WindowManager.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| displayId | number | 否 | 是 | 表示截取图像的显示设备[Display](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-display#display)的ID号，默认为0，该参数应为大于或等于0的整数，非整数会报参数错误。 **元服务API：** 从API version 14开始，该接口支持在元服务中使用。 |
| blackWindowIds21+ | Array | 否 | 是 | 表示截取图像时不显示的窗口ID列表，默认为空。窗口ID应为大于0的整数，目前仅[闪控球窗口](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-floatingball)生效，窗口ID为非闪控球窗口、非整数、小于等于0、或者不存在的窗口ID时报参数错误，错误码为401。推荐使用[getFloatingBallWindowInfo()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-floatingball#getfloatingballwindowinfo)方法获取闪控球窗口ID属性。 **元服务API：** 从API version 21开始，该接口支持在元服务中使用。 |

#### PickInfo

截取图像的信息。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.WindowManager.WindowManager.Core

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| pickRect | [Rect](#rect) | 否 | 否 | 表示截取图像的区域。 |
| pixelMap | [image.PixelMap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-image-pixelmap) | 否 | 否 | 表示截取的图像PixelMap对象。 |

#### screenshot.pick

pick(): Promise<PickInfo>

获取屏幕截图，当前仅支持获取displayId为0的屏幕截图（如果需要对扩展屏截图，可以通过[capture](#screenshotcapture14)接口实现），使用Promise异步回调。

元服务API： 从API version 12开始，该接口支持在元服务中使用。

系统能力： SystemCapability.WindowManager.WindowManager.Core

设备行为差异： 该接口在PC/2in1设备中可正常调用，在其他设备中返回801错误码。

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回一个PickInfo对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[屏幕错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-display)。

| 错误码ID | 错误信息 |
| --- | --- |
| 801 | Capability not supported on this device. |
| 1400003 | This display manager service works abnormally. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';

try {
  let promise = screenshot.pick();
  promise.then((pickInfo: screenshot.PickInfo) => {
    console.info('pick Pixel bytes number: ' + pickInfo.pixelMap.getPixelBytesNumber());
    console.info('pick Rect: ' + pickInfo.pickRect);
    pickInfo.pixelMap.release(); // PixelMap使用完后及时释放内存
  }).catch((err: BusinessError) => {
    console.error(`Failed to pick. Code: ' + Code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to pick Code: ' + Code: ${exception.code}, message: ${exception.message}`);
};
```

#### screenshot.capture14+

capture(options?: CaptureOption): Promise<image.PixelMap>

获取屏幕全屏截图，使用Promise异步回调。

此接口可以通过设置不同的displayId截取不同屏幕的截图，且只能截取全屏；[pick](#screenshotpick)接口可实现区域截屏。

元服务API： 从API version 14开始，该接口支持在元服务中使用。

系统能力： SystemCapability.WindowManager.WindowManager.Core

设备行为差异： 在API version 21之前，该接口在PC/2in1设备、Tablet设备中可正常调用，在其他设备中返回801错误码。从API version 21开始，该接口在Phone设备、2in1设备、Tablet设备中可正常调用，在其他设备中返回801错误码。

需要权限：API version 22前，需申请ohos.permission.CUSTOM_SCREEN_CAPTURE权限；从API version 22开始，需要申请ohos.permission.CUSTOM_SCREEN_CAPTURE权限或ohos.permission.CUSTOM_SCREEN_RECORDING权限。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [CaptureOption](#captureoption14) | 否 | 截取图像的相关信息。此参数不填时，默认截取displayId为0的屏幕截图。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。返回一个PixelMap对象。 |

错误码：

以下错误码的详细介绍请参见[通用错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-universal)和[屏幕错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-display)。

| 错误码ID | 错误信息 |
| --- | --- |
| 201 | Permission verification failed. The application does not have the permission required to call the API. |
| 401 | Parameter error. Possible causes: 1.Incorrect parameter types. 2.Parameter verification failed. |
| 801 | Capability not supported on this device. |
| 1400003 | This display manager service works abnormally. |

示例：

```
import { BusinessError } from '@kit.BasicServicesKit';
import { image } from '@kit.ImageKit';

let captureOption: screenshot.CaptureOption = {
  "displayId": 0
};
try {
  let promise = screenshot.capture(captureOption);
  promise.then((pixelMap: image.PixelMap) => {
    console.info('Succeeded in saving screenshot. Pixel bytes number: ' + pixelMap.getPixelBytesNumber());
    pixelMap.release(); // PixelMap使用完后及时释放内存
  }).catch((err: BusinessError) => {
    console.error(`Failed to save screenshot. Code: ${err.code}, message: ${err.message}`);
  });
} catch (exception) {
  console.error(`Failed to save screenshot. Code: ${exception.code}, message: ${exception.message}`);
};
```
