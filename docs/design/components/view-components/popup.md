---
title: 气泡提示
sidebar_label: 气泡提示
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/popup-0000001956975269
---
# 气泡提示

通过临时弹出指向性气泡提示用户当前如何操作。开发相关能力请参考 [Popup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup) 文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2E57CAB91CF1.jpg "点击放大")

### 如何使用

**气泡提示是一种临时性的、非模态的小型弹出框，用于向用户显示简短的提示信息或补充说明。**通常由一个小三角形指示器和一个矩形框构成，矩形框内包含文字或图标。

**气泡提示常用于对某个对象进行简短描述或补充说明。**气泡提示的指向对象通常是链接文字或图标，用于那些不太被用户所关注的元素场景。在 电脑设备上，当鼠标悬停在某个控件上时，也可能会显示该控件的功能说明。

**气泡提示分为带操作和不带操作两种类型。**不带操作主要以文本提示为主，这类气泡出现时间有最大限制，或是点击界面空白区域即可消失。带操作的需要常驻显示，用户只能通过执行关闭按钮或者其他功能键跳转入口才可关闭。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2703F451CAAA.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/1AE8BAD61477.png "点击放大") |
| 不带操作的气泡提示 | 带操作的气泡提示 |

### 视觉规则

**手机**

**气泡内默认元素规格**

在气泡提示中提供了一些默认布局样式，开发者可以通过 [PopupOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-popup) 中提供的接口类型实现 HarmonyOS NEXT 默认效果。其中包含规定样式的默认布局和接口能力。默认样式需要绑定 [bindPopup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#bindpopup) 进行使用。

|  |  |
| --- | --- |
| **对应元素接口名**  1.icon  2.title  3.message  4.showClose  5.button | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/DE961F311BD8.png "点击放大") |

**可选择默认样式**

通过以上接口内容可以搭配出以下布局样式。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/76186A1ED5A1.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/B47B57D5B55E.png "点击放大") |
| Message | Message + showClose |
|  |  |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6C6C3EB79AAA.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/F947D05F05BC.png "点击放大") |
| Message + showClose + title | Message + showClose + title + button |
|  |  |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/AE166F1F0F74.png "点击放大") |  |
| Message + showClose + title+ button + icon |  |

**指向型气泡**

指向型气泡默认最大宽度为“窗口或屏幕宽度-两侧 Margin”来计算，当控件最大拉伸到 400vp 宽度 时不再跟随放大。可以指定气泡距离界面边缘最小宽度，气泡到屏幕边缘最小可以到 6vp，以保证尖角与点击元素可以对齐。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/5629B226C073.png "点击放大")

**嵌入型气泡**

嵌入型气泡主要用于同界面元素混排，在界面发生滑动等操作时，可跟随界面内容一同响应。

在界面布局和适配上，嵌入型气泡应该跟随界面适配规则进行拉伸等适配。

**折叠屏**

**指向型气泡**

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/17084CE4F4D5.png "点击放大")

**嵌入型气泡**

跟随界面布局规则进行适配，若界面整体以拉伸为主，则跟随拉伸。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/B02538D77864.png "点击放大")

**平板**

**指向型气泡**

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/9CCC40C425F3.png "点击放大")

**嵌入型气泡**

分栏场景下，基于气泡所在分栏区域内容宽度进行适配，同内容区最大宽度、拉伸等规则。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/7BD902CA6904.png "点击放大")

**电脑设备**

在电脑设备上圆角规格与手机有差异，同时会默认提供一圈描边色用于提升识别性。

宽度比例拉伸规则遵从通用规格。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/3245BB63F8EC.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/E2D443B5D7C2.png "点击放大") |
| 指向性气泡 | 非指向性气泡 |

**气泡箭头适配规则**

**气泡箭头可根据指向诉求，在一定范围内自定义偏移属性。箭头的边缘距离气泡边缘的默认间距为** 20vp，通过 arrowPointPosition 可以配置箭头的垂直和水平方向上的位置，有“Start”、“Center”、“End”三个位置点可以配置。以上所有位置点均位于父组件区域的范围内，不会超出父组件的边界范围。

**在极限场景下可以指定箭头指向的样式**。界面布局中某些特殊位置的极端场景可能导致尖角无法完全对齐的情况，这时可以考虑使用边缘角度进行对齐处理，提供上下对齐和左右对齐两种规格。通过 arrowOffset 来指定偏移位置，当数值为 0 时则可以指定箭头布局在气泡的边缘。以上规格可以通过 [CustomPopupOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup#custompopupoptions8类型说明) 内的属性来支持。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/1DC3F9CCC253.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/1C878857EA1B.png "点击放大") |
| 上下结构边缘尖角对齐 | 左右结构边缘尖角对齐 |

### 开发文档

[Popup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-popup)

[Advance.Popup](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-popup)