---
title: "GPS资源合理使用"
original_url: https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-reasonable-gps-use
---

# GPS资源合理使用

无长时间任务的应用退到后台时，禁止使用定位服务。

## 约束

未申请长时任务的应用退到后台后，系统会强制停止其定位请求。

## 示例

```ts
import { UIAbility } from '@kit.AbilityKit';
import { geoLocationManager } from '@kit.LocationKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

// ...

export default class EntryAbility extends UIAbility {
  // ...
  onForeground(): void {
    // Create a location request based on service requirements at the foreground
    let requestInfo: geoLocationManager.LocationRequest = {
      'priority': geoLocationManager.LocationRequestPriority.ACCURACY,
      'timeInterval': 0,
      'distanceInterval': 0,
      'maxAccuracy': 0
    };
    let locationChange = (location: geoLocationManager.Location): void => {
      console.log('locationChanger:data:' + JSON.stringify(location));
    };
    try {
      //The change of the listening position
      geoLocationManager.on('locationChange', requestInfo, locationChange);
    } catch (error) {
      let err = error as BusinessError;
      hilog.warn(0x000, 'testTag', `geoLocationManager on failed, code=${err.code}, message=${err.message}`);
    }
  }

  onBackground(): void {
    try {
      //The backstage cancels the listening
      geoLocationManager.off('locationChange', locationChange);
    } catch (error) {
      let err = error as BusinessError;
      hilog.warn(0x000, 'testTag', `geoLocationManager off failed, code=${err.code}, message=${err.message}`);
    }
  }
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseResources/entry/src/main/ets/pages/Gps.ets#L6-L50">Gps.ets</a></div>
