---
title: "传感器资源合理使用"
source_url: https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-reasonable-sensor-use
---

# 传感器资源合理使用

应用退至后台时，禁止使用传感器资源。若有正常业务需求，申请后台长时任务后，可在锁屏状态下获取传感器信息。

## 约束

应用退至后台时，禁止使用传感器资源。若有正常业务需求，申请后台长时任务后，可在锁屏状态下获取传感器信息。

## 示例

```ts
import { UIAbility } from '@kit.AbilityKit';
import { sensor } from '@kit.SensorServiceKit';
import { BusinessError } from '@kit.BasicServicesKit';
import { hilog } from '@kit.PerformanceAnalysisKit';

export default class EntryAbility extends UIAbility {
  // ...
  onForeground(): void {
    try {
      //In the foreground, listen to the required type of sensor based on the service requirements
      sensor.on(sensor.SensorId.ACCELEROMETER, (data: sensor.AccelerometerResponse) => {
        console.info("Succeeded in obtaining data.x:" + data.x + "y:" + data.y + "z:" + data.z);
      }, {
        interval: 100000000
      });
    } catch (error) {
      let err = error as BusinessError;
      hilog.warn(0x000, 'testTag', `sensor on failed, code=${err.code}, message=${err.message}`);
    }
  }

  onBackground(): void {
    try {
      //The backstage cancels the listening
      sensor.off(sensor.SensorId.ACCELEROMETER);
    } catch (error) {
      let err = error as BusinessError;
      hilog.warn(0x000, 'testTag', `sensor off failed, code=${err.code}, message=${err.message}`);
    }
  }
}
```

有关传感器开发相关接口的使用，详情可以参考[传感器开发指导](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/sensor-guidelines)。
