---
title: "Interface (TileOverlay)"
upstream_id: "harmonyos-references/map-map-tileoverlay"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:34.248613"
---

# Interface (TileOverlay)

#### 导入模块

```
import { map, mapCommon } from '@kit.MapKit';
```

#### TileOverlay

瓦片图层，继承[BaseOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-baseoverlay)。瓦片图层是一种基于[BaseOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-baseoverlay)实现的地图覆盖层，用于展示自定义瓦片。

![](./img/note_3.0-zh-cn.png) 由于性能考虑，建议最多添加10个TileOverlay，且提供的图层瓦片分辨率是256*256。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.3(15)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 5.0.3(15)

示例：

```
let params: mapCommon.TileOverlayParams = {
  // 开发者的地图瓦片图层地址，必须使用以http或者https开头的URL地址，且需包含?x={x}&y={y}&z={z}格式的占位符
  tileUrl: "https://xxx/xxx?x={x}&y={y}&z={z}",
  transparency: 0,
  fadeIn: false
};
let tileOverlay: map.TileOverlay = this.mapController?.addTileOverlay(params);
```

#### [h2]clearTileCache

clearTileCache(): void

清除瓦片图层的缓存。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.3(15)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 5.0.3(15)

示例：

```
tileOverlay.clearTileCache();
```

#### [h2]setFadeIn

setFadeIn(fadeIn: boolean): void

是否开启瓦片图层淡入。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.3(15)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 5.0.3(15)

参数：

| **参数名** | **类型** | 必填 | **说明** |
| --- | --- | --- | --- |
| fadeIn | boolean | 是 | 是否开启瓦片图层淡入。 - true：开启瓦片图层淡入。 - false：不开启瓦片图层淡入。 |

示例：

```
tileOverlay.setFadeIn(false);
```

#### [h2]setTransparency

setTransparency(transparency: number): void

设置瓦片图层的透明度。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.3(15)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 5.0.3(15)

参数：

| **参数名** | **类型** | 必填 | **说明** |
| --- | --- | --- | --- |
| transparency | number | 是 | 瓦片图层的透明度。取值范围：[0, 1]。0表示不透明，1表示全透明，异常值不处理。 |

示例：

```
tileOverlay.setTransparency(0.5);
```

#### [h2]getFadeIn

getFadeIn(): boolean

返回是否开启瓦片图层淡入。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.3(15)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 5.0.3(15)

返回值：

| 类型 | 说明 |
| --- | --- |
| boolean | 返回是否开启瓦片图层淡入。 - true：已开启瓦片图层淡入。 - false：未开启瓦片图层淡入。 |

示例：

```
let isFadeIn: boolean = tileOverlay.getFadeIn();
```

#### [h2]getTransparency

getTransparency(): number

返回瓦片图层的透明度。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本5.0.3(15)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 5.0.3(15)

返回值：

| 类型 | 说明 |
| --- | --- |
| number | 返回瓦片图层的透明度。取值范围：[0, 1]，0表示不透明，1表示全透明。 |

示例：

```
let transparency: number = tileOverlay.getTransparency();
```

#### [h2]clearDiskCache

clearDiskCache(): Promise<void>

清除磁盘缓存，内存缓存也会被清除。使用Promise异步回调。

模型约束： 此接口仅可在Stage模型下使用。

元服务API： 从版本6.0.0(20)开始，该接口支持在元服务中使用。

系统能力： SystemCapability.Map.Core

起始版本： 6.0.0(20)

返回值：

| 类型 | 说明 |
| --- | --- |
| Promise | Promise对象。无返回结果的Promise对象。 |

示例：

```
tileOverlay.clearDiskCache();
```
