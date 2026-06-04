---
title: "酒店订单列表"
original_url: https://developer.huawei.com/consumer/cn/doc/architecture-guides/travel_checkin_order-0000002386506221
---

## 场景介绍

酒店订单列表是旅游园区类应用中的高频使用场景之一，如用户外出旅游时，可查看预订酒店的订单信息。

本示例基于自定义[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)、[@Observed和@ObjectLink状态管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink)实现按订单状态筛选切换的功能，支持订单状态更新。

## 效果预览

![](./img/2e17771d.gif "点击放大")

## 实现思路

* 通过自定义[Tab页](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)实现订单列表页按状态筛选切换的功能。

  ```
  Stack({ alignContent: Alignment.TopStart }) {
    // 通过List实现自定义的Tab栏
    List({ initialIndex: 0, scroller: this.scroller }) {
      // ...
    }

    // 通过Tabs组件实现页签切换的功能
    Tabs({ barPosition: BarPosition.Start, controller: this.tabsController }) {
      // ...
    }
  }
  ```
* 通过[@Observed和@ObjectLink状态管理](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink)实现订单状态更新功能。

  ```
  @Observed
  export class Order {
    // ...
  }

  @Component
  struct OrderContent {
    @ObjectLink order: Order;
    // ...
    // 点击对应按钮时，更新订单状态，同时刷新界面UI
  }
  ```

## 约束与限制

* 本示例支持API Version 20 Release及以上版本。
* 本示例支持HarmonyOS 6.0.0 Release SDK及以上版本。
* 本示例需要使用DevEco Studio 6.0.0 Release及以上版本进行编译运行。

## 工程目录

```
├──entry/src/main/ets                   // 代码区
│  ├──constants
│  │  └──CommonConstants.ets            // 通用常量
│  ├──entryability
│  │  └──EntryAbility.ets               // 程序入口类
│  ├──model
│  │  ├──CommonEnum.ets                 // 通用枚举
│  │  └──DataModel.ets                  // 数据模型
│  ├──pages
│  │  └──OrderPage.ets                  // 订单页
│  └──views
│     └──OrderView.ets                  // 订单列表视图
└──entry/src/main/resources             // 应用资源目录
```

## 参考文档

[Tabs](https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-container-tabs)

[@Observed装饰器和@ObjectLink装饰器：嵌套类对象属性变化](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-observed-and-objectlink)

## 代码下载

[酒店订单列表示例代码](https://alliance-communityfile-drcn.dbankcdn.com/FileServer/getFile/cmtyPub/011/111/111/0000000000011111111.20260205170248.80063946008889446166627183684229%3A50001231000000%3A2800%3A3C52EDF9B4EE4338621903C3425C8076F24DC48776D24EC37F67159EC95A3C26.zip?needInitFileName=true)
