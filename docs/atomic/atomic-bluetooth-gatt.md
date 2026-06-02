---
title: "通用属性协议开发指导"
original_url: https://developer.huawei.com/consumer/cn/doc/atomic-guides/atomic-bluetooth-gatt
---

## 简介

通用属性协议是GATT（Generic Attribute）的缩写，它是一种用于在蓝牙低功耗设备之间传输数据的协议，定义了一套通用的属性和服务框架。通过GATT协议，蓝牙设备可以向其他设备提供服务，也可以从其他设备获取服务。

## 场景介绍

连接server端读取和写入信息，server端操作services和通知客户端信息。

## 接口说明

完整的 API 说明以及实例代码请参考：[蓝牙ble模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-ble)。

| 接口名 | 功能描述 |
| --- | --- |
| connect | client端发起连接远端蓝牙低功耗设备。 |
| createGattClientDevice | 创建一个可使用的GattClientDevice实例。 |
| createGattServer | 创建GattServer实例。 |
| disconnect | client端断开与远端蓝牙低功耗设备的连接。 |
| getServices | client端获取蓝牙低功耗设备的所有服务，即服务发现 。 |
| writeCharacteristicValue | client端向低功耗蓝牙设备写入特定的特征值。 |
| getRssiValue | client获取远端蓝牙低功耗设备的信号强度 (Received Signal Strength Indication, RSSI)，调用connect接口连接成功后才能使用。 |
| setBLEMtuSize | client协商远端蓝牙低功耗设备的最大传输单元（Maximum Transmission Unit, MTU），调用connect接口连接成功后才能使用。 |
| setCharacteristicChangeNotification | 向服务端发送设置通知此特征值请求。 |
| setCharacteristicChangeIndication | 向服务端发送设置通知此特征值请求。 |
| on(type: 'BLECharacteristicChange') | 订阅蓝牙低功耗设备的特征值变化事件。需要先调用setNotifyCharacteristicChanged接口才能接收server端的通知。 |
| off(type: 'BLECharacteristicChange') | 取消订阅蓝牙低功耗设备的特征值变化事件。 |
| on(type: 'BLEConnectionStateChange') | client端订阅蓝牙低功耗设备的连接状态变化事件。 |
| off(type: 'BLEConnectionStateChange') | 取消订阅蓝牙低功耗设备的连接状态变化事件。 |
| on(type: 'BLEMtuChange') | client端订阅MTU状态变化事件。 |
| off(type: 'BLEMtuChange') | client端取消订阅MTU状态变化事件。 |
| addService | server端添加服务。 |
| removeService | 删除已添加的服务。 |
| close | 关闭服务端功能，去注销server在协议栈的注册，调用该接口后GattServer实例将不能再使用。 |
| on(type: 'characteristicRead') | server端订阅特征值读请求事件。 |
| off(type: 'characteristicRead') | server端取消订阅特征值读请求事件。 |
| on(type: 'characteristicWrite') | server端订阅特征值写请求事件。 |
| off(type: 'characteristicWrite') | server端取消订阅特征值写请求事件。 |
| on(type: 'connectionStateChange') | server端订阅BLE连接状态变化事件。 |
| off(type: 'connectionStateChange') | server端取消订阅BLE连接状态变化事件。 |
| readCharacteristicValue | client端读取蓝牙低功耗设备特定服务的特征值。 |
| notifyCharacteristicChanged | server端特征值发生变化时，主动通知已连接的client设备。 |
| sendResponse | server端回复client端的读写请求。 |
| on('descriptorRead') | server端订阅描述符读请求事件。 |
| off('descriptorRead') | server端取消订阅描述符读请求事件。 |
| on('descriptorWrite') | server端订阅描述符写请求事件。 |
| off('descriptorWrite') | server端取消订阅描述符写请求事件。 |
| close | 关闭客户端功能，注销client在协议栈的注册，调用该接口后实例将不能再使用。 |
| getDeviceName | client获取远端蓝牙低功耗设备名。 |
| readDescriptorValue | client端读取蓝牙低功耗设备特定的特征包含的描述符。 |
| writeDescriptorValue | client端向低功耗蓝牙设备特定的描述符写入二进制数据。 |

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

GATT client端操作：

```
import { ble } from '@kit.ConnectivityKit';
import { constant}from '@kit.ConnectivityKit';
const TAG: string = 'GattClientManager';

export class GattClientManager {
  device: string = '';
  gattClient: ble.GattClientDevice = ble.createGattClientDevice('11:22:33:AA:BB:FF');
  connectState: ble.ProfileConnectionState = constant.ProfileConnectionState.STATE_DISCONNECTED;
  myServiceUuid: string = '00001810-0000-1000-8000-00805F9B34FB';
  myCharacteristicUuid: string = '00001820-0000-1000-8000-00805F9B34FB';
  myFirstDescriptorUuid: string = '00002902-0000-1000-8000-00805F9B34FB'; // 2902一般用于notification或者indication
  mySecondDescriptorUuid: string = '00002903-0000-1000-8000-00805F9B34FB';
  found: boolean = false;

  // 构造BLEDescriptor
  private initDescriptor(des: string, value: ArrayBuffer): ble.BLEDescriptor {
    let descriptor: ble.BLEDescriptor = {
      serviceUuid: this.myServiceUuid,
      characteristicUuid: this.myCharacteristicUuid,
      descriptorUuid: des,
      descriptorValue: value
    };
    return descriptor;
  }

  // 构造BLECharacteristic
  private initCharacteristic(): ble.BLECharacteristic {
    let descriptors: Array<ble.BLEDescriptor> = [];
    let descBuffer = new ArrayBuffer(2);
    let descValue = new Uint8Array(descBuffer);
    descValue[0] = 11;
    descValue[1] = 12;
    descriptors[0] = this.initDescriptor(this.myFirstDescriptorUuid, new ArrayBuffer(2));
    descriptors[1] = this.initDescriptor(this.mySecondDescriptorUuid, descBuffer);
    let charBuffer = new ArrayBuffer(2);
    let charValue = new Uint8Array(charBuffer);
    charValue[0] = 1;
    charValue[1] = 2;
    let characteristic: ble.BLECharacteristic = {
      serviceUuid: this.myServiceUuid,
      characteristicUuid: this.myCharacteristicUuid,
      characteristicValue: charBuffer,
      descriptors: descriptors
    };
    return characteristic;
  }

  private logCharacteristic(char: ble.BLECharacteristic) {
    let message = 'logCharacteristic uuid:' + char.characteristicUuid + '\n';
    let value = new Uint8Array(char.characteristicValue);
    message += 'logCharacteristic value: ';
    for (let i = 0; i < char.characteristicValue.byteLength; i++) {
      message += value[i] + ' ';
    }
    console.info(TAG, message);
  }

  private logDescriptor(des: ble.BLEDescriptor) {
    let message = 'logDescriptor uuid:' + des.descriptorUuid + '\n';
    let value = new Uint8Array(des.descriptorValue);
    message += 'logDescriptor value: ';
    for (let i = 0; i < des.descriptorValue.byteLength; i++) {
      message += value[i] + ' ';
    }
    console.info(TAG, message);
  }

  private checkService(services: Array<ble.GattService>): boolean {
    for (let i = 0; i < services.length; i++) {
      if (services[i].serviceUuid != this.myServiceUuid) {
        continue;
      }
      for (let j = 0; j < services[i].characteristics.length; j++) {
        if (services[i].characteristics[j].characteristicUuid != this.myCharacteristicUuid) {
          continue;
        }
        for (let k = 0; k < services[i].characteristics[j].descriptors.length; k++) {
          if (services[i].characteristics[j].descriptors[k].descriptorUuid == this.myFirstDescriptorUuid) {
            console.info(TAG, 'find expected service from server');
            return true;
          }
        }
      }
    }
    console.error(TAG, 'no expected service from server');
    return false;
  }

  // 1. 订阅连接状态变化事件
  public onGattClientStateChange() {
    if (!this.gattClient) {
      console.error(TAG, 'no gattClient');
      return;
    }
    try {
      this.gattClient.on('BLEConnectionStateChange', (stateInfo: ble.BLEConnectionChangeState) => {
        let state = '';
        switch (stateInfo.state) {
          case 0:
            state = 'DISCONNECTED';
            break;
          case 1:
            state = 'CONNECTING';
            break;
          case 2:
            state = 'CONNECTED';
            break;
          case 3:
            state = 'DISCONNECTING';
            break;
          default:
            state = 'undefined';
            break;
        }
        console.info(TAG, `onGattClientStateChange: device= ${stateInfo.deviceId}, state= ${state}`);
        if (stateInfo.deviceId == this.device) {
          this.connectState = stateInfo.state;
        }
      });
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 2. client端主动连接时调用
  public startConnect(peerDevice: string) { // 对端设备一般通过ble scan获取到
    if (this.connectState != constant.ProfileConnectionState.STATE_DISCONNECTED) {
      console.error(TAG, 'startConnect failed');
      return;
    }
    console.info(TAG, `startConnect ${peerDevice}`);
    this.device = peerDevice;
    // 2.1 使用device构造gattClient，后续的交互都需要使用该实例
    this.gattClient = ble.createGattClientDevice(peerDevice);
    try {
      this.onGattClientStateChange(); // 2.2 订阅连接状态
      this.gattClient.connect(); // 2.3 发起连接
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 3. client端连接成功后，需要进行服务发现
  public discoverServices() {
    if (!this.gattClient) {
      console.info(TAG, 'no gattClient');
      return;
    }
    console.info(TAG, 'discoverServices');
    try {
      this.gattClient.getServices().then((result: Array<ble.GattService>) => {
        console.info(TAG, `getServices success: ${JSON.stringify(result)}`);
        this.found = this.checkService(result); // 要确保server端的服务内容有业务所需要的服务
      });
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 4. 在确保拿到了server端的服务结果后，读取server端特定服务的特征值时调用
  public readCharacteristicValue() {
    if (!this.gattClient || this.connectState != constant.ProfileConnectionState.STATE_CONNECTED) {
      console.error(TAG, 'no gattClient or not connected');
      return;
    }
    if (!this.found) { // 要确保server端有对应的characteristic
      console.error(TAG, 'no characteristic from server');
      return;
    }

    let characteristic = this.initCharacteristic();
    console.info(TAG, 'readCharacteristicValue');
    try {
      this.gattClient.readCharacteristicValue(characteristic).then((outData: ble.BLECharacteristic) => {
        this.logCharacteristic(outData);
      })
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 5. 在确保拿到了server端的服务结果后，写入server端特定服务的特征值时调用
  public writeCharacteristicValue() {
    if (!this.gattClient || this.connectState != constant.ProfileConnectionState.STATE_CONNECTED) {
      console.error(TAG, 'no gattClient or not connected');
      return;
    }
    if (!this.found) { // 要确保server端有对应的characteristic
      console.error(TAG, 'no characteristic from server');
      return;
    }

    let characteristic = this.initCharacteristic();
    console.info(TAG, 'writeCharacteristicValue');
    try {
      this.gattClient.writeCharacteristicValue(characteristic, ble.GattWriteType.WRITE, (err) => {
        if (err) {
          console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
          return;
        }
        console.info(TAG, 'writeCharacteristicValue success');
      });
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }
}

let gattClientManager = new GattClientManager();
export default gattClientManager as GattClientManager;
```

GATT server端操作：

```
import { ble } from '@kit.ConnectivityKit';
import { constant } from '@kit.ConnectivityKit';
const TAG: string = 'GattServerManager';

export class GattServerManager {
  gattServer: ble.GattServer = ble.createGattServer();
  connectState: ble.ProfileConnectionState = constant.ProfileConnectionState.STATE_DISCONNECTED;
  myServiceUuid: string = '00001810-0000-1000-8000-00805F9B34FB';
  myCharacteristicUuid: string = '00001820-0000-1000-8000-00805F9B34FB';
  myFirstDescriptorUuid: string = '00002902-0000-1000-8000-00805F9B34FB'; // 2902一般用于notification或者indication
  mySecondDescriptorUuid: string = '00002903-0000-1000-8000-00805F9B34FB';

  // 构造BLEDescriptor
  private initDescriptor(des: string, value: ArrayBuffer): ble.BLEDescriptor {
    let descriptor: ble.BLEDescriptor = {
      serviceUuid: this.myServiceUuid,
      characteristicUuid: this.myCharacteristicUuid,
      descriptorUuid: des,
      descriptorValue: value
    };
    return descriptor;
  }

  // 构造BLECharacteristic
  private initCharacteristic(): ble.BLECharacteristic {
    let descriptors: Array<ble.BLEDescriptor> = [];
    let descBuffer = new ArrayBuffer(2);
    let descValue = new Uint8Array(descBuffer);
    descValue[0] = 31;
    descValue[1] = 32;
    descriptors[0] = this.initDescriptor(this.myFirstDescriptorUuid, new ArrayBuffer(2));
    descriptors[1] = this.initDescriptor(this.mySecondDescriptorUuid, descBuffer);
    let charBuffer = new ArrayBuffer(2);
    let charValue = new Uint8Array(charBuffer);
    charValue[0] = 21;
    charValue[1] = 22;
    let characteristic: ble.BLECharacteristic = {
      serviceUuid: this.myServiceUuid,
      characteristicUuid: this.myCharacteristicUuid,
      characteristicValue: charBuffer,
      descriptors: descriptors
    };
    return characteristic;
  }

  // 1. 订阅连接状态变化事件
  public onGattServerStateChange() {
    if (!this.gattServer) {
      console.error(TAG, 'no gattServer');
      return;
    }
    try {
      this.gattServer.on('connectionStateChange', (stateInfo: ble.BLEConnectionChangeState) => {
        let state = '';
        switch (stateInfo.state) {
          case 0:
            state = 'DISCONNECTED';
            break;
          case 1:
            state = 'CONNECTING';
            break;
          case 2:
            state = 'CONNECTED';
            break;
          case 3:
            state = 'DISCONNECTING';
            break;
          default:
            state = 'undefined';
            break;
        }
        console.info(TAG, `onGattServerStateChange: device= ${stateInfo.deviceId}, state= ${state}`);
      });
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 2. server端注册服务时调用
  public registerServer() {
    let characteristics: Array<ble.BLECharacteristic> = [];
    let characteristic = this.initCharacteristic();
    characteristics.push(characteristic);
    let gattService: ble.GattService = {
      serviceUuid: this.myServiceUuid,
      isPrimary: true,
      characteristics: characteristics
    };

    console.info(TAG, `registerServer ${this.myServiceUuid}`);
    try {
      this.gattServer = ble.createGattServer(); // 2.1 构造gattServer，后续的交互都需要使用该实例
      this.onGattServerStateChange(); // 2.2 订阅连接状态
      this.gattServer.addService(gattService);
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 3. 订阅来自gattClient的读取特征值请求时调用
  public onCharacteristicRead() {
    if (!this.gattServer) {
      console.error(TAG, 'no gattServer');
      return;
    }

    console.info(TAG, 'onCharacteristicRead');
    try {
      this.gattServer.on('characteristicRead', (charReq: ble.CharacteristicReadRequest) => {
        let deviceId: string = charReq.deviceId;
        let transId: number = charReq.transId;
        let offset: number = charReq.offset;
        console.info(TAG, 'receive characteristicRead');
        let rspBuffer = new ArrayBuffer(2);
        let rspValue = new Uint8Array(rspBuffer);
        rspValue[0] = 21;
        rspValue[1] = 22;
        let serverResponse: ble.ServerResponse = {
          deviceId: deviceId,
          transId: transId,
          status: 0, // 0表示成功
          offset: offset,
          value: rspBuffer
        };

        try {
          this.gattServer.sendResponse(serverResponse);
        } catch (err) {
          console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
        }
      });
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 4. 订阅来自gattClient的写入特征值请求时调用
  public onCharacteristicWrite() {
    if (!this.gattServer) {
      console.error(TAG, 'no gattServer');
      return;
    }

    console.info(TAG, 'onCharacteristicWrite');
    try {
      this.gattServer.on('characteristicWrite', (charReq: ble.CharacteristicWriteRequest) => {
        let deviceId: string = charReq.deviceId;
        let transId: number = charReq.transId;
        let offset: number = charReq.offset;
        console.info(TAG, `receive characteristicWrite: needRsp= ${charReq.needRsp}`);
        if (!charReq.needRsp) {
          return;
        }
        let rspBuffer = new ArrayBuffer(0);
        let serverResponse: ble.ServerResponse = {
          deviceId: deviceId,
          transId: transId,
          status: 0, // 0表示成功
          offset: offset,
          value: rspBuffer
        };

        try {
          this.gattServer.sendResponse(serverResponse);
        } catch (err) {
          console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
        }
      });
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 5. 订阅来自gattClient的读取描述符请求时调用
  public onDescriptorRead() {
    if (!this.gattServer) {
      console.error(TAG, 'no gattServer');
      return;
    }

    console.info(TAG, 'onDescriptorRead');
    try {
      this.gattServer.on('descriptorRead', (desReq: ble.DescriptorReadRequest) => {
        let deviceId: string = desReq.deviceId;
        let transId: number = desReq.transId;
        let offset: number = desReq.offset;
        console.info(TAG, 'receive descriptorRead');
        let rspBuffer = new ArrayBuffer(2);
        let rspValue = new Uint8Array(rspBuffer);
        rspValue[0] = 31;
        rspValue[1] = 32;
        let serverResponse: ble.ServerResponse = {
          deviceId: deviceId,
          transId: transId,
          status: 0, // 0表示成功
          offset: offset,
          value: rspBuffer
        };

        try {
          this.gattServer.sendResponse(serverResponse);
        } catch (err) {
          console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
        }
      });
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 6. 订阅来自gattClient的写入描述符请求时调用
  public onDescriptorWrite() {
    if (!this.gattServer) {
      console.error(TAG, 'no gattServer');
      return;
    }

    console.info(TAG, 'onDescriptorWrite');
    try {
      this.gattServer.on('descriptorWrite', (desReq: ble.DescriptorWriteRequest) => {
        let deviceId: string = desReq.deviceId;
        let transId: number = desReq.transId;
        let offset: number = desReq.offset;
        console.info(TAG, `receive descriptorWrite: needRsp= ${desReq.needRsp}`);
        if (!desReq.needRsp) {
          return;
        }
        let rspBuffer = new ArrayBuffer(0);
        let serverResponse: ble.ServerResponse = {
          deviceId: deviceId,
          transId: transId,
          status: 0, // 0表示成功
          offset: offset,
          value: rspBuffer
        };

        try {
          this.gattServer.sendResponse(serverResponse);
        } catch (err) {
          console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
        }
      });
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }

  // 7. server端删除服务，不再使用时调用
  public unRegisterServer() {
    if (!this.gattServer) {
      console.error(TAG, 'no gattServer');
      return;
    }

    console.info(TAG, `unRegisterServer ${this.myServiceUuid}`);
    try {
      this.gattServer.removeService(this.myServiceUuid); // 7.1 删除服务
      this.gattServer.off('connectionStateChange', (stateInfo: ble.BLEConnectionChangeState) => { // 7.2 取消订阅连接状态
      });
      this.gattServer.close() // 7.3 如果不再使用此gattServer，则需要close。
    } catch (err) {
      console.error(`errCode: ${err.code}, errMessage: ${err.message}`);
    }
  }
}

let gattServerManager = new GattServerManager();
export default gattServerManager as GattServerManager;
```
