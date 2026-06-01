---
title: 操作块
sidebar_label: 操作块
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/chips-0000001929842624
---
# 操作块

一种块状的入口，可展示当前内容页签，也可包含图片和文本。常用于展示收件人，例如：邮件收件人或信息收件人。开发相关描述请参考 [Chip](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-chip) 文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213455.97069110448452216569005505677087_50001231000000_2800_53D5D94CB349631C9D7D6A85978E0EAD920E1E1CEBC0BA655F229BA97AF1C493.jpg "点击放大")

### 如何使用

**当 Chips 用于页签功能使用时需要明确选中项的状态。**无论使用系统默认效果，还是通过自定义来实现属于应用自己风格的控件样式，用户都需要在操作块上收到操作的即时反馈，响应时间需小于用户可接受的等待时间，激活状态需要明显区分于其他未激活样式。

**通过** [ChipOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-chip#chipoptions) **对组件的基础参数进行配置**，以实现应用对于组件的个性化诉求。

**使用 HarmonyOS Symbol 来展示图标信息。**在 Chips 中可以替换系统 [Symbol](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-chip#chipsymbolglyphoptions12) 样式来更灵活的展示图标信息，这种方式更匹配文本的展示效果，同时提供点击反馈，更直接的展示界面设计的细节。开发者可以在 [HarmonyOS Symbol](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol/) 开源网站上查询目前已经存在的图标样式。

**类型**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213455.96989902150140976575675476237265_50001231000000_2800_A19021730D46C4CDDB9F1CBFA081114C7D297494A956A79D2661DB8A4F1D4425.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213455.19942589407928678610507849403932_50001231000000_2800_69C5E3761CE6D65C10F4D75032B06CA34FB73FB48EA1A3A832B800FC45E6F06B.png "点击放大") |
| **页签类型** | **筛选类型** |

### 视觉规则

**手机**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213455.28047665306186421514844061784673_50001231000000_2800_9A5CDE2ED9FB14E04F672DCB00E0F2139776894D8AC1C1AC3C965B0A22CEAE98.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213455.26907527745839066803605498318982_50001231000000_2800_EB612E1E581FF974747E20484BBF3B71BEF81F350C4E4F6C9A05E36D863A3719.png "点击放大") |
| **基础样式** | **可配置元素** |

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213456.17288132431889005032516901173586_50001231000000_2800_DCF0CEA05243057F8760C966CD99F6EC840791B874D29573D2AC691CD250FC5D.png "点击放大")

不定义最小和最大宽度，组件宽度由内部组成元素的宽度决定，文本内容不可为空，组件仅允许横向拓展宽度，不允许换行

组件宽度 = 元素宽度 + Padding (文本元素为必选)

**电脑设备**

在电脑设备上圆角规格与手机有差异。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213456.30099868311777660484819087920803_50001231000000_2800_DD0D901D2DBB342F983FF0CF05AB7F47AE689312BAAA4B7A07BA3882A3675569.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20250619213456.10504921004473068436076791635796_50001231000000_2800_05ABBA12C2C3ECCA361355B1C217A2E4B47EBC72B2E3AEF48781CBE2B528B4A0.png "点击放大") |
| **页签类型** | **筛选类型** |

### 开发文档

[Chip](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-chip)