---

title: "模块描述"
upstream_id: "harmonyos-references/map-module-desc"
catalog: "harmonyos-references"
synced_at: "2026-07-09T01:01:23.906129"
content_hash: "976d3a7278fc"
---


# 模块描述

Map Kit支持显示地图、在地图上绘制各类覆盖物（标记、折线、弧线、多边形、圆形等）、添加动画效果、处理地图交互事件、更新地图状态等。

典型使用场景：

- 在应用界面中嵌入互动式地图
- 展示地理位置标记和路线信息
- 实现基于位置的服务（LBS）功能
- 创建室内地图导航体验

#### 关键Class/Interface介绍

#### [h2]核心组件

| Class/Interface | 说明 |
| --- | --- |
| **[MapComponent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-mapcomponent)** | 地图UI组件，通过回调返回MapComponentController |
| **[MapComponentController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcomponentcontroller)** | 地图主控制器，所有地图操作的主入口 |
| **[MapEventManager](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapeventmanager)** | 地图事件监听管理器 |
| **[BaseOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-baseoverlay)** | 覆盖物基础类，所有覆盖物继承自此类 |

#### [h2]覆盖物体系

| Class/Interface | 说明 |
| --- | --- |
| **[Marker](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-marker)** | 标记 |
| **[MapPolyline](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mappolyline)** | 折线 |
| **[MapArc](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-maparc)** | 弧线 |
| **[MapPolygon](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mappolygon)** | 多边形 |
| **[MapCircle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mapcircle)** | 圆形 |
| **[PointAnnotation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-pointannotation)** | 点注释 |
| **[Bubble](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-bubble)** | 气泡 |
| **[ClusterOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-clusteroverlay)** | 点聚合 |
| **[ImageOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-imageoverlay)** | 图片覆盖物 |
| **[BuildingOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-buildingoverlay)** | 3D建筑 |
| **[TraceOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-traceoverlay)** | 动态轨迹 |
| **[TileOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-tileoverlay)** | 瓦片图层 |
| **[Heatmap](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-heatmap)** | 热力图 |
| **[MvtOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-mvtoverlay)** | 矢量图层 |
| **[FlowFieldOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-flowfieldoverlay)** | 流场图层 |
| **[MassPointOverlay](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-masspointoverlay)** | 海量点图层 |

#### [h2]动画体系

| Class/Interface | 说明 |
| --- | --- |
| **[Animation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-animation)** | 动画抽象基类 |
| **[AlphaAnimation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-alphaanimation)** | 透明度动画 |
| **[RotateAnimation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-rotateanimation)** | 旋转动画 |
| **[ScaleAnimation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-scaleanimation)** | 缩放动画 |
| **[TranslateAnimation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-translateanimation)** | 位移动画 |
| **[FontSizeAnimation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-fontsizeanimation)** | 字体大小动画 |
| **[PlayImageAnimation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-playimageanimation)** | 帧动画 |
| **[AnimationSet](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-animationset)** | 动画集合 |

#### [h2]数据模型

| Class/Interface | 说明 |
| --- | --- |
| **[MapOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#mapoptions)** | 地图初始化参数 |
| **[LatLng](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlng)** | 经纬度坐标 |
| **[CameraPosition](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#cameraposition)** | 相机位置状态 |
| **[LatLngBounds](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlngbounds)** | 经纬度边界矩形 |

#### API组合使用关系说明

#### [h2]地图初始化与显示

使用MapComponent显示地图需要完成以下步骤：

```
// 1. 导入模块
import { map, mapCommon, MapComponent } from '@kit.MapKit';

// 2. 创建地图初始化参数
let mapOptions: mapCommon.MapOptions = {
  position: {
    target: { latitude: 39.9, longitude: 116.4 },
    zoom: 10
  }
};

// 3. 定义回调函数获取MapComponentController
let mapCallback = async (err, mapController) => {
  if (!err) {
    // 获取控制器成功后，可进行后续操作
    let mapController = mapController;
    let mapEventManager = mapController.getEventManager();
  }
};

// 4. 在UI中使用MapComponent
MapComponent({
  mapOptions: mapOptions,
  mapCallback: mapCallback
})
```

#### [h2]添加覆盖物流程

```
// 1. 创建覆盖物配置参数
let markerOptions: mapCommon.MarkerOptions = {
  position: { latitude: 39.9, longitude: 116.4 },
  clickable: true,
  title: "标记标题"
};

// 2. 通过MapComponentController添加覆盖物
let marker = await mapController.addMarker(markerOptions);

// 3. 可对覆盖物进行进一步操作
marker.setTitle("新标题");
marker.showInfoWindow();
```

#### [h2]地图动画与交互

```
// 1. 获取MapEventManager
let mapEventManager = mapController.getEventManager();

// 2. 订阅地图事件
mapEventManager.on("mapLoad", () => {
  console.info("地图加载完成");
});

// 3. 创建CameraUpdate并执行动画
let cameraUpdate = map.newCameraPosition({
  target: { latitude: 40.0, longitude: 117.0 },
  zoom: 12
});
mapController.animateCamera(cameraUpdate, 1000);
```

#### [h2]动画使用

```
// 1. 创建动画实例
let animation = new map.RotateAnimation(0, 270);

// 2. 配置动画参数
animation.setDuration(2000);
animation.setRepeatCount(map.AnimationRepeatMode.RESTART);

// 3. 订阅动画事件
animation.on("animationStart", () => {});
animation.on("animationEnd", () => {});

// 4. 对覆盖物应用动画
marker.startAnimation(animation);
```
