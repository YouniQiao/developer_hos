---
title: "oh_pointer_style.h"
upstream_id: "harmonyos-references/capi-oh-pointer-style-h"
catalog: "harmonyos-references"
synced_at: "2026-06-24T20:51:18.831372"
---

# oh_pointer_style.h

#### 概述

鼠标光标的样式。

引用文件： <multimodalinput/oh_pointer_style.h>

库： libohinput.so

系统能力： SystemCapability.MultimodalInput.Input.Core

起始版本： 22

相关模块： [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

#### 汇总

#### [h2]枚举

| 名称 | typedef关键字 | 描述 |
| --- | --- | --- |
| [Input_PointerStyle](#input_pointerstyle) | Input_PointerStyle | 鼠标光标样式。 |

#### 枚举类型说明

#### [h2]Input_PointerStyle

```
enum Input_PointerStyle
```
 描述

鼠标光标样式。

起始版本： 22

| 枚举项 | 描述 | 图示 |
| --- | --- | --- |
| DEFAULT = 0 | 默认 | ![](./img/zh-cn_image_0000002656470613.png) |
| EAST = 1 | 向东箭头 | ![](./img/zh-cn_image_0000002656350663.png) |
| WEST = 2 | 向西箭头 | ![](./img/zh-cn_image_0000002626231250.png) |
| SOUTH = 3 | 向南箭头 | ![](./img/zh-cn_image_0000002626071338.png) |
| NORTH = 4 | 向北箭头 | ![](./img/zh-cn_image_0000002656470615.png) |
| WEST_EAST = 5 | 向西东箭头 | ![](./img/zh-cn_image_0000002656350665.png) |
| NORTH_SOUTH = 6 | 向北南箭头 | ![](./img/zh-cn_image_0000002626231252.png) |
| NORTH_EAST = 7 | 向东北箭头 | ![](./img/zh-cn_image_0000002626071340.png) |
| NORTH_WEST = 8 | 向西北箭头 | ![](./img/zh-cn_image_0000002656470617.png) |
| SOUTH_EAST = 9 | 向东南箭头 | ![](./img/zh-cn_image_0000002656350667.png) |
| SOUTH_WEST = 10 | 向西南箭头 | ![](./img/zh-cn_image_0000002626231254.png) |
| NORTH_EAST_SOUTH_WEST = 11 | 东北西南调整 | ![](./img/zh-cn_image_0000002626071342.png) |
| NORTH_WEST_SOUTH_EAST = 12 | 西北东南调整 | ![](./img/zh-cn_image_0000002656470619.png) |
| CROSS = 13 | 准确选择 | ![](./img/zh-cn_image_0000002656350669.png) |
| CURSOR_COPY = 14 | 复制 | ![](./img/zh-cn_image_0000002626231256.png) |
| CURSOR_FORBID = 15 | 不可用 | ![](./img/zh-cn_image_0000002626071344.png) |
| COLOR_SUCKER = 16 | 取色器 | ![](./img/zh-cn_image_0000002656470621.png) |
| HAND_GRABBING = 17 | 并拢的手 | ![](./img/zh-cn_image_0000002656350671.png) |
| HAND_OPEN = 18 | 张开的手 | ![](./img/zh-cn_image_0000002626231258.png) |
| HAND_POINTING = 19 | 手形指针 | ![](./img/zh-cn_image_0000002626071346.png) |
| HELP = 20 | 帮助选择 | ![](./img/zh-cn_image_0000002656470623.png) |
| MOVE = 21 | 移动 | ![](./img/zh-cn_image_0000002656350673.png) |
| RESIZE_LEFT_RIGHT = 22 | 内部左右调整 | ![](./img/zh-cn_image_0000002626231260.png) |
| RESIZE_UP_DOWN = 23 | 内部上下调整 | ![](./img/zh-cn_image_0000002626071348.png) |
| SCREENSHOT_CHOOSE = 24 | 截图十字准星 | ![](./img/zh-cn_image_0000002656470625.png) |
| SCREENSHOT_CURSOR = 25 | 截图 | ![](./img/zh-cn_image_0000002656350675.png) |
| TEXT_CURSOR = 26 | 文本选择 | ![](./img/zh-cn_image_0000002626231262.png) |
| ZOOM_IN = 27 | 放大 | ![](./img/zh-cn_image_0000002626071350.png) |
| ZOOM_OUT = 28 | 缩小 | ![](./img/zh-cn_image_0000002656470627.png) |
| MIDDLE_BTN_EAST = 29 | 向东滚动 | ![](./img/zh-cn_image_0000002656350677.png) |
| MIDDLE_BTN_WEST = 30 | 向西滚动 | ![](./img/zh-cn_image_0000002626231264.png) |
| MIDDLE_BTN_SOUTH = 31 | 向南滚动 | ![](./img/zh-cn_image_0000002626071352.png) |
| MIDDLE_BTN_NORTH = 32 | 向北滚动 | ![](./img/zh-cn_image_0000002656470629.png) |
| MIDDLE_BTN_NORTH_SOUTH = 33 | 向南北滚动 | ![](./img/zh-cn_image_0000002656350679.png) |
| MIDDLE_BTN_NORTH_EAST = 34 | 向东北滚动 | ![](./img/zh-cn_image_0000002626231266.png) |
| MIDDLE_BTN_NORTH_WEST = 35 | 向西北滚动 | ![](./img/zh-cn_image_0000002626071354.png) |
| MIDDLE_BTN_SOUTH_EAST = 36 | 向东南滚动 | ![](./img/zh-cn_image_0000002656470631.png) |
| MIDDLE_BTN_SOUTH_WEST = 37 | 向西南滚动 | ![](./img/zh-cn_image_0000002656350681.png) |
| MIDDLE_BTN_NORTH_SOUTH_WEST_EAST = 38 | 四向锥形移动 | ![](./img/zh-cn_image_0000002626231268.png) |
| HORIZONTAL_TEXT_CURSOR = 39 | 垂直文本选择 | ![](./img/zh-cn_image_0000002626071356.png) |
| CURSOR_CROSS = 40 | 十字光标 | ![](./img/zh-cn_image_0000002656470633.png) |
| CURSOR_CIRCLE = 41 | 圆形光标 | ![](./img/zh-cn_image_0000002656350683.png) |
| LOADING = 42 | 正在载入动画光标 | ![](./img/zh-cn_image_0000002626231270.png) |
| RUNNING = 43 | 后台运行中动画光标 | ![](./img/zh-cn_image_0000002626071358.png) |
| MIDDLE_BTN_EAST_WEST = 44 | 向东西滚动 | ![](./img/zh-cn_image_0000002656470635.png) |
| RUNNING_LEFT = 45 | 后台运行中动画光标(拓展1) | ![](./img/zh-cn_image_0000002656350685.png) |
| RUNNING_RIGHT = 46 | 后台运行中动画光标(拓展2) | ![](./img/zh-cn_image_0000002626231272.png) |
| AECH_DEVELOPER_DEFINED_ICON = 47 | 圆形自定义光标 | ![](./img/zh-cn_image_0000002626071360.png) |
| SCREENRECORDER_CURSOR = 48 | 录屏光标 | ![](./img/zh-cn_image_0000002656470637.png) |
| LASER_CURSOR = 49 | 悬浮光标。手写笔进入空鼠模式时使用该光标，无法直接设置 。 空鼠模式支持通过手写笔在空中转动来控制屏幕上虚拟光标的移动，并借助笔身按键实现上下翻页功能，用于演示PPT、隔空操作等场景。 | ![](./img/zh-cn_image_0000002656350687.png) |
| LASER_CURSOR_DOT = 50 | 点击光标。手写笔进入空鼠模式时使用该光标，无法直接设置 。 空鼠模式支持通过手写笔在空中转动来控制屏幕上虚拟光标的移动，并借助笔身按键实现上下翻页功能，用于演示PPT、隔空操作等场景。 | ![](./img/zh-cn_image_0000002626231274.png) |
| LASER_CURSOR_DOT_RED = 51 | 激光笔光标。手写笔进入空鼠模式时使用该光标，无法直接设置 。 空鼠模式支持通过手写笔在空中转动来控制屏幕上虚拟光标的移动，并借助笔身按键实现上下翻页功能，用于演示PPT、隔空操作等场景。 | ![](./img/zh-cn_image_0000002626071362.png) |
| DEVELOPER_DEFINED_ICON = -100 | 自定义光标，开发者可使用[OH_Input_SetCustomCursor](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_setcustomcursor)设置自定义光标，不支持使用[OH_Input_SetPointerStyle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_setpointerstyle)直接设置。 | 自定义光标样式，通过接口设置。 |
