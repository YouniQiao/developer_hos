---
title: "game_controller_type.h"
upstream_id: "harmonyos-references/capi-game-controller-type-h"
catalog: "harmonyos-references"
content_hash: "4f1f6cf93632"
synced_at: "2026-07-28T16:52:36.547233"
---

# game_controller_type.h

#### 概述

定义GameController模块的通用枚举类型。

引用文件： <GameControllerKit/game_controller_type.h>

库： libohgame_controller.z.so

系统能力： SystemCapability.Game.GameController

起始版本： 21

相关模块： [GameController](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-gamecontroller)

#### 汇总

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [GameController_ErrorCode](#gamecontroller_errorcode) | GameController_ErrorCode | 此枚举定义游戏控制器的错误码。 |

#### 枚举类型说明

#### [h2]GameController_ErrorCode

```
enum GameController_ErrorCode
```
 描述

此枚举定义游戏控制器的错误码。

系统能力： SystemCapability.Game.GameController

起始版本： 21

| 枚举项 | 描述 |
| --- | --- |
| GAME_CONTROLLER_SUCCESS = 0 | 成功。 **起始版本：** 21 |
| GAME_CONTROLLER_PARAM_ERROR = 401 | 参数非法。 **起始版本：** 21 |
| GAME_CONTROLLER_MULTIMODAL_INPUT_ERROR = 32200001 | 查询多模输入中所有设备信息失败。 **起始版本：** 21 |
| GAME_CONTROLLER_NO_MEMORY = 32200002 | 设备内存不足。 **起始版本：** 21 |
