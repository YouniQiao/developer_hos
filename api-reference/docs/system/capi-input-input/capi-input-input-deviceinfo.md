---
title: "Input_DeviceInfo"
upstream_id: "harmonyos-references/capi-input-input-deviceinfo"
catalog: "harmonyos-references"
content_hash: "e96a6c7c6e68"
synced_at: "2026-07-09T00:59:50.404224"
---

# Input_DeviceInfo

```
typedef struct Input_DeviceInfo Input_DeviceInfo
```

#### 概述

输入设备信息，用于描述输入设备的基本信息和能力特征，包括设备类型、设备ID等属性。开发者可以通过此结构体获取和管理输入设备的详细信息，便于设备识别和配置管理。

起始版本： 13

相关模块： [input](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-input)

所在头文件： [oh_input_manager.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h)

相关接口：

| 名称 | 描述 |
| --- | --- |
| [OH_Input_CreateDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_createdeviceinfo) | 创建输入设备信息的对象。通过调用[OH_Input_DestroyDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroydeviceinfo)销毁输入设备信息的对象。 |
| [OH_Input_DestroyDeviceInfo](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-input-manager-h#oh_input_destroydeviceinfo) | 销毁输入设备信息的对象。 |
