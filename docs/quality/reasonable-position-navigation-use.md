---
title: "后台定位导航服务合理使用"
original_url: /docs/quality/reasonable-position-navigation-use
upstream_id: /docs/quality/reasonable-position-navigation-use
last_sync: 2026-06-07
sync_hash: 2f8adb74
---
# 后台定位导航服务合理使用

使用定位导航服务时，申请长时任务的应用需设置正确应用场景。

## 约束

NA

## 示例

应用可以使用被动定位：

方式1：

```ts
import { geoLocationManager } from '@kit.LocationKit';

let requestInfo: geoLocationManager.LocationRequest = {
  'scenario': geoLocationManager.LocationRequestScenario.NO_POWER,
  'timeInterval': 0,
  'distanceInterval': 0,
  'maxAccuracy': 0
};
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseSoftware/entry/src/main/ets/pages/GpsOne.ets#L21-L28">GpsOne.ets</a></div>

方式2：

```ts
import { geoLocationManager } from '@kit.LocationKit';

let requestInfo: geoLocationManager.LocationRequest = {
  'priority': geoLocationManager.LocationRequestPriority.LOW_POWER,
  'timeInterval': 0,
  'distanceInterval': 0,
  'maxAccuracy': 0
};
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseSoftware/entry/src/main/ets/pages/GpsTwo.ets#L21-L28">GpsTwo.ets</a></div>

有关定位服务开发相关接口的使用，详情可以参考[Location Kit（位置服务）](/docs/dev/app-dev/application-services/location-kit)。
