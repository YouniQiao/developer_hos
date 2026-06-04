---
title: "低功耗设备蓝牙扫描与连接"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/search_and_connect_ble-0000002293947117
---

## 场景介绍

低功耗设备的蓝牙扫描与连接是各类应用中的高频使用场景之一，如用户需要连接智能手表、健康监测和智能家居等长时间运行的低功耗设备时，可使用手机扫描到设备并连接。

本示例基于[蓝牙access模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-access)和[蓝牙ble模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-ble)，实现低功耗设备蓝牙的扫描与连接功能。

![](./img/7cf4f25c.png)

本示例适用于低功耗设备的蓝牙扫描与连接，部分蓝牙耳机不属于低功耗设备。使用本示例扫描连接蓝牙耳机前，请自行查阅使用耳机是否为低功耗设备。传统蓝牙的扫描与连接请参考[传统蓝牙](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bluetooth-br)指南。

## 效果预览

![](./img/75533d77.gif "点击放大")

## 实现思路

* 开始扫描蓝牙设备：引入[蓝牙ble模块](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-ble)，订阅ble设备发现上报事件，设置扫描过滤和扫描参数，开启蓝牙扫描。

  ```
  static async startBLEScan(scanListener: ScanListener): Promise<void> {
    try {
      // 订阅BLE设备发现上报事件
      ble.on('BLEDeviceFind', (data) => {
        // 事件逻辑实现
      });
      // 扫描过滤
      let scanFilter: ble.ScanFilter = {
        // 过滤
      };
      // 设置扫描参数
      let scanOptions: ble.ScanOptions = {
        // 扫描参数
      }
      // 开启扫描
      ble.startBLEScan([scanFilter], scanOptions);
    } catch (err) {
      // 报错处理
    }
  }
  ```

* 停止扫描蓝牙设备：引入蓝牙ble模块，停止蓝牙扫描。

  ```
  static stopScan(): void {
    try {
      // 停止蓝牙扫描
      ble.stopBLEScan();
    } catch (err) {
      // 报错处理
    }
  }
  ```

* 连接蓝牙设备：订阅连接状态改变事件，连接[GattServer](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-ble#gattserver)服务。

  ```
  async connectDevice(manDeviceBean: ManDeviceBean): Promise<number> {
    let state: number = await new Promise((resolve: Function) => {
      // 订阅连接状态改变事件
      this.clientDevice.on('BLEConnectionStateChange', (bleConnectionState) => {
        // 订阅事件逻辑实现
      })
      // 连接GattServer服务
      this.clientDevice.connect();
    });
    return new Promise((resolve, reject) => {
      // 返回蓝牙连接状态逻辑实现
    })
  }
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 权限说明

获取接入并使用蓝牙能力权限：[ohos.permission.ACCESS\_BLUETOOTH](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/permissions-for-all-user#ohospermissionaccess_bluetooth)。

## 工程目录

```
├──commons/common/src/main/ets                // commons包
│  ├──adapter
│  │  └──ManDeviceDataSource.ets              // 设备数据
│  ├──bean
│  │  ├──ManDeviceBean.ets                    // 设备数据类型
│  │  └──UUIDBean.ets                         // UUID数据类型
│  ├──constants
│  │  ├──BleConnectionState.ets               // Ble连接状态常量
│  │  ├──BTState.ets                          // 蓝牙连接状态常量
│  │  └──CommonConstants.ets                  // 通用常量
│  ├──listener
│  │  ├──BleScanListener.ets                  // Ble扫描监听数据类型
│  │  └──ScanListener.ets                     // 扫描监听接口
│  ├──utils
│  │  ├──BleUtil.ets                          // Ble工具类
│  │  ├──BTUtil.ets                           // 蓝牙工具类
│  │  └──BufferUtil.ets                       // buffer工具类
│  └──DeviceManager.ets                       // 设备控制器
├──commons/common/src/main/resources          // commons包资源目录
│
├──features/device/src/main/ets               // device包
│  ├──common
│  │  └──Constants.ets                        // 常量
│  ├──model
│  │  └──BTDetailModel.ets                    // 蓝牙列表数据项类型
│  └──view
│     └──DeviceDetails.ets                    // 蓝牙设备数据详情
├──features/device/src/main/resources         // device包资源目录
│
├──features/scaneffect/src/main/ets           // scaneffect包
│  ├──common
│  │  └──Constants.ets                        // 常量
│  └──components
│     └──RadarScanEffectForBLE.ets            // 扫描动画组件
├──features/scaneffect/src/main/resources     // scaneffect包资源目录
│
├──products/default/src/main/ets              // default
│  ├──common
│  │  └──Constants.ets                        // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──pages
│  │  └──AddDevice.ets                        // 主页
│  └──views
│     ├──PageBody.ets                         // 主页主体组件
│     ├──PageFooter.ets                       // 主页页脚组件
│     └──PageHeader.ets                       // 主页页眉组件
└──products/default/src/main/resources        // default资源目录
```

## 参考文档

[@ohos.bluetooth.ble（蓝牙ble模块）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-ble)

[@ohos.bluetooth.access（蓝牙access模块）](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-bluetooth-access)

[雷达扫描动画](https://developer.huawei.com/consumer/cn/doc/architecture-guides/radar_scan_effect-0000002236447458)

[传统蓝牙](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/bluetooth-br)

## 代码下载

[低功耗设备蓝牙扫描与连接示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260210100037.98673886396087353164377514696114%3A50001231000000%3A2800%3A7159B400ECD1075408BED0B6921EF73D00FCF480CD20F5CD3AB1B9A191437F10.zip?needInitFileName=true)
