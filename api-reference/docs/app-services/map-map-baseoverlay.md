---
title: "Interface (BaseOverlay)"
upstream_id: "harmonyos-references/map-map-baseoverlay"
catalog: "harmonyos-references"
content_hash: "ccb395403f7a"
synced_at: "2026-07-09T01:01:24.251241"
---

# Interface (BaseOverlay)

#### 导入模块

```
import { map, mapCommon } from '@kit.MapKit';
```

#### BaseOverlay

覆盖物基础类。[Marker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-marker)、[MapPolyline](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mappolyline)、[MapPolygon](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mappolygon)、[MapCircle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcircle)、[MapArc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-maparc)、[ImageOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-imageoverlay)、[BasePriorityOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-basepriorityoverlay)等覆盖物继承该基础类。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 4.1.0(11)

| 返回类型 | 方法 |
| --- | --- |
| string | [getId](#getid)() 获取覆盖物的ID属性。 |
| number | [getZIndex](#getzindex)() 获取覆盖物的z指数。 |
| Object | [getTag](#gettag)() 覆盖物的tag属性。 |
| boolean | [isVisible](#isvisible)() 覆盖物的可见性。 |
| void | [remove](#remove)() 从地图移除覆盖物。 |
| void | [setZIndex](#setzindex)(zIndex: number) 设置覆盖物的z指数。 |
| void | [setTag](#settag)(tag: Object) 设置覆盖物的tag属性。 |
| void | [setVisible](#setvisible)(visible: boolean) 设置覆盖物的可见性。 |

#### [h2]getId

getId(): string

获取覆盖物的ID。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 4.1.0(11)

返回值：

| 类型 | 说明 |
| --- | --- |
| string | 覆盖物的ID。 |

示例：

```
// 以marker为例
let markerOptions: mapCommon.MarkerOptions = {
  position: {
    latitude: 39.9,
    longitude: 116.4
  }
};
let marker: map.Marker = await this.mapController.addMarker(markerOptions);
let id: string = marker.getId();
```

#### [h2]getZIndex

getZIndex(): number

获取覆盖物的z指数。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 4.1.0(11)

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 覆盖物的z指数。z指数指覆盖物的叠加顺序，具有较大z指数的覆盖物会绘制在具有较小z指数的覆盖物上，具有相同z指数的叠加顺序为元素添加的先后顺序。 |

示例：

```
// 以marker为例
let zIndex: number = marker.getZIndex();
```

#### [h2]getTag

getTag(): Object

获取覆盖物的tag属性。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 4.1.0(11)

返回值：

| 类型 | 说明 |
| --- | --- |
| Object | 覆盖物的tag属性。 |

示例：

```
// 以marker为例
let tag: Object = marker.getTag();
```

#### [h2]isVisible

isVisible(): boolean

获取覆盖物的可见性。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 4.1.0(11)

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 覆盖物的可见性。 - true：可见 - false：不可见 |

示例：

```
// 以marker为例
let isVisible: boolean = marker.isVisible();
```

#### [h2]remove

remove(): void

从地图移除覆盖物。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 4.1.0(11)

示例：

```
// 以marker为例
marker.remove();
```

#### [h2]setZIndex

setZIndex(zIndex: number): void

设置覆盖物的z指数。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 4.1.0(11)

参数：

| 参数名 | **类型** | 必填 | **说明** |
| --- | --- | --- | --- |
| zIndex | number | 是 | 覆盖物的z指数。z指数指覆盖物的叠加顺序，具有较大z指数的覆盖物会绘制在具有较小z指数的覆盖物上，具有相同z指数的叠加顺序为元素添加的先后顺序。异常值不处理。 |

示例：

```
// 以marker为例
marker.setZIndex(3);
```

#### [h2]setTag

setTag(tag: Object): void

设置覆盖物的tag属性。tag属性可以是任意对象，如果设置为空，则清除tag。当您不再需要使用tag时，您可以调用setTag(null)或setTag(undefined)清除tag，以防止应用程序发生内存泄漏。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 4.1.0(11)

参数：

| **参数名** | **类型** | 必填 | **说明** |
| --- | --- | --- | --- |
| tag | Object | 是 | 覆盖物的tag属性，异常值不处理。 |

示例：

```
// 以marker为例
let tag = "tag-1";
marker.setTag(tag);
```

#### [h2]setVisible

setVisible(visible: boolean): void

设置覆盖物的可见性，默认可见。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本4.1.0(11)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 4.1.0(11)

参数：

| 参数名 | **类型** | 必填 | **说明** |
| --- | --- | --- | --- |
| visible | boolean | 是 | 覆盖物的可见性，异常值不处理。 - true：可见 - false：不可见 |

示例：

```
// 以marker为例
marker.setVisible(true);
```
