---
title: "imageFeaturePicker (全局取色功能)"
upstream_id: "harmonyos-references/pen-imagefeaturepicker"
catalog: "harmonyos-references"
content_hash: "bd199f582c9a"
synced_at: "2026-07-09T00:59:58.789372"
---

# imageFeaturePicker (全局取色功能)

全局取色的功能入口类。

起始版本： 5.0.0(12)

#### 导入模块

```
import { imageFeaturePicker } from '@kit.Penkit';
```

#### PickedColorInfo

全局取色结果对象，包含取色的基本信息。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Stylus.ColorPicker

起始版本： 5.0.0(12)

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| color | [common2D.Color](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-graphics-common2d#color) | 否 | 否 | 色值。 |
| colorSpace | [colorSpaceManager.ColorSpace](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-colorspacemanager#colorspace) | 否 | 否 | 色域空间。 |
| timestamp | number | 否 | 否 | 时间戳，自系统启动以来经过的时间，单位：ms。 |

#### pickForResult

pickForResult(x?:number, y?:number):Promise<PickedColorInfo>

全局取色，不支持实时显示RGB值。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Stylus.ColorPicker

起始版本： 5.0.0(12)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 否 | 取色器初始位置的x轴坐标。取值范围：0~屏幕的实际宽度，取值超出上限取屏幕的实际宽度，单位：vp。默认值：100 |
| y | number | 否 | 取色器初始位置的y轴坐标。取值范围：0~屏幕的实际高度，取值超出上限取屏幕的实际高度，单位：vp。默认值：100 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回取色执行的结果。该Promise对象用于获取全局取色操作的结果，当取色成功时，会返回一个包含颜色信息的对象。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API 错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-pen)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | api is not supported. |
| 1013900001 | IPC communication failed. |
| 1013900002 | memory is insufficient. |
| 1013900003 | service is invalid. |
| 1013900004 | multi app call. |
| 1013900005 | background service call. |

示例：

```
import { imageFeaturePicker } from '@kit.Penkit';

try {
    // 参数0表示取色器初始位置的x轴坐标和y轴坐标，实际使用时应根据用户交互获取具体坐标。
  imageFeaturePicker.pickForResult(0, 0).then(info => {
    console.info(`info is ${JSON.stringify(info)}`);
  })
} catch (error) {
  console.error(`${error.code}: ${error.message}`);
}
```

#### pickForResult

pickForResult(x?:number, y?:number, showValue?:boolean):Promise<PickedColorInfo>

全局取色，支持实时显示RGB值。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

系统能力： SystemCapability.Stylus.ColorPicker

起始版本： 5.1.0(18)

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| x | number | 否 | 取色器初始位置的x轴坐标。取值范围：0~屏幕的实际宽度，取值超出上限取屏幕的实际宽度，单位：vp。默认值：100 |
| y | number | 否 | 取色器初始位置的y轴坐标。取值范围：0~屏幕的实际高度，取值超出上限取屏幕的实际高度，单位：vp。默认值：100 |
| showValue | boolean | 否 | 是否显示RGB值。true：显示RGB值，false：不显示RGB值。 默认值：false。 |

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象，返回取色执行的结果。该Promise对象用于获取全局取色操作的结果，当取色成功时，会返回一个包含颜色信息的对象。 |

错误码：

以下错误码的详细介绍请参见[ArkTS API 错误码](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/errorcode-pen)。

| 错误码ID | 错误信息 |
| --- | --- |
| 401 | Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3. Parameter verification failed. |
| 801 | api is not supported. |
| 1013900001 | IPC communication failed. |
| 1013900002 | memory is insufficient. |
| 1013900003 | service is invalid. |
| 1013900004 | multi app call. |
| 1013900005 | background service call. |

示例：

```
import { imageFeaturePicker } from '@kit.Penkit';

try {
    // 参数0表示取色器初始位置的x轴坐标和y轴坐标，实际使用时应根据用户交互获取具体坐标；true表示显示RGB值。
  imageFeaturePicker.pickForResult(0, 0, true).then(info => {
    console.info(`info is ${JSON.stringify(info)}`);
  })
} catch (error) {
  console.error(`${error.code}: ${error.message}`);
}
```
