---
title: "级联菜单选择"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/cascading_menu_selection-0000002274600681
---

## 场景介绍

级联菜单选择是便捷生活类应用的典型使用场景之一，如用户在进行按类选择、分类筛选等操作时需要直观看到父子级品类的递进关系与平级品类的并列关系。

本示例使用[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件构成三级菜单，使用[@Observed装饰器和@ObjectLink装饰器](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink)实现点击按钮时菜单状态的实时刷新，最后使用[CustomDialog](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-custom-dialog-box)展示已选择物品。

## 效果预览

![](./img/fe349291.png)

## 实现思路

1. 导入json数据并用三级嵌套类对象存储。
2. 平行[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)组件基于对象数组循环渲染，定义全选按钮逻辑。
3. 存储已选择物品名称，通过弹窗展示已选择物品。

```
// 获取顶层菜单数据
this.primaryMenuItemList = DataManager.getPrimaryMenuData();
List({ scroller: this.primaryListScroll }) {
  // 顶部全选按钮逻辑特殊处理
  ListItem() {
  }
  // 基于对象数组循环渲染
  ForEach(this.primaryMenuItemList, (item: PrimaryMenuItem) => {
    ListItem() {
    }
    .onClick(() => {
      // 获取下级菜单数据
      this.secondLevelMenuItemList = item.secondMenu;
    })
  })
}
// 存储已选择物品
this.selectedItems.push(item.name);
// 打开弹窗展示已选择物品
this.dialogController.open();
```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                             // 代码区
│  ├──common
│  │  ├──Constant.ets                             // 常量
│  │  └──DataManager.ets                          // 数据管理
│  ├──components
│  │  ├──BottomBar.ets                            // 底部弹窗控制组件
│  │  ├──ItemsSelectedDialog.ets                  // 已选弹窗
│  │  ├──PrimaryMenuItem.ets                      // 一级菜单
│  │  ├──SecondLevelMenuItem.ets                  // 二级菜单
│  │  ├──ThirdLevelMenuItem.ets                   // 三级菜单
│  │  └──WholeMenu.ets                            // 级联选择菜单组件
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──SelectionPage.ets                        // 首页
└──entry/src/main/resources                       // 应用资源目录
```

## 参考文档

[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)

[自定义弹窗(CustomDialog)](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-methods-custom-dialog-box)

[@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink)

## 代码下载

[级联菜单选择示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260310114504.75535193812739806232189194978377%3A20260604121908%3A2800%3AB07C2C38B698A53DF58593A1DB01F412894DE495E1D0FF4CF0B5D2128D53BEB7.zip?needInitFileName=true)
