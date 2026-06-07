---
title: "蓝牙资源合理使用"
original_url: /docs/quality/reasonable-bluetooth-use
---

# 蓝牙资源合理使用

无长时任务的应用退到后台时，不允许进行蓝牙扫描。

## 约束

应用退到后台时，系统会强制停止扫描；回到前台后，系统将恢复扫描。

## 示例

```ts
import { UIAbility } from '@kit.AbilityKit';
import { ble } from '@kit.ConnectivityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError } from '@kit.BasicServicesKit';

// ...
export default class EntryAbility extends UIAbility {
  // ...
  onForeground(): void {
    try {
      //Initiate Ble scan and broadcast as required by the service at the foreground
      ble.startBLEScan([scanFilter], scanOptions);
      ble.startAdvertising(setting, advData, advResponse);
    } catch (error) {
      let err = error as BusinessError;
      hilog.warn(0x000, 'testTag', `startBLEScan or startAdvertising failed, code=${err.code}, message=${err.message}`);
    }
  }

  onBackground(): void {
    try {
      // Return to the background to stop the Ble scanning and broadcast, which is the same as the application
      ble.stopBLEScan();
      ble.stopAdvertising();
    } catch (error) {
      let err = error as BusinessError;
      hilog.warn(0x000, 'testTag', `stopBLEScan or stopAdvertising failed, code=${err.code}, message=${err.message}`);
    }
  }
}
```
<div class="source-link-wrapper"><a class="source-link" href="https://gitcode.com/harmonyos_samples/BestPracticeSnippets/blob/master/BptaUseResources/entry/src/main/ets/pages/Bluetooth.ets#L6-L45">Bluetooth.ets</a></div>

有关蓝牙相关接口的使用，详情可以参考[查找设备](/docs/dev/app-dev/system/system-network/connectivity-kit/bluetooth/bluetooth-ble/ble-development-guide)。
