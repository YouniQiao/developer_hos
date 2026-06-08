---
displayed_sidebar: appDevSidebar
title: "距离计算"
original_url: /docs/dev/app-dev/application-services/map-kit-guide/map-calculation-tool/map-calculate-distance
format: md
upstream_id: dev/app-dev/application-services/map-kit-guide/map-calculation-tool/map-calculate-distance
last_sync: 2026-06-07
sync_hash: 5f9f1079
---
## 场景介绍

根据用户指定的两个经纬度坐标点，计算这两个点间的直线距离，单位为米。

## 接口说明

以下是距离计算功能相关接口，主要由[map](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-module-desc)命名空间下的[calculateDistance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-functions#calculatedistance)方法提供，更多接口及使用方法请参见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-functions#calculatedistance)。

| 接口名 | 描述 |
| --- | --- |
| [mapCommon.LatLng](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlng) | 经纬度对象。 |
| [calculateDistance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-functions#calculatedistance)(from: [mapCommon.LatLng](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlng), to: [mapCommon.LatLng](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-common#latlng)): number | 计算坐标点之间的距离。 |

## 开发步骤

1. 导入相关模块。

   ```
   import { map, mapCommon } from '@kit.MapKit';
   ```
2. 初始化需要计算的坐标，调用[calculateDistance](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-map-functions#calculatedistance)方法计算距离。

   ```
   let fromLatLng: mapCommon.LatLng = {
     latitude: 38,
     longitude: 118
   };
   let toLatLng: mapCommon.LatLng = {
     latitude: 39,
     longitude: 119
   };
   // 计算坐标点之间的距离
   let distance = map.calculateDistance(fromLatLng, toLatLng);
   ```
