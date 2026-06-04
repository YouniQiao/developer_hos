---
title: "学籍级联选择"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/cascading_selection-0000002364082736
---

## 场景介绍

学籍级联选择是教育类应用的典型场景之一，如用户在进入应用时通过选择学校、院系和毕业年份，完善个人信息设置，刷新首页后推荐相关课程内容。

本示例基于[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)构建多级菜单，使用[ForEach](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-rendering-control-foreach)展示数据，并通过[ListItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem)的点击事件实现每一级唯一选择的级联效果。

## 效果预览

![](./img/43434906.gif "点击放大")

## 实现思路

1. 点击首列菜单时将变量isSelectedSchool置为true，表示首列菜单已被选择。

   ```
   ListItem() {}
   .onClick(() => {
       this.isSelectedSchool = true;
       this.departmentList = item.department;
   })
   ```

2. 当isSelectedSchool为true时，展示次列菜单。

   ```
   if (this.isSelectedSchool === true) {
     DepartmentView({
       item: item
     })
   }
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                // 代码区
│  ├──common
│  │  └──Constants.ets               // 常量
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──ItemModel.ets               // 数据模型
│  ├──pages
│  │  ├──MainPage.ets                // 主页
│  │  └──SelectionPage.ets           // 选择页
│  ├──utils
│  │  └──Logger.ets                  // 日志工具类
│  └──views
│     ├──InfoView.ets                // 数据视图
│     └──SelectionView.ets           // 级联选择视图
└──entry/src/main/resources          // 应用资源目录
```

## 参考文档

[List](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-list)

[ForEach](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-rendering-control-foreach)

[ListItem](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-listitem)

## 代码下载

[学籍级联选择示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205164926.18114882206971295331490589044613%3A50001231000000%3A2800%3A0B890A945E1031D3FE15FF5DA4E46A98ACBFFD8A19F1D719465DD108995934AF.zip?needInitFileName=true)
