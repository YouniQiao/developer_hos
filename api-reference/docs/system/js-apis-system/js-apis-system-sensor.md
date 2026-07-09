---
title: "@system.sensor (传感器)"
upstream_id: "harmonyos-references/js-apis-system-sensor"
catalog: "harmonyos-references"
content_hash: "3aa9a61e8f16"
synced_at: "2026-07-09T01:00:00.374445"
---

# @system.sensor (传感器)

sensor模块提供订阅传感器数据基本能力，主要包含查询传感器的列表、订阅/取消传感器的数据、执行控制命令等。

根据传感器的用途，可以将传感器分为六大类：运动类传感器、环境类传感器、方向类传感器、光线类传感器、健康类传感器、其他类传感器（如霍尔传感器），每一大类传感器包含不同类型的传感器，某种类型的传感器可能是单一的物理传感器，也可能是由多个物理传感器复合而成。

![](./img/note_3.0-zh-cn.png)

- 模块维护策略：对于Lite Wearable设备类型，该模块长期维护，正常使用。
- 对于支持该模块的其他设备类型，该模块从API version 8开始不再维护，建议使用新接口[@ohos.sensor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor)替代。

本模块首批接口从API version 3开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。该功能使用需要对应硬件支持，仅支持真机调试。

#### 导入模块

```
import { Sensor } from '@kit.SensorServiceKit';
```

#### Sensor

#### [h2]Sensor.subscribeAccelerometer

static subscribeAccelerometer(options: subscribeAccelerometerOptions): void

观察加速度数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[ACCELEROMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoronsensortypesensor_type_id_accelerometerdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

需要权限：ohos.permission.ACCELEROMETER，该权限为系统权限

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [subscribeAccelerometerOptions](#subscribeaccelerometeroptions) | 是 | 监听加速度传感器数据的回调函数的执行频率。 |

ArkTS示例：

```
import { Sensor, AccelerometerResponse, subscribeAccelerometerOptions } from '@kit.SensorServiceKit';

let accelerometerOptions: subscribeAccelerometerOptions = {
  interval: 'normal',
  success: (ret: AccelerometerResponse) => {
    console.info('Succeeded in subscribing. X-axis data: ' + ret.x);
    console.info('Succeeded in subscribing. Y-axis data: ' + ret.y);
    console.info('Succeeded in subscribing. Z-axis data: ' + ret.z);
  },
  fail: (data: string, code: number) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
Sensor.subscribeAccelerometer(accelerometerOptions);
```
 JS示例：

```
import Sensor from '@system.sensor';

let subscribeAccelerometerOptions = {
  interval: 'normal',
  success: (ret) => {
    console.info('Succeeded in subscribing. X-axis data: ' + ret.x);
    console.info('Succeeded in subscribing. Y-axis data: ' + ret.y);
    console.info('Succeeded in subscribing. Z-axis data: ' + ret.z);
  },
  fail: (data, code) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
Sensor.subscribeAccelerometer(subscribeAccelerometerOptions);
```
 
```
<!-- xxx.hml -->
<div class="container">
  <text class="title">
    {{ title }}
  </text>
  <text class="TextArea">{{ TextContent }}</text>
  <picker-view type="text" range="{{ sensorList }}" selected="
    {{ defaultSelect }}" @change="pickerOnchange" class="pickerText">
  </picker-view>
  <div class="BUTTON">
    <input class="buttonText" type="button" onclick="subscribe">订阅</input>
    <text class="EmptyText"></text>
    <input class="buttonText" type="button" onclick="unsubscribe">取消订阅</input>
  </div>
</div>
```
 
```
/* xxx.css */
.container {
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: #F1F3F5;
}
.title {
  font-size: 20px;
  text-align: center;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  color: black;
}
.pickerText {
  width: 100%;
  height: 60px;
  margin-bottom: 30px;
  margin-top: 30px;
  selected-color: black;
}
.EmptyText {
  width: 30px;
  margin-left: 20px;
}
.TextArea {
  background-color: white;
  border-radius: 0px;
  color: black;
  height: 100px;
  width: 100%;
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 10px;
  align-content: center;
  align-items: center;
  text-align: center;
}
.buttonText {
  background-color: blue;
  radius: 30px;
  text-color: white;
  font-size: 25px;
  width: 100px;
  height: 100%;
  margin-top: 5px;
  margin-left: 80px;
  font-weight: bolder;
}
.BUTTON {
  width: 100%;
  height: 60px;
  margin-bottom: 5px;
  margin-top: 5px;
}
```
 
```
// xxx.js
import sensor from '@system.sensor';

export default {
  data: {
    TAG: "WearLiteSample:",
    title: "LiteWearableDemo",
    TextContent: "AAA",
    sensorList: ['ACCELEROMETER', 'MAGNETIC_FIELD', 'PROXIMITY',
      'AMBIENT_LIGHT', 'PEDOMETER', 'BAROMETER',
      'HEART_RATE', 'WEAR_DETECTION', 'ORIENTATION', 'GYROSCOPE', 'getOnBodyState'],
    defaultSelect: '',
    currentSelect: 'ACCELEROMETER'
  },

  onInit() {
    this.defaultSelect = 'ACCELEROMETER';
  },

  pickerOnchange(e) {
    console.info(this.TAG + 'current selected:' + e.newValue);
    this.currentSelect = e.newValue;
  },

  subscribe() {
    try {
      switch (this.currentSelect) {
        case "ACCELEROMETER":
          let subscribeAccelerometerOptions = {
            interval: 'normal',
            success: (ret) => {
              console.info(this.TAG + 'Succeeded in subscribing. X-axis data: ' + ret.x);
              console.info(this.TAG + 'Succeeded in subscribing. Y-axis data: ' + ret.y);
              console.info(this.TAG + 'Succeeded in subscribing. Z-axis data: ' + ret.z);
              this.TextContent = JSON.stringify(ret);
            },
            fail: (data, code) => {
              console.error(this.TAG + `Failed to subscribe. Code: ${code}, data: ${data}`);
            },
          };
          sensor.subscribeAccelerometer(subscribeAccelerometerOptions);
          break;
        case "MAGNETIC_FIELD":
          let subscribeCompassOptions = {
            success: (ret) => {
              console.info(this.TAG + 'Succeeded in subscribing. Get data direction:' + ret.direction);
              this.TextContent = JSON.stringify(ret);
            },
            fail: (data, code) => {
              console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
            },
          };
          sensor.subscribeCompass(subscribeCompassOptions);
          break;
        case "PROXIMITY":
          let subscribeProximityOptions = {
            success: (ret) => {
              console.info(this.TAG + 'Succeeded in subscribing. Get data distance:' + ret.distance);
              this.TextContent = JSON.stringify(ret);
            },
            fail: (data, code) => {
              console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
            },
          };
          sensor.subscribeProximity(subscribeProximityOptions);
          break;
        case "AMBIENT_LIGHT":
          let subscribeLightOptions = {
            success: (ret) => {
              console.info(this.TAG + 'Succeeded in subscribing. Get data intensity:' + ret.intensity);
              this.TextContent = JSON.stringify(ret);
            },
            fail: (data, code) => {
              console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
            },
          };
          sensor.subscribeLight(subscribeLightOptions);
          break;
        case "PEDOMETER":
          let subscribeStepCounterOptions = {
            success: (ret) => {
              console.info(this.TAG + 'Succeeded in subscribing. Get step value:' + ret.steps);
              this.TextContent = JSON.stringify(ret);
            },
            fail: (data, code) => {
              console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
            },
          };
          sensor.subscribeStepCounter(subscribeStepCounterOptions);
          break;
        case "BAROMETER":
          let subscribeBarometerOptions = {
            success: (ret) => {
              console.info(this.TAG + 'Succeeded in subscribing. Get data value:' + ret.pressure);
              this.TextContent = JSON.stringify(ret);
            },
            fail: (data, code) => {
              console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
            },
            };
            sensor.subscribeBarometer(subscribeBarometerOptions);
            break;
        case "HEART_RATE":
          let subscribeHeartRateOptions = {
            success: (ret) => {
              console.info(this.TAG + 'Succeeded in subscribing. Get heartRate value:' + ret.heartRate);
              this.TextContent = JSON.stringify(ret);
            },
            fail: (data, code) => {
              console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
            },
          };
          sensor.subscribeHeartRate(subscribeHeartRateOptions);
          break;
        case "WEAR_DETECTION":
          let subscribeOnBodyStateOptions = {
            success: (ret) => {
              console.info(this.TAG + 'Succeeded in subscribing. Get on-body state value:' + ret.value);
              this.TextContent = JSON.stringify(ret);
            },
            fail: (data, code) => {
              console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
            },
          };
          sensor.subscribeOnBodyState(subscribeOnBodyStateOptions);
          break;
        case "ORIENTATION":
          let subscribeDeviceOrientationOptions = {
            interval: 'normal',
            success: (ret) => {
              console.info(this.TAG + 'Succeeded in subscribing. Alpha data: ' + ret.alpha);
              console.info(this.TAG + 'Succeeded in subscribing. Beta data: ' + ret.beta);
              console.info(this.TAG + 'Succeeded in subscribing. Gamma data: ' + ret.gamma);
              this.TextContent = JSON.stringify(ret);
            },
            fail: (data, code) => {
              console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
            }
          };
          sensor.subscribeDeviceOrientation(subscribeDeviceOrientationOptions);
          break;
        case "GYROSCOPE":
          let subscribeGyroscopeOptions = {
            interval: 'normal',
            success: (ret) => {
              console.info(this.TAG + 'Succeeded in subscribing. X-axis data: ' + ret.x);
              console.info(this.TAG + 'Succeeded in subscribing. Y-axis data: ' + ret.y);
              console.info(this.TAG + 'Succeeded in subscribing. Z-axis data: ' + ret.z);
              this.TextContent = JSON.stringify(ret);
            },
            fail: (data, code) => {
              console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
            }
          };
          sensor.subscribeGyroscope(subscribeGyroscopeOptions);
          break;
        case "getOnBodyState":
          let getOnBodyStateOptions = {
            success: (ret) => {
              console.info(this.TAG + 'Succeeded in subscribing. On body state: ' + ret.value);
              this.TextContent = JSON.stringify(ret);
            },
            fail: (data, code) => {
              console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
            },
          };
          sensor.getOnBodyState(getOnBodyStateOptions);
          break;
      }
    } catch (e) {
      console.error(this.TAG + `subscribe exception occurred, code: ${e.code}, message: ${e.message}`)
    }
  },

  unsubscribe() {
    try {
      switch (this.currentSelect) {
        case "ACCELEROMETER":
          sensor.unsubscribeAccelerometer();
          break;
        case "MAGNETIC_FIELD":
          sensor.unsubscribeCompass();
          break;
        case "PROXIMITY":
          sensor.unsubscribeProximity()
          break;
        case "AMBIENT_LIGHT":
          sensor.unsubscribeLight()
          break;
        case "PEDOMETER":
          sensor.unsubscribeStepCounter()
          break;
        case "BAROMETER":
          sensor.unsubscribeBarometer();
          break;
        case "HEART_RATE":
          sensor.unsubscribeHeartRate()
          break;
        case "WEAR_DETECTION":
          sensor.unsubscribeOnBodyState()
          break;
        case "ORIENTATION":
          sensor.unsubscribeDeviceOrientation();
          break;
        case "GYROSCOPE":
          sensor.unsubscribeGyroscope();
          break;
        }
        this.TextContent = ""
    } catch (e) {
        console.error(this.TAG + `unsubscribe exception occurred, code: ${e.code}, message: ${e.message}`)
    }
  }
}
```
 ![](./img/note_3.0-zh-cn.png) 建议在页面销毁时，即onDestroy回调中，取消数据订阅，避免不必要的性能开销。

#### [h2]Sensor.unsubscribeAccelerometer

unsubscribeAccelerometer(): void

取消订阅加速度数据。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[ACCELEROMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoroffsensortypesensor_type_id_accelerometerdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

需要权限：ohos.permission.ACCELEROMETER，该权限为系统权限

ArkTS示例：

```
Sensor.unsubscribeAccelerometer();
```
 JS示例：

```
Sensor.unsubscribeAccelerometer();
```

#### [h2]Sensor.subscribeCompass

static subscribeCompass(options: SubscribeCompassOptions): void

订阅罗盘数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[ORIENTATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoronsensortypesensor_type_id_orientationdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [SubscribeCompassOptions](#subscribecompassoptions) | 是 | 当罗盘传感器数据发生变化时调用。 |

ArkTS示例：

```
import { Sensor, CompassResponse, SubscribeCompassOptions } from '@kit.SensorServiceKit';

let subscribeCompassOptions: SubscribeCompassOptions = {
  success: (ret: CompassResponse) => {
    console.info('Succeeded in subscribing. Get data direction:' + ret.direction);
  },
  fail: (data: string, code: number) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
Sensor.subscribeCompass(subscribeCompassOptions);
```
 JS示例：

```
import Sensor from '@system.sensor';

let subscribeCompassOptions = {
  success: (ret) => {
    console.info('Succeeded in subscribing. Get data direction:' + ret.direction);
  },
  fail: (data, code) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
Sensor.subscribeCompass(subscribeCompassOptions);
```
 ![](./img/note_3.0-zh-cn.png) 建议在页面销毁时，即onDestroy回调中，取消数据订阅，避免不必要的性能开销。

#### [h2]Sensor.unsubscribeCompass

static unsubscribeCompass(): void

取消订阅罗盘。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[ORIENTATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoroffsensortypesensor_type_id_orientationdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

ArkTS示例：

```
Sensor.unsubscribeCompass();
```
 JS示例：

```
Sensor.unsubscribeCompass();
```

#### [h2]Sensor.subscribeProximity

static subscribeProximity(options: SubscribeProximityOptions): void

订阅距离感应数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[PROXIMITY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoronsensortypesensor_type_id_proximitydeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [SubscribeProximityOptions](#subscribeproximityoptions) | 是 | 当距离传感器数据发生变化时调用。 |

ArkTS示例：

```
import { Sensor, ProximityResponse, SubscribeProximityOptions } from '@kit.SensorServiceKit';

let subscribeProximityOptions: SubscribeProximityOptions = {
  success: (ret: ProximityResponse) => {
    console.info('Succeeded in subscribing. Get data distance:' + ret.distance);
  },
  fail: (data: string, code: number) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
Sensor.subscribeProximity(subscribeProximityOptions);
```
 JS示例：

```
import Sensor from '@system.sensor';

let subscribeProximityOptions = {
  success: (ret) => {
    console.info('Succeeded in subscribing. Get data distance:' + ret.distance);
  },
  fail: (data, code) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
sensor.subscribeProximity(subscribeProximityOptions);
```
 ![](./img/note_3.0-zh-cn.png) 建议在页面销毁时，即onDestroy回调中，取消数据订阅，避免不必要的性能开销。

#### [h2]Sensor.unsubscribeProximity

static unsubscribeProximity(): void

取消订阅距离感应。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[PROXIMITY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoroffsensortypesensor_type_id_proximitydeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

ArkTS示例：

```
Sensor.unsubscribeProximity();
```
 JS示例：

```
Sensor.unsubscribeProximity();
```

#### [h2]Sensor.subscribeLight

static subscribeLight(options: SubscribeLightOptions): void

订阅环境光线感应数据变化。再次调用时，会覆盖前一次调用效果，即仅最后一次调用生效。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[AMBIENT_LIGHT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoronsensortypesensor_type_id_ambient_lightdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [SubscribeLightOptions](#subscribelightoptions) | 是 | 当环境光传感器数据发生变化时调用。 |

ArkTS示例：

```
import { Sensor, LightResponse, SubscribeLightOptions } from '@kit.SensorServiceKit';

let subscribeLightOptions: SubscribeLightOptions = {
  success: (ret: LightResponse) => {
    console.info('Succeeded in subscribing. Get data intensity:' + ret.intensity);
  },
  fail: (data: string, code: number) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
Sensor.subscribeLight(subscribeLightOptions);
```
 JS示例：

```
import Sensor from '@system.sensor';

let subscribeLightOptions = {
  success: (ret) => {
    console.info('Succeeded in subscribing. Get data intensity:' + ret.intensity);
  },
  fail: (data, code) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
sensor.subscribeLight(subscribeLightOptions);
```
 ![](./img/note_3.0-zh-cn.png) 建议在页面销毁时，即onDestroy回调中，取消数据订阅，避免不必要的性能开销。

#### [h2]Sensor.unsubscribeLight

static unsubscribeLight(): void

取消订阅环境光线感应。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[AMBIENT_LIGHT](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoroffsensortypesensor_type_id_ambient_lightdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

ArkTS示例：

```
Sensor.unsubscribeLight();
```
 JS示例：

```
Sensor.unsubscribeLight();
```

#### [h2]Sensor.subscribeStepCounter

static subscribeStepCounter(options: SubscribeStepCounterOptions): void

订阅计步传感器数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[PEDOMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoronsensortypesensor_type_id_pedometerdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

需要权限：ohos.permission.ACTIVITY_MOTION

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [SubscribeStepCounterOptions](#subscribestepcounteroptions) | 是 | 当步进计数器传感器数据发生变化时调用。 |

ArkTS示例：

```
import { Sensor, StepCounterResponse, SubscribeStepCounterOptions } from '@kit.SensorServiceKit';

let subscribeStepCounterOptions: SubscribeStepCounterOptions = {
  success: (ret: StepCounterResponse) => {
    console.info('Succeeded in subscribing. Get step value:' + ret.steps);
  },
  fail: (data: string, code: number) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
Sensor.subscribeStepCounter(subscribeStepCounterOptions);
```
 JS示例：

```
import Sensor from '@system.sensor';

let subscribeStepCounterOptions = {
  success: (ret) => {
    console.info('Succeeded in subscribing. Get step value:' + ret.steps);
  },
  fail: (data, code) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
sensor.subscribeStepCounter(subscribeStepCounterOptions);
```
 ![](./img/note_3.0-zh-cn.png) 建议在页面销毁时，即onDestroy回调中，取消数据订阅，避免不必要的性能开销。

#### [h2]Sensor.unsubscribeStepCounter

static unsubscribeStepCounter(): void

取消订阅计步传感器。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[PEDOMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoroffsensortypesensor_type_id_pedometerdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

需要权限：ohos.permission.ACTIVITY_MOTION

ArkTS示例：

```
Sensor.unsubscribeStepCounter();
```
 JS示例：

```
Sensor.unsubscribeStepCounter();
```

#### [h2]Sensor.subscribeBarometer

static subscribeBarometer(options: SubscribeBarometerOptions): void

订阅气压计传感器数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[BAROMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoronsensortypesensor_type_id_barometerdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [SubscribeBarometerOptions](#subscribebarometeroptions) | 是 | 当气压计传感器数据发生变化时调用。 |

ArkTS示例：

```
import { Sensor, BarometerResponse, SubscribeBarometerOptions } from '@kit.SensorServiceKit';

let subscribeBarometerOptions: SubscribeBarometerOptions = {
  success: (ret: BarometerResponse) => {
    console.info('Succeeded in subscribing. Get data value:' + ret.pressure);
  },
  fail: (data: string, code: number) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
Sensor.subscribeBarometer(subscribeBarometerOptions);
```
 JS示例：

```
import Sensor from '@system.sensor';

let subscribeBarometerOptions = {
  success: (ret) => {
    console.info('Succeeded in subscribing. Get data value:' + ret.pressure);
  },
  fail: (data, code) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
sensor.subscribeBarometer(subscribeBarometerOptions);
```
 ![](./img/note_3.0-zh-cn.png) 建议在页面销毁时，即onDestroy回调中，取消数据订阅，避免不必要的性能开销。

#### [h2]Sensor.unsubscribeBarometer

static unsubscribeBarometer(): void

取消订阅气压计传感器。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[BAROMETER](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoroffsensortypesensor_type_id_barometerdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

ArkTS示例：

```
Sensor.unsubscribeBarometer();
```
 JS示例：

```
Sensor.unsubscribeBarometer();
```

#### [h2]Sensor.subscribeHeartRate

static subscribeHeartRate(options: SubscribeHeartRateOptions): void

订阅心率传感器数据变化。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[HEART_RATE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoronsensortypesensor_type_id_heart_ratedeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

需要权限：ohos.permission.READ_HEALTH_DATA

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [SubscribeHeartRateOptions](#subscribeheartrateoptions) | 是 | 当心率传感器数据发生变化时调用。 |

ArkTS示例：

```
import { Sensor, HeartRateResponse, SubscribeHeartRateOptions } from '@kit.SensorServiceKit';

let subscribeHeartRateOptions: SubscribeHeartRateOptions = {
  success: (ret: HeartRateResponse) => {
    console.info('Succeeded in subscribing. Get heartRate value:' + ret.heartRate);
  },
  fail: (data: string, code: number) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
Sensor.subscribeHeartRate(subscribeHeartRateOptions);
```
 JS示例：

```
import Sensor from '@system.sensor';

let subscribeHeartRateOptions = {
  success: (ret) => {
    console.info('Succeeded in subscribing. Get heartRate value:' + ret.heartRate);
  },
  fail: (data, code) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
sensor.subscribeHeartRate(subscribeHeartRateOptions);
```
 ![](./img/note_3.0-zh-cn.png) 建议在页面销毁时，即onDestroy回调中，取消数据订阅，避免不必要的性能开销。

#### [h2]Sensor.unsubscribeHeartRate

static unsubscribeHeartRate(): void

取消订阅心率传感器。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[HEART_RATE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoroffsensortypesensor_type_id_heart_ratedeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

需要权限：ohos.permission.READ_HEALTH_DATA

ArkTS示例：

```
Sensor.unsubscribeHeartRate();
```
 JS示例：

```
Sensor.unsubscribeHeartRate();
```

#### [h2]Sensor.subscribeOnBodyState

static subscribeOnBodyState(options: SubscribeOnBodyStateOptions): void

订阅设备佩戴状态。针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[WEAR_DETECTION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoronsensortypesensor_type_id_wear_detectiondeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [SubscribeOnBodyStateOptions](#subscribeonbodystateoptions) | 是 | 当穿着状态改变时调用。 |

ArkTS示例：

```
import { Sensor, OnBodyStateResponse, SubscribeOnBodyStateOptions } from '@kit.SensorServiceKit';

let subscribeOnBodyStateOptions: SubscribeOnBodyStateOptions = {
  success: (ret: OnBodyStateResponse) => {
    console.info('Succeeded in subscribing. Get on-body state value:' + ret.value);
  },
  fail: (data: string, code: number) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
Sensor.subscribeOnBodyState(subscribeOnBodyStateOptions);
```
 JS示例：

```
import Sensor from '@system.sensor';

let subscribeOnBodyStateOptions = {
  success: (ret) => {
    console.info('Succeeded in subscribing. Get on-body state value:' + ret.value);
  },
  fail: (data, code) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
sensor.subscribeOnBodyState(subscribeOnBodyStateOptions);
```
 ![](./img/note_3.0-zh-cn.png) 建议在页面销毁时，即onDestroy回调中，取消数据订阅，避免不必要的性能开销。

#### [h2]Sensor.unsubscribeOnBodyState

static unsubscribeOnBodyState(): void

取消订阅设备佩戴状态。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[WEAR_DETECTION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoroffsensortypesensor_type_id_wear_detectiondeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

ArkTS示例：

```
Sensor.unsubscribeOnBodyState();
```
 JS示例：

```
Sensor.unsubscribeOnBodyState();
```

#### [h2]Sensor.getOnBodyState

static getOnBodyState(options: GetOnBodyStateOptions): void

获取设备佩戴状态。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[WEAR_DETECTION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoronsensortypesensor_type_id_wear_detectiondeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [GetOnBodyStateOptions](#getonbodystateoptions) | 是 | 获取传感器所在设备穿戴状态时调用。 |

ArkTS示例：

```
import { Sensor, OnBodyStateResponse, GetOnBodyStateOptions } from '@kit.SensorServiceKit';

let getOnBodyStateOptions: GetOnBodyStateOptions = {
  success: (ret: OnBodyStateResponse) => {
    console.info('Succeeded in subscribing. On body state: ' + ret.value);
  },
  fail: (data: string, code: number) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
Sensor.getOnBodyState(getOnBodyStateOptions);
```
 JS示例：

```
import Sensor from '@system.sensor';

let getOnBodyStateOptions = {
  success: (ret) => {
    console.info('Succeeded in subscribing. On body state: ' + ret.value);
  },
  fail: (data, code) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  },
};
sensor.getOnBodyState(getOnBodyStateOptions);
```

#### [h2]Sensor.subscribeDeviceOrientation6+

static subscribeDeviceOrientation(options: SubscribeDeviceOrientationOptions): void

观察设备方向传感器数据变化。

针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效；针对同一个方法内，不支持多次调用。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[ORIENTATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoronsensortypesensor_type_id_orientationdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [SubscribeDeviceOrientationOptions](#subscribedeviceorientationoptions6) | 是 | 用于监听设备方向传感器数据的回调函数的执行频率。 |

ArkTS示例：

```
import { Sensor, DeviceOrientationResponse, SubscribeDeviceOrientationOptions } from '@kit.SensorServiceKit';

let subscribeDeviceOrientationOptions: SubscribeDeviceOrientationOptions = {
  interval: 'normal',
  success: (ret: DeviceOrientationResponse) => {
    console.info('Succeeded in subscribing. Alpha data: ' + ret.alpha);
    console.info('Succeeded in subscribing. Beta data: ' + ret.beta);
    console.info('Succeeded in subscribing. Gamma data: ' + ret.gamma);
  },
  fail: (data: string, code: number) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  }
};
Sensor.subscribeDeviceOrientation(subscribeDeviceOrientationOptions);
```
 JS示例：

```
import Sensor from '@system.sensor';

let subscribeDeviceOrientationOptions = {
  interval: 'normal',
  success: (ret) => {
    console.info('Succeeded in subscribing. Alpha data: ' + ret.alpha);
    console.info('Succeeded in subscribing. Beta data: ' + ret.beta);
    console.info('Succeeded in subscribing. Gamma data: ' + ret.gamma);
  },
  fail: (data, code) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  }
};
sensor.subscribeDeviceOrientation(subscribeDeviceOrientationOptions);
```
 ![](./img/note_3.0-zh-cn.png) 建议在页面销毁时，即onDestroy回调中，取消数据订阅，避免不必要的性能开销。

#### [h2]Sensor.unsubscribeDeviceOrientation6+

static unsubscribeDeviceOrientation(): void

取消订阅设备方向传感器数据。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[ORIENTATION](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoroffsensortypesensor_type_id_orientationdeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

ArkTS示例：

```
Sensor.unsubscribeDeviceOrientation();
```
 JS示例：

```
Sensor.unsubscribeDeviceOrientation();
```

#### [h2]Sensor.subscribeGyroscope6+

static subscribeGyroscope(options: SubscribeGyroscopeOptions): void

观察陀螺仪传感器数据变化。

针对同一个应用，多次点击调用时，会覆盖前面的调用效果，即仅最后一次调用生效；针对同一个方法内，不支持多次调用。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[GYROSCOPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoronsensortypesensor_type_id_gyroscopedeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

需要权限：ohos.permission.GYROSCOPE，该权限为系统权限

参数：

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| options | [SubscribeGyroscopeOptions](#subscribegyroscopeoptions6) | 是 | 用于侦听陀螺仪传感器数据的回调函数的执行频率。 |

ArkTS示例：

```
import { Sensor, GyroscopeResponse, SubscribeGyroscopeOptions } from '@kit.SensorServiceKit';

let subscribeGyroscopeOptions: SubscribeGyroscopeOptions = {
  interval: 'normal',
  success: (ret: GyroscopeResponse) => {
    console.info('Succeeded in subscribing. X-axis data: ' + ret.x);
    console.info('Succeeded in subscribing. Y-axis data: ' + ret.y);
    console.info('Succeeded in subscribing. Z-axis data: ' + ret.z);
  },
  fail: (data: string, code: number) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  }
};
Sensor.subscribeGyroscope(subscribeGyroscopeOptions);
```
 JS示例：

```
import Sensor from '@system.sensor';

let subscribeGyroscopeOptions = {
  interval: 'normal',
  success: (ret) => {
    console.info('Succeeded in subscribing. X-axis data: ' + ret.x);
    console.info('Succeeded in subscribing. Y-axis data: ' + ret.y);
    console.info('Succeeded in subscribing. Z-axis data: ' + ret.z);
  },
  fail: (data, code) => {
    console.error(`Failed to subscribe. Code: ${code}, data: ${data}`);
  }
};
sensor.subscribeGyroscope(subscribeGyroscopeOptions);
```
 ![](./img/note_3.0-zh-cn.png) 建议在页面销毁时，即onDestroy回调中，取消数据订阅，避免不必要的性能开销。

#### [h2]Sensor.unsubscribeGyroscope6+

static unsubscribeGyroscope(): void

取消订阅陀螺仪传感器数据。

![](./img/note_3.0-zh-cn.png) 除Lite Wearable外，从API Version8开始，建议使用[GYROSCOPE](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-sensor#sensoroffsensortypesensor_type_id_gyroscopedeprecated)替代。

系统能力：SystemCapability.Sensors.Sensor.Lite

需要权限：ohos.permission.GYROSCOPE，该权限为系统权限

ArkTS示例：

```
Sensor.unsubscribeGyroscope();
```
 JS示例：

```
Sensor.unsubscribeGyroscope();
```

#### subscribeAccelerometerOptions

用于监听加速度传感器数据的回调函数的执行频率。

系统能力：SystemCapability.Sensors.Sensor.Lite

需要权限：ohos.permission.ACCELEROMETER

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| interval | string | 否 | 否 | 频率参数，加速度的回调函数执行频率。 默认为normal，可选值有： game：极高的回调频率，20ms/次，适用于游戏。 ui：较高的回调频率，60ms/次，适用于UI更新。 normal：普通的回调频率，200ms/次，低功耗。 |
| success | [AccelerometerResponse](#accelerometerresponse) | 否 | 否 | 感应到加速度数据变化后的回调函数。 |
| fail | Function | 否 | 是 | 接口调用失败的回调函数。 |

#### AccelerometerResponse

感应到加速度数据变化后的回调函数。

系统能力：SystemCapability.Sensors.Sensor.Lite

需要权限：ohos.permission.ACCELEROMETER

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| x | number | 否 | 否 | 施加在设备x轴的加速度，单位 : m/s²；取值为实际上报物理量。 |
| y | number | 否 | 否 | 施加在设备y轴的加速度，单位 : m/s²；取值为实际上报物理量。 |
| z | number | 否 | 否 | 施加在设备z轴的加速度，单位 : m/s²；取值为实际上报物理量。 |

#### SubscribeCompassOptions

当罗盘传感器数据发生变化时调用。

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| success | [CompassResponse](#compassresponse) | 否 | 否 | 罗盘数据改变后触发的回调函数。 |
| fail | Function | 否 | 是 | 接口调用失败的回调函数。 |

#### CompassResponse

罗盘数据改变后触发的回调函数。

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| direction | number | 否 | 否 | 设备面对的方向度数。 |

#### SubscribeProximityOptions

当距离传感器数据发生变化时调用。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| success | [ProximityResponse](#proximityresponse) | 否 | 否 | 距离感应数据改变后调用的回调函数。 |
| fail | Function | 否 | 是 | 接口调用失败的回调函数。 |

#### ProximityResponse

距离感应数据改变后调用的回调函数。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| distance | number | 否 | 否 | 可见物体相对于设备显示屏的接近或远离状态。 |

#### SubscribeLightOptions

当环境光传感器数据发生变化时调用。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| success | [LightResponse](#lightresponse) | 否 | 否 | 光线感应数据改变后的回调函数。 |
| fail | Function | 否 | 是 | 接口调用失败的回调函数。 |

#### LightResponse

光线感应数据改变后的回调函数。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| intensity | number | 否 | 否 | 光线强度，单位为lux。 |

#### SubscribeStepCounterOptions

当步进计数器传感器数据发生变化时调用。

需要权限：ohos.permission.ACTIVITY_MOTION

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| success | [StepCounterResponse](#stepcounterresponse) | 否 | 否 | 计步传感器数据改变后的回调函数。 |
| fail | Function | 否 | 是 | 接口调用失败的回调函数。 |

#### StepCounterResponse

计步传感器数据改变后的回调函数。

需要权限：ohos.permission.ACTIVITY_MOTION

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| steps | number | 否 | 否 | 计步传感器重启后累计记录的步数。 |

#### SubscribeBarometerOptions

当气压计传感器数据发生变化时调用。

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| success | [BarometerResponse](#barometerresponse) | 否 | 否 | 气压计传感器数据改变后的回调函数。 |
| fail | Function | 否 | 是 | 接口调用失败的回调函数。 |

#### BarometerResponse

气压计传感器数据改变后的回调函数。

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| pressure | number | 否 | 否 | 气压值，单位：帕斯卡。 |

#### SubscribeHeartRateOptions

当心率传感器数据发生变化时调用。

需要权限：ohos.permission.READ_HEALTH_DATA

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| success | [HeartRateResponse](#heartrateresponse) | 否 | 否 | 心率传感器数据改变后的回调函数，默认频率5s/次。 |
| fail | Function | 否 | 是 | 接口调用失败的回调函数。 |

#### HeartRateResponse

心率传感器数据改变后的回调函数，默认频率5s/次。

需要权限：ohos.permission.READ_HEALTH_DATA

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| heartRate | number | 否 | 否 | 心率值。 |

#### SubscribeOnBodyStateOptions

当传感器所在设备穿戴状态改变时调用，分为已穿戴和未穿戴。

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| success | [OnBodyStateResponse](#onbodystateresponse) | 否 | 否 | 传感器所在设备穿戴状态改变后的回调函数。 |
| fail | Function | 否 | 是 | 接口调用失败的回调函数。 |

#### OnBodyStateResponse

传感器所在设备是否穿戴。

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| value | boolean | 否 | 否 | 是否已佩戴设备，当返回true表示已佩戴，否则未佩戴。 |

#### GetOnBodyStateOptions

获取传感器所在设备穿戴状态时调用。

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| success | [OnBodyStateResponse](#onbodystateresponse) | 否 | 否 | 接口调用成功的回调函数。 |
| fail | Function | 否 | 是 | 接口调用失败的回调函数。 |
| complete | Function | 否 | 是 | 接口调用结束的回调函数。 |

#### SubscribeDeviceOrientationOptions6+

用于监听设备方向传感器数据的回调函数的执行频率。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| interval | string | 否 | 否 | 频率参数，设备方向传感器的回调函数执行频率。 默认为normal，可选值有： - game：极高的回调频率，20ms/次，适用于游戏。 - ui：较高的回调频率，60ms/次，适用于UI更新。 - normal：普通的回调频率，200ms/次，低功耗。 |
| success | [DeviceOrientationResponse](#deviceorientationresponse6) | 否 | 否 | 感应到设备方向传感器数据变化后的回调函数。 |
| fail | Function | 否 | 是 | 接口调用失败的回调函数。 |

#### DeviceOrientationResponse6+

感应到设备方向传感器数据变化后的回调函数。

系统能力：SystemCapability.Sensors.Sensor.Lite

设备行为差异：该接口在Lite Wearable中无效果，在其他设备类型中可正常调用。

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| alpha | number | 否 | 否 | 当设备坐标 X/Y 和地球 X/Y 重合时，绕着 Z 轴转动的夹角为 alpha。 |
| beta | number | 否 | 否 | 当设备坐标 Y/Z 和地球 Y/Z 重合时，绕着 X 轴转动的夹角为 beta。 |
| gamma | number | 否 | 否 | 当设备 X/Z 和地球 X/Z 重合时，绕着 Y 轴转动的夹角为 gamma。 |

#### SubscribeGyroscopeOptions6+

用于侦听陀螺仪传感器数据的回调函数的执行频率。

需要权限：ohos.permission.GYROSCOPE

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| interval | string | 否 | 否 | 频率参数，陀螺仪的回调函数执行频率。 默认为normal，可选值有： game：极高的回调频率，20ms/次，适用于游戏。 ui：较高的回调频率，60ms/次，适用于UI更新。 normal：普通的回调频率，200ms/次，低功耗。 |
| success | [GyroscopeResponse](#gyroscoperesponse6) | 否 | 否 | 感应到陀螺仪数据变化后的回调函数。 |
| fail | Function | 否 | 是 | 接口调用失败的回调函数。 |

#### GyroscopeResponse6+

感应到陀螺仪传感器数据变化后的回调函数。

需要权限：ohos.permission.GYROSCOPE

系统能力：SystemCapability.Sensors.Sensor.Lite

| 名称 | 类型 | 只读 | 可选 | 说明 |
| --- | --- | --- | --- | --- |
| x | number | 否 | 否 | x轴的旋转角速度，单位rad/s。 |
| y | number | 否 | 否 | y轴的旋转角速度，单位rad/s。 |
| z | number | 否 | 否 | z轴的旋转角速度，单位rad/s。 |
