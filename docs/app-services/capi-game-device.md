---
title: "game_device.h"
upstream_id: "harmonyos-references/capi-game-device"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:53:24.698127"
---

# game_device.h

#### 概述

定义游戏设备的接口。

引用文件： <GameControllerKit/game_device.h>

库： libohgame_controller.z.so

系统能力： SystemCapability.Game.GameController

起始版本： 21

相关模块：[GameController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller)

#### 汇总

#### [h2]类型定义

| 名称 | 描述 |
| --- | --- |
| typedef struct [GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamedevice_alldeviceinfos) [GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamedevice_alldeviceinfos) | 定义[OH_GameDevice_GetAllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#oh_gamedevice_getalldeviceinfos)接口的调用结果。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamecontroller_errorcode) [OH_GameDevice_GetAllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#oh_gamedevice_getalldeviceinfos) ([GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamedevice_alldeviceinfos) **allDeviceInfos) | 获取所有在线设备的信息。 |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamecontroller_errorcode) [OH_GameDevice_RegisterDeviceMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#oh_gamedevice_registerdevicemonitor) ([GameDevice_DeviceMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamedevice_devicemonitorcallback) deviceMonitorCallback) | 注册设备状态变化事件的监听回调。 |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamecontroller_errorcode) [OH_GameDevice_UnregisterDeviceMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#oh_gamedevice_unregisterdevicemonitor) (void) | 取消注册设备状态变化事件的监听回调。 |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamecontroller_errorcode) [OH_GameDevice_DestroyAllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#oh_gamedevice_destroyalldeviceinfos) ([GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamedevice_alldeviceinfos) **allDeviceInfos) | 当[GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamedevice_alldeviceinfos)实例不再使用，销毁该实例。 |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamecontroller_errorcode) [OH_GameDevice_AllDeviceInfos_GetCount](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#oh_gamedevice_alldeviceinfos_getcount) (const struct [GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamedevice_alldeviceinfos) *allDeviceInfos, int32_t *count) | 获取设备数量。 |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamecontroller_errorcode) [OH_GameDevice_AllDeviceInfos_GetDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#oh_gamedevice_alldeviceinfos_getdeviceinfo) (const struct [GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamedevice_alldeviceinfos) *allDeviceInfos, const int32_t index, [GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller#gamedevice_deviceinfo) **deviceInfo) | 从所有设备信息中获取指定序号的设备信息。 |
