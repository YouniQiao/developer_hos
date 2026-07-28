---
title: "@ohos.accessibility.GesturePoint (手势触摸点)"
upstream_id: "harmonyos-references/js-apis-accessibility-gesturepoint"
catalog: "harmonyos-references"
content_hash: "1f39cc15ea83"
synced_at: "2026-07-28T16:40:47.316846"
---

# @ohos.accessibility.GesturePoint (手势触摸点)

GesturePoint表示手势触摸点，是构成手势路径GesturePath的基本单元。

本模块用于创建手势路径的触摸点信息，供辅助功能注入手势使用。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 9开始支持，后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { GesturePoint } from '@kit.AccessibilityKit';
```

#### GesturePoint

表示手势触摸点，是构成GesturePath路径节点的基本单元，用于定义辅助功能注入手势轨迹中的触摸位置。详细使用方式请参见[GesturePath](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-accessibility-gesturepath)。

系统能力： SystemCapability.BarrierFree.Accessibility.Core

#### [h2]属性

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| positionX | number | 否 | 否 | 触摸点X坐标，单位为像素（px）。 |
| positionY | number | 否 | 否 | 触摸点Y坐标，单位为像素（px）。 |

#### [h2]constructor(deprecated)

constructor(positionX: number, positionY: number)

根据传入的X坐标和Y坐标创建GesturePoint实例。

![](./img/note_3.0-zh-cn.png) 从API version 9开始支持，从API version 12开始废弃。

系统能力： SystemCapability.BarrierFree.Accessibility.Core

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| positionX | number | 是 | 触摸点X坐标，单位为像素（px）。 |
| positionY | number | 是 | 触摸点Y坐标，单位为像素（px）。 |

示例：

```
import { GesturePoint } from '@kit.AccessibilityKit';

let gesturePoint = new GesturePoint(1, 2);
```
