---
title: 单选框
sidebar_label: 单选框
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/radio-0000001929853288
format: md
---

# 单选框

单选是一种只能用于在互斥选项中进行选择的控件。开发相关描述请参考 [Radio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-radio) 文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/6BCA5D2FC7E9.jpg "点击放大")

### 使用场景

**单选控件多与列表和宫格类布局组合使用，用于在多个列表或宫格选项中选择一个。**选择内容建议控制在一屏内，超出一屏的场景可能会在阅读选中项时无法直接找到被选中内容。若内容多于一屏场景可以考虑使用[下拉按钮](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-select)控件。

**当有推荐选项或者是用户常用选项时，建议默认选中。**若默认项对用户选择产生干扰，则不要默认。当用于对立相反的选项且只有两个选项时，例如同意、不同意，这两个选项应该整合为一个勾选控件而不是使用单选控件。

**不要在单选的情况下使用勾选。**单选与勾选是彼此互斥的功能控件，如果需要组合使用也应在不同的组别分类内分别使用。单选控件只能选择一个选项，选择新选项时会自动取消之前选中的选项。

**合理展示选择内容的优先级别。**单选控件建议以逻辑顺序排列选项，例如，被选择可能性的从高到低、从小到大、操作难度从简单到复杂、风险程度从低到高等。

**自定义单选样式。**开发者可以默认调用勾选的系统默认效果，同时开发者可以自定义资源样式，通过传入资源的方式来匹配业务诉求和风格差异。使用 [RadioIndicatorType](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-radio#radioindicatortype12枚举说明) 接口来配置不同的效果，TICK 代表勾号样式，DOT 代表圆点样式，也可以使用 CUSTOM 样式来自定义资源。

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/300BF616F686.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/3D2E8D6B8C42.png "点击放大") |
| **默认 TICK 选中状态** | **默认 TICK 未选中状态** |
|  |  |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2592546832DD.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/ECA562E18F9B.png "点击放大") |
| **DOT 默认样式** | **CUSTOM 自定义样式** |

### 开发文档

[Radio](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-radio)