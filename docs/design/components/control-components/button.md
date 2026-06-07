---
title: 按钮
sidebar_label: 按钮
original_url: /docs/design/components/control-components/button
format: md
---

# 按钮

一种常用控件，点击可触发对应操作。开发相关描述请参考 [Button](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button) 文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/AAA4C809B5DD.jpg "点击放大")

### 如何使用

视按钮重要程度、屏幕空间大小、整体布局选择按钮类型。按钮重要程度：强调按钮>填充按钮>文字按钮。

含状态的按钮：上传、下载类的按钮可以包含一系列状态：下载，等待，下载中，暂停，重试，完成。

若用户触发将产生严重后果的不可逆操作，如“删除”，“重置”，“取消编辑”，“停止”等，使用红色警告色。

强调按钮是一种常见的按钮形式，点击执行操作。在界面上很突出，用于强调当前操作。典型场景：弹出框、界面底部按钮。例如：保存、支付、订阅、安装。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/4B5F0303D67A.png "点击放大")

**普通按钮用于一般界面操作。**清晰的背板可以明确的指示用户可操作的区域。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0A953D34B4B5.png "点击放大")

**文本按钮为纯文本按钮，点击执行操作，可最大限度减少按钮对内容的干扰。**界面内容区 (跟随内容)、弹出框的操作按钮：需使用强调色蓝色，以便用户找到。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2BA03BBA6692.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6A5DAAAB6669.png "点击放大") |

**在显示区域受到限制时，使用图标按钮可以节省空间，让用户对当前界面内容执行快速操作。**在以下场景较为常见：标题栏/工具栏、控制中心、悬浮显示在内容上

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0DEBE33331D8.jpg "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/0631FF950257.jpg "点击放大") |
| **带容器的图标按钮** | **普通图标按钮** |

**强调按钮、普通按钮、文字按钮都可以使用等待状态。等待状态用于表达正在执行或加载的过程，操作执行完成或加载完成，则进入下一界面。**

以下使用场景用等待状态按钮替换正在加载弹出框：1. 弹出框闪现的情况。在加载极快的情况下，会出现闪现情况。2. 多个连续跳转的场景。用加载按钮减少复杂度。

### 视觉规则

**手机**

按钮样式请使用控件子样式来书写，不要直接给控件写参数，以下参数均已落地在控件中，子样式接口能力参照 [ButtonStyleMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttonstylemode11枚举说明) **和** [ButtonRole](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#buttonrole12枚举说明) 介绍文档。可通过接口能力实现不同的按钮风格。例如：可通过修改[通用属性 borderRadius](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-border#borderradius) 实现电脑中的小圆角风格，详见电脑 部分。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/9CC632E93034.png "点击放大")

**所有按钮都支持两种尺寸。**按钮控件提供了两种尺寸接口，NORMAL 和 SMALL，分别对应设计规范普通按钮和小按钮，尺寸接口能力参照 [controlSize](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button#controlsize11枚举说明) 介绍文档。

**强调按钮**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/D3238C71F458.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/DAAC84B46834.png "点击放大") |
| 默认样式 | 多态 |

**普通按钮**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/5EB47A37C597.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/651D211BFB99.png "点击放大") |
| **默认样式** | **多态** |

**文字按钮**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/615836374652.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/E1D445F952AA.png "点击放大") |
| 默认样式 | 多态 |

**圆形按钮**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/CFE6D9DD2CAE.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/A60505B06DA5.png "点击放大") |
| **默认样式** | **多态** |

**电脑设备**

**在电脑设备中，使用更小的按钮圆角体现设备风格。**

**强调按钮**

|  |  |  |
| --- | --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/82501C188E31.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/C4B0E25E0D18.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/ACD615D1563E.png "点击放大") |

**普通按钮**

支持普通按钮和小按钮两种尺寸。

|  |  |  |
| --- | --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/23D4B6006AA5.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6DF56B64BECF.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/4FDE1EE14BF1.png "点击放大") |

**文字按钮**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/F96B3D1D5AB1.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/7CE5490B69E9.png "点击放大") |

**智能穿戴**

在穿戴设备中，除了圆形、胶囊、文本按钮，常用的还有弧形按钮（仅圆表），它是贴合了圆形设备的边缘而适配的常用按钮。

弧形按钮一般悬浮在界面下方，有两个弧形按钮时另一个在上方；按钮背板有背景高斯模糊效果。

**强调按钮**

文本超长则缩小2级，还放不下则跑马灯。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/80F7BB2AE544.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/9F3F78DB4463.png "点击放大") |

**普通按钮**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/BC7283317902.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/83E2EE930CC8.png "点击放大") |
|  | 不可用状态，背板不变，仅文本不透明度变为 40%。 |

**胶囊、文本、圆形按钮**

胶囊按钮、圆形按钮的 3 种状态变化，与“弧形按钮”相同。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/C6101CFC062F.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/9865C1B5FD7E.png "点击放大") |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/B13F572751A6.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/5D7700BB252E.png "点击放大") |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/CE263635F128.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/26218F4B29D1.png "点击放大") |

### 响应式布局

**手机**

**手机竖屏**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/A643D9C946A5.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/67757572BB03.png "点击放大") |
| **单按钮&双按钮布局** | **三个以上按钮布局** |

**手机横屏**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/570B7CCCAC4B.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/C4BD02323515.png "点击放大") |
| 单个按钮在横竖屏切换时最大扩展到 448vp  双按钮，左右布局，两者间距 12vp，总体宽度与 448vp 齐平  3 个以上按钮上下排列，按钮上下间隔与竖屏一致，间距保持 12vp | 在半模态中使用遵循同样规格  半模态最大宽度 480vp 的场景下，按钮两边距离半模态保留左右各 16vp 间距，使按钮宽度与全屏显示宽度保持一致手机竖屏 |

**折叠屏及平板**

在更大屏幕上，按钮保持最大 448vp 的宽度，不再跟随屏幕伸缩而改变宽度。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/CBBD83832801.png "点击放大")

在半模态等窗口化场景下保持同样规则，基于容器的宽度减去两侧 16vp 间距，保持最大 448vp 按钮宽度。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/BDA23311875B.png "点击放大")

**智能穿戴**

单个按钮优先使用圆形按钮，如需悬浮或更清晰表达按钮含义时，用弧形按钮。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/04161F52FE52.png "点击放大")

多个按钮可使用胶囊按钮，按钮根据内容在最大、最小宽度内自适应。（多个按钮时，按钮长度需相等）

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/385D1ADB5F22.png "点击放大")

文本按钮（混排）

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/7CDB1EA35B8A.png "点击放大")

通用弹出框布局

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/D758E7C4DDD9.png "点击放大")

### 开发文档

[Button](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-button)