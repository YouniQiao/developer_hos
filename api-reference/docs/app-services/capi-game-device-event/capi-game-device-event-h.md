---
title: "game_device_event.h"
upstream_id: "harmonyos-references/capi-game-device-event-h"
catalog: "harmonyos-references"
content_hash: "c24fc173e4ee"
synced_at: "2026-07-28T16:52:36.807138"
---

# game_device_event.h

#### 概述

定义游戏设备事件的接口。

引用文件： <GameControllerKit/game_device_event.h>

库： libohgame_controller.z.so

系统能力： SystemCapability.Game.GameController

起始版本： 21

相关模块： [GameController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller)

#### 汇总

#### [h2]结构体

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo) | GameDevice_DeviceInfo | 定义设备信息。 |
| [GameDevice_DeviceEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceevent) | GameDevice_DeviceEvent | 定义设备状态变化事件。 |

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [GameDevice_StatusChangedType](#gamedevice_statuschangedtype) | GameDevice_StatusChangedType | 此枚举定义设备的状态变化类型。 |
| [GameDevice_DeviceType](#gamedevice_devicetype) | GameDevice_DeviceType | 此枚举定义设备类型。 |

#### [h2]函数

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [typedef void(*GameDevice_DeviceMonitorCallback)(const struct GameDevice_DeviceEvent* deviceEvent)](#gamedevice_devicemonitorcallback) | GameDevice_DeviceMonitorCallback | 定义[OH_GameDevice_RegisterDeviceMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-device-h#oh_gamedevice_registerdevicemonitor)中使用的回调函数。当设备上线或下线时，该回调函数将被调用。 |
| [GameController_ErrorCode OH_GameDevice_DeviceEvent_GetChangedType(const struct GameDevice_DeviceEvent* deviceEvent, GameDevice_StatusChangedType* statusChangedType)](#oh_gamedevice_deviceevent_getchangedtype) | - | 从设备状态变化事件中获取状态变化类型。 |
| [GameController_ErrorCode OH_GameDevice_DeviceEvent_GetDeviceInfo(const struct GameDevice_DeviceEvent* deviceEvent, GameDevice_DeviceInfo** deviceInfo)](#oh_gamedevice_deviceevent_getdeviceinfo) | - | 从设备状态变化事件中获取设备信息。 |
| [GameController_ErrorCode OH_GameDevice_DestroyDeviceInfo(GameDevice_DeviceInfo** deviceInfo)](#oh_gamedevice_destroydeviceinfo) | - | 销毁设备信息实例。 |
| [GameController_ErrorCode OH_GameDevice_DeviceInfo_GetDeviceId(const struct GameDevice_DeviceInfo* deviceInfo, char** deviceId)](#oh_gamedevice_deviceinfo_getdeviceid) | - | 从设备信息中获取设备ID。 |
| [GameController_ErrorCode OH_GameDevice_DeviceInfo_GetName(const struct GameDevice_DeviceInfo* deviceInfo, char** name)](#oh_gamedevice_deviceinfo_getname) | - | 从设备信息中获取设备名称。 |
| [GameController_ErrorCode OH_GameDevice_DeviceInfo_GetProduct(const struct GameDevice_DeviceInfo* deviceInfo, int32_t* product)](#oh_gamedevice_deviceinfo_getproduct) | - | 从设备信息中获取产品信息。 |
| [GameController_ErrorCode OH_GameDevice_DeviceInfo_GetVersion(const struct GameDevice_DeviceInfo* deviceInfo, int32_t* version)](#oh_gamedevice_deviceinfo_getversion) | - | 从设备信息中获取版本信息。 |
| [GameController_ErrorCode OH_GameDevice_DeviceInfo_GetPhysicalAddress(const struct GameDevice_DeviceInfo* deviceInfo, char** physicalAddress)](#oh_gamedevice_deviceinfo_getphysicaladdress) | - | 从设备信息中获取物理地址。 |
| [GameController_ErrorCode OH_GameDevice_DeviceInfo_GetDeviceType(const struct GameDevice_DeviceInfo* deviceInfo, GameDevice_DeviceType* deviceType)](#oh_gamedevice_deviceinfo_getdevicetype) | - | 从设备信息中获取设备类型。 |

#### 枚举类型说明

#### [h2]GameDevice_StatusChangedType

```
enum GameDevice_StatusChangedType
```
 描述

此枚举定义设备的状态变化类型。

系统能力： SystemCapability.Game.GameController

起始版本： 21

| 枚举项 | 描述 |
| --- | --- |
| OFFLINE = 0 | 设备下线。 **起始版本：** 21 |
| ONLINE = 1 | 设备上线。 **起始版本：** 21 |

#### [h2]GameDevice_DeviceType

```
enum GameDevice_DeviceType
```
 描述

此枚举定义设备类型。

系统能力： SystemCapability.Game.GameController

起始版本： 21

| 枚举项 | 描述 |
| --- | --- |
| UNKNOWN = 0 | 未知。 **起始版本：** 21 |
| GAME_PAD = 1 | 游戏手柄。 **起始版本：** 21 |

#### 函数说明

#### [h2]GameDevice_DeviceMonitorCallback()

```
typedef void(*GameDevice_DeviceMonitorCallback)(const struct GameDevice_DeviceEvent* deviceEvent)
```
 描述

定义[OH_GameDevice_RegisterDeviceMonitor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-device-h#oh_gamedevice_registerdevicemonitor)中使用的回调函数。当设备上线或下线时，该回调函数将被调用。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| (const struct GameDevice_DeviceEvent* deviceEvent) | 输出参数。设备状态变化事件[GameDevice_DeviceEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceevent)。 |

#### [h2]OH_GameDevice_DeviceEvent_GetChangedType()

```
GameController_ErrorCode OH_GameDevice_DeviceEvent_GetChangedType(const struct GameDevice_DeviceEvent* deviceEvent, GameDevice_StatusChangedType* statusChangedType)
```
 描述

从设备状态变化事件中获取状态变化类型。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [const struct GameDevice_DeviceEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceevent)* deviceEvent | 指针指向[GameDevice_DeviceEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceevent)实例，不能为空。 |
| [GameDevice_StatusChangedType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-device-event-h#gamedevice_statuschangedtype)* statusChangedType | 输出参数，设备状态变化类型。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数deviceEvent为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_DeviceEvent_GetDeviceInfo()

```
GameController_ErrorCode OH_GameDevice_DeviceEvent_GetDeviceInfo(const struct GameDevice_DeviceEvent* deviceEvent, GameDevice_DeviceInfo** deviceInfo)
```
 描述

从设备状态变化事件中获取设备信息。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [const struct GameDevice_DeviceEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceevent)* deviceEvent | 指针指向[GameDevice_DeviceEvent](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceevent)实例，不能为空。 |
| [GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)** deviceInfo | 输出参数，二级指针指向设备信息。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数deviceEvent为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_DestroyDeviceInfo()

```
GameController_ErrorCode OH_GameDevice_DestroyDeviceInfo(GameDevice_DeviceInfo** deviceInfo)
```
 描述

销毁设备信息实例。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)** deviceInfo | 二级指针指向[GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)实例，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数deviceInfo为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_DeviceInfo_GetDeviceId()

```
GameController_ErrorCode OH_GameDevice_DeviceInfo_GetDeviceId(const struct GameDevice_DeviceInfo* deviceInfo, char** deviceId)
```
 描述

从设备信息中获取设备ID。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [const struct GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)* deviceInfo | 指针指向[GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)实例，不能为空。 |
| char** deviceId | 输出参数，二级指针指向设备ID。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数deviceInfo或deviceId为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果设备内存不足，返回[GAME_CONTROLLER_NO_MEMORY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_DeviceInfo_GetName()

```
GameController_ErrorCode OH_GameDevice_DeviceInfo_GetName(const struct GameDevice_DeviceInfo* deviceInfo, char** name)
```
 描述

从设备信息中获取设备名称。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [const struct GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)* deviceInfo | 指针指向[GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)实例，不能为空。 |
| char** name | 输出参数，二级指针指向设备名称。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数deviceInfo或name为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果设备内存不足，返回[GAME_CONTROLLER_NO_MEMORY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_DeviceInfo_GetProduct()

```
GameController_ErrorCode OH_GameDevice_DeviceInfo_GetProduct(const struct GameDevice_DeviceInfo* deviceInfo, int32_t* product)
```
 描述

从设备信息中获取产品信息。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [const struct GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)* deviceInfo | 指针指向[GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)实例，不能为空。 |
| int32_t* product | 输出参数，产品信息。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数deviceInfo为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_DeviceInfo_GetVersion()

```
GameController_ErrorCode OH_GameDevice_DeviceInfo_GetVersion(const struct GameDevice_DeviceInfo* deviceInfo, int32_t* version)
```
 描述

从设备信息中获取版本信息。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [const struct GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)* deviceInfo | 指针指向[GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)实例，不能为空。 |
| int32_t* version | 输出参数，版本信息。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数deviceInfo为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_DeviceInfo_GetPhysicalAddress()

```
GameController_ErrorCode OH_GameDevice_DeviceInfo_GetPhysicalAddress(const struct GameDevice_DeviceInfo* deviceInfo, char** physicalAddress)
```
 描述

从设备信息中获取物理地址。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [const struct GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)* deviceInfo | 指针指向[GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)实例，不能为空。 |
| char** physicalAddress | 输出参数，二级指针指向物理地址。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数deviceInfo或physicalAddress为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果设备内存不足，返回[GAME_CONTROLLER_NO_MEMORY](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GameDevice_DeviceInfo_GetDeviceType()

```
GameController_ErrorCode OH_GameDevice_DeviceInfo_GetDeviceType(const struct GameDevice_DeviceInfo* deviceInfo, GameDevice_DeviceType* deviceType)
```
 描述

从设备信息中获取设备类型。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [const struct GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)* deviceInfo | 指针指向[GameDevice_DeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller-gamedevice-deviceinfo)实例，不能为空。 |
| [GameDevice_DeviceType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-device-event-h#gamedevice_devicetype)* deviceType | 输出参数，设备类型。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数deviceInfo为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |
