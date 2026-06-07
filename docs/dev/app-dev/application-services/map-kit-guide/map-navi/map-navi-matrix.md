---
displayed_sidebar: appDevSidebar
title: "批量算路"
original_url: /docs/dev/app-dev/application-services/map-kit-guide/map-navi/map-navi-matrix
format: md
---


## 场景介绍

多个起点到多个终点的批量算路功能，在驾车、步行、骑行模式下，快速批量计算多个起点分别到多个终点的路线距离和耗时。

## 接口说明

以下是路径规划功能相关接口，主要由[navi](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api)命名空间下的方法提供，更多接口及使用方法请参见[接口文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api)。

| 接口名 | 描述 |
| --- | --- |
| [getDrivingMatrix](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#getdrivingmatrix)(params: [DrivingMatrixParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#drivingmatrixparams)): Promise[MatrixResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixresult) | 驾车批量算路。 |
| [getDrivingMatrix](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#getdrivingmatrix-1)(context: [common.Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context), params: [DrivingMatrixParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#drivingmatrixparams)): Promise[MatrixResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixresult) | 驾车批量算路。支持传入Context上下文。 |
| [getWalkingMatrix](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#getwalkingmatrix)(params: [MatrixParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixparams)): Promise[MatrixResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixresult) | 步行批量算路。 |
| [getWalkingMatrix](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#getwalkingmatrix-1)(context: [common.Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context), params: [MatrixParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixparams)): Promise[MatrixResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixresult) | 步行批量算路。支持传入Context上下文。 |
| [getCyclingMatrix](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#getcyclingmatrix)(params: [MatrixParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixparams)): Promise[MatrixResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixresult) | 骑行批量算路。 |
| [getCyclingMatrix](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#getcyclingmatrix-1)(context: [common.Context](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-inner-application-context), params: [MatrixParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixparams)): Promise[MatrixResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixresult) | 骑行批量算路。支持传入Context上下文。 |
| [DrivingMatrixParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#drivingmatrixparams) | 驾车批量算路的参数。 |
| [MatrixParams](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixparams) | 步行、骑行批量算路的参数。 |
| [MatrixResult](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/map-navi-api#matrixresult) | 批量算路的结果。 |

## 开发步骤

导入相关模块。

```
import { navi } from '@kit.MapKit';
import { BusinessError } from '@kit.BasicServicesKit';
```

### 驾车批量算路

根据多组起终点坐标批量检索符合条件的驾车路径规划方案。支持以下功能：

* 支持未来出行规划。
* 支持根据实时路况进行合理路线规划。
* 支持多种路线偏好选择，如时间最短、避免经过收费的公路、避开高速公路、距离优先等。

![](./img/14daf575.png)

为保证性能与准确性，单次请求中的起点数量乘以终点数量应小于100。

```
async testDrivingMatrix() {
  let params: navi.DrivingMatrixParams = {
    // 起点的经纬度
    origins: [{
      latitude: 31.9844,
      longitude: 118.766253
    }, {
      latitude: 31.9644,
      longitude: 118.746253
    }],
    // 终点的经纬度
    destinations: [{
      latitude: 31.9344,
      longitude: 118.706253
    }],
    // 时间预估模型
    trafficMode: 2,
    language: 'zh_CN'
  };
  try {
    const result = await navi.getDrivingMatrix(params);
    console.info(`Succeeded in getting driving matrix. result is ${JSON.stringify(result)}`);
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    console.error(`Failed in getting driving matrix. Code is ${err.code}, message is ${err.message}`);
  }
}
```

### 步行批量算路

根据多组起终点坐标批量检索符合条件的步行路径规划方案。支持以下功能：

* 支持150km以内的步行路径规划能力。
* 融入出行策略（时间最短、避免轮渡）。

![](./img/d45617f3.png)

为保证性能与准确性，单次请求中的起点数量乘以终点数量应小于100。

```
async testWalkingMatrix() {
  let params: navi.MatrixParams = {
    // 起点的经纬度
    origins: [
      {
        latitude: 31.9844,
        longitude: 118.766253
      }, {
      latitude: 31.9644,
      longitude: 118.746253
    }],
    // 终点的经纬度
    destinations: [{
      latitude: 31.9344,
      longitude: 118.706253
    }],
    language: 'zh_CN'
  };
  try {
    const result = await navi.getWalkingMatrix(params);
    console.info(`Succeeded in getting walking matrix. result is ${JSON.stringify(result)}`);
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    console.error(`Failed in getting walking matrix. Code is ${err.code}, message is ${err.message}`);
  }
}
```

### 骑行批量算路

根据多组起终点坐标批量检索符合条件的骑行路径规划方案。支持以下功能：

* 支持500km以内的骑行路径规划能力。
* 融入出行策略（时间最短、避免轮渡）。

![](./img/59771959.png)

为保证性能与准确性，单次请求中的起点数量乘以终点数量应小于100。

```
async testCyclingMatrix() {
  let params: navi.MatrixParams = {
    // 起点的经纬度
    origins: [{
      latitude: 31.9844,
      longitude: 118.766253
    }, {
      latitude: 31.9644,
      longitude: 118.746253
    }],
    // 终点的经纬度
    destinations: [{
      latitude: 31.9344,
      longitude: 118.706253
    }],
    language: 'zh_CN'
  };
  try {
    const result = await navi.getCyclingMatrix(params);
    console.info(`Succeeded in getting cycling matrix. result is ${JSON.stringify(result)}`);
  } catch (error) {
    const err: BusinessError = error as BusinessError;
    console.error(`Failed in getting cycling matrix. Code is ${err.code}, message is ${err.message}`);
  }
}
```
