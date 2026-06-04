---
title: "搜索历史展开与收起"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/search_history_expand_and_collapse-0000002343696461
---

## 场景介绍

搜索历史展开与收起是购物比价类应用中高频使用场景之一。

本示例基于ArkUI构建搜索页面，实现搜索历史的展开与收起功能。

## 效果预览

![](./img/7548d75b.gif "点击放大")

## 实现思路

1. 初始化状态变量，在aboutToAppear中计算搜索历史组件折叠状态下的最大高度maxHeight，并根据搜索历史数据量决定是否显示展开/收起按钮。

   ```
   aboutToAppear(): void {
     this.maxHeight = this.maxNumber * 50;
     this.heightControl = this.maxHeight;
     if (this.allData.length > 0) {
       if (this.maxNumber > 0) {
         // ...
       }
     }
   }
   ```
2. 触发点击事件，通过修改[Flex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex)容器constraintSize、clip参数，改变显示区域高度，实现展开/收起功能。

   ```
   .onClick(() => {
     if (this.heightControl === this.maxHeight) {
       this.heightControl = '100%';
     } else {
       this.heightControl = this.maxHeight;
     }
   Flex({ wrap: FlexWrap.Wrap }) {
     ForEach(
       // ...
     )
   }
   .constraintSize({ maxHeight: this.heightControl })
   .width(this.flexWidth)
   .clip(true)
   ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                 // 代码区
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  └──pages
│     └──SearchPage.ets               // 主页
└──entry/src/main/resources           // 应用资源目录
```

## 参考文档

[Flex](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-flex)

## 代码下载

[搜索历史展开与收起示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170138.91486512992455290694223845462745%3A50001231000000%3A2800%3AA9E1C90547927B035FD7061D6B45CDF7F4445A9F23E277FAAD1E3B2AB412F98F.zip?needInitFileName=true)
