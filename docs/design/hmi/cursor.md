---
title: 光标交互
sidebar_label: 光标交互
original_url: https://developer.huawei.com/consumer/cn/doc/design-guides/hmi-cursor-0000001795531205
format: md
---

# 光标交互

当用户使用指向设备 (鼠标、触摸板、 AR/VR 手柄等) 与应用程序进行间接交互时，光标指向的对象和光标本身应提供适当的视觉反馈以表达对象的可交互性。同时，应考虑相比手指触摸的交互，利用光标精细化操作和悬浮操作的特性，以提升应用生产力、简化交互任务和增强信息展示。本节规范主要适用于使用鼠标和触摸板来操作平面光标的场景，基本设计原则可推广至 AR/VR 手柄等空间交互场景。

### 设计原则

光标交互区别于触摸交互的重要方面是精细化操作和悬浮操作，设计师可考虑如何利用这一特性配合特定的光标形态来简化交互任务和提升生产力。

**光标位于界面所有元素最上方**

使用光标可以通过滚动、滑动、悬浮等方式与控件交互。指针在屏幕上的 Hover 总是响应当前激活的界面，未被激活的界面在鼠标指针划过界面元素时，一般不需要响应指针的 Hover 动作。当光标悬浮在特定界面对象或区域上时，可使用系统定义的标准光标样式集合来表达其交互状态。

**提供一致的体验**

为保证全局交互体验的一致性，应优先使用系统已定义的光标样式集合。在不同操作方式下需要提供一致的体验，用户通常使用指针与键盘同时操作，按住键盘时使用指针移动对象和按住键盘时使用手指触屏移动对象的结果应保持一致。

**优先使用系统指针形状**

和系统功能类似的方案优先使用系统指针效果。功能需要新的指针样式时才自定义指针形状。指针的形状代表着用户在当前环境中可以执行的操作，对于自定义的光标样式，应尽可能简洁直观地表达在当前界面状态下用户可进行的操作和所需精度，不应在视觉上过分吸引用户的注意力。

**自动隐藏和显现**

对于以触摸交互为主的终端设备，如果光标在一段时间内没有移动或用户使用了触摸交互，则自动隐藏光标保证界面的干净整洁。

### 指针样式

使用光标进行精细化交互时可以通过指针样式给予用户适当的反馈，还能够在不同的场景下通过指针提供用户关心的辅助信息。系统提供选择、移动、调整、拖动、系统状态和一些常见场景的指针样式。

## 选择类指针

| 名称 | 指针图例 | 使用场景 |
| --- | --- | --- |
| **箭头** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/98F27C4935F6.png) | 指向和选择项目、移动滚动条 |
| **I 型光标** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/7882A2DE3636.png) | 鼠标上移到文本框类控件时，指针由箭头自动变为 I 型光标 |
| **手形指针** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6D74CCEDF120.png) | 鼠标上移到可点击的链接、对象可以使用手型光标 |
| **十字准星** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/563CD7EFBCC0.png) | 选择图像中的矩形区域时，该光标会出现 |

## 移动类指针

| 名称 | 指针图例 | 使用场景 |
| --- | --- | --- |
| **张开的手** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/7EB181B773EB.png) | 鼠标悬停在可在屏幕中拖动的对象上时会出现此指针。 |
| **并拢的手** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/DA1A9EE83431.png) | 在屏幕中拖动对象时通常会出现此指针，在视图中拖移以调整内容的位置，例如在“地图”中四处拖移地图。 |
| **十字** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/CCCCA6DE6074.png) | 表示当前鼠标可移动选中的对象，如在照片预览器中移动选中的矩形区域。 |

## 调整类指针

| 名称 | 指针图例 | 使用场景 |
| --- | --- | --- |
| **内部双向调整** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/E1BCC3DC20CB.png) | 表示当前可以内部双向调整大小 |
| **内部单向调整** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/25F2FC89BC70.png) | 表示当前可以内部单向调整大小 |
| **外部双向调整** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/FF758643EFB5.png) | 表示当前可以外部双向调整大小 |
| **外部单向调整** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/51B418BA65C6.png) | 表示当前可以外部单向调整大小 |
| **锥形滚动** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/8AD4BB66A1B9.png) | 表示鼠标的滚动功能启动，四方的三角形表示当前窗口的可滚动方向 |

## 拖拽类指针

| 名称 | 指针图例 | 使用场景 |
| --- | --- | --- |
| **单个拷贝** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/E5D4E54AC652.png) | 复制单个拖拽对象 |
| **多个拷贝** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2B48E10AE88F.png) | 复制多个拖拽对象 |
| **单个移动** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/A5943841831F.png) | 移动单个拖拽对象 |
| **多个移动** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/979F54EBAF10.png) | 移动多个拖拽对象 |
| **禁止** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/83D7C39EE7E6.png) | 拖拽对象被禁止接纳 |

## 其他指针

| 名称 | 指针图例 | 使用场景 |
| --- | --- | --- |
| **截图** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6A19B29A3428.png) | 表示对该窗口或桌面进行截图操作 |
| **截图十字准星** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/A19F23E02FB0.png) | 表示对该矩形区域行截图操作 |
| **颜色放大镜** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/40E4A32F91D8.png) | 在给定像素位置处采样颜色时以放大镜样式呈现 |
| **画面缩放** | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/74665DBDBE08.png) | 表示区域视图可进行放大操作，点击功能菜单或按住 Ctrl 加上滚轮向上向下触发 |

### 悬浮对象样式

当光标进入并悬浮在界面元素上时，界面元素可通过适当的视觉和行为反馈来使其对用户聚焦和提高指向效率。使用了悬浮状态的元素不使用手型指针进行提示，界面元素需要响应光标悬停的动作，以清晰表达该元素的可交互性。在光标范式下，用户将光标移动到界面元素上执行对应的操作。这种情况下，需要界面元素在光标悬停的时候就反馈出其是否可交互，避免用户点击后才发现该元素不可交互而产生挫败感。在表达界面元素的可交互性时，应考虑以下设计原则：

**显著性**。在悬浮态下，与普通状态和其周围的界面元素相比，拥有清晰的功能可见性。

**微妙性**。视觉上不应过于强调或与普通状态具有较大差别，避免干扰用户注意力。

**一致性**。同类型控件的可交互性表达 (视觉和动效上) 应具有一致性。从平板/电脑向电视、 AR/VR 使用场景扩展时，不同设备间控件的悬浮态也应具备一定程度的表达一致性。

**在悬浮态下，界面元素要表达其可交互的热区**

图形界面中可能存在很多界面元素其视觉可见部分和实际可 (触控) 交互的热区相差很大。在此类场景下，光标悬停时准确表达可交互的热区有利于用户感知元素有效的触发区域，并进而提高交互的效率。

**界面元素的悬浮态效果类型**

HarmonyOS 具有 2 种默认的界面元素的悬浮态效果：浮起和背板高亮。

1. 浮起：当光标进入对象时，对象放大。离开时，对象尺寸恢复。尺寸变化过程中辅以过渡动画使体验流畅。浮起的效果一般适用于可见部分和实际热区大小接近、有背景填充、且在布局上与其他元素不相邻的控件，典型的控件类型包括强调按钮、导航点、勾选等。

2. 叠加背板：当光标进入对象时，对象底部叠加颜色色块。整体上，背板高亮的效果根据控件类型可分为两类：

a. 对于视觉可见部分和实际可交互热区范围相差很大的控件，浅色的圆角矩形叠加于内容底层以高效表达其热区。此类控件通常无背景填充，典型的类型包括文本按钮、工具栏、Tab 栏等。

b. 对于有明显边界的容器类控件，比如列表、卡片、菜单等，当光标进入控件时，仅改变控件背板颜色以表达其可交互性。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/7A455CC4C7C5.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2BA44D9BDE02.png "点击放大") |
| 浮起 | 叠加背板 |