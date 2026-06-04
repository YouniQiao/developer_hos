---
title: "多级组织架构菜单"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/organization_structure-0000002388806441
---

## 场景介绍

多级组织架构菜单是综合办公类应用的高频使用场景之一，如用户可依次点击查看不同部门的层级结构。

本示例基于双[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)联动实现多级组织架构菜单的功能，支持点击某一项进入下一级列表，点击上方目录回退到任一父级列表。

## 效果预览

![](./img/2a908a56.webp "点击放大")

## 实现思路

1. 定义嵌套数据类。

   ```
   export class Structure {
     // ...
     sonStructure: Structure[];
   }
   ```
2. 水平方向[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)定义当前所在目录。

   ```
   List() {
     ForEach(this.selectedStructure, (item: Structure, index: number) => {
       ListItem() {
         Text(item.name)
           .onClick(() => {
             do {
               this.selectedStructure.pop(); // 根据回退层级弹出结构名
             } while (this.selectedStructure.length - 1 > index)
           })
       }
     })
   }
   .listDirection(Axis.Horizontal)
   ```
3. 垂直方向List展示当前层级结构。

   ```
   List() {
     ForEach(this.menuItemList, (item: Structure) => {
       ListItem() {
         Row() {}
         .onClick(() => {
           if (this.level > 1) {
             this.menuItemList = item.sonStructure; // 进入下一级组织架构列表
           }
         })
       }
     })
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  ├──MenuData.ets              // 组织架构数据
│  │  └──MenuModel.ets             // 列表项模型
│  └──page
│     └──StructurePage.ets         // 组织架构菜单页面
└──entry/src/main/resources        // 应用资源目录
```

## 参考文档

[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)

## 代码下载

[多级组织架构菜单示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164305.79590092382843706012124516855201%3A50001231000000%3A2800%3A66B61B65C71FAEE00794AA8EACB2A314206A9A1483C55A5E19E8F11BF9F55D5E.zip?needInitFileName=true)
