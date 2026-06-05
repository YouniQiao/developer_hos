---
title: "广播开发指导"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-bluetooth-advertising
format: md
---


## 简介

广播与扫描，主要提供了蓝牙设备的开启广播、关闭广播、开启扫描、关闭扫描方法，通过广播和扫描发现对端蓝牙设备，实现低功耗的通信。

## 场景介绍

主要场景有：开启、关闭广播，开启、关闭扫描。

## 接口说明

完整的 API 说明以及实例代码请参考：[蓝牙ble模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-ble)。

| 接口名 | 功能描述 |
| --- | --- |
| startAdvertising | 开始发送BLE广播。 |
| stopAdvertising | 停止发送BLE广播。 |
| startBLEScan | 发起BLE扫描流程。 |
| stopBLEScan | 停止BLE扫描流程。 |
| on('BLEDeviceFind') | 订阅BLE设备发现上报事件。使用Callback异步回调。 |
| off('BLEDeviceFind') | 取消订阅BLE设备发现上报事件。 |

## 主要场景开发步骤

import需要的ble模块。在module.json5文件中添加需要使用的ACCESS\_BLUETOOTH权限，调用requestPermissionsFromUser接口获取用户授权的ACCESS\_BLUETOOTH权限。

```
import { ble } from '@kit.ConnectivityKit';
import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';
import {abilityAccessCtrl, Context, PermissionRequestResult } from '@kit.AbilityKit';

requestPermissionsFromUser() {
  let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl.createAtManager();
  try {
    let context = this.getUIContext().getHostContext();
    atManager.requestPermissionsFromUser(context, ['ohos.permission.ACCESS_BLUETOOTH']).then(() => {
    })
  } catch (err) {
    console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
  }
}
```

import需要的ble模块，完成ACCESS\_BLUETOOTH权限申请。开启广播，对端设备扫描该广播，关闭广播。

```
import { ble } from '@kit.ConnectivityKit';
const TAG: string = 'BleAdvertisingManager';

export class BleAdvertisingManager {
  public async startAdvertising() {
    let manufactureValueBuffer = new Uint8Array(4);
    manufactureValueBuffer[0] = 1;
    manufactureValueBuffer[1] = 2;
    manufactureValueBuffer[2] = 3;
    manufactureValueBuffer[3] = 4;

    let serviceValueBuffer = new Uint8Array(4);
    serviceValueBuffer[0] = 4;
    serviceValueBuffer[1] = 6;
    serviceValueBuffer[2] = 7;
    serviceValueBuffer[3] = 8;
    console.info(`manufactureValueBuffer = ${JSON.stringify(manufactureValueBuffer)}`);
    console.info(`serviceValueBuffer = ${JSON.stringify(serviceValueBuffer)}`);
    try {
      let setting: ble.AdvertiseSetting = {
        interval: 150,
        txPower: 0,
        connectable: true,
      };
      let manufactureDataUnit: ble.ManufactureData = {
        manufactureId: 4567,
        manufactureValue: manufactureValueBuffer.buffer
      };
      let serviceDataUnit: ble.ServiceData = {
        serviceUuid: "00001888-0000-1000-8000-00805f9b34fb",
        serviceValue: serviceValueBuffer.buffer
      };
      let advData: ble.AdvertiseData = {
        serviceUuids: ["00001888-0000-1000-8000-00805f9b34fb"],
        manufactureData: [manufactureDataUnit],
        serviceData: [serviceDataUnit],
      };
      let advResponse: ble.AdvertiseData = {
        serviceUuids: ["00001888-0000-1000-8000-00805f9b34fb"],
        manufactureData: [manufactureDataUnit],
        serviceData: [serviceDataUnit],
      };
      ble.startAdvertising(setting, advData, advResponse);
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 完全关闭广播，释放广播资源
  public async stopAdvertising() {
    try {
      ble.stopAdvertising();
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }
}

let bleAdvertisingManager = new BleAdvertisingManager();

export default bleAdvertisingManager as BleAdvertisingManager;
```

开启、关闭扫描，设备发现。

```
import { ble } from '@kit.ConnectivityKit';
const TAG: string = 'BleScanManager';

export class BleScanManager {
  // 1 订阅扫描结果
  public onScanResult() {
    ble.on('BLEDeviceFind', (data: Array<ble.ScanResult>) => {
      if (data.length > 0) {
        console.info(TAG, `BLE scan result = ${data[0].deviceId}`);
      }
    });
  }

  // 2 开启扫描
  public startScan() {
    // 2.1 构造扫描过滤器，需要能够匹配预期的广播包内容
    let manufactureId = 4567;
    let manufactureData: Uint8Array = new Uint8Array([1, 2, 3, 4]);
    let manufactureDataMask: Uint8Array = new Uint8Array([0xFF, 0xFF, 0xFF, 0xFF]);
    let scanFilter: ble.ScanFilter = { // 根据业务实际情况定义过滤器
      manufactureId: manufactureId,
      manufactureData: manufactureData.buffer,
      manufactureDataMask: manufactureDataMask.buffer
    };

    // 2.2 构造扫描参数
    let scanOptions: ble.ScanOptions = {
      interval: 0,
      dutyMode: ble.ScanDuty.SCAN_MODE_LOW_POWER,
      matchMode: ble.MatchMode.MATCH_MODE_AGGRESSIVE
    }
    try {
      this.onScanResult(); // 订阅扫描结果
      ble.startBLEScan([scanFilter], scanOptions);
      console.info(TAG, 'startBleScan success');
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 3 关闭扫描
  public stopScan() {
    try {
      ble.off('BLEDeviceFind', (data: Array<ble.ScanResult>) => { // 取消订阅扫描结果
        console.info(TAG, 'off success');
      });
      ble.stopBLEScan();
      console.info(TAG, 'stopBleScan success');
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }
}

let bleScanManager = new BleScanManager();
export default bleScanManager as BleScanManager;
```
