---
title: "game_device.h"
upstream_id: "harmonyos-references/capi-game-device-h"
catalog: "harmonyos-references"
content_hash: "de8642b7db4c"
synced_at: "2026-07-28T16:52:36.656115"
---

# game_device.h

#### 概述

定义游戏设备的接口。

引用文件： <GameControllerKit/game_device.h>

库： libohgame_controller.z.so

系统能力： SystemCapability.Game.GameController

起始版本： 21

相关模块： [GameController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-alldeviceinfos) | GameDevice_AllDeviceInfos | 定义[OH_GameDevice_GetAllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-device-h#oh_gamedevice_getalldeviceinfos)接口的调用结果。 |

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [GameController_ErrorCode OH_GameDevice_GetAllDeviceInfos(GameDevice_AllDeviceInfos** allDeviceInfos)](#oh_gamedevice_getalldeviceinfos) | 获取所有在线设备的信息。 |
| [GameController_ErrorCode OH_GameDevice_RegisterDeviceMonitor(GameDevice_DeviceMonitorCallback deviceMonitorCallback)](#oh_gamedevice_registerdevicemonitor) | 注册设备状态变化事件的监听回调。 |
| [GameController_ErrorCode OH_GameDevice_UnregisterDeviceMonitor(void)](#oh_gamedevice_unregisterdevicemonitor) | 取消注册设备状态变化事件的监听回调。 |
| [GameController_ErrorCode OH_GameDevice_DestroyAllDeviceInfos(GameDevice_AllDeviceInfos** allDeviceInfos)](#oh_gamedevice_destroyalldeviceinfos) | 销毁所有设备信息实例。 |
| [GameController_ErrorCode OH_GameDevice_AllDeviceInfos_GetCount(const struct GameDevice_AllDeviceInfos* allDeviceInfos, int32_t* count)](#oh_gamedevice_alldeviceinfos_getcount) | 获取设备数量。 |
| [GameController_ErrorCode OH_GameDevice_AllDeviceInfos_GetDeviceInfo(const struct GameDevice_AllDeviceInfos* allDeviceInfos, const int32_t index, GameDevice_DeviceInfo** deviceInfo)](#oh_gamedevice_alldeviceinfos_getdeviceinfo) | 获取指定索引的设备信息。 |

#### 函数说明

#### [h2]OH_GameDevice_GetAllDeviceInfos()

```
GameController_ErrorCode OH_GameDevice_GetAllDeviceInfos(GameDevice_AllDeviceInfos** allDeviceInfos)
```
 描述

获取所有在线设备的信息。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-alldeviceinfos)** allDeviceInfos | 输出参数。二级指针指向[GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-alldeviceinfos)实例，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数allDeviceInfos为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果查询多模输入中所有设备信息失败，返回[GAME_CONTROLLER_MULTIMODAL_INPUT_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_RegisterDeviceMonitor()

```
GameController_ErrorCode OH_GameDevice_RegisterDeviceMonitor(GameDevice_DeviceMonitorCallback deviceMonitorCallback)
```
 描述

注册设备状态变化事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GameDevice_DeviceMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-device-event-h#gamedevice_devicemonitorcallback) deviceMonitorCallback | 回调函数[GameDevice_DeviceMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-device-event-h#gamedevice_devicemonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数deviceMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_UnregisterDeviceMonitor()

```
GameController_ErrorCode OH_GameDevice_UnregisterDeviceMonitor(void)
```
 描述

取消注册设备状态变化事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GameDevice_DestroyAllDeviceInfos()

```
GameController_ErrorCode OH_GameDevice_DestroyAllDeviceInfos(GameDevice_AllDeviceInfos** allDeviceInfos)
```
 描述

销毁所有设备信息实例。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-alldeviceinfos)** allDeviceInfos | 二级指针指向[GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-alldeviceinfos)实例，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数allDeviceInfos为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_AllDeviceInfos_GetCount()

```
GameController_ErrorCode OH_GameDevice_AllDeviceInfos_GetCount(const struct GameDevice_AllDeviceInfos* allDeviceInfos, int32_t* count)
```
 描述

获取设备数量。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [const struct GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-alldeviceinfos)* allDeviceInfos | 指针指向[GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-alldeviceinfos)实例，不能为空。 |
| int32_t* count | 输出参数，设备数量。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数allDeviceInfos为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_AllDeviceInfos_GetDeviceInfo()

```
GameController_ErrorCode OH_GameDevice_AllDeviceInfos_GetDeviceInfo(const struct GameDevice_AllDeviceInfos* allDeviceInfos, const int32_t index, GameDevice_DeviceInfo** deviceInfo)
```
 描述

获取指定索引的设备信息。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [const struct GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-alldeviceinfos)* allDeviceInfos | 指针指向[GameDevice_AllDeviceInfos](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-alldeviceinfos)实例，不能为空。 |
| const int32_t index | 指定设备索引。 |
| [GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)** deviceInfo | 输出参数，二级指针指向设备信息。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数allDeviceInfos为null，或index小于0或大于等于设备总数，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |
