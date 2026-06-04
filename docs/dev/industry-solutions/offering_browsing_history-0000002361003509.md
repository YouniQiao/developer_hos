---
title: "商品浏览记录存储"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/offering_browsing_history-0000002361003509
---

## 场景介绍

商品浏览记录存储是购物比价类应用的高频使用场景之一。

本示例基于[PersistentStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-persiststorage)与[AppStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-appstorage)将数据进行持久化处理，实现商品浏览记录存储。

## 效果预览

![](./img/dc07baff.png "点击放大")

## 实现思路

* 利用[AppStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-appstorage)实现对商品浏览记录全局的UI状态存储，使得浏览记录页数组可以被主页改变。

  ```
  // 初始化数组
  @StorageLink('historyArr') historyArr: FoodInfo[] = [];
  // 操作逻辑
  if (AppStorage.get('historyArr') === undefined) {
    let historyArr: FoodInfo[] = [];
    historyArr.unshift(this.info);
    AppStorage.setOrCreate('historyArr',historyArr);
    }else {
    // ...
  }
  this.pageInfos.pushPathByName('ProductDetails', this.info, true);
  ```

* 通过[PersistentStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-persiststorage)对AppStorage定义的变量进行持久化数据存储，使得下次进入应用时数据仍然存在。

  ```
  PersistentStorage.persistProp('historyArr',undefined);
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                     // 代码区
│  ├──components
│  │  ├──CardInfoCom.ets                  // 商品列表组件
│  │  ├──ContentFlowCom.ets               // 内容滑动组件
│  │  ├──MyFootprints.ets                 // 我的足迹页
│  │  └──ProductDetails.ets               // 商品详情页
│  ├──entryability
│  │  └──EntryAbility.ets
│  ├──entrybackupability
│  │  └──EntryBackupAbility.ets
│  ├──model
│  │  └──FoodInfoModel.ets                // 商品信息模型
│  ├──pages
│  │  └──Pages.ets                        // 主页面
│  └──utils
│     └──Logger.ets                       // 日志打印工具
└──entry/src/main/resources               // 应用资源目录
```

## 参考文档

[PersistentStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-persiststorage)

[AppStorage](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-appstorage)

## 代码下载

[商品浏览记录存储示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260317190848.52436018656368181693078979876764%3A20260604153257%3A2800%3A3FAC870471F1B493601AB94D5E72A7187007AD089A151485A8F41189FD797453.zip?needInitFileName=true)
