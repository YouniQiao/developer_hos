---
title: "Camera_OutputCapability"
upstream_id: "harmonyos-references/capi-oh-camera-camera-outputcapability"
catalog: "harmonyos-references"
content_hash: "c4e75937792b"
synced_at: "2026-07-09T01:00:25.611443"
---

# Camera_OutputCapability

```
typedef struct Camera_OutputCapability {...} Camera_OutputCapability
```

#### 概述

相机输出能力。

起始版本： 11

相关模块： [OH_Camera](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera)

所在头文件： [camera.h](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h)

#### 汇总

#### [h2]成员变量

| 名称 | 描述 |
| --- | --- |
| [Camera_Profile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-profile)** previewProfiles | 预览配置文件列表。 |
| uint32_t previewProfilesSize | 预览配置文件列表的大小。 |
| [Camera_Profile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-profile)** photoProfiles | 拍照配置文件列表。 配置文件中的size设置的是相机分辨率宽高，非实际出图宽高。 |
| uint32_t photoProfilesSize | 拍照配置文件列表的大小。 |
| [Camera_VideoProfile](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-oh-camera-camera-videoprofile)** videoProfiles | 录像配置文件列表。 |
| uint32_t videoProfilesSize | 录像配置文件列表的大小。 |
| [Camera_MetadataObjectType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/capi-camera-h#camera_metadataobjecttype)** supportedMetadataObjectTypes | 元数据对象类型列表。 |
| uint32_t metadataProfilesSize | 元数据对象类型列表的大小。 |
