---
title: "蓝牙设置开发指导"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-bluetooth-access
format: md
---


## 简介

蓝牙设置主要提供了开启蓝牙、关闭蓝牙、获取蓝牙状态、配对等方法，帮助开发者实现基本蓝牙功能。

## 场景介绍

主要场景有：开启、关闭蓝牙，获取蓝牙开关状态，监听蓝牙开关状态变化事件。

## 接口说明

完整的 API 说明以及实例代码请参考：[蓝牙access模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-access)。

具体接口说明如下表。

| 接口名 | 功能描述 |
| --- | --- |
| enableBluetooth | 开启蓝牙。 |
| disableBluetooth | 关闭蓝牙。 |
| getState | 获取蓝牙开关状态。 |
| on('stateChange') | 订阅蓝牙设备开关状态事件。 |
| off('stateChange') | 取消订阅蓝牙设备开关状态事件。 |
| pairDevice | 发起蓝牙配对。 |
| getRemoteDeviceName | 获取对端蓝牙设备的名称。 |
| setRemoteDeviceName | 设置蓝牙远端设备名称。 |
| getPairedDevices | 获取蓝牙配对列表。 |
| getPairState | 获取蓝牙配对状态。 |
| startBluetoothDiscovery | 开启蓝牙扫描，可以发现远端设备。 |
| stopBluetoothDiscovery | 关闭蓝牙扫描。 |
| on('bluetoothDeviceFind') | 订阅蓝牙设备发现上报事件。 |
| off('bluetoothDeviceFind') | 取消订阅蓝牙设备发现上报事件。 |

## 主要场景开发步骤

1. import需要的access模块。在module.json5文件中添加需要使用的ACCESS\_BLUETOOTH权限，调用requestPermissionsFromUser接口获取用户授权的ACCESS\_BLUETOOTH权限。

   ```
   import { access } from '@kit.ConnectivityKit';
   import { AsyncCallback, BusinessError } from '@kit.BasicServicesKit';
   import {abilityAccessCtrl, Context, PermissionRequestResult } from '@kit.AbilityKit';

   requestPermissionsFromUser() {
     let atManager: abilityAccessCtrl.AtManager = abilityAccessCtrl. createAtManager();
     try {
       let context = this.getUIContext().getHostContext();
       atManager.requestPermissionsFromUser(context, ['ohos.permission.ACCESS_BLUETOOTH']).then(() => {
       })
     } catch (err) {
       console.error('errCode: ' + (err as BusinessError).code + ', errMessage: ' + (err as BusinessError).message);
     }
   }
   ```
2. 开启蓝牙，并监听蓝牙开关状态。

   ```
   import { access } from '@kit.ConnectivityKit';
   let onReceiveEvent = (data: access.BluetoothState) => {
     console.info(`onstateChange: ${data}`);
   }
   try {
     access.on('stateChange', onReceiveEvent);
     access.enableBluetooth(); // 开启蓝牙
   } catch (err) {
     console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
   }
   ```
3. 获取蓝牙开关状态，关闭蓝牙，取消订阅蓝牙设备开关状态事件。

   ```
   import { access } from '@kit.ConnectivityKit';
   try {
     let state = access.getState();
   } catch (err) {
     console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
   }

   try {
     access.disableBluetooth(); // 关闭蓝牙
   } catch (err) {
     console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
   }

   let onReceiveEvent = (data: access.BluetoothState) => {
     console.info(`onstateChange: ${data}`);
   }
   try {
     access.off('stateChange', onReceiveEvent);
   } catch (err) {
     console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
   }
   ```
4. 开启设备发现，根据对端设备名称获取到对端蓝牙设备并配对。

   ```
   import { connection } from '@kit.ConnectivityKit';
   try {
     let onReceiveEvent = (data: Array<string>) => {
       let mac: string = data[0];
       console.info(`mac: ${mac}`)
       let deviceName = connection.getRemoteDeviceName(mac);
       console.info(`mac: ${deviceName}`)
       if (deviceName == "XXX") {
         console.info('Succeeded in doing getRemoteDeviceName');
         connection.pairDevice(mac);
       }
     }
     try {
       connection.on('bluetoothDeviceFind', onReceiveEvent);
       connection.startBluetoothDiscovery();
     } catch (err) {
       console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
     }
   } catch (err) {
     console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
   }
   ```
