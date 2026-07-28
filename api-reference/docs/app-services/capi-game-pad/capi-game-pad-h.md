---
title: "game_pad.h"
upstream_id: "harmonyos-references/capi-game-pad-h"
catalog: "harmonyos-references"
content_hash: "63e7e5a9986b"
synced_at: "2026-07-28T16:52:36.997580"
---

# game_pad.h

#### 概述

定义游戏手柄的接口。

引用文件： <GameControllerKit/game_pad.h>

库： libohgame_controller.z.so

系统能力： SystemCapability.Game.GameController

起始版本： 21

相关模块： [GameController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller)

#### 汇总

#### [h2]函数

| 名称 | 描述 |
| --- | --- |
| [GameController_ErrorCode OH_GamePad_LeftShoulder_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_leftshoulder_registerbuttoninputmonitor) | 注册LeftShoulder按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor(void)](#oh_gamepad_leftshoulder_unregisterbuttoninputmonitor) | 取消注册LeftShoulder按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_RightShoulder_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_rightshoulder_registerbuttoninputmonitor) | 注册RightShoulder按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_RightShoulder_UnregisterButtonInputMonitor(void)](#oh_gamepad_rightshoulder_unregisterbuttoninputmonitor) | 取消注册RightShoulder按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_LeftTrigger_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_lefttrigger_registerbuttoninputmonitor) | 注册LeftTrigger按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_LeftTrigger_UnregisterButtonInputMonitor(void)](#oh_gamepad_lefttrigger_unregisterbuttoninputmonitor) | 取消注册LeftTrigger按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_LeftTrigger_RegisterAxisInputMonitor(GamePad_AxisInputMonitorCallback inputMonitorCallback)](#oh_gamepad_lefttrigger_registeraxisinputmonitor) | 注册LeftTrigger轴事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_LeftTrigger_UnregisterAxisInputMonitor(void)](#oh_gamepad_lefttrigger_unregisteraxisinputmonitor) | 取消注册LeftTrigger轴事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_RightTrigger_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_righttrigger_registerbuttoninputmonitor) | 注册RightTrigger按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_RightTrigger_UnregisterButtonInputMonitor(void)](#oh_gamepad_righttrigger_unregisterbuttoninputmonitor) | 取消注册RightTrigger按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_RightTrigger_RegisterAxisInputMonitor(GamePad_AxisInputMonitorCallback inputMonitorCallback)](#oh_gamepad_righttrigger_registeraxisinputmonitor) | 注册RightTrigger轴事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_RightTrigger_UnregisterAxisInputMonitor(void)](#oh_gamepad_righttrigger_unregisteraxisinputmonitor) | 取消注册RightTrigger轴事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonMenu_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_buttonmenu_registerbuttoninputmonitor) | 注册Menu按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonMenu_UnregisterButtonInputMonitor(void)](#oh_gamepad_buttonmenu_unregisterbuttoninputmonitor) | 取消注册Menu按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonHome_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_buttonhome_registerbuttoninputmonitor) | 注册Home按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonHome_UnregisterButtonInputMonitor(void)](#oh_gamepad_buttonhome_unregisterbuttoninputmonitor) | 取消注册Home按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonA_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_buttona_registerbuttoninputmonitor) | 注册A按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonA_UnregisterButtonInputMonitor(void)](#oh_gamepad_buttona_unregisterbuttoninputmonitor) | 取消注册A按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonB_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_buttonb_registerbuttoninputmonitor) | 注册B按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonB_UnregisterButtonInputMonitor(void)](#oh_gamepad_buttonb_unregisterbuttoninputmonitor) | 取消注册B按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonX_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_buttonx_registerbuttoninputmonitor) | 注册X按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonX_UnregisterButtonInputMonitor(void)](#oh_gamepad_buttonx_unregisterbuttoninputmonitor) | 取消注册X按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonY_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_buttony_registerbuttoninputmonitor) | 注册Y按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonY_UnregisterButtonInputMonitor(void)](#oh_gamepad_buttony_unregisterbuttoninputmonitor) | 取消注册Y按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonC_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_buttonc_registerbuttoninputmonitor) | 注册C按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_ButtonC_UnregisterButtonInputMonitor(void)](#oh_gamepad_buttonc_unregisterbuttoninputmonitor) | 取消注册C按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_dpad_leftbutton_registerbuttoninputmonitor) | 注册方向按键的向左按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_Dpad_LeftButton_UnregisterButtonInputMonitor(void)](#oh_gamepad_dpad_leftbutton_unregisterbuttoninputmonitor) | 取消注册方向按键的向左按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_dpad_rightbutton_registerbuttoninputmonitor) | 注册方向按键的向右按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_Dpad_RightButton_UnregisterButtonInputMonitor(void)](#oh_gamepad_dpad_rightbutton_unregisterbuttoninputmonitor) | 取消注册方向按键的向右按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_dpad_upbutton_registerbuttoninputmonitor) | 注册方向按键的向上按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_Dpad_UpButton_UnregisterButtonInputMonitor(void)](#oh_gamepad_dpad_upbutton_unregisterbuttoninputmonitor) | 取消注册方向按键的向上按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_dpad_downbutton_registerbuttoninputmonitor) | 注册方向按键的向下按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_Dpad_DownButton_UnregisterButtonInputMonitor(void)](#oh_gamepad_dpad_downbutton_unregisterbuttoninputmonitor) | 取消注册方向按键的向下按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_Dpad_RegisterAxisInputMonitor(GamePad_AxisInputMonitorCallback inputMonitorCallback)](#oh_gamepad_dpad_registeraxisinputmonitor) | 注册方向按键轴事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_Dpad_UnregisterAxisInputMonitor(void)](#oh_gamepad_dpad_unregisteraxisinputmonitor) | 取消注册方向按键轴事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_leftthumbstick_registerbuttoninputmonitor) | 注册LeftThumbstick按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_LeftThumbstick_UnregisterButtonInputMonitor(void)](#oh_gamepad_leftthumbstick_unregisterbuttoninputmonitor) | 取消注册LeftThumbstick按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor(GamePad_AxisInputMonitorCallback inputMonitorCallback)](#oh_gamepad_leftthumbstick_registeraxisinputmonitor) | 注册LeftThumbstick轴事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor(void)](#oh_gamepad_leftthumbstick_unregisteraxisinputmonitor) | 取消注册LeftThumbstick轴事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_RightThumbstick_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)](#oh_gamepad_rightthumbstick_registerbuttoninputmonitor) | 注册RightThumbstick按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_RightThumbstick_UnregisterButtonInputMonitor(void)](#oh_gamepad_rightthumbstick_unregisterbuttoninputmonitor) | 取消注册RightThumbstick按键事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_RightThumbstick_RegisterAxisInputMonitor(GamePad_AxisInputMonitorCallback inputMonitorCallback)](#oh_gamepad_rightthumbstick_registeraxisinputmonitor) | 注册RightThumbstick轴事件的监听回调。 |
| [GameController_ErrorCode OH_GamePad_RightThumbstick_UnregisterAxisInputMonitor(void)](#oh_gamepad_rightthumbstick_unregisteraxisinputmonitor) | 取消注册RightThumbstick轴事件的监听回调。 |

#### 函数说明

#### [h2]OH_GamePad_LeftShoulder_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_LeftShoulder_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册LeftShoulder按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_LeftShoulder_UnregisterButtonInputMonitor(void)
```
 描述

取消注册LeftShoulder按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_RightShoulder_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_RightShoulder_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册RightShoulder按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_RightShoulder_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_RightShoulder_UnregisterButtonInputMonitor(void)
```
 描述

取消注册RightShoulder按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_LeftTrigger_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_LeftTrigger_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册LeftTrigger按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_LeftTrigger_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_LeftTrigger_UnregisterButtonInputMonitor(void)
```
 描述

取消注册LeftTrigger按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_LeftTrigger_RegisterAxisInputMonitor()

```
GameController_ErrorCode OH_GamePad_LeftTrigger_RegisterAxisInputMonitor(GamePad_AxisInputMonitorCallback inputMonitorCallback)
```
 描述

注册LeftTrigger轴事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_AxisInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_axisinputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_AxisInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_axisinputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_LeftTrigger_UnregisterAxisInputMonitor()

```
GameController_ErrorCode OH_GamePad_LeftTrigger_UnregisterAxisInputMonitor(void)
```
 描述

取消注册LeftTrigger轴事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_RightTrigger_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_RightTrigger_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册RightTrigger按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_RightTrigger_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_RightTrigger_UnregisterButtonInputMonitor(void)
```
 描述

取消注册RightTrigger按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_RightTrigger_RegisterAxisInputMonitor()

```
GameController_ErrorCode OH_GamePad_RightTrigger_RegisterAxisInputMonitor(GamePad_AxisInputMonitorCallback inputMonitorCallback)
```
 描述

注册RightTrigger轴事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_AxisInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_axisinputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_AxisInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_axisinputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_RightTrigger_UnregisterAxisInputMonitor()

```
GameController_ErrorCode OH_GamePad_RightTrigger_UnregisterAxisInputMonitor(void)
```
 描述

取消注册RightTrigger轴事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_ButtonMenu_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonMenu_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册Menu按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_ButtonMenu_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonMenu_UnregisterButtonInputMonitor(void)
```
 描述

取消注册Menu按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_ButtonHome_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonHome_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册Home按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_ButtonHome_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonHome_UnregisterButtonInputMonitor(void)
```
 描述

取消注册Home按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_ButtonA_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonA_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册A按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_ButtonA_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonA_UnregisterButtonInputMonitor(void)
```
 描述

取消注册A按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_ButtonB_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonB_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册B按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_ButtonB_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonB_UnregisterButtonInputMonitor(void)
```
 描述

取消注册B按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_ButtonX_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonX_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册X按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_ButtonX_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonX_UnregisterButtonInputMonitor(void)
```
 描述

取消注册X按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_ButtonY_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonY_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册Y按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_ButtonY_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonY_UnregisterButtonInputMonitor(void)
```
 描述

取消注册Y按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_ButtonC_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonC_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册C按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_ButtonC_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_ButtonC_UnregisterButtonInputMonitor(void)
```
 描述

取消注册C按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_Dpad_LeftButton_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册方向按键的向左按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_Dpad_LeftButton_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_Dpad_LeftButton_UnregisterButtonInputMonitor(void)
```
 描述

取消注册方向按键的向左按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_Dpad_RightButton_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册方向按键的向右按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_Dpad_RightButton_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_Dpad_RightButton_UnregisterButtonInputMonitor(void)
```
 描述

取消注册方向按键的向右按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_Dpad_UpButton_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册方向按键的向上按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_Dpad_UpButton_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_Dpad_UpButton_UnregisterButtonInputMonitor(void)
```
 描述

取消注册方向按键的向上按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_Dpad_DownButton_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册方向按键的向下按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_Dpad_DownButton_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_Dpad_DownButton_UnregisterButtonInputMonitor(void)
```
 描述

取消注册方向按键的向下按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_Dpad_RegisterAxisInputMonitor()

```
GameController_ErrorCode OH_GamePad_Dpad_RegisterAxisInputMonitor(GamePad_AxisInputMonitorCallback inputMonitorCallback)
```
 描述

注册方向按键轴事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_AxisInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_axisinputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_AxisInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_axisinputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_Dpad_UnregisterAxisInputMonitor()

```
GameController_ErrorCode OH_GamePad_Dpad_UnregisterAxisInputMonitor(void)
```
 描述

取消注册方向按键轴事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_LeftThumbstick_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册LeftThumbstick按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_LeftThumbstick_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_LeftThumbstick_UnregisterButtonInputMonitor(void)
```
 描述

取消注册LeftThumbstick按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor()

```
GameController_ErrorCode OH_GamePad_LeftThumbstick_RegisterAxisInputMonitor(GamePad_AxisInputMonitorCallback inputMonitorCallback)
```
 描述

注册LeftThumbstick轴事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_AxisInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_axisinputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_AxisInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_axisinputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor()

```
GameController_ErrorCode OH_GamePad_LeftThumbstick_UnregisterAxisInputMonitor(void)
```
 描述

取消注册LeftThumbstick轴事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_RightThumbstick_RegisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_RightThumbstick_RegisterButtonInputMonitor(GamePad_ButtonInputMonitorCallback inputMonitorCallback)
```
 描述

注册RightThumbstick按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_ButtonInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_buttoninputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_RightThumbstick_UnregisterButtonInputMonitor()

```
GameController_ErrorCode OH_GamePad_RightThumbstick_UnregisterButtonInputMonitor(void)
```
 描述

取消注册RightThumbstick按键事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |

#### [h2]OH_GamePad_RightThumbstick_RegisterAxisInputMonitor()

```
GameController_ErrorCode OH_GamePad_RightThumbstick_RegisterAxisInputMonitor(GamePad_AxisInputMonitorCallback inputMonitorCallback)
```
 描述

注册RightThumbstick轴事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

参数：

| 参数项 | 描述 |
| --- | --- |
| [GamePad_AxisInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_axisinputmonitorcallback) inputMonitorCallback | 回调函数[GamePad_AxisInputMonitorCallback](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-pad-event-h#gamepad_axisinputmonitorcallback)，不能为空。 |

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | - - 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - - - 如果参数inputMonitorCallback为null，返回[GAME_CONTROLLER_PARAM_ERROR](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 - |

#### [h2]OH_GamePad_RightThumbstick_UnregisterAxisInputMonitor()

```
GameController_ErrorCode OH_GamePad_RightThumbstick_UnregisterAxisInputMonitor(void)
```
 描述

取消注册RightThumbstick轴事件的监听回调。

系统能力： SystemCapability.Game.GameController

起始版本： 21

返回：

| 类型 | 说明 |
| --- | --- |
| [GameController_ErrorCode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode) | 如果执行成功，返回[GAME_CONTROLLER_SUCCESS](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-game-controller-type-h#gamecontroller_errorcode)。 |
