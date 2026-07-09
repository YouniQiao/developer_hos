---

title: "模块描述"
upstream_id: "harmonyos-references/arkts-apis-window"
catalog: "harmonyos-references"
synced_at: "2026-07-09T00:57:33.957117"
content_hash: "8a2fb6b661a1"
---


# 模块描述

提供管理窗口的一些基础能力，包括对当前窗口的创建、销毁、各属性设置，以及对各窗口间的管理调度。

该模块提供以下窗口相关的常用功能：

- [Window](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-window)：当前窗口实例，窗口管理器管理的基本单元。
- [WindowStage](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/arkts-apis-window-windowstage)：窗口管理器。管理各个基本窗口单元。

![](./img/note_3.0-zh-cn.png)

- 本模块首批接口从API version 6开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
- 针对系统能力SystemCapability.Window.SessionManager，请先使用[canIUse()](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-syscap#caniuse)接口判断当前设备是否支持此syscap及对应接口。

#### 导入模块

```
import { window } from '@kit.ArkUI';
```
