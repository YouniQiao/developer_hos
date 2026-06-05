---
title: 操作块
sidebar_label: 操作块
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/chips-0000001929842624
format: md
---

# 操作块

一种块状的入口，可展示当前内容页签，也可包含图片和文本。常用于展示收件人，例如：邮件收件人或信息收件人。开发相关描述请参考 [Chip](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-chip) 文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/53D5D94CB349.jpg "点击放大")

### 如何使用

**当 Chips 用于页签功能使用时需要明确选中项的状态。**无论使用系统默认效果，还是通过自定义来实现属于应用自己风格的控件样式，用户都需要在操作块上收到操作的即时反馈，响应时间需小于用户可接受的等待时间，激活状态需要明显区分于其他未激活样式。

**通过** [ChipOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-chip#chipoptions) **对组件的基础参数进行配置**，以实现应用对于组件的个性化诉求。

**使用 HarmonyOS Symbol 来展示图标信息。**在 Chips 中可以替换系统 [Symbol](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-chip#chipsymbolglyphoptions12) 样式来更灵活的展示图标信息，这种方式更匹配文本的展示效果，同时提供点击反馈，更直接的展示界面设计的细节。开发者可以在 [HarmonyOS Symbol](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol/) 开源网站上查询目前已经存在的图标样式。

**类型**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/A19021730D46.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/69C5E3761CE6.png "点击放大") |
| **页签类型** | **筛选类型** |

### 视觉规则

**手机**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/9A5CDE2ED9FB.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/EB612E1E581F.png "点击放大") |
| **基础样式** | **可配置元素** |

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/DCF0CEA05243.png "点击放大")

不定义最小和最大宽度，组件宽度由内部组成元素的宽度决定，文本内容不可为空，组件仅允许横向拓展宽度，不允许换行

组件宽度 = 元素宽度 + Padding (文本元素为必选)

**电脑设备**

在电脑设备上圆角规格与手机有差异。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/DD0D901D2DBB.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/05ABBA12C2C3.png "点击放大") |
| **页签类型** | **筛选类型** |

### 开发文档

[Chip](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-chip)