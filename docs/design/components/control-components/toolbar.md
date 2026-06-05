---
title: 工具栏
sidebar_label: 工具栏
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/toolbar-0000001929683232
format: md
---

# 工具栏

工具栏用于展示针对当前界面的操作选项。开发相关描述请参考 [Navigation/ToolBarItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#toolbarconfiguration10) 文档和高级组件 [ToolBar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-toolbar) 文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/DBB92EE91757.jpg "点击放大")

### 如何使用

当界面有多个常用操作时，考虑把操作选项放在工具栏上，底部页签和工具栏不能同时使用。

**避免错误的显示操作选项。**工具栏中最多展示4个操作和1个更多选项，当常用操作过多时，显示不下的常用操作、非常用操作以及难用图形表示的功能，放入“更多”菜单。不允许出现工具栏只有“更多”的情况。不允许仅显示一个操作。

**避让系统导航条。**在 HarmonyOS 的系统界面底部会固定显示导航条，因此，在自定义工具栏样式的时候需要切记避让导航条区域，避免应用的文本或图标信息与导航条重叠。控件在默认情况下会避让导航条，工具栏组件整体高度会扩展至导航条区域，但工具栏的按键热区与导航条热区相互独立。工具栏默认高度为 52vp，如果开发者需要自定义工具栏的样式和结构，可以通过 [expandSafeArea](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#ignorelayoutsafearea12) 了解能力规格。

**使用 HarmonyOS Symbol 来展示图标信息。**在工具栏中可以替换系统 [Symbol](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#toolbaritem10) 样式来更灵活的展示图标信息，这种方式更匹配文本的展示效果，同时提供点击反馈，更直接的展示界面设计的细节。开发者可以在 [HarmonyOS Symbol](https://developer.huawei.com/consumer/cn/design/harmonyos-symbol/) 开源网站上查询目前已经存在的图标样式。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/D057C1F7A468.png "点击放大")

**响应式布局**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2580FCF40C10.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2700A9247740.png "点击放大") |
| **手机竖屏两个操作** | **手机竖屏多个操作** |
|  |  |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/E51D895D7B33.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/263B52ECFBEF.png "点击放大") |
| **手机横屏合并入标题栏** | **折叠屏展开合并入标题栏** |
|  |  |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/3751CCCE6FD6.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/1B80FE35DC9A.png "点击放大") |
| **平板竖屏** | **平板横屏合并入标题栏** |

分栏和分屏情况下，工具栏在其可用区域内，按照竖屏规则布局。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/851C4807B9EA.png "点击放大")

### 开发文档

[Navigation/ToolBarItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation#toolbarconfiguration10)

[Toolbar](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ohos-arkui-advanced-toolbar)