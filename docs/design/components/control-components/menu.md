---
title: 菜单
sidebar_label: 菜单
source_url: https://developer.huawei.com/consumer/cn/doc/design-guides/menu-0000001957001877
format: md
---

# 菜单

一种临时性弹出窗口，用于展示用户可执行的操作。开发相关描述请参考 [Menu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menu) 文档。

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/A807A268D5C0.jpg "点击放大")

### 如何使用

**菜单项中不显示与当前内容无关的项。**菜单顺序：最常用菜单项放在菜单顶部依次排列。**菜单的通用基础构成元素**通过 [MenuItemOptions](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menuitem#menuitemoptions对象说明) 进行配置，选中状态及选中图标可通过 [Selected](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menuitem#selected) 进行配置。**多级菜单**的展开样式可通过 [subMenuExpandingMode](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menu#submenuexpandingmode12) 进行配置。**长按悬浮菜单**通过 [bindContextMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#bindcontextmenu8) 进行调用。

**基础样式**

|  |  |
| --- | --- |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/EFAFCFFC3305.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/F7E516FE1AAA.png "点击放大") |
| **普通菜单** | **带图标样式菜单** |
|  |  |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/2DB31448D64E.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/FDE921F1E251.png "点击放大") |
| **带标题样式菜单** | **多级菜单-原地展开类型** |
|  |  |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/92BF6008BF21.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/F7BB42B05175.png "点击放大") |
| **多级菜单-层叠类型** | **长按悬浮菜单** |
|  |  |
| ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/FF6EF5F038F2.png "点击放大") | ![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/042438165B43.png "点击放大") |
| **多级菜单-上下文** | **指向型菜单** |

### 响应式布局

**手机**

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/3E579BD86970.png "点击放大")

泛手机统一宽度为固定 224vp

**电脑设备**

![](https://communityfile-drcn.op.dbankcloud.cn/FileServer/getFile/cmtyPub/011/111/111/088A982BEA84.png "点击放大")

电脑菜单宽度根据内容自适应，默认最小宽度 224vp，可配置菜单最小宽度，但不得低于 64vp

### 开发文档

[Menu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-menu)

[bindMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#bindmenu)

[bindContextMenu](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-menu#bindcontextmenu8)