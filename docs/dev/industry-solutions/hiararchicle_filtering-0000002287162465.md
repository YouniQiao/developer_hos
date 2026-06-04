---
title: "Grid与Flex布局实现多级标签并行筛选"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/hiararchicle_filtering-0000002287162465
---

## 场景介绍

多级标签并行筛选是影音娱乐类应用中高频场景之一，如在设计资源库、影音播放、小说阅读和外卖美食等平台浏览时，用户希望根据标签筛选到所需的资源。

本示例主要基于[Flex](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-flex-layout)和[Grid、GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-grid)等UI组件的综合使用，以及对资源数据结构和资源筛选逻辑的设计实现了对多标签资源进行多层筛选的功能。

## 效果预览

![](./img/b475a359.png "点击放大")

## 实现思路

1. 设计并实现与资源标签对应的按钮和图片资源的数据结构。
2. 综合使用UI组件包括[Grid、GridItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-grid)和[Flex](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-flex-layout)等实现筛选页面和图片展示页面。
3. 在filter()函数中通过两层循环实现多层筛选。
4. 通过[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)及其传参功能，实现点击图片跳转到图片预览页面。

```
// ButtonData.ets
export class SelectionButtonType{}     // 按钮抽象数据结构

// PhotoData.ets
export class  Photo {}                 // 图片资源抽象数据结构
export class DataManager {
  getPrimaryPhotoData(): Photo[] {}    // 从photo_item_list.json文件获取图片资源存入图片数组
}

// FilterPage.ets
struct SelectionButton {}              // 按钮组件
struct Tag {}                          // 标签组件
struct ItemView {}                     // 图片资源显示组件
struct FilterPage {                    // 资源多层筛选页面
  filter(){}                           // 根据类型过滤显示列表
  update(isclicked: boolean, button: NewButtonType){}      // 调用filter()更新显示的列表
}

// PreviewPage.ets
export struct ItemPage {}             // 图片预览页面
```

## 约束与限制

* 本示例支持API Version 16 Release及以上版本。

* 本示例支持HarmonyOS 5.0.4 Release SDK及以上版本。

* 本示例需要使用DevEco Studio 5.0.4 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                         // 代码区
│  ├──data
│  │  ├──ButtonData.ets                       // 按钮-抽象数据类型
│  │  └──PhotoData.ets                        // 图片-抽象数据类型
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     ├──FilterPage.ets                       // 资源多层筛选页
│     └──PreviewPage.ets                      // 图片预览页
└──entry/src/main/resources                   // 应用资源目录
```

## 参考文档

[弹性布局(Flex)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-flex-layout)

[创建网格(Grid/GridItem)](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-layout-development-create-grid)

[Navigation](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-basic-components-navigation)

## 代码下载

[Grid与Flex布局实现多级标签并行筛选示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317194125.29518566205799559831150934738422%3A20260604141331%3A2800%3A389D7FD35573DD70F84A8E224FC64FF9AECCC5891E86858DFB41C3366134A877.zip?needInitFileName=true)
