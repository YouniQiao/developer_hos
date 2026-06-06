---
title: 空白
sidebar_label: 空白
original_url: https://developer.huawei.com/consumer/cn/doc/design-guides/blank-0000001956815485
format: md
---

# 空白

空白填充组件，在容器主轴方向上，空白填充组件具有自动填充容器空余部分的能力。仅当父组件为 Row/Column/Flex 时生效。开发相关能力请参考 [Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank) 文档。

![](https://contentcenter-vali-drcn.dbankcdn.cn/pvt_2/DeveloperAlliance_scene_100_1/81/v3/7raHhqqIQYi5yi8VlVFG6g/zh-cn_image_0000001929672804.jpg "点击放大")

### 如何使用

**空白组件本身不包含任何内容，仅用于辅助布局。**当在一个父组件中添加元素时，使用空白可以在父组件的主轴方向自动计算并返回合适的元素间距，能减少设计过程中针对不同设备的反复计算，提高效率，并保证可扩展性。

**结合行布局/列布局在不同的主轴方向实现灵活布局。**在想要对齐的另一侧插入“空白”组件，它会自动计算元素间距，无需再单独标注。

|  |  |
| --- | --- |
| ![](../../general-design-basics/visual-design/img/img_45f43c1a4170_zh-cn_image_0000001956991469.png "点击放大") | ![](../../general-design-basics/visual-design/img/img_3d59a7098b6f_zh-cn_image_0000001956831661.png "点击放大") |
| **左右元素分别对齐** | **元素居中显示** |
|  |  |
| ![](../../general-design-basics/visual-design/img/img_6e33121431b7_zh-cn_image_0000001929832196.png "点击放大") | ![](../../general-design-basics/visual-design/img/img_1e30d8667df9_zh-cn_image_0000001929672820.png "点击放大") |
| **元素居右显示** | **元素居左显示** |

### 开发文档

[Blank](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-blank)