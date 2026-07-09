---
title: "@ohos.net.sharing (网络共享管理)"
upstream_id: "harmonyos-references/js-apis-net-sharing"
catalog: "harmonyos-references"
content_hash: "976f4487deb6"
synced_at: "2026-07-09T00:59:27.526636"
---

# @ohos.net.sharing (网络共享管理)

网络共享管理模块用于将设备网络连接共享给其他连接设备。

![](./img/note_3.0-zh-cn.png) 本模块首批接口从API version 9开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。

#### 导入模块

```
import { sharing } from '@kit.NetworkKit';
```

#### NetHandle

type NetHandle = connection.NetHandle

数据网络的句柄。在调用NetHandle的方法之前，需要先获取NetHandle对象。

系统能力：SystemCapability.Communication.NetManager.Core

| 类型 | 说明 |
| --- | --- |
| [connection.NetHandle](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-net-connection#nethandle) | 网络链路信息。 |
